# 01 · le pipeline complet

l'ordre dans lequel je fais les choses. c'est l'ordre qui fait gagner du temps, pas les outils.

## 1. écrire

un script court. une idée par phrase. je pense déjà "qu'est-ce qu'on voit à l'écran quand
je dis ça ?" — si je ne sais pas, c'est que la phrase est trop abstraite, je la réécris.

## 2. la voix off d'abord

j'enregistre la voix **avant** de monter. c'est le squelette de toute la vidéo : le rythme,
la durée, les respirations. tout le reste vient se caler dessus. monter sans la voix = monter
à l'aveugle.

## 3. fabriquer les illustrations (remotion)

pour chaque moment qui a besoin d'un visuel (un titre, un schéma, un chiffre, une animation
d'explication), je fais une scène remotion. je bosse la scène **isolée** dans le studio,
puis je l'exporte en `.mp4` (avec canal alpha si elle doit se poser sur autre chose).

→ voir [`02-remotion.md`](02-remotion.md)

## 4. dérusher + cut (premiere + autocut)

j'importe la voix, les rushes et les exports remotion. **AutoCut** fait le premier passage :
il vire les silences et les blancs. ensuite le montage est **manuel** : je place chaque plan
sur le bon mot, je gère le rythme, les respirations, les accents.

→ voir [`03-premiere-autocut.md`](03-premiere-autocut.md)

## 5. finir

étalonnage léger, son (un poil de musique très basse parfois), vérif du rythme en conditions
réelles (plein écran, son fort), export.

---

## pourquoi ce séparé remotion / premiere ?

- **remotion** est imbattable pour tout ce qui est *systématique et précis* : un chiffre qui
  s'anime exactement pareil à chaque fois, un schéma propre, un texte kinetic calé à la frame.
- **premiere** est imbattable pour tout ce qui est *sensible et humain* : le rythme du cut,
  le feeling, coller l'image sur l'émotion de la voix.

l'erreur courante (et ce que les gens croient quand ils voient mes vidéos) c'est de vouloir
tout faire faire par une ia de bout en bout. ça ne marche pas — le montage qui a du rythme
reste une décision humaine. l'ia/le code, je m'en sers pour *fabriquer les briques*, pas pour
*décider du montage*.
