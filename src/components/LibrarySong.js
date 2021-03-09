import React from 'react';

const LibrarySong = ({ songs }) => {
    return (
        <div className="library-song">
            <img alt={ songs.name } src={ songs.cover }></img>
            <div className="song-description">
                <h3>{ songs.name }</h3>
                <h4>{ songs.artist }</h4>
            </div>
        </div>
    );
};

export default LibrarySong;