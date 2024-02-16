const Controller = require('./Controller');
const CategoriaService = require('../services/CategoriaService.js');

const categoriaServices = new CategoriaService();
class CategoriaController extends Controller {
  constructor() {
    super(categoriaServices);
  }
}

module.exports = CategoriaController;