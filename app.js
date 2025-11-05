const express = require('express')
const app = express()
const port = 3000

//motor de plantillas:
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//static
app.use(express.static(__dirname + "/public"));
 
//Rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
  res.status(404).render("404",
    {
      titulo: "404",
      descripcion: "Titulo del sitio web 404"
    }
  )
});

app.listen(port, () => {
  console.log(`Servidor a su servicio en el puerto ${port}`)
})













/* const http = require("http");

const server = http.createServer((req, res) => {
  res.end("<h1>Hello, World! - respondiendo a la solicitud</h1><br><p>Cambio en la respuesta :)</p><br><p><3 :) <3</p>");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log(`Escuchando solicitudes del puerto:  ${puerto}`);
});

 */


/* const {frutas, dinero} = require("./frutas");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule COWSAY <3",
    e : "oO",
    T : "U "
}));

frutas.forEach((fruta) => {
  console.count(fruta);
});

console.log("Dinero: " + dinero);
 */
