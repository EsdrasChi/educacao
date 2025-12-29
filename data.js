// ==========================================
// EDULEARN - DADOS DE SOCIOLOGIA
// 8 Seções x 10 Unidades x 15 Blocos
// ==========================================

// Dados de Sociologia (será atribuído ao SUBJECT_DATA global)
const SOCIOLOGY_SECTIONS = [
    {
        id: 1,
        title: 'Fundamentos da Sociologia',
        subtitle: 'O que é sociologia e como ela surgiu',
        icon: 'fa-seedling',
        color: '#58cc02',
        difficulty: 1,
        description: 'Descubra as origens da sociologia, seus principais objetivos e como ela nos ajuda a entender a sociedade.',
        unitsCount: 10
    },
    {
        id: 2,
        title: 'Os Clássicos',
        subtitle: 'Marx, Durkheim e Weber',
        icon: 'fa-landmark',
        color: '#1cb0f6',
        difficulty: 2,
        description: 'Conheça os três pilares da sociologia clássica e suas teorias fundamentais.',
        unitsCount: 10
    },
    {
        id: 3,
        title: 'Teoria Social Moderna',
        subtitle: 'Século XX e novas perspectivas',
        icon: 'fa-city',
        color: '#ff9600',
        difficulty: 3,
        description: 'Explore as teorias sociológicas do século XX e suas contribuições.',
        unitsCount: 10
    },
    {
        id: 4,
        title: 'Sociologia Crítica',
        subtitle: 'Escola de Frankfurt e além',
        icon: 'fa-balance-scale',
        color: '#ff4b4b',
        difficulty: 4,
        description: 'Aprofunde-se na teoria crítica e suas análises sobre poder e sociedade.',
        unitsCount: 10
    },
    {
        id: 5,
        title: 'Pensamento Decolonial',
        subtitle: 'Vozes do Sul Global',
        icon: 'fa-globe-africa',
        color: '#ce82ff',
        difficulty: 5,
        description: 'Descubra pensadores latino-americanos, africanos e suas perspectivas únicas.',
        unitsCount: 10
    },
    {
        id: 6,
        title: 'Sociologia Brasileira',
        subtitle: 'Intérpretes do Brasil',
        icon: 'fa-flag',
        color: '#00c853',
        difficulty: 6,
        description: 'Estude os grandes pensadores que explicaram a sociedade brasileira.',
        unitsCount: 10
    },
    {
        id: 7,
        title: 'Temas Contemporâneos',
        subtitle: 'Sociedade do século XXI',
        icon: 'fa-users',
        color: '#ff6b9d',
        difficulty: 7,
        description: 'Analise questões atuais: tecnologia, gênero, raça e globalização.',
        unitsCount: 10
    },
    {
        id: 8,
        title: 'Mestria Sociológica',
        subtitle: 'Síntese e aplicação avançada',
        icon: 'fa-crown',
        color: '#ffd700',
        difficulty: 8,
        description: 'Domine a arte de pensar sociologicamente com desafios avançados.',
        unitsCount: 10
    }
];

// ==========================================
// UNIDADES POR SEÇÃO (10 unidades cada)
// ==========================================

const SOCIOLOGY_UNITS = {
    // SEÇÃO 1: FUNDAMENTOS
    1: [
        { id: 101, order: 1, title: 'O que é Sociologia?', subtitle: 'Definições e objetivos', icon: 'fa-question' },
        { id: 102, order: 2, title: 'Contexto Histórico', subtitle: 'O nascimento da sociologia', icon: 'fa-history' },
        { id: 103, order: 3, title: 'Auguste Comte', subtitle: 'O pai do positivismo', icon: 'fa-user-graduate' },
        { id: 104, order: 4, title: 'Método Sociológico', subtitle: 'Como estudar a sociedade', icon: 'fa-microscope' },
        { id: 105, order: 5, title: 'Sociedade e Indivíduo', subtitle: 'Relações fundamentais', icon: 'fa-users' },
        { id: 106, order: 6, title: 'Cultura e Socialização', subtitle: 'Como nos tornamos sociais', icon: 'fa-theater-masks' },
        { id: 107, order: 7, title: 'Instituições Sociais', subtitle: 'Família, escola, religião', icon: 'fa-university' },
        { id: 108, order: 8, title: 'Estratificação Social', subtitle: 'Classes e desigualdades', icon: 'fa-layer-group' },
        { id: 109, order: 9, title: 'Mudança Social', subtitle: 'Transformações na sociedade', icon: 'fa-sync-alt' },
        { id: 110, order: 10, title: 'Desafio Final', subtitle: 'Teste seus conhecimentos', icon: 'fa-trophy' }
    ],
    // SEÇÃO 2: OS CLÁSSICOS
    2: [
        { id: 201, order: 1, title: 'Karl Marx - Vida', subtitle: 'Biografia e contexto', icon: 'fa-user' },
        { id: 202, order: 2, title: 'Materialismo Histórico', subtitle: 'A base da teoria marxista', icon: 'fa-cogs' },
        { id: 203, order: 3, title: 'Luta de Classes', subtitle: 'Burguesia vs. Proletariado', icon: 'fa-fist-raised' },
        { id: 204, order: 4, title: 'Émile Durkheim - Vida', subtitle: 'O fundador científico', icon: 'fa-user' },
        { id: 205, order: 5, title: 'Fato Social', subtitle: 'Regras do método', icon: 'fa-book' },
        { id: 206, order: 6, title: 'Solidariedade Social', subtitle: 'Orgânica e mecânica', icon: 'fa-handshake' },
        { id: 207, order: 7, title: 'Max Weber - Vida', subtitle: 'O metodólogo', icon: 'fa-user' },
        { id: 208, order: 8, title: 'Ação Social', subtitle: 'Tipos de ação', icon: 'fa-running' },
        { id: 209, order: 9, title: 'Ética Protestante', subtitle: 'Religião e capitalismo', icon: 'fa-church' },
        { id: 210, order: 10, title: 'Comparando os Três', subtitle: 'Síntese dos clássicos', icon: 'fa-balance-scale-left' }
    ],
    // SEÇÃO 3: TEORIA MODERNA
    3: [
        { id: 301, order: 1, title: 'Funcionalismo', subtitle: 'Parsons e Merton', icon: 'fa-project-diagram' },
        { id: 302, order: 2, title: 'Interacionismo', subtitle: 'Mead e Goffman', icon: 'fa-comments' },
        { id: 303, order: 3, title: 'Fenomenologia', subtitle: 'Schutz e Berger', icon: 'fa-eye' },
        { id: 304, order: 4, title: 'Estruturalismo', subtitle: 'Lévi-Strauss', icon: 'fa-cubes' },
        { id: 305, order: 5, title: 'Georg Simmel', subtitle: 'Formas sociais', icon: 'fa-shapes' },
        { id: 306, order: 6, title: 'Norbert Elias', subtitle: 'Processo civilizador', icon: 'fa-chess-king' },
        { id: 307, order: 7, title: 'Pierre Bourdieu', subtitle: 'Campo e habitus', icon: 'fa-chess-board' },
        { id: 308, order: 8, title: 'Anthony Giddens', subtitle: 'Estruturação', icon: 'fa-redo' },
        { id: 309, order: 9, title: 'Michel Foucault', subtitle: 'Poder e discurso', icon: 'fa-broadcast-tower' },
        { id: 310, order: 10, title: 'Síntese Moderna', subtitle: 'Conectando teorias', icon: 'fa-network-wired' }
    ],
    // SEÇÃO 4: SOCIOLOGIA CRÍTICA
    4: [
        { id: 401, order: 1, title: 'Escola de Frankfurt', subtitle: 'Origens e contexto', icon: 'fa-school' },
        { id: 402, order: 2, title: 'Theodor Adorno', subtitle: 'Indústria cultural', icon: 'fa-tv' },
        { id: 403, order: 3, title: 'Max Horkheimer', subtitle: 'Razão instrumental', icon: 'fa-tools' },
        { id: 404, order: 4, title: 'Herbert Marcuse', subtitle: 'Homem unidimensional', icon: 'fa-user-slash' },
        { id: 405, order: 5, title: 'Jürgen Habermas', subtitle: 'Ação comunicativa', icon: 'fa-comments' },
        { id: 406, order: 6, title: 'Axel Honneth', subtitle: 'Teoria do reconhecimento', icon: 'fa-handshake' },
        { id: 407, order: 7, title: 'Feminismo Crítico', subtitle: 'Butler e Fraser', icon: 'fa-venus' },
        { id: 408, order: 8, title: 'Teoria Queer', subtitle: 'Desconstruindo gênero', icon: 'fa-rainbow' },
        { id: 409, order: 9, title: 'Zygmunt Bauman', subtitle: 'Modernidade líquida', icon: 'fa-water' },
        { id: 410, order: 10, title: 'Crítica Contemporânea', subtitle: 'Novos horizontes', icon: 'fa-mountain' }
    ],
    // SEÇÃO 5: PENSAMENTO DECOLONIAL
    5: [
        { id: 501, order: 1, title: 'Colonialismo', subtitle: 'Impactos e legados', icon: 'fa-ship' },
        { id: 502, order: 2, title: 'Frantz Fanon', subtitle: 'Pele negra, máscaras brancas', icon: 'fa-mask' },
        { id: 503, order: 3, title: 'Aimé Césaire', subtitle: 'Negritude', icon: 'fa-feather-alt' },
        { id: 504, order: 4, title: 'Enrique Dussel', subtitle: 'Filosofia da libertação', icon: 'fa-dove' },
        { id: 505, order: 5, title: 'Aníbal Quijano', subtitle: 'Colonialidade do poder', icon: 'fa-crown' },
        { id: 506, order: 6, title: 'Walter Mignolo', subtitle: 'Pensamento fronteiriço', icon: 'fa-border-all' },
        { id: 507, order: 7, title: 'Achille Mbembe', subtitle: 'Necropolítica', icon: 'fa-skull' },
        { id: 508, order: 8, title: 'Gayatri Spivak', subtitle: 'Pode o subalterno falar?', icon: 'fa-microphone-alt' },
        { id: 509, order: 9, title: 'Boaventura Santos', subtitle: 'Epistemologias do Sul', icon: 'fa-compass' },
        { id: 510, order: 10, title: 'Decolonialidade Hoje', subtitle: 'Aplicações práticas', icon: 'fa-seedling' }
    ],
    // SEÇÃO 6: SOCIOLOGIA BRASILEIRA
    6: [
        { id: 601, order: 1, title: 'Formação do Brasil', subtitle: 'Raízes coloniais', icon: 'fa-tree' },
        { id: 602, order: 2, title: 'Gilberto Freyre', subtitle: 'Casa-grande e senzala', icon: 'fa-home' },
        { id: 603, order: 3, title: 'Sérgio Buarque', subtitle: 'Raízes do Brasil', icon: 'fa-leaf' },
        { id: 604, order: 4, title: 'Caio Prado Jr.', subtitle: 'Formação econômica', icon: 'fa-coins' },
        { id: 605, order: 5, title: 'Florestan Fernandes', subtitle: 'Revolução burguesa', icon: 'fa-industry' },
        { id: 606, order: 6, title: 'Darcy Ribeiro', subtitle: 'O povo brasileiro', icon: 'fa-users' },
        { id: 607, order: 7, title: 'Lélia Gonzalez', subtitle: 'Feminismo negro', icon: 'fa-venus-mars' },
        { id: 608, order: 8, title: 'Milton Santos', subtitle: 'Espaço e território', icon: 'fa-map-marked-alt' },
        { id: 609, order: 9, title: 'Jessé Souza', subtitle: 'A elite do atraso', icon: 'fa-user-tie' },
        { id: 610, order: 10, title: 'Brasil Contemporâneo', subtitle: 'Desafios atuais', icon: 'fa-flag' }
    ],
    // SEÇÃO 7: TEMAS CONTEMPORÂNEOS
    7: [
        { id: 701, order: 1, title: 'Globalização', subtitle: 'Mundo conectado', icon: 'fa-globe' },
        { id: 702, order: 2, title: 'Sociedade em Rede', subtitle: 'Castells e a era digital', icon: 'fa-network-wired' },
        { id: 703, order: 3, title: 'Redes Sociais', subtitle: 'Sociologia digital', icon: 'fa-hashtag' },
        { id: 704, order: 4, title: 'Questões de Gênero', subtitle: 'Identidades e lutas', icon: 'fa-venus-mars' },
        { id: 705, order: 5, title: 'Relações Raciais', subtitle: 'Racismo estrutural', icon: 'fa-fist-raised' },
        { id: 706, order: 6, title: 'Meio Ambiente', subtitle: 'Crise climática', icon: 'fa-leaf' },
        { id: 707, order: 7, title: 'Trabalho Precarizado', subtitle: 'Uberização', icon: 'fa-briefcase' },
        { id: 708, order: 8, title: 'Saúde e Sociedade', subtitle: 'Pandemias e biopolítica', icon: 'fa-heartbeat' },
        { id: 709, order: 9, title: 'Democracia em Crise', subtitle: 'Populismo', icon: 'fa-vote-yea' },
        { id: 710, order: 10, title: 'Futuro da Sociedade', subtitle: 'Tendências', icon: 'fa-rocket' }
    ],
    // SEÇÃO 8: MESTRIA
    8: [
        { id: 801, order: 1, title: 'Síntese Teórica', subtitle: 'Conectando escolas', icon: 'fa-project-diagram' },
        { id: 802, order: 2, title: 'Análise Crítica', subtitle: 'Desconstruindo textos', icon: 'fa-search' },
        { id: 803, order: 3, title: 'Debates Clássicos', subtitle: 'Estrutura vs. Agência', icon: 'fa-comments' },
        { id: 804, order: 4, title: 'Metodologias', subtitle: 'Pesquisa avançada', icon: 'fa-flask' },
        { id: 805, order: 5, title: 'Casos Complexos', subtitle: 'Análises profundas', icon: 'fa-puzzle-piece' },
        { id: 806, order: 6, title: 'Interdisciplinaridade', subtitle: 'Diálogos com outras áreas', icon: 'fa-sitemap' },
        { id: 807, order: 7, title: 'Sociologia Aplicada', subtitle: 'Políticas públicas', icon: 'fa-hands-helping' },
        { id: 808, order: 8, title: 'Produção Acadêmica', subtitle: 'Escrevendo sociologia', icon: 'fa-pen-fancy' },
        { id: 809, order: 9, title: 'Desafios Finais', subtitle: 'Teste de mestria', icon: 'fa-chess-king' },
        { id: 810, order: 10, title: 'Conclusão', subtitle: 'Você é um sociólogo!', icon: 'fa-crown' }
    ]
};

// ==========================================
// BLOCOS DE CONTEÚDO DETALHADOS
// ==========================================

// Blocos para Unidade 101 - O que é Sociologia?
const BLOCKS_101 = [
    {
        id: 10101, unitId: 101, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'Introdução à Sociologia',
        content: {
            title: 'O que é Sociologia?',
            text: 'A Sociologia é a ciência que estuda a sociedade, as relações sociais e os fenômenos coletivos. Ela nos ajuda a entender como vivemos em grupo e por que agimos de determinadas formas.',
            keyPoints: ['Estuda a vida em sociedade', 'Analisa comportamentos coletivos', 'Busca padrões e explicações'],
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400'
        }
    },
    {
        id: 10102, unitId: 101, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'Documentário: Imaginação Sociológica',
        content: {
            title: 'O Olhar Sociológico',
            description: 'Vídeo que explica como a sociologia nos ajuda a ver o mundo de forma diferente.',
            videoUrl: 'https://www.youtube.com/watch?v=xjDtCqhf_84',
            duration: '10 minutos',
            questions: ['O que mais chamou sua atenção?', 'Como a sociologia pode mudar nossa visão do mundo?']
        }
    },
    {
        id: 10103, unitId: 101, order: 3, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Primeiros Conceitos',
        content: {
            questions: [
                { question: 'A sociologia estuda principalmente:', options: ['Animais', 'Planetas', 'A sociedade e relações sociais', 'Química'], correct: 2 },
                { question: 'Quem criou o termo "sociologia"?', options: ['Platão', 'Auguste Comte', 'Isaac Newton', 'Freud'], correct: 1 },
                { question: 'A sociologia é uma ciência:', options: ['Natural', 'Exata', 'Social/Humana', 'Biológica'], correct: 2 }
            ]
        }
    },
    {
        id: 10104, unitId: 101, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'A Imaginação Sociológica',
        content: {
            title: 'C. Wright Mills e a Imaginação Sociológica',
            author: 'C. Wright Mills',
            text: 'A imaginação sociológica é a capacidade de conectar experiências pessoais com forças sociais mais amplas. Quando alguém perde o emprego, pode parecer um problema individual. Mas se milhões perdem o emprego ao mesmo tempo, é um problema social. Mills nos ensina a ver como nossas biografias pessoais se conectam com a história e a estrutura social.',
            chapters: ['Capítulo 1: A Promessa'],
            keyPoints: ['Conectar biografia com história', 'Ver problemas pessoais como questões públicas'],
            timeToRead: '10 minutos'
        }
    },
    {
        id: 10105, unitId: 101, order: 5, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine os Conceitos',
        content: {
            instructions: 'Conecte cada conceito à sua definição.',
            pairs: [
                { left: 'Sociologia', right: 'Ciência que estuda a sociedade' },
                { left: 'Sociedade', right: 'Conjunto de pessoas que vivem em grupo' },
                { left: 'Cultura', right: 'Valores, costumes e tradições' },
                { left: 'Socialização', right: 'Processo de aprender a viver em sociedade' },
                { left: 'Instituição', right: 'Estrutura social organizada' }
            ]
        }
    },
    {
        id: 10106, unitId: 101, order: 6, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete as Frases',
        content: {
            instructions: 'Complete as frases com as palavras corretas.',
            sentences: [
                { text: 'A _____ é a ciência que estuda a sociedade.', answer: 'sociologia', options: ['sociologia', 'biologia', 'física'] },
                { text: 'Auguste _____ criou o termo sociologia.', answer: 'Comte', options: ['Comte', 'Marx', 'Weber'] },
                { text: 'A imaginação sociológica conecta biografia com _____.', answer: 'história', options: ['história', 'futuro', 'natureza'] }
            ]
        }
    },
    {
        id: 10107, unitId: 101, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Vocabulário',
        content: {
            cards: [
                { front: 'Sociologia', back: 'Ciência que estuda a sociedade e os fenômenos coletivos' },
                { front: 'Imaginação Sociológica', back: 'Capacidade de conectar experiências pessoais com forças sociais' },
                { front: 'Fato Social', back: 'Maneiras de agir, pensar e sentir exteriores ao indivíduo' },
                { front: 'Socialização', back: 'Processo de aprendizado da vida em sociedade' },
                { front: 'Estrutura Social', back: 'Padrões estáveis de relações sociais' }
            ]
        }
    },
    {
        id: 10108, unitId: 101, order: 8, type: 'video', difficulty: 1, xp: 25,
        title: 'Filme: Tempos Modernos',
        content: {
            title: 'Tempos Modernos (1936)',
            director: 'Charlie Chaplin',
            description: 'Clássico que mostra de forma cômica como a industrialização afeta a vida das pessoas.',
            videoUrl: 'https://www.youtube.com/watch?v=6n9ESFJTnHs',
            duration: '87 minutos (assista os primeiros 15 min)',
            reflectionQuestions: ['Como o filme mostra a relação entre trabalho e sociedade?', 'Essa crítica ainda é válida hoje?']
        }
    },
    {
        id: 10109, unitId: 101, order: 9, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene os Eventos',
        content: {
            instructions: 'Coloque os eventos em ordem cronológica.',
            items: [
                { text: 'Revolução Industrial', correctOrder: 1 },
                { text: 'Comte cria o termo "sociologia"', correctOrder: 2 },
                { text: 'Marx escreve O Capital', correctOrder: 3 },
                { text: 'Durkheim publica As Regras do Método', correctOrder: 4 },
                { text: 'Weber escreve Economia e Sociedade', correctOrder: 5 }
            ]
        }
    },
    {
        id: 10110, unitId: 101, order: 10, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Reflexão: Seu Olhar Sociológico',
        content: {
            prompt: 'Pense em um problema que você ou alguém próximo enfrentou. Usando a "imaginação sociológica", conecte esse problema pessoal com forças sociais mais amplas.',
            examples: ['Desemprego → crise econômica', 'Ansiedade → pressões da sociedade', 'Conflitos familiares → mudanças na estrutura familiar'],
            minWords: 50
        }
    },
    {
        id: 10111, unitId: 101, order: 11, type: 'quiz', difficulty: 1, xp: 30,
        title: 'Quiz: Aprofundando',
        content: {
            questions: [
                { question: 'A imaginação sociológica de Mills nos ajuda a:', options: ['Imaginar mundos de fantasia', 'Conectar problemas pessoais com questões sociais', 'Fazer cálculos', 'Prever o futuro'], correct: 1 },
                { question: 'A sociologia surgiu como resposta a:', options: ['Descobertas espaciais', 'Transformações da Revolução Industrial', 'Guerras mundiais', 'Invenção da internet'], correct: 1 },
                { question: 'Estudar sociologia ajuda a:', options: ['Aceitar tudo sem questionar', 'Desenvolver pensamento crítico', 'Isolar-se da sociedade', 'Ignorar problemas'], correct: 1 }
            ]
        }
    },
    {
        id: 10112, unitId: 101, order: 12, type: 'reading', difficulty: 1, xp: 15,
        title: 'Por que Estudar Sociologia?',
        content: {
            title: 'A Importância da Sociologia',
            text: 'Estudar sociologia nos ajuda a:\n\n1. **Compreender a nós mesmos**: Entendemos melhor nossas escolhas quando conhecemos as forças sociais que nos influenciam.\n\n2. **Entender os outros**: Aprendemos a ver o mundo sob diferentes perspectivas.\n\n3. **Analisar problemas sociais**: Conseguimos identificar causas e propor soluções.\n\n4. **Ser cidadãos melhores**: Participamos de forma mais consciente da sociedade.\n\n5. **Desenvolver pensamento crítico**: Questionamos o que parece "natural" ou "óbvio".',
            keyPoints: ['Autoconhecimento', 'Empatia', 'Cidadania ativa'],
            timeToRead: '5 minutos'
        }
    },
    {
        id: 10113, unitId: 101, order: 13, type: 'match', difficulty: 1, xp: 30,
        title: 'Problemas Pessoais e Sociais',
        content: {
            instructions: 'Conecte cada problema pessoal à sua dimensão social.',
            pairs: [
                { left: 'Desemprego individual', right: 'Crise econômica estrutural' },
                { left: 'Divórcio', right: 'Mudanças nas relações de gênero' },
                { left: 'Depressão', right: 'Pressões da sociedade' },
                { left: 'Dificuldade nos estudos', right: 'Desigualdade educacional' }
            ]
        }
    },
    {
        id: 10114, unitId: 101, order: 14, type: 'timeline', difficulty: 1, xp: 30,
        title: 'Linha do Tempo: Origens',
        content: {
            title: 'O Nascimento da Sociologia',
            events: [
                { year: 1760, event: 'Revolução Industrial', description: 'Mudanças na economia e sociedade' },
                { year: 1789, event: 'Revolução Francesa', description: 'Questionamento da ordem tradicional' },
                { year: 1838, event: 'Comte cria "Sociologia"', description: 'Nasce a ciência da sociedade' },
                { year: 1848, event: 'Manifesto Comunista', description: 'Marx e Engels publicam obra' },
                { year: 1895, event: 'Regras do Método', description: 'Durkheim estabelece bases científicas' }
            ]
        }
    },
    {
        id: 10115, unitId: 101, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final',
        content: {
            title: 'Teste Final da Unidade',
            questions: [
                { question: 'Qual é o objeto de estudo da sociologia?', options: ['A natureza', 'A mente individual', 'A sociedade e relações sociais', 'O corpo humano'], correct: 2 },
                { question: 'A Revolução Industrial foi importante porque:', options: ['Criou máquinas', 'Transformou a sociedade', 'Descobriu planetas', 'Inventou a escrita'], correct: 1 },
                { question: 'Mills conecta biografia pessoal com:', options: ['Passado e futuro', 'Terra e céu', 'História social', 'Ciência e religião'], correct: 2 },
                { question: 'A sociologia nos ajuda a:', options: ['Aceitar sem questionar', 'Desenvolver pensamento crítico', 'Isolar-nos', 'Ignorar problemas'], correct: 1 },
                { question: 'Comte queria que a sociologia fosse:', options: ['Uma religião', 'Uma arte', 'Uma ciência positiva', 'Filosofia abstrata'], correct: 2 }
            ]
        }
    }
];

// Blocos para Unidade 102 - Contexto Histórico
const BLOCKS_102 = [
    {
        id: 10201, unitId: 102, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'O Mundo em Transformação',
        content: {
            title: 'Por que a Sociologia Nasceu?',
            text: 'A sociologia não surgiu por acaso. Ela nasceu em um momento de profundas transformações: a Revolução Industrial mudava a forma de produzir, a Revolução Francesa questionava a ordem política, e as cidades cresciam rapidamente.',
            keyPoints: ['Revolução Industrial: mudanças no trabalho', 'Revolução Francesa: novas ideias políticas', 'Urbanização: crescimento das cidades']
        }
    },
    {
        id: 10202, unitId: 102, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'A Era das Revoluções',
        content: {
            title: 'O Século das Revoluções',
            description: 'Entenda como as grandes revoluções criaram o mundo moderno.',
            videoUrl: 'https://www.youtube.com/watch?v=revolucoes',
            duration: '12 minutos'
        }
    },
    {
        id: 10203, unitId: 102, order: 3, type: 'reading', difficulty: 1, xp: 15,
        title: 'A Revolução Industrial',
        content: {
            title: 'Quando o Mundo Mudou',
            text: 'A Revolução Industrial começou na Inglaterra por volta de 1760 e transformou completamente a sociedade.\n\n**Antes:** A maioria vivia no campo, trabalhava na agricultura e produzia artesanalmente.\n\n**Depois:** Fábricas, cidades, máquinas, trabalho assalariado, horários rígidos, novas classes sociais.\n\nEssa transformação criou novos problemas sociais: pobreza urbana, condições de trabalho precárias, desigualdade. A sociologia nasceu para entender essas mudanças.',
            timeToRead: '8 minutos'
        }
    },
    {
        id: 10204, unitId: 102, order: 4, type: 'match', difficulty: 1, xp: 30,
        title: 'Antes e Depois',
        content: {
            instructions: 'Conecte características pré-industriais e industriais.',
            pairs: [
                { left: 'Trabalho no campo', right: 'Trabalho na fábrica' },
                { left: 'Produção artesanal', right: 'Produção em massa' },
                { left: 'Vida rural', right: 'Vida urbana' },
                { left: 'Trabalho familiar', right: 'Trabalho assalariado' },
                { left: 'Ritmo natural', right: 'Ritmo da máquina' }
            ]
        }
    },
    {
        id: 10205, unitId: 102, order: 5, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Revoluções',
        content: {
            questions: [
                { question: 'Onde começou a Revolução Industrial?', options: ['França', 'EUA', 'Inglaterra', 'Alemanha'], correct: 2 },
                { question: 'A Revolução Francesa ocorreu em:', options: ['1689', '1789', '1889', '1989'], correct: 1 },
                { question: 'Consequência da industrialização:', options: ['Menos cidades', 'Crescimento das cidades', 'Fim do trabalho', 'Retorno ao campo'], correct: 1 }
            ]
        }
    },
    {
        id: 10206, unitId: 102, order: 6, type: 'concept', difficulty: 1, xp: 20,
        title: 'A Revolução Francesa',
        content: {
            title: 'Liberdade, Igualdade, Fraternidade',
            text: 'A Revolução Francesa de 1789 derrubou a monarquia e questionou toda a ordem social tradicional. Mostrou que a sociedade poderia ser transformada pela ação humana.',
            keyPoints: ['Fim do Antigo Regime', 'Questionamento das tradições', 'Novas ideias sobre sociedade']
        }
    },
    {
        id: 10207, unitId: 102, order: 7, type: 'video', difficulty: 1, xp: 25,
        title: 'Filme: Germinal',
        content: {
            title: 'Germinal (1993)',
            director: 'Claude Berri',
            description: 'Baseado no romance de Zola, mostra as duras condições dos mineiros no século XIX.',
            videoUrl: 'https://www.youtube.com/watch?v=germinal',
            duration: '160 min (assista trecho)'
        }
    },
    {
        id: 10208, unitId: 102, order: 8, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete: Contexto',
        content: {
            sentences: [
                { text: 'A Revolução _____ começou na Inglaterra.', answer: 'Industrial', options: ['Industrial', 'Francesa', 'Russa'] },
                { text: 'A Revolução _____ questionou a monarquia.', answer: 'Francesa', options: ['Industrial', 'Francesa', 'Russa'] },
                { text: 'As _____ cresceram rapidamente.', answer: 'cidades', options: ['cidades', 'florestas', 'igrejas'] }
            ]
        }
    },
    {
        id: 10209, unitId: 102, order: 9, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: História',
        content: {
            cards: [
                { front: 'Revolução Industrial', back: 'Transformação que substituiu produção artesanal pela fabril' },
                { front: 'Revolução Francesa', back: 'Movimento que derrubou monarquia e promoveu liberdade' },
                { front: 'Urbanização', back: 'Crescimento e adensamento das cidades' },
                { front: 'Proletariado', back: 'Classe trabalhadora que vende sua força de trabalho' },
                { front: 'Burguesia', back: 'Classe que detém os meios de produção' }
            ]
        }
    },
    {
        id: 10210, unitId: 102, order: 10, type: 'reading', difficulty: 1, xp: 15,
        title: 'Problemas do Século XIX',
        content: {
            title: 'Uma Sociedade em Crise',
            text: 'O século XIX trouxe novos problemas:\n\n• **Pobreza urbana**: Trabalhadores em condições precárias\n• **Conflitos de classe**: Tensões entre patrões e empregados\n• **Criminalidade**: Aumento dos crimes nas cidades\n• **Alienação**: Perda de sentido no trabalho\n• **Anomia**: Enfraquecimento das normas\n\nA sociologia surgiu para explicar essas mudanças.',
            timeToRead: '7 minutos'
        }
    },
    {
        id: 10211, unitId: 102, order: 11, type: 'match', difficulty: 1, xp: 30,
        title: 'Problemas e Conceitos',
        content: {
            pairs: [
                { left: 'Trabalhadores fabris', right: 'Proletariado' },
                { left: 'Donos das fábricas', right: 'Burguesia' },
                { left: 'Perda de sentido', right: 'Alienação' },
                { left: 'Falta de normas', right: 'Anomia' },
                { left: 'Crescimento das cidades', right: 'Urbanização' }
            ]
        }
    },
    {
        id: 10212, unitId: 102, order: 12, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Mudanças de Hoje',
        content: {
            prompt: 'Assim como a Revolução Industrial transformou o século XIX, quais transformações você percebe hoje? Como afetam a vida das pessoas?',
            examples: ['Revolução Digital', 'Home office', 'Redes sociais'],
            minWords: 50
        }
    },
    {
        id: 10213, unitId: 102, order: 13, type: 'timeline', difficulty: 1, xp: 30,
        title: 'Linha do Tempo',
        content: {
            events: [
                { year: 1760, event: 'Revolução Industrial', description: 'Máquinas, fábricas, trabalho assalariado' },
                { year: 1789, event: 'Revolução Francesa', description: 'Queda da monarquia' },
                { year: 1800, event: 'Urbanização acelerada', description: 'Cidades industriais' },
                { year: 1830, event: 'Revoltas operárias', description: 'Trabalhadores se organizam' },
                { year: 1848, event: 'Primavera dos Povos', description: 'Revoluções na Europa' }
            ]
        }
    },
    {
        id: 10214, unitId: 102, order: 14, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene as Causas',
        content: {
            items: [
                { text: 'Revolução Industrial transforma economia', correctOrder: 1 },
                { text: 'Revolução Francesa questiona política', correctOrder: 2 },
                { text: 'Cidades crescem rapidamente', correctOrder: 3 },
                { text: 'Novos problemas sociais surgem', correctOrder: 4 },
                { text: 'Sociologia é criada para explicar', correctOrder: 5 }
            ]
        }
    },
    {
        id: 10215, unitId: 102, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final',
        content: {
            questions: [
                { question: 'A sociologia surgiu para:', options: ['Estudar astros', 'Explicar transformações sociais', 'Curar doenças', 'Fazer previsões'], correct: 1 },
                { question: 'NÃO é característica da Rev. Industrial:', options: ['Máquinas', 'Fábricas', 'Retorno ao campo', 'Trabalho assalariado'], correct: 2 },
                { question: 'Urbanização significa:', options: ['Volta ao campo', 'Crescimento das cidades', 'Fim das cidades', 'Construção de castelos'], correct: 1 },
                { question: 'Lema da Revolução Francesa:', options: ['Deus, Pátria, Família', 'Liberdade, Igualdade, Fraternidade', 'Ordem e Progresso', 'Trabalho e Disciplina'], correct: 1 }
            ]
        }
    }
];

// ==========================================
// CONSOLIDAR TODOS OS BLOCOS
// ==========================================
const SOCIOLOGY_ALL_BLOCKS = {
    101: BLOCKS_101,
    102: BLOCKS_102
    // Blocos 103-110 mesclados de sociology-section1-complete.js
};

// ==========================================
// FUNÇÃO PARA GERAR BLOCOS PADRÃO
// ==========================================
function generateBlocksForUnit(unitId, title, difficulty) {
    const baseId = unitId * 100;
    const types = ['concept', 'video', 'quiz', 'reading', 'match', 'fill', 'flashcard', 'video', 'order', 'reflection', 'quiz', 'reading', 'match', 'timeline', 'quiz'];

    return types.map((type, i) => ({
        id: baseId + i + 1,
        unitId: unitId,
        order: i + 1,
        type: type,
        title: `${BLOCK_TYPES[type].name}: ${title}`,
        difficulty: difficulty,
        xp: Math.round(BLOCK_TYPES[type].baseXP * DIFFICULTY_LEVELS[difficulty].xpMultiplier),
        content: { generated: true, unitTitle: title }
    }));
}

// ==========================================
// FILMES E DOCUMENTÁRIOS
// ==========================================
const MEDIA_LIBRARY = [
    { id: 1, title: 'Tempos Modernos', year: 1936, director: 'Charlie Chaplin', type: 'filme', duration: '87 min', themes: ['trabalho', 'alienação'], sections: [1, 2] },
    { id: 2, title: 'Germinal', year: 1993, director: 'Claude Berri', type: 'filme', duration: '160 min', themes: ['luta de classes'], sections: [1, 2] },
    { id: 3, title: 'A Onda', year: 2008, director: 'Dennis Gansel', type: 'filme', duration: '107 min', themes: ['autoritarismo', 'grupo'], sections: [3, 4] },
    { id: 4, title: 'Que Horas Ela Volta?', year: 2015, director: 'Anna Muylaert', type: 'filme', duration: '112 min', themes: ['desigualdade', 'classe'], sections: [6] },
    { id: 5, title: 'O Dilema das Redes', year: 2020, director: 'Jeff Orlowski', type: 'documentário', duration: '94 min', themes: ['tecnologia', 'redes sociais'], sections: [7] },
    { id: 6, title: 'Eu Não Sou Seu Negro', year: 2016, director: 'Raoul Peck', type: 'documentário', duration: '93 min', themes: ['racismo'], sections: [5, 7] },
    { id: 7, title: '13ª Emenda', year: 2016, director: 'Ava DuVernay', type: 'documentário', duration: '100 min', themes: ['racismo', 'encarceramento'], sections: [5, 7] },
    { id: 8, title: 'Cidade de Deus', year: 2002, director: 'Fernando Meirelles', type: 'filme', duration: '130 min', themes: ['violência', 'desigualdade'], sections: [6] },
    { id: 9, title: 'Bacurau', year: 2019, director: 'Kleber Mendonça', type: 'filme', duration: '132 min', themes: ['resistência', 'colonialismo'], sections: [5, 6] },
    { id: 10, title: 'Quanto Vale ou É Por Quilo?', year: 2005, director: 'Sérgio Bianchi', type: 'filme', duration: '104 min', themes: ['escravidão', 'capitalismo'], sections: [5, 6] }
];

// ==========================================
// PENSADORES
// ==========================================
const THINKERS = [
    { id: 1, name: 'Auguste Comte', years: '1798-1857', nationality: 'Francês', photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Auguste_Comte.jpg', mainConcepts: ['Positivismo', 'Lei dos Três Estados'], sections: [1] },
    { id: 2, name: 'Karl Marx', years: '1818-1883', nationality: 'Alemão', photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg', mainConcepts: ['Materialismo Histórico', 'Luta de Classes', 'Mais-valia'], sections: [2] },
    { id: 3, name: 'Émile Durkheim', years: '1858-1917', nationality: 'Francês', photo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Emile_Durkheim.jpg', mainConcepts: ['Fato Social', 'Solidariedade', 'Anomia'], sections: [2] },
    { id: 4, name: 'Max Weber', years: '1864-1920', nationality: 'Alemão', photo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Max_Weber_1894.jpg', mainConcepts: ['Ação Social', 'Burocracia', 'Ética Protestante'], sections: [2] },
    { id: 5, name: 'Theodor Adorno', years: '1903-1969', nationality: 'Alemão', photo: 'https://upload.wikimedia.org/wikipedia/en/1/18/Theodor_W._Adorno.jpg', mainConcepts: ['Indústria Cultural', 'Dialética Negativa'], sections: [4] },
    { id: 6, name: 'Pierre Bourdieu', years: '1930-2002', nationality: 'Francês', photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Pierre_Bourdieu_%281%29.jpg', mainConcepts: ['Habitus', 'Campo', 'Capital Cultural'], sections: [3] },
    { id: 7, name: 'Michel Foucault', years: '1926-1984', nationality: 'Francês', photo: 'https://upload.wikimedia.org/wikipedia/en/4/47/Foucault5.jpg', mainConcepts: ['Biopoder', 'Disciplina', 'Discurso'], sections: [3, 4] },
    { id: 8, name: 'Frantz Fanon', years: '1925-1961', nationality: 'Martinicano', photo: 'https://upload.wikimedia.org/wikipedia/en/3/32/FrantzFanon.jpg', mainConcepts: ['Colonialismo', 'Violência Colonial'], sections: [5] },
    { id: 9, name: 'Gilberto Freyre', years: '1900-1987', nationality: 'Brasileiro', photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/GilbertoFreyre.jpg', mainConcepts: ['Casa-grande', 'Miscigenação'], sections: [6] },
    { id: 10, name: 'Florestan Fernandes', years: '1920-1995', nationality: 'Brasileiro', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Florestan_Fernandes.jpg', mainConcepts: ['Revolução Burguesa', 'Capitalismo Dependente'], sections: [6] }
];

// ==========================================
// REGISTRAR NO SUBJECT_DATA GLOBAL
// ==========================================
SUBJECT_DATA['sociology'] = {
    SECTIONS: SOCIOLOGY_SECTIONS,
    UNITS: SOCIOLOGY_UNITS,
    ALL_BLOCKS: SOCIOLOGY_ALL_BLOCKS
};

// Mesclar blocos da Seção 1 quando disponíveis
setTimeout(function() {
    if (typeof window !== "undefined" && window.SECTION1_BLOCKS) {
        Object.keys(window.SECTION1_BLOCKS).forEach(function(unitId) {
            SOCIOLOGY_ALL_BLOCKS[unitId] = window.SECTION1_BLOCKS[unitId];
        });
        // Atualizar SUBJECT_DATA
        if (SUBJECT_DATA && SUBJECT_DATA["sociology"]) {
            SUBJECT_DATA["sociology"].ALL_BLOCKS = SOCIOLOGY_ALL_BLOCKS;
        }
        console.log("✅ Seção 1 de Sociologia mesclada: unidades 103-110");
    }
}, 50);

// Mesclar blocos da Seção 2 quando disponíveis
setTimeout(function() {
    if (typeof window !== "undefined" && window.SECTION2_BLOCKS) {
        Object.keys(window.SECTION2_BLOCKS).forEach(function(unitId) {
            SOCIOLOGY_ALL_BLOCKS[unitId] = window.SECTION2_BLOCKS[unitId];
        });
        // Atualizar SUBJECT_DATA
        if (SUBJECT_DATA && SUBJECT_DATA["sociology"]) {
            SUBJECT_DATA["sociology"].ALL_BLOCKS = SOCIOLOGY_ALL_BLOCKS;
        }
        console.log("✅ Seção 2 de Sociologia mesclada: unidades 201-210");
    }
}, 100);

// Mesclar blocos da Seção 3 quando disponíveis
setTimeout(function() {
    if (typeof window !== "undefined" && window.SECTION3_BLOCKS) {
        Object.keys(window.SECTION3_BLOCKS).forEach(function(unitId) {
            SOCIOLOGY_ALL_BLOCKS[unitId] = window.SECTION3_BLOCKS[unitId];
        });
        if (SUBJECT_DATA && SUBJECT_DATA["sociology"]) {
            SUBJECT_DATA["sociology"].ALL_BLOCKS = SOCIOLOGY_ALL_BLOCKS;
        }
        console.log("✅ Seção 3 de Sociologia mesclada: unidades 301-310");
    }
}, 150);

// Mesclar blocos da Seção 4 quando disponíveis
setTimeout(function() {
    if (typeof window !== "undefined" && window.SECTION4_BLOCKS) {
        Object.keys(window.SECTION4_BLOCKS).forEach(function(unitId) {
            SOCIOLOGY_ALL_BLOCKS[unitId] = window.SECTION4_BLOCKS[unitId];
        });
        if (SUBJECT_DATA && SUBJECT_DATA["sociology"]) {
            SUBJECT_DATA["sociology"].ALL_BLOCKS = SOCIOLOGY_ALL_BLOCKS;
        }
        console.log("✅ Seção 4 de Sociologia mesclada: unidades 401-410");
    }
}, 200);

// Mesclar blocos da Seção 5 quando disponíveis
setTimeout(function() {
    if (typeof window !== "undefined" && window.SECTION5_BLOCKS) {
        Object.keys(window.SECTION5_BLOCKS).forEach(function(unitId) {
            SOCIOLOGY_ALL_BLOCKS[unitId] = window.SECTION5_BLOCKS[unitId];
        });
        if (SUBJECT_DATA && SUBJECT_DATA["sociology"]) {
            SUBJECT_DATA["sociology"].ALL_BLOCKS = SOCIOLOGY_ALL_BLOCKS;
        }
        console.log("✅ Seção 5 de Sociologia mesclada: unidades 501-510");
    }
}, 250);

// Mesclar blocos da Seção 6 quando disponíveis
setTimeout(function() {
    if (typeof window !== "undefined" && window.SECTION6_BLOCKS) {
        Object.keys(window.SECTION6_BLOCKS).forEach(function(unitId) {
            SOCIOLOGY_ALL_BLOCKS[unitId] = window.SECTION6_BLOCKS[unitId];
        });
        if (SUBJECT_DATA && SUBJECT_DATA["sociology"]) {
            SUBJECT_DATA["sociology"].ALL_BLOCKS = SOCIOLOGY_ALL_BLOCKS;
        }
        console.log("✅ Seção 6 de Sociologia mesclada: unidades 601-610");
    }
}, 300);

// Mesclar blocos das Seções 7-8 quando disponíveis
setTimeout(function() {
    if (typeof window !== "undefined" && window.SECTION7_BLOCKS) {
        Object.keys(window.SECTION7_BLOCKS).forEach(function(unitId) {
            SOCIOLOGY_ALL_BLOCKS[unitId] = window.SECTION7_BLOCKS[unitId];
        });
        if (SUBJECT_DATA && SUBJECT_DATA["sociology"]) {
            SUBJECT_DATA["sociology"].ALL_BLOCKS = SOCIOLOGY_ALL_BLOCKS;
        }
        console.log("✅ Seção 7 de Sociologia mesclada: unidades 701-710");
    }
    if (typeof window !== "undefined" && window.SECTION8_BLOCKS) {
        Object.keys(window.SECTION8_BLOCKS).forEach(function(unitId) {
            SOCIOLOGY_ALL_BLOCKS[unitId] = window.SECTION8_BLOCKS[unitId];
        });
        if (SUBJECT_DATA && SUBJECT_DATA["sociology"]) {
            SUBJECT_DATA["sociology"].ALL_BLOCKS = SOCIOLOGY_ALL_BLOCKS;
        }
        console.log("✅ Seção 8 de Sociologia mesclada: unidades 801-810");
    }
}, 350);
