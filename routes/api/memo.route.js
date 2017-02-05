var express    = require('express');
var router     = express.Router();
var controller = require('../../controllers/memo.controller.js')



// GET ALL PLAYER
router.get('/', controller.getAllMemo)

router.post('/new', controller.postMemo)



module.exports = router;
