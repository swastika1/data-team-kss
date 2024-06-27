exports.resolve = async (config) => {
    require('dotenv').config();

    const connections = [{
        id: process.env.DB_NAME,
        client: 'pg',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            password: process.env.DB_PASSWORD,
            ssl: process.env.ENV === 'local' ? false : { rejectUnauthorized: false }
        },
    }
    // {
    //     id: process.env.DB2_NAME,
    //     client: 'pg',
    //     connection: {
    //         database: process.env.DB2_NAME,
    //         user: process.env.DB_USER,
    //         host: process.env.DB_HOST,
    //         password: process.env.DB_PASSWORD,
    //         ssl: false
    //     },
    // }
]

    return connections;
};