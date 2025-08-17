import React from 'react';
import { Button } from '@/components/ui/button';
import { Video, Menu, Settings, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Video className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-gradient">StreamFlow</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Live Streams
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Browse
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            About
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="outline">
            <User className="h-4 w-4" />
            Login
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};