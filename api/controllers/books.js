const uuidv4 = require('uuid').v4;
// const db = require('../../config/database');

module.exports = app => {
    const controller = {};

    controller.listBooks = async (req, res) => { 
        // const data = await db.getBooks(req,res);
        return data;
    }

    controller.saveBooks = (req, res) => {
        // const book = db.saveBooks({
        //     identifier: uuidv4(),
        //     isbn: req.body.isbn,
        //     author: req.body.author
        // }, res);
        
        res.status(201).json({ "message": "Livro cadastrado com sucesso!"});

    }
    return controller;
}