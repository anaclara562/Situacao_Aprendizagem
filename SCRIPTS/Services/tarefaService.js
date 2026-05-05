const tarefaService = {
    listar: () => {
        return tarefaRepository.listar();
    },

    adicionar: (tarefa) => {
        if (!tarefa.nome) {
            alert("O Título é obrigatório!");
            return;
        }
        return tarefaRepository.salvar(tarefa);
    },

    remover: (tarefa) => {
        tarefaRepository.remover(tarefa)
    }
};