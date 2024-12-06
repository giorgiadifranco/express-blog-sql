const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController.js')



//GET
router.get('/', postsController.index)
router.get('/:slug', postsController.show)


//POST

router.post('/', postsController.store)

//UPDATE
router.put('/:slug', postsController.update)

//DELETE
router.delete('/:slug', postsController.destroy)

module.exports = router