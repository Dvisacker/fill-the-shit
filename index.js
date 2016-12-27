const Horseman = require('node-horseman')

const BASE_URL = 'https://myspace.innominds.com/user/login'
const TIMESHEET_URL = 'https://myspace.innominds.com/Employee/timesheet?reqdate='

const fillTheShit = (username, password, date, index, hours, note) => {
  const horseman = new Horseman({
    timeout: Infinity,
    loadImages: false,
    webSecurity: false,
    injectJquery: false
  })

  horseman
    .userAgent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36')
    .log(`Filling the shit on behalf of ${username} for ${date} (<${index}> ${hours} hours: ${note})`)
    .open(BASE_URL)
    .waitForSelector('#username')
    .type('#username', username)
    .type('#password', password)
    .click('#submit')
    .waitForNextPage()
    .log('Authentication successful')
    .open(`${TIMESHEET_URL}${date}`)
    .waitForSelector(`#hours_0_${index}`)
    .type(`#hours_0_${index}`, String(hours))
    .type(`#notes_0_${index}`, note)
    .click('#submit')
    .waitForNextPage()
    .log('Filled the shit successfully')
    .catch((e) => console.error(e))
    .close()
}

module.exports = fillTheShit
