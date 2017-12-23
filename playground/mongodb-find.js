// const Mongoclient = require('mongodb').Mongoclient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');
//
//     // db.collection('Todos').find({
//     //     _id: new ObjectID('5a3c121696e69131f8cee128')
//     // }).toArray().then((docs) => {
//     //     console.log('Todos');
//     //     console.log(JSON.stringify(docs, undefined, 2));
//     // }, (err) => {
//     //     console.log('Unable to fetch todos', err);
//     // });
//     //
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    db.collection('Users').find({name: 'Erin'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    });

    client.close();
});


// const { MongoClient, ObjectID } = require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }
//   const db = client.db('TodoApp');
//   console.log('Connected to MongoDB server');
//   db.collection('Todos').insertOne({
//     text: 'Wash car',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
// });
