const express = require('express')
const userSchema = require('../models/user')

const router = express.Router()

//crear usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

//obtener todos los usuarios
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

//obtener un usuario
router.get('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

//actualizar un usuario
router.put('/users/:id', (req, res) => {
    const { id } = req.params
    const { usuario, contraseña, email} = req.body
    userSchema
    .updateOne({ _id: id } , { $set:{usuario, contraseña, email}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

//eliminar un usuario

router.delete('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}))
})

module.exports = router