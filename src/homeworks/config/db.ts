export default {
  DB: "postgres",
  USER: "nghiann",
  PASSWORD: "123456",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};
