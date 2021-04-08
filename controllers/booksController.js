const db = require("../models");

module.exports = {
    findAll: function(req,res){
       db.GBooks
        .find(req.query)
        .sort({data: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    fineOne: function(req,res){
        db.GBooks
        .find({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    save: function(req,res){
        db.GBooks
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req,res){
        db.GBooks
        .findById({_id: req.params.id})
        .sort(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}
