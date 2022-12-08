const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

console.log(process.env.PORT )
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://fileuploaddatabase:bhouriamongodbatlas123@shoeshop.0ybin.mongodb.net/fileuploadDatabase?retryWrites=true&w=majority'


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("<<=❤️❤️=>❤️❤️=>Database is connected <<=❤️❤️=>>");
    } catch (error) {
        console.log(error.message);
    }
}

connectDB();

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
