const app = require('./app')
require('dotenv').config()




const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})

