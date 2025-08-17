import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StreamPlayerProps {
  streamUrl?: string;
  title?: string;
  className?: string;
}

export const StreamPlayer: React.FC<StreamPlayerProps> = ({
  streamUrl = "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Fallback video
  title = "Live Stream",
  className
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const togglePlay = async () => {
    if (!videoRef.current) return;
    
    setIsLoading(true);
    try {
      if (isPlaying) {
        await videoRef.current.pause();
        setIsPlaying(false);
      } else {
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing video:', error);
    }
    setIsLoading(false);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Card className={cn("glass-card relative overflow-hidden group", className)}>
      <div className="relative bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300bcd4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad)'/%3E%3Ctext x='960' y='540' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='72' font-weight='bold'%3E🎥 Live Stream Ready%3C/text%3E%3C/svg%3E"
          onMouseMove={handleMouseMove}
          onLoadedData={() => setIsLoading(false)}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => setIsLoading(false)}
        >
          <source src={streamUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Controls overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300",
            showControls ? "opacity-100" : "opacity-0"
          )}
          onMouseMove={handleMouseMove}
        >
          {/* Play button overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={togglePlay}
                className="h-20 w-20 rounded-full glow-primary"
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
          )}

          {/* Bottom controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlay}
                className="text-white hover:text-primary"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="text-white hover:text-primary"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
              <span className="text-white text-sm font-medium">{title}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-primary"
              >
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="text-white hover:text-primary"
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Live indicator */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            LIVE
          </div>
        </div>
      </div>
    </Card>
  );
};