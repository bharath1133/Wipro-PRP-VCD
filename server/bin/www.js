const app=require('../app');

const {serverConfig}=require('../config')

app.listen(serverConfig.PORT,()=>{
    console.log(`server is running in the port ${serverConfig.PORT}`);
})

