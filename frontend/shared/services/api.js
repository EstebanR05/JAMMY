const xhr = new XMLHttpRequest();
function onRequestHandler() {
    console.log(this.response);
}
xhr.addEventListener('load', onRequestHandler());
xhr.open('GET', `${API}/?consultar=75`)
xhr.send()

API = 'http://localhost/usuarios'

fetch().then(response => response.json()).then(json => console.log(json))
