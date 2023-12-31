#!/bin/bash

set -eux

# example: "backend frontend"
apps=""

nodenv install -s
corepack enable
corepack prepare pnpm@8.9.0 --activate

for app in $apps; do
  cd apps/$app
  nodenv install -s
  cd -
done

pnpm --filter "*" i
