const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Tasks = require('./models/task')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET request are disabled')
//     } else {
//         next()
//     } 
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('please upload a word document'))
//         }
//         cb(undefined, true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// app.post('/upload', upload.single('upload'), (req,res) => {
//         res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})

// const test = require('./models/task')
// const main = async () => {
//     // const task = await Tasks.findById('5ece2b780e71724bb4d638a9')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5ece2a666976f0329851cf0c')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()
