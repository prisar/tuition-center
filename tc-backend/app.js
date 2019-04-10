/**
 * The application entry point
 */

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const config = require('./config/default');

const app = express()

app.set('port', config.PORT)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const tutions = require('./src/routes/TutionCenter');

app.use('/api/tutioncenters', tutions)

app.listen(app.get('port'), () => {
    // logger.debug(`Express server listening on port ${app.get('port')}`)
    console.log(`Express server listening on port ${app.get('port')}`);
  })
  

  module.exports = app
  