import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const VideoDemo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; // Dummy video URL

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVolume = (e) => {
    videoRef.current.volume = e.target.value;
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 font-serif font-2xl">Video Demo</h2>
      <div className="relative w-full max-w-4xl group">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg"
          src={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 flex items-center justify-between p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={handleBackward} className="p-2 hover:text-gray-400">
            <FaBackward />
          </button>
          <button onClick={handlePlayPause} className="p-2 hover:text-gray-400">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleForward} className="p-2 hover:text-gray-400">
            <FaForward />
          </button>
          <button onClick={handleMute} className="p-2 hover:text-gray-400">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue="1"
            onChange={handleVolume}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDemo;
