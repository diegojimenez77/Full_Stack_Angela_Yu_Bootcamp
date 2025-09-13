import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hola mundo desde mi servidor</h1>");
    console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send("<h1>This is my contact number 555555555</h1>")
    console.log("moviendose al endpoint contactos");
})

app.get("/about", (req, res) => {
    res.send("<h1>This page is about my new consulting company</h1>")
    console.log("moviendose al endpoint about");
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
} );