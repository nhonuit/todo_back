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
    //render edit list page
    EditListPage(req,res)
    {
        res.render('editlist')
    }
    EditList(req,res)
    {
        const {_id, name,participant} = req.body;
         //if(uid===uid){ //1 list phải được update, delete bởi chính người tạo ra nó    
        List.findByIdAndUpdate({_id: _id})
        .then(list =>{
            if (list){
                list.name = name;
                list.participant = participant;               
                list.save()
                
            }
            else { res.send('List khong ton tai')}
            
        });
    }
//}
    DeleteListById(req,res){
        const {_id} = req.body;
       
        //if(uid===uid){ //1 list phải được update, delete bởi chính người tạo ra nó
         Todo.remove({_id: _id})  
         .then(todo =>{
            res.redirect('/todo/todo');
        })
        .catch(err => console.log(err));
        }
    //}



      //render sharelist
      renderSharelist(req,res)
      {
          res.render('sharelist')
      }
  //Load sharelist
      loadSharelist(req,res){
          const {listid} =req.body;
          List.count({
              'listid':'listid'
            }, function (err, docs) {
              
          
          });
      }
  //add user to sharelist

      ShareListToUser(req,res){
          const {uid, listid} =req.body;
          List.findOneAndUpdate({listid : listid, shareduid: uid},   { $push: { uid: shareduid  } },)
      }


      //number of item in sharelist (not done)
      NumberOfItemInSharelist(req,res){
          List.count({
              'booking.status': 'Underprocess',
              'booking.delivery_date' : '15-03-2016'
            }, function (err, docs) {
              // ... count of top-level items which have booking with following attributes
            });
      }




      
}
module.exports = new listController;