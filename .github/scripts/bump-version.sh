#!/usr/bin/env bash
set -euo pipefail

FEAT_RE='^feat(\([^)]+\))?!?:|^feat!'
FIX_RE='^fix(\([^)]+\))?!?:|^fix!'
CHORE_RE='^chore(\([^)]+\))?:'

git fetch --tags --force

last_tag=$(git tag -l 'v*' --sort=-v:refname | head -n1 || true)
if [ -n "$last_tag" ]; then
  range="${last_tag}..HEAD"
  current="${last_tag#v}"
else
  range="HEAD"
  current="0.0.0"
fi

IFS='.' read -r major minor patch <<< "$current"
major=${major:-0}; minor=${minor:-0}; patch=${patch:-0}

rank=0
while IFS= read -r msg; do
  [ -z "$msg" ] && continue
  if [[ "$msg" =~ $FEAT_RE ]]; then r=3
  elif [[ "$msg" =~ $FIX_RE ]]; then r=2
  elif [[ "$msg" =~ $CHORE_RE ]]; then r=1
  else r=0; fi
  rank=$(( r > rank ? r : rank ))
done <<< "$(git log "$range" --pretty=format:%s --no-merges)"

if [ "$rank" -eq 0 ]; then
  echo "No feat, fix, or chore commits since ${last_tag:-the first commit}. Skipping tag."
  echo "should_tag=false" >> "$GITHUB_OUTPUT"
  echo "new_tag=" >> "$GITHUB_OUTPUT"
  exit 0
fi

case "$rank" in
  3) major=$((major + 1)); minor=0; patch=0; bump=major ;;
  2) minor=$((minor + 1)); patch=0; bump=minor ;;
  1) patch=$((patch + 1)); bump=patch ;;
esac

new_tag="v${major}.${minor}.${patch}"
echo "Creating tag ${new_tag} (${bump} bump from ${current})"
echo "should_tag=true" >> "$GITHUB_OUTPUT"
echo "new_tag=${new_tag}" >> "$GITHUB_OUTPUT"
