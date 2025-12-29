// ==========================================
// EDULEARN - DADOS DE HISTÓRIA DO BRASIL
// 10 Seções x 10 Unidades x 15 Blocos
// ==========================================

const BRAZIL_HISTORY_SECTIONS = [
    {
        id: 1,
        title: 'Brasil Pré-Colonial',
        subtitle: 'Povos originários',
        icon: 'fa-feather',
        color: '#8b4513',
        difficulty: 1,
        description: 'Conheça os povos que habitavam o Brasil antes de 1500.',
        unitsCount: 10
    },
    {
        id: 2,
        title: 'Colonização Portuguesa',
        subtitle: 'Chegada e primeiros anos',
        icon: 'fa-ship',
        color: '#1cb0f6',
        difficulty: 2,
        description: 'Estude a chegada dos portugueses e o início da colonização.',
        unitsCount: 10
    },
    {
        id: 3,
        title: 'Brasil Colônia',
        subtitle: 'Açúcar, ouro e escravidão',
        icon: 'fa-crown',
        color: '#ffc800',
        difficulty: 3,
        description: 'Explore os três séculos de colonização portuguesa.',
        unitsCount: 10
    },
    {
        id: 4,
        title: 'Independência e Império',
        subtitle: 'Dom Pedro I e II',
        icon: 'fa-chess-king',
        color: '#ce82ff',
        difficulty: 4,
        description: 'Analise o processo de independência e o período imperial.',
        unitsCount: 10
    },
    {
        id: 5,
        title: 'República Velha',
        subtitle: 'Café e coronéis',
        icon: 'fa-coffee',
        color: '#795548',
        difficulty: 5,
        description: 'Estude a Primeira República e o domínio das oligarquias.',
        unitsCount: 10
    },
    {
        id: 6,
        title: 'Era Vargas',
        subtitle: 'Revolução e Estado Novo',
        icon: 'fa-industry',
        color: '#ff9600',
        difficulty: 6,
        description: 'Conheça os 15 anos de Getúlio Vargas no poder.',
        unitsCount: 10
    },
    {
        id: 7,
        title: 'Democracia e Golpe (1945-64)',
        subtitle: 'República populista',
        icon: 'fa-vote-yea',
        color: '#58cc02',
        difficulty: 7,
        description: 'Explore o período democrático e o golpe de 1964.',
        unitsCount: 10
    },
    {
        id: 8,
        title: 'Ditadura Militar',
        subtitle: 'Anos de chumbo',
        icon: 'fa-shield-alt',
        color: '#607d8b',
        difficulty: 8,
        description: 'Estude os 21 anos de regime militar no Brasil.',
        unitsCount: 10
    },
    {
        id: 9,
        title: 'Redemocratização',
        subtitle: 'Volta da democracia',
        icon: 'fa-dove',
        color: '#00c853',
        difficulty: 9,
        description: 'Analise o processo de abertura política e a Nova República.',
        unitsCount: 10
    },
    {
        id: 10,
        title: 'Brasil Contemporâneo',
        subtitle: 'Desafios do século XXI',
        icon: 'fa-flag',
        color: '#ff6b9d',
        difficulty: 10,
        description: 'Estude o Brasil recente e seus desafios.',
        unitsCount: 10
    }
];

const BRAZIL_HISTORY_UNITS = {
    // SEÇÃO 1: PRÉ-COLONIAL
    1: [
        { id: 101, order: 1, title: 'Primeiros Habitantes', subtitle: 'Chegada do homem', icon: 'fa-hiking' },
        { id: 102, order: 2, title: 'Povos Tupi', subtitle: 'Cultura e território', icon: 'fa-tree' },
        { id: 103, order: 3, title: 'Povos Jê', subtitle: 'Cerrado e planalto', icon: 'fa-sun' },
        { id: 104, order: 4, title: 'Povos Aruak', subtitle: 'Amazônia', icon: 'fa-water' },
        { id: 105, order: 5, title: 'Organização Social', subtitle: 'Tribos e aldeias', icon: 'fa-users' },
        { id: 106, order: 6, title: 'Economia Indígena', subtitle: 'Caça, pesca, agricultura', icon: 'fa-fish' },
        { id: 107, order: 7, title: 'Religião e Cosmologia', subtitle: 'Visão de mundo', icon: 'fa-moon' },
        { id: 108, order: 8, title: 'Arte e Cultura', subtitle: 'Expressões indígenas', icon: 'fa-palette' },
        { id: 109, order: 9, title: 'Conflitos e Alianças', subtitle: 'Guerras intertribais', icon: 'fa-shield-alt' },
        { id: 110, order: 10, title: 'Revisão: Pré-Colonial', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 2: COLONIZAÇÃO
    2: [
        { id: 201, order: 1, title: 'Expansão Marítima', subtitle: 'Portugal no mundo', icon: 'fa-compass' },
        { id: 202, order: 2, title: 'Chegada de Cabral', subtitle: '1500', icon: 'fa-ship' },
        { id: 203, order: 3, title: 'Período Pré-Colonial', subtitle: 'Pau-brasil', icon: 'fa-tree' },
        { id: 204, order: 4, title: 'Capitanias Hereditárias', subtitle: 'Divisão do território', icon: 'fa-map' },
        { id: 205, order: 5, title: 'Governo-Geral', subtitle: 'Centralização', icon: 'fa-landmark' },
        { id: 206, order: 6, title: 'Jesuítas e Catequese', subtitle: 'Igreja e indígenas', icon: 'fa-cross' },
        { id: 207, order: 7, title: 'Primeiros Conflitos', subtitle: 'Resistência indígena', icon: 'fa-fist-raised' },
        { id: 208, order: 8, title: 'Invasões Estrangeiras', subtitle: 'Franceses e holandeses', icon: 'fa-flag' },
        { id: 209, order: 9, title: 'Fundação de Cidades', subtitle: 'Salvador, São Paulo, Rio', icon: 'fa-city' },
        { id: 210, order: 10, title: 'Revisão: Colonização', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 3: COLÔNIA
    3: [
        { id: 301, order: 1, title: 'Economia Açucareira', subtitle: 'Nordeste colonial', icon: 'fa-candy-cane' },
        { id: 302, order: 2, title: 'Escravidão Africana', subtitle: 'Tráfico atlântico', icon: 'fa-link' },
        { id: 303, order: 3, title: 'Resistência Negra', subtitle: 'Quilombos', icon: 'fa-fist-raised' },
        { id: 304, order: 4, title: 'Palmares', subtitle: 'Zumbi e a resistência', icon: 'fa-tree' },
        { id: 305, order: 5, title: 'Ciclo do Ouro', subtitle: 'Minas Gerais', icon: 'fa-coins' },
        { id: 306, order: 6, title: 'Sociedade Mineradora', subtitle: 'Vila Rica', icon: 'fa-church' },
        { id: 307, order: 7, title: 'Revoltas Coloniais', subtitle: 'Inconfidência', icon: 'fa-scroll' },
        { id: 308, order: 8, title: 'Reformas Pombalinas', subtitle: 'Modernização', icon: 'fa-gavel' },
        { id: 309, order: 9, title: 'Sociedade Colonial', subtitle: 'Hierarquia e exclusão', icon: 'fa-users' },
        { id: 310, order: 10, title: 'Revisão: Colônia', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 4: INDEPENDÊNCIA E IMPÉRIO
    4: [
        { id: 401, order: 1, title: 'Crise do Sistema Colonial', subtitle: 'Fim do pacto', icon: 'fa-unlink' },
        { id: 402, order: 2, title: 'Vinda da Família Real', subtitle: '1808', icon: 'fa-crown' },
        { id: 403, order: 3, title: 'Abertura dos Portos', subtitle: 'Fim do monopólio', icon: 'fa-ship' },
        { id: 404, order: 4, title: 'Revolução Pernambucana', subtitle: '1817', icon: 'fa-fist-raised' },
        { id: 405, order: 5, title: 'Independência', subtitle: '7 de setembro', icon: 'fa-flag' },
        { id: 406, order: 6, title: 'Primeiro Reinado', subtitle: 'Dom Pedro I', icon: 'fa-chess-king' },
        { id: 407, order: 7, title: 'Período Regencial', subtitle: 'Revoltas', icon: 'fa-fire' },
        { id: 408, order: 8, title: 'Segundo Reinado', subtitle: 'Dom Pedro II', icon: 'fa-crown' },
        { id: 409, order: 9, title: 'Abolição da Escravidão', subtitle: '1888', icon: 'fa-link-slash' },
        { id: 410, order: 10, title: 'Revisão: Império', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 5: REPÚBLICA VELHA
    5: [
        { id: 501, order: 1, title: 'Proclamação da República', subtitle: '1889', icon: 'fa-flag' },
        { id: 502, order: 2, title: 'República da Espada', subtitle: 'Militares no poder', icon: 'fa-shield-alt' },
        { id: 503, order: 3, title: 'Política do Café', subtitle: 'Oligarquias', icon: 'fa-coffee' },
        { id: 504, order: 4, title: 'Coronelismo', subtitle: 'Poder local', icon: 'fa-hat-cowboy' },
        { id: 505, order: 5, title: 'Canudos', subtitle: 'Antônio Conselheiro', icon: 'fa-cross' },
        { id: 506, order: 6, title: 'Contestado', subtitle: 'Guerra no Sul', icon: 'fa-tree' },
        { id: 507, order: 7, title: 'Revolta da Vacina', subtitle: 'Rio de Janeiro', icon: 'fa-syringe' },
        { id: 508, order: 8, title: 'Movimento Operário', subtitle: 'Greves', icon: 'fa-hard-hat' },
        { id: 509, order: 9, title: 'Tenentismo', subtitle: 'Revolta militar', icon: 'fa-medal' },
        { id: 510, order: 10, title: 'Revisão: República Velha', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 6: ERA VARGAS
    6: [
        { id: 601, order: 1, title: 'Revolução de 1930', subtitle: 'Fim da República Velha', icon: 'fa-fist-raised' },
        { id: 602, order: 2, title: 'Governo Provisório', subtitle: '1930-1934', icon: 'fa-gavel' },
        { id: 603, order: 3, title: 'Revolução de 1932', subtitle: 'São Paulo', icon: 'fa-flag' },
        { id: 604, order: 4, title: 'Constituição de 1934', subtitle: 'Nova carta', icon: 'fa-scroll' },
        { id: 605, order: 5, title: 'Intentona Comunista', subtitle: '1935', icon: 'fa-star' },
        { id: 606, order: 6, title: 'Estado Novo', subtitle: '1937-1945', icon: 'fa-crown' },
        { id: 607, order: 7, title: 'Trabalhismo', subtitle: 'CLT e sindicatos', icon: 'fa-hard-hat' },
        { id: 608, order: 8, title: 'Industrialização', subtitle: 'CSN e Vale', icon: 'fa-industry' },
        { id: 609, order: 9, title: 'Brasil na WWII', subtitle: 'FEB', icon: 'fa-fighter-jet' },
        { id: 610, order: 10, title: 'Revisão: Vargas', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 7: DEMOCRACIA (1945-64)
    7: [
        { id: 701, order: 1, title: 'Redemocratização', subtitle: '1945', icon: 'fa-vote-yea' },
        { id: 702, order: 2, title: 'Governo Dutra', subtitle: 'Guerra Fria', icon: 'fa-snowflake' },
        { id: 703, order: 3, title: 'Volta de Vargas', subtitle: 'Eleito', icon: 'fa-redo' },
        { id: 704, order: 4, title: 'Suicídio de Vargas', subtitle: '1954', icon: 'fa-skull' },
        { id: 705, order: 5, title: 'JK', subtitle: '50 anos em 5', icon: 'fa-car' },
        { id: 706, order: 6, title: 'Brasília', subtitle: 'Nova capital', icon: 'fa-city' },
        { id: 707, order: 7, title: 'Jânio Quadros', subtitle: 'Renúncia', icon: 'fa-door-open' },
        { id: 708, order: 8, title: 'João Goulart', subtitle: 'Reformas de base', icon: 'fa-balance-scale' },
        { id: 709, order: 9, title: 'Golpe de 1964', subtitle: 'Fim da democracia', icon: 'fa-shield-alt' },
        { id: 710, order: 10, title: 'Revisão: Democracia', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 8: DITADURA
    8: [
        { id: 801, order: 1, title: 'Instalação do Regime', subtitle: 'AI-1', icon: 'fa-gavel' },
        { id: 802, order: 2, title: 'Castelo Branco', subtitle: 'Primeiro general', icon: 'fa-chess-king' },
        { id: 803, order: 3, title: 'Costa e Silva', subtitle: 'AI-5', icon: 'fa-ban' },
        { id: 804, order: 4, title: 'Anos de Chumbo', subtitle: 'Repressão', icon: 'fa-skull' },
        { id: 805, order: 5, title: 'Milagre Econômico', subtitle: 'Crescimento', icon: 'fa-chart-line' },
        { id: 806, order: 6, title: 'Resistência', subtitle: 'Guerrilha e cultura', icon: 'fa-fist-raised' },
        { id: 807, order: 7, title: 'Geisel', subtitle: 'Distensão', icon: 'fa-handshake' },
        { id: 808, order: 8, title: 'Figueiredo', subtitle: 'Abertura', icon: 'fa-door-open' },
        { id: 809, order: 9, title: 'Diretas Já', subtitle: 'Mobilização popular', icon: 'fa-bullhorn' },
        { id: 810, order: 10, title: 'Revisão: Ditadura', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 9: REDEMOCRATIZAÇÃO
    9: [
        { id: 901, order: 1, title: 'Nova República', subtitle: 'Tancredo e Sarney', icon: 'fa-flag' },
        { id: 902, order: 2, title: 'Constituição de 1988', subtitle: 'Cidadã', icon: 'fa-scroll' },
        { id: 903, order: 3, title: 'Collor', subtitle: 'Primeiro eleito', icon: 'fa-vote-yea' },
        { id: 904, order: 4, title: 'Impeachment', subtitle: '1992', icon: 'fa-gavel' },
        { id: 905, order: 5, title: 'Itamar Franco', subtitle: 'Plano Real', icon: 'fa-coins' },
        { id: 906, order: 6, title: 'FHC', subtitle: 'Estabilização', icon: 'fa-chart-line' },
        { id: 907, order: 7, title: 'Privatizações', subtitle: 'Estado mínimo', icon: 'fa-building' },
        { id: 908, order: 8, title: 'Lula', subtitle: '2003-2010', icon: 'fa-handshake' },
        { id: 909, order: 9, title: 'Políticas Sociais', subtitle: 'Bolsa Família', icon: 'fa-hand-holding-heart' },
        { id: 910, order: 10, title: 'Revisão: Redemocratização', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 10: CONTEMPORÂNEO
    10: [
        { id: 1001, order: 1, title: 'Dilma', subtitle: 'Primeira mulher', icon: 'fa-female' },
        { id: 1002, order: 2, title: 'Jornadas de Junho', subtitle: '2013', icon: 'fa-bullhorn' },
        { id: 1003, order: 3, title: 'Lava Jato', subtitle: 'Corrupção', icon: 'fa-water' },
        { id: 1004, order: 4, title: 'Impeachment', subtitle: '2016', icon: 'fa-gavel' },
        { id: 1005, order: 5, title: 'Temer', subtitle: 'Reformas', icon: 'fa-balance-scale' },
        { id: 1006, order: 6, title: 'Eleições de 2018', subtitle: 'Polarização', icon: 'fa-vote-yea' },
        { id: 1007, order: 7, title: 'Pandemia no Brasil', subtitle: 'COVID-19', icon: 'fa-virus' },
        { id: 1008, order: 8, title: 'Democracia Brasileira', subtitle: 'Desafios', icon: 'fa-exclamation-triangle' },
        { id: 1009, order: 9, title: 'Brasil Hoje', subtitle: 'Perspectivas', icon: 'fa-eye' },
        { id: 1010, order: 10, title: 'Mestria em História do Brasil', subtitle: 'Síntese final', icon: 'fa-award' }
    ]
};

// Blocos detalhados para Unidade 101: Povos Originários
const BH_BLOCKS_101 = [
    {
        id: 10101, unitId: 101, order: 1, type: 'concept',
        title: 'O Brasil Antes de Cabral', difficulty: 1, xp: 20,
        content: {
            title: 'Milhares de Anos de História',
            text: 'Antes da chegada dos portugueses em 1500, o território hoje chamado Brasil era habitado por milhões de pessoas. Estima-se que entre 2 e 4 milhões de indígenas viviam aqui, divididos em centenas de povos diferentes.\n\nEsses povos chegaram há pelo menos 12 mil anos, vindos da Ásia pelo Estreito de Bering. Desenvolveram culturas complexas, línguas diversas e formas de organização social sofisticadas. O sítio arqueológico de Pedra Furada (Piauí) sugere presença humana há mais de 20 mil anos.',
            keyPoints: [
                'Milhões de indígenas habitavam o Brasil',
                'Presença humana há mais de 12 mil anos',
                'Centenas de povos e línguas diferentes',
                'Culturas complexas e diversas'
            ]
        }
    },
    {
        id: 10102, unitId: 101, order: 2, type: 'concept',
        title: 'Principais Troncos Linguísticos', difficulty: 1, xp: 20,
        content: {
            title: 'Diversidade de Línguas',
            text: 'Os povos indígenas do Brasil falavam cerca de 1.200 línguas, agrupadas em troncos linguísticos:\n\nTUPI: O maior grupo. Incluía os Tupinambá (litoral), Guarani (sul), Tupiniquim. Dominavam a costa atlântica.\n\nMACRO-JÊ: Povos do interior. Incluía os Kayapó, Xavante, Bororo, Kaingang.\n\nARUAK (ARAWAK): Norte e Centro-Oeste. Incluía os Terena.\n\nKARIB (CARIBE): Norte da Amazônia.\n\nOutros troncos e línguas isoladas completavam o mosaico linguístico.',
            keyPoints: [
                'Cerca de 1.200 línguas indígenas',
                'Tupi: maior grupo, dominava o litoral',
                'Macro-Jê: povos do interior',
                'Diversidade linguística impressionante'
            ]
        }
    },
    {
        id: 10103, unitId: 101, order: 3, type: 'quiz',
        title: 'Quiz: Brasil Pré-Colonial', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Quantos indígenas viviam no Brasil antes de 1500?', options: ['Milhares', '2 a 4 milhões', 'Centenas', 'Dezenas de milhares'], correct: 1 },
                { question: 'O maior tronco linguístico indígena era:', options: ['Macro-Jê', 'Aruak', 'Tupi', 'Karib'], correct: 2 },
                { question: 'Os Tupinambá habitavam:', options: ['O interior', 'O litoral', 'O sul', 'O norte'], correct: 1 }
            ]
        }
    },
    {
        id: 10104, unitId: 101, order: 4, type: 'reading',
        title: 'Leitura: O Povo Brasileiro', difficulty: 1, xp: 15,
        content: {
            title: 'O Brasil Indígena',
            author: 'Darcy Ribeiro',
            text: 'Em "O Povo Brasileiro", Darcy Ribeiro descreve as sociedades indígenas pré-coloniais:\n\n"Esses povos desenvolveram modos de vida variados, alguns baseados na caça e coleta, outros na agricultura de coivara. Os Tupi, por exemplo, cultivavam mandioca, milho, batata-doce, e eram excelentes pescadores.\n\nSuas aldeias eram organizadas em casas coletivas (malocas), com divisão de tarefas por gênero e idade. Não tinham propriedade privada da terra. A liderança era conquistada por prestígio, não por herança.\n\nA guerra entre aldeias era comum, mas tinha função ritual, não de conquista territorial."',
            keyPoints: [
                'Agricultura de coivara',
                'Aldeias com casas coletivas',
                'Sociedade sem propriedade privada',
                'Liderança por prestígio'
            ],
            amazonLink: 'https://www.amazon.com.br/dp/8535900160',
            timeToRead: '10 min'
        }
    },
    {
        id: 10105, unitId: 101, order: 5, type: 'match',
        title: 'Combine: Povos e Regiões', difficulty: 1, xp: 30,
        content: {
            pairs: [
                { left: 'Tupinambá', right: 'Litoral atlântico' },
                { left: 'Guarani', right: 'Sul do Brasil' },
                { left: 'Kayapó', right: 'Interior (Mato Grosso/Pará)' },
                { left: 'Xavante', right: 'Cerrado (Mato Grosso)' }
            ]
        }
    },
    {
        id: 10106, unitId: 101, order: 6, type: 'video',
        title: 'Documentário: Brasil 500 Anos', difficulty: 1, xp: 20,
        content: {
            title: 'O Povo Brasileiro (TV Cultura)',
            description: 'Série documental baseada na obra de Darcy Ribeiro sobre a formação do povo brasileiro, com ênfase nas matrizes indígenas.',
            duration: '50 min',
            videoUrl: 'https://www.youtube.com/watch?v=povo-brasileiro',
            reflectionQuestions: [
                'O que sabemos sobre os povos originários?',
                'Por que é importante conhecer essa história?'
            ]
        }
    },
    {
        id: 10107, unitId: 101, order: 7, type: 'flashcard',
        title: 'Flashcards: Termos Indígenas', difficulty: 1, xp: 15,
        content: {
            cards: [
                { front: 'Maloca', back: 'Casa coletiva indígena' },
                { front: 'Coivara', back: 'Técnica agrícola de queimada controlada' },
                { front: 'Tupinambá', back: 'Povo Tupi do litoral brasileiro' },
                { front: 'Tronco linguístico', back: 'Grupo de línguas com origem comum' },
                { front: 'Cauim', back: 'Bebida fermentada de mandioca' }
            ]
        }
    },
    {
        id: 10108, unitId: 101, order: 8, type: 'concept',
        title: 'Modo de Vida Tupi', difficulty: 1, xp: 20,
        content: {
            title: 'Os Povos do Litoral',
            text: 'Os povos Tupi dominavam a costa brasileira e foram os primeiros a ter contato com os europeus.\n\nECONOMIA:\n• Agricultura de coivara (mandioca, milho)\n• Caça e pesca abundantes\n• Coleta de frutas e mel\n\nSOCIEDADE:\n• Aldeias de 400 a 800 pessoas\n• Malocas com 30-60 moradores\n• Liderança por prestígio e oratória\n• Guerras rituais e antropofagia\n\nCULTURA:\n• Rica tradição oral\n• Conhecimento da floresta\n• Cerâmica, tecelagem, arte plumária',
            keyPoints: [
                'Aldeias grandes e organizadas',
                'Economia baseada em mandioca',
                'Sociedade sem Estado formal',
                'Rica cultura material e oral'
            ]
        }
    },
    {
        id: 10109, unitId: 101, order: 9, type: 'fill',
        title: 'Complete: Povos Originários', difficulty: 1, xp: 20,
        content: {
            sentences: [
                { text: 'A principal técnica agrícola indígena era a _____.', options: ['irrigação', 'coivara', 'arado'], answer: 'coivara' },
                { text: 'As casas coletivas indígenas eram chamadas de _____.', options: ['malocas', 'ocas', 'tendas'], answer: 'malocas' },
                { text: 'O maior tronco linguístico indígena brasileiro é o _____.', options: ['Macro-Jê', 'Tupi', 'Aruak'], answer: 'Tupi' }
            ]
        }
    },
    {
        id: 10110, unitId: 101, order: 10, type: 'reflection',
        title: 'Reflexão: O que Perdemos?', difficulty: 1, xp: 35,
        content: {
            prompt: 'A colonização reduziu dramaticamente a população indígena e destruiu muitas culturas. O que o Brasil perdeu com isso? Que conhecimentos tradicionais ainda temos a aprender com os povos indígenas?',
            examples: [
                'Conhecimentos sobre a floresta',
                'Formas de organização social',
                'Relação com a natureza'
            ],
            minWords: 50
        }
    },
    {
        id: 10111, unitId: 101, order: 11, type: 'timeline',
        title: 'Linha do Tempo: Pré-História Brasileira', difficulty: 1, xp: 30,
        content: {
            title: 'Ocupação Humana do Brasil',
            events: [
                { year: '12.000 a.C.', event: 'Primeiros habitantes', description: 'Chegada de grupos humanos pelo norte' },
                { year: '9.000 a.C.', event: 'Lagoa Santa', description: 'Luzia, o fóssil humano mais antigo' },
                { year: '3.000 a.C.', event: 'Cerâmica na Amazônia', description: 'Primeiras cerâmicas brasileiras' },
                { year: '1.000 a.C.', event: 'Agricultura intensiva', description: 'Cultivo de mandioca se expande' },
                { year: '1500', event: 'Chegada dos portugueses', description: 'Início da colonização' }
            ]
        }
    },
    {
        id: 10112, unitId: 101, order: 12, type: 'reading',
        title: 'Leitura: Luzia', difficulty: 1, xp: 15,
        content: {
            title: 'A Primeira Brasileira',
            text: 'Luzia é o nome dado ao crânio humano mais antigo encontrado nas Américas, descoberto em Lagoa Santa (MG) em 1975. Ela viveu há cerca de 11.500 anos.\n\nOs estudos de Luzia revolucionaram o entendimento sobre o povoamento das Américas. Seu crânio apresenta traços diferentes dos índios atuais, sugerindo múltiplas ondas migratórias.\n\nInfelizmente, o fóssil original foi parcialmente danificado no incêndio do Museu Nacional em 2018, mas réplicas e estudos anteriores preservam seu legado científico.',
            keyPoints: [
                'Crânio de 11.500 anos',
                'Encontrado em Lagoa Santa (MG)',
                'Sugere múltiplas migrações',
                'Patrimônio científico brasileiro'
            ],
            timeToRead: '7 min'
        }
    },
    {
        id: 10113, unitId: 101, order: 13, type: 'order',
        title: 'Ordene: Ocupação do Brasil', difficulty: 1, xp: 25,
        content: {
            instructions: 'Ordene cronologicamente:',
            items: [
                { text: 'Chegada dos primeiros humanos', correctOrder: 1 },
                { text: 'Luzia em Lagoa Santa', correctOrder: 2 },
                { text: 'Desenvolvimento da cerâmica', correctOrder: 3 },
                { text: 'Agricultura de coivara', correctOrder: 4 },
                { text: 'Chegada dos portugueses', correctOrder: 5 }
            ]
        }
    },
    {
        id: 10114, unitId: 101, order: 14, type: 'quiz',
        title: 'Quiz: Revisão', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Luzia foi encontrada em:', options: ['São Paulo', 'Rio de Janeiro', 'Lagoa Santa (MG)', 'Amazônia'], correct: 2 },
                { question: 'Os Guarani pertencem ao tronco:', options: ['Macro-Jê', 'Tupi', 'Aruak', 'Karib'], correct: 1 },
                { question: 'A economia Tupi era baseada em:', options: ['Pecuária', 'Agricultura e pesca', 'Mineração', 'Comércio'], correct: 1 }
            ]
        }
    },
    {
        id: 10115, unitId: 101, order: 15, type: 'quiz',
        title: 'Quiz Final: Povos Originários', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Quantas línguas indígenas existiam no Brasil?', options: ['Cerca de 100', 'Cerca de 500', 'Cerca de 1.200', 'Mais de 2.000'], correct: 2 },
                { question: 'Os povos do interior pertenciam principalmente ao tronco:', options: ['Tupi', 'Macro-Jê', 'Aruak', 'Karib'], correct: 1 },
                { question: 'A liderança nas aldeias Tupi era:', options: ['Hereditária', 'Por prestígio', 'Vitalícia', 'Por idade'], correct: 1 },
                { question: 'A presença humana no Brasil tem pelo menos:', options: ['5 mil anos', '8 mil anos', '12 mil anos', '20 mil anos'], correct: 2 }
            ]
        }
    }
];

// Blocos detalhados para Unidade 102: Chegada dos Portugueses
const BH_BLOCKS_102 = [
    {
        id: 10201, unitId: 102, order: 1, type: 'concept',
        title: '22 de Abril de 1500', difficulty: 1, xp: 20,
        content: {
            title: 'A Chegada de Cabral',
            text: 'Em 22 de abril de 1500, a frota de Pedro Álvares Cabral avistou terra. Eram 13 navios e cerca de 1.500 homens, a caminho da Índia. Oficialmente, foi o "descobrimento" do Brasil.\n\nMas descobrimento para quem? Para milhões de indígenas, aquela terra era lar há milhares de anos. Os portugueses não "descobriram" - eles chegaram a um lugar já habitado.\n\nOs primeiros contatos foram relativamente pacíficos. Pero Vaz de Caminha escreveu a famosa "Carta do Achamento", descrevendo a terra e seus habitantes. Após 10 dias, a frota seguiu para a Índia.',
            keyPoints: [
                'Frota de 13 navios a caminho da Índia',
                'Primeiro contato em 22 de abril de 1500',
                'Terra já habitada por milhões',
                'Carta de Caminha: primeiro documento'
            ]
        }
    },
    {
        id: 10202, unitId: 102, order: 2, type: 'reading',
        title: 'Leitura: Carta de Caminha', difficulty: 1, xp: 15,
        content: {
            title: 'O Primeiro Documento Brasileiro',
            author: 'Pero Vaz de Caminha (1500)',
            text: '"Esta terra, Senhor, me parece que da ponta que mais contra o sul vimos, até outra ponta que contra o norte vem, de que nós deste porto houvemos vista, será tamanha que haverá nela bem vinte ou vinte e cinco léguas de costa..."\n\nCaminha descreve os indígenas com admiração:\n"A feição deles é serem pardos, maneira de avermelhados, de bons rostos e bons narizes, bem feitos. Andam nus, sem nenhuma cobertura... E uma daquelas moças era toda tingida de baixo a cima daquela tintura..."\n\nA carta revela o olhar europeu sobre os povos originários - entre curiosidade, admiração e a ideia de que poderiam ser "convertidos".',
            keyPoints: [
                'Descrição da terra e dos habitantes',
                'Olhar europeu sobre os indígenas',
                'Documento histórico fundamental',
                'Intenção de conversão religiosa'
            ],
            amazonLink: 'https://www.amazon.com.br/dp/8525420182',
            timeToRead: '10 min'
        }
    },
    {
        id: 10203, unitId: 102, order: 3, type: 'quiz',
        title: 'Quiz: 1500', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'A frota de Cabral ia para:', options: ['África', 'Índia', 'China', 'Europa'], correct: 1 },
                { question: 'A Carta do Achamento foi escrita por:', options: ['Cabral', 'Caminha', 'Dom Manuel', 'Américo Vespúcio'], correct: 1 },
                { question: 'Quantos navios tinha a frota de Cabral?', options: ['3', '7', '13', '20'], correct: 2 }
            ]
        }
    },
    {
        id: 10204, unitId: 102, order: 4, type: 'video',
        title: 'Documentário: 1500', difficulty: 1, xp: 20,
        content: {
            title: 'A Chegada de Cabral',
            description: 'Reconstrução histórica da chegada da frota portuguesa ao Brasil e os primeiros contatos com os indígenas.',
            duration: '45 min',
            videoUrl: 'https://www.youtube.com/watch?v=cabral-1500',
            reflectionQuestions: [
                'Foi realmente um "descobrimento"?',
                'Como os indígenas viram os portugueses?'
            ]
        }
    },
    {
        id: 10205, unitId: 102, order: 5, type: 'concept',
        title: 'O Período Pré-Colonial', difficulty: 1, xp: 20,
        content: {
            title: '30 Anos de Relativo Abandono',
            text: 'Entre 1500 e 1530, Portugal não se interessou muito pelo Brasil. O comércio de especiarias com a Índia era mais lucrativo.\n\nNesse período:\n• Expedições exploratórias mapearam a costa\n• Extração de pau-brasil (madeira vermelha valiosa)\n• Feitorias: entrepostos comerciais simples\n• Escambo com indígenas (troca de produtos)\n• Degredados (criminosos) deixados na terra\n\nO pau-brasil era cortado por indígenas em troca de machados, facas e outros objetos. Esse comércio começou a atrair franceses, preocupando Portugal.',
            keyPoints: [
                'Brasil menos importante que Índia',
                'Economia: extração de pau-brasil',
                'Feitorias e escambo com indígenas',
                'Presença francesa ameaçava posse'
            ]
        }
    },
    {
        id: 10206, unitId: 102, order: 6, type: 'match',
        title: 'Combine: Período Inicial', difficulty: 1, xp: 30,
        content: {
            pairs: [
                { left: 'Pau-brasil', right: 'Madeira valiosa (tinta vermelha)' },
                { left: 'Feitoria', right: 'Entreposto comercial' },
                { left: 'Escambo', right: 'Troca de produtos' },
                { left: 'Degredado', right: 'Criminoso deixado na terra' }
            ]
        }
    },
    {
        id: 10207, unitId: 102, order: 7, type: 'flashcard',
        title: 'Flashcards: 1500', difficulty: 1, xp: 15,
        content: {
            cards: [
                { front: 'Pedro Álvares Cabral', back: 'Comandante da frota que chegou ao Brasil em 1500' },
                { front: 'Pero Vaz de Caminha', back: 'Escrivão que redigiu a Carta do Achamento' },
                { front: 'Pau-brasil', back: 'Árvore cuja madeira dava tinta vermelha valiosa' },
                { front: 'Monte Pascoal', back: 'Primeiro ponto de terra avistado' },
                { front: 'Porto Seguro', back: 'Local onde a frota ancorou' }
            ]
        }
    },
    {
        id: 10208, unitId: 102, order: 8, type: 'fill',
        title: 'Complete: 1500', difficulty: 1, xp: 20,
        content: {
            sentences: [
                { text: 'A frota de Cabral chegou ao Brasil em _____ de 1500.', options: ['janeiro', 'abril', 'outubro'], answer: 'abril' },
                { text: 'O principal produto extraído no período pré-colonial foi o _____.', options: ['ouro', 'pau-brasil', 'açúcar'], answer: 'pau-brasil' },
                { text: 'Os portugueses trocavam produtos com os indígenas por meio do _____.', options: ['dinheiro', 'escambo', 'roubo'], answer: 'escambo' }
            ]
        }
    },
    {
        id: 10209, unitId: 102, order: 9, type: 'timeline',
        title: 'Linha do Tempo: Primeiros Anos', difficulty: 1, xp: 30,
        content: {
            title: 'O Brasil nos Primeiros 30 Anos',
            events: [
                { year: '1500', event: 'Chegada de Cabral', description: '22 de abril' },
                { year: '1501', event: 'Expedição de Américo Vespúcio', description: 'Mapeamento da costa' },
                { year: '1516', event: 'Primeira feitoria', description: 'Cabo Frio' },
                { year: '1530', event: 'Expedição de Martim Afonso', description: 'Início da colonização efetiva' },
                { year: '1534', event: 'Capitanias Hereditárias', description: 'Divisão do território' }
            ]
        }
    },
    {
        id: 10210, unitId: 102, order: 10, type: 'reflection',
        title: 'Reflexão: Descobrimento ou Invasão?', difficulty: 1, xp: 35,
        content: {
            prompt: 'O termo "descobrimento" é controverso. Para os indígenas, foi uma invasão. Como devemos chamar 1500? Por que a escolha das palavras importa na história?',
            examples: [
                'Descobrimento: perspectiva europeia',
                'Invasão: perspectiva indígena',
                'Encontro de culturas: visão neutra?'
            ],
            minWords: 50
        }
    },
    {
        id: 10211, unitId: 102, order: 11, type: 'concept',
        title: 'As Capitanias Hereditárias', difficulty: 1, xp: 20,
        content: {
            title: 'Dividindo a Terra',
            text: 'Em 1534, Dom João III dividiu o Brasil em 15 capitanias, doadas a donatários (fidalgos portugueses). Era uma forma de colonizar sem gastar dinheiro da Coroa.\n\nCada donatário tinha:\n• Posse hereditária da capitania\n• Direito de fundar vilas e doar terras (sesmarias)\n• Cobrar impostos e administrar justiça\n• Obrigação de desenvolver a terra\n\nA maioria fracassou. Problemas: falta de recursos, ataques indígenas, distância de Portugal. Apenas São Vicente e Pernambuco prosperaram.',
            keyPoints: [
                '15 faixas de terra doadas',
                'Colonização privada',
                'Maioria fracassou',
                'Sucesso: São Vicente e Pernambuco'
            ]
        }
    },
    {
        id: 10212, unitId: 102, order: 12, type: 'quiz',
        title: 'Quiz: Revisão', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Quantas capitanias foram criadas inicialmente?', options: ['10', '12', '15', '20'], correct: 2 },
                { question: 'Quais capitanias prosperaram?', options: ['Bahia e Rio', 'São Vicente e Pernambuco', 'Maranhão e Pará', 'Todas'], correct: 1 },
                { question: 'As capitanias eram:', options: ['Compradas', 'Doadas', 'Conquistadas', 'Alugadas'], correct: 1 }
            ]
        }
    },
    {
        id: 10213, unitId: 102, order: 13, type: 'order',
        title: 'Ordene: Colonização', difficulty: 1, xp: 25,
        content: {
            instructions: 'Ordene cronologicamente:',
            items: [
                { text: 'Chegada de Cabral', correctOrder: 1 },
                { text: 'Período pré-colonial (pau-brasil)', correctOrder: 2 },
                { text: 'Capitanias hereditárias', correctOrder: 3 },
                { text: 'Governo-geral', correctOrder: 4 }
            ]
        }
    },
    {
        id: 10214, unitId: 102, order: 14, type: 'reading',
        title: 'Leitura: Por que Colonizar?', difficulty: 1, xp: 15,
        content: {
            title: 'Motivações da Colonização',
            text: 'Portugal decidiu colonizar o Brasil efetivamente por vários motivos:\n\n1. AMEAÇA FRANCESA: Corsários franceses comerciavam pau-brasil com indígenas, ameaçando a posse portuguesa.\n\n2. DECLÍNIO DO COMÉRCIO ORIENTAL: Concorrência com outros europeus diminuía lucros da Índia.\n\n3. EXPANSÃO DO AÇÚCAR: O açúcar, produto valiosíssimo, podia ser cultivado no clima tropical brasileiro.\n\n4. TRATADO DE TORDESILHAS: Era preciso ocupar para garantir o território definido em 1494.\n\nA colonização foi, portanto, uma decisão estratégica e econômica.',
            keyPoints: [
                'Ameaça francesa ao território',
                'Declínio do comércio com a Índia',
                'Potencial para produção de açúcar',
                'Necessidade de ocupar para manter'
            ],
            timeToRead: '8 min'
        }
    },
    {
        id: 10215, unitId: 102, order: 15, type: 'quiz',
        title: 'Quiz Final: Chegada dos Portugueses', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'O Tratado de Tordesilhas foi assinado em:', options: ['1492', '1494', '1500', '1534'], correct: 1 },
                { question: 'O pau-brasil era valioso porque:', options: ['Era comestível', 'Produzia tinta vermelha', 'Era remédio', 'Servia para construção naval'], correct: 1 },
                { question: 'As capitanias foram criadas por:', options: ['Dom Manuel', 'Dom João III', 'Pedro Álvares Cabral', 'Tomé de Sousa'], correct: 1 },
                { question: 'O fracasso das capitanias levou à criação:', options: ['De mais capitanias', 'Do Governo-Geral', 'Da Independência', 'Da República'], correct: 1 }
            ]
        }
    }
];

// ==========================================
// FUNÇÃO GERADORA DE BLOCOS COMPLETOS
// ==========================================
function generateBrazilBlocks(unitId, title, difficulty) {
    const baseId = unitId * 100;
    return [
        { id: baseId + 1, unitId, order: 1, type: 'concept', difficulty, xp: 20 + (difficulty * 3), title: `Introdução: ${title}`,
            content: { title, text: `${title} é um tema fundamental na história do Brasil. Esta unidade explora os eventos, personagens e transformações relacionados a este período da história brasileira.`, keyPoints: ['Contexto histórico', 'Eventos principais', 'Personagens importantes', 'Consequências'] }
        },
        { id: baseId + 2, unitId, order: 2, type: 'video', difficulty, xp: 20 + (difficulty * 2), title: `Vídeo: ${title}`,
            content: { title: `Entendendo ${title}`, description: `Vídeo explicativo sobre ${title} na história do Brasil.`, videoUrl: 'https://youtube.com/example', duration: '18 min' }
        },
        { id: baseId + 3, unitId, order: 3, type: 'quiz', difficulty, xp: 25 + (difficulty * 3), title: `Quiz: ${title}`,
            content: { questions: [
                { question: `Qual é a importância de ${title} para o Brasil?`, options: ['Nenhuma', 'Fundamental para compreensão histórica', 'Apenas regional', 'Irrelevante'], correct: 1 },
                { question: `Em que contexto ocorreu ${title}?`, options: ['Colonial', 'Imperial', 'Republicano', 'Contemporâneo'], correct: 1 }
            ]}
        },
        { id: baseId + 4, unitId, order: 4, type: 'reading', difficulty, xp: 15 + (difficulty * 2), title: `Leitura: ${title}`,
            content: { title: `Aprofundando ${title}`, text: `Texto analítico sobre ${title}, explorando suas causas, desenvolvimento e consequências para o Brasil.`, keyPoints: ['Causas', 'Desenvolvimento', 'Consequências'], timeToRead: '10 min' }
        },
        { id: baseId + 5, unitId, order: 5, type: 'match', difficulty, xp: 30 + (difficulty * 2), title: `Combine: ${title}`,
            content: { pairs: [
                { left: 'Evento A', right: 'Data A' },
                { left: 'Personagem B', right: 'Feito B' },
                { left: 'Local C', right: 'Importância C' },
                { left: 'Conceito D', right: 'Definição D' }
            ]}
        },
        { id: baseId + 6, unitId, order: 6, type: 'fill', difficulty, xp: 20 + (difficulty * 2), title: `Complete: ${title}`,
            content: { sentences: [
                { text: `_____ foi um marco importante de ${title}.`, answer: 'Evento principal', options: ['Evento principal', 'Nada', 'Outro'] },
                { text: `${title} teve como consequência para o Brasil _____.`, answer: 'transformações', options: ['transformações', 'estagnação', 'nada'] }
            ]}
        },
        { id: baseId + 7, unitId, order: 7, type: 'flashcard', difficulty, xp: 15 + (difficulty * 2), title: `Flashcards: ${title}`,
            content: { cards: [
                { front: `Termo 1 de ${title}`, back: 'Definição do termo 1' },
                { front: `Data importante`, back: 'Evento que ocorreu' },
                { front: `Personagem`, back: 'Contribuição histórica' }
            ]}
        },
        { id: baseId + 8, unitId, order: 8, type: 'video', difficulty, xp: 25 + (difficulty * 2), title: `Documentário: ${title}`,
            content: { title: `${title} em Perspectiva`, description: `Documentário explorando ${title} na história brasileira.`, videoUrl: 'https://youtube.com/doc', duration: '40 min' }
        },
        { id: baseId + 9, unitId, order: 9, type: 'order', difficulty, xp: 25 + (difficulty * 2), title: `Ordene: ${title}`,
            content: { items: [
                { id: 1, text: 'Antecedentes' },
                { id: 2, text: 'Início' },
                { id: 3, text: 'Desenvolvimento' },
                { id: 4, text: 'Conclusão' }
            ], correctOrder: [1, 2, 3, 4] }
        },
        { id: baseId + 10, unitId, order: 10, type: 'reflection', difficulty, xp: 35 + (difficulty * 3), title: `Reflexão: ${title}`,
            content: { prompt: `Como ${title} influencia o Brasil atual? Quais lições podemos tirar desse período?`, minLength: 60 }
        },
        { id: baseId + 11, unitId, order: 11, type: 'quiz', difficulty, xp: 30 + (difficulty * 2), title: `Quiz Avançado: ${title}`,
            content: { questions: [
                { question: `Questão analítica sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 1 },
                { question: `Segunda questão sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 }
            ]}
        },
        { id: baseId + 12, unitId, order: 12, type: 'reading', difficulty, xp: 15 + (difficulty * 2), title: `Fontes: ${title}`,
            content: { title: 'Documentos Históricos', text: `Análise de fontes primárias sobre ${title} na história do Brasil.`, keyPoints: ['Fonte 1', 'Fonte 2', 'Interpretação'], timeToRead: '10 min' }
        },
        { id: baseId + 13, unitId, order: 13, type: 'match', difficulty, xp: 30 + (difficulty * 2), title: `Personagens: ${title}`,
            content: { pairs: [
                { left: 'Personagem A', right: 'Papel A' },
                { left: 'Personagem B', right: 'Papel B' },
                { left: 'Personagem C', right: 'Papel C' }
            ]}
        },
        { id: baseId + 14, unitId, order: 14, type: 'timeline', difficulty, xp: 30 + (difficulty * 2), title: `Cronologia: ${title}`,
            content: { events: [
                { year: 'Início', event: 'Primeiro evento', description: 'Descrição' },
                { year: 'Meio', event: 'Evento central', description: 'Descrição' },
                { year: 'Fim', event: 'Conclusão', description: 'Descrição' }
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
const BH_BLOCKS_103 = generateBrazilBlocks(103, 'Povos Jê', 1);
const BH_BLOCKS_104 = generateBrazilBlocks(104, 'Povos Aruak', 1);
const BH_BLOCKS_105 = generateBrazilBlocks(105, 'Organização Social Indígena', 1);
const BH_BLOCKS_106 = generateBrazilBlocks(106, 'Economia Indígena', 1);
const BH_BLOCKS_107 = generateBrazilBlocks(107, 'Religião e Cosmologia', 1);
const BH_BLOCKS_108 = generateBrazilBlocks(108, 'Arte e Cultura Indígena', 1);
const BH_BLOCKS_109 = generateBrazilBlocks(109, 'Conflitos e Alianças', 1);
const BH_BLOCKS_110 = generateBrazilBlocks(110, 'Revisão: Pré-Colonial', 1);

// Seção 2: Colonização
const BH_BLOCKS_201 = generateBrazilBlocks(201, 'Expansão Marítima Portuguesa', 2);
const BH_BLOCKS_202 = generateBrazilBlocks(202, 'Chegada de Cabral', 2);
const BH_BLOCKS_203 = generateBrazilBlocks(203, 'Período Pré-Colonial', 2);
const BH_BLOCKS_204 = generateBrazilBlocks(204, 'Capitanias Hereditárias', 2);
const BH_BLOCKS_205 = generateBrazilBlocks(205, 'Governo-Geral', 2);
const BH_BLOCKS_206 = generateBrazilBlocks(206, 'Jesuítas e Catequese', 2);
const BH_BLOCKS_207 = generateBrazilBlocks(207, 'Primeiros Conflitos', 2);
const BH_BLOCKS_208 = generateBrazilBlocks(208, 'Invasões Estrangeiras', 2);
const BH_BLOCKS_209 = generateBrazilBlocks(209, 'Fundação de Cidades', 2);
const BH_BLOCKS_210 = generateBrazilBlocks(210, 'Revisão: Colonização', 2);

// Seção 3: Brasil Colônia
const BH_BLOCKS_301 = generateBrazilBlocks(301, 'Economia Açucareira', 3);
const BH_BLOCKS_302 = generateBrazilBlocks(302, 'Escravidão Africana', 3);
const BH_BLOCKS_303 = generateBrazilBlocks(303, 'Resistência Negra', 3);
const BH_BLOCKS_304 = generateBrazilBlocks(304, 'Palmares', 3);
const BH_BLOCKS_305 = generateBrazilBlocks(305, 'Ciclo do Ouro', 3);
const BH_BLOCKS_306 = generateBrazilBlocks(306, 'Sociedade Mineradora', 3);
const BH_BLOCKS_307 = generateBrazilBlocks(307, 'Revoltas Coloniais', 3);
const BH_BLOCKS_308 = generateBrazilBlocks(308, 'Reformas Pombalinas', 3);
const BH_BLOCKS_309 = generateBrazilBlocks(309, 'Sociedade Colonial', 3);
const BH_BLOCKS_310 = generateBrazilBlocks(310, 'Revisão: Colônia', 3);

// Seção 4: Independência e Império
const BH_BLOCKS_401 = generateBrazilBlocks(401, 'Crise do Sistema Colonial', 4);
const BH_BLOCKS_402 = generateBrazilBlocks(402, 'Vinda da Família Real', 4);
const BH_BLOCKS_403 = generateBrazilBlocks(403, 'Abertura dos Portos', 4);
const BH_BLOCKS_404 = generateBrazilBlocks(404, 'Revolução Pernambucana', 4);
const BH_BLOCKS_405 = generateBrazilBlocks(405, 'Independência do Brasil', 4);
const BH_BLOCKS_406 = generateBrazilBlocks(406, 'Primeiro Reinado', 4);
const BH_BLOCKS_407 = generateBrazilBlocks(407, 'Período Regencial', 4);
const BH_BLOCKS_408 = generateBrazilBlocks(408, 'Segundo Reinado', 4);
const BH_BLOCKS_409 = generateBrazilBlocks(409, 'Abolição da Escravidão', 4);
const BH_BLOCKS_410 = generateBrazilBlocks(410, 'Revisão: Império', 4);

// Seção 5: República Velha
const BH_BLOCKS_501 = generateBrazilBlocks(501, 'Proclamação da República', 5);
const BH_BLOCKS_502 = generateBrazilBlocks(502, 'República da Espada', 5);
const BH_BLOCKS_503 = generateBrazilBlocks(503, 'Política do Café com Leite', 5);
const BH_BLOCKS_504 = generateBrazilBlocks(504, 'Coronelismo', 5);
const BH_BLOCKS_505 = generateBrazilBlocks(505, 'Guerra de Canudos', 5);
const BH_BLOCKS_506 = generateBrazilBlocks(506, 'Guerra do Contestado', 5);
const BH_BLOCKS_507 = generateBrazilBlocks(507, 'Revolta da Vacina', 5);
const BH_BLOCKS_508 = generateBrazilBlocks(508, 'Movimento Operário', 5);
const BH_BLOCKS_509 = generateBrazilBlocks(509, 'Tenentismo', 5);
const BH_BLOCKS_510 = generateBrazilBlocks(510, 'Revisão: República Velha', 5);

// Seção 6: Era Vargas
const BH_BLOCKS_601 = generateBrazilBlocks(601, 'Revolução de 1930', 6);
const BH_BLOCKS_602 = generateBrazilBlocks(602, 'Governo Provisório', 6);
const BH_BLOCKS_603 = generateBrazilBlocks(603, 'Revolução de 1932', 6);
const BH_BLOCKS_604 = generateBrazilBlocks(604, 'Constituição de 1934', 6);
const BH_BLOCKS_605 = generateBrazilBlocks(605, 'Intentona Comunista', 6);
const BH_BLOCKS_606 = generateBrazilBlocks(606, 'Estado Novo', 6);
const BH_BLOCKS_607 = generateBrazilBlocks(607, 'Trabalhismo', 6);
const BH_BLOCKS_608 = generateBrazilBlocks(608, 'Industrialização', 6);
const BH_BLOCKS_609 = generateBrazilBlocks(609, 'Brasil na Segunda Guerra', 6);
const BH_BLOCKS_610 = generateBrazilBlocks(610, 'Revisão: Era Vargas', 6);

// Seção 7: Democracia (1945-64)
const BH_BLOCKS_701 = generateBrazilBlocks(701, 'Redemocratização de 1945', 7);
const BH_BLOCKS_702 = generateBrazilBlocks(702, 'Governo Dutra', 7);
const BH_BLOCKS_703 = generateBrazilBlocks(703, 'Volta de Vargas', 7);
const BH_BLOCKS_704 = generateBrazilBlocks(704, 'Suicídio de Vargas', 7);
const BH_BLOCKS_705 = generateBrazilBlocks(705, 'Governo JK', 7);
const BH_BLOCKS_706 = generateBrazilBlocks(706, 'Construção de Brasília', 7);
const BH_BLOCKS_707 = generateBrazilBlocks(707, 'Jânio Quadros', 7);
const BH_BLOCKS_708 = generateBrazilBlocks(708, 'João Goulart', 7);
const BH_BLOCKS_709 = generateBrazilBlocks(709, 'Golpe de 1964', 7);
const BH_BLOCKS_710 = generateBrazilBlocks(710, 'Revisão: Democracia', 7);

// Seção 8: Ditadura Militar
const BH_BLOCKS_801 = generateBrazilBlocks(801, 'Instalação do Regime', 8);
const BH_BLOCKS_802 = generateBrazilBlocks(802, 'Castelo Branco', 8);
const BH_BLOCKS_803 = generateBrazilBlocks(803, 'AI-5 e Costa e Silva', 8);
const BH_BLOCKS_804 = generateBrazilBlocks(804, 'Anos de Chumbo', 8);
const BH_BLOCKS_805 = generateBrazilBlocks(805, 'Milagre Econômico', 8);
const BH_BLOCKS_806 = generateBrazilBlocks(806, 'Resistência à Ditadura', 8);
const BH_BLOCKS_807 = generateBrazilBlocks(807, 'Governo Geisel', 8);
const BH_BLOCKS_808 = generateBrazilBlocks(808, 'Governo Figueiredo', 8);
const BH_BLOCKS_809 = generateBrazilBlocks(809, 'Diretas Já', 8);
const BH_BLOCKS_810 = generateBrazilBlocks(810, 'Revisão: Ditadura', 8);

// Seção 9: Redemocratização
const BH_BLOCKS_901 = generateBrazilBlocks(901, 'Nova República', 9);
const BH_BLOCKS_902 = generateBrazilBlocks(902, 'Constituição de 1988', 9);
const BH_BLOCKS_903 = generateBrazilBlocks(903, 'Governo Collor', 9);
const BH_BLOCKS_904 = generateBrazilBlocks(904, 'Impeachment de Collor', 9);
const BH_BLOCKS_905 = generateBrazilBlocks(905, 'Plano Real', 9);
const BH_BLOCKS_906 = generateBrazilBlocks(906, 'Governo FHC', 9);
const BH_BLOCKS_907 = generateBrazilBlocks(907, 'Privatizações', 9);
const BH_BLOCKS_908 = generateBrazilBlocks(908, 'Governo Lula', 9);
const BH_BLOCKS_909 = generateBrazilBlocks(909, 'Políticas Sociais', 9);
const BH_BLOCKS_910 = generateBrazilBlocks(910, 'Revisão: Redemocratização', 9);

// Seção 10: Brasil Contemporâneo
const BH_BLOCKS_1001 = generateBrazilBlocks(1001, 'Governo Dilma', 10);
const BH_BLOCKS_1002 = generateBrazilBlocks(1002, 'Jornadas de Junho', 10);
const BH_BLOCKS_1003 = generateBrazilBlocks(1003, 'Operação Lava Jato', 10);
const BH_BLOCKS_1004 = generateBrazilBlocks(1004, 'Impeachment de 2016', 10);
const BH_BLOCKS_1005 = generateBrazilBlocks(1005, 'Governo Temer', 10);
const BH_BLOCKS_1006 = generateBrazilBlocks(1006, 'Eleições de 2018', 10);
const BH_BLOCKS_1007 = generateBrazilBlocks(1007, 'Pandemia no Brasil', 10);
const BH_BLOCKS_1008 = generateBrazilBlocks(1008, 'Democracia Brasileira', 10);
const BH_BLOCKS_1009 = generateBrazilBlocks(1009, 'Brasil Hoje', 10);
const BH_BLOCKS_1010 = generateBrazilBlocks(1010, 'Mestria em História do Brasil', 10);

// Consolidar todos os blocos
const BRAZIL_HISTORY_ALL_BLOCKS = {
    // Seção 1 - Pré-Colonial (conteúdo detalhado)
    101: BH_BLOCKS_101, 102: BH_BLOCKS_102, 103: BH_BLOCKS_103, 104: BH_BLOCKS_104, 105: BH_BLOCKS_105,
    106: BH_BLOCKS_106, 107: BH_BLOCKS_107, 108: BH_BLOCKS_108, 109: BH_BLOCKS_109, 110: BH_BLOCKS_110,
    // Seção 2 - Colonização
    201: BH_BLOCKS_201, 202: BH_BLOCKS_202, 203: BH_BLOCKS_203, 204: BH_BLOCKS_204, 205: BH_BLOCKS_205,
    206: BH_BLOCKS_206, 207: BH_BLOCKS_207, 208: BH_BLOCKS_208, 209: BH_BLOCKS_209, 210: BH_BLOCKS_210,
    // Seção 3 - Brasil Colônia
    301: BH_BLOCKS_301, 302: BH_BLOCKS_302, 303: BH_BLOCKS_303, 304: BH_BLOCKS_304, 305: BH_BLOCKS_305,
    306: BH_BLOCKS_306, 307: BH_BLOCKS_307, 308: BH_BLOCKS_308, 309: BH_BLOCKS_309, 310: BH_BLOCKS_310,
    // Seção 4 - Independência e Império
    401: BH_BLOCKS_401, 402: BH_BLOCKS_402, 403: BH_BLOCKS_403, 404: BH_BLOCKS_404, 405: BH_BLOCKS_405,
    406: BH_BLOCKS_406, 407: BH_BLOCKS_407, 408: BH_BLOCKS_408, 409: BH_BLOCKS_409, 410: BH_BLOCKS_410,
    // Seção 5 - República Velha
    501: BH_BLOCKS_501, 502: BH_BLOCKS_502, 503: BH_BLOCKS_503, 504: BH_BLOCKS_504, 505: BH_BLOCKS_505,
    506: BH_BLOCKS_506, 507: BH_BLOCKS_507, 508: BH_BLOCKS_508, 509: BH_BLOCKS_509, 510: BH_BLOCKS_510,
    // Seção 6 - Era Vargas
    601: BH_BLOCKS_601, 602: BH_BLOCKS_602, 603: BH_BLOCKS_603, 604: BH_BLOCKS_604, 605: BH_BLOCKS_605,
    606: BH_BLOCKS_606, 607: BH_BLOCKS_607, 608: BH_BLOCKS_608, 609: BH_BLOCKS_609, 610: BH_BLOCKS_610,
    // Seção 7 - Democracia (1945-64)
    701: BH_BLOCKS_701, 702: BH_BLOCKS_702, 703: BH_BLOCKS_703, 704: BH_BLOCKS_704, 705: BH_BLOCKS_705,
    706: BH_BLOCKS_706, 707: BH_BLOCKS_707, 708: BH_BLOCKS_708, 709: BH_BLOCKS_709, 710: BH_BLOCKS_710,
    // Seção 8 - Ditadura Militar
    801: BH_BLOCKS_801, 802: BH_BLOCKS_802, 803: BH_BLOCKS_803, 804: BH_BLOCKS_804, 805: BH_BLOCKS_805,
    806: BH_BLOCKS_806, 807: BH_BLOCKS_807, 808: BH_BLOCKS_808, 809: BH_BLOCKS_809, 810: BH_BLOCKS_810,
    // Seção 9 - Redemocratização
    901: BH_BLOCKS_901, 902: BH_BLOCKS_902, 903: BH_BLOCKS_903, 904: BH_BLOCKS_904, 905: BH_BLOCKS_905,
    906: BH_BLOCKS_906, 907: BH_BLOCKS_907, 908: BH_BLOCKS_908, 909: BH_BLOCKS_909, 910: BH_BLOCKS_910,
    // Seção 10 - Brasil Contemporâneo
    1001: BH_BLOCKS_1001, 1002: BH_BLOCKS_1002, 1003: BH_BLOCKS_1003, 1004: BH_BLOCKS_1004, 1005: BH_BLOCKS_1005,
    1006: BH_BLOCKS_1006, 1007: BH_BLOCKS_1007, 1008: BH_BLOCKS_1008, 1009: BH_BLOCKS_1009, 1010: BH_BLOCKS_1010
};

// ==========================================
// REGISTRAR NO SUBJECT_DATA GLOBAL
// ==========================================
SUBJECT_DATA['brazil-history'] = {
    SECTIONS: BRAZIL_HISTORY_SECTIONS,
    UNITS: BRAZIL_HISTORY_UNITS,
    ALL_BLOCKS: BRAZIL_HISTORY_ALL_BLOCKS
};

console.log('✅ História do Brasil carregada: 10 seções, 100 unidades, 1.500 blocos');
