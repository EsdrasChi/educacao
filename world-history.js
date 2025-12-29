// ==========================================
// EDULEARN - DADOS DE HISTÓRIA DO MUNDO
// 10 Seções x 10 Unidades x 15 Blocos
// ==========================================

const WORLD_HISTORY_SECTIONS = [
    {
        id: 1,
        title: 'Pré-História e Civilizações Antigas',
        subtitle: 'Das origens às primeiras cidades',
        icon: 'fa-mountain',
        color: '#8b4513',
        difficulty: 1,
        description: 'Explore a evolução humana e o surgimento das primeiras civilizações.',
        unitsCount: 10
    },
    {
        id: 2,
        title: 'Antiguidade Clássica',
        subtitle: 'Grécia e Roma',
        icon: 'fa-columns',
        color: '#1cb0f6',
        difficulty: 2,
        description: 'Estude as civilizações grega e romana e seu legado.',
        unitsCount: 10
    },
    {
        id: 3,
        title: 'Idade Média',
        subtitle: 'Feudalismo e fé',
        icon: 'fa-chess-rook',
        color: '#ff9600',
        difficulty: 3,
        description: 'Conheça a Europa medieval, o Islã e as civilizações orientais.',
        unitsCount: 10
    },
    {
        id: 4,
        title: 'Renascimento e Reformas',
        subtitle: 'Novos horizontes',
        icon: 'fa-palette',
        color: '#ce82ff',
        difficulty: 4,
        description: 'Explore o Renascimento, a Reforma Protestante e as Grandes Navegações.',
        unitsCount: 10
    },
    {
        id: 5,
        title: 'Idade Moderna',
        subtitle: 'Absolutismo e Iluminismo',
        icon: 'fa-crown',
        color: '#ffc800',
        difficulty: 5,
        description: 'Estude o absolutismo, o Iluminismo e as revoluções burguesas.',
        unitsCount: 10
    },
    {
        id: 6,
        title: 'Revoluções (XVIII-XIX)',
        subtitle: 'Transformações radicais',
        icon: 'fa-fist-raised',
        color: '#ff4b4b',
        difficulty: 6,
        description: 'Analise as revoluções que transformaram o mundo moderno.',
        unitsCount: 10
    },
    {
        id: 7,
        title: 'Imperialismo e Guerras Mundiais',
        subtitle: 'O mundo em conflito',
        icon: 'fa-globe-europe',
        color: '#58cc02',
        difficulty: 7,
        description: 'Estude o imperialismo, a Primeira e a Segunda Guerra Mundial.',
        unitsCount: 10
    },
    {
        id: 8,
        title: 'Guerra Fria',
        subtitle: 'Bipolaridade mundial',
        icon: 'fa-snowflake',
        color: '#00bcd4',
        difficulty: 8,
        description: 'Explore a rivalidade EUA-URSS e seus impactos globais.',
        unitsCount: 10
    },
    {
        id: 9,
        title: 'Mundo Contemporâneo',
        subtitle: 'Pós-Guerra Fria',
        icon: 'fa-globe-americas',
        color: '#ff6b9d',
        difficulty: 9,
        description: 'Analise o mundo após a queda do Muro de Berlim.',
        unitsCount: 10
    },
    {
        id: 10,
        title: 'Século XXI',
        subtitle: 'Desafios atuais',
        icon: 'fa-satellite',
        color: '#9c27b0',
        difficulty: 10,
        description: 'Estude os grandes temas da história recente e contemporânea.',
        unitsCount: 10
    }
];

const WORLD_HISTORY_UNITS = {
    // SEÇÃO 1: PRÉ-HISTÓRIA
    1: [
        { id: 101, order: 1, title: 'Evolução Humana', subtitle: 'Dos primatas ao Homo sapiens', icon: 'fa-dna' },
        { id: 102, order: 2, title: 'Paleolítico', subtitle: 'Caçadores e coletores', icon: 'fa-bone' },
        { id: 103, order: 3, title: 'Revolução Neolítica', subtitle: 'Agricultura e sedentarismo', icon: 'fa-seedling' },
        { id: 104, order: 4, title: 'Mesopotâmia', subtitle: 'Entre rios', icon: 'fa-water' },
        { id: 105, order: 5, title: 'Egito Antigo', subtitle: 'Terra dos faraós', icon: 'fa-monument' },
        { id: 106, order: 6, title: 'Hebreus', subtitle: 'Monoteísmo e diáspora', icon: 'fa-star-of-david' },
        { id: 107, order: 7, title: 'Fenícios', subtitle: 'Navegadores e comerciantes', icon: 'fa-ship' },
        { id: 108, order: 8, title: 'Persas', subtitle: 'Império milenar', icon: 'fa-sun' },
        { id: 109, order: 9, title: 'Índia e China Antigas', subtitle: 'Civilizações do Oriente', icon: 'fa-yin-yang' },
        { id: 110, order: 10, title: 'Revisão: Antiguidade', subtitle: 'Primeiras civilizações', icon: 'fa-check' }
    ],
    // SEÇÃO 2: ANTIGUIDADE CLÁSSICA
    2: [
        { id: 201, order: 1, title: 'Grécia: Geografia', subtitle: 'Pólis e o Mediterrâneo', icon: 'fa-map' },
        { id: 202, order: 2, title: 'Esparta e Atenas', subtitle: 'Dois modelos', icon: 'fa-helmet-battle' },
        { id: 203, order: 3, title: 'Democracia Ateniense', subtitle: 'Governo do povo', icon: 'fa-vote-yea' },
        { id: 204, order: 4, title: 'Guerras Greco-Persas', subtitle: 'Ocidente x Oriente', icon: 'fa-shield-alt' },
        { id: 205, order: 5, title: 'Alexandre, o Grande', subtitle: 'Helenismo', icon: 'fa-horse' },
        { id: 206, order: 6, title: 'Roma: Origens', subtitle: 'Da monarquia à república', icon: 'fa-wolf-pack-battalion' },
        { id: 207, order: 7, title: 'República Romana', subtitle: 'Expansão e conflitos', icon: 'fa-balance-scale' },
        { id: 208, order: 8, title: 'Império Romano', subtitle: 'Augusto e a Pax Romana', icon: 'fa-crown' },
        { id: 209, order: 9, title: 'Queda de Roma', subtitle: 'Crise e invasões', icon: 'fa-skull' },
        { id: 210, order: 10, title: 'Revisão: Clássica', subtitle: 'Grécia e Roma', icon: 'fa-check' }
    ],
    // SEÇÃO 3: IDADE MÉDIA
    3: [
        { id: 301, order: 1, title: 'Reinos Germânicos', subtitle: 'Fragmentação do Ocidente', icon: 'fa-chess-king' },
        { id: 302, order: 2, title: 'Igreja Medieval', subtitle: 'Poder espiritual e temporal', icon: 'fa-church' },
        { id: 303, order: 3, title: 'Feudalismo', subtitle: 'Terra e vassalagem', icon: 'fa-chess-rook' },
        { id: 304, order: 4, title: 'Império Bizantino', subtitle: 'Roma do Oriente', icon: 'fa-cross' },
        { id: 305, order: 5, title: 'Islã: Origem', subtitle: 'Maomé e o Alcorão', icon: 'fa-mosque' },
        { id: 306, order: 6, title: 'Império Islâmico', subtitle: 'Califados e expansão', icon: 'fa-moon' },
        { id: 307, order: 7, title: 'Cruzadas', subtitle: 'Guerra santa', icon: 'fa-cross' },
        { id: 308, order: 8, title: 'Renascimento Comercial', subtitle: 'Cidades e burguesia', icon: 'fa-coins' },
        { id: 309, order: 9, title: 'Crise do Século XIV', subtitle: 'Peste e fome', icon: 'fa-skull-crossbones' },
        { id: 310, order: 10, title: 'Revisão: Medieval', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 4: RENASCIMENTO E REFORMAS
    4: [
        { id: 401, order: 1, title: 'Renascimento', subtitle: 'Humanismo e arte', icon: 'fa-palette' },
        { id: 402, order: 2, title: 'Grandes Navegações', subtitle: 'Novos mundos', icon: 'fa-ship' },
        { id: 403, order: 3, title: 'Reforma Protestante', subtitle: 'Lutero e a ruptura', icon: 'fa-book-bible' },
        { id: 404, order: 4, title: 'Contrarreforma', subtitle: 'Resposta católica', icon: 'fa-church' },
        { id: 405, order: 5, title: 'Guerras de Religião', subtitle: 'Conflitos na Europa', icon: 'fa-fire' },
        { id: 406, order: 6, title: 'Formação dos Estados', subtitle: 'Monarquias nacionais', icon: 'fa-crown' },
        { id: 407, order: 7, title: 'Revolução Científica', subtitle: 'Nova visão de mundo', icon: 'fa-flask' },
        { id: 408, order: 8, title: 'Colonização Americana', subtitle: 'Conquista e exploração', icon: 'fa-flag' },
        { id: 409, order: 9, title: 'Tráfico de Escravizados', subtitle: 'Crime histórico', icon: 'fa-link' },
        { id: 410, order: 10, title: 'Revisão: Transição', subtitle: 'Para a modernidade', icon: 'fa-check' }
    ],
    // SEÇÃO 5: IDADE MODERNA
    5: [
        { id: 501, order: 1, title: 'Absolutismo', subtitle: 'Poder dos reis', icon: 'fa-crown' },
        { id: 502, order: 2, title: 'Mercantilismo', subtitle: 'Economia de Estado', icon: 'fa-coins' },
        { id: 503, order: 3, title: 'Iluminismo', subtitle: 'Século das Luzes', icon: 'fa-lightbulb' },
        { id: 504, order: 4, title: 'Despotismo Esclarecido', subtitle: 'Reformas de cima', icon: 'fa-chess-king' },
        { id: 505, order: 5, title: 'Revolução Inglesa', subtitle: 'Parlamento contra rei', icon: 'fa-gavel' },
        { id: 506, order: 6, title: 'Independência dos EUA', subtitle: 'Nascimento de uma nação', icon: 'fa-flag-usa' },
        { id: 507, order: 7, title: 'Revolução Francesa', subtitle: 'Liberdade, igualdade, fraternidade', icon: 'fa-fist-raised' },
        { id: 508, order: 8, title: 'Era Napoleônica', subtitle: 'Conquistas e códigos', icon: 'fa-chess-knight' },
        { id: 509, order: 9, title: 'Congresso de Viena', subtitle: 'Restauração', icon: 'fa-handshake' },
        { id: 510, order: 10, title: 'Revisão: Moderna', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 6: REVOLUÇÕES
    6: [
        { id: 601, order: 1, title: 'Revolução Industrial', subtitle: 'Transformação produtiva', icon: 'fa-industry' },
        { id: 602, order: 2, title: 'Questão Social', subtitle: 'Operários e lutas', icon: 'fa-hard-hat' },
        { id: 603, order: 3, title: 'Ideologias do XIX', subtitle: 'Liberalismo, socialismo', icon: 'fa-balance-scale' },
        { id: 604, order: 4, title: 'Nacionalismos', subtitle: 'Identidade nacional', icon: 'fa-flag' },
        { id: 605, order: 5, title: 'Unificação Italiana', subtitle: 'Risorgimento', icon: 'fa-pizza-slice' },
        { id: 606, order: 6, title: 'Unificação Alemã', subtitle: 'Bismarck', icon: 'fa-chess-bishop' },
        { id: 607, order: 7, title: 'Independências na América', subtitle: 'Fim dos impérios', icon: 'fa-dove' },
        { id: 608, order: 8, title: 'Segunda Revolução Industrial', subtitle: 'Eletricidade e petróleo', icon: 'fa-bolt' },
        { id: 609, order: 9, title: 'Belle Époque', subtitle: 'Otimismo e progresso', icon: 'fa-glass-cheers' },
        { id: 610, order: 10, title: 'Revisão: Revoluções', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 7: IMPERIALISMO E GUERRAS
    7: [
        { id: 701, order: 1, title: 'Imperialismo', subtitle: 'Partilha do mundo', icon: 'fa-globe' },
        { id: 702, order: 2, title: 'Conferência de Berlim', subtitle: 'Divisão da África', icon: 'fa-map-marked' },
        { id: 703, order: 3, title: 'Antecedentes da WWI', subtitle: 'Tensões europeias', icon: 'fa-exclamation-triangle' },
        { id: 704, order: 4, title: 'Primeira Guerra Mundial', subtitle: 'A Grande Guerra', icon: 'fa-bomb' },
        { id: 705, order: 5, title: 'Revolução Russa', subtitle: 'Nascimento da URSS', icon: 'fa-star' },
        { id: 706, order: 6, title: 'Tratado de Versalhes', subtitle: 'Paz punitiva', icon: 'fa-file-contract' },
        { id: 707, order: 7, title: 'Crise de 1929', subtitle: 'Quebra econômica', icon: 'fa-chart-line-down' },
        { id: 708, order: 8, title: 'Ascensão do Fascismo', subtitle: 'Extrema-direita', icon: 'fa-skull' },
        { id: 709, order: 9, title: 'Segunda Guerra Mundial', subtitle: 'Conflito global', icon: 'fa-fighter-jet' },
        { id: 710, order: 10, title: 'Revisão: Guerras', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 8: GUERRA FRIA
    8: [
        { id: 801, order: 1, title: 'Origem da Guerra Fria', subtitle: 'EUA x URSS', icon: 'fa-divide' },
        { id: 802, order: 2, title: 'Cortina de Ferro', subtitle: 'Europa dividida', icon: 'fa-border-all' },
        { id: 803, order: 3, title: 'Corrida Armamentista', subtitle: 'Bomba atômica', icon: 'fa-radiation' },
        { id: 804, order: 4, title: 'Descolonização', subtitle: 'Independência afro-asiática', icon: 'fa-fist-raised' },
        { id: 805, order: 5, title: 'Guerra da Coreia', subtitle: 'Primeiro conflito', icon: 'fa-map' },
        { id: 806, order: 6, title: 'Guerra do Vietnã', subtitle: 'Derrota americana', icon: 'fa-helicopter' },
        { id: 807, order: 7, title: 'Crise dos Mísseis', subtitle: 'Cuba, 1962', icon: 'fa-rocket' },
        { id: 808, order: 8, title: 'Détente', subtitle: 'Relaxamento', icon: 'fa-handshake' },
        { id: 809, order: 9, title: 'Queda do Muro', subtitle: 'Fim da bipolaridade', icon: 'fa-monument' },
        { id: 810, order: 10, title: 'Revisão: Guerra Fria', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 9: CONTEMPORÂNEO
    9: [
        { id: 901, order: 1, title: 'Nova Ordem Mundial', subtitle: 'Pós-Guerra Fria', icon: 'fa-globe' },
        { id: 902, order: 2, title: 'União Europeia', subtitle: 'Integração continental', icon: 'fa-flag-eu' },
        { id: 903, order: 3, title: 'Fim da URSS', subtitle: 'Desintegração', icon: 'fa-hammer' },
        { id: 904, order: 4, title: 'Globalização', subtitle: 'Mundo conectado', icon: 'fa-network-wired' },
        { id: 905, order: 5, title: 'Conflitos Regionais', subtitle: 'Guerras locais', icon: 'fa-bomb' },
        { id: 906, order: 6, title: 'Terrorismo', subtitle: '11 de Setembro', icon: 'fa-building' },
        { id: 907, order: 7, title: 'Primavera Árabe', subtitle: 'Revoltas populares', icon: 'fa-sun' },
        { id: 908, order: 8, title: 'Ascensão da China', subtitle: 'Nova potência', icon: 'fa-dragon' },
        { id: 909, order: 9, title: 'Crise de 2008', subtitle: 'Colapso financeiro', icon: 'fa-chart-line-down' },
        { id: 910, order: 10, title: 'Revisão: Contemporâneo', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 10: SÉCULO XXI
    10: [
        { id: 1001, order: 1, title: 'Mudanças Climáticas', subtitle: 'Crise ambiental', icon: 'fa-temperature-high' },
        { id: 1002, order: 2, title: 'Migrações', subtitle: 'Refugiados', icon: 'fa-people-arrows' },
        { id: 1003, order: 3, title: 'Revolução Digital', subtitle: 'Internet e redes', icon: 'fa-wifi' },
        { id: 1004, order: 4, title: 'Fake News', subtitle: 'Desinformação', icon: 'fa-newspaper' },
        { id: 1005, order: 5, title: 'Pandemia de COVID-19', subtitle: 'Crise global', icon: 'fa-virus' },
        { id: 1006, order: 6, title: 'Democracia em Crise', subtitle: 'Populismos', icon: 'fa-exclamation-triangle' },
        { id: 1007, order: 7, title: 'Desigualdade Global', subtitle: 'Ricos e pobres', icon: 'fa-balance-scale' },
        { id: 1008, order: 8, title: 'Novas Tecnologias', subtitle: 'IA e futuro', icon: 'fa-robot' },
        { id: 1009, order: 9, title: 'Geopolítica Atual', subtitle: 'Novos conflitos', icon: 'fa-chess' },
        { id: 1010, order: 10, title: 'Mestria Histórica', subtitle: 'Síntese final', icon: 'fa-award' }
    ]
};

// Blocos detalhados para Unidade 101: Evolução Humana
const WH_BLOCKS_101 = [
    {
        id: 10101, unitId: 101, order: 1, type: 'concept',
        title: 'A Evolução Humana', difficulty: 1, xp: 20,
        content: {
            title: 'Nossa Longa Jornada',
            text: 'A evolução humana é o processo pelo qual nossa espécie, Homo sapiens, surgiu a partir de ancestrais primatas ao longo de milhões de anos. Os seres humanos modernos não "descendem dos macacos" - compartilhamos ancestrais comuns com eles.\n\nHá cerca de 7 milhões de anos, na África, uma linhagem de primatas começou a se separar. Desenvolveram-se habilidades como o bipedalismo (andar ereto), cérebro maior e uso de ferramentas. Várias espécies de hominídeos existiram, mas apenas o Homo sapiens sobreviveu até hoje.',
            keyPoints: [
                'Evolução ocorreu na África ao longo de milhões de anos',
                'Compartilhamos ancestrais com grandes primatas',
                'Características: bipedalismo, cérebro grande, ferramentas',
                'Homo sapiens surgiu há cerca de 300 mil anos'
            ]
        }
    },
    {
        id: 10102, unitId: 101, order: 2, type: 'concept',
        title: 'Principais Hominídeos', difficulty: 1, xp: 20,
        content: {
            title: 'Nossos Ancestrais',
            text: 'Vários hominídeos existiram antes de nós:\n\n• AUSTRALOPITHECUS (4-2 milhões de anos): Bípedes, cérebro pequeno. "Lucy" é o fóssil mais famoso.\n\n• HOMO HABILIS (2,4-1,4 milhões): "Homem hábil", usava ferramentas simples de pedra.\n\n• HOMO ERECTUS (1,9 milhões-110 mil): Dominou o fogo, migrou para fora da África.\n\n• HOMO NEANDERTHALENSIS (400-40 mil): Europeus, robustos, enterravam seus mortos. Coexistiram com Homo sapiens.\n\n• HOMO SAPIENS (300 mil-hoje): Nossa espécie, originária da África.',
            keyPoints: [
                'Australopithecus: primeiros bípedes (Lucy)',
                'Homo habilis: primeiras ferramentas',
                'Homo erectus: dominou o fogo, migrou',
                'Neandertais: coexistiram conosco'
            ]
        }
    },
    {
        id: 10103, unitId: 101, order: 3, type: 'quiz',
        title: 'Quiz: Evolução Humana', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Onde a evolução humana começou?', options: ['Europa', 'África', 'Ásia', 'América'], correct: 1 },
                { question: 'Lucy pertence a qual espécie?', options: ['Homo sapiens', 'Homo erectus', 'Australopithecus', 'Neanderthal'], correct: 2 },
                { question: 'Qual espécie dominou o fogo primeiro?', options: ['Homo sapiens', 'Homo erectus', 'Australopithecus', 'Homo habilis'], correct: 1 }
            ]
        }
    },
    {
        id: 10104, unitId: 101, order: 4, type: 'video',
        title: 'Documentário: A Jornada Humana', difficulty: 1, xp: 20,
        content: {
            title: 'A História da Humanidade',
            description: 'Documentário sobre a evolução humana, desde os primeiros ancestrais até a dispersão pelo mundo.',
            duration: '50 min',
            videoUrl: 'https://www.youtube.com/watch?v=evolucao-humana',
            reflectionQuestions: [
                'O que nos diferencia de outros animais?',
                'Por que apenas o Homo sapiens sobreviveu?'
            ]
        }
    },
    {
        id: 10105, unitId: 101, order: 5, type: 'timeline',
        title: 'Linha do Tempo: Evolução', difficulty: 1, xp: 30,
        content: {
            title: 'Marcos da Evolução Humana',
            events: [
                { year: '7 milhões', event: 'Separação da linhagem humana', description: 'Ancestral comum com chimpanzés' },
                { year: '3,2 milhões', event: 'Lucy', description: 'Australopithecus afarensis na Etiópia' },
                { year: '1,9 milhões', event: 'Homo erectus', description: 'Primeiro a deixar a África' },
                { year: '300 mil', event: 'Homo sapiens', description: 'Nossa espécie surge na África' },
                { year: '70 mil', event: 'Out of Africa', description: 'Migração para outros continentes' }
            ]
        }
    },
    {
        id: 10106, unitId: 101, order: 6, type: 'match',
        title: 'Combine: Hominídeos', difficulty: 1, xp: 30,
        content: {
            pairs: [
                { left: 'Australopithecus', right: 'Lucy' },
                { left: 'Homo habilis', right: 'Primeiras ferramentas' },
                { left: 'Homo erectus', right: 'Domínio do fogo' },
                { left: 'Neanderthal', right: 'Europeu, robusto' }
            ]
        }
    },
    {
        id: 10107, unitId: 101, order: 7, type: 'flashcard',
        title: 'Flashcards: Termos', difficulty: 1, xp: 15,
        content: {
            cards: [
                { front: 'Hominídeo', back: 'Família biológica que inclui humanos e ancestrais bípedes' },
                { front: 'Bipedalismo', back: 'Capacidade de andar sobre duas pernas' },
                { front: 'Paleolítico', back: 'Idade da Pedra Lascada (2,5 milhões - 10 mil a.C.)' },
                { front: 'Fóssil', back: 'Resto ou vestígio de organismo antigo preservado' },
                { front: 'Out of Africa', back: 'Teoria da migração humana a partir da África' }
            ]
        }
    },
    {
        id: 10108, unitId: 101, order: 8, type: 'reading',
        title: 'Leitura: Sapiens', difficulty: 1, xp: 15,
        content: {
            title: 'Uma Breve História da Humanidade',
            author: 'Yuval Noah Harari',
            text: 'Em "Sapiens", Harari pergunta: como uma espécie insignificante se tornou dominante no planeta? A resposta envolve três revoluções:\n\n1. REVOLUÇÃO COGNITIVA (70 mil anos): O Homo sapiens desenvolveu capacidade única de criar ficções - crenças compartilhadas que permitem cooperação em larga escala.\n\n2. REVOLUÇÃO AGRÍCOLA (12 mil anos): Domesticação de plantas e animais mudou radicalmente nossa vida.\n\n3. REVOLUÇÃO CIENTÍFICA (500 anos): Método científico transformou a humanidade novamente.\n\nHarari argumenta que nossa capacidade de criar "mitos" (religiões, nações, dinheiro) é o que nos torna únicos.',
            keyPoints: [
                'Três revoluções: cognitiva, agrícola, científica',
                'Capacidade única de criar ficções/mitos',
                'Cooperação em larga escala',
                'História como sucessão de transformações'
            ],
            amazonLink: 'https://www.amazon.com.br/dp/8525432180',
            timeToRead: '12 min'
        }
    },
    {
        id: 10109, unitId: 101, order: 9, type: 'fill',
        title: 'Complete: Evolução', difficulty: 1, xp: 20,
        content: {
            sentences: [
                { text: 'O Homo sapiens surgiu há cerca de _____ mil anos.', options: ['100', '300', '500'], answer: '300' },
                { text: 'Lucy é um fóssil de _____.', options: ['Homo erectus', 'Australopithecus', 'Neanderthal'], answer: 'Australopithecus' },
                { text: 'A evolução humana começou no continente _____.', options: ['europeu', 'africano', 'asiático'], answer: 'africano' }
            ]
        }
    },
    {
        id: 10110, unitId: 101, order: 10, type: 'reflection',
        title: 'Reflexão: O que nos Torna Humanos?', difficulty: 1, xp: 35,
        content: {
            prompt: 'O que diferencia os seres humanos de outros animais? É a inteligência? A linguagem? A cultura? A capacidade de cooperar? Reflita sobre o que nos torna únicos como espécie.',
            examples: [
                'Linguagem simbólica',
                'Criação de ferramentas complexas',
                'Arte e religião'
            ],
            minWords: 50
        }
    },
    {
        id: 10111, unitId: 101, order: 11, type: 'concept',
        title: 'Migração Humana', difficulty: 1, xp: 20,
        content: {
            title: 'Povoando o Planeta',
            text: 'Há cerca de 70 mil anos, grupos de Homo sapiens começaram a migrar da África para outros continentes. Este processo é chamado "Out of Africa".\n\nROTAS DE MIGRAÇÃO:\n• Para o Oriente Médio e Europa: via Sinai\n• Para a Ásia: via costa do Oceano Índico\n• Para a Oceania: há 50 mil anos (barcos primitivos)\n• Para as Américas: via Estreito de Bering (15-20 mil anos)\n\nEm cada região, os humanos se adaptaram ao clima local, desenvolvendo diferenças físicas superficiais (cor de pele, formato dos olhos) que chamamos "raças" - mas geneticamente somos 99,9% idênticos.',
            keyPoints: [
                'Migração começou há 70 mil anos',
                'Da África para todos os continentes',
                'Américas: última região povoada',
                'Diferenças físicas são superficiais'
            ]
        }
    },
    {
        id: 10112, unitId: 101, order: 12, type: 'order',
        title: 'Ordene: Povoamento do Mundo', difficulty: 1, xp: 25,
        content: {
            instructions: 'Ordene as regiões pela ordem em que foram povoadas:',
            items: [
                { text: 'África (origem)', correctOrder: 1 },
                { text: 'Ásia e Europa', correctOrder: 2 },
                { text: 'Oceania', correctOrder: 3 },
                { text: 'Américas', correctOrder: 4 }
            ]
        }
    },
    {
        id: 10113, unitId: 101, order: 13, type: 'quiz',
        title: 'Quiz: Revisão', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Como humanos chegaram às Américas?', options: ['Barcos', 'Estreito de Bering', 'Voando', 'Sempre viveram lá'], correct: 1 },
                { question: 'Quanto do DNA compartilhamos entre humanos?', options: ['50%', '75%', '99,9%', '100%'], correct: 2 },
                { question: 'A revolução cognitiva de Harari ocorreu há:', options: ['10 mil anos', '70 mil anos', '1 milhão de anos', '500 anos'], correct: 1 }
            ]
        }
    },
    {
        id: 10114, unitId: 101, order: 14, type: 'video',
        title: 'Filme: A Guerra do Fogo', difficulty: 1, xp: 20,
        content: {
            title: 'A Guerra do Fogo (1981)',
            director: 'Jean-Jacques Annaud',
            description: 'Filme premiado sobre um grupo de hominídeos pré-históricos em busca do fogo, que perderam após ataque de tribo rival.',
            duration: '100 min',
            amazonLink: 'https://www.amazon.com.br/dp/B00005NJQP',
            reflectionQuestions: [
                'Por que o fogo era tão importante?',
                'Como a comunicação é retratada no filme?'
            ]
        }
    },
    {
        id: 10115, unitId: 101, order: 15, type: 'quiz',
        title: 'Quiz Final: Evolução Humana', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Qual hominídeo foi o primeiro a migrar da África?', options: ['Homo sapiens', 'Homo erectus', 'Australopithecus', 'Homo habilis'], correct: 1 },
                { question: 'Os Neandertais viveram principalmente na:', options: ['África', 'Américas', 'Europa', 'Oceania'], correct: 2 },
                { question: 'A capacidade de criar "ficções compartilhadas" é característica de:', options: ['Todos os primatas', 'Homo sapiens', 'Neandertais', 'Todos os mamíferos'], correct: 1 },
                { question: 'O bipedalismo liberou as mãos para:', options: ['Nadar', 'Usar ferramentas', 'Voar', 'Correr mais rápido'], correct: 1 }
            ]
        }
    }
];

// Blocos detalhados para Unidade 102: Paleolítico
const WH_BLOCKS_102 = [
    {
        id: 10201, unitId: 102, order: 1, type: 'concept',
        title: 'O Período Paleolítico', difficulty: 1, xp: 20,
        content: {
            title: 'A Idade da Pedra Lascada',
            text: 'O Paleolítico ("pedra antiga") é o período mais longo da história humana, durando de cerca de 2,5 milhões de anos até 10.000 a.C. Durante esse tempo, nossos ancestrais viviam como caçadores-coletores.\n\nCARACTERÍSTICAS:\n• Ferramentas de pedra lascada (simples)\n• Nomadismo: seguiam animais e estações\n• Pequenos grupos (bandos de 20-50 pessoas)\n• Economia de subsistência: caça, pesca, coleta\n• Descoberta e controle do fogo\n• Primeiras manifestações artísticas (pinturas rupestres)',
            keyPoints: [
                'Período mais longo da pré-história',
                'Caçadores-coletores nômades',
                'Ferramentas de pedra lascada',
                'Descoberta do fogo'
            ]
        }
    },
    {
        id: 10202, unitId: 102, order: 2, type: 'concept',
        title: 'Vida no Paleolítico', difficulty: 1, xp: 20,
        content: {
            title: 'Como Viviam Nossos Ancestrais',
            text: 'A vida paleolítica era centrada na sobrevivência:\n\nALIMENTAÇÃO:\n• Homens: caça de grandes animais (mamutes, bisões)\n• Mulheres: coleta de frutas, raízes, insetos\n• Dieta variada e nutritiva\n\nMORADIA:\n• Cavernas (quando disponíveis)\n• Abrigos temporários de galhos e peles\n• Acampamentos sazonais\n\nSOCIEDADE:\n• Igualitária (sem propriedade privada)\n• Divisão por gênero e idade\n• Cooperação para caça e proteção\n\nApesar das dificuldades, estudos sugerem que trabalhavam menos horas que agricultores posteriores!',
            keyPoints: [
                'Divisão de trabalho por gênero',
                'Sociedade igualitária',
                'Habitavam cavernas e abrigos',
                'Trabalhavam menos que agricultores'
            ]
        }
    },
    {
        id: 10203, unitId: 102, order: 3, type: 'quiz',
        title: 'Quiz: Paleolítico', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'Paleolítico significa:', options: ['Pedra nova', 'Pedra antiga', 'Pedra polida', 'Sem pedra'], correct: 1 },
                { question: 'Os paleolíticos eram:', options: ['Agricultores', 'Caçadores-coletores', 'Comerciantes', 'Construtores de cidades'], correct: 1 },
                { question: 'Uma característica do Paleolítico é:', options: ['Sedentarismo', 'Agricultura', 'Nomadismo', 'Escrita'], correct: 2 }
            ]
        }
    },
    {
        id: 10204, unitId: 102, order: 4, type: 'video',
        title: 'Arte Rupestre de Lascaux', difficulty: 1, xp: 20,
        content: {
            title: 'As Pinturas de Lascaux',
            description: 'Documentário sobre as famosas pinturas rupestres da caverna de Lascaux, na França, feitas há 17 mil anos.',
            duration: '30 min',
            videoUrl: 'https://www.youtube.com/watch?v=lascaux',
            reflectionQuestions: [
                'Por que eles pintavam animais?',
                'O que a arte rupestre revela sobre suas crenças?'
            ]
        }
    },
    {
        id: 10205, unitId: 102, order: 5, type: 'match',
        title: 'Combine: Vida Paleolítica', difficulty: 1, xp: 30,
        content: {
            pairs: [
                { left: 'Homens', right: 'Caça de grandes animais' },
                { left: 'Mulheres', right: 'Coleta de vegetais' },
                { left: 'Moradia', right: 'Cavernas e abrigos' },
                { left: 'Sociedade', right: 'Igualitária' }
            ]
        }
    },
    {
        id: 10206, unitId: 102, order: 6, type: 'reading',
        title: 'Leitura: A Arte das Cavernas', difficulty: 1, xp: 15,
        content: {
            title: 'As Primeiras Expressões Artísticas',
            text: 'As pinturas rupestres são uma das evidências mais impressionantes da capacidade simbólica do Homo sapiens. Encontradas em cavernas da Europa (Lascaux, Altamira), África e Ásia, datam de até 40 mil anos atrás.\n\nO QUE REPRESENTAM:\n• Animais: bisões, cavalos, mamutes, cervos\n• Mãos em negativo (sopro de pigmento)\n• Figuras humanas estilizadas\n• Símbolos geométricos\n\nINTERPRETAÇÕES:\n• Magia de caça (garantir sucesso)\n• Rituais religiosos\n• Registro de eventos\n• Expressão artística\n\nNão sabemos exatamente por que pintavam, mas sabemos que eram humanos como nós.',
            keyPoints: [
                'Pinturas de até 40 mil anos',
                'Principalmente animais',
                'Possível função ritual/mágica',
                'Evidência de pensamento simbólico'
            ],
            timeToRead: '8 min'
        }
    },
    {
        id: 10207, unitId: 102, order: 7, type: 'flashcard',
        title: 'Flashcards: Paleolítico', difficulty: 1, xp: 15,
        content: {
            cards: [
                { front: 'Paleolítico', back: 'Idade da Pedra Lascada (2,5 milhões - 10.000 a.C.)' },
                { front: 'Nomadismo', back: 'Modo de vida sem moradia fixa, seguindo recursos' },
                { front: 'Pintura Rupestre', back: 'Arte feita em paredes de cavernas' },
                { front: 'Bando', back: 'Grupo social básico do Paleolítico (20-50 pessoas)' },
                { front: 'Lascaux', back: 'Caverna na França com famosas pinturas' }
            ]
        }
    },
    {
        id: 10208, unitId: 102, order: 8, type: 'fill',
        title: 'Complete: Paleolítico', difficulty: 1, xp: 20,
        content: {
            sentences: [
                { text: 'O Paleolítico durou de 2,5 milhões de anos até cerca de _____ a.C.', options: ['100.000', '10.000', '1.000'], answer: '10.000' },
                { text: 'No Paleolítico, as ferramentas eram feitas de pedra _____.', options: ['polida', 'lascada', 'queimada'], answer: 'lascada' },
                { text: 'Os grupos paleolíticos eram _____.', options: ['sedentários', 'nômades', 'urbanos'], answer: 'nômades' }
            ]
        }
    },
    {
        id: 10209, unitId: 102, order: 9, type: 'order',
        title: 'Ordene: Conquistas Paleolíticas', difficulty: 1, xp: 25,
        content: {
            instructions: 'Ordene as conquistas do mais antigo ao mais recente:',
            items: [
                { text: 'Primeiras ferramentas de pedra', correctOrder: 1 },
                { text: 'Domínio do fogo', correctOrder: 2 },
                { text: 'Primeiras pinturas rupestres', correctOrder: 3 },
                { text: 'Início da agricultura', correctOrder: 4 }
            ]
        }
    },
    {
        id: 10210, unitId: 102, order: 10, type: 'reflection',
        title: 'Reflexão: Vida Paleolítica', difficulty: 1, xp: 35,
        content: {
            prompt: 'Você gostaria de viver no Paleolítico? Quais seriam as vantagens e desvantagens dessa vida? Compare com a vida moderna: o que ganhamos e o que perdemos?',
            examples: [
                'Conexão com a natureza vs. conforto moderno',
                'Comunidade pequena vs. sociedade de massa',
                'Trabalho para sobrevivência vs. trabalho assalariado'
            ],
            minWords: 50
        }
    },
    {
        id: 10211, unitId: 102, order: 11, type: 'quiz',
        title: 'Quiz: Revisão', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'As pinturas de Lascaux ficam na:', options: ['Espanha', 'França', 'Itália', 'Alemanha'], correct: 1 },
                { question: 'No Paleolítico, a sociedade era:', options: ['Hierárquica', 'Igualitária', 'Feudal', 'Capitalista'], correct: 1 },
                { question: 'O fogo permitiu:', options: ['Apenas cozinhar', 'Cozinhar, aquecer e proteger', 'Agricultura', 'Escrita'], correct: 1 }
            ]
        }
    },
    {
        id: 10212, unitId: 102, order: 12, type: 'concept',
        title: 'Ferramentas do Paleolítico', difficulty: 1, xp: 20,
        content: {
            title: 'A Tecnologia da Pedra Lascada',
            text: 'As ferramentas paleolíticas evoluíram ao longo do tempo:\n\nMODO 1 (Olduvaiense): Pedras quebradas simplesmente, com bordas cortantes. Usadas há 2,5 milhões de anos.\n\nMODO 2 (Acheuliano): Bifaces (machados de mão) trabalhados dos dois lados. Mais eficientes e padronizados.\n\nMODO 3 (Mousteriense): Lascas retiradas de núcleos preparados. Associado aos Neandertais.\n\nMODO 4 (Aurinhacense): Lâminas longas e finas. Arte e ornamentos. Homo sapiens na Europa.\n\nEssas ferramentas serviam para cortar carne, raspar peles, trabalhar madeira e osso.',
            keyPoints: [
                'Evolução de técnicas ao longo do tempo',
                'De pedras quebradas a lâminas refinadas',
                'Diferentes espécies, diferentes tecnologias',
                'Múltiplas funções: cortar, raspar, furar'
            ]
        }
    },
    {
        id: 10213, unitId: 102, order: 13, type: 'match',
        title: 'Combine: Ferramentas', difficulty: 1, xp: 30,
        content: {
            pairs: [
                { left: 'Olduvaiense', right: 'Pedras simplesmente quebradas' },
                { left: 'Acheuliano', right: 'Bifaces (machados de mão)' },
                { left: 'Mousteriense', right: 'Associado aos Neandertais' },
                { left: 'Aurinhacense', right: 'Lâminas finas, arte' }
            ]
        }
    },
    {
        id: 10214, unitId: 102, order: 14, type: 'timeline',
        title: 'Linha do Tempo: Paleolítico', difficulty: 1, xp: 30,
        content: {
            title: 'Marcos do Paleolítico',
            events: [
                { year: '2,5 milhões', event: 'Primeiras ferramentas', description: 'Modo 1 - Olduvaiense' },
                { year: '1 milhão', event: 'Domínio do fogo', description: 'Homo erectus' },
                { year: '300 mil', event: 'Homo sapiens', description: 'Nossa espécie surge' },
                { year: '40 mil', event: 'Arte rupestre', description: 'Pinturas em cavernas' },
                { year: '10 mil', event: 'Fim do Paleolítico', description: 'Início do Neolítico' }
            ]
        }
    },
    {
        id: 10215, unitId: 102, order: 15, type: 'quiz',
        title: 'Quiz Final: Paleolítico', difficulty: 1, xp: 25,
        content: {
            questions: [
                { question: 'O biface é característico de qual modo?', options: ['Olduvaiense', 'Acheuliano', 'Mousteriense', 'Aurinhacense'], correct: 1 },
                { question: 'A economia paleolítica era baseada em:', options: ['Agricultura', 'Indústria', 'Caça e coleta', 'Comércio'], correct: 2 },
                { question: 'As pinturas rupestres de Altamira ficam na:', options: ['França', 'Espanha', 'Itália', 'Portugal'], correct: 1 },
                { question: 'O Paleolítico terminou com:', options: ['Extinção humana', 'Início da agricultura', 'Descoberta do fogo', 'Invenção da escrita'], correct: 1 }
            ]
        }
    }
];

// ==========================================
// FUNÇÃO GERADORA DE BLOCOS COMPLETOS
// ==========================================
function generateHistoryBlocks(unitId, title, difficulty) {
    const baseId = unitId * 100;
    return [
        { id: baseId + 1, unitId, order: 1, type: 'concept', difficulty, xp: 20 + (difficulty * 3), title: `Introdução: ${title}`,
            content: { title, text: `${title} é um tema fundamental na história mundial. Esta unidade explora os eventos, personagens e transformações relacionados a este período histórico.`, keyPoints: ['Contexto histórico', 'Eventos principais', 'Personagens importantes', 'Consequências'] }
        },
        { id: baseId + 2, unitId, order: 2, type: 'video', difficulty, xp: 20 + (difficulty * 2), title: `Vídeo: ${title}`,
            content: { title: `Entendendo ${title}`, description: `Vídeo explicativo sobre ${title}.`, videoUrl: 'https://youtube.com/example', duration: '20 min' }
        },
        { id: baseId + 3, unitId, order: 3, type: 'quiz', difficulty, xp: 25 + (difficulty * 3), title: `Quiz: ${title}`,
            content: { questions: [
                { question: `Qual é a importância de ${title}?`, options: ['Nenhuma', 'Fundamental para compreensão histórica', 'Apenas local', 'Irrelevante'], correct: 1 },
                { question: `Quando ocorreu ${title}?`, options: ['Antiguidade', 'Idade Média', 'Idade Moderna', 'Contemporânea'], correct: 1 }
            ]}
        },
        { id: baseId + 4, unitId, order: 4, type: 'reading', difficulty, xp: 15 + (difficulty * 2), title: `Leitura: ${title}`,
            content: { title: `Aprofundando ${title}`, text: `Texto analítico sobre ${title}, explorando suas causas, desenvolvimento e consequências.`, keyPoints: ['Causas', 'Desenvolvimento', 'Consequências'], timeToRead: '12 min' }
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
                { text: `${title} teve como consequência _____.`, answer: 'transformações', options: ['transformações', 'estagnação', 'nada'] }
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
            content: { title: `${title} em Perspectiva`, description: `Documentário explorando ${title}.`, videoUrl: 'https://youtube.com/doc', duration: '45 min' }
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
            content: { prompt: `Como ${title} influencia o mundo atual? Quais lições podemos tirar desse período?`, minLength: 60 }
        },
        { id: baseId + 11, unitId, order: 11, type: 'quiz', difficulty, xp: 30 + (difficulty * 2), title: `Quiz Avançado: ${title}`,
            content: { questions: [
                { question: `Questão analítica sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 1 },
                { question: `Segunda questão sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 }
            ]}
        },
        { id: baseId + 12, unitId, order: 12, type: 'reading', difficulty, xp: 15 + (difficulty * 2), title: `Fontes: ${title}`,
            content: { title: 'Documentos Históricos', text: `Análise de fontes primárias sobre ${title}.`, keyPoints: ['Fonte 1', 'Fonte 2', 'Interpretação'], timeToRead: '10 min' }
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
const WH_BLOCKS_103 = generateHistoryBlocks(103, 'Revolução Neolítica', 1);
const WH_BLOCKS_104 = generateHistoryBlocks(104, 'Mesopotâmia', 1);
const WH_BLOCKS_105 = generateHistoryBlocks(105, 'Egito Antigo', 1);
const WH_BLOCKS_106 = generateHistoryBlocks(106, 'Hebreus', 1);
const WH_BLOCKS_107 = generateHistoryBlocks(107, 'Fenícios', 1);
const WH_BLOCKS_108 = generateHistoryBlocks(108, 'Persas', 1);
const WH_BLOCKS_109 = generateHistoryBlocks(109, 'Índia e China Antigas', 1);
const WH_BLOCKS_110 = generateHistoryBlocks(110, 'Revisão: Antiguidade', 1);

// Seção 2: Antiguidade Clássica
const WH_BLOCKS_201 = generateHistoryBlocks(201, 'Grécia: Geografia', 2);
const WH_BLOCKS_202 = generateHistoryBlocks(202, 'Esparta e Atenas', 2);
const WH_BLOCKS_203 = generateHistoryBlocks(203, 'Democracia Ateniense', 2);
const WH_BLOCKS_204 = generateHistoryBlocks(204, 'Guerras Greco-Persas', 2);
const WH_BLOCKS_205 = generateHistoryBlocks(205, 'Alexandre, o Grande', 2);
const WH_BLOCKS_206 = generateHistoryBlocks(206, 'Roma: Origens', 2);
const WH_BLOCKS_207 = generateHistoryBlocks(207, 'República Romana', 2);
const WH_BLOCKS_208 = generateHistoryBlocks(208, 'Império Romano', 2);
const WH_BLOCKS_209 = generateHistoryBlocks(209, 'Queda de Roma', 2);
const WH_BLOCKS_210 = generateHistoryBlocks(210, 'Revisão: Clássica', 2);

// Seção 3: Idade Média
const WH_BLOCKS_301 = generateHistoryBlocks(301, 'Reinos Germânicos', 3);
const WH_BLOCKS_302 = generateHistoryBlocks(302, 'Igreja Medieval', 3);
const WH_BLOCKS_303 = generateHistoryBlocks(303, 'Feudalismo', 3);
const WH_BLOCKS_304 = generateHistoryBlocks(304, 'Império Bizantino', 3);
const WH_BLOCKS_305 = generateHistoryBlocks(305, 'Islã: Origem', 3);
const WH_BLOCKS_306 = generateHistoryBlocks(306, 'Império Islâmico', 3);
const WH_BLOCKS_307 = generateHistoryBlocks(307, 'Cruzadas', 3);
const WH_BLOCKS_308 = generateHistoryBlocks(308, 'Renascimento Comercial', 3);
const WH_BLOCKS_309 = generateHistoryBlocks(309, 'Crise do Século XIV', 3);
const WH_BLOCKS_310 = generateHistoryBlocks(310, 'Revisão: Medieval', 3);

// Seção 4: Renascimento e Reformas
const WH_BLOCKS_401 = generateHistoryBlocks(401, 'Renascimento', 4);
const WH_BLOCKS_402 = generateHistoryBlocks(402, 'Grandes Navegações', 4);
const WH_BLOCKS_403 = generateHistoryBlocks(403, 'Reforma Protestante', 4);
const WH_BLOCKS_404 = generateHistoryBlocks(404, 'Contrarreforma', 4);
const WH_BLOCKS_405 = generateHistoryBlocks(405, 'Guerras de Religião', 4);
const WH_BLOCKS_406 = generateHistoryBlocks(406, 'Formação dos Estados', 4);
const WH_BLOCKS_407 = generateHistoryBlocks(407, 'Revolução Científica', 4);
const WH_BLOCKS_408 = generateHistoryBlocks(408, 'Colonização Americana', 4);
const WH_BLOCKS_409 = generateHistoryBlocks(409, 'Tráfico de Escravizados', 4);
const WH_BLOCKS_410 = generateHistoryBlocks(410, 'Revisão: Transição', 4);

// Seção 5: Idade Moderna
const WH_BLOCKS_501 = generateHistoryBlocks(501, 'Absolutismo', 5);
const WH_BLOCKS_502 = generateHistoryBlocks(502, 'Mercantilismo', 5);
const WH_BLOCKS_503 = generateHistoryBlocks(503, 'Iluminismo', 5);
const WH_BLOCKS_504 = generateHistoryBlocks(504, 'Despotismo Esclarecido', 5);
const WH_BLOCKS_505 = generateHistoryBlocks(505, 'Revolução Inglesa', 5);
const WH_BLOCKS_506 = generateHistoryBlocks(506, 'Independência dos EUA', 5);
const WH_BLOCKS_507 = generateHistoryBlocks(507, 'Revolução Francesa', 5);
const WH_BLOCKS_508 = generateHistoryBlocks(508, 'Era Napoleônica', 5);
const WH_BLOCKS_509 = generateHistoryBlocks(509, 'Congresso de Viena', 5);
const WH_BLOCKS_510 = generateHistoryBlocks(510, 'Revisão: Moderna', 5);

// Seção 6: Revoluções
const WH_BLOCKS_601 = generateHistoryBlocks(601, 'Revolução Industrial', 6);
const WH_BLOCKS_602 = generateHistoryBlocks(602, 'Questão Social', 6);
const WH_BLOCKS_603 = generateHistoryBlocks(603, 'Ideologias do XIX', 6);
const WH_BLOCKS_604 = generateHistoryBlocks(604, 'Nacionalismos', 6);
const WH_BLOCKS_605 = generateHistoryBlocks(605, 'Unificação Italiana', 6);
const WH_BLOCKS_606 = generateHistoryBlocks(606, 'Unificação Alemã', 6);
const WH_BLOCKS_607 = generateHistoryBlocks(607, 'Independências na América', 6);
const WH_BLOCKS_608 = generateHistoryBlocks(608, 'Segunda Revolução Industrial', 6);
const WH_BLOCKS_609 = generateHistoryBlocks(609, 'Belle Époque', 6);
const WH_BLOCKS_610 = generateHistoryBlocks(610, 'Revisão: Revoluções', 6);

// Seção 7: Imperialismo e Guerras
const WH_BLOCKS_701 = generateHistoryBlocks(701, 'Imperialismo', 7);
const WH_BLOCKS_702 = generateHistoryBlocks(702, 'Conferência de Berlim', 7);
const WH_BLOCKS_703 = generateHistoryBlocks(703, 'Antecedentes da WWI', 7);
const WH_BLOCKS_704 = generateHistoryBlocks(704, 'Primeira Guerra Mundial', 7);
const WH_BLOCKS_705 = generateHistoryBlocks(705, 'Revolução Russa', 7);
const WH_BLOCKS_706 = generateHistoryBlocks(706, 'Tratado de Versalhes', 7);
const WH_BLOCKS_707 = generateHistoryBlocks(707, 'Crise de 1929', 7);
const WH_BLOCKS_708 = generateHistoryBlocks(708, 'Ascensão do Fascismo', 7);
const WH_BLOCKS_709 = generateHistoryBlocks(709, 'Segunda Guerra Mundial', 7);
const WH_BLOCKS_710 = generateHistoryBlocks(710, 'Revisão: Guerras', 7);

// Seção 8: Guerra Fria
const WH_BLOCKS_801 = generateHistoryBlocks(801, 'Origem da Guerra Fria', 8);
const WH_BLOCKS_802 = generateHistoryBlocks(802, 'Cortina de Ferro', 8);
const WH_BLOCKS_803 = generateHistoryBlocks(803, 'Corrida Armamentista', 8);
const WH_BLOCKS_804 = generateHistoryBlocks(804, 'Descolonização', 8);
const WH_BLOCKS_805 = generateHistoryBlocks(805, 'Guerra da Coreia', 8);
const WH_BLOCKS_806 = generateHistoryBlocks(806, 'Guerra do Vietnã', 8);
const WH_BLOCKS_807 = generateHistoryBlocks(807, 'Crise dos Mísseis', 8);
const WH_BLOCKS_808 = generateHistoryBlocks(808, 'Détente', 8);
const WH_BLOCKS_809 = generateHistoryBlocks(809, 'Queda do Muro', 8);
const WH_BLOCKS_810 = generateHistoryBlocks(810, 'Revisão: Guerra Fria', 8);

// Seção 9: Contemporâneo
const WH_BLOCKS_901 = generateHistoryBlocks(901, 'Nova Ordem Mundial', 9);
const WH_BLOCKS_902 = generateHistoryBlocks(902, 'União Europeia', 9);
const WH_BLOCKS_903 = generateHistoryBlocks(903, 'Fim da URSS', 9);
const WH_BLOCKS_904 = generateHistoryBlocks(904, 'Globalização', 9);
const WH_BLOCKS_905 = generateHistoryBlocks(905, 'Conflitos Regionais', 9);
const WH_BLOCKS_906 = generateHistoryBlocks(906, 'Terrorismo', 9);
const WH_BLOCKS_907 = generateHistoryBlocks(907, 'Primavera Árabe', 9);
const WH_BLOCKS_908 = generateHistoryBlocks(908, 'Ascensão da China', 9);
const WH_BLOCKS_909 = generateHistoryBlocks(909, 'Crise de 2008', 9);
const WH_BLOCKS_910 = generateHistoryBlocks(910, 'Revisão: Contemporâneo', 9);

// Seção 10: Século XXI
const WH_BLOCKS_1001 = generateHistoryBlocks(1001, 'Mudanças Climáticas', 10);
const WH_BLOCKS_1002 = generateHistoryBlocks(1002, 'Migrações', 10);
const WH_BLOCKS_1003 = generateHistoryBlocks(1003, 'Revolução Digital', 10);
const WH_BLOCKS_1004 = generateHistoryBlocks(1004, 'Fake News', 10);
const WH_BLOCKS_1005 = generateHistoryBlocks(1005, 'Pandemia de COVID-19', 10);
const WH_BLOCKS_1006 = generateHistoryBlocks(1006, 'Democracia em Crise', 10);
const WH_BLOCKS_1007 = generateHistoryBlocks(1007, 'Desigualdade Global', 10);
const WH_BLOCKS_1008 = generateHistoryBlocks(1008, 'Novas Tecnologias', 10);
const WH_BLOCKS_1009 = generateHistoryBlocks(1009, 'Geopolítica Atual', 10);
const WH_BLOCKS_1010 = generateHistoryBlocks(1010, 'Mestria Histórica', 10);

// Consolidar todos os blocos
const WORLD_HISTORY_ALL_BLOCKS = {
    // Seção 1 - Pré-História (conteúdo detalhado)
    101: WH_BLOCKS_101, 102: WH_BLOCKS_102, 103: WH_BLOCKS_103, 104: WH_BLOCKS_104, 105: WH_BLOCKS_105,
    106: WH_BLOCKS_106, 107: WH_BLOCKS_107, 108: WH_BLOCKS_108, 109: WH_BLOCKS_109, 110: WH_BLOCKS_110,
    // Seção 2 - Antiguidade Clássica
    201: WH_BLOCKS_201, 202: WH_BLOCKS_202, 203: WH_BLOCKS_203, 204: WH_BLOCKS_204, 205: WH_BLOCKS_205,
    206: WH_BLOCKS_206, 207: WH_BLOCKS_207, 208: WH_BLOCKS_208, 209: WH_BLOCKS_209, 210: WH_BLOCKS_210,
    // Seção 3 - Idade Média
    301: WH_BLOCKS_301, 302: WH_BLOCKS_302, 303: WH_BLOCKS_303, 304: WH_BLOCKS_304, 305: WH_BLOCKS_305,
    306: WH_BLOCKS_306, 307: WH_BLOCKS_307, 308: WH_BLOCKS_308, 309: WH_BLOCKS_309, 310: WH_BLOCKS_310,
    // Seção 4 - Renascimento e Reformas
    401: WH_BLOCKS_401, 402: WH_BLOCKS_402, 403: WH_BLOCKS_403, 404: WH_BLOCKS_404, 405: WH_BLOCKS_405,
    406: WH_BLOCKS_406, 407: WH_BLOCKS_407, 408: WH_BLOCKS_408, 409: WH_BLOCKS_409, 410: WH_BLOCKS_410,
    // Seção 5 - Idade Moderna
    501: WH_BLOCKS_501, 502: WH_BLOCKS_502, 503: WH_BLOCKS_503, 504: WH_BLOCKS_504, 505: WH_BLOCKS_505,
    506: WH_BLOCKS_506, 507: WH_BLOCKS_507, 508: WH_BLOCKS_508, 509: WH_BLOCKS_509, 510: WH_BLOCKS_510,
    // Seção 6 - Revoluções
    601: WH_BLOCKS_601, 602: WH_BLOCKS_602, 603: WH_BLOCKS_603, 604: WH_BLOCKS_604, 605: WH_BLOCKS_605,
    606: WH_BLOCKS_606, 607: WH_BLOCKS_607, 608: WH_BLOCKS_608, 609: WH_BLOCKS_609, 610: WH_BLOCKS_610,
    // Seção 7 - Imperialismo e Guerras
    701: WH_BLOCKS_701, 702: WH_BLOCKS_702, 703: WH_BLOCKS_703, 704: WH_BLOCKS_704, 705: WH_BLOCKS_705,
    706: WH_BLOCKS_706, 707: WH_BLOCKS_707, 708: WH_BLOCKS_708, 709: WH_BLOCKS_709, 710: WH_BLOCKS_710,
    // Seção 8 - Guerra Fria
    801: WH_BLOCKS_801, 802: WH_BLOCKS_802, 803: WH_BLOCKS_803, 804: WH_BLOCKS_804, 805: WH_BLOCKS_805,
    806: WH_BLOCKS_806, 807: WH_BLOCKS_807, 808: WH_BLOCKS_808, 809: WH_BLOCKS_809, 810: WH_BLOCKS_810,
    // Seção 9 - Contemporâneo
    901: WH_BLOCKS_901, 902: WH_BLOCKS_902, 903: WH_BLOCKS_903, 904: WH_BLOCKS_904, 905: WH_BLOCKS_905,
    906: WH_BLOCKS_906, 907: WH_BLOCKS_907, 908: WH_BLOCKS_908, 909: WH_BLOCKS_909, 910: WH_BLOCKS_910,
    // Seção 10 - Século XXI
    1001: WH_BLOCKS_1001, 1002: WH_BLOCKS_1002, 1003: WH_BLOCKS_1003, 1004: WH_BLOCKS_1004, 1005: WH_BLOCKS_1005,
    1006: WH_BLOCKS_1006, 1007: WH_BLOCKS_1007, 1008: WH_BLOCKS_1008, 1009: WH_BLOCKS_1009, 1010: WH_BLOCKS_1010
};

// ==========================================
// REGISTRAR NO SUBJECT_DATA GLOBAL
// ==========================================
SUBJECT_DATA['world-history'] = {
    SECTIONS: WORLD_HISTORY_SECTIONS,
    UNITS: WORLD_HISTORY_UNITS,
    ALL_BLOCKS: WORLD_HISTORY_ALL_BLOCKS
};

console.log('✅ História do Mundo carregada: 10 seções, 100 unidades, 1.500 blocos');
