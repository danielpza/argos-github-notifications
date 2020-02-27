#!/usr/bin/env sh

set -e

npm install
dir="${XDG_CONFIG_HOME:-$HOME/.config}"/argos
file="$dir"/argos-github-notifications.1m.js
mkdir -p "$dir"
chmod +x "lib/index.js"
ln -srf lib/index.js "$file"
