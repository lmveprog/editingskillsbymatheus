# 02 · remotion (les illustrations en code)

[remotion](https://www.remotion.dev) = faire des vidéos en react. chaque frame est une image
calculée par ton code. tu as `useCurrentFrame()`, et à partir de ce numéro de frame tu décides
de tout : position, opacité, texte affiché…

le projet exemple qui va avec : [`../remotion-starter/`](../remotion-starter/).

## le mental model (le seul truc à piger)

```
frame courante  ->  ton calcul  ->  ce qui est à l'écran à cette frame
```

deux fonctions font 90% du boulot :

- `interpolate(frame, [0, 30], [0, 1])` → map linéaire (frame 0→30 devient 0→1)
- `spring({frame, fps})` → la même chose mais avec un ressort (le rebond naturel, propre)

```tsx
const frame = useCurrentFrame();
const {fps} = useVideoConfig();
const s = spring({frame, fps, config: {damping: 200}}); // 0 -> 1 en douceur
// s sert d'opacité, de translation, d'échelle... tout part de là
```

## comment je structure un projet

c'est toujours la même arbo (celle du starter) :

- **`theme.ts`** — 8 couleurs, 2 fonts, le fps. **une seule source de vérité.** je ne mets
  jamais une couleur en dur dans une scène : tout vient du thème. changer le thème = changer
  l'identité de toute la vidéo en 3 lignes.
- **`components/`** — les briques réutilisables (`Typewriter`, `Waveform`, `Counter`, `Tag`,
  un `Backdrop`…). écrites une fois, utilisées partout, d'une vidéo à l'autre.
- **`scenes/`** — **une idée = une scène = un fichier.** chaque scène assemble des composants.
- **`Root.tsx`** — j'enregistre la compo principale **ET chaque scène en solo**. c'est *le*
  détail qui change tout ↓

## le workflow qui fait la différence

dans `Root.tsx`, chaque scène est aussi enregistrée comme sa propre `<Composition>`. donc dans
le studio je peux **bosser une scène isolée**, en boucle, sans me taper toute la vidéo. quand
elle est bien, je la branche dans `Video.tsx`. c'est ça qui rend le motion design rapide.

```tsx
<Composition id="Main"  component={Video} durationInFrames={TOTAL} {...size} />
<Composition id="Stat"  component={Stat}  durationInFrames={DUR.stat} {...size} />
```

## enchaîner les scènes

`TransitionSeries` (de `@remotion/transitions`) enchaîne les scènes avec des transitions
propres (fade, slide, wipe…). **piège classique** : la durée totale = somme des scènes − somme
des transitions. c'est écrit noir sur blanc dans `Video.tsx`.

## quelques réflexes

- je raisonne toujours en **secondes × fps** (`3 * FPS`), jamais en frames à la main.
- les fonts : `@remotion/google-fonts` (`loadFont()` renvoie une `fontFamily`), zéro galère.
- du mouvement partout mais discret : même un fond a une micro-animation (voir `Backdrop`).
- si un composant a plus de 3-4 props, c'est souvent qu'il fait trop de choses → je le coupe.

## rendre

```bash
npm run dev                          # le studio (itération)
npm run render                       # -> out/main.mp4
remotion render Stat out/stat.mp4    # une seule scène
remotion still Title out/t.png       # une image fixe
```

pour poser une anim sur un rush dans premiere, j'exporte en `.mov` avec alpha
(`--codec=prores --prores-profile=4444`) et je la mets en calque au-dessus.
