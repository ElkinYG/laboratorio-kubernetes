const fs = require('fs');
setInterval(() => {
  console.log('APP_ENV=', process.env.APP_ENV, '| DB_USER=', process.env.DB_USER);
  console.log('DB_PASS  :', '*'.repeat(process.env.DB_PASS.length));
  console.log(fs.readFileSync('/config/mensaje.txt', 'utf8'));
}, 10000);
