# 🏋️‍♂️ Feitness Club — Sistema Web de Agendamento Fitness

> *"Mais que fitness. Feitness!"*

Aplicação web Full Stack desenvolvida para o gerenciamento e agendamento de aulas personalizadas com Personal Trainers. O sistema conta com interface interativa, renderização gráfica dinâmica via HTML5 Canvas 2D e integração com banco de dados em nuvem (MongoDB Atlas) para controle de vagas por turma e validação de CPF.

---

## 🚀 Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3 (Flexbox, Keyframe Animations), JavaScript (ES6+, Fetch API, Canvas 2D API)
- **Back-end:** Node.js, Express.js
- **Banco de Dados:** MongoDB Atlas (Driver oficial `mongodb`)
- **Segurança & Configuração:** `dotenv` para gerenciamento de variáveis de ambiente

---

## ⚙️ Funcionalidades

- **Renderização Gráfica em Canvas (`<canvas>`):** Títulos e slogans desenhados dinamicamente com gradientes e sombras via JavaScript, adaptáveis ao redimensionamento da tela.
- **Sistema de Agendamento Inteligente:**
  - Painel retrátil com animação `fadeIn` para consulta da grade horária e preenchimento do formulário.
  - Envio assíncrono de dados (`POST /cadastrar_aulas`) via `fetch` sem recarregar a página.
  - **Regra de Negócio — Limite de Turma:** Validação no servidor que permite no máximo **4 participantes** por horário (ID da aula de 1 a 12).
  - **Regra de Negócio — Controle de Duplicidade:** Impede que o mesmo CPF realize múltiplos agendamentos na mesma aula.
- **Páginas Institucionais:**
  - **Home:** Apresentação da filosofia do clube, diferenciais, horários de funcionamento e localização integrada via Google Maps.
  - **Sobre:** Detalhamento da arquitetura do projeto, funcionamento das rotas e referências.
  - **Autores:** Apresentação dos desenvolvedores responsáveis pelo projeto.

---

## 📅 Grade de Aulas Disponíveis

| Horário | ID da Aula | Profissional | Modalidade |
| :---: | :---: | :--- | :--- |
| 08h00 | 1 | Davi Pinheiro | Treinamento Funcional |
| 09h00 | 2 | Davi Pinheiro | HIIT (Treino Intervalado) |
| 10h00 | 3 | Davi Pinheiro | Core & Abdômen |
| 11h00 | 4 | Davi Pinheiro | Mobilidade e Alongamento |
| 12h00 | 5 | Davi Pinheiro | Cross Training |
| 13h00 | 6 | Davi Pinheiro | Power Lifting |
| 14h00 | 7 | Alessandro Moreira | Pilates Funcional |
| 15h00 | 8 | Alessandro Moreira | Yoga & Respiração |
| 16h00 | 9 | Alessandro Moreira | Zumba Fitness |
| 17h00 | 10 | Alessandro Moreira | Ritmos (Dance Workout) |
| 18h00 | 11 | Alessandro Moreira | Spinning (Bike Indoor) |
| 19h00 | 12 | Alessandro Moreira | Relaxamento e Meditação |

---

## 📁 Estrutura de Diretórios

```text
feitness-club/
├── public/                     # Recursos estáticos (CSS, JS client-side e Imagens)
│   ├── agendamentos.js         # Lógica do painel, Canvas e requisição Fetch (POST)
│   ├── home.js                 # Renderização do Canvas da página inicial
│   ├── sobre.js                # Renderização do Canvas da página Sobre
│   ├── main.css                # Estilização global, animações e responsividade
│   ├── feitness_club.png       # Logotipo oficial
│   ├── Tabela.png              # Grade visual de horários e IDs das aulas
│   ├── Gym-Home.jpg            # Banner da página Home
│   ├── Gym-Agendamentos.jpg    # Banner da página de Agendamentos
│   ├── Gym-Sobre.jpg           # Banner da página Sobre
│   ├── Autores.jpg             # Foto dos autores do projeto
│   └── favicon.ico             # Ícone da aba do navegador
│
├── views/                      # Interfaces de usuário (Páginas HTML)
│   ├── home.html               # Página principal
│   ├── agendamentos.html       # Página de marcação de aulas
│   ├── sobre.html              # Documentação visual e referências
│   └── autores.html            # Informações da equipe
│
├── .env.example                # Modelo de variáveis de ambiente
├── .gitignore                  # Arquivos ignorados pelo Git (node_modules, .env)
├── package.json                # Dependências e scripts do projeto
├── servidor.js                 # Servidor Node.js/Express e rotas da API
└── README.md                   # Documentação do repositório