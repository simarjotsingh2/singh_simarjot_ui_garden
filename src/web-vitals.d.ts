// src/web-vitals.d.ts
declare module 'web-vitals' {
  export function getCLS(onPerfEntry?: (metric: CLSMetric) => void): void;
  export function getFID(onPerfEntry?: (metric: FIDMetric) => void): void;
  export function getFCP(onPerfEntry?: (metric: FCPMetric) => void): void;
  export function getLCP(onPerfEntry?: (metric: LCPMetric) => void): void;
  export function getTTFB(onPerfEntry?: (metric: TTFBMetric) => void): void;

  interface CLSMetric {
    name: string;
    delta: number;
    value: number;
    id: string;
  }

  interface FIDMetric {
    name: string;
    delta: number;
    value: number;
    id: string;
  }

  interface FCPMetric {
    name: string;
    delta: number;
    value: number;
    id: string;
  }

  interface LCPMetric {
    name: string;
    delta: number;
    value: number;
    id: string;
  }

  interface TTFBMetric {
    name: string;
    delta: number;
    value: number;
    id: string;
  }
}
