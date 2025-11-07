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

        /* listaMascotas: [
            // posterior se consume en una base de datos
            {id: 'mascota1', nombre: 'Oliver', descripcion: 'Gato muy dormilon <3'},
            {id: 'mascota2', nombre: 'Kiev', descripcion: 'Gato muy curioso y mimado'},
            {id: 'mascota3', nombre: 'Atenea', descripcion: 'Perrita demasiado amorosa que sonrie :D'}
        ] */
    })
        
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;