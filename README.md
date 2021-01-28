# Mordhau-MFC-Statistics #

*Mordhau Fight Club **Statistics Analysis &amp; Export(s)***

- [**Project Task-Board** (Alpha-Release)](https://github.com/Segmentational/Mordhau-MFC-Statistics/projects/1)

## Table of Contents ##

...

## Installation ##

```bash
export URL="https://github.com/Segmentational/Mordhau-MFC-Statistics.git"

git clone --recursive "${URL}" ./Mordhau-MFC-Statistics

cd ./Mordhau-MFC-Statistics
```

## Overview ##

```GO
export CWD="$(git rev-parse --show-toplevel)"
export DEPENDENCY=(
    "github.com/sniddunc/mordhau-rcon"
    "github.com/joho/godotenv"
)

cd "${CWD}/RCON/GO"

for (( PACKAGE = 0; PACKAGE < "${#DEPENDENCY[@]}"; PACKAGE++ )); do
    go get -v "${DEPENDENCY[$PACKAGE]}"
done



```

## Modules ##

- [GoDotENV](https://github.com/joho/godotenv)

## RCON ##

- [Mordhau `RCON` Commands](https://mordhau.gamepedia.com/Dedicated_Server_Hosting_Guide)
