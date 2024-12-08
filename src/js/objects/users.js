const usuario = {
    fotoUrl: '',
    nome: '',
    bio: '',
    seguidores: '',
    seguindo: '',
    nomeUsuario: '',
    repositorios: [],
    eventos: [],

    setInfo(gitHubUser) {
        this.fotoUrl = gitHubUser.avatar_url;
        this.nome = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.nomeUsuario = gitHubUser.login;
        this.seguidores = gitHubUser.followers;
        this.seguindo = gitHubUser.following;
    },

    setRepositories(repositories) {
        this.repositorios = repositories;
    },

    setEvents(events) {
        this.eventos = events;
    }
}

export { usuario };