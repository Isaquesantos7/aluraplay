import { listVideosApi } from "./connection.js";
import createElementList  from "./showVideos.js";

async function searchVideo(e) {
    e.preventDefault();
    const dataSearch = document.querySelector('[data-search]').value;

    const searchVideo = await listVideosApi.searchVideo(dataSearch);

    const list = document.querySelector('[data-list]');

    searchVideo.forEach(element => list.appendChild(createElementList(element.titulo, element.descricao, element.url, element.imagem)));
}

const btn = document.querySelector('[data-submit]');

btn.addEventListener('click', (e) => searchVideo(e));