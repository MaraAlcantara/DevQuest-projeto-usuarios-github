const tela = {
    perfilDoUsuario: document.querySelector('.dados-do-perfil'),

    renderUser(dadosDoUsuario) {
        this.perfilDoUsuario.innerHTML =
            `<div class="info">
                    <img src="${dadosDoUsuario.fotoUrl}" alt="foto do pefil do usuário" />
                    <div class="dados">
                        <h1>${dadosDoUsuario.nome ?? 'Não possui nome cadastrado 😢'}</h1>
                        <p>${dadosDoUsuario.bio ?? 'Não possui bio cadastrada 😢'}</p>
                        <p>🤩 Seguidores: ${dadosDoUsuario.seguidores}</p>
                        <p>😍 Seguindo: ${dadosDoUsuario.seguindo} </p>
                    </div>
                </div>`

        let itensDoRepositorio = '';

        dadosDoUsuario.repositorios.forEach(repo =>
            itensDoRepositorio +=
            `<div class="repos">
                <li> <a href="${repo.html_url}" target="_blank">${repo.name}</a> </li>
                <div class="painel">
                    <p>🍴 ${repo.forks_count} | </p>
                    <p>⭐ ${repo.stargazers_count} | </p>
                    <p>👀 ${repo.watchers_count} | </p>
                    <p>👩‍💻 ${repo.language ?? 'Sem Linguagem'}</p>
                </div>
            </div>`
            
        );

        if (dadosDoUsuario.repositorios.length > 0) {
            this.perfilDoUsuario.innerHTML +=
                `<div class="repositorios sessao">
                                <h2>Repositórios</h2>
                                <ul>${itensDoRepositorio}</ul>
                            </div>`
        }

        if (dadosDoUsuario.eventos.length > 0) {
            let itensDosEventos = '';

            dadosDoUsuario.eventos.forEach(events => {
                if (events.payload) {
                    if (events.payload.commits) {
                        const commits = events.payload.commits;
                        const listaCommits = commits.map(commit => `<span>${commit.message}</span>`);

                        itensDosEventos += `<p><span class="nome-evento">${events.repo.name} - </span> ${listaCommits}</p>`;
                    } else {
                        itensDosEventos += `<p><span class="nome-evento">${events.repo.name} - </span> Sem mensagem de Commit</p>`
                    }
                }
            })


            this.perfilDoUsuario.innerHTML +=
                `<div class="eventos">
                                <h2>Eventos</h2>
                                <p>${itensDosEventos}</p>
                            </div>`
        };

    },

    renderNotFound() {
        this.perfilDoUsuario.innerHTML = "<h3>Usuário não encontrado.</h3>";
    }
}

export { tela }
