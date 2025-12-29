// ==========================================
// EDULEARN - DADOS DE FILOSOFIA
// 10 Seções x 10 Unidades x 15 Blocos
// ==========================================

const PHILOSOPHY_SECTIONS = [
    {
        id: 1,
        title: 'O que é Filosofia?',
        subtitle: 'Introdução ao pensamento',
        icon: 'fa-brain',
        color: '#ce82ff',
        difficulty: 1,
        description: 'Descubra o que é filosofia e como ela surgiu.',
        unitsCount: 10
    },
    {
        id: 2,
        title: 'Filosofia Antiga',
        subtitle: 'Gregos e helenismo',
        icon: 'fa-columns',
        color: '#1cb0f6',
        difficulty: 2,
        description: 'Explore o pensamento dos filósofos gregos.',
        unitsCount: 10
    },
    {
        id: 3,
        title: 'Filosofia Medieval',
        subtitle: 'Fé e razão',
        icon: 'fa-church',
        color: '#ff9600',
        difficulty: 3,
        description: 'Estude a filosofia cristã e islâmica medieval.',
        unitsCount: 10
    },
    {
        id: 4,
        title: 'Filosofia Moderna',
        subtitle: 'Racionalismo e empirismo',
        icon: 'fa-lightbulb',
        color: '#ffc800',
        difficulty: 4,
        description: 'Conheça Descartes, Locke, Kant e outros.',
        unitsCount: 10
    },
    {
        id: 5,
        title: 'Iluminismo',
        subtitle: 'Século das Luzes',
        icon: 'fa-sun',
        color: '#ff4b4b',
        difficulty: 5,
        description: 'Explore o movimento que transformou o mundo.',
        unitsCount: 10
    },
    {
        id: 6,
        title: 'Filosofia Contemporânea',
        subtitle: 'Séculos XIX-XXI',
        icon: 'fa-atom',
        color: '#58cc02',
        difficulty: 6,
        description: 'Estude as principais correntes contemporâneas.',
        unitsCount: 10
    },
    {
        id: 7,
        title: 'Ética e Moral',
        subtitle: 'O agir humano',
        icon: 'fa-balance-scale',
        color: '#00c853',
        difficulty: 7,
        description: 'Aprofunde-se nas questões éticas fundamentais.',
        unitsCount: 10
    },
    {
        id: 8,
        title: 'Filosofia Política',
        subtitle: 'Poder e justiça',
        icon: 'fa-landmark',
        color: '#ff6b9d',
        difficulty: 8,
        description: 'Explore as teorias sobre Estado e sociedade.',
        unitsCount: 10
    },
    {
        id: 9,
        title: 'Epistemologia',
        subtitle: 'Teoria do conhecimento',
        icon: 'fa-eye',
        color: '#9c27b0',
        difficulty: 9,
        description: 'Estude os fundamentos do conhecimento.',
        unitsCount: 10
    },
    {
        id: 10,
        title: 'Filosofia Brasileira',
        subtitle: 'Pensamento nacional',
        icon: 'fa-flag',
        color: '#4caf50',
        difficulty: 10,
        description: 'Conheça filósofos brasileiros e latino-americanos.',
        unitsCount: 10
    }
];

const PHILOSOPHY_UNITS = {
    // SEÇÃO 1: O QUE É FILOSOFIA
    1: [
        { id: 101, order: 1, title: 'O que é Filosofia?', subtitle: 'Definições', icon: 'fa-question' },
        { id: 102, order: 2, title: 'Origem da Filosofia', subtitle: 'Tales de Mileto', icon: 'fa-seedling' },
        { id: 103, order: 3, title: 'Mito e Logos', subtitle: 'Do mito à razão', icon: 'fa-book' },
        { id: 104, order: 4, title: 'Perguntas Filosóficas', subtitle: 'Quem somos?', icon: 'fa-question-circle' },
        { id: 105, order: 5, title: 'Áreas da Filosofia', subtitle: 'Ética, lógica, metafísica', icon: 'fa-th-large' },
        { id: 106, order: 6, title: 'Filosofia e Ciência', subtitle: 'Diferenças e relações', icon: 'fa-flask' },
        { id: 107, order: 7, title: 'Filosofia e Religião', subtitle: 'Fé e razão', icon: 'fa-pray' },
        { id: 108, order: 8, title: 'Senso Comum', subtitle: 'Conhecimento cotidiano', icon: 'fa-users' },
        { id: 109, order: 9, title: 'Por que Filosofar?', subtitle: 'Importância hoje', icon: 'fa-brain' },
        { id: 110, order: 10, title: 'Revisão: Introdução', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 2: FILOSOFIA ANTIGA
    2: [
        { id: 201, order: 1, title: 'Pré-Socráticos', subtitle: 'Busca pela arché', icon: 'fa-water' },
        { id: 202, order: 2, title: 'Tales de Mileto', subtitle: 'Água como princípio', icon: 'fa-tint' },
        { id: 203, order: 3, title: 'Heráclito', subtitle: 'Tudo flui', icon: 'fa-fire' },
        { id: 204, order: 4, title: 'Parmênides', subtitle: 'O ser é', icon: 'fa-circle' },
        { id: 205, order: 5, title: 'Sofistas', subtitle: 'Retórica e relativismo', icon: 'fa-comments' },
        { id: 206, order: 6, title: 'Sócrates', subtitle: 'Conhece-te a ti mesmo', icon: 'fa-user' },
        { id: 207, order: 7, title: 'Platão', subtitle: 'Mundo das ideias', icon: 'fa-cloud' },
        { id: 208, order: 8, title: 'Aristóteles', subtitle: 'Lógica e ética', icon: 'fa-book' },
        { id: 209, order: 9, title: 'Helenismo', subtitle: 'Estoicos e epicuristas', icon: 'fa-peace' },
        { id: 210, order: 10, title: 'Revisão: Antiga', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 3: FILOSOFIA MEDIEVAL
    3: [
        { id: 301, order: 1, title: 'Patrística', subtitle: 'Padres da Igreja', icon: 'fa-cross' },
        { id: 302, order: 2, title: 'Santo Agostinho', subtitle: 'Fé e razão', icon: 'fa-book-bible' },
        { id: 303, order: 3, title: 'Boécio', subtitle: 'Consolação da filosofia', icon: 'fa-scroll' },
        { id: 304, order: 4, title: 'Filosofia Islâmica', subtitle: 'Averróis e Avicena', icon: 'fa-moon' },
        { id: 305, order: 5, title: 'Filosofia Judaica', subtitle: 'Maimônides', icon: 'fa-star-of-david' },
        { id: 306, order: 6, title: 'Escolástica', subtitle: 'Método universitário', icon: 'fa-university' },
        { id: 307, order: 7, title: 'São Tomás de Aquino', subtitle: 'Suma Teológica', icon: 'fa-church' },
        { id: 308, order: 8, title: 'Duns Scotus', subtitle: 'Vontade livre', icon: 'fa-feather-alt' },
        { id: 309, order: 9, title: 'Guilherme de Ockham', subtitle: 'Navalha de Ockham', icon: 'fa-cut' },
        { id: 310, order: 10, title: 'Revisão: Medieval', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 4: FILOSOFIA MODERNA
    4: [
        { id: 401, order: 1, title: 'Renascimento', subtitle: 'Humanismo', icon: 'fa-palette' },
        { id: 402, order: 2, title: 'Maquiavel', subtitle: 'Realismo político', icon: 'fa-chess' },
        { id: 403, order: 3, title: 'Descartes', subtitle: 'Penso, logo existo', icon: 'fa-brain' },
        { id: 404, order: 4, title: 'Spinoza', subtitle: 'Deus ou Natureza', icon: 'fa-leaf' },
        { id: 405, order: 5, title: 'Leibniz', subtitle: 'Mônadas', icon: 'fa-circle' },
        { id: 406, order: 6, title: 'Francis Bacon', subtitle: 'Método indutivo', icon: 'fa-flask' },
        { id: 407, order: 7, title: 'John Locke', subtitle: 'Tábula rasa', icon: 'fa-file' },
        { id: 408, order: 8, title: 'David Hume', subtitle: 'Empirismo radical', icon: 'fa-eye' },
        { id: 409, order: 9, title: 'Immanuel Kant', subtitle: 'Crítica da razão', icon: 'fa-gavel' },
        { id: 410, order: 10, title: 'Revisão: Moderna', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 5: ILUMINISMO
    5: [
        { id: 501, order: 1, title: 'O que foi o Iluminismo?', subtitle: 'Século das Luzes', icon: 'fa-lightbulb' },
        { id: 502, order: 2, title: 'Voltaire', subtitle: 'Tolerância', icon: 'fa-pen' },
        { id: 503, order: 3, title: 'Montesquieu', subtitle: 'Separação de poderes', icon: 'fa-balance-scale' },
        { id: 504, order: 4, title: 'Rousseau', subtitle: 'Contrato social', icon: 'fa-handshake' },
        { id: 505, order: 5, title: 'Diderot', subtitle: 'Enciclopédia', icon: 'fa-book' },
        { id: 506, order: 6, title: 'Adam Smith', subtitle: 'Economia política', icon: 'fa-coins' },
        { id: 507, order: 7, title: 'Kant e Iluminismo', subtitle: 'Sapere aude', icon: 'fa-brain' },
        { id: 508, order: 8, title: 'Iluminismo e Revolução', subtitle: 'Impacto político', icon: 'fa-fist-raised' },
        { id: 509, order: 9, title: 'Críticas ao Iluminismo', subtitle: 'Romantismo', icon: 'fa-heart' },
        { id: 510, order: 10, title: 'Revisão: Iluminismo', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 6: CONTEMPORÂNEA
    6: [
        { id: 601, order: 1, title: 'Hegel', subtitle: 'Dialética', icon: 'fa-sync' },
        { id: 602, order: 2, title: 'Karl Marx', subtitle: 'Materialismo histórico', icon: 'fa-hammer' },
        { id: 603, order: 3, title: 'Nietzsche', subtitle: 'Morte de Deus', icon: 'fa-bolt' },
        { id: 604, order: 4, title: 'Kierkegaard', subtitle: 'Existência', icon: 'fa-user' },
        { id: 605, order: 5, title: 'Fenomenologia', subtitle: 'Husserl', icon: 'fa-eye' },
        { id: 606, order: 6, title: 'Existencialismo', subtitle: 'Sartre e Heidegger', icon: 'fa-user-friends' },
        { id: 607, order: 7, title: 'Escola de Frankfurt', subtitle: 'Teoria crítica', icon: 'fa-building' },
        { id: 608, order: 8, title: 'Estruturalismo', subtitle: 'Lévi-Strauss', icon: 'fa-sitemap' },
        { id: 609, order: 9, title: 'Pós-Estruturalismo', subtitle: 'Foucault e Derrida', icon: 'fa-random' },
        { id: 610, order: 10, title: 'Revisão: Contemporânea', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 7: ÉTICA
    7: [
        { id: 701, order: 1, title: 'O que é Ética?', subtitle: 'Moral e ética', icon: 'fa-balance-scale' },
        { id: 702, order: 2, title: 'Ética Aristotélica', subtitle: 'Virtudes', icon: 'fa-medal' },
        { id: 703, order: 3, title: 'Ética Kantiana', subtitle: 'Imperativo categórico', icon: 'fa-gavel' },
        { id: 704, order: 4, title: 'Utilitarismo', subtitle: 'Mill e Bentham', icon: 'fa-chart-bar' },
        { id: 705, order: 5, title: 'Ética do Cuidado', subtitle: 'Feminismo', icon: 'fa-heart' },
        { id: 706, order: 6, title: 'Bioética', subtitle: 'Vida e tecnologia', icon: 'fa-dna' },
        { id: 707, order: 7, title: 'Ética Ambiental', subtitle: 'Natureza', icon: 'fa-leaf' },
        { id: 708, order: 8, title: 'Ética e Direitos Humanos', subtitle: 'Dignidade', icon: 'fa-users' },
        { id: 709, order: 9, title: 'Dilemas Éticos', subtitle: 'Casos práticos', icon: 'fa-question' },
        { id: 710, order: 10, title: 'Revisão: Ética', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 8: FILOSOFIA POLÍTICA
    8: [
        { id: 801, order: 1, title: 'O que é Política?', subtitle: 'Poder e Estado', icon: 'fa-landmark' },
        { id: 802, order: 2, title: 'Platão e a República', subtitle: 'Estado ideal', icon: 'fa-crown' },
        { id: 803, order: 3, title: 'Contratualismo', subtitle: 'Hobbes, Locke, Rousseau', icon: 'fa-file-contract' },
        { id: 804, order: 4, title: 'Liberalismo', subtitle: 'Liberdade individual', icon: 'fa-dove' },
        { id: 805, order: 5, title: 'Marxismo', subtitle: 'Luta de classes', icon: 'fa-fist-raised' },
        { id: 806, order: 6, title: 'Anarquismo', subtitle: 'Sem Estado', icon: 'fa-circle' },
        { id: 807, order: 7, title: 'Hannah Arendt', subtitle: 'Condição humana', icon: 'fa-female' },
        { id: 808, order: 8, title: 'John Rawls', subtitle: 'Justiça', icon: 'fa-balance-scale' },
        { id: 809, order: 9, title: 'Democracia e Filosofia', subtitle: 'Debates atuais', icon: 'fa-vote-yea' },
        { id: 810, order: 10, title: 'Revisão: Política', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 9: EPISTEMOLOGIA
    9: [
        { id: 901, order: 1, title: 'O que é Conhecimento?', subtitle: 'Definições', icon: 'fa-brain' },
        { id: 902, order: 2, title: 'Racionalismo', subtitle: 'Razão como fonte', icon: 'fa-lightbulb' },
        { id: 903, order: 3, title: 'Empirismo', subtitle: 'Experiência', icon: 'fa-eye' },
        { id: 904, order: 4, title: 'Crítica de Kant', subtitle: 'Síntese', icon: 'fa-sync' },
        { id: 905, order: 5, title: 'Positivismo', subtitle: 'Comte', icon: 'fa-chart-line' },
        { id: 906, order: 6, title: 'Pragmatismo', subtitle: 'Verdade útil', icon: 'fa-tools' },
        { id: 907, order: 7, title: 'Filosofia da Ciência', subtitle: 'Popper e Kuhn', icon: 'fa-flask' },
        { id: 908, order: 8, title: 'Relativismo', subtitle: 'Verdades múltiplas?', icon: 'fa-question' },
        { id: 909, order: 9, title: 'Pós-Verdade', subtitle: 'Desafios atuais', icon: 'fa-newspaper' },
        { id: 910, order: 10, title: 'Revisão: Epistemologia', subtitle: 'Síntese', icon: 'fa-check' }
    ],
    // SEÇÃO 10: FILOSOFIA BRASILEIRA
    10: [
        { id: 1001, order: 1, title: 'Filosofia no Brasil', subtitle: 'Origens', icon: 'fa-history' },
        { id: 1002, order: 2, title: 'Período Colonial', subtitle: 'Escolástica', icon: 'fa-church' },
        { id: 1003, order: 3, title: 'Positivismo Brasileiro', subtitle: 'Ordem e progresso', icon: 'fa-flag' },
        { id: 1004, order: 4, title: 'Escola do Recife', subtitle: 'Tobias Barreto', icon: 'fa-university' },
        { id: 1005, order: 5, title: 'Farias Brito', subtitle: 'Espiritualismo', icon: 'fa-cloud' },
        { id: 1006, order: 6, title: 'Miguel Reale', subtitle: 'Teoria tridimensional', icon: 'fa-cube' },
        { id: 1007, order: 7, title: 'Paulo Freire', subtitle: 'Pedagogia do oprimido', icon: 'fa-book-open' },
        { id: 1008, order: 8, title: 'Marilena Chaui', subtitle: 'Filosofia política', icon: 'fa-female' },
        { id: 1009, order: 9, title: 'Filosofia Latino-Americana', subtitle: 'Libertação', icon: 'fa-fist-raised' },
        { id: 1010, order: 10, title: 'Mestria Filosófica', subtitle: 'Síntese final', icon: 'fa-award' }
    ]
};

// ==========================================
// FUNÇÃO GERADORA DE BLOCOS COMPLETOS
// ==========================================
function generatePhilosophyBlocks(unitId, title, difficulty) {
    const baseId = unitId * 100;
    return [
        { id: baseId + 1, unitId, order: 1, type: 'concept', difficulty, xp: 20 + (difficulty * 3), title: `Introdução: ${title}`,
            content: { title, text: `${title} é um tema fundamental na filosofia. Esta unidade explora os conceitos, pensadores e debates relacionados a este tema filosófico.`, keyPoints: ['Conceitos principais', 'Pensadores relevantes', 'Debates atuais', 'Aplicações práticas'] }
        },
        { id: baseId + 2, unitId, order: 2, type: 'video', difficulty, xp: 20 + (difficulty * 2), title: `Vídeo: ${title}`,
            content: { title: `Entendendo ${title}`, description: `Vídeo explicativo sobre ${title} na filosofia.`, videoUrl: 'https://youtube.com/example', duration: '15 min' }
        },
        { id: baseId + 3, unitId, order: 3, type: 'quiz', difficulty, xp: 25 + (difficulty * 3), title: `Quiz: ${title}`,
            content: { questions: [
                { question: `Qual é a importância de ${title} na filosofia?`, options: ['Nenhuma', 'Fundamental para compreensão filosófica', 'Apenas histórica', 'Irrelevante'], correct: 1 },
                { question: `Como a filosofia aborda ${title}?`, options: ['Ignorando contexto', 'Analisando racionalmente', 'Apenas empiricamente', 'Sem método'], correct: 1 }
            ]}
        },
        { id: baseId + 4, unitId, order: 4, type: 'reading', difficulty, xp: 15 + (difficulty * 2), title: `Leitura: ${title}`,
            content: { title: `Aprofundando ${title}`, text: `Texto analítico sobre ${title}, explorando suas dimensões filosóficas e históricas.`, keyPoints: ['Aspecto histórico', 'Aspecto conceitual', 'Aspecto prático'], timeToRead: '12 min' }
        },
        { id: baseId + 5, unitId, order: 5, type: 'match', difficulty, xp: 30 + (difficulty * 2), title: `Combine: ${title}`,
            content: { pairs: [
                { left: 'Conceito A', right: 'Definição A' },
                { left: 'Pensador B', right: 'Ideia B' },
                { left: 'Obra C', right: 'Autor C' },
                { left: 'Escola D', right: 'Característica D' }
            ]}
        },
        { id: baseId + 6, unitId, order: 6, type: 'fill', difficulty, xp: 20 + (difficulty * 2), title: `Complete: ${title}`,
            content: { sentences: [
                { text: `_____ é um conceito central em ${title}.`, answer: 'Razão', options: ['Razão', 'Nada', 'Física'] },
                { text: `A análise de ${title} requer _____.`, answer: 'reflexão', options: ['reflexão', 'isolamento', 'números'] }
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
            content: { title: `${title} em Perspectiva`, description: `Documentário explorando ${title} na história da filosofia.`, videoUrl: 'https://youtube.com/doc', duration: '30 min' }
        },
        { id: baseId + 9, unitId, order: 9, type: 'order', difficulty, xp: 25 + (difficulty * 2), title: `Ordene: ${title}`,
            content: { items: [
                { id: 1, text: 'Origens do conceito' },
                { id: 2, text: 'Desenvolvimento histórico' },
                { id: 3, text: 'Críticas e revisões' },
                { id: 4, text: 'Perspectivas atuais' }
            ], correctOrder: [1, 2, 3, 4] }
        },
        { id: baseId + 10, unitId, order: 10, type: 'reflection', difficulty, xp: 35 + (difficulty * 3), title: `Reflexão: ${title}`,
            content: { prompt: `Como ${title} se aplica à sua vida cotidiana? Reflita sobre exemplos práticos.`, minLength: 60 }
        },
        { id: baseId + 11, unitId, order: 11, type: 'quiz', difficulty, xp: 30 + (difficulty * 2), title: `Quiz Avançado: ${title}`,
            content: { questions: [
                { question: `Questão analítica sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 1 },
                { question: `Segunda questão sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 }
            ]}
        },
        { id: baseId + 12, unitId, order: 12, type: 'reading', difficulty, xp: 15 + (difficulty * 2), title: `Textos: ${title}`,
            content: { title: 'Fontes Primárias', text: `Análise de textos filosóficos sobre ${title}.`, keyPoints: ['Texto 1', 'Texto 2', 'Interpretação'], timeToRead: '10 min' }
        },
        { id: baseId + 13, unitId, order: 13, type: 'match', difficulty, xp: 30 + (difficulty * 2), title: `Pensadores: ${title}`,
            content: { pairs: [
                { left: 'Pensador A', right: 'Ideia A' },
                { left: 'Pensador B', right: 'Ideia B' },
                { left: 'Escola', right: 'Característica' }
            ]}
        },
        { id: baseId + 14, unitId, order: 14, type: 'timeline', difficulty, xp: 30 + (difficulty * 2), title: `História: ${title}`,
            content: { events: [
                { year: 'Antiguidade', event: 'Origens', description: 'Primeiras formulações' },
                { year: 'Modernidade', event: 'Desenvolvimento', description: 'Novas perspectivas' },
                { year: 'Contemporâneo', event: 'Debates atuais', description: 'Revisões críticas' }
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

// Seção 1: O que é Filosofia?
const PHILO_BLOCKS_101 = generatePhilosophyBlocks(101, 'O que é Filosofia?', 1);
const PHILO_BLOCKS_102 = generatePhilosophyBlocks(102, 'Origens da Filosofia', 1);
const PHILO_BLOCKS_103 = generatePhilosophyBlocks(103, 'Tales de Mileto', 1);
const PHILO_BLOCKS_104 = generatePhilosophyBlocks(104, 'Mito e Logos', 1);
const PHILO_BLOCKS_105 = generatePhilosophyBlocks(105, 'Ramos da Filosofia', 1);
const PHILO_BLOCKS_106 = generatePhilosophyBlocks(106, 'Método Filosófico', 1);
const PHILO_BLOCKS_107 = generatePhilosophyBlocks(107, 'Filosofia e Ciência', 1);
const PHILO_BLOCKS_108 = generatePhilosophyBlocks(108, 'Filosofia e Religião', 1);
const PHILO_BLOCKS_109 = generatePhilosophyBlocks(109, 'Por que Filosofar?', 1);
const PHILO_BLOCKS_110 = generatePhilosophyBlocks(110, 'Revisão: Introdução', 1);

// Seção 2: Filosofia Antiga
const PHILO_BLOCKS_201 = generatePhilosophyBlocks(201, 'Pré-Socráticos', 2);
const PHILO_BLOCKS_202 = generatePhilosophyBlocks(202, 'Sócrates', 2);
const PHILO_BLOCKS_203 = generatePhilosophyBlocks(203, 'Platão', 2);
const PHILO_BLOCKS_204 = generatePhilosophyBlocks(204, 'Aristóteles', 2);
const PHILO_BLOCKS_205 = generatePhilosophyBlocks(205, 'Estoicismo', 2);
const PHILO_BLOCKS_206 = generatePhilosophyBlocks(206, 'Epicurismo', 2);
const PHILO_BLOCKS_207 = generatePhilosophyBlocks(207, 'Ceticismo', 2);
const PHILO_BLOCKS_208 = generatePhilosophyBlocks(208, 'Neoplatonismo', 2);
const PHILO_BLOCKS_209 = generatePhilosophyBlocks(209, 'Filosofia Helenística', 2);
const PHILO_BLOCKS_210 = generatePhilosophyBlocks(210, 'Revisão: Antiga', 2);

// Seção 3: Filosofia Medieval
const PHILO_BLOCKS_301 = generatePhilosophyBlocks(301, 'Patrística', 3);
const PHILO_BLOCKS_302 = generatePhilosophyBlocks(302, 'Santo Agostinho', 3);
const PHILO_BLOCKS_303 = generatePhilosophyBlocks(303, 'Escolástica', 3);
const PHILO_BLOCKS_304 = generatePhilosophyBlocks(304, 'São Tomás de Aquino', 3);
const PHILO_BLOCKS_305 = generatePhilosophyBlocks(305, 'Problema dos Universais', 3);
const PHILO_BLOCKS_306 = generatePhilosophyBlocks(306, 'Fé e Razão', 3);
const PHILO_BLOCKS_307 = generatePhilosophyBlocks(307, 'Filosofia Árabe', 3);
const PHILO_BLOCKS_308 = generatePhilosophyBlocks(308, 'Averróis e Maimônides', 3);
const PHILO_BLOCKS_309 = generatePhilosophyBlocks(309, 'Guilherme de Ockham', 3);
const PHILO_BLOCKS_310 = generatePhilosophyBlocks(310, 'Revisão: Medieval', 3);

// Seção 4: Filosofia Moderna
const PHILO_BLOCKS_401 = generatePhilosophyBlocks(401, 'Renascimento Filosófico', 4);
const PHILO_BLOCKS_402 = generatePhilosophyBlocks(402, 'Descartes', 4);
const PHILO_BLOCKS_403 = generatePhilosophyBlocks(403, 'Racionalismo', 4);
const PHILO_BLOCKS_404 = generatePhilosophyBlocks(404, 'Empirismo', 4);
const PHILO_BLOCKS_405 = generatePhilosophyBlocks(405, 'Locke', 4);
const PHILO_BLOCKS_406 = generatePhilosophyBlocks(406, 'Hume', 4);
const PHILO_BLOCKS_407 = generatePhilosophyBlocks(407, 'Spinoza', 4);
const PHILO_BLOCKS_408 = generatePhilosophyBlocks(408, 'Leibniz', 4);
const PHILO_BLOCKS_409 = generatePhilosophyBlocks(409, 'Revolução Científica', 4);
const PHILO_BLOCKS_410 = generatePhilosophyBlocks(410, 'Revisão: Moderna', 4);

// Seção 5: Iluminismo
const PHILO_BLOCKS_501 = generatePhilosophyBlocks(501, 'O que foi o Iluminismo?', 5);
const PHILO_BLOCKS_502 = generatePhilosophyBlocks(502, 'Kant', 5);
const PHILO_BLOCKS_503 = generatePhilosophyBlocks(503, 'Crítica da Razão Pura', 5);
const PHILO_BLOCKS_504 = generatePhilosophyBlocks(504, 'Ética Kantiana', 5);
const PHILO_BLOCKS_505 = generatePhilosophyBlocks(505, 'Rousseau', 5);
const PHILO_BLOCKS_506 = generatePhilosophyBlocks(506, 'Voltaire', 5);
const PHILO_BLOCKS_507 = generatePhilosophyBlocks(507, 'Enciclopedistas', 5);
const PHILO_BLOCKS_508 = generatePhilosophyBlocks(508, 'Contrato Social', 5);
const PHILO_BLOCKS_509 = generatePhilosophyBlocks(509, 'Legado do Iluminismo', 5);
const PHILO_BLOCKS_510 = generatePhilosophyBlocks(510, 'Revisão: Iluminismo', 5);

// Seção 6: Filosofia Contemporânea
const PHILO_BLOCKS_601 = generatePhilosophyBlocks(601, 'Idealismo Alemão', 6);
const PHILO_BLOCKS_602 = generatePhilosophyBlocks(602, 'Hegel', 6);
const PHILO_BLOCKS_603 = generatePhilosophyBlocks(603, 'Marx', 6);
const PHILO_BLOCKS_604 = generatePhilosophyBlocks(604, 'Nietzsche', 6);
const PHILO_BLOCKS_605 = generatePhilosophyBlocks(605, 'Fenomenologia', 6);
const PHILO_BLOCKS_606 = generatePhilosophyBlocks(606, 'Existencialismo', 6);
const PHILO_BLOCKS_607 = generatePhilosophyBlocks(607, 'Filosofia Analítica', 6);
const PHILO_BLOCKS_608 = generatePhilosophyBlocks(608, 'Pós-Estruturalismo', 6);
const PHILO_BLOCKS_609 = generatePhilosophyBlocks(609, 'Filosofia Atual', 6);
const PHILO_BLOCKS_610 = generatePhilosophyBlocks(610, 'Revisão: Contemporânea', 6);

// Seção 7: Ética e Moral
const PHILO_BLOCKS_701 = generatePhilosophyBlocks(701, 'O que é Ética?', 7);
const PHILO_BLOCKS_702 = generatePhilosophyBlocks(702, 'Ética das Virtudes', 7);
const PHILO_BLOCKS_703 = generatePhilosophyBlocks(703, 'Deontologia', 7);
const PHILO_BLOCKS_704 = generatePhilosophyBlocks(704, 'Utilitarismo', 7);
const PHILO_BLOCKS_705 = generatePhilosophyBlocks(705, 'Ética Aplicada', 7);
const PHILO_BLOCKS_706 = generatePhilosophyBlocks(706, 'Bioética', 7);
const PHILO_BLOCKS_707 = generatePhilosophyBlocks(707, 'Ética Ambiental', 7);
const PHILO_BLOCKS_708 = generatePhilosophyBlocks(708, 'Ética Profissional', 7);
const PHILO_BLOCKS_709 = generatePhilosophyBlocks(709, 'Dilemas Morais', 7);
const PHILO_BLOCKS_710 = generatePhilosophyBlocks(710, 'Revisão: Ética', 7);

// Seção 8: Filosofia Política
const PHILO_BLOCKS_801 = generatePhilosophyBlocks(801, 'Filosofia e Política', 8);
const PHILO_BLOCKS_802 = generatePhilosophyBlocks(802, 'Justiça', 8);
const PHILO_BLOCKS_803 = generatePhilosophyBlocks(803, 'Liberdade', 8);
const PHILO_BLOCKS_804 = generatePhilosophyBlocks(804, 'Igualdade', 8);
const PHILO_BLOCKS_805 = generatePhilosophyBlocks(805, 'Direitos Humanos', 8);
const PHILO_BLOCKS_806 = generatePhilosophyBlocks(806, 'Democracia', 8);
const PHILO_BLOCKS_807 = generatePhilosophyBlocks(807, 'John Rawls', 8);
const PHILO_BLOCKS_808 = generatePhilosophyBlocks(808, 'Hannah Arendt', 8);
const PHILO_BLOCKS_809 = generatePhilosophyBlocks(809, 'Teorias Críticas', 8);
const PHILO_BLOCKS_810 = generatePhilosophyBlocks(810, 'Revisão: Política', 8);

// Seção 9: Epistemologia
const PHILO_BLOCKS_901 = generatePhilosophyBlocks(901, 'Teoria do Conhecimento', 9);
const PHILO_BLOCKS_902 = generatePhilosophyBlocks(902, 'Ceticismo', 9);
const PHILO_BLOCKS_903 = generatePhilosophyBlocks(903, 'Fundacionalismo', 9);
const PHILO_BLOCKS_904 = generatePhilosophyBlocks(904, 'Coerentismo', 9);
const PHILO_BLOCKS_905 = generatePhilosophyBlocks(905, 'Positivismo', 9);
const PHILO_BLOCKS_906 = generatePhilosophyBlocks(906, 'Pragmatismo', 9);
const PHILO_BLOCKS_907 = generatePhilosophyBlocks(907, 'Filosofia da Ciência', 9);
const PHILO_BLOCKS_908 = generatePhilosophyBlocks(908, 'Relativismo', 9);
const PHILO_BLOCKS_909 = generatePhilosophyBlocks(909, 'Pós-Verdade', 9);
const PHILO_BLOCKS_910 = generatePhilosophyBlocks(910, 'Revisão: Epistemologia', 9);

// Seção 10: Filosofia Brasileira
const PHILO_BLOCKS_1001 = generatePhilosophyBlocks(1001, 'Filosofia no Brasil', 10);
const PHILO_BLOCKS_1002 = generatePhilosophyBlocks(1002, 'Período Colonial', 10);
const PHILO_BLOCKS_1003 = generatePhilosophyBlocks(1003, 'Positivismo Brasileiro', 10);
const PHILO_BLOCKS_1004 = generatePhilosophyBlocks(1004, 'Escola do Recife', 10);
const PHILO_BLOCKS_1005 = generatePhilosophyBlocks(1005, 'Farias Brito', 10);
const PHILO_BLOCKS_1006 = generatePhilosophyBlocks(1006, 'Miguel Reale', 10);
const PHILO_BLOCKS_1007 = generatePhilosophyBlocks(1007, 'Paulo Freire', 10);
const PHILO_BLOCKS_1008 = generatePhilosophyBlocks(1008, 'Marilena Chaui', 10);
const PHILO_BLOCKS_1009 = generatePhilosophyBlocks(1009, 'Filosofia Latino-Americana', 10);
const PHILO_BLOCKS_1010 = generatePhilosophyBlocks(1010, 'Mestria Filosófica', 10);

// Consolidar todos os blocos
const PHILOSOPHY_ALL_BLOCKS = {
    // Seção 1 - O que é Filosofia?
    101: PHILO_BLOCKS_101, 102: PHILO_BLOCKS_102, 103: PHILO_BLOCKS_103, 104: PHILO_BLOCKS_104, 105: PHILO_BLOCKS_105,
    106: PHILO_BLOCKS_106, 107: PHILO_BLOCKS_107, 108: PHILO_BLOCKS_108, 109: PHILO_BLOCKS_109, 110: PHILO_BLOCKS_110,
    // Seção 2 - Filosofia Antiga
    201: PHILO_BLOCKS_201, 202: PHILO_BLOCKS_202, 203: PHILO_BLOCKS_203, 204: PHILO_BLOCKS_204, 205: PHILO_BLOCKS_205,
    206: PHILO_BLOCKS_206, 207: PHILO_BLOCKS_207, 208: PHILO_BLOCKS_208, 209: PHILO_BLOCKS_209, 210: PHILO_BLOCKS_210,
    // Seção 3 - Filosofia Medieval
    301: PHILO_BLOCKS_301, 302: PHILO_BLOCKS_302, 303: PHILO_BLOCKS_303, 304: PHILO_BLOCKS_304, 305: PHILO_BLOCKS_305,
    306: PHILO_BLOCKS_306, 307: PHILO_BLOCKS_307, 308: PHILO_BLOCKS_308, 309: PHILO_BLOCKS_309, 310: PHILO_BLOCKS_310,
    // Seção 4 - Filosofia Moderna
    401: PHILO_BLOCKS_401, 402: PHILO_BLOCKS_402, 403: PHILO_BLOCKS_403, 404: PHILO_BLOCKS_404, 405: PHILO_BLOCKS_405,
    406: PHILO_BLOCKS_406, 407: PHILO_BLOCKS_407, 408: PHILO_BLOCKS_408, 409: PHILO_BLOCKS_409, 410: PHILO_BLOCKS_410,
    // Seção 5 - Iluminismo
    501: PHILO_BLOCKS_501, 502: PHILO_BLOCKS_502, 503: PHILO_BLOCKS_503, 504: PHILO_BLOCKS_504, 505: PHILO_BLOCKS_505,
    506: PHILO_BLOCKS_506, 507: PHILO_BLOCKS_507, 508: PHILO_BLOCKS_508, 509: PHILO_BLOCKS_509, 510: PHILO_BLOCKS_510,
    // Seção 6 - Filosofia Contemporânea
    601: PHILO_BLOCKS_601, 602: PHILO_BLOCKS_602, 603: PHILO_BLOCKS_603, 604: PHILO_BLOCKS_604, 605: PHILO_BLOCKS_605,
    606: PHILO_BLOCKS_606, 607: PHILO_BLOCKS_607, 608: PHILO_BLOCKS_608, 609: PHILO_BLOCKS_609, 610: PHILO_BLOCKS_610,
    // Seção 7 - Ética e Moral
    701: PHILO_BLOCKS_701, 702: PHILO_BLOCKS_702, 703: PHILO_BLOCKS_703, 704: PHILO_BLOCKS_704, 705: PHILO_BLOCKS_705,
    706: PHILO_BLOCKS_706, 707: PHILO_BLOCKS_707, 708: PHILO_BLOCKS_708, 709: PHILO_BLOCKS_709, 710: PHILO_BLOCKS_710,
    // Seção 8 - Filosofia Política
    801: PHILO_BLOCKS_801, 802: PHILO_BLOCKS_802, 803: PHILO_BLOCKS_803, 804: PHILO_BLOCKS_804, 805: PHILO_BLOCKS_805,
    806: PHILO_BLOCKS_806, 807: PHILO_BLOCKS_807, 808: PHILO_BLOCKS_808, 809: PHILO_BLOCKS_809, 810: PHILO_BLOCKS_810,
    // Seção 9 - Epistemologia
    901: PHILO_BLOCKS_901, 902: PHILO_BLOCKS_902, 903: PHILO_BLOCKS_903, 904: PHILO_BLOCKS_904, 905: PHILO_BLOCKS_905,
    906: PHILO_BLOCKS_906, 907: PHILO_BLOCKS_907, 908: PHILO_BLOCKS_908, 909: PHILO_BLOCKS_909, 910: PHILO_BLOCKS_910,
    // Seção 10 - Filosofia Brasileira
    1001: PHILO_BLOCKS_1001, 1002: PHILO_BLOCKS_1002, 1003: PHILO_BLOCKS_1003, 1004: PHILO_BLOCKS_1004, 1005: PHILO_BLOCKS_1005,
    1006: PHILO_BLOCKS_1006, 1007: PHILO_BLOCKS_1007, 1008: PHILO_BLOCKS_1008, 1009: PHILO_BLOCKS_1009, 1010: PHILO_BLOCKS_1010
};

// ==========================================
// REGISTRAR NO SUBJECT_DATA GLOBAL
// ==========================================
SUBJECT_DATA['philosophy'] = {
    SECTIONS: PHILOSOPHY_SECTIONS,
    UNITS: PHILOSOPHY_UNITS,
    ALL_BLOCKS: PHILOSOPHY_ALL_BLOCKS
};

console.log('✅ Filosofia carregada: 10 seções, 100 unidades, 1.500 blocos');
