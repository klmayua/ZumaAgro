"use client";

import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import MetricsDashboard from './components/MetricsDashboard';
import SiteFooter from './components/SiteFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      <HeroSection />
      <ValueProposition />
      <MetricsDashboard />
      <SiteFooter />
    </div>
  );
}