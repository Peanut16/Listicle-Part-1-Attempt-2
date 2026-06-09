import express from 'express'

const app = express()
const PORT = process.env.PORT || 3001

// Tell Express to serve static files from the client's 
// public folder so the browser can access them

app.use('/public', express.static('/public'))
app.use('/scripts', express.static('/public/scripts'))

app.get('/', (req, res) => {
      res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">MLP API</h1>')
})

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
