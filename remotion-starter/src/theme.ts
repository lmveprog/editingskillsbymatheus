import {loadFont as loadSans} from '@remotion/google-fonts/Inter';
import {loadFont as loadMono} from '@remotion/google-fonts/JetBrainsMono';

// on ne charge que les graisses/subsets utiles -> rendu plus rapide, pas de warning
const sans = loadSans('normal', {weights: ['400', '700', '800'], subsets: ['latin']});
const mono = loadMono('normal', {weights: ['400', '700'], subsets: ['latin']});

// palette sombre + un seul accent. un seul accent = ca reste lisible et ca a du style.
// change ces 8 valeurs et toute la video change d'identite.
export const theme = {
  bg: '#0B0B0F',
  bg2: '#14141B',
  card: '#17171F',
  border: '#2A2A36',
  ink: '#F4F4F0',
  dim: '#8A8A96',
  accent: '#FF6A2B',
  accent2: '#FFB03A',
} as const;

export const fonts = {
  sans: sans.fontFamily,
  mono: mono.fontFamily,
};

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;
