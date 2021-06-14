#!/bin/sh
yarn build
git add dist
git commit -m "deploy"
git push
git subtree push --prefix dist origin gh-pages 

