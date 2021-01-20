// const db = require('../../config/database');
const jwt = require('jsonwebtoken');

module.exports = app => {
    const controller = {};

    controller.authenticate = async (req, res) => { 
        try {
            // const data = await db.query(req,res);
            console.log(data);
        } catch(e) {
            console.log(e);
        }


        //return data;


    }


    controller.me = async (req, res) => { 
        // const data = await db.getBooks(req,res);
        return data;
    }

    return controller;
}