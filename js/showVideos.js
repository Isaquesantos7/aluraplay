import { listVideosApi } from "./connection.js";

const list = document.querySelector('[data-list]');

function createElementList(title, description, url, imagem) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="${title} frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video" data-description>
            <img src="${imagem}" alt="logo canal alura">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;

    return video;
}


async function connectionApiServer() {
    const connectApi = await listVideosApi.connectionApiServer();

    connectApi.forEach(even => list.appendChild(createElementList(even.titulo, even.descricao, even.url, even.imagem)));
}

connectionApiServer();