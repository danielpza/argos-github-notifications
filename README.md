# argos-github-notifications

## Requirements

- node
- npm

## Install

```sh
git clone https://github.com/danielpza/argos-github-notifications.git
npm install
dir="${XDG_CONFIG_HOME:-$HOME/.config}"/argos
file="$dir"/argos-github-notifications.1m.js
mkdir -p "$dir"
chmod +x "lib/index.js"
ln -srf lib/index.js "$file"
```
