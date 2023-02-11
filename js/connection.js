async function connectionApiServer() {
    const connectApi = await fetch('http://localhost:3000/videos');
    const transformedConnectApi = await connectApi.json();

    return transformedConnectApi; 
}

async function createVideo(title, description, url, image) {
    const connectApi = await fetch('http://localhost:3000/videos', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            titulo:title,
            descricao:`${description} mil visualizações.`,
            url:url,
            imagem:image
        })

    });

    const transformedConnectApi = await connectApi.json();

    return transformedConnectApi;
}

export const listVideosApi = {
    connectionApiServer,
    createVideo
};