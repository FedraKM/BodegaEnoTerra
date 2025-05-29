const express = require('express');
const cors = require('cors');
const { MercadoPagoConfig, Preference } = require('mercadopago');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de Mercado Pago con tu Access Token de TEST o PRODUCCIÓN
const mercadopago = new MercadoPagoConfig({
  accessToken: 'APP_USR-217398752564394-052709-b4c9269c7fe1658851b17f49d1ba5ef6-2459672499' // TOKEN DE USUARIO TEST
});

app.post('/crear-preferencia', async (req, res) => {
  try {
    const { items } = req.body;

    const preference = new Preference(mercadopago);

    const preferenceData = {
      items: items,
      back_urls: {
        success: "http://localhost:5500/compra-realizada.html",
        failure: "http://localhost:5500/pago.html",
        pending: "http://localhost:5500/pago.html"
      },
      auto_return: "approved"
    };

    console.log("Enviando preferencia a Mercado Pago:", preferenceData);

    const response = await preference.create({ body: preferenceData });

    res.json({ init_point: response.init_point });
  } catch (error) {
    console.error('Error al crear preferencia:', error);
    res.status(500).json({ error: 'No se pudo crear la preferencia' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});