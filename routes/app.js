const express = require('express');
const router = express.Router();
const Tookan = require('tookan-api')

const client = new Tookan.Client({api_key: "51676580f24b091114132d38111925401ee4c2f328d978375e1f03"});
client = new Tookan.Client(options);

let response = client.getCustomers

console.log(response)

