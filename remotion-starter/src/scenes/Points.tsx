import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Backdrop} from '../components/Backdrop';
import {Tag} from '../components/Tag';
import {theme, fonts, FPS} from '../theme';

// liste qui se revele point par point, ~1 point toutes les 0.9s pour caler sur la voix off.
const items = [
  'une idee par plan',
  'peu de texte a l ecran',
  'la voix off raconte le reste',
];

export const Points: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <Backdrop>
      <Tag index="01" label="PRINCIPE" />
      <AbsoluteFill style={{justifyContent: 'center', padding: '0 160px', gap: 34}}>
        {items.map((it, i) => {
          const s = spring({
            frame: frame - 12 - i * FPS * 0.9,
            fps,
            config: {damping: 200},
          });
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 28,
                transform: `translateX(${(1 - s) * 60}px)`,
                opacity: s,
              }}
            >
              <div style={{width: 22, height: 22, backgroundColor: theme.accent}} />
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontWeight: 700,
                  fontSize: 62,
                  color: theme.ink,
                }}
              >
                {it}
              </div>
            </div>
          );
        })}
      </AbsoluteFill>
    </Backdrop>
  );
};
