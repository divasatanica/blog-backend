import Koa from 'koa'
import mongoose from 'mongoose'

// Official Middlewares or Plugins

import route from 'koa-route'
import koaBody from 'koa-body'

// My Middlewares/Configs

import RouteList from './src/routes/index';
import baseConfig from './config/base-config'
import {setInCookies} from './src/middlewares/cookies'
import {handler as errorHandler} from './src/middlewares/error-handler'
import {logInConsole, logInHeader} from './src/middlewares/logger'
import {tomorrowGen} from './src/util/time'
import {respSuccess, respFail} from './src/shared/respGen'


const PORT = baseConfig.PORT
const DB_URL = baseConfig.DB_URL
const app = new Koa()

// mongoose.connect(DB_URL, {
//   useNewUrlParser: true
// }).then(() => {
//   console.log('MongoDB access created')
// }).catch(e => {
//   console.log(e)
// })

global.respFail = respFail
global.respSuccess = respSuccess
// global.db = mongoose.createConnection('mongodb://localhost:27017/blog')

// Error Handling
app.use(errorHandler)

// Log in response header and console
app.use(logInHeader)
app.use(logInConsole)

app.use(koaBody());

RouteList.forEach(route => {
  app.use(route.routes(), route.allowedMethods());
});


app.listen(PORT)
console.log(`Listening on Port ${PORT}`)

export default app