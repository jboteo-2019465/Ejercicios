import express from 'express'
import { validateJwt,
    isAdmin
} from '../middlewares/validate-jwt.js'
import { test, register, login, update, deleteU } from './user.controller.js';

const api = express.Router();

//Rutas Publicas
api.post('/register', register)
api.post('/login', login)

//Rutas Privadas (solo usuarios logeados)
api.get('/test', [validateJwt, isAdmin], test)
api.put('/update/:id', [validateJwt], update)//Middlewares -> funciones intermedias  que sirven para validar
api.delete('/deleteU/:id', [validateJwt], deleteU)

export default api