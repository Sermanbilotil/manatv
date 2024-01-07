import React, { useEffect, useState } from 'react';
import videojs from 'video.js';
import { CustomVideoPlayer } from '../video-player/js/main';

export const VideoJS = (props) => {
  const [firstLoad, setFirstLoad] = useState(false)
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const customVideoPlayerRef = React.useRef(null);
  const {options, season, onReady} = props;


  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

      const customVideoPlayer = new CustomVideoPlayer(player, videojs);
      customVideoPlayerRef.current = customVideoPlayer;

      customVideoPlayer.initialize();

    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, onReady]);


  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);


  React.useEffect(() => {
    if (options.tracks) {
      customVideoPlayerRef.current.subtitleInitialize(options.tracks);
    }
  }, [options.tracks]);

  React.useEffect(() => {
    if (season) {
      customVideoPlayerRef.current.seasonInitialize(season);
    }
  }, [season]);

  return (
    <div id="wrapper">
      <a id="video-close-button" href=""></a>
      <div data-vjs-player>
        <div ref={videoRef} />
      </div>
    </div>

  );
}

export default VideoJS;
