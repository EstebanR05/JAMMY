
const API = 'http://localhost/usuarios'

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    console.log(this.response);
}

xhr.addEventListener('load', onRequestHandler());
xhr.open('GET', `${API}/?consultar=75`)
xhr.send()
