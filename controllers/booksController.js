const db = require("../models");

module.exports = {
    findAll: function(req,res){
       db.GBooks
        .find()
        .sort()
        .then()
        .catch()
    },
    fineOne: function(req,res){
        db.GBooks
        .find()
        .sort()
        .then()
        .catch()
    },
    save: function(req,res){
        db.GBooks
        .create()
        .then()
        .catch()
    },
    remove: function(req,res){
        db.GBooks
        .findById()
        .sort()
        .then()
        .catch()
    }
}
