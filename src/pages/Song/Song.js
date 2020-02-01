import React from 'react';
import PropTypes from 'prop-types';

const Song = props => {
  const { song, onLikeSong, onSaveSong } = props;
  const { title, lyrics } = song;
  return (
    <div className="uk-container uk-container-xsmall">
      <h2>{title}</h2>
      <p>{lyrics}</p>
    </div>
  );
};

Song.propTypes = {
  song: PropTypes.object,
  onLikeSong: PropTypes.func,
  onSaveSong: PropTypes.func,
};
export default Song;
