const {Venta, DetalleVenta} = require('../db')
const ventas = require('../Utils/Ventas_registradas.json');
const detalleVenta = require('../Utils/Detalle_ventas_registradas.json');

const bulkVentas = async () => {
    try {
      await Venta.bulkCreate(ventas);
      await DetalleVenta.bulkCreate(detalleVenta)
      console.log('ventas add and Database');
    } catch (error) {
      console.log('DB has an error... bulkVentas');
    }
};
  

module.exports = bulkVentas;
