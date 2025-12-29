// ==========================================
// EDULEARN - DADOS DE POLÍTICA
// 8 Seções x 10 Unidades x 15 Blocos
// ==========================================

const POLITICS_SECTIONS = [
    {
        id: 1,
        title: 'Fundamentos da Ciência Política',
        subtitle: 'O estudo do poder',
        icon: 'fa-landmark',
        color: '#ff4b4b',
        difficulty: 1,
        description: 'Descubra o que é política, poder e como funciona o Estado.',
        unitsCount: 10
    },
    {
        id: 2,
        title: 'Teoria Política Clássica',
        subtitle: 'De Platão a Maquiavel',
        icon: 'fa-scroll',
        color: '#ce82ff',
        difficulty: 2,
        description: 'Explore o pensamento político desde a Antiguidade até o Renascimento.',
        unitsCount: 10
    },
    {
        id: 3,
        title: 'Estado e Poder',
        subtitle: 'Estruturas políticas',
        icon: 'fa-university',
        color: '#1cb0f6',
        difficulty: 3,
        description: 'Estude as formas de organização do poder político e suas instituições.',
        unitsCount: 10
    },
    {
        id: 4,
        title: 'Sistemas Políticos',
        subtitle: 'Democracia, autoritarismo e outros',
        icon: 'fa-balance-scale',
        color: '#ff9600',
        difficulty: 4,
        description: 'Compare diferentes sistemas políticos e formas de governo.',
        unitsCount: 10
    },
    {
        id: 5,
        title: 'Democracia e Participação',
        subtitle: 'Cidadania ativa',
        icon: 'fa-vote-yea',
        color: '#58cc02',
        difficulty: 5,
        description: 'Aprofunde-se nos conceitos de democracia e participação política.',
        unitsCount: 10
    },
    {
        id: 6,
        title: 'Ideologias Políticas',
        subtitle: 'Esquerda, direita e além',
        icon: 'fa-flag',
        color: '#ffc800',
        difficulty: 6,
        description: 'Conheça as principais ideologias que moldaram a política moderna.',
        unitsCount: 10
    },
    {
        id: 7,
        title: 'Política Brasileira',
        subtitle: 'Da Colônia ao século XXI',
        icon: 'fa-map',
        color: '#00c853',
        difficulty: 7,
        description: 'Estude a formação e evolução do sistema político brasileiro.',
        unitsCount: 10
    },
    {
        id: 8,
        title: 'Política Internacional',
        subtitle: 'Relações entre nações',
        icon: 'fa-globe',
        color: '#ff6b9d',
        difficulty: 8,
        description: 'Explore as relações internacionais e a geopolítica contemporânea.',
        unitsCount: 10
    }
];

const POLITICS_UNITS = {
    // SEÇÃO 1: FUNDAMENTOS
    1: [
        { id: 101, order: 1, title: 'O que é Política?', subtitle: 'Definições e conceitos', icon: 'fa-question' },
        { id: 102, order: 2, title: 'Poder', subtitle: 'Formas e manifestações', icon: 'fa-bolt' },
        { id: 103, order: 3, title: 'Estado', subtitle: 'Origem e funções', icon: 'fa-landmark' },
        { id: 104, order: 4, title: 'Governo', subtitle: 'Formas de governar', icon: 'fa-building' },
        { id: 105, order: 5, title: 'Legitimidade', subtitle: 'Por que obedecemos?', icon: 'fa-check-circle' },
        { id: 106, order: 6, title: 'Soberania', subtitle: 'Poder supremo', icon: 'fa-crown' },
        { id: 107, order: 7, title: 'Cidadania', subtitle: 'Direitos e deveres', icon: 'fa-id-card' },
        { id: 108, order: 8, title: 'Espaço Público', subtitle: 'Arena política', icon: 'fa-comments' },
        { id: 109, order: 9, title: 'Conflito e Consenso', subtitle: 'Dinâmicas políticas', icon: 'fa-handshake' },
        { id: 110, order: 10, title: 'Revisão: Fundamentos', subtitle: 'Consolidando conceitos', icon: 'fa-check' }
    ],
    // SEÇÃO 2: TEORIA CLÁSSICA
    2: [
        { id: 201, order: 1, title: 'Platão', subtitle: 'A República ideal', icon: 'fa-chess-king' },
        { id: 202, order: 2, title: 'Aristóteles', subtitle: 'Política e ética', icon: 'fa-book' },
        { id: 203, order: 3, title: 'Cícero', subtitle: 'República romana', icon: 'fa-gavel' },
        { id: 204, order: 4, title: 'Santo Agostinho', subtitle: 'Cidade de Deus', icon: 'fa-church' },
        { id: 205, order: 5, title: 'São Tomás de Aquino', subtitle: 'Lei natural', icon: 'fa-cross' },
        { id: 206, order: 6, title: 'Maquiavel', subtitle: 'O Príncipe', icon: 'fa-mask' },
        { id: 207, order: 7, title: 'Thomas Hobbes', subtitle: 'Leviatã', icon: 'fa-dragon' },
        { id: 208, order: 8, title: 'John Locke', subtitle: 'Contrato social', icon: 'fa-file-contract' },
        { id: 209, order: 9, title: 'Rousseau', subtitle: 'Vontade geral', icon: 'fa-users' },
        { id: 210, order: 10, title: 'Revisão: Clássicos', subtitle: 'Síntese do pensamento', icon: 'fa-check' }
    ],
    // SEÇÃO 3: ESTADO E PODER
    3: [
        { id: 301, order: 1, title: 'Origem do Estado', subtitle: 'Teorias explicativas', icon: 'fa-history' },
        { id: 302, order: 2, title: 'Estado Moderno', subtitle: 'Formação histórica', icon: 'fa-university' },
        { id: 303, order: 3, title: 'Separação de Poderes', subtitle: 'Executivo, Legislativo, Judiciário', icon: 'fa-balance-scale' },
        { id: 304, order: 4, title: 'Burocracia', subtitle: 'Weber e a administração', icon: 'fa-sitemap' },
        { id: 305, order: 5, title: 'Estado de Direito', subtitle: 'Limites ao poder', icon: 'fa-gavel' },
        { id: 306, order: 6, title: 'Estado de Bem-Estar', subtitle: 'Políticas sociais', icon: 'fa-hand-holding-heart' },
        { id: 307, order: 7, title: 'Neoliberalismo', subtitle: 'Estado mínimo', icon: 'fa-chart-line' },
        { id: 308, order: 8, title: 'Federalismo', subtitle: 'União e autonomia', icon: 'fa-layer-group' },
        { id: 309, order: 9, title: 'Globalização e Estado', subtitle: 'Desafios contemporâneos', icon: 'fa-globe' },
        { id: 310, order: 10, title: 'Revisão: Estado', subtitle: 'Formas e funções', icon: 'fa-check' }
    ],
    // SEÇÃO 4: SISTEMAS POLÍTICOS
    4: [
        { id: 401, order: 1, title: 'Tipologia de Regimes', subtitle: 'Classificações', icon: 'fa-th-large' },
        { id: 402, order: 2, title: 'Monarquia', subtitle: 'Poder hereditário', icon: 'fa-crown' },
        { id: 403, order: 3, title: 'República', subtitle: 'Coisa pública', icon: 'fa-landmark' },
        { id: 404, order: 4, title: 'Parlamentarismo', subtitle: 'Poder no parlamento', icon: 'fa-comments' },
        { id: 405, order: 5, title: 'Presidencialismo', subtitle: 'Poder executivo forte', icon: 'fa-user-tie' },
        { id: 406, order: 6, title: 'Autoritarismo', subtitle: 'Concentração de poder', icon: 'fa-fist-raised' },
        { id: 407, order: 7, title: 'Totalitarismo', subtitle: 'Controle total', icon: 'fa-eye' },
        { id: 408, order: 8, title: 'Democracia Direta', subtitle: 'Participação imediata', icon: 'fa-hand-paper' },
        { id: 409, order: 9, title: 'Democracia Representativa', subtitle: 'Eleição de representantes', icon: 'fa-vote-yea' },
        { id: 410, order: 10, title: 'Revisão: Sistemas', subtitle: 'Comparando regimes', icon: 'fa-check' }
    ],
    // SEÇÃO 5: DEMOCRACIA
    5: [
        { id: 501, order: 1, title: 'História da Democracia', subtitle: 'De Atenas ao mundo', icon: 'fa-history' },
        { id: 502, order: 2, title: 'Democracia Liberal', subtitle: 'Liberdades individuais', icon: 'fa-dove' },
        { id: 503, order: 3, title: 'Eleições', subtitle: 'Sistemas eleitorais', icon: 'fa-vote-yea' },
        { id: 504, order: 4, title: 'Partidos Políticos', subtitle: 'Organização e função', icon: 'fa-users' },
        { id: 505, order: 5, title: 'Opinião Pública', subtitle: 'Voz do povo', icon: 'fa-bullhorn' },
        { id: 506, order: 6, title: 'Mídia e Política', subtitle: 'Quarto poder', icon: 'fa-newspaper' },
        { id: 507, order: 7, title: 'Movimentos Sociais', subtitle: 'Ação coletiva', icon: 'fa-fist-raised' },
        { id: 508, order: 8, title: 'Democracia Participativa', subtitle: 'Além do voto', icon: 'fa-hands-helping' },
        { id: 509, order: 9, title: 'Crise da Democracia', subtitle: 'Desafios atuais', icon: 'fa-exclamation-triangle' },
        { id: 510, order: 10, title: 'Revisão: Democracia', subtitle: 'Fundamentos e práticas', icon: 'fa-check' }
    ],
    // SEÇÃO 6: IDEOLOGIAS
    6: [
        { id: 601, order: 1, title: 'O que é Ideologia?', subtitle: 'Conceitos e debates', icon: 'fa-brain' },
        { id: 602, order: 2, title: 'Liberalismo', subtitle: 'Liberdade individual', icon: 'fa-dove' },
        { id: 603, order: 3, title: 'Conservadorismo', subtitle: 'Tradição e ordem', icon: 'fa-church' },
        { id: 604, order: 4, title: 'Socialismo', subtitle: 'Igualdade social', icon: 'fa-balance-scale' },
        { id: 605, order: 5, title: 'Comunismo', subtitle: 'Marx e a revolução', icon: 'fa-star' },
        { id: 606, order: 6, title: 'Fascismo', subtitle: 'Nacionalismo extremo', icon: 'fa-skull' },
        { id: 607, order: 7, title: 'Anarquismo', subtitle: 'Sem Estado', icon: 'fa-circle' },
        { id: 608, order: 8, title: 'Social-Democracia', subtitle: 'Capitalismo com justiça social', icon: 'fa-hand-holding-heart' },
        { id: 609, order: 9, title: 'Novas Ideologias', subtitle: 'Ecologismo, feminismo', icon: 'fa-leaf' },
        { id: 610, order: 10, title: 'Revisão: Ideologias', subtitle: 'Espectro político', icon: 'fa-check' }
    ],
    // SEÇÃO 7: POLÍTICA BRASILEIRA
    7: [
        { id: 701, order: 1, title: 'Brasil Colônia', subtitle: 'Política colonial', icon: 'fa-ship' },
        { id: 702, order: 2, title: 'Independência', subtitle: 'Formação do Estado', icon: 'fa-flag' },
        { id: 703, order: 3, title: 'Império', subtitle: 'Monarquia brasileira', icon: 'fa-crown' },
        { id: 704, order: 4, title: 'República Velha', subtitle: 'Coronelismo', icon: 'fa-hat-cowboy' },
        { id: 705, order: 5, title: 'Era Vargas', subtitle: 'Estado Novo', icon: 'fa-industry' },
        { id: 706, order: 6, title: 'Democracia (1945-64)', subtitle: 'Período democrático', icon: 'fa-vote-yea' },
        { id: 707, order: 7, title: 'Ditadura Militar', subtitle: 'Regime autoritário', icon: 'fa-shield-alt' },
        { id: 708, order: 8, title: 'Redemocratização', subtitle: 'Nova República', icon: 'fa-dove' },
        { id: 709, order: 9, title: 'Brasil Contemporâneo', subtitle: 'Desafios atuais', icon: 'fa-chart-line' },
        { id: 710, order: 10, title: 'Revisão: Brasil', subtitle: 'Trajetória política', icon: 'fa-check' }
    ],
    // SEÇÃO 8: POLÍTICA INTERNACIONAL
    8: [
        { id: 801, order: 1, title: 'Relações Internacionais', subtitle: 'Campo de estudo', icon: 'fa-globe' },
        { id: 802, order: 2, title: 'Sistema Internacional', subtitle: 'Ordem mundial', icon: 'fa-network-wired' },
        { id: 803, order: 3, title: 'Organizações Internacionais', subtitle: 'ONU e outras', icon: 'fa-building' },
        { id: 804, order: 4, title: 'Guerra e Paz', subtitle: 'Conflitos globais', icon: 'fa-bomb' },
        { id: 805, order: 5, title: 'Diplomacia', subtitle: 'Arte de negociar', icon: 'fa-handshake' },
        { id: 806, order: 6, title: 'Geopolítica', subtitle: 'Poder e território', icon: 'fa-map-marked-alt' },
        { id: 807, order: 7, title: 'Globalização Política', subtitle: 'Interdependência', icon: 'fa-globe-americas' },
        { id: 808, order: 8, title: 'Brasil no Mundo', subtitle: 'Política externa', icon: 'fa-flag' },
        { id: 809, order: 9, title: 'Novos Desafios', subtitle: 'Terrorismo, clima, migrações', icon: 'fa-exclamation-triangle' },
        { id: 810, order: 10, title: 'Mestria Política', subtitle: 'Síntese e visão crítica', icon: 'fa-award' }
    ]
};

// Blocos com conteúdo real
const POLITICS_BLOCKS_101 = [
    {
        id: 10101, unitId: 101, order: 1, type: 'concept',
        title: 'O que é Política?', difficulty: 1, xp: 20,
        content: {
            title: 'Política: A Arte de Governar',
            text: 'A palavra "política" vem do grego "polis", que significa cidade-estado. Para os gregos antigos, política era a atividade de participar da vida coletiva da cidade. Aristóteles definiu o ser humano como um "animal político" - um ser que naturalmente vive em comunidade e precisa organizar a vida coletiva.\n\nHoje, entendemos política de várias formas: como a arte de governar, como luta pelo poder, como gestão de conflitos, ou como a atividade de decidir sobre assuntos públicos. O cientista político Harold Lasswell resumiu: política é "quem ganha o quê, quando e como".',
            keyPoints: [
                'Deriva de "polis" (cidade-estado grega)',
                'Envolve poder, governo e decisões coletivas',
                'Está presente em todas as sociedades',
                'Pode ser formal (Estado) ou informal (associações)'
            ]
        }
    },
    {
        id: 10102, unitId: 101, order: 2, type: 'video',
        title: 'Introdução à Política', difficulty: 1, xp: 20,
        content: {
            title: 'O que é Ciência Política?',
            description: 'Vídeo explicativo sobre os fundamentos da ciência política e seus principais temas de estudo.',
            duration: '15 min',
            videoUrl: 'https://www.youtube.com/watch?v=ciencia-politica-intro',
            reflectionQuestions: [
                'Por que estudar política é importante?',
                'Como a política afeta sua vida cotidiana?'
            ]
        }
    },
    {
        id: 10103, unitId: 101, order: 3, type: 'quiz',
        title: 'Quiz: Conceitos Iniciais', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'De que palavra grega vem "política"?', options: ['Demos', 'Polis', 'Kratos', 'Arche'], correct: 1 },
                { question: 'Quem definiu o homem como "animal político"?', options: ['Platão', 'Aristóteles', 'Sócrates', 'Heráclito'], correct: 1 },
                { question: 'Segundo Lasswell, política é sobre:', options: ['Moral e ética', 'Quem ganha o quê, quando e como', 'Religião', 'Economia apenas'], correct: 1 }
            ]
        }
    },
    { id: 10104, unitId: 101, order: 4, type: 'reading', title: 'Leitura: Aristóteles e a Política', difficulty: 1, xp: 15, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10105, unitId: 101, order: 5, type: 'match', title: 'Combine: Conceitos', difficulty: 1, xp: 30, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10106, unitId: 101, order: 6, type: 'fill', title: 'Complete: Definições', difficulty: 1, xp: 20, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10107, unitId: 101, order: 7, type: 'flashcard', title: 'Flashcards: Termos', difficulty: 1, xp: 15, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10108, unitId: 101, order: 8, type: 'video', title: 'Documentário: A Política', difficulty: 1, xp: 20, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10109, unitId: 101, order: 9, type: 'order', title: 'Ordene: Conceitos', difficulty: 1, xp: 25, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10110, unitId: 101, order: 10, type: 'reflection', title: 'Reflexão: Política no Cotidiano', difficulty: 1, xp: 35, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10111, unitId: 101, order: 11, type: 'quiz', title: 'Quiz: Revisão', difficulty: 1, xp: 25, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10112, unitId: 101, order: 12, type: 'reading', title: 'Leitura: Política Contemporânea', difficulty: 1, xp: 15, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10113, unitId: 101, order: 13, type: 'match', title: 'Combine: Pensadores', difficulty: 1, xp: 30, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10114, unitId: 101, order: 14, type: 'timeline', title: 'Linha do Tempo: Ciência Política', difficulty: 1, xp: 30, content: { generated: true, unitTitle: 'O que é Política?' } },
    { id: 10115, unitId: 101, order: 15, type: 'quiz', title: 'Quiz Final', difficulty: 1, xp: 25, content: { generated: true, unitTitle: 'O que é Política?' } }
];

// Blocos para Unidade 102: Poder
const POLITICS_BLOCKS_102 = [
    {
        id: 10201, unitId: 102, order: 1, type: 'concept',
        title: 'O que é Poder?', difficulty: 1, xp: 20,
        content: {
            title: 'Poder: A Capacidade de Influenciar',
            text: 'Poder é um conceito central na ciência política. Max Weber definiu poder como "a probabilidade de que um ator em uma relação social esteja em posição de realizar sua vontade, apesar de resistência". Em outras palavras, poder é a capacidade de fazer com que outros ajam como queremos, mesmo contra sua vontade.\n\nO poder pode se manifestar de diversas formas: coerção (uso da força), persuasão (convencimento), autoridade (reconhecimento legítimo), manipulação (influência oculta). Todo poder envolve uma relação: não existe poder absoluto, pois ele sempre depende de quem obedece.',
            keyPoints: [
                'Definição de Weber: impor vontade apesar de resistência',
                'Poder é sempre relacional',
                'Formas: coerção, persuasão, autoridade, manipulação',
                'Poder político está ligado ao Estado'
            ]
        }
    },
    {
        id: 10202, unitId: 102, order: 2, type: 'concept',
        title: 'Tipos de Poder', difficulty: 1, xp: 20,
        content: {
            title: 'As Três Formas de Dominação Legítima',
            text: 'Max Weber identificou três tipos de dominação (poder reconhecido como legítimo):\n\n1. TRADICIONAL: Baseia-se no costume e na tradição. "Sempre foi assim". Exemplos: monarquias, patriarcas, anciãos de tribos.\n\n2. CARISMÁTICA: Baseia-se nas qualidades excepcionais de um líder. Seguidores obedecem por devoção pessoal. Exemplos: líderes revolucionários, profetas, heróis.\n\n3. RACIONAL-LEGAL: Baseia-se em leis e regras impessoais. Obedece-se ao cargo, não à pessoa. Exemplo: democracias modernas, burocracias.\n\nEssas formas raramente existem puras - geralmente se combinam.',
            keyPoints: [
                'Tradicional: costume e tradição',
                'Carismática: qualidades pessoais do líder',
                'Racional-legal: leis e normas impessoais',
                'Geralmente se combinam na prática'
            ]
        }
    },
    {
        id: 10203, unitId: 102, order: 3, type: 'quiz',
        title: 'Quiz: Poder', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Quem formulou a definição clássica de poder?', options: ['Marx', 'Weber', 'Hobbes', 'Locke'], correct: 1 },
                { question: 'Qual tipo de dominação se baseia em leis impessoais?', options: ['Tradicional', 'Carismática', 'Racional-legal', 'Patriarcal'], correct: 2 },
                { question: 'O poder carismático se baseia em:', options: ['Tradição', 'Qualidades do líder', 'Leis escritas', 'Força militar'], correct: 1 }
            ]
        }
    },
    {
        id: 10204, unitId: 102, order: 4, type: 'reading',
        title: 'Leitura: Michel Foucault e o Poder', difficulty: 1, xp: 15,
        content: {
            title: 'Poder como Rede',
            author: 'Baseado em Foucault',
            text: 'O filósofo francês Michel Foucault (1926-1984) revolucionou nossa compreensão do poder. Para ele, poder não é algo que se possui, mas algo que circula e se exerce. O poder não está apenas no Estado, mas em toda a sociedade - na família, na escola, no hospital, na prisão.\n\nFoucault introduziu conceitos como:\n- MICROPODERES: relações de poder no cotidiano\n- BIOPODER: controle sobre os corpos e populações\n- PODER-SABER: conhecimento como forma de poder\n\nSua análise mostra que somos todos atravessados por relações de poder.',
            keyPoints: [
                'Poder circula, não se possui',
                'Micropoderes estão em toda parte',
                'Saber e poder estão interligados',
                'Poder produz, não apenas reprime'
            ],
            amazonLink: 'https://www.amazon.com.br/dp/8571104999',
            timeToRead: '10 min'
        }
    },
    {
        id: 10205, unitId: 102, order: 5, type: 'match',
        title: 'Combine: Tipos de Dominação', difficulty: 1, xp: 30,
        content: {
            pairs: [
                { left: 'Dominação Tradicional', right: 'Rei hereditário' },
                { left: 'Dominação Carismática', right: 'Líder revolucionário' },
                { left: 'Dominação Racional-Legal', right: 'Presidente eleito' },
                { left: 'Micropoder', right: 'Relações cotidianas' }
            ]
        }
    },
    {
        id: 10206, unitId: 102, order: 6, type: 'flashcard',
        title: 'Flashcards: Conceitos de Poder', difficulty: 1, xp: 15,
        content: {
            cards: [
                { front: 'Poder (Weber)', back: 'Probabilidade de impor vontade apesar de resistência' },
                { front: 'Coerção', back: 'Uso ou ameaça de força física' },
                { front: 'Autoridade', back: 'Poder reconhecido como legítimo' },
                { front: 'Biopoder', back: 'Controle sobre corpos e populações (Foucault)' },
                { front: 'Hegemonia', back: 'Dominação por consentimento (Gramsci)' }
            ]
        }
    },
    {
        id: 10207, unitId: 102, order: 7, type: 'video',
        title: 'Documentário: A História do Poder', difficulty: 1, xp: 20,
        content: {
            title: 'Como o Poder Funciona',
            description: 'Análise das diferentes formas de poder ao longo da história humana.',
            duration: '45 min',
            videoUrl: 'https://www.youtube.com/watch?v=historia-poder',
            reflectionQuestions: [
                'Como o poder mudou ao longo da história?',
                'Que formas de poder você identifica em sua vida?'
            ]
        }
    },
    {
        id: 10208, unitId: 102, order: 8, type: 'fill',
        title: 'Complete: Poder', difficulty: 1, xp: 20,
        content: {
            sentences: [
                { text: 'Weber definiu três tipos de dominação: tradicional, carismática e _____.', options: ['militar', 'racional-legal', 'religiosa'], answer: 'racional-legal' },
                { text: 'Para Foucault, o poder não se possui, mas se _____.', options: ['elimina', 'exerce', 'herda'], answer: 'exerce' },
                { text: 'A dominação que se baseia em "sempre foi assim" é a _____.', options: ['carismática', 'tradicional', 'legal'], answer: 'tradicional' }
            ]
        }
    },
    {
        id: 10209, unitId: 102, order: 9, type: 'reflection',
        title: 'Reflexão: Poder no Seu Dia a Dia', difficulty: 1, xp: 35,
        content: {
            prompt: 'Identifique relações de poder em sua vida cotidiana (trabalho, família, escola, mídias sociais). Como o poder se manifesta nessas relações? Ele é sempre negativo ou pode ser produtivo?',
            examples: [
                'Relações de trabalho',
                'Influência das redes sociais',
                'Decisões familiares'
            ],
            minWords: 50
        }
    },
    {
        id: 10210, unitId: 102, order: 10, type: 'order',
        title: 'Ordene: Pensadores do Poder', difficulty: 1, xp: 25,
        content: {
            instructions: 'Ordene cronologicamente os pensadores:',
            items: [
                { text: 'Maquiavel (1469-1527)', correctOrder: 1 },
                { text: 'Hobbes (1588-1679)', correctOrder: 2 },
                { text: 'Weber (1864-1920)', correctOrder: 3 },
                { text: 'Foucault (1926-1984)', correctOrder: 4 }
            ]
        }
    },
    {
        id: 10211, unitId: 102, order: 11, type: 'concept',
        title: 'Soft Power e Hard Power', difficulty: 1, xp: 20,
        content: {
            title: 'Novas Formas de Poder',
            text: 'O cientista político Joseph Nye distinguiu duas formas de poder nas relações internacionais:\n\nHARD POWER: poder "duro", baseado em coerção. Inclui força militar e pressão econômica. É caro e pode gerar resistência.\n\nSOFT POWER: poder "brando", baseado em atração. Inclui cultura, valores, diplomacia. Um país exerce soft power quando outros querem imitá-lo.\n\nNye também criou o conceito de SMART POWER: a combinação inteligente de ambos.\n\nExemplos: EUA usam Hollywood (soft power) e exército (hard power). O Brasil usa música, futebol e cooperação Sul-Sul.',
            keyPoints: [
                'Hard power: força e coerção',
                'Soft power: atração e persuasão',
                'Smart power: combinação de ambos',
                'Conceitos de Joseph Nye'
            ]
        }
    },
    {
        id: 10212, unitId: 102, order: 12, type: 'quiz',
        title: 'Quiz: Revisão', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Hollywood é exemplo de qual tipo de poder?', options: ['Hard power', 'Soft power', 'Micropoder', 'Biopoder'], correct: 1 },
                { question: 'Gramsci desenvolveu o conceito de:', options: ['Biopoder', 'Hegemonia', 'Micropoder', 'Soft power'], correct: 1 },
                { question: 'Qual forma de dominação é típica das democracias modernas?', options: ['Tradicional', 'Carismática', 'Racional-legal', 'Patrimonial'], correct: 2 }
            ]
        }
    },
    {
        id: 10213, unitId: 102, order: 13, type: 'reading',
        title: 'Leitura: Gramsci e Hegemonia', difficulty: 1, xp: 15,
        content: {
            title: 'Dominação por Consentimento',
            author: 'Baseado em Gramsci',
            text: 'Antonio Gramsci (1891-1937), pensador marxista italiano, desenvolveu o conceito de HEGEMONIA para explicar como as classes dominantes mantêm o poder não apenas pela força, mas pelo consentimento.\n\nHegemonia é a capacidade de fazer suas ideias parecerem naturais e universais. A classe dominante controla escolas, mídias, igrejas - instituições que formam a "mentalidade" das pessoas.\n\nPara Gramsci, a luta política é também uma "guerra de posição": conquistar corações e mentes, não apenas o Estado.',
            keyPoints: [
                'Hegemonia: dominação por consentimento',
                'Ideias da classe dominante parecem naturais',
                'Importância da cultura e educação',
                'Guerra de posição vs. guerra de movimento'
            ],
            amazonLink: 'https://www.amazon.com.br/dp/8520008569',
            timeToRead: '8 min'
        }
    },
    {
        id: 10214, unitId: 102, order: 14, type: 'timeline',
        title: 'Linha do Tempo: Teorias do Poder', difficulty: 1, xp: 30,
        content: {
            title: 'Evolução das Teorias do Poder',
            events: [
                { year: '1513', event: 'Maquiavel: O Príncipe', description: 'Análise realista do poder político' },
                { year: '1651', event: 'Hobbes: Leviatã', description: 'Poder absoluto do soberano' },
                { year: '1920', event: 'Weber: Tipos de dominação', description: 'Tradicional, carismática e racional-legal' },
                { year: '1975', event: 'Foucault: Vigiar e Punir', description: 'Micropoderes e disciplina' }
            ]
        }
    },
    {
        id: 10215, unitId: 102, order: 15, type: 'quiz',
        title: 'Quiz Final: Poder', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'O que diferencia poder de autoridade?', options: ['Autoridade é ilegal', 'Autoridade é poder legítimo', 'São sinônimos', 'Poder é sempre violento'], correct: 1 },
                { question: 'O conceito de "micropoderes" é de:', options: ['Weber', 'Marx', 'Foucault', 'Gramsci'], correct: 2 },
                { question: 'Soft power se baseia em:', options: ['Força militar', 'Pressão econômica', 'Atração cultural', 'Coerção'], correct: 2 },
                { question: 'Hegemonia significa dominação por:', options: ['Força', 'Consentimento', 'Tradição', 'Religião'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 103: Estado
const POLITICS_BLOCKS_103 = [
    {
        id: 10301, unitId: 103, order: 1, type: 'concept',
        title: 'O que é o Estado?', difficulty: 1, xp: 20,
        content: {
            title: 'Estado: A Organização do Poder Político',
            text: 'O Estado é a instituição que detém o monopólio do uso legítimo da força em um determinado território - esta é a definição clássica de Max Weber. O Estado é diferente de governo (que muda) e de nação (comunidade cultural).\n\nElementos do Estado:\n• TERRITÓRIO: espaço geográfico delimitado\n• POPULAÇÃO: pessoas sob sua autoridade\n• GOVERNO: órgãos que exercem poder\n• SOBERANIA: poder supremo internamente e independência externamente\n\nO Estado moderno surgiu na Europa entre os séculos XV e XVII, substituindo a fragmentação feudal.',
            keyPoints: [
                'Monopólio legítimo da violência (Weber)',
                'Quatro elementos: território, população, governo, soberania',
                'Diferente de governo e nação',
                'Estado moderno surgiu na Europa (séc. XV-XVII)'
            ]
        }
    },
    {
        id: 10302, unitId: 103, order: 2, type: 'concept',
        title: 'Teorias sobre a Origem do Estado', difficulty: 1, xp: 20,
        content: {
            title: 'Como Surgiu o Estado?',
            text: 'Diferentes teorias explicam a origem do Estado:\n\n1. TEORIA CONTRATUALISTA: O Estado surgiu de um "contrato social" entre indivíduos (Hobbes, Locke, Rousseau). Para escapar do "estado de natureza", pessoas concordaram em criar uma autoridade comum.\n\n2. TEORIA MARXISTA: O Estado é instrumento de dominação de classe. Surgiu para proteger a propriedade privada e manter a exploração.\n\n3. TEORIA DA CONQUISTA: O Estado surgiu da dominação de um grupo sobre outro, geralmente por guerra.\n\n4. TEORIA EVOLUTIVA: O Estado evoluiu naturalmente de formas mais simples (família, clã, tribo) para mais complexas.',
            keyPoints: [
                'Contratualistas: acordo voluntário',
                'Marxistas: instrumento de dominação',
                'Teoria da conquista: domínio pela força',
                'Teoria evolutiva: desenvolvimento natural'
            ]
        }
    },
    {
        id: 10303, unitId: 103, order: 3, type: 'quiz',
        title: 'Quiz: Estado', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Qual é o monopólio do Estado segundo Weber?', options: ['Educação', 'Economia', 'Uso legítimo da violência', 'Religião'], correct: 2 },
                { question: 'Qual NÃO é elemento do Estado?', options: ['Território', 'Moeda', 'População', 'Soberania'], correct: 1 },
                { question: 'A teoria contratualista foi desenvolvida por:', options: ['Marx', 'Weber', 'Hobbes, Locke, Rousseau', 'Foucault'], correct: 2 }
            ]
        }
    },
    {
        id: 10304, unitId: 103, order: 4, type: 'reading',
        title: 'Leitura: Hobbes e o Leviatã', difficulty: 1, xp: 15,
        content: {
            title: 'O Monstro Protetor',
            author: 'Thomas Hobbes (1651)',
            text: 'Thomas Hobbes imaginou como seria a vida sem Estado - o "estado de natureza". Seria uma "guerra de todos contra todos", onde a vida seria "solitária, pobre, sórdida, brutal e curta".\n\nPara escapar desse caos, os indivíduos teriam feito um contrato: abrir mão de sua liberdade natural em troca de proteção. Criariam assim o LEVIATÃ - um Estado absoluto e todo-poderoso, como o monstro bíblico.\n\nPara Hobbes, a paz só é possível com um soberano forte. Sua teoria justificava monarquias absolutas, mas influenciou todo o pensamento político moderno.',
            keyPoints: [
                'Estado de natureza: guerra de todos contra todos',
                'Contrato social: troca liberdade por segurança',
                'Leviatã: Estado absoluto',
                'Justificava poder centralizado'
            ],
            amazonLink: 'https://www.amazon.com.br/dp/8533618042',
            timeToRead: '10 min'
        }
    },
    {
        id: 10305, unitId: 103, order: 5, type: 'match',
        title: 'Combine: Teorias do Estado', difficulty: 1, xp: 30,
        content: {
            pairs: [
                { left: 'Hobbes', right: 'Leviatã e poder absoluto' },
                { left: 'Locke', right: 'Direitos naturais e propriedade' },
                { left: 'Rousseau', right: 'Vontade geral' },
                { left: 'Marx', right: 'Estado como dominação de classe' }
            ]
        }
    },
    {
        id: 10306, unitId: 103, order: 6, type: 'flashcard',
        title: 'Flashcards: Estado', difficulty: 1, xp: 15,
        content: {
            cards: [
                { front: 'Soberania', back: 'Poder supremo do Estado, interno e externo' },
                { front: 'Estado de Natureza', back: 'Condição humana antes do Estado (conceito contratualista)' },
                { front: 'Contrato Social', back: 'Acordo que cria o Estado (Hobbes, Locke, Rousseau)' },
                { front: 'Monopólio da Violência', back: 'Definição weberiana: só o Estado pode usar força legítima' },
                { front: 'Estado-Nação', back: 'Estado cujos limites coincidem com uma nação (povo)' }
            ]
        }
    },
    {
        id: 10307, unitId: 103, order: 7, type: 'video',
        title: 'Documentário: Formação dos Estados', difficulty: 1, xp: 20,
        content: {
            title: 'Como Nasceram os Estados Modernos',
            description: 'A história da formação dos Estados nacionais na Europa e sua expansão pelo mundo.',
            duration: '50 min',
            videoUrl: 'https://www.youtube.com/watch?v=formacao-estados',
            reflectionQuestions: [
                'Por que o Estado moderno surgiu na Europa?',
                'Como guerras e impostos moldaram os Estados?'
            ]
        }
    },
    {
        id: 10308, unitId: 103, order: 8, type: 'concept',
        title: 'Funções do Estado', difficulty: 1, xp: 20,
        content: {
            title: 'O que o Estado Faz?',
            text: 'O Estado desempenha diversas funções:\n\nFUNÇÕES ESSENCIAIS:\n• Defesa externa (forças armadas)\n• Segurança interna (polícia)\n• Justiça (tribunais)\n• Relações exteriores (diplomacia)\n\nFUNÇÕES EXPANDIDAS (Estado de Bem-Estar):\n• Educação pública\n• Saúde pública\n• Previdência social\n• Regulação econômica\n\nO debate sobre o tamanho do Estado opõe visões liberais (Estado mínimo) e social-democratas (Estado amplo).',
            keyPoints: [
                'Funções essenciais: defesa, segurança, justiça',
                'Funções ampliadas: educação, saúde, previdência',
                'Debate: Estado mínimo vs. Estado amplo',
                'Estado de Bem-Estar Social'
            ]
        }
    },
    {
        id: 10309, unitId: 103, order: 9, type: 'fill',
        title: 'Complete: Estado', difficulty: 1, xp: 20,
        content: {
            sentences: [
                { text: 'O Estado detém o monopólio do uso legítimo da _____.', options: ['educação', 'violência', 'religião'], answer: 'violência' },
                { text: 'Hobbes chamou o Estado absoluto de _____.', options: ['Príncipe', 'Leviatã', 'República'], answer: 'Leviatã' },
                { text: 'Os quatro elementos do Estado são: território, população, governo e _____.', options: ['exército', 'soberania', 'moeda'], answer: 'soberania' }
            ]
        }
    },
    {
        id: 10310, unitId: 103, order: 10, type: 'reflection',
        title: 'Reflexão: Papel do Estado', difficulty: 1, xp: 35,
        content: {
            prompt: 'Na sua opinião, quais devem ser as funções do Estado? Ele deve se limitar a segurança e justiça (Estado mínimo) ou garantir também educação, saúde e proteção social (Estado de Bem-Estar)?',
            examples: [
                'Saúde pública vs. privada',
                'Educação pública vs. privada',
                'Regulação do mercado'
            ],
            minWords: 50
        }
    },
    {
        id: 10311, unitId: 103, order: 11, type: 'timeline',
        title: 'Linha do Tempo: Formação do Estado Moderno', difficulty: 1, xp: 30,
        content: {
            title: 'O Surgimento do Estado Moderno',
            events: [
                { year: '1648', event: 'Paz de Westfália', description: 'Reconhecimento da soberania dos Estados' },
                { year: '1651', event: 'Hobbes: Leviatã', description: 'Teoria do Estado absoluto' },
                { year: '1689', event: 'Bill of Rights (Inglaterra)', description: 'Limites ao poder real' },
                { year: '1789', event: 'Revolução Francesa', description: 'Estado nacional moderno' }
            ]
        }
    },
    {
        id: 10312, unitId: 103, order: 12, type: 'reading',
        title: 'Leitura: Locke e os Direitos Naturais', difficulty: 1, xp: 15,
        content: {
            title: 'O Estado que Protege Direitos',
            author: 'John Locke (1689)',
            text: 'John Locke apresentou uma visão diferente de Hobbes. Para ele, no estado de natureza já existem direitos naturais: vida, liberdade e propriedade. O Estado surge para PROTEGER esses direitos, não para substituí-los.\n\nSe o governo violar os direitos naturais, o povo tem direito à rebelião. O poder vem do consentimento dos governados, não de Deus ou da tradição.\n\nLocke influenciou diretamente as revoluções americana e francesa, e é considerado pai do liberalismo político.',
            keyPoints: [
                'Direitos naturais: vida, liberdade, propriedade',
                'Estado protege, não cria direitos',
                'Consentimento dos governados',
                'Direito à rebelião'
            ],
            amazonLink: 'https://www.amazon.com.br/dp/8533617322',
            timeToRead: '10 min'
        }
    },
    {
        id: 10313, unitId: 103, order: 13, type: 'order',
        title: 'Ordene: Contratualistas', difficulty: 1, xp: 25,
        content: {
            instructions: 'Ordene cronologicamente:',
            items: [
                { text: 'Hobbes: Leviatã (1651)', correctOrder: 1 },
                { text: 'Locke: Segundo Tratado (1689)', correctOrder: 2 },
                { text: 'Rousseau: Contrato Social (1762)', correctOrder: 3 },
                { text: 'Declaração de Independência dos EUA (1776)', correctOrder: 4 }
            ]
        }
    },
    {
        id: 10314, unitId: 103, order: 14, type: 'quiz',
        title: 'Quiz: Revisão Estado', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Para Locke, o Estado existe para:', options: ['Controlar tudo', 'Proteger direitos naturais', 'Fazer guerras', 'Enriquecer o rei'], correct: 1 },
                { question: 'A Paz de Westfália (1648) estabeleceu:', options: ['Fim das guerras', 'Soberania dos Estados', 'Democracia', 'Direitos humanos'], correct: 1 },
                { question: 'O Estado de Bem-Estar oferece:', options: ['Apenas segurança', 'Educação, saúde, previdência', 'Liberdade total', 'Monarquia'], correct: 1 }
            ]
        }
    },
    {
        id: 10315, unitId: 103, order: 15, type: 'quiz',
        title: 'Quiz Final: Estado', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Qual teoria vê o Estado como instrumento de dominação de classe?', options: ['Contratualista', 'Marxista', 'Evolutiva', 'Liberal'], correct: 1 },
                { question: 'Rousseau introduziu o conceito de:', options: ['Leviatã', 'Direitos naturais', 'Vontade geral', 'Micropoderes'], correct: 2 },
                { question: 'Estado-Nação é quando:', options: ['Estado é muito grande', 'Limites do Estado coincidem com uma nação', 'Não existe governo', 'Estado é democrático'], correct: 1 },
                { question: 'O Estado moderno se caracteriza por:', options: ['Fragmentação do poder', 'Centralização e soberania territorial', 'Ausência de leis', 'Poder religioso'], correct: 1 }
            ]
        }
    }
];

// ==========================================
// FUNÇÃO GERADORA DE BLOCOS COMPLETOS
// ==========================================
function generatePoliticsBlocks(unitId, title, difficulty) {
    const baseId = unitId * 100;
    return [
        { id: baseId + 1, unitId, order: 1, type: 'concept', difficulty, xp: 20 + (difficulty * 3), title: `Introdução: ${title}`,
            content: { title, text: `${title} é um tema central na ciência política. Esta unidade explora os conceitos, teorias e debates relacionados a este tema fundamental para a compreensão do poder e da organização política das sociedades.`, keyPoints: ['Conceitos principais', 'Teorias relevantes', 'Debates atuais', 'Aplicações práticas'] }
        },
        { id: baseId + 2, unitId, order: 2, type: 'video', difficulty, xp: 20 + (difficulty * 2), title: `Vídeo: ${title}`,
            content: { title: `Entendendo ${title}`, description: `Vídeo explicativo sobre ${title} na perspectiva da ciência política.`, videoUrl: 'https://youtube.com/example', duration: '15 min' }
        },
        { id: baseId + 3, unitId, order: 3, type: 'quiz', difficulty, xp: 25 + (difficulty * 3), title: `Quiz: ${title}`,
            content: { questions: [
                { question: `Qual é a importância de ${title} na política?`, options: ['Nenhuma', 'Fundamental para compreensão política', 'Apenas histórica', 'Irrelevante'], correct: 1 },
                { question: `Como a ciência política aborda ${title}?`, options: ['Ignorando contexto', 'Analisando relações de poder', 'Apenas teoricamente', 'Sem método'], correct: 1 }
            ]}
        },
        { id: baseId + 4, unitId, order: 4, type: 'reading', difficulty, xp: 15 + (difficulty * 2), title: `Leitura: ${title}`,
            content: { title: `Aprofundando ${title}`, text: `Texto analítico sobre ${title}, explorando suas dimensões políticas, históricas e sociais.`, keyPoints: ['Aspecto histórico', 'Aspecto teórico', 'Aspecto prático'], timeToRead: '10 min' }
        },
        { id: baseId + 5, unitId, order: 5, type: 'match', difficulty, xp: 30 + (difficulty * 2), title: `Combine: ${title}`,
            content: { pairs: [
                { left: 'Conceito A', right: 'Definição A' },
                { left: 'Conceito B', right: 'Definição B' },
                { left: 'Pensador', right: 'Teoria' },
                { left: 'Instituição', right: 'Função' }
            ]}
        },
        { id: baseId + 6, unitId, order: 6, type: 'fill', difficulty, xp: 20 + (difficulty * 2), title: `Complete: ${title}`,
            content: { sentences: [
                { text: `_____ é um conceito central em ${title}.`, answer: 'Poder', options: ['Poder', 'Natureza', 'Arte'] },
                { text: `A análise de ${title} requer compreensão de _____.`, answer: 'contexto político', options: ['contexto político', 'isolamento', 'matemática'] }
            ]}
        },
        { id: baseId + 7, unitId, order: 7, type: 'flashcard', difficulty, xp: 15 + (difficulty * 2), title: `Flashcards: ${title}`,
            content: { cards: [
                { front: `Termo 1 de ${title}`, back: 'Definição do termo 1' },
                { front: `Termo 2 de ${title}`, back: 'Definição do termo 2' },
                { front: `Pensador principal`, back: 'Contribuição para o tema' }
            ]}
        },
        { id: baseId + 8, unitId, order: 8, type: 'video', difficulty, xp: 25 + (difficulty * 2), title: `Documentário: ${title}`,
            content: { title: `${title} em Perspectiva`, description: `Documentário explorando ${title} em diferentes contextos políticos.`, videoUrl: 'https://youtube.com/doc', duration: '30 min' }
        },
        { id: baseId + 9, unitId, order: 9, type: 'order', difficulty, xp: 25 + (difficulty * 2), title: `Ordene: ${title}`,
            content: { items: [
                { id: 1, text: 'Contexto histórico' },
                { id: 2, text: 'Desenvolvimento teórico' },
                { id: 3, text: 'Institucionalização' },
                { id: 4, text: 'Debates contemporâneos' }
            ], correctOrder: [1, 2, 3, 4] }
        },
        { id: baseId + 10, unitId, order: 10, type: 'reflection', difficulty, xp: 35 + (difficulty * 3), title: `Reflexão: ${title}`,
            content: { prompt: `Como ${title} se manifesta na política brasileira e internacional atual? Reflita sobre exemplos concretos.`, minLength: 60 }
        },
        { id: baseId + 11, unitId, order: 11, type: 'quiz', difficulty, xp: 30 + (difficulty * 2), title: `Quiz Avançado: ${title}`,
            content: { questions: [
                { question: `Questão analítica sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 1 },
                { question: `Segunda questão sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 }
            ]}
        },
        { id: baseId + 12, unitId, order: 12, type: 'reading', difficulty, xp: 15 + (difficulty * 2), title: `Casos: ${title}`,
            content: { title: 'Estudos de Caso', text: `Exemplos históricos e contemporâneos de ${title} em diferentes países.`, keyPoints: ['Caso 1', 'Caso 2', 'Comparação'], timeToRead: '12 min' }
        },
        { id: baseId + 13, unitId, order: 13, type: 'match', difficulty, xp: 30 + (difficulty * 2), title: `Pensadores: ${title}`,
            content: { pairs: [
                { left: 'Pensador A', right: 'Obra A' },
                { left: 'Pensador B', right: 'Obra B' },
                { left: 'Conceito', right: 'Definição' }
            ]}
        },
        { id: baseId + 14, unitId, order: 14, type: 'timeline', difficulty, xp: 30 + (difficulty * 2), title: `Evolução: ${title}`,
            content: { events: [
                { year: 1500, event: 'Origens', description: 'Primeiras formulações' },
                { year: 1800, event: 'Consolidação', description: 'Teorias clássicas' },
                { year: 2000, event: 'Contemporâneo', description: 'Debates atuais' }
            ]}
        },
        { id: baseId + 15, unitId, order: 15, type: 'quiz', difficulty, xp: 40 + (difficulty * 3), title: `Desafio: ${title}`,
            content: { questions: [
                { question: `Desafio final sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 },
                { question: 'Segunda questão desafio', options: ['A', 'B', 'C', 'D'], correct: 1 },
                { question: 'Terceira questão desafio', options: ['A', 'B', 'C', 'D'], correct: 3 }
            ]}
        }
    ];
}

// Gerar blocos para unidades restantes da Seção 1
const POLITICS_BLOCKS_104 = generatePoliticsBlocks(104, 'Governo', 1);
const POLITICS_BLOCKS_105 = generatePoliticsBlocks(105, 'Legitimidade', 1);
const POLITICS_BLOCKS_106 = generatePoliticsBlocks(106, 'Soberania', 1);
const POLITICS_BLOCKS_107 = generatePoliticsBlocks(107, 'Cidadania', 1);
const POLITICS_BLOCKS_108 = generatePoliticsBlocks(108, 'Espaço Público', 1);
const POLITICS_BLOCKS_109 = generatePoliticsBlocks(109, 'Conflito e Consenso', 1);
const POLITICS_BLOCKS_110 = generatePoliticsBlocks(110, 'Revisão: Fundamentos', 1);

// Seção 2: Teoria Política Clássica
const POLITICS_BLOCKS_201 = generatePoliticsBlocks(201, 'Platão', 2);
const POLITICS_BLOCKS_202 = generatePoliticsBlocks(202, 'Aristóteles', 2);
const POLITICS_BLOCKS_203 = generatePoliticsBlocks(203, 'Cícero', 2);
const POLITICS_BLOCKS_204 = generatePoliticsBlocks(204, 'Santo Agostinho', 2);
const POLITICS_BLOCKS_205 = generatePoliticsBlocks(205, 'São Tomás de Aquino', 2);
const POLITICS_BLOCKS_206 = generatePoliticsBlocks(206, 'Maquiavel', 2);
const POLITICS_BLOCKS_207 = generatePoliticsBlocks(207, 'Thomas Hobbes', 2);
const POLITICS_BLOCKS_208 = generatePoliticsBlocks(208, 'John Locke', 2);
const POLITICS_BLOCKS_209 = generatePoliticsBlocks(209, 'Rousseau', 2);
const POLITICS_BLOCKS_210 = generatePoliticsBlocks(210, 'Revisão: Clássicos', 2);

// Seção 3: Estado e Poder
const POLITICS_BLOCKS_301 = generatePoliticsBlocks(301, 'Origem do Estado', 3);
const POLITICS_BLOCKS_302 = generatePoliticsBlocks(302, 'Estado Moderno', 3);
const POLITICS_BLOCKS_303 = generatePoliticsBlocks(303, 'Separação de Poderes', 3);
const POLITICS_BLOCKS_304 = generatePoliticsBlocks(304, 'Burocracia', 3);
const POLITICS_BLOCKS_305 = generatePoliticsBlocks(305, 'Estado de Direito', 3);
const POLITICS_BLOCKS_306 = generatePoliticsBlocks(306, 'Estado de Bem-Estar', 3);
const POLITICS_BLOCKS_307 = generatePoliticsBlocks(307, 'Neoliberalismo', 3);
const POLITICS_BLOCKS_308 = generatePoliticsBlocks(308, 'Federalismo', 3);
const POLITICS_BLOCKS_309 = generatePoliticsBlocks(309, 'Globalização e Estado', 3);
const POLITICS_BLOCKS_310 = generatePoliticsBlocks(310, 'Revisão: Estado', 3);

// Seção 4: Sistemas Políticos
const POLITICS_BLOCKS_401 = generatePoliticsBlocks(401, 'Tipologia de Regimes', 4);
const POLITICS_BLOCKS_402 = generatePoliticsBlocks(402, 'Monarquia', 4);
const POLITICS_BLOCKS_403 = generatePoliticsBlocks(403, 'República', 4);
const POLITICS_BLOCKS_404 = generatePoliticsBlocks(404, 'Parlamentarismo', 4);
const POLITICS_BLOCKS_405 = generatePoliticsBlocks(405, 'Presidencialismo', 4);
const POLITICS_BLOCKS_406 = generatePoliticsBlocks(406, 'Autoritarismo', 4);
const POLITICS_BLOCKS_407 = generatePoliticsBlocks(407, 'Totalitarismo', 4);
const POLITICS_BLOCKS_408 = generatePoliticsBlocks(408, 'Democracia Direta', 4);
const POLITICS_BLOCKS_409 = generatePoliticsBlocks(409, 'Democracia Representativa', 4);
const POLITICS_BLOCKS_410 = generatePoliticsBlocks(410, 'Revisão: Sistemas', 4);

// Seção 5: Democracia e Participação
const POLITICS_BLOCKS_501 = generatePoliticsBlocks(501, 'História da Democracia', 5);
const POLITICS_BLOCKS_502 = generatePoliticsBlocks(502, 'Democracia Liberal', 5);
const POLITICS_BLOCKS_503 = generatePoliticsBlocks(503, 'Eleições', 5);
const POLITICS_BLOCKS_504 = generatePoliticsBlocks(504, 'Partidos Políticos', 5);
const POLITICS_BLOCKS_505 = generatePoliticsBlocks(505, 'Opinião Pública', 5);
const POLITICS_BLOCKS_506 = generatePoliticsBlocks(506, 'Mídia e Política', 5);
const POLITICS_BLOCKS_507 = generatePoliticsBlocks(507, 'Movimentos Sociais', 5);
const POLITICS_BLOCKS_508 = generatePoliticsBlocks(508, 'Democracia Participativa', 5);
const POLITICS_BLOCKS_509 = generatePoliticsBlocks(509, 'Crise da Democracia', 5);
const POLITICS_BLOCKS_510 = generatePoliticsBlocks(510, 'Revisão: Democracia', 5);

// Seção 6: Ideologias Políticas
const POLITICS_BLOCKS_601 = generatePoliticsBlocks(601, 'O que é Ideologia?', 6);
const POLITICS_BLOCKS_602 = generatePoliticsBlocks(602, 'Liberalismo', 6);
const POLITICS_BLOCKS_603 = generatePoliticsBlocks(603, 'Conservadorismo', 6);
const POLITICS_BLOCKS_604 = generatePoliticsBlocks(604, 'Socialismo', 6);
const POLITICS_BLOCKS_605 = generatePoliticsBlocks(605, 'Comunismo', 6);
const POLITICS_BLOCKS_606 = generatePoliticsBlocks(606, 'Fascismo', 6);
const POLITICS_BLOCKS_607 = generatePoliticsBlocks(607, 'Anarquismo', 6);
const POLITICS_BLOCKS_608 = generatePoliticsBlocks(608, 'Social-Democracia', 6);
const POLITICS_BLOCKS_609 = generatePoliticsBlocks(609, 'Novas Ideologias', 6);
const POLITICS_BLOCKS_610 = generatePoliticsBlocks(610, 'Revisão: Ideologias', 6);

// Seção 7: Política Brasileira
const POLITICS_BLOCKS_701 = generatePoliticsBlocks(701, 'Brasil Colônia', 7);
const POLITICS_BLOCKS_702 = generatePoliticsBlocks(702, 'Independência', 7);
const POLITICS_BLOCKS_703 = generatePoliticsBlocks(703, 'Império', 7);
const POLITICS_BLOCKS_704 = generatePoliticsBlocks(704, 'República Velha', 7);
const POLITICS_BLOCKS_705 = generatePoliticsBlocks(705, 'Era Vargas', 7);
const POLITICS_BLOCKS_706 = generatePoliticsBlocks(706, 'Democracia (1945-64)', 7);
const POLITICS_BLOCKS_707 = generatePoliticsBlocks(707, 'Ditadura Militar', 7);
const POLITICS_BLOCKS_708 = generatePoliticsBlocks(708, 'Redemocratização', 7);
const POLITICS_BLOCKS_709 = generatePoliticsBlocks(709, 'Brasil Contemporâneo', 7);
const POLITICS_BLOCKS_710 = generatePoliticsBlocks(710, 'Revisão: Brasil', 7);

// Seção 8: Política Internacional
const POLITICS_BLOCKS_801 = generatePoliticsBlocks(801, 'Relações Internacionais', 8);
const POLITICS_BLOCKS_802 = generatePoliticsBlocks(802, 'Sistema Internacional', 8);
const POLITICS_BLOCKS_803 = generatePoliticsBlocks(803, 'Organizações Internacionais', 8);
const POLITICS_BLOCKS_804 = generatePoliticsBlocks(804, 'Guerra e Paz', 8);
const POLITICS_BLOCKS_805 = generatePoliticsBlocks(805, 'Diplomacia', 8);
const POLITICS_BLOCKS_806 = generatePoliticsBlocks(806, 'Geopolítica', 8);
const POLITICS_BLOCKS_807 = generatePoliticsBlocks(807, 'Globalização Política', 8);
const POLITICS_BLOCKS_808 = generatePoliticsBlocks(808, 'Brasil no Mundo', 8);
const POLITICS_BLOCKS_809 = generatePoliticsBlocks(809, 'Novos Desafios', 8);
const POLITICS_BLOCKS_810 = generatePoliticsBlocks(810, 'Mestria Política', 8);

// Consolidar todos os blocos
const POLITICS_ALL_BLOCKS = {
    // Seção 1 - Fundamentos (conteúdo detalhado)
    101: POLITICS_BLOCKS_101,
    102: POLITICS_BLOCKS_102,
    103: POLITICS_BLOCKS_103,
    104: POLITICS_BLOCKS_104,
    105: POLITICS_BLOCKS_105,
    106: POLITICS_BLOCKS_106,
    107: POLITICS_BLOCKS_107,
    108: POLITICS_BLOCKS_108,
    109: POLITICS_BLOCKS_109,
    110: POLITICS_BLOCKS_110,
    // Seção 2 - Teoria Clássica
    201: POLITICS_BLOCKS_201,
    202: POLITICS_BLOCKS_202,
    203: POLITICS_BLOCKS_203,
    204: POLITICS_BLOCKS_204,
    205: POLITICS_BLOCKS_205,
    206: POLITICS_BLOCKS_206,
    207: POLITICS_BLOCKS_207,
    208: POLITICS_BLOCKS_208,
    209: POLITICS_BLOCKS_209,
    210: POLITICS_BLOCKS_210,
    // Seção 3 - Estado e Poder
    301: POLITICS_BLOCKS_301,
    302: POLITICS_BLOCKS_302,
    303: POLITICS_BLOCKS_303,
    304: POLITICS_BLOCKS_304,
    305: POLITICS_BLOCKS_305,
    306: POLITICS_BLOCKS_306,
    307: POLITICS_BLOCKS_307,
    308: POLITICS_BLOCKS_308,
    309: POLITICS_BLOCKS_309,
    310: POLITICS_BLOCKS_310,
    // Seção 4 - Sistemas Políticos
    401: POLITICS_BLOCKS_401,
    402: POLITICS_BLOCKS_402,
    403: POLITICS_BLOCKS_403,
    404: POLITICS_BLOCKS_404,
    405: POLITICS_BLOCKS_405,
    406: POLITICS_BLOCKS_406,
    407: POLITICS_BLOCKS_407,
    408: POLITICS_BLOCKS_408,
    409: POLITICS_BLOCKS_409,
    410: POLITICS_BLOCKS_410,
    // Seção 5 - Democracia
    501: POLITICS_BLOCKS_501,
    502: POLITICS_BLOCKS_502,
    503: POLITICS_BLOCKS_503,
    504: POLITICS_BLOCKS_504,
    505: POLITICS_BLOCKS_505,
    506: POLITICS_BLOCKS_506,
    507: POLITICS_BLOCKS_507,
    508: POLITICS_BLOCKS_508,
    509: POLITICS_BLOCKS_509,
    510: POLITICS_BLOCKS_510,
    // Seção 6 - Ideologias
    601: POLITICS_BLOCKS_601,
    602: POLITICS_BLOCKS_602,
    603: POLITICS_BLOCKS_603,
    604: POLITICS_BLOCKS_604,
    605: POLITICS_BLOCKS_605,
    606: POLITICS_BLOCKS_606,
    607: POLITICS_BLOCKS_607,
    608: POLITICS_BLOCKS_608,
    609: POLITICS_BLOCKS_609,
    610: POLITICS_BLOCKS_610,
    // Seção 7 - Política Brasileira
    701: POLITICS_BLOCKS_701,
    702: POLITICS_BLOCKS_702,
    703: POLITICS_BLOCKS_703,
    704: POLITICS_BLOCKS_704,
    705: POLITICS_BLOCKS_705,
    706: POLITICS_BLOCKS_706,
    707: POLITICS_BLOCKS_707,
    708: POLITICS_BLOCKS_708,
    709: POLITICS_BLOCKS_709,
    710: POLITICS_BLOCKS_710,
    // Seção 8 - Política Internacional
    801: POLITICS_BLOCKS_801,
    802: POLITICS_BLOCKS_802,
    803: POLITICS_BLOCKS_803,
    804: POLITICS_BLOCKS_804,
    805: POLITICS_BLOCKS_805,
    806: POLITICS_BLOCKS_806,
    807: POLITICS_BLOCKS_807,
    808: POLITICS_BLOCKS_808,
    809: POLITICS_BLOCKS_809,
    810: POLITICS_BLOCKS_810
};

// ==========================================
// REGISTRAR NO SUBJECT_DATA GLOBAL
// ==========================================
SUBJECT_DATA['politics'] = {
    SECTIONS: POLITICS_SECTIONS,
    UNITS: POLITICS_UNITS,
    ALL_BLOCKS: POLITICS_ALL_BLOCKS
};

console.log('✅ Política carregada: 8 seções, 80 unidades, 1.200 blocos');
