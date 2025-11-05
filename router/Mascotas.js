// Mascotas.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        listaMascotas: [
            // posterior se consume en una base de datos
            {id: 'mascota1', nombre: 'Oliver', descripcion: 'Gato muy dormilon <3'},
            {id: 'mascota2', nombre: 'Kiev', descripcion: 'Gato muy curioso y mimado'},
            {id: 'mascota3', nombre: 'Atenea', descripcion: 'Perrita demasiado amorosa que sonrie :D'}
        ]
    })
})

module.exports = router;