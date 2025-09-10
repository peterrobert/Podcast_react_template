import { useRef, useState } from "react";

type AppPlayerProps = {
  showPlayer: boolean;
  episode: {
    title: string;
    podcast: string;
    audioUrl: string;
    imageUrl: string;
  } | null;
};

const AppPlayer = ({ showPlayer, episode }: AppPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  if (!showPlayer || !episode) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  function formatTime(seconds: number) {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  return (
    <div
      id="mini-player"
      className={`fixed bottom-0 left-0 right-0 z-40 glass-surface border-t border-white/20 p-4 transition-transform duration-300
        ${showPlayer ? "translate-y-0" : "translate-y-full"}`}
    >
      <audio
        ref={audioRef}
        src={episode?.audioUrl}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-lg object-cover"
              src={episode.imageUrl}
              alt={episode.title}
            />
            <div>
              <div className="font-semibold text-sm">{episode?.title}</div>
              <div className="text-xs text-slate-400">
                {episode?.podcast}• EchoWave
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-white/10 transition-all">
              <i className="fas fa-backward text-sm"></i>
            </button>
            {isPlaying === false ? (
              <button
                onClick={() => {
                  togglePlay();
                }}
                className="bg-gradient-to-r from-violet-600 to-orange-500 p-3 rounded-full hover:opacity-95 transition-all"
              >
                <i className="fa-solid fa-play"></i>
              </button>
            ) : (
              <button
                onClick={() => {
                  togglePlay();
                }}
                className="bg-gradient-to-r from-violet-600 to-orange-500 p-3 rounded-full hover:opacity-95 transition-all"
              >
                <i className="fa-solid fa-pause"></i>
              </button>
            )}

            <button className="p-2 rounded-full hover:bg-white/10 transition-all">
              <i className="fas fa-forward text-sm"></i>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="text-xs text-slate-400">
              {" "}
              {formatTime(progress)} / {formatTime(duration)}
            </div>
            <div className="w-32 bg-white/20 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-violet-400 to-orange-400 h-1 rounded-full"
                style={{ width: `${(progress / duration) * 100 || 0}%` }}
              ></div>
            </div>
            <button className="p-2 rounded-full hover:bg-white/10 transition-all">
              <i className="fas fa-volume-high text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPlayer;
