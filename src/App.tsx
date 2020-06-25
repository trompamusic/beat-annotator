import React from 'react';
import WaveSurfer from 'wavesurfer.js';

export default class App extends React.Component<any, any> {
    private wavesurfer: any;

    loadWavesurfer = () => {
        console.debug("Loading...");
        this.wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });
        this.wavesurfer.load("/sine.wav");
    }

    play = () => {
        this.wavesurfer.play();
    }

    stop = () => {
        this.wavesurfer.stop();
    }

    render() {
        return (
            <div id="app">
                <button onClick={this.loadWavesurfer}>Load</button>
                <button onClick={this.play}>Play</button>
                <button onClick={this.stop}>Stop</button>
                <div id="waveform"></div>
            </div>
        );
    }
}