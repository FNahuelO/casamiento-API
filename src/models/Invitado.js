import { STRING, UUID, ARRAY, BOOLEAN, UUIDV4 } from "sequelize";
import { sequelize } from "../config/sequelize.js";
//import Bebida from "./Bebida.js"; // Asegúrate de importar el modelo de Bebida

const Invitado = sequelize.define("Invitado", {
  id: {
    type: UUID,
    defaultValue: UUIDV4, // Para generar un UUID automáticamente
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  music: {
    type: ARRAY(STRING), // Tipo de array de strings
  },
  bebida: {
    type: ARRAY(STRING),
  },
  assist: {
    type: BOOLEAN,
    defaultValue: false, // Valor por defecto: false
  },
});
/* Invitado?.belongsToMany(Bebida, {
  through: "InvitadoBebida",
  foreignKey: "id_invitado",
}); */

export default Invitado;
