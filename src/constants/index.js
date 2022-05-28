import { values } from 'ramda';

import SpotifyIcon from '../../public/images/spotify.svg';
import AppleMusicIcon from '../../public/images/apple-music.svg';
import YouTubeMusicIcon from '../../public/images/youtube-music.svg';

export const STREAMINGS = {
  SPOTIFY: 'Spotify',
  APPLE_MUSIC: 'Apple Music',
  YT_MUSIC: 'YT Music'
};

export const STREAMING_SERVICE_OPTIONS = values(STREAMINGS);

export const SERVICE_ICONS = {
  [STREAMINGS.SPOTIFY]: SpotifyIcon,
  [STREAMINGS.APPLE_MUSIC]: AppleMusicIcon,
  [STREAMINGS.YT_MUSIC]: YouTubeMusicIcon
};
