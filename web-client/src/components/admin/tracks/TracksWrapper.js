import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-grid-system';
import TracksListItem from './TracksListItem';
import AddTrackBtn from './AddTrackBtn';
import AddTrackForm from './AddTrackForm';
import { useTracks } from '../../../utils/useTracks';

function TracksWrapper({ cup }) {
    const { getByCup, addNewTrack } = useTracks();
    const [tracks, setTracks] = useState([]);
    const [creating, setCreating] = useState(false);

    useEffect(() => {
        setCreating(false);
        setTracks(getByCup(cup.id));
    }, [cup]);

    const addTrack = (track) => {
        addNewTrack(track);
        setTracks([...tracks, track]);
    };

    return creating ? (
        <Row justify="center">
            <Col xs={12} md={8} lg={6}>
                <h1>Ajouter une circuit</h1>
                <AddTrackForm
                    setCreating={setCreating}
                    cupId={cup.id}
                    addTrack={addTrack}
                />
            </Col>
        </Row>
    ) : (
        <>
            <h1>Circuits de la coupe {cup.name}</h1>

            <Row>
                {tracks.map((track) => (
                    <TracksListItem key={track.id} track={track} />
                ))}

                {tracks.length < 4 &&
                    [...Array(4 - tracks.length)].map((i, index) => (
                        <AddTrackBtn key={index} setCreating={setCreating} />
                    ))}
            </Row>
        </>
    );
}

export default TracksWrapper;
