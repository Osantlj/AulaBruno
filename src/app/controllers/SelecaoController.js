import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {

    index(req, res) {
        SelecaoRepository.index(req, res);
    }

    show(req, res) {
        SelecaoRepository.show(req, res);
    }

    store(req, res) {
        SelecaoRepository.store(req, res);
    }

    update(req, res) {
        SelecaoRepository.update(req, res);
    }

    delete(req, res) {
        SelecaoRepository.delete(req, res);
    }
}

export default new SelecaoController();