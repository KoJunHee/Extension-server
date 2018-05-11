var config = {
    name: 'API',
    server: JSON.parse(process.env.HACAKDAY_EXTENSION),
    database: {
        mongo: JSON.parse(process.env.HACKDAY_EXTENSION_MONGO)
    }
};

module.exports = config;