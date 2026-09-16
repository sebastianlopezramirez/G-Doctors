const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

// Servir todos los archivos estáticos de esta carpeta
app.use(express.static(__dirname));

// Ruta raíz → index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`G Doctors corriendo en puerto ${PORT}`);
});
