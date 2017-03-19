import React from 'react';
import SpotifyPlayer from 'react-spotify-player'

const PlaylistEmbed = (props) => {
  const size = {
    width: '100%',
    height: 280,
  };
  const view = 'list';
  const theme = 'white';
  return (
    <SpotifyPlayer
      uri="spotify:user:11168621671:playlist:71h1aCpVqrvnLqrq0oU8SC"
      size={size}
      view={view}
      theme={theme}
    />
  )
}

export default PlaylistEmbed;
