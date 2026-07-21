import React from 'react';
import {useCurrentFrame} from 'remotion';

type Props = {
  bars?: number;
  width?: number;
  height?: number;
  color: string;
  active?: boolean;
  seed?: number;
};

// petites barres audio animees (produit de deux sinus pour un mouvement pas regulier).
// se fige quasi a plat quand active = false.
export const Waveform: React.FC<Props> = ({
  bars = 12,
  width = 140,
  height = 34,
  color,
  active = true,
  seed = 0,
}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 4, width, height}}>
      {Array.from({length: bars}, (_, i) => {
        const wobble =
          Math.abs(Math.sin(frame * 0.35 + i * 1.3 + seed * 7)) *
          Math.abs(Math.sin(frame * 0.13 + i * 0.7 + seed * 3));
        const h = active ? 4 + wobble * (height - 4) : 4;
        return (
          <div
            key={i}
            style={{
              width: (width - 4 * (bars - 1)) / bars,
              height: h,
              backgroundColor: color,
            }}
          />
        );
      })}
    </div>
  );
};
