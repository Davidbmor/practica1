// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());  // Habilitar CORS para todas las solicitudes
app.use(express.json());  // Para parsear JSON en el cuerpo de la solicitud

let currentState = [];  // Aquí guardamos el estado del juego

app.get('/', (req, res) => {
    res.send('Bienvenido a la REST API con Node.js y import!');
});

// Ruta para guardar el estado del juego (POST)
app.post('/api/state', (req, res) => {
    currentState = req.body.cartas;  // Guardamos las cartas enviadas desde el cliente
    res.status(200).json({ message: 'Estado guardado exitosamente', state: currentState });
});

// Ruta para obtener el estado del juego (GET)
app.get('/api/state', (req, res) => {
    res.status(200).json({ cartas: currentState });  // Enviamos las cartas almacenadas
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
