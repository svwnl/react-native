import {useState} from 'react';

export function useArtwork() {

    const [_artworks, _setArtworks] = useState(
        [
            {
                id: 0,
                canvas: [{colorKey: 3}, {colorKey: 2}, {colorKey: 1}, {colorKey: 0}]
            }
        ]
    );

    const [_selectedArtwork, _setSelectedArtwork] = useState(0)

    const getArtworks = () => {
        return _artworks;
    };

    const setArtwork = (canvas, artworkId) => {

        let artwork = {
            id: artworkId,
            canvas: canvas
        };

        let artworksArray = [..._artworks];
        artworksArray[artworkId] = artwork;
        _setArtworks(artworksArray);

        console.log(JSON.stringify(_artworks))
    };

    const getArtwork = () => {
        return _artworks[_selectedArtwork]
    };

    const clearArtwork = () => {
        _setArtworks([]);
    };

    const getSelectedArtwork = () => {
        return _selectedArtwork;
    }

    const setSelectedArtwork = (artWorkId) => {
        return _setSelectedArtwork(artWorkId)
    }

    return [setArtwork, getArtwork, clearArtwork, getArtworks, getSelectedArtwork, setSelectedArtwork];
}
