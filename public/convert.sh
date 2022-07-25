#!/usr/bin/env bash

for f in ./*; do
  newFile=$(sed 's/.png/'".webp"'/g' <<<"$f")
  newFile=$(sed 's/.jpeg/'".webp"'/g' <<<"$newFile")
  newFile=$(sed 's/.jpg/'".webp"'/g' <<<"$newFile")
  cwebp $f -o "../$newFile"
done

