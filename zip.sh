mkdir deploy
npm rimraf deploy
zip -r deploy/deploy.zip ./* --exclude node_modules .next deploy