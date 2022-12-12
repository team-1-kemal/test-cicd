const express = require('express')
const app = express();


app.get('/', (req, res) => res.json({msg: 'running'}));

app.listen(8081, () => console.log('running at :8081')) 
