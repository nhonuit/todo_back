const ObjectId = require('mongoose').Types.ObjectId;
const req = require('express/lib/request');
const Todo = require('../models/todo')



class todoController {


     //render my item detail
     todo(req,res)
     {
         res.render('todo');
     }

     //render create item page
     CreateItem(req,res)
     {
         res.render('createnewitem');
     }


     //create item handler
     CreateNewItem(req,res)
     {
         const {tittle, description, duedate, list_id} = req.body;
         
         //
 
 
         const newTodo =  new Todo({
             tittle,
             description,
             duedate,          
             status: 'N',      
             list_id,       
            });
            newTodo.save()
            .then(todo =>{
                res.redirect('/todo/todo');
            })
            .catch(err => console.log(err));
 
 
 
     }
     //delete item handler
    DeleteItemById(req,res)
     {
        const {_id} = req.body;
       
       if(uid===uid){
        Todo.remove({_id: _id})  
        .then(todo =>{
           res.redirect('/todo/todo');
       })
       .catch(err => console.log(err));
       }
    }
    //render update item page
    UpdateItemPage(req,res)
    {
        res.render('updateitem')
    }
    //update item handler
    UpdateItemById(req,res)
    {
        const {_id, tittle,description,duedate} = req.body;
         
            Todo.findByIdAndUpdate({_id: _id})
            .then(todo =>{
                if (todo){
                    todo.tittle = tittle;
                    todo.description = description;
                    todo.duedate = duedate;
                    todo.save()
                    
                }
                else { res.send('Item khong ton tai')}
                
            });
    
       }
       //finnish item handler
    FinnishItem(req,res)
    {
        const {_id, tittle, description, duedate} = req.body;
         
        Todo.findById("620b102233892803660ed933")
        .then(todo =>{
            if (todo){
                todo.status = 'D';
                todo.save();
            }
            else { res.send('Item khong ton tai')}
            
        });  
    }
    //update status of outdated item
    OutdatedItem(req,res)
    {   
        const {_id, tittle,description,duedate} = req.body;         
        Todo.findById("620b102233892803660ed933")
        .then(todo =>{         
            let getdate = new Date();
            if (todo.duedate < getdate){
                
                todo.status = 'O';
                todo.save();
            } 
            
        });  
    }
    
}

module.exports = new todoController;