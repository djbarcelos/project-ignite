import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/johnwick.png",
      name: "John Wick",
      role: "Usuário Teste"
    },
    content: [
      { type: 'paragraph', content: 'Oi, pessoal!' },
      { type: 'paragraph', content: 'Quero compartilhar uma novidade com vocês! Acabei de concluir um projeto que venho trabalhando nas últimas semanas e estou bastante animado com o resultado. 🎉' },
      { type: 'paragraph', content: 'O projeto se chama EcoTrack 🌱 e foi desenvolvido para ajudar na gestão e rastreamento de iniciativas ambientais em tempo real. Utilizei várias tecnologias novas e aprendi muito durante o processo.' },
      { type: 'paragraph', content: 'Estou super interessado em ouvir o que vocês acham! Se puderem dar uma olhada e compartilhar suas opiniões, eu ficaria muito grato. Toda contribuição é valiosa para mim. 😃' },
      { type: 'paragraph', content: 'Agradeço desde já pelo apoio e feedback! Até mais.' },
      { type: 'hashtags', content: '#Programação' },
      { type: 'hashtags', content: '#Desenvolvedor' },
      { type: 'hashtags', content: '#FeedbackBemVindo' },
      { type: 'hashtags', content: '#Portfólio2024' },
    ],
    publishedAt: new Date('2024-08-02 10:34:00'),
    comments: [{ id: 1, content: "Post muito legal!!", publishedIn: new Date('2024-08-02 18:54:00') }]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/annecaroline.png",
      name: "Anne Caroline",
      role: "Senior QA Tester"
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera! 👋' },
      { type: 'paragraph', content: 'Acabei de subir um novo projeto no meu portfólio! 🎉 É um projeto que desenvolvi durante o NLW Return, um evento incrível da Rocketseat. O nome do projeto é DoctorCare 🚀.' },
      { type: 'paragraph', content: 'Dêem uma olhada e me digam o que acharam! Feedback é sempre bem-vindo. 😄' },
      { type: 'paragraph', content: 'Obrigado por conferir e apoio sempre! 💪' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-08-01 13:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/marcelocampos.png",
      name: "Marcelo Campos",
      role: "Front-end Developer"
    },
    content: [
      { type: 'paragraph', content: 'Olá, pessoal! 👋' },
      { type: 'paragraph', content: 'Acabei de finalizar a integração com a API do projeto **ShopEasy** 🛒. Agora, os usuários podem consultar produtos em tempo real e adicionar ao carrinho de forma mais ágil.' },
      { type: 'paragraph', content: 'Foi um desafio interessante, especialmente para garantir que a interface fosse responsiva e intuitiva. Estou aberto a sugestões e críticas construtivas.' },
      { type: 'paragraph', content: 'Confiram o resultado e me digam o que acham!' },
      { type: 'hashtags', content: '#FrontEnd' },
      { type: 'hashtags', content: '#DesenvolvimentoWeb' },
      { type: 'hashtags', content: '#ShopEasy' }
    ],
    publishedAt: new Date('2024-08-03 09:00:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/susancost.png",
      name: "Susan Cost",
      role: "UI/UX Designer"
    },
    content: [
      { type: 'paragraph', content: 'Oi, gente! 🌟' },
      { type: 'paragraph', content: 'Terminei o redesign da interface do **FitApp** 💪. A ideia foi criar uma experiência mais envolvente e intuitiva para os usuários durante o acompanhamento das atividades físicas.' },
      { type: 'paragraph', content: 'Estou super animada para ver a reação dos usuários e como essas mudanças impactam a usabilidade. Agradeço a todos que colaboraram!' },
      { type: 'hashtags', content: '#UIUX' },
      { type: 'hashtags', content: '#DesignDeInteração' },
      { type: 'hashtags', content: '#FitApp' }
    ],
    publishedAt: new Date('2024-08-04 15:30:00'),
    comments: [{ id: 1, content: "Susan, ficou incrível o design!👋👋", publishedIn: new Date('2024-08-04 23:13:00') }]
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://github.com/lucasribeiro.png",
      name: "Lucas Ribeiro",
      role: "Backend Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera! 🚀' },
      { type: 'paragraph', content: 'Finalizei a implementação do novo serviço de autenticação para o projeto **SecureAuth** 🔐. Agora, os usuários têm uma experiência de login muito mais segura e eficiente.' },
      { type: 'paragraph', content: 'Foi um trabalho intenso, mas estou feliz com o resultado. Se alguém tiver feedback ou sugestões, ficarei feliz em ouvir!' },
      { type: 'hashtags', content: '#Backend' },
      { type: 'hashtags', content: '#Autenticação' },
      { type: 'hashtags', content: '#SecureAuth' }
    ],
    publishedAt: new Date('2024-08-05 11:45:00')
  },
  {
    id: 6,
    author: {
      avatarUrl: "https://github.com/larissafreitas.png",
      name: "Larissa Freitas",
      role: "Data Scientist"
    },
    content: [
      { type: 'paragraph', content: 'Oi, pessoal! 🧠' },
      { type: 'paragraph', content: 'Acabei de concluir uma análise de dados para o projeto **MarketInsights** 📈. A análise revelou algumas tendências interessantes que podem ajudar na tomada de decisões estratégicas.' },
      { type: 'paragraph', content: 'Estou disponível para discutir os detalhes da análise e como podemos aplicar essas descobertas.' },
      { type: 'hashtags', content: '#DataScience' },
      { type: 'hashtags', content: '#AnáliseDeDados' },
      { type: 'hashtags', content: '#MarketInsights' }
    ],
    publishedAt: new Date('2024-08-06 14:00:00')
  },
  {
    id: 7,
    author: {
      avatarUrl: "https://github.com/robertoalves.png",
      name: "Roberto Alves",
      role: "DevOps Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Olá a todos! 🛠️' },
      { type: 'paragraph', content: 'Implementamos uma nova estratégia de deploy contínuo para o projeto **DeployMaster** 🚀. Agora, os ciclos de deploy estão muito mais rápidos e confiáveis.' },
      { type: 'paragraph', content: 'Foi um desafio ajustar todas as ferramentas e processos, mas o resultado está ótimo. Qualquer feedback é bem-vindo!' },
      { type: 'hashtags', content: '#DevOps' },
      { type: 'hashtags', content: '#DeployContínuo' },
      { type: 'hashtags', content: '#DeployMaster' }
    ],
    publishedAt: new Date('2024-08-07 10:00:00')
  },
  {
    id: 8,
    author: {
      avatarUrl: "https://github.com/felipeoliveira.png",
      name: "Felipe Oliveira",
      role: "Mobile Developer"
    },
    content: [
      { type: 'paragraph', content: 'Oi, galera! 📱' },
      { type: 'paragraph', content: 'Acabei de concluir o desenvolvimento de uma nova funcionalidade para o **TravelApp** 🌍. Agora, os usuários podem criar e compartilhar roteiros personalizados de viagem.' },
      { type: 'paragraph', content: 'Estou super empolgado para ver a reação dos usuários. Se alguém tiver sugestões de melhorias, por favor, me avise!' },
      { type: 'hashtags', content: '#MobileDevelopment' },
      { type: 'hashtags', content: '#TravelApp' },
      { type: 'hashtags', content: '#FuncionalidadeNova' }
    ],
    publishedAt: new Date('2024-08-08 16:00:00')
  },
  {
    id: 9,
    author: {
      avatarUrl: "https://github.com/amandabrito.png",
      name: "Amanda Brito",
      role: "Product Manager"
    },
    content: [
      { type: 'paragraph', content: 'Olá, equipe! 🏆' },
      { type: 'paragraph', content: 'Estamos lançando uma nova versão do **ProductX** 🚀 com várias melhorias e correções de bugs. Agradeço a todos pelo esforço e colaboração!' },
      { type: 'paragraph', content: 'Estamos ansiosos para o feedback dos usuários e para continuar aprimorando nosso produto.' },
      { type: 'hashtags', content: '#GerenciamentoDeProduto' },
      { type: 'hashtags', content: '#ProductX' },
      { type: 'hashtags', content: '#Lançamento' }
    ],
    publishedAt: new Date('2024-08-09 12:00:00')
  },
  {
    id: 10,
    author: {
      avatarUrl: "https://github.com/joaodasilva.png",
      name: "João da Silva",
      role: "Systems Analyst"
    },
    content: [
      { type: 'paragraph', content: 'Oi, pessoal! 🔍' },
      { type: 'paragraph', content: 'Concluí uma análise detalhada do sistema **InfoSys** e identifiquei várias oportunidades de melhoria. A análise está disponível para revisão e comentários.' },
      { type: 'paragraph', content: 'Agradeço a todos que participaram do processo de coleta de dados e feedback!' },
      { type: 'hashtags', content: '#AnáliseDeSistema' },
      { type: 'hashtags', content: '#InfoSys' },
      { type: 'hashtags', content: '#Melhorias' }
    ],
    publishedAt: new Date('2024-08-10 18:00:00')
  }
];


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>
          SideBar
        </Sidebar>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                listComments={post.comments}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
