import React, { useContext, useEffect, useRef, useState } from "react";
import { playlist } from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils";
import {
  PlayIcon,
  PauseIcon,
  ShuffleIcon,
  MusicPlayerWrapper,
} from "./MusicPlayer.styled";
import { SfxContext } from "../../contexts/SfxContext";
import {Text} from "../../styles/General.styled";

function MusicPlayer() {
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playlist));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current.play();
      setPlayPromise(promise);
      if(playerRef.current?.volume) 
        playerRef.current.volume = 0.2
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]); // eslint-disable-next-line

  const shuffleHandler = async () => {
    clickSfx();
    setIsPlaying(false);
    await playPromise.then(() => {
      playerRef.current.pause();
    });

    setCurrentSong(randomizeIndex(playlist));
    setIsPlaying(true);
  };

  const displaySong = playlist[currentSong].split("/")[6];

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(false);
          }}
          onMouseEnter={() => hoverSfx()}
        />
      ) : (
        <PlayIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(true);
          }}
          onMouseEnter={() => hoverSfx()}
        />
      )}
      <ShuffleIcon onClick={shuffleHandler} onMouseEnter={() => hoverSfx()} />

      <audio
        ref={playerRef}
        src={playlist[currentSong]}
        onEnded={shuffleHandler}
      ></audio>
      <Text>{displaySong}</Text>
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
