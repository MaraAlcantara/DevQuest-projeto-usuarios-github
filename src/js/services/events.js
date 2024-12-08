import { baseURL, qtdeRepositorios } from '../variables.js';

async function getEventos(nomeDoUsuario) {
    const resposta = await fetch(`${baseURL}/${nomeDoUsuario}/events?per_page=${qtdeRepositorios}`);
    const eventos = await resposta.json();
    return eventos.filter(element => element.type === 'CreateEvent' || element.type === 'PushEvent').slice(0, qtdeRepositorios);   
}

export { getEventos };