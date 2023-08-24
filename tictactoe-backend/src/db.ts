import mongoose from "mongoose";
const dbConnection = mongoose.createConnection('mongodb+srv://alirezarzna:TbAYOAoTkbdIYGWK@cluster0.tcezxfn.mongodb.net/?retryWrites=true&w=majority')

dbConnection.once('connected', () => {
    console.log('Mongoose connected to appConnection');
  });

export default dbConnection