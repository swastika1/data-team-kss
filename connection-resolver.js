exports.resolve = async (config) => {
    require('dotenv').config();

    const connections = [{
        id: process.env.DB1_NAME,
        client: 'pg',
        connection: {
            database: process.env.DB1_NAME,
            user: process.env.DB1_USER,
            host: process.env.DB1_HOST,
            password: process.env.DB1_PASSWORD,
            ssl: false
        },
    },
    {
        id: process.env.DB2_NAME,
        client: 'pg',
        connection: {
            database: process.env.DB2_NAME,
            user: process.env.DB2_USER,
            host: process.env.DB2_HOST,
            password: process.env.DB2_PASSWORD,
            ssl: false
        },
    }]

    return connections;
};