import { Sequelize } from "sequelize";
import { config } from "dotenv";
import pg from "pg";

config();

const {
  NODE_ENV,
  POSTGRES_HOST,
  POSTGRES_DATABASE,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

const configDb =
  NODE_ENV === "production"
    ? {
        username: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DATABASE,
        host: POSTGRES_HOST,
        port: 5432,
        dialect: "postgres",
        dialectModule: pg,
        define: {
          charset: "utf8mb4",
          collate: "utf8mb4_general_ci",
        },
        logging: false,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false, // Ajusta esto según tus necesidades de seguridad
          },
        },
      }
    : {
        dialect: "postgres",
        host: "localhost",
        port: 5433,
        database: "postgres",
        username: "postgres",
        password: "admin",
      };

const sequelize = new Sequelize(configDb);

export default sequelize;
