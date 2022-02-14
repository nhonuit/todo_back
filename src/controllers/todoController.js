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
         const {tittle, description, duedate} = req.body;
         
         //
 
 
         const newTodo =  new Todo({
             tittle,
             description,
             duedate,          
             status: 'N',             
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
        const {id} = req.body;
       
        Todo.deleteOne({_id: '620a1a0c1155bd26967d391a'})  
         .then(todo =>{
            res.redirect('/list/mylist');
        })
        .catch(err => console.log(err));
    }
    //render update item page
    UpdateItemPage(req,res)
    {
        res.render('updateitem')
    }
    //update item handler
    UpdateItemById(req,res)
    {
        const {id, tittle,description,duedate} = req.body;
         
            Todo.findOne({_id: id})
            .then(todo =>{
                if (todo){
                    tittle= tittle;
                    description= description;
                    duedate = duedate;
                }
                else { res.send('Item khong ton tai')}
                
            });
    
       }
    
}

module.exports = new todoController;