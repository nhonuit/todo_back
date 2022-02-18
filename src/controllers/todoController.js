import { multipleMongooseToObject } from '../util/mongoose';
const ObjectId = require('mongoose').Types.ObjectId;
const req = require('express/lib/request');
const Todo = require('../models/todo')
var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015



class todoController {


    //render my item detail
    todo(req, res, next) {
        const { _id } = req.query;
        {
            Todo.find({})
                .then(todos => {
                    //   User.find({_id:lists.shareduid})
                    // .then(users =>
                    todos.duedate = dayjs(todos.duedate).format('DD/MM/YYYY');

                    res.render('listdetail', {
                        todos: multipleMongooseToObject(todos),
                        //users:multipleMongooseToObject(users),
                    })
                    //)

                })
                .catch(next);

        }
    }

    //render create item page
    CreateItem(req, res) {
        res.render('createnewitem');
    }


    //create item handler
    CreateNewItem(req, res) {
        const { tittle, description, duedate, listid } = req.body;

        //;
        // dayjs(duedate).format('DD/MM/YYYY');


        const newTodo = new Todo({
            tittle,
            description,
            duedate: duedate,
            status: 'N',
            listid,
        });
        console.log(duedate);
        newTodo.save()

            .then(todo => {
                res.redirect('/todo/todo');
            })
            .catch(err => console.log(err));



    }
    //delete item handler
    DeleteItemById(req, res, next) {
        const { _id } = req.params;

        //  if(uid===uid){
        Todo.deleteOne({ _id: _id })
            .then(todos => {
                res.redirect('/todo/todo/');
            })
            .catch(next);
        //  }
    }

    //render update item page
    UpdateItemPage(req, res) {
        res.render('updateitem')
    }
    //update item handler
    UpdateItemById(req, res) {
        const { _id, tittle, description, duedate } = req.body;

        Todo.findByIdAndUpdate({ _id: _id })
            .then(todo => {
                if (todo) {
                    todo.tittle = tittle;
                    todo.description = description;
                    todo.duedate = duedate;
                    todo.save()

                }
                else { res.send('Item khong ton tai') }

            });

    }
    //finnish item handler
    FinnishItem(req, res) {
        const { _id, tittle, description, duedate } = req.body;

        Todo.findById(_id)
            .then(todo => {
                if (todo) {
                    todo.status = 'D';
                    todo.save();
                }
                else { res.send('Item khong ton tai') }

            });
    }
    //update status of outdated item
    OutdatedItem(req, res) {
        const { _id, tittle, description, duedate } = req.body;
        Todo.findById(_id)
            .then(todo => {
                let getdate = new Date();
                if (todo.duedate < getdate) {

                    todo.status = 'O';
                    todo.save();
                }

            });
    }



    //FILTER OF ITEM IN LIST

    //show all item in list
    ShowAllItemInList(req, res) {
        const { listid } = req.body;
        Todo.find({ listid: listid }
            .then(todo => {
                res.send(todo);
            })
            .catch(err => console.log(err)
            ));



    }

    //show all outdated item in list
    ShowAllOutdatedItemInList(req, res) {
        const { listid } = req.body;
        Todo.find({ listid: listid, status: "O" }
            .then(todo => {
                res.send(todo);
            })
            .catch(err => console.log(err)
            ))
    }
    //show all finnished item in list
    ShowAllFinishedItemInList(req, res) {
        const { listid } = req.body;
        Todo.find({ listid: listid, status: "D" }
            .then(todo => {
                res.send(todo);
            })
            .catch(err => console.log(err)
            ))
    }

}

module.exports = new todoController;