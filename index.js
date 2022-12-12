const express = require('express')
const app = express();


app.get('/', (req, res) => res.json({msg: 'successfuly run cicd with ilfan server and kemal server'}));
app.get('/tes', (req, res) => res.json({msg: 'ci cd success'}))
app.get('/apaya', (req, res) => res.json({msg: 'apaya'}))

app.listen(8081, () => console.log('running at :8081')) 
