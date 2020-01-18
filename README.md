# Semana Omnistack #10 | Rocketseat

- Desenvolvimento de uma aplicação utilizando a stack **Node.js**, **ReactJS** e **React Native**.
- A aplicação tem por intuito apresentar os devs que trabalham com determinada tecnologia e estão em um determinado raio da área do usuário.
- Na interface web é possível cadastrar seu perfil, informando usuário do github, onde as demais informações serão buscadas, tecnologias, latitude e longitude de onde está, as quais são preenchidas automaticamente utilizando a api de _geolocalização_ do navegador.
- Na aplicação mobile, é possível procurar pelos devs por perto que se encaixam nas tecnologias que forem escolhidas.
- Através de um _websocket_ foi feita a comunicação cliente/servidor em tempo real, ao cadastrar um novo dev na interface web, caso tenha alguém no app mobile pesquisando por alguma tecnologia em um determinado ponto do mapa e esse novo dev cadastrado atender aos requisitos da pesquisa feita pelo mobile, o novo dev aparecerá em tempo real para quem está no mobile.

### Telas

- Interface Web: cadastro de usuários.

<h1 align="center">
  <img alt="Web" title="Web" src=".github/web.png" width="800px" />
</h1>

- Interface Mobile: pesquisar devs por tecnologia e localização.

<h1 align="center">
  <img alt="Mobile" title="Mobile" src=".github/mobile.png" width="400px" />
</h1>
