import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {theme} from '../theme';

// fond sombre avec une grille qui derive doucement + un halo au centre.
// jamais un aplat plat, jamais criard. c'est la base de toutes mes scenes.
export const Backdrop: React.FC<{children?: React.ReactNode}> = ({children}) => {
  const frame = useCurrentFrame();
  const shift = (frame * 0.4) % 80;

  return (
    <AbsoluteFill style={{backgroundColor: theme.bg}}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${theme.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.border} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: `${shift}px ${shift}px`,
          opacity: 0.12,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(60% 60% at 50% 42%, ${theme.bg2} 0%, transparent 70%)`,
        }}
      />
      {children}
    </AbsoluteFill>
  );
};
