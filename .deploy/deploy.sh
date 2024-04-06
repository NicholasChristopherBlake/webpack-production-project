cd ~/webpack-production-project
npm run build:prod

rm -rf ~/../var/www/webpack-production-project/html
mv ~/webpack-production-project/build ~/../var/www/webpack-production-project/html