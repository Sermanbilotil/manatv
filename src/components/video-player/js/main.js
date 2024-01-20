
import { translateWorld, addSubtitles, toggleSubtitle, playerControls } from './functions';
import { qualityButtonComponent, nextButtonComponent, subtitlesComponent, seasonComponent, textTranslate, playerHelper } from"./components"; 
import { resizeEventListener} from "./helpers";

const isMobile = window.outerWidth < 480

export class CustomVideoPlayer {
  constructor(videoPlayer, videojs) {
    this.videoPlayer = videoPlayer;
    this.videojs = videojs;
  }

  initialize() {
    const closeButton = document.getElementById('video-close-button');
    this.videoPlayer.on("userinactive", function() {
      closeButton.style.opacity = '0'
    });
    
    this.videoPlayer.on("useractive", function() {
      closeButton.style.opacity = '1'
    });

    // Video controls
    playerControls({videoPlayer: this.videoPlayer, isMobile})
    
    // Rounding of speed values to 2 decimal places
    const menuItemText = document.querySelectorAll('.vjs-playback-rate .vjs-menu-item-text')
    for (let i = 0; i < menuItemText.length; i++) {
      const speedToFixed = Number(menuItemText[i].innerHTML.slice(0, -1)).toFixed(2)
      menuItemText[i].innerHTML = speedToFixed;  
    }

    let following = false
    const playbackRateButton = this.videoPlayer?.controlBar.playbackRateMenuButton;

    playbackRateButton.on(isMobile ? 'touchstart' : 'click', function() {
      const tooltip = playbackRateButton.el().querySelector('.vjs-menu');
      tooltip.classList.add(!following ? 'vjs-lock-showing' : 'vjs-hidden');
      tooltip.classList.remove(!following ? 'vjs-hidden' : 'vjs-lock-showing');
      following ^= true
    });


    // Create a custom component for the quality switch button
    const qualityButtonWrapper = document.createElement('div');
    qualityButtonComponent({videoPlayer: this.videoPlayer, qualityButtonWrapper})

    // on blur speed/quality/subtitles 
    document.addEventListener('click', function(event) {
      const target = event.target;
      const isPlaybackRateButton = target.closest('.vjs-playback-rate');
      const isPlaybackResolutionButton = target.closest('.vjs-resolution-button-wrapper');
      const isPlaybackSubtitlesButton = target.closest('.vjs-subtitles-button');
      const isPlaybackSeasonButton = target.closest('.vjs-title-wrapper.vjs-menu-button');
      if (!isPlaybackRateButton) {
        following = false
      }
      
      if (!isPlaybackSubtitlesButton) {
        const element = this.videoPlayer?.controlBar.el()?.querySelector('.vjs-subtitles-button .vjs-menu');
        element?.classList.add('vjs-hidden');
        element?.classList.remove('vjs-lock-showing');
      }

      if (!isPlaybackSeasonButton) {
        const element = this.videoPlayer?.controlBar.el()?.querySelector('.vjs-title-wrapper.vjs-menu-button');
        const menu = element?.querySelector('.vjs-menu');
        element?.classList.toggle('active', false)
        menu?.classList.add('vjs-hidden');
        menu?.classList.remove('vjs-lock-showing');
      }

      if (!isPlaybackResolutionButton) {
        const element = qualityButtonWrapper?.querySelector('.vjs-resolution-button-wrapper .vjs-menu');
        element?.classList.add('vjs-hidden');
        element?.classList.remove('vjs-lock-showing');
      }
    });

    // Custom translate visuals
    this.videoPlayer.on('timeupdate', function() {
      textTranslate()
    });

    window.videoPlayer = this.videoPlayer;

    // Hover effect in word
    let wordIdHash;
    const handleMouseEnter = function(event) {
      const wordContainerElement = event.currentTarget;
      if (wordContainerElement) {
        this.pause();

        const word = wordContainerElement.getElementsByClassName('word')[0].innerHTML;
        const isDuplicate = wordIdHash === `${word}-${event.currentTarget.dataset.index}`;
        const isAlreadyTranslated = wordContainerElement.getElementsByClassName('translation')[0].innerHTML;
        wordContainerElement.classList.add('active');

        if (!isDuplicate) {
          if (!isAlreadyTranslated) {
            translateWorld({ wordContainerElement, word, isMobile });
            wordIdHash = `${word}-${event.currentTarget.dataset.index}`;
          }

          // Fix output tooltip beyond the screen
          const divElement = wordContainerElement.getElementsByClassName('tooltip')[0];
          resizeEventListener({ divElement });
        }
      }
    };

      const handleMouseLeave = function(event, wordContainerElement) {
        setTimeout(() => {
          const wordContainerElements = document?.getElementsByClassName('word-container');
          const isCursorOverWord = Array.from(wordContainerElements).some(item => item.classList.contains('active'));

          if (!isCursorOverWord) {
            this.play();
          }
        }, 300);

        wordContainerElement.currentTarget.classList.remove('active');
        // wordIdHash = '';
      };

      this.videoPlayer.on('timeupdate', function() {
        const wordContainerElements = document?.getElementsByClassName('word-container');
        for (let i = 0; i < wordContainerElements.length; i++) {
          wordContainerElements[i].addEventListener('mouseenter', handleMouseEnter.bind(this));
          wordContainerElements[i].addEventListener('mouseleave', handleMouseLeave.bind(this, wordContainerElements[i]));
          wordContainerElements[i].dataset.index = i;
        }
      })

      // Helper
      playerHelper({videoPlayer: this.videoPlayer, isMobile})

      // Subtitles button 
      subtitlesComponent({videoPlayer: this.videoPlayer})
    }

    // Subtitles tracks 
    subtitleInitialize(tracks) {
      this.videoPlayer.on('loadedmetadata', () => {
          tracks.forEach(track => {
            addSubtitles({
              videoPlayer: this.videoPlayer,
              src: track.src,
              srclang: track.srclang,
              label: track.label,
              default: track?.default
            });
          });
      
          // Select default language => en
          const controlSubtitlesTextChecked = localStorage.getItem('subtitles-control-text-checked') || 'en'

          controlSubtitlesTextChecked.split('+').forEach(language => {
            toggleSubtitle({videoPlayer: this.videoPlayer, language, toggle: true})
          });
    });
  }
  
  handleTranslationDictionaryClick({onClick}) {
    if (onClick) {
      document.addEventListener('translationDictionaryClicked', (event) => {
        onClick(event.detail)
      });
    }
  }

  // Season initialize 
  seasonInitialize ({titleSeason, titleSeries, seasonPrev , seasonNext, seriesData}) {
    seasonComponent({videoPlayer: this.videoPlayer, videojs: this.videojs, seriesData, titleSeason, titleSeries, seasonPrev , seasonNext})
  }

  // Next button
  nextButton (callback) {
    nextButtonComponent(this.videoPlayer, callback)
  }
}

