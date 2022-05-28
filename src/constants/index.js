import { values } from 'ramda';

export const STREAMINGS = {
  SPOTIFY: 'Spotify',
  APPLE_MUSIC: 'Apple Music',
  YT_MUSIC: 'YT Music'
};

export const STREAMING_SERVICE_OPTIONS = values(STREAMINGS);
