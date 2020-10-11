const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).sendStatus('Site is currently down. Check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById('5f822f44c4bc77e4fccbacce')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5f822e0f3f548394fddf0f07')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
