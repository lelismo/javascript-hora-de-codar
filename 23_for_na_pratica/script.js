var lista = ['laranja', 'maçã', 'pera', 'jaca', 'limão'];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');
//console.log(body[0]);
body[0].appendChild(listaUl);
var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {
    var liFor = document.createElement('li'); // criação do elemento li
    var textoLi = document.createTextNode(lista[i]); // criação do elemento com o texto dele
    liFor.appendChild(textoLi); // adiciona o texto pra dentro da li
    listaNoBody[0].appendChild(liFor); // adiciona cada li dentro da ul
}