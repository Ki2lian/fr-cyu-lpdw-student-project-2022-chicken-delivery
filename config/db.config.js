module.exports = {
    HOST: "db",
    USER: "db_user",
    PASSWORD: "db_user_pass",
    DB: "app_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };