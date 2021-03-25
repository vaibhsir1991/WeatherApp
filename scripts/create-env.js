const fs = require('fs')
fs.writeFileSync('./.env', `OPEN_WEATHER_KEY=${process.env.OPEN_WEATHER_KEY}\nNODE_PATH=${process.env.NODE_PATH}\nNODE_ENV=${process.env.NODE_ENV}\n`)