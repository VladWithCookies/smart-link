import * as yup from 'yup';

import { STREAMINGS } from 'constants';
import { SPOTIFY_URL_REGEX, APPLE_MUSIC_URL_REGEX, YT_MUSIC_URL_REGEX } from 'constants/regex';

export default yup.object({
  services: yup
    .array()
    .of(yup.object({
      url: yup
        .string()
        .when('name', {
          is: STREAMINGS.SPOTIFY,
          then: yup
            .string()
            .matches(SPOTIFY_URL_REGEX, 'Invalid Spotify URL')
        })
        .when('name', {
          is: STREAMINGS.APPLE_MUSIC,
          then: yup
            .string()
            .matches(APPLE_MUSIC_URL_REGEX, 'Invalid Apple Music URL')
        })
        .when('name', {
          is: STREAMINGS.YT_MUSIC,
          then: yup
            .string()
            .matches(YT_MUSIC_URL_REGEX, 'Invalid YT Music URL')
        })
        .required('Required')
    }))
});
