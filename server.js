const express = require('express')
const connectDB = require('./config/db')

const app = express()

// connect database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API running'))

// Define routes
app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
