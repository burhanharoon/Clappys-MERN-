import express, { json } from 'express'
import dotenv from "dotenv"
import bodyparser from 'body-parser'

dotenv.config();

const app = express()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Api is running successfully،،،")
})


const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))