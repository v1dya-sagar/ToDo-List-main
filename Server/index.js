const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/ToDo')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Afshith:sjcP6AlfFMd6AOzz@cluster0.f9gxsec.mongodb.net/?retryWrites=true&w=majority")
.then(()=> {
    console.log("running")
})

app.get('/get',  async (req,res) => {
     const data = await TodoModel.find()
     res.send(data)
}) 


app.put('/update/:id' , (req,res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id : id} , {done : true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id' , async (req , res) => {
    const {id} = req.params;
     await TodoModel.findByIdAndDelete({_id : id} )
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add',async (req,res ) => {
    const task = req.body.task;
    await TodoModel.create({
        task : task
    }).then(result => res.json(result))
    .catch(err => res.json(err))

})




app.listen(3001, () => {
    console.log("server is running");
})