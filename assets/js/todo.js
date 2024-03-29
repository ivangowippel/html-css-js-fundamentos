let data = [];

function renderTodo() {

  document.querySelector('.todo').innerHTML = "";

  data.forEach(task => {

    let li = document.createElement('li');

    li.innerHTML = `
      <input type="checkbox" id="task-${task.id}">
      <label for="task-${task.id}">${task.title}</label>
      <button type="button">x</button>
    `;

    li.querySelector('input').addEventListener("change", e => {

      if (e.target.checked) {
        li.classList.add('complete');
      } else {
        li.classList.remove("complete");
      }

    });

    li.querySelector('button').addEventListener('click', e => {

      //let todoId = e.target.parentNode.querySelector('input').id.split('-')[1];
      /*Para entender melhor o que esta acontecendo na instrução acima,
        vamos abrir em variáveis
      */
      let button = e.target;
      let li = button.parentNode;
      let input = li.querySelector('input');
      let id = input.id;
      let idArray = id.split('-');
      let todoId = idArray[1];

      let title = li.querySelector('label').innerText; //busca o nome da tarefa

      if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {

        //o filter ignora a tarefa selecionada informada através do todoId
        data = data.filter(task => task.id !== parseInt(todoId));
              
        renderTodo();

      };     

    });

    document.querySelector('.todo').append(li);

  });

}

document.querySelector('#new-task').addEventListener('keyup', e => {

  if (e.key == 'Enter') {

    data.push({
      id: data.length + 1,
      title: e.target.value
    });

    e.target.value = "";

    renderTodo();

  }

});

renderTodo();