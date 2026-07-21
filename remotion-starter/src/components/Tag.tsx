import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme, fonts} from '../theme';

// petit marqueur de chapitre en haut a gauche, style hud.
// il glisse depuis la gauche au debut de chaque scene: repere visuel + ca structure la video.
export const Tag: React.FC<{index: string; label: string}> = ({index, label}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame: frame - 4, fps, config: {damping: 14}});

  return (
    <div
      style={{
        position: 'absolute',
        top: 56,
        left: 64,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        transform: `translateX(${interpolate(s, [0, 1], [-320, 0])}px)`,
        opacity: s,
      }}
    >
      <div style={{width: 14, height: 14, backgroundColor: theme.accent}} />
      <div style={{fontFamily: fonts.mono, fontSize: 22, color: theme.accent, letterSpacing: 3}}>
        {index}
      </div>
      <div style={{fontFamily: fonts.mono, fontSize: 22, color: theme.dim, letterSpacing: 4}}>
        {label}
      </div>
    </div>
  );
};
