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

            //richiesta avventua con successo
            return res.json({ status: 204, affectedRows: results.affectedRows })
    })

}


const show = (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id;
    console.log(id);
  
    // prepare the sql query to get the post by its id
    const sql = 'SELECT * FROM posts WHERE id=?'
  
    // prepare another query to get all the ingredients associated with that post
    const tagsSql = `
      SELECT tags.*
      FROM tags
      JOIN post_tag ON tags.id = post_tag.tag_id
      WHERE post_tag.post_id = ?
    `;
  
  
    // exectute the first query to get the post by its id
    connection.query(sql, [id], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      // handle the 404 error
      if (!results[0]) return res.status(404).json({ error: `404! Not found` })
  
      // perpare the response data
      const post = results[0]
      console.log('post trvato', post);
  
      // execute the second query to get all the ingredients associated with that post
      connection.query(tagsSql, [id], (err, tagsResults) => {
        // handle 500 error
        if (err) return res.status(500).json({ error: err })
        console.log('👉', tagsResults);
  
        post.tags = tagsResults;
  
  
        const responseData = {
          data: post,
        }
  
        console.log(responseData);
  
        // return the post
        res.status(200).json(responseData);
  
      })
  
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
    show,
   destroy
}