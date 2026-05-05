const tarefaController = {
    listarTarefas: () => {
        const tarefas = tarefaService.listar();
        const lista = document.getElementById("listaTarefas");

        lista.innerHTML = "";

        tarefas.forEach(tarefa => {
            const item = document.createElement("li");
            item.textContent = `${tarefa.nome} - ${tarefa.horas}h`;

            const btn = document.createElement("button");
            btn.textContent = "Remover";
            btn.classList.add("btn-remover");

            btn.onclick = () => {
                tarefaController.removerTarefa(tarefa);
            };

            item.appendChild(btn);
            lista.appendChild(item);
        });
    },

    adicionarTarefa: () => {
        const nome = document.getElementById("nome").value;
        const horas = document.getElementById("horas").value;

        tarefaService.adicionar({ nome, horas });

        tarefaController.listarTarefas();
    },

    removerTarefa: (tarefa) => {
        tarefaService.remover(tarefa);
        tarefaController.listarTarefas();
    }
};