const express = require('express');

const {ServerConfig, Logger} = require('./config');
const app = express();
const apiRoutes = require('./routes')


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () =>{
    console.log(`listening to port : ${ServerConfig.PORT}`)
    Logger.info("succesfullt created port work");
})