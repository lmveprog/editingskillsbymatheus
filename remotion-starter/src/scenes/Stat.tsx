import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Backdrop} from '../components/Backdrop';
import {Tag} from '../components/Tag';
import {Counter} from '../components/Counter';
import {Waveform} from '../components/Waveform';
import {theme, fonts} from '../theme';

// scene "chiffre choc": un compteur qui monte + une legende + une waveform pour la vie.
export const Stat: React.FC = () => (
  <Backdrop>
    <Tag index="02" label="IMPACT" />
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', gap: 20}}>
      <Counter to={100} suffix="%" />
      <div style={{fontFamily: fonts.sans, fontSize: 44, color: theme.dim}}>
        fait avec du code, zero template
      </div>
      <div style={{marginTop: 30}}>
        <Waveform bars={22} width={420} height={70} color={theme.accent} />
      </div>
    </AbsoluteFill>
  </Backdrop>
);
