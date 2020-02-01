import React from 'react';
import { action } from '@storybook/addon-actions';

import Song from './Song';

export default {
  component: Song,
  title: 'Song',
  excludeStories: /.*Data$/,
};

export const songData = {
  _id: 1,
  title: 'Into your sanctuary',
  lyrics: 'Into your sanctuary we come to adore you, Lord',
  liked: 'SONG_LIKED',
  saved: 'SONG_SAVED',
  uploader: 'parousia',
  ocassion: 'sacred',
  genre: 'hymn',
  voicing: 'SATB',
  tempo: '70 BPM',
  timing: '4/4',
  scripture: 'John 3.16',
  season: [ 'ordinary time', 'christmas' ],
  language: 'igbo',
  masspart: [ 'communion' ],
  authors: [ 'thomas aquinas', 'some author' ],
  composed: '1895',
  uploadedAt: new Date(),
  modifiedAt: new Date(),
};

export const actionsData = {
  onLikeSong: action('onLikeSong'),
  onSaveSong: action('onSaveSong'),
};

export const Default = () => {
  return <Song song={{ ...songData }} {...actionsData} />;
};

export const Liked = () => (
  <Song song={{ ...songData, liked: 'SONG_LIKED' }} {...actionsData} />
);
export const Saved = () => (
  <Song song={{ ...songData, saved: 'SONG_SAVED' }} {...actionsData} />
);
