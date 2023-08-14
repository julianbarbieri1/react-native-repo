import express from "express";
import { crearCliente, getMarketListCliente, getClienteById, getAllClientes } from "./database.js";
import cors from 'cors';

const corsOption = {
    origin: "http://192.168.0.117:8081", //especifica origen permitido
    methods: ["GET", "POST"], //especifica los metodos permitidos
    credentials: true, //permite enviar las credenciales (cookies, autenticacion)
}
const app = express();
app.use(express.json());
app.use(cors(corsOption));

app.get("/usuarios/:id", async(req,res) =>{
    const user = await getClienteById(req.params.id);
    res.status(200).send(user);
})

app.get("/usuarios", async (req, res) => {
    try {
      const users = await getAllClientes();
      res.status(200).json(users); // Cambiado send por json para enviar los datos en formato JSON
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Ha ocurrido un error en el servidor." });
    }
  });

app.post("/registrarse", async(req,res) => {
    const {nombre, usuario, contraseña} = req.user;
    const user = await crearCliente(nombre, usuario, contraseña)
    res.status(200).send(user);
})

app.listen(8080, () => {
    console.log("Server running on port 8080");
})