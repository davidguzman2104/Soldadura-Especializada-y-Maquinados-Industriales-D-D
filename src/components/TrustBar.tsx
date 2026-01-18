import { useEffect, useState, useRef } from 'react';
import { Calendar, CheckCircle, Target, Clock } from 'lucide-react';

const metrics = [
  { icon: Calendar, value: 15, suffix: '+', label: 'Años de experiencia', prefix: '' },
  { icon: CheckCircle, value: 500, suffix: '+', label: 'Proyectos entregados', prefix: '' },
  { icon: Target, value: 0.05, suffix: ' mm', label: 'Tolerancias hasta ±', prefix: '' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Atención para urgencias', prefix: '' },
];

const AnimatedCounter = ({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = Number.isInteger(value) ? Math.floor(count) : count.toFixed(2);

  return (
    <span ref={ref} className="metric-value">
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const TrustBar = () => {
  return (
    <section className="relative z-10 -mt-16 md:-mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-elevated p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
