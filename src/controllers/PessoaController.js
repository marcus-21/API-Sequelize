const Controller = require('./Controller');
const PessoaService = require('../services/PessoaService.js');

const pessoaServices = new PessoaService();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      // erro
    }
  }
}

module.exports = PessoaController;