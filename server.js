const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
// const ip = 'localhost';
const ip = '192.168.1.132';

// Configurar la carpeta pública para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor ejecutándose en http://${ip}:${port}`);
});