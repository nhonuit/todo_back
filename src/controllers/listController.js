import express from 'express'
import List from '../models/list'
import Todo from '../models/todo'
import User from '../models/user'
import {multipleMongooseToObject} from "../util/mongoose"
class listController {
    //render my list page
    mylist(req,res,next)
    {   List.find({})
    .then(lists=>{
     //   User.find({_id:lists.shareduid})
       // .then(users =>
        res.render('mylist',{lists:multipleMongooseToObject(lists),
                            //users:multipleMongooseToObject(users),
                                })
                            //)
    
    })
    .catch(next);
        }
    //my list handler
    GetAllMyList(req,res)
    {
        const {} = req.body;
        List.find({uid:uid, shareduid:uid})
        .then(list =>{
            res.send(list);
        })
        .catch(err => console.log(err))
    }
    CreateListPage(req,res)
    {
        res.render('createnewlist');
    }
    
    CreateList(req,res)
    {
        const {tittle, shareduid, uid} = req.body;
        
        //

        const newList =  new List({
            tittle,
            shareduid,
            uid,                       
           });
           newList.save()
           .then(list =>{
               return res.redirect('/user/mylist');
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
    DeleteListById(req,res,next){
        const {_id} = req.params;
       
        //if(uid===uid){ //1 list phải được update, delete bởi chính người tạo ra nó
         List.deleteOne({_id: _id})  
         .then(lists =>{
            res.redirect('/user/mylist');
        })
        .catch(next);
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
          List.find({listid : listid, shareduid: uid})
          .then(list => {
              if(list){
                  res.send('Nguoi dung nay da duoc share')
              }
              else {
                List.findOneAndUpdate({listid : listid, shareduid: uid},   { $push: {uid: shareduid}},)
                  //list.save()
                  .then(
                      redirect(res.render('sharelist'))
                  )
                  .catch(err => console.log(err));
              }
          })

      }


      //number of item in sharelist (not done)
      NumberOfItemInSharelist(req,res){
          const {_id} = req.body;
          Todo.count({
              'todo.listid': _id,
              //'booking.delivery_date' : '15-03-2016'
            }, function (err, docs) {
              // ... count of top-level items which have booking with following attributes
            });
      }




      
}
module.exports = new listController;