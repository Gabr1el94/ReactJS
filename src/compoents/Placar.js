import React from 'react';

import Partida from './Partida';
import Time from './Time';

export default class PlacarContainer extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <div style={{ float: "left", "marginRight": "10px" }}>
                    <h3>Casa</h3>
                    <Time />
                </div>

                <div style={{ float: "left" }}>
                    <Partida />
                </div>

                <div style={{ float: "left" }}>
                    <h3>Visitante</h3>
                    <Time />
                </div>

                <div style={{clear:"both"}}></div>

            </div>
        );
    }

}