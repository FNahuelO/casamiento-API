import { STRING, UUID, UUIDV4 } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const Bebida = sequelize.define("Bebida", {
  id: {
    type: UUID,
    defaultValue: UUIDV4, // Para generar un UUID automáticamente
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
});

export default Bebida;
