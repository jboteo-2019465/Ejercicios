'use strict'

import Animal from '../src/Animal/animal.model.js'
import Appoiment from './appoiment.model.js'

export const test = (req, res) => {
    return res.send({message: 'Test is running | appoiment'})
}

export const save = async(req, res)=>{
    try {
        //Capturar la data
        let data = req.body
        data.user = req.user._id//Jalar id del token
        //Verificar que exista el animal
        let animal = await Animal.findOne({_id: data.animal})
        if(!animal) return res.status(404).send({message: 'animal not found'})
        //validar que la mascota no tenga una cita activa con esa persona
        let existAppoimment = await Appoiment.findOne({
            $or:[
                {
                    animal: data.animal,
                    user: data.user
                },
                {
                    date: data.date,
                    user: data.user

                }
            ]
        })
        if(existAppoimment) return res.send({message: 'Appoiment alredy exist'})
        //Que el usuario solo pueda tener una cita por dia

        //Guardar
        let appoiment = new Appoiment(data)
        await  appoiment.save()
        return res.send({message: `Appoiment saved succesfully in date ${appoiment.date}` })
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error creating appoiment', err})
        
    }
}