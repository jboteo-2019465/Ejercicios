'use strict'

import {Router} from 'express'
import {save, test} from './appoiment.controller.js'
import { validateJwt } from '../src/middlewares/validate-jwt.js'

const api = Router()

//Rutas publicas
api.get('/test', test)

//Rutas privadas
api.post('/save', validateJwt, save)


export default api