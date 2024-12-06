const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController.js')



//GET
router.get('/', postsController.index)
//router.get('/:slug', postsController.show)
//DELETE
router.delete('/:id', postsController.destroy)

//POST

//router.post('/', postsController.store)

//UPDATE
//router.put('/:slug', postsController.update)



module.exports = router