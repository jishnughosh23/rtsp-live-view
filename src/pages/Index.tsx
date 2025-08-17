import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main className="pt-16">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
