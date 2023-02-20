import { listVideosApi } from "./connection.js";

async function searchVideo(e) {
    e.preventDefault();
    const dataSearch = document.querySelector('[data-search]').value;

    const searchVideo = await listVideosApi.searchVideo(dataSearch);

    console.log(searchVideo);
}

const btn = document.querySelector('[data-submit]');

btn.addEventListener('click', (e) => searchVideo(e));