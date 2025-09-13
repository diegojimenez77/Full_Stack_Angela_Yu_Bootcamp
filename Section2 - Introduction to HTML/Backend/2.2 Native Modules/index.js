const fs = require("fs");

// fs.writeFile("messageNuevo.txt", "Estoy viendo si crea un nuevo archivo", (err)=>{
//     if(err) throw err;
//     console.log("El archivo fue guardado");
// });

// fs.rename("messageDiego.txt", "messageRenombrado.txt", (err)=> {
//     if(err) throw err;
//     console.log("Archivo renombrado correctamente");
// });

fs.readFile("messageNuevo.txt", "utf-8", (err,data)=>{
    if(err) throw err;
    console.log(data);
});