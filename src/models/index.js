import InvitadoModel from "../models/Invitado.js";
import BebidaModel from "../models/Bebida.js";
import sequelize from "../config/sequelize.js";

const modelDefiners = [InvitadoModel, BebidaModel];

// Injectamos la conexión (sequelize) a todos los modelos
modelDefiners?.forEach((model) => new model(sequelize));

// Capitalizamos los nombres de los modelos, es decir, 'invitado' => 'Invitado'
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

export const { Invitado, Bebida } = sequelize.models;
