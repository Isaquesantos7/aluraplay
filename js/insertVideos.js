import {listVideosApi} from './connection.js';

const dataForm = document.querySelector('[data-form]');

async function createVideo(even) {

    even.preventDefault();

    const dataUrl = document.querySelector('[data-url]').value;
    const dataImg = document.querySelector('[data-img]').value;
    const dataTitle = document.querySelector('[data-title]').value;                           
    const description = Math.floor(Math.random() * 10).toString();

    console.log(dataUrl);
    
    await  listVideosApi.createVideo(dataTitle, description, dataUrl, dataImg);

    window.location.href = '../pages/envio-concluido.html' 
}

dataForm.addEventListener('submit', even => createVideo(even));
