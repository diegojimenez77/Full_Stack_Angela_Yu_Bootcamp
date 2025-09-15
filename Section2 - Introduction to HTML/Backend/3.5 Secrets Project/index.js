//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

// Proceso de Pensamiento
// 1. Problema: Necesito poder authenticar un password, si el password es correcto, debo mostrar cierto archivo secret.html
// Pasos
// 1. Primero levanto un servidor con express con un puerto y lo pongo a escuchar un evento Get o post.
// 2. Tengo que poder recibir un password con un formulario y hacer un submit, para eso usamos body-parser
// 3. Ahora que tengo el password, tengo que poder validarlo, para eso creamos un middleware con una funcion passwordCheck
// 4. Si el password es correcto ahora entrego el file correcto par eso usarmos el dirname y fileURLToPath con un post

import express from "express"; // para crear el servidor
import bodyParser from "body-parser"; // para leer entradas del usuario como formularios
import { dirname } from "path"; // para construir rutas relativas utilizando archivos
import { fileURLToPath } from "url"; // para poder usar dirname
const __dirname = dirname(fileURLToPath(import.meta.url)); //para poder obtener las carpetas y el file 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // se usa en Express.js para poder leer la información que viene en un formulario HTML (cuando el navegador envía datos en el body de la petición con formato application/x-www-form-urlencoded).

app.get("/", (req, res) =>{ //que hace en un get, en el local host nos manda al archivo index.html
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () =>{ // activamos el puerto 3000
    console.log(`Listening on port ${port}`);
});

var userIsAuthorised = false; // Validamos el password
function passwordCheck (req, res, next) {
    const password = req.body["password"];
    if(password === "password"){
        userIsAuthorised = true;
    }
    next();
}

app.use(passwordCheck); // llamamos a la funcion para validar el password

app.post("/profile", (req, res) => { //si el password es correcto le mandamos el archivo secret.html, si es incorrecto le mandamos index.html
    if (userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});