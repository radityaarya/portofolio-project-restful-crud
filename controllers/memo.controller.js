const user    = require('../models/memo.model');

module.exports = {

  // GET all memo
  getAllMemo : function (req, res) {
    user.find( {}, {__v : false}, (err, data) =>{
      res.json(data)
    })
  },

  // POST a memo
  postMemo : function (req, res) {
    user.create({
      memo : req.body.memo
    })
    .then(function(data) {
      res.send({
        message: 'New Memo Has Been Added',
        memo   : data.memo
      })
    })
  }


}
