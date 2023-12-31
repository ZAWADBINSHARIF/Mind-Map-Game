// external import
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

// internal import
import dbConnection from './configs/dbConnection.js'
import apiRoute from './routes/apiRoute.js'
// import errorHandler from './middlewares/common/errorHandler.js'

// for getting the values from the .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const __dirname = path.resolve()

// for getting json data
app.use(express.json())

// for getting json form data
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: "*"
}))

// for database connection
dbConnection({ app, PORT })

// ** set up static files. this code for linux server.
app.use(express.static(path.join(__dirname, 'public', 'uploads')))
app.use(express.static(path.join(__dirname, 'public', 'representation_imgs')))
app.use(express.static(path.join(__dirname, 'public', 'background')))
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')))

// ** this code for windows
// app.use(express.static(path.join(__dirname, 'backend', 'public', 'uploads')))
// app.use(express.static(path.join(__dirname, 'backend', 'public', 'representation_imgs')))
// app.use(express.static(path.join(__dirname, 'backend', 'public', 'background')))
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')))

// routers
app.use('/api', apiRoute)

// ** this code for linux
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'frontend', 'dist', 'index.html')))

// ** this code for windows
// app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')))

// common error handle
// app.use(errorHandler)