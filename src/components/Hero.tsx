import React from 'react';
import { Button } from '@/components/ui/button';
import { StreamPlayer } from './StreamPlayer';
import { Radio, Users, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Live
            <span className="text-gradient"> Streaming</span>
            <br />
            Experience
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch high-quality RTSP streams with our modern, responsive video player. 
            Experience seamless streaming with crystal-clear video quality.
          </p>
        </div>

        {/* Main video player */}
        <div className="max-w-5xl mx-auto mb-16">
          <StreamPlayer 
            title="Main Live Stream"
            className="w-full"
            streamUrl="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
          />
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 text-center group hover:glow-primary transition-smooth">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
              <Radio className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">RTSP Support</h3>
            <p className="text-muted-foreground">
              Native support for RTSP streams with automatic format conversion for web compatibility
            </p>
          </div>

          <div className="glass-card p-6 text-center group hover:glow-accent transition-smooth">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
              <Users className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multi-Viewer</h3>
            <p className="text-muted-foreground">
              Support for multiple concurrent viewers with optimized bandwidth usage
            </p>
          </div>

          <div className="glass-card p-6 text-center group hover:glow-primary transition-smooth">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ultra Low Latency</h3>
            <p className="text-muted-foreground">
              Minimize delay between capture and playback for real-time streaming experience
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Streaming?</h2>
            <p className="text-muted-foreground mb-6">
              Enter your RTSP URL below to begin streaming your content instantly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="url"
                placeholder="rtsp://your-stream-url.com/stream"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <Button variant="hero" size="lg">
                Connect Stream
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};