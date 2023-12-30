//a função addnewtask serve para adicionar uma nova tarefa no site. 
function addnewtask(){ 
    //esse var significa variável e esse document.getElementById serve para especificar qual elemento você deseja manusear pelo js.
    //nesse caso, criei uma variável para a lista e para o campo de inserção, ambos estando com suas identificações especificadas.
    var list = document.getElementById("list");
    //esse value retorna o objeto da forma que lhe foi entregue
    var text = document.getElementById("taskname").value;

    //aqui usei um if, que é uma condição. Ele serve para que quando o usuário não preencha o campo e mesmo assim aperte em "adicionar", o site emila um alerta dizendo que precisa de maus caracteres.
    if(text.length === 0) {
        alert('é necessário pelo menos 1 caractere');
        return;
        //return serve para que isso seja conínuo.
    }

    //já aqui, criei uma variável com o intuito de manusear um elemento criado por mim mesmo que chamei de 'li'. ele não possui nenhuma id então tive que criálo.
    var listItem = document.createElement("li");
    //aqui eu usei uma classe que faz com que a minha list-item do css que fiz seja aplicada na ação do js no site.
    listItem.className = "list-item";

    //aqui fiz com que a minha variável text fosse constante no sentido de texto.
    const textElement = document.createTextNode(text);
    //aqui usei o appenchild, que pode adicionar novos itens a minha lista, ou criar uma totalmente nova. nessse caso se aplicando a minha constante e a minha variável listItem.
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}