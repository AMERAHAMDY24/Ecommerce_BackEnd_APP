import express from 'express'

import { dbConn } from './Database/dbConnection.js'
 
import {bootstrap} from "./src/modules/bootstrap.js"

import { globalResponse } from './src/middlewares/error-handle.middleware.js'
import { ErrorHandlerClass } from './src/utills/error-class.utilis.js'

const app = express()
const port = 3000

app.use(express.json())

bootstrap(app)

app.use("*",(req,res,next)=>{
    next(new ErrorHandlerClass("route not found",404))
})

app.use(globalResponse);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))