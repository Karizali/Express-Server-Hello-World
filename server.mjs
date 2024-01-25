import express from 'express';
import path from "path"

const app = express()
const port = process.env.PORT || 5000;


const __dirname = path.resolve();


app.get('/time', (req, res) => {
    
    console.log("req " + req.ip);
  res.send('Hello World!'+ new Date().toString())
})
app.get('/weather', (req, res) => {
    
    console.log("req " + req.ip);
  res.send('Hello World!'+ new Date().toString())
})
app.get('/xyz', (req, res) => {
    
    console.log("req " + req.ip);
  res.send('Hello World!'+ new Date().toString())
})

app.use('/', express.static(path.join(__dirname, './Weather_App_React/build')));
app.use('/**', express.static(path.join(__dirname, './Weather_App_React/build')));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})