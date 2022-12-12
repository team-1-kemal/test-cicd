const express = require('express')
const app = express();


app.get('/', (req, res) => res.json({msg: 'running'}));
app.get('/tes', (req, res) => res.json({msg: 'ci cd success'}))

app.listen(8081, () => console.log('running at :8081')) 
