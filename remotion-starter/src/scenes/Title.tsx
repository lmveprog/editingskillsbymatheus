import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Backdrop} from '../components/Backdrop';
import {Tag} from '../components/Tag';
import {KineticText} from '../components/KineticText';
import {theme, fonts} from '../theme';

// scene d'intro: un sur-titre mono + un gros titre kinetic.
export const Title: React.FC = () => (
  <Backdrop>
    <Tag index="00" label="INTRO" />
    <AbsoluteFill style={{justifyContent: 'center', padding: '0 140px'}}>
      <div
        style={{
          fontFamily: fonts.mono,
          color: theme.accent,
          fontSize: 30,
          letterSpacing: 6,
          marginBottom: 28,
        }}
      >
        MOTION DESIGN · REMOTION
      </div>
      <KineticText text="le texte arrive au rythme de la voix" fontSize={104} />
    </AbsoluteFill>
  </Backdrop>
);
