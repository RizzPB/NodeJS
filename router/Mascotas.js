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

router.get('/:id', async(req, res) => {
    //leer la url
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findOne({ _id: id })
        console.log(mascotaDB)
        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log('Error </3', error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el documento especificado ...'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {

        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });
        console.log(mascotaDB)

        if (!mascotaDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar </3'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Eliminado! >:D'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
 
    console.log(id)
    console.log('body', body)

    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(mascotaDB)
        res.json({
            estado: true,
            mensaje: 'Mascota editada'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Mascota falla'
        })
    }
})


module.exports = router;