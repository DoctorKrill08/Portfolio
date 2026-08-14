to run locally:
npx next dev --webpack -H 127.0.0.1
then go to:
http://127.0.0.1:3000/

to run on the web:
npm run build
then run:
npx wrangler pages deploy ./out
