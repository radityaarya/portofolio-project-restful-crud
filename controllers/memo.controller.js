const memo    = require('../models/memo.model');

module.exports = {

  // GET all memo
  getAllMemo : function (req, res) {
    memo.find( {}, {__v : false}, (err, data) =>{
      res.json(data)
    })
  },

  // POST a memo
  postMemo : function (req, res) {
    memo.create({
      memo : req.body.memo
    })
    .then(function(data) {
      res.send({
        message: 'New Memo Has Been Added',
        memo   : data.memo
      })
    })
  },

  // UPDATE a memo
  updateMemo :function(req, res, next) {
    memo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then( (data) => {
        res.send({
          message :`Memo with id ${req.params.id} has been updated`,
          memo    : data.memo
      })
    })
  },

  // DELETE a memo
  deleteMemo : function(req,res){
    memo.findOneAndRemove( {_id: req.params.id}, function(err){
      res.send(`Memo with id ${req.params.id} has been removed`)
    })
  }


}
