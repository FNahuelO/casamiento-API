import path from "path";
import fs from "fs";
import { Invitado, Bebida } from "../models/index.js";
import { fileURLToPath } from "url";
import data from "../config/data.js";
import { calendar } from "googleapis/build/src/apis/calendar/index.js";

const arrayBebidas = [
  "Fernet",
  "Cerveza",
  "Gancia",
  "Vino tinto",
  "Vino blanco",
  "Vino espumante",
  "Frizze",
  "No tomo"
];

export const getInvitados = async (req, res) => {
  try {
    let invitados = await Invitado.findAll();
    if (invitados.length === 0) {
      await Invitado.bulkCreate(
        data.map((el) => ({
          name: el.nombre,
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

    res.status(200).json({
      data: bebidas,
      success: true,
      message: "Bebidas creados exitosamente.",
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor." });
  }
};

export const postInvitation = async (req, res) => {
  const { music, bebida, confirm, id } = req.body[0];
  try {
    const findInvitado = await Invitado.findByPk(id);

    findInvitado.music = music;
    findInvitado.bebida = bebida;
    findInvitado.confirm = confirm;

    await findInvitado.save();

    return res.status(200).json({
      data: invitadoEncontrado,
      success: true,
      message: "Invitado actualizado exitosamente.",
    });
  } catch (error) {
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
