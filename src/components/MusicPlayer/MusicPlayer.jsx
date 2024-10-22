import React, { useEffect, useRef, useState } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import { playlist } from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playlist));
  const [promise, setPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current.play();
      setPromise(promise);
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]);

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <button onClick={() => setIsPlaying(false)}>pause</button>
      ) : (
        <button onClick={() => setIsPlaying(true)}>play</button>
      )}
      <button>shuffle</button>

      <audio ref={playerRef} src={playlist[currentSong]}></audio>
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
