// ==========================================
// EDULEARN - ÍNDICE DE MATÉRIAS
// Plataforma Multi-Disciplinar de Aprendizado
// ==========================================

const SUBJECTS = [
    {
        id: 'sociology',
        name: 'Sociologia',
        subtitle: 'Entenda a sociedade e suas relações',
        icon: 'fa-users',
        color: '#58cc02',
        description: 'Estude a sociedade, relações sociais e fenômenos coletivos. De Comte a Bourdieu, explore as grandes teorias sociológicas.',
        sections: 8,
        unitsPerSection: 10,
        blocksPerUnit: 15,
        totalBlocks: 1200,
        difficulty: 'Intermediário',
        estimatedTime: '120 horas',
        topics: ['Clássicos', 'Teoria Social', 'Sociologia Brasileira', 'Temas Contemporâneos']
    },
    {
        id: 'anthropology',
        name: 'Antropologia',
        subtitle: 'Explore a diversidade humana',
        icon: 'fa-globe-americas',
        color: '#1cb0f6',
        description: 'Descubra a diversidade cultural, etnografia e os estudos sobre sociedades humanas ao redor do mundo.',
        sections: 8,
        unitsPerSection: 10,
        blocksPerUnit: 15,
        totalBlocks: 1200,
        difficulty: 'Intermediário',
        estimatedTime: '120 horas',
        topics: ['Cultura', 'Etnografia', 'Parentesco', 'Religião e Simbolismo']
    },
    {
        id: 'politics',
        name: 'Política',
        subtitle: 'Compreenda o poder e o Estado',
        icon: 'fa-landmark',
        color: '#ff4b4b',
        description: 'Aprenda sobre ciência política, sistemas de governo, democracia, ideologias e relações internacionais.',
        sections: 8,
        unitsPerSection: 10,
        blocksPerUnit: 15,
        totalBlocks: 1200,
        difficulty: 'Intermediário',
        estimatedTime: '120 horas',
        topics: ['Teoria Política', 'Sistemas Políticos', 'Democracia', 'Política Internacional']
    },
    {
        id: 'world-history',
        name: 'História do Mundo',
        subtitle: 'Da pré-história ao século XXI',
        icon: 'fa-globe',
        color: '#ff9600',
        description: 'Viaje pela história mundial: civilizações antigas, impérios, revoluções e o mundo contemporâneo.',
        sections: 10,
        unitsPerSection: 10,
        blocksPerUnit: 15,
        totalBlocks: 1500,
        difficulty: 'Progressivo',
        estimatedTime: '150 horas',
        topics: ['Antiguidade', 'Idade Média', 'Era Moderna', 'Guerras Mundiais', 'Contemporâneo']
    },
    {
        id: 'brazil-history',
        name: 'História do Brasil',
        subtitle: 'De Pindorama aos dias atuais',
        icon: 'fa-flag',
        color: '#00c853',
        description: 'Conheça a história brasileira: povos originários, colonização, império, república e democracia.',
        sections: 10,
        unitsPerSection: 10,
        blocksPerUnit: 15,
        totalBlocks: 1500,
        difficulty: 'Progressivo',
        estimatedTime: '150 horas',
        topics: ['Colonial', 'Império', 'República', 'Era Vargas', 'Ditadura', 'Redemocratização']
    },
    {
        id: 'philosophy',
        name: 'Filosofia',
        subtitle: 'Pense sobre o pensamento',
        icon: 'fa-brain',
        color: '#ce82ff',
        description: 'Explore as grandes questões filosóficas: ética, conhecimento, política e existência humana.',
        sections: 10,
        unitsPerSection: 10,
        blocksPerUnit: 15,
        totalBlocks: 1500,
        difficulty: 'Progressivo',
        estimatedTime: '150 horas',
        topics: ['Filosofia Antiga', 'Medieval', 'Moderna', 'Contemporânea', 'Ética']
    }
];

// ==========================================
// CONFIGURAÇÕES GLOBAIS
// ==========================================

const DIFFICULTY_LEVELS = {
    1: { name: 'Iniciante', color: '#58cc02', xpMultiplier: 1 },
    2: { name: 'Básico', color: '#78d82d', xpMultiplier: 1.2 },
    3: { name: 'Elementar', color: '#ffc800', xpMultiplier: 1.4 },
    4: { name: 'Intermediário', color: '#ff9600', xpMultiplier: 1.6 },
    5: { name: 'Avançado', color: '#ff7700', xpMultiplier: 1.8 },
    6: { name: 'Proficiente', color: '#ff4b4b', xpMultiplier: 2 },
    7: { name: 'Especialista', color: '#ce82ff', xpMultiplier: 2.2 },
    8: { name: 'Mestre', color: '#1cb0f6', xpMultiplier: 2.5 },
    9: { name: 'Doutor', color: '#ffd700', xpMultiplier: 2.8 },
    10: { name: 'Lenda', color: '#ff69b4', xpMultiplier: 3 }
};

const BLOCK_TYPES = {
    reading: { icon: 'fa-book-open', name: 'Leitura', baseXP: 15 },
    video: { icon: 'fa-film', name: 'Vídeo/Filme', baseXP: 20 },
    quiz: { icon: 'fa-question-circle', name: 'Quiz', baseXP: 25 },
    match: { icon: 'fa-puzzle-piece', name: 'Combinação', baseXP: 30 },
    fill: { icon: 'fa-pen', name: 'Complete', baseXP: 20 },
    order: { icon: 'fa-sort-numeric-down', name: 'Ordenar', baseXP: 25 },
    flashcard: { icon: 'fa-clone', name: 'Flashcards', baseXP: 15 },
    reflection: { icon: 'fa-brain', name: 'Reflexão', baseXP: 35 },
    timeline: { icon: 'fa-clock', name: 'Linha do Tempo', baseXP: 30 },
    concept: { icon: 'fa-lightbulb', name: 'Conceito', baseXP: 20 }
};

const LEVELS = [
    { level: 1, title: 'Iniciante', xpRequired: 0, icon: 'fa-seedling' },
    { level: 2, title: 'Curioso', xpRequired: 100, icon: 'fa-search' },
    { level: 3, title: 'Estudante', xpRequired: 300, icon: 'fa-book' },
    { level: 4, title: 'Aprendiz', xpRequired: 600, icon: 'fa-user-graduate' },
    { level: 5, title: 'Pesquisador', xpRequired: 1000, icon: 'fa-microscope' },
    { level: 6, title: 'Analista', xpRequired: 1500, icon: 'fa-chart-line' },
    { level: 7, title: 'Especialista', xpRequired: 2200, icon: 'fa-star' },
    { level: 8, title: 'Expert', xpRequired: 3000, icon: 'fa-medal' },
    { level: 9, title: 'Mestre', xpRequired: 4000, icon: 'fa-award' },
    { level: 10, title: 'Doutor', xpRequired: 5500, icon: 'fa-user-tie' },
    { level: 11, title: 'Professor', xpRequired: 7500, icon: 'fa-chalkboard-teacher' },
    { level: 12, title: 'Acadêmico', xpRequired: 10000, icon: 'fa-university' },
    { level: 13, title: 'Pensador', xpRequired: 15000, icon: 'fa-brain' },
    { level: 14, title: 'Sábio', xpRequired: 22000, icon: 'fa-hat-wizard' },
    { level: 15, title: 'Lenda', xpRequired: 30000, icon: 'fa-crown' }
];

const ACHIEVEMENTS = [
    // Gerais
    { id: 'first_step', title: 'Primeiro Passo', description: 'Complete seu primeiro bloco', icon: 'fa-shoe-prints', condition: { type: 'blocks', value: 1 } },
    { id: 'curious', title: 'Curioso', description: 'Complete 10 blocos', icon: 'fa-search', condition: { type: 'blocks', value: 10 } },
    { id: 'student', title: 'Estudante', description: 'Complete 50 blocos', icon: 'fa-graduation-cap', condition: { type: 'blocks', value: 50 } },
    { id: 'dedicated', title: 'Dedicado', description: 'Complete 100 blocos', icon: 'fa-book', condition: { type: 'blocks', value: 100 } },
    { id: 'marathoner', title: 'Maratonista', description: '15 blocos em um dia', icon: 'fa-running', condition: { type: 'daily', value: 15 } },
    { id: 'consistent', title: 'Consistente', description: '7 dias seguidos', icon: 'fa-fire', condition: { type: 'streak', value: 7 } },
    { id: 'month_streak', title: 'Mês de Fogo', description: '30 dias seguidos', icon: 'fa-fire-alt', condition: { type: 'streak', value: 30 } },

    // Por matéria
    { id: 'sociology_master', title: 'Sociólogo', description: 'Complete Sociologia', icon: 'fa-users', condition: { type: 'subject_complete', value: 'sociology' } },
    { id: 'anthropology_master', title: 'Antropólogo', description: 'Complete Antropologia', icon: 'fa-globe-americas', condition: { type: 'subject_complete', value: 'anthropology' } },
    { id: 'politics_master', title: 'Politólogo', description: 'Complete Política', icon: 'fa-landmark', condition: { type: 'subject_complete', value: 'politics' } },
    { id: 'world_historian', title: 'Historiador Mundial', description: 'Complete História do Mundo', icon: 'fa-globe', condition: { type: 'subject_complete', value: 'world-history' } },
    { id: 'brazil_historian', title: 'Brasilianista', description: 'Complete História do Brasil', icon: 'fa-flag', condition: { type: 'subject_complete', value: 'brazil-history' } },
    { id: 'philosopher', title: 'Filósofo', description: 'Complete Filosofia', icon: 'fa-brain', condition: { type: 'subject_complete', value: 'philosophy' } },

    // Especiais
    { id: 'polymath', title: 'Polímata', description: 'Complete 3 matérias', icon: 'fa-infinity', condition: { type: 'subjects_complete', value: 3 } },
    { id: 'renaissance', title: 'Renascentista', description: 'Complete todas as matérias', icon: 'fa-crown', condition: { type: 'all_complete', value: true } }
];

// ==========================================
// DADOS DAS MATÉRIAS (REFERÊNCIAS)
// ==========================================

// Os dados de cada matéria são carregados de arquivos separados:
// - sociology.js (ou data.js existente)
// - anthropology.js
// - politics.js
// - world-history.js
// - brazil-history.js
// - philosophy.js

// Objeto global que será populado pelos arquivos de dados
const SUBJECT_DATA = {};

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================

function getSubject(subjectId) {
    return SUBJECTS.find(s => s.id === subjectId);
}

function getSubjectData(subjectId) {
    return SUBJECT_DATA[subjectId] || null;
}

function getTotalProgress() {
    let completed = 0;
    let total = 0;

    SUBJECTS.forEach(subject => {
        total += subject.totalBlocks;
        if (state.subjects[subject.id]) {
            completed += state.subjects[subject.id].progress.completedBlocks.length;
        }
    });

    return { completed, total, percentage: Math.round((completed / total) * 100) };
}

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
