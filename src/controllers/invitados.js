import { Invitado, Bebida } from "../models/index.js";
import data from "../config/data.js";

const arrayBebidas = [
  "Fernet",
  "Cerveza",
  "Gancia",
  "Vino tinto",
  "Vino blanco",
  "Vino espumante",
  "Frizze",
  "No tomo",
];

export const getInvitados = async (req, res) => {
  try {
    let invitados = await Invitado.findAll();
    if (invitados.length === 0) {
      await Invitado.bulkCreate(
        data.map((el) => ({
          name: el.name,
          music: null,
          assist: null,
        }))
      );

      invitados = await Invitado.findAll();
    }

    res.status(200).json({
      data: invitados,
      success: true,
      message: "Invitados creados exitosamente.",
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor." });
  }
};
export const getBebidas = async (req, res) => {
  try {
    let bebidas = await Bebida.findAll();
    if (bebidas.length === 0) {
      await Bebida.bulkCreate(arrayBebidas.map((el) => ({ name: el })));

      bebidas = await Bebida.findAll();
    }
    const newBebidas = bebidas.map((item) => ({
      id: item.id,
      name: item.name,
    }));

    res.status(200).json({
      data: newBebidas,
      success: true,
      message: "Bebidas creados exitosamente.",
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor." });
  }
};

export const postInvitation = async (req, res) => {
  const { id, assist } = req.body?.invitado;
  const { musica, bebidas } = req.body;

  try {
    const findInvitado = await Invitado.findByPk(id);
    if (assist) {
      console.log(req.body);
      findInvitado.music = musica;
      findInvitado.bebida = bebidas;
    }
    findInvitado.assist = assist;

    await findInvitado.save();

    return res.status(200).json({
      data: null,
      success: true,
      message: "Invitado actualizado exitosamente.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error en el servidor." });
  }
};

export const createEvent = (req, res) => {
  const event = {
    summary: "Casamiento de Cris y Flor",
    location: "Ubicación del evento",
    description: "Los esperamos",
    start: {
      dateTime: "2023-11-18T21:00:00",
      timeZone: "America",
    },
    end: {
      dateTime: "2023-09-30T12:00:00",
      timeZone: "Tu_Zona_Horaria",
    },
  };

  try {
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};
