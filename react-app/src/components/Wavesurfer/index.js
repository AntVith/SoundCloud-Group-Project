import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import './waveform.css'

const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "OrangeRed",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true
});

export default function Waveform({ urlGetter }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);


  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(`${urlGetter}`);

    wavesurfer.current.on("ready", function() {

      if (wavesurfer.current) {
        // wavesurfer.current.playPause()
        wavesurfer.current.getDuration()
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });


    return () => wavesurfer.current.destroy();
  }, [`${urlGetter}`]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };



  return (
    <>
    <div className='waveform-container'>
      <div id="waveform" ref={waveformRef} />
    </div>
      <div className="controls controls-position">
        <button className="play-pause-button" onClick={handlePlayPause}>{!playing ? <i class="fa-sharp fa-solid fa-play fa-3x"></i> : <i class="fa-sharp fa-solid fa-pause fa-3x"></i>}</button>
        {/* <input
          type="range"
          id="volume"
          name="volume"
          min="0.01"
          max="1"
          step=".025"
          onChange={onVolumeChange}
          defaultValue={volume}
        />
        <label htmlFor="volume">Volume</label> */}
      </div>
    </>
  );
}
