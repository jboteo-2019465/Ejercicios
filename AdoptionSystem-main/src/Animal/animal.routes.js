import express from 'express'
import {deleteAnimal, getAllAnimals, save, search, searchAnimal, testAnimal, updateAnimal} from './animal.controller.js'

const api = express.Router();

api.get('/testAnimal', testAnimal)
api.post('/save', save)
api.get('/getAllAnimals', getAllAnimals)
api.post('/search', search)
api.post('/searchAnimal', searchAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id', deleteAnimal)

export default api
