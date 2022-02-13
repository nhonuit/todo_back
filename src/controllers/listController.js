import express from 'express'
import List from '../models/list'
class listController {
    //render my list
    mylist(req,res)
    {
        res.render('mylist');
    }
}
module.exports = new listController;