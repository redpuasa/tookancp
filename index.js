// Imports
const express = require('express')
const app = express()
const routes = require('./routes/app');
const bodyParser = require('body-parser')
const tookan = require('tookan-api')
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Static Files
app.use(express.static('public'))
app.set('view engine', 'ejs')

const Tookan = require('tookan-api')
const client = new Tookan.Client({api_key: "51676580f24b091114132d38111925401ee4c2f328d978375e1f03"});
client = new Tookan.Client(options);

let response = client.getCustomers

console.log(response)


// Routes
app.use("/", routes);
//app.use("/", users);

// Establishing the port 
const PORT = process.env.PORT || 8000;
// Executing the sever on given port number
app.listen(PORT, console.log(`Server started on port ${PORT}`));