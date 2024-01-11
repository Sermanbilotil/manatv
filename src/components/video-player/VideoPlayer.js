import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import videojs from 'video.js';

import VideoJS from '../VideoJS/VideoJS';
import './css/styles.css'
import { api_url } from '../../utils/utils';

export const VideoPlayer = ({setActiveSeason,activeSeason, serialData, episodes, series,setSeries, id}) => {

  const playerRef = React.useRef(null);
  const [season, setSeason] = useState(null)


  const [videoJsOptions, setVideoJsOptions] = useState({
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.50, 0.60, 0.70, 0.80, 0.90, 1.00, 1.25, 1.50, 2.00],
    textTrackDisplay: {
      allowMultipleShowingTracks: true
    },
    html5: {
        nativeTextTracks: false,
        featuresNativeTextTracks: true,
    },
    textTrackSettings: false,
  })

  useEffect(() => {

    const tracks = activeSeason.season_series[series - 1].episode_subtitles.map((subtitle) => ({
      // no /api/ because the URL was updated
      src: subtitle.subtitles_file,
      srclang:  subtitle.language === 'Russian' ?   'ru' : subtitle.language,
      label: subtitle.language,
    }))

    setVideoJsOptions(prev => ({
      ...prev,
      sources: [{
        // no /api/ because the URL was updated
        src:  api_url + `tv-shows/${activeSeason.season_series[series - 1].id}/get_streaming_video`,
        type: 'video/mp4'
      }],
      tracks
    }))

    const processedSeriesData = processSeasons(serialData.tv_show_seasons);
    const { seasonPrev, seasonNext } = setSeasonData(serialData.tv_show_seasons, activeSeason);

    setSeason({
      titleSeason: `Season ${activeSeason.season_number}`,
      titleSeries: 'Series',
      seriesData: processedSeriesData,
      seasonPrev,
      seasonNext
    });

  }, [episodes])

  console.log('sd', serialData)

  function processSeasons(seasons) {
    const seriesData = [];
      console.log('processSeasons', seasons)
    seasons.forEach(season => {

      season.season_series.forEach(episode => {

        seriesData.push({
          name: episode.title,
          onClick: () => {
            setSeries(episode.episode_number)
          }
        });
      });
    });

    return seriesData;
  }

  function setSeasonData(seasons, currentSeasonNumber) {
    const seasonPrev = {};
    const seasonNext = {};

    const prevSeason = seasons.find(season => season.season_number === currentSeasonNumber - 1);
    const nextSeason = seasons.find(season => season.season_number === currentSeasonNumber + 1);


    if (prevSeason) {
      seasonPrev.title = `Season ${prevSeason.season_number}`;
      seasonPrev.onClick = () => {


      };
    }

    if (nextSeason) {
      seasonNext.title = `Season ${nextSeason.season_number}`;
      seasonNext.onClick = () => {

        console.log(`Clicked on ${seasonNext.title}`);
      };
    }

    return { seasonPrev, seasonNext };
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };





  return (
      <VideoJS options={videoJsOptions} season={season} onReady={handlePlayerReady} />
  );
}
