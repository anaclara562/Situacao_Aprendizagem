let tarefas = [];

const tarefaRepository = {
    listar: () => tarefas,

    salvar: (tarefa) => {
        tarefas.push(tarefa);
        return tarefa;
    },

    remover: (tarefa) => {
        tarefas = tarefas.filter(l => t.nome !== t.nome);
    }
};