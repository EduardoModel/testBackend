require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
// Isn't working...
// require('./src/bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // The path is relative from where the test are been called
  storage: './__tests__/database.sqlite',
  logging: process.env.NODE_ENV !== 'test',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
