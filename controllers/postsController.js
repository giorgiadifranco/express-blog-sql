// seconda rotta -- response con formato json
const posts = require('../db/db.js')
const fs = require('fs')
const connection = require('../db/connection.js')
const { log } = require('console')

const index = (req, res)=>{

    const sql= 'SELECT * FROM posts'

    //esecuzione della query
    connection.query(sql, (err, results)=> {
        if (err) return res.status(500).json({ error: err.message })
        
            const responseData = {
                data: results,
                counter: results.length
            }
            return res.status(200).json(responseData)
        })
    

            }

/*const show = (req, res)=> { 

    const id = req.params.id;
    console.log(id);

    const sql = ' SELECT * FROM posts WHERE slug= ?'
    
    const 

    
}*/

const destroy = (req, res)=> {
    
    console.log(req.params);

    const id = req.params.id

    const sql = 'DELETE FROM posts WHERE id = ?'

    connection.query(sql, [id], (err, results)=>{
        console.log(err, results);
        if(err) return res.status(500).json({ error: err.message })
        if(results.affectedRows === 0) return res.status(404).json({ error: `404!post not found whit this id:${id}` })
            return res.json({ status: 204, affectedRows: results.affectedRows })
    })

}




/*const index = (req, res)=>{
    
    res.status(200).json({
        data: posts,
        counter: posts.length
    })
}*/







 





module.exports = {

    index,
   
    destroy
}