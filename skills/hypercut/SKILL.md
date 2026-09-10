---
name: hypercut
description: Le process complet validé sur coxon (09-10/09/2026) — d'un rush brut face caméra à un short 9:16 livré : dérush intelligent au preset AutoCut, voix traitée, sous-titres mot-à-mot, illustrations en matériel réel animé, SFX légers, musique, master mono, script. Déclencheurs — "hypercut cette vidéo", "fais un hypercut sur <rush>", "/hypercut <rush.mov>", "fais ça sur cette vidéo", "monte mon short".
---

# hypercut

Un rush brut (OBS, face caméra, 9:16) entre ; deux masters (avec / sans
musique) et le script sortent dans `~/Documents/video/exportadobe/`. Tout se
passe dans `~/Documents/video/hypercut`. Lis son `CLAUDE.md` d'abord : les
réglages, la DA et le mode d'emploi X y sont ; ce fichier est le déroulé.
Référence finie : `src/videos/coxon/` (compo) + `episodes/coxon/` (données).

## 1. le dérush — intelligent, au preset de Matheus

1. `episodes/<slug>/` ; `uv run --with silero-vad --with torch --with torchaudio python tools/vad.py rush.mov episodes/<slug>/vad-rush.json`
2. `uv run … --with mlx-whisper python tools/bursts.py rush.mov vad-rush.json bursts.json`
   → lis TOUS les bursts : faux départs, reprises, phrases en double.
3. `garder.json` = ids des bursts gardés, dans l'ordre (dernière prise
   complète, jamais un faux départ). `corrections.json` par burst pour les
   mots techniques. `couper.json` = `[[début, fin], …]` en secondes du rush
   pour un mot répété ou un « euh » À L'INTÉRIEUR d'un burst (frontière
   trouvée sur l'enveloppe audio, pas sur whisper).
4. `tools/derush.py rush.mov bursts.json garder.json episodes/<slug>/<slug>-brut.mp4 episodes/<slug>/words.tsv`
   — resserre chaque burst comme son AutoCut (−45 dB, silences > 15 ms,
   marges 15 ms, fusion 10 ms), coupes franches sans transition ni zoom
   alterné, son MONO (canal qui porte la voix). Contrôle : `tools/vad.py`
   sur le dérush doit voir UN seul segment.
5. `tools/voix.sh <slug>-brut.mp4 public/derush/<slug>.mp4`. **Jamais de
   correction d'image** (luminosité, balance, look) : refusé le 10/09.

## 2. la compo

- `node scripts/captions.mjs episodes/<slug>/words.tsv src/videos/<slug>/captions.ts --light a-b,…`
  (plages des takeovers sombres). Pills mot-à-mot à y ≈ 1090, jamais en bas.
- Une compo dans `src/videos/<slug>/`, enregistrée dans `Root.tsx`
  (`durationInFrames` = dernière frame de l'edl). Beats = respirations
  (dérush + `Rig` punch/hold + pills) / takeovers (Paper, Sunset, Ink +
  cartes + `Speaker`, 2 à 6 s). `Rig` SANS `cuts`.
- **Le hook (0 à ~3,5 s) doit frapper** : le vrai visage du sujet en carte,
  un geste qui raconte (il quitte le logo), le mot-clé en gros, serif
  rouge (`accent: true`, P.rouge #E5322B — l'accent est ROUGE depuis le
  10/09, plus d'orange), riser calé pour tomber sur ce mot, musique qui
  entre là.
- **Les illustrations = du réel qui vit** (standard validé « c'est top »,
  précisé par Matheus le 10/09 : « je ferai + comme ça »). Pour chaque temps
  du script, piocher dans cette boîte à outils — et en mettre plus qu'on
  croit, c'est ce qu'il veut :
  1. **captures qui défilent** — `Capture` + `scroll` (page, table, fil).
  2. **vidéo récupérée pour illustrer les propos** — `tools/grab.sh clip
     "URL" début durée out.mp4` (yt-dlp) → `Clip` en carte, muet, calé au
     mot ; jamais démarrer sur un carton de titre.
  3. **motion design** de la lib pour les idées sans image — `Mixed`,
     `Strike`, compteurs `compte`, logos qui courent, `Wire`, `Checklist`,
     `Cursor` qui vit.
  4. **zoom + surlignage sur le mot dit** — `Capture` `focus` (ken burns
     centré) + `marks` en px source, mesurés sur une grille PIL.
  5. **vrais posts et sources en rec avec computer use** — l'extension
     Chrome : profil, post, fil, chiffres, articles, pages ; captures `zoom`
     + embeds officiels 2x + `SCALE=2 tools/grab.sh shot` ; `XPost` /
     `XProfile` si la capture est floue ou tronquée. Mode d'emploi X dans
     le CLAUDE.md (x.com gèle l'extension : pas de scroll JS, pas de zoom
     de page).
  6. **détourage intelligent** — `tools/cutout.sh` (HyperFrames) sur le
     speaker pour le faire flotter devant la source (`Decoupe`, pills à
     gauche), et le même outil sur un bout de capture ou de clip pour
     isoler un objet / un personnage et le poser nu ou en carte.
  Jamais une carte de citation dessinée quand la source existe, jamais un
  PNG rogné, jamais une capture posée sans mouvement.
- Détourage : `tools/cutout.sh` sur la plage du takeover seulement,
  `Decoupe` + `zones` de `WordTrack` à gauche.
- **SFX légers et agréables** : `papier` pour les cartes, `tick` /
  `clickDoux` pour les surlignages et temps forts, `whooshAir` bas (0.08)
  sur les takeovers, `page` sur le CTA, riser 0.09 sur le hook. **Jamais
  `impactZoom`**, pas de gros whoosh, pas de pop en rafale.
- Musique : `Musique` avec le morceau donné (sinon Particle Emission,
  `public/music/`), gain **0.11**, entrée sur le mot du hook, creux avant
  les chocs, demi-niveau sous la question, fondu de fin.
- Si le dérush change après coup : `tools/retime.py ancien.edl.json
  nouveau.edl.json src/videos/<slug>/<Compo>.tsx`, puis captions, cutout.

## 3. vérifier, rendre, livrer

1. `npm run typecheck`, `node scripts/frames.mjs <Compo> f1,f2,…` aux
   frontières de beats, planche-contact ffmpeg `tile`, regarder CHAQUE image.
   Montrer 3 à 5 frames à Matheus si le style est nouveau.
2. `npx remotion render src/index.ts <Compo> out/<slug>_v2_music.mp4` et
   `--props='{"music":false}'` → `out/<slug>.mp4`.
3. `tools/master.sh` sur les deux (−14 LUFS, −1 dBTP, mono).
4. **Livrer dans un dossier au titre de la vidéo** (demandé le 10/09, pour
   qu'il le retrouve) : `~/Documents/video/exportadobe/<Titre de la vidéo>/`
   — titre court et humain, ex. `Coxon quitte Anthropic` — avec dedans
   `<slug>_hypercut_v2_music_master.mp4`, `<slug>_hypercut_master.mp4` et
   `<slug>_script.txt` (`node scripts/script.mjs episodes/<slug>/words.tsv …`).
   Rien en vrac à la racine d'exportadobe. Ouvrir la vidéo (`open`).

## les pièges

- Cuts encore longs = marges > 15 ms ou minSilence > 15 ms : le preset ne se discute pas.
- Voix d'un seul côté : le rush lav n'a qu'un canal — derush.py le gère, vérifier `channels=1` sur le master.
- Le rush est cadré haut (cheveux à y 380) : cartes au-dessus de la tête
  centrées à y ≈ 200, h ≤ 300 ; lui redemander un quart d'air au-dessus.
- x.com gèle l'extension Chrome dès qu'on scrolle par JS ou zoome la page :
  navigate + wait + `zoom` sans JS, ids par une requête JS, embeds 2x.
