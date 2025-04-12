# Análise de Sentimentos - Interface Frontend

Uma interface interativa para explorar o processamento de linguagem natural (PLN) aplicado à análise de sentimentos em textos.

![Análise de Sentimentos](https://img.shields.io/badge/Análise_de_Sentimentos-PLN-blue)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8)

## 📋 Descrição

Este projeto foi desenvolvido como parte da matéria de Qualificação Profissional do Curso Técnico em Informática para Internet no CEMIC. O objetivo é apresentar, de maneira dinâmica e interativa, o processo de análise de linguagem natural aplicado à análise de sentimentos.

O usuário pode submeter frases para análise e visualizar:
- A classificação de sentimento (positivo, negativo ou neutro)
- Uma explicação detalhada do processo de análise
- Um poema gerado por IA baseado no sentimento detectado

## 🚀 Tecnologias Utilizadas

### Frontend
- **Vue.js 3**: Framework JavaScript progressivo para construção de interfaces
- **TypeScript**: Adiciona tipagem estática ao JavaScript
- **TailwindCSS**: Framework CSS utilitário para design rápido
- **Vuex**: Gerenciamento de estado centralizado
- **Axios**: Cliente HTTP para comunicação com API

### Backend
- **FastAPI**: Framework web Python de alto desempenho
- **Redis**: Banco de dados em memória para caching
- **NLP Cloud API**: Serviço para análise de sentimentos
- **Gemini API**: Modelo de linguagem para geração de conteúdo
- **Docker**: Contêinerização para implantação

## 🔧 Instalação e Configuração

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/sentiment-analysis-front.git
cd sentiment-analysis-front
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure o arquivo `.env` com a URL da API:
```
VITE_API_URL=https://api.sentiment.floresdev.com.br
# ou seu backend local
# VITE_API_URL=http://localhost:8000
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 🏗️ Estrutura do Projeto

```
sentiment-analysis-front/
├── public/            # Arquivos estáticos
├── src/
│   ├── assets/        # Recursos como CSS, imagens
│   ├── components/    # Componentes Vue reutilizáveis
│   ├── interfaces/    # Definições de tipos TypeScript
│   ├── store/         # Gerenciamento de estado Vuex
│   ├── App.vue        # Componente raiz
│   └── main.ts        # Ponto de entrada da aplicação
├── index.html         # HTML principal
├── package.json       # Dependências e scripts
├── tsconfig.json      # Configuração TypeScript
└── vite.config.ts     # Configuração do Vite
```

## 📊 Como Funciona

1. **Entrada de Texto**: O usuário digita frases para análise
2. **Processamento de API**: O texto é enviado ao backend
3. **Análise NLP**: O backend utiliza a API NLP Cloud para análise de sentimentos
4. **Processamento Criativo**: A API Gemini gera explicações e poemas
5. **Visualização**: Os resultados são exibidos de forma interativa

## 👨‍💻 Equipe de Desenvolvimento

- **[Fernando Aurelius](https://github.com/FernandoAurelius)**: Desenvolvimento do frontend e colaboração no backend
- **[Carlos Eduardo](https://github.com/carloseduardofalmada)**: Desenvolvimento principal do backend

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
