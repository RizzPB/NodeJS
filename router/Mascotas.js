// Mascotas.js
const express = require('express');
const router = express.Router();

//llamar al modulo de mascotas
const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    try {
        const arrayMascotasDB = await Mascota.find();
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            listaMascotas: arrayMascotasDB
    })
        
    } catch (error) {
        console.log(error)
    }

})


router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        await Mascota.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error', error)
    }
})

module.exports = router;