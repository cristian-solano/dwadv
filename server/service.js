const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const models = require("./models")
const User = models.User


// db.one("SELECT $1 AS value", 123)
//     .then(function (data) {
//         console.log("DATA:", data.value);
//     })
//     .catch(function (error) {
//         console.log("ERROR:", error);
//     });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const people = [
    {
        id: 1,
        name_person: "Omar Gonzales",
        address: "Cra 20 # 11-10",
        phone: "44444444"
    }
]


app.get('/', (req, res) => {
    res.send("Api node")
})

app.get('/api/people', async(req, res) => {
    const users = await User.findAll();
    res.send(users);
})

app.get('/api/people/:id', (req, res) => {
    const person = people.find(person => person.id === parseInt(req.params.id));
    if (!people) return res.status(404).send("Persona no encontrada");
    else res.send(person)
})

app.post('/api/people', async(req, res) => {
    const new_user = {
        full_name: req.body.full_name,
        address: req.body.address,
        phone: req.body.phone

    }
    console.log(new_user);
    await User.create(new_user);
    res.send("ok")
})

app.delete('/api/people/:id', async(req, res) => {
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
    res.send("user deleted!");
})


const products = [
    {
        id_product: 1,
        name: "Celular",
        price: 900000,
        stock: 10
    }
]



app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product.id === parseInt(req.params.id_product));
    if (!product) return res.status(404).send("Producto no encontrado");
    else res.send(products)
})

app.post('/api/products', (req, res) => {
    const product = {
        id_product: products.length + 1,
        name: req.name,
        price: req.price,
        stock: req.stock,
    }

    products.push(product);
    res.send(product)
})


const files = [
    {
        id_files: 1,
        date: "10/11/2023",
        id_persona: 1,
        value: 900000
    }

]

const details = [
    {
        id_details: 1,
        id_file: files[0].id_files,
        date: files[0].date,
        id_persona: files[0].id_persona,
        name_person: people[0].name_person,
        quantity: 2,
        producto: products[0].name,
        value: products[0].value
    }
]

app.get('/api/files', (req, res) => {
    res.send(files)
})

app.get('/api/files/details', (req, res) => {
    res.send(details)
})

app.get('/api/files/:id', (req, res) => {
    const file = files.find(file => file.id === parseInt(req.params.file));
    if (!file) return res.status(404).send("Factura no encontrado");
    else res.send(files)
})

app.post('/api/files', (req, res) => {
    const file = {
        id_files: files.length + 1,
        date: req.date,
        value: req.value,
    }

    files.push(file);
    res.send(file)
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`))