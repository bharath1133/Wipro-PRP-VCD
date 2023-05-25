require('dotenv').config();

const serverConfig={
    PORT:process.env.PORT
}

const dbConfig={
    MONGO_URI:process.env.MONGO_URI    
}

module.exports={
    serverConfig,
    dbConfig
}




