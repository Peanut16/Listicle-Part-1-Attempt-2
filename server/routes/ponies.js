import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import poniesData from '../data/ponies.js'
import PoniesController from '../controllers/ponies.js'
console.log(poniesData)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', PoniesController.getPonies)

router.get('/:ponyId', (req,res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/pony.html'))
})

export default router