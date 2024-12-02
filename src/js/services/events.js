import { baseURL, qtdeRepositorios } from '../variables.js';

async function getEventos(nomeDoUsuario) {
    const resposta = await fetch(`${baseURL}/${nomeDoUsuario}/events?per_page=${qtdeRepositorios}`);
    return await resposta.json();
}

export {getEventos};