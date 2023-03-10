import { listVideosApi } from "./connection.js";
import createElementList  from "./showVideos.js";

async function searchVideo(e) {
    e.preventDefault();
    const dataSearch = document.querySelector('[data-search]').value;

    const searchVideo = await listVideosApi.searchVideo(dataSearch);

    const list = document.querySelector('[data-list]');

    /* removing the first child of list */
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }

    searchVideo.forEach(element => list.appendChild(createElementList(element.titulo, 
        element.descricao, element.url, element.imagem))
    );

    
    if (searchVideo.length == 0) {
        list.innerHTML = `<h2 class="mensagem__titulo">No exist video with this term.</h2>`;
    }
}

const btn = document.querySelector('[data-submit]');

btn.addEventListener('click', (e) => searchVideo(e));