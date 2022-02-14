import express from 'express'
import List from '../models/list'
class listController {
    //render my list
    mylist(req,res)
    {
        res.render('mylist');
    }
    CreateListPage(req,res)
    {
        res.render('createnewlist');
    }
    CreateList(req,res)
    {
        const {tittle, description, duedate} = req.body;
        
        //


        const newList =  new List({
            tittle,
            description,
            duedate,                       
           });
           newList.save()
           .then(list =>{
               res.redirect('/list/mylist');
           })
           .catch(err => console.log(err));



    }
}
module.exports = new listController;