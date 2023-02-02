mkdir deploy
npm rimraf deploy
zip -r deploy/deploy.zip ./* --exclude .next deploy