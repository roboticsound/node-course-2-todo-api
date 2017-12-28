const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a45374878425315a87448c41';
var userId = '5a3ffa05336f3f2ee0260b9d';


// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// //useful if you only want one result as doesnt return an array
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// // Todo.findById(id).then((todo) => {
// //     if (!todo) {
// //         return console.log('ID not found');
// //     }
// //     console.log('Todo by ID', todo);
// // }).catch((e) => {
// //     console.log(e);
// // });

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));

}).catch((e) => console.log(e));
