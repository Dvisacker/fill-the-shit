# 😬 Fill The Shit [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> **WARNING**: THIS CODE WAS WRITTEN JUST FOR FUN AND TO SAVE SOME TIME. USE THIS AT YOUR OWN RISK. EXCLUSIVELY WRITTEN FOR MY CURRENT COMPANY, BUT HIGHLY CUSTOMIZABLE TO MAKE IT WORK FOR ANY COMPANY.

This program fills the timesheet data on behalf of employees automatically, so they don't have to spend their time looking at the ugly timesheet screen.


## Installation

    npm install -g fill-the-shit


## API

    const fillTheShit = require('fill-the-shit')

    fillTheShit('username', 'password', 'YYYY-MM-DD', 10, 7, 'comment/note')


## Command-line usage

    Usage: fill-the-shit [options]

    Options:

      -h, --help                 output usage information
      -V, --version              output the version number
      -u, --username <username>  Email or Username
      -p, --password <password>  Password
      -d, --date <date>          Date in YYYY-MM-DD format
      -i, --index <index>        Index of the field
      -h, --hours <hours>        Hours to be filled in to the hour field
      -n, --note <note>          Note to be filled in to the note field


## Evil usage

Use cron job and don't forget to exclude weekends. ;)


    0 18 * * 1,2,3,4,5 <your_username> fill-the-shit -u username -p password -d "2016-12-12" -i 10 -h 7 -n "comment"


## Test

Just `standard` for now;

    npm test


## License

MIT
