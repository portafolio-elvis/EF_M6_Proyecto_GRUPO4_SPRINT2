import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Tarjeta = sequelize.define('Tarjetas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  estado: {
    type: DataTypes.STRING
  }
})

export default Tarjeta;