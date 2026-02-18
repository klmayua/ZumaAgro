"use client";

import { useState, useEffect } from 'react';

export default function MetricsDashboard() {
  const [metrics, setMetrics] = useState([
    { label: "Cattle Under Management", value: 0, target: 5000 },
    { label: "Hectares Cultivated", value: 0, target: 10000 },
    { label: "Annual Grain Production", value: 0, target: 25000 },
    { label: "Bee Colonies", value: 0, target: 2500 }
  ]);

  useEffect(() => {
    // Animate counters
    const timer = setInterval(() => {
      setMetrics(prevMetrics => 
        prevMetrics.map(metric => ({
          ...metric,
          value: metric.value < metric.target 
            ? Math.min(metric.value + Math.ceil(metric.target / 50), metric.target)
            : metric.target
        }))
      );
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-forest-green text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Impact In Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-sun-gold">
                {metric.value.toLocaleString()}+
              </div>
              <div className="text-lg">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}