const express = require ('express');
const app = express()
const cors = require ('cors')
app.use(express.json())


//const postsRicette = require('./db/db.js')
const postsRoutes = require('./routes/posts.js');
const notFoundMiddleware = require('./middleware/notFoundMiddleware.js');
const loggerMiddleware = require('./middleware/loggerMiddleware.js')
const HOST = process.env.HOST
const PORT = process.env.PORT


app.use(cors())



app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
})  

app.use('/images', express.static('public/images'));

app.use('/posts', loggerMiddleware)
//creazione della rotta
app.get('/',(req, res)=>{

    res.send('Le mie ricette')
   
})


app.use('/posts', postsRoutes)



app.use(notFoundMiddleware)

app.use((err, req, res, next)=>{

    console.log(("Error: ", err.message));


    console.error(err.stack);
    res.status(500).send({

        message: "Something went wrong",
        error: err.message
    })
    
})