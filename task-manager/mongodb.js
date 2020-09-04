// CRUD  create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID('5f4da7dbf02d1eef4fe46845') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users')
    //     .find({ age: 38 })
    //     .count((error, count) => {
    //         console.log(count)
    //     })

    db.collection('tasks').findOne({ _id: ObjectID('5f4daa15343ba419770d0b4a') }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks')
        .find({ completed: false })
        .toArray((error, tasks) => {
            console.log(tasks)
        })
})
