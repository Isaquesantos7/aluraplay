async function connectionApiServer() {
    const connectApi = await fetch('http://localhost:3000/videos');
    const transformedConnectApi = await connectApi.json();

    return transformedConnectApi; 
}

export const listVideosApi = {
    connectionApiServer
};