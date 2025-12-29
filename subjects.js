// ==========================================
// SABERQUEST - INDICE DE MATERIAS v2.0
// Estrutura: 15 Secoes x 15 Unidades x 15 Atividades
// Total: 3.375 atividades por materia = 20.250 total
// ==========================================

const SUBJECTS = [
    {
        id: 'sociology',
        name: 'Sociologia',
        subtitle: 'Entenda a sociedade e suas relacoes',
        icon: 'fa-users',
        color: '#58cc02',
        description: 'Estude a sociedade, relacoes sociais e fenomenos coletivos. De Comte a Bourdieu, explore as grandes teorias sociologicas.',
        sections: 15,
        unitsPerSection: 15,
        blocksPerUnit: 15,
        totalBlocks: 3375,
        difficulty: 'Progressivo',
        estimatedTime: '300 horas',
        topics: ['Classicos', 'Teoria Social', 'Sociologia Brasileira', 'Temas Contemporaneos', 'Desigualdade', 'Cultura']
    },
    {
        id: 'philosophy',
        name: 'Filosofia',
        subtitle: 'Pense sobre o pensamento',
        icon: 'fa-brain',
        color: '#ce82ff',
        description: 'Explore as grandes questoes filosoficas: etica, conhecimento, politica e existencia humana.',
        sections: 15,
        unitsPerSection: 15,
        blocksPerUnit: 15,
        totalBlocks: 3375,
        difficulty: 'Progressivo',
        estimatedTime: '300 horas',
        topics: ['Filosofia Antiga', 'Medieval', 'Moderna', 'Contemporanea', 'Etica', 'Politica']
    },
    {
        id: 'politics',
        name: 'Politica',
        subtitle: 'Compreenda o poder e o Estado',
        icon: 'fa-landmark',
        color: '#ff4b4b',
        description: 'Aprenda sobre ciencia politica, sistemas de governo, democracia, ideologias e relacoes internacionais.',
        sections: 15,
        unitsPerSection: 15,
        blocksPerUnit: 15,
        totalBlocks: 3375,
        difficulty: 'Progressivo',
        estimatedTime: '300 horas',
        topics: ['Teoria Politica', 'Sistemas Politicos', 'Democracia', 'Politica Internacional', 'Brasil']
    },
    {
        id: 'anthropology',
        name: 'Antropologia',
        subtitle: 'Explore a diversidade humana',
        icon: 'fa-globe-americas',
        color: '#1cb0f6',
        description: 'Descubra a diversidade cultural, etnografia e os estudos sobre sociedades humanas ao redor do mundo.',
        sections: 15,
        unitsPerSection: 15,
        blocksPerUnit: 15,
        totalBlocks: 3375,
        difficulty: 'Progressivo',
        estimatedTime: '300 horas',
        topics: ['Cultura', 'Etnografia', 'Parentesco', 'Religiao e Simbolismo', 'Povos Indigenas']
    },
    {
        id: 'brazil-history',
        name: 'Historia do Brasil',
        subtitle: 'De Pindorama aos dias atuais',
        icon: 'fa-flag',
        color: '#00c853',
        description: 'Conheca a historia brasileira: povos originarios, colonizacao, imperio, republica e democracia.',
        sections: 15,
        unitsPerSection: 15,
        blocksPerUnit: 15,
        totalBlocks: 3375,
        difficulty: 'Progressivo',
        estimatedTime: '300 horas',
        topics: ['Colonial', 'Imperio', 'Republica', 'Era Vargas', 'Ditadura', 'Redemocratizacao']
    },
    {
        id: 'world-history',
        name: 'Historia do Mundo',
        subtitle: 'Da pre-historia ao seculo XXI',
        icon: 'fa-globe',
        color: '#ff9600',
        description: 'Viaje pela historia mundial: civilizacoes antigas, imperios, revolucoes e o mundo contemporaneo.',
        sections: 15,
        unitsPerSection: 15,
        blocksPerUnit: 15,
        totalBlocks: 3375,
        difficulty: 'Progressivo',
        estimatedTime: '300 horas',
        topics: ['Antiguidade', 'Idade Media', 'Era Moderna', 'Guerras Mundiais', 'Contemporaneo']
    }
];

// ==========================================
// CONFIGURACOES GLOBAIS
// ==========================================

const DIFFICULTY_LEVELS = {
    1: { name: 'Iniciante', color: '#58cc02', xpMultiplier: 1 },
    2: { name: 'Basico', color: '#78d82d', xpMultiplier: 1.1 },
    3: { name: 'Elementar', color: '#9dd645', xpMultiplier: 1.2 },
    4: { name: 'Pre-Intermediario', color: '#c5e84d', xpMultiplier: 1.3 },
    5: { name: 'Intermediario', color: '#ffc800', xpMultiplier: 1.4 },
    6: { name: 'Intermediario Alto', color: '#ffb300', xpMultiplier: 1.5 },
    7: { name: 'Pre-Avancado', color: '#ff9600', xpMultiplier: 1.6 },
    8: { name: 'Avancado', color: '#ff7700', xpMultiplier: 1.8 },
    9: { name: 'Proficiente', color: '#ff4b4b', xpMultiplier: 2.0 },
    10: { name: 'Especialista', color: '#ce82ff', xpMultiplier: 2.2 },
    11: { name: 'Expert', color: '#a560e8', xpMultiplier: 2.4 },
    12: { name: 'Mestre', color: '#1cb0f6', xpMultiplier: 2.6 },
    13: { name: 'Doutor', color: '#0095d9', xpMultiplier: 2.8 },
    14: { name: 'Pesquisador', color: '#ffd700', xpMultiplier: 3.0 },
    15: { name: 'Lenda', color: '#ff69b4', xpMultiplier: 3.5 }
};

const BLOCK_TYPES = {
    reading: { icon: 'fa-book-open', name: 'Leitura', baseXP: 15 },
    video: { icon: 'fa-film', name: 'Video/Filme', baseXP: 20 },
    quiz: { icon: 'fa-question-circle', name: 'Quiz', baseXP: 25 },
    match: { icon: 'fa-puzzle-piece', name: 'Combinacao', baseXP: 30 },
    fill: { icon: 'fa-pen', name: 'Complete', baseXP: 20 },
    order: { icon: 'fa-sort-numeric-down', name: 'Ordenar', baseXP: 25 },
    flashcard: { icon: 'fa-clone', name: 'Flashcards', baseXP: 15 },
    reflection: { icon: 'fa-brain', name: 'Reflexao', baseXP: 35 },
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
    { level: 12, title: 'Academico', xpRequired: 10000, icon: 'fa-university' },
    { level: 13, title: 'Pensador', xpRequired: 15000, icon: 'fa-brain' },
    { level: 14, title: 'Sabio', xpRequired: 22000, icon: 'fa-hat-wizard' },
    { level: 15, title: 'Iluminado', xpRequired: 30000, icon: 'fa-sun' },
    { level: 16, title: 'Visionario', xpRequired: 40000, icon: 'fa-eye' },
    { level: 17, title: 'Genio', xpRequired: 55000, icon: 'fa-lightbulb' },
    { level: 18, title: 'Virtuoso', xpRequired: 75000, icon: 'fa-gem' },
    { level: 19, title: 'Transcendente', xpRequired: 100000, icon: 'fa-infinity' },
    { level: 20, title: 'Lenda', xpRequired: 150000, icon: 'fa-crown' }
];

const ACHIEVEMENTS = [
    // Primeiros passos
    { id: 'first_step', title: 'Primeiro Passo', description: 'Complete seu primeiro bloco', icon: 'fa-shoe-prints', condition: { type: 'blocks', value: 1 } },
    { id: 'curious', title: 'Curioso', description: 'Complete 10 blocos', icon: 'fa-search', condition: { type: 'blocks', value: 10 } },
    { id: 'student', title: 'Estudante', description: 'Complete 50 blocos', icon: 'fa-graduation-cap', condition: { type: 'blocks', value: 50 } },
    { id: 'dedicated', title: 'Dedicado', description: 'Complete 100 blocos', icon: 'fa-book', condition: { type: 'blocks', value: 100 } },
    { id: 'scholar', title: 'Estudioso', description: 'Complete 500 blocos', icon: 'fa-book-reader', condition: { type: 'blocks', value: 500 } },
    { id: 'master_learner', title: 'Mestre Aprendiz', description: 'Complete 1000 blocos', icon: 'fa-user-graduate', condition: { type: 'blocks', value: 1000 } },

    // Streak
    { id: 'consistent', title: 'Consistente', description: '7 dias seguidos', icon: 'fa-fire', condition: { type: 'streak', value: 7 } },
    { id: 'month_streak', title: 'Mes de Fogo', description: '30 dias seguidos', icon: 'fa-fire-alt', condition: { type: 'streak', value: 30 } },
    { id: 'quarter_streak', title: 'Trimestre Ardente', description: '90 dias seguidos', icon: 'fa-meteor', condition: { type: 'streak', value: 90 } },

    // Diario
    { id: 'marathoner', title: 'Maratonista', description: '15 blocos em um dia', icon: 'fa-running', condition: { type: 'daily', value: 15 } },
    { id: 'ultra_marathoner', title: 'Ultra Maratonista', description: '30 blocos em um dia', icon: 'fa-bolt', condition: { type: 'daily', value: 30 } },

    // Por materia
    { id: 'sociology_master', title: 'Sociologo', description: 'Complete Sociologia', icon: 'fa-users', condition: { type: 'subject_complete', value: 'sociology' } },
    { id: 'philosophy_master', title: 'Filosofo', description: 'Complete Filosofia', icon: 'fa-brain', condition: { type: 'subject_complete', value: 'philosophy' } },
    { id: 'politics_master', title: 'Politologo', description: 'Complete Politica', icon: 'fa-landmark', condition: { type: 'subject_complete', value: 'politics' } },
    { id: 'anthropology_master', title: 'Antropologo', description: 'Complete Antropologia', icon: 'fa-globe-americas', condition: { type: 'subject_complete', value: 'anthropology' } },
    { id: 'brazil_historian', title: 'Brasilianista', description: 'Complete Historia do Brasil', icon: 'fa-flag', condition: { type: 'subject_complete', value: 'brazil-history' } },
    { id: 'world_historian', title: 'Historiador Mundial', description: 'Complete Historia do Mundo', icon: 'fa-globe', condition: { type: 'subject_complete', value: 'world-history' } },

    // Especiais
    { id: 'polymath', title: 'Polimata', description: 'Complete 3 materias', icon: 'fa-infinity', condition: { type: 'subjects_complete', value: 3 } },
    { id: 'renaissance', title: 'Renascentista', description: 'Complete todas as materias', icon: 'fa-crown', condition: { type: 'all_complete', value: true } },

    // XP
    { id: 'xp_1k', title: 'Primeiro Mil', description: 'Alcance 1.000 XP', icon: 'fa-star', condition: { type: 'xp', value: 1000 } },
    { id: 'xp_10k', title: 'Dez Mil', description: 'Alcance 10.000 XP', icon: 'fa-star-half-alt', condition: { type: 'xp', value: 10000 } },
    { id: 'xp_50k', title: 'Cinquenta Mil', description: 'Alcance 50.000 XP', icon: 'fa-stars', condition: { type: 'xp', value: 50000 } },
    { id: 'xp_100k', title: 'Cem Mil', description: 'Alcance 100.000 XP', icon: 'fa-sparkles', condition: { type: 'xp', value: 100000 } }
];

// ==========================================
// DADOS DAS MATERIAS - REFERENCIA GLOBAL
// ==========================================

const SUBJECT_DATA = {};

// ==========================================
// FUNCOES UTILITARIAS
// ==========================================

function getSubject(subjectId) {
    return SUBJECTS.find(s => s.id === subjectId);
}

function getSubjectData(subjectId) {
    // Primeiro tentar pegar dados carregados
    if (SUBJECT_DATA[subjectId]) {
        return SUBJECT_DATA[subjectId];
    }

    // Se nao existe, gerar dinamicamente
    if (typeof ContentGenerator !== 'undefined') {
        const generated = ContentGenerator.generateSubjectStructure(subjectId);
        if (generated) {
            SUBJECT_DATA[subjectId] = generated;
            return generated;
        }
    }

    return null;
}

function getTotalProgress() {
    let completed = 0;
    let total = 0;

    SUBJECTS.forEach(subject => {
        total += subject.totalBlocks;
        if (typeof state !== 'undefined' && state.subjects && state.subjects[subject.id]) {
            completed += state.subjects[subject.id].progress.completedBlocks.length;
        }
    });

    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
}

function generateBlocksForUnit(unitId, title, difficulty) {
    // Usar ContentGenerator se disponivel
    if (typeof ContentGenerator !== 'undefined') {
        const subjectId = getSubjectIdFromUnitId(unitId);
        const sectionId = Math.floor(unitId / 100);
        return ContentGenerator.generateBlocksForUnit(unitId, title, sectionId, subjectId, difficulty);
    }

    // Fallback para geracao simples
    const baseId = unitId * 100;
    const types = ['concept', 'reading', 'quiz', 'video', 'match', 'flashcard', 'reflection', 'timeline', 'order', 'fill', 'quiz', 'reading', 'concept', 'match', 'quiz'];

    return types.map((type, i) => ({
        id: baseId + i + 1,
        unitId: unitId,
        order: i + 1,
        type: type,
        title: `${BLOCK_TYPES[type].name}: ${title}`,
        difficulty: difficulty,
        xp: Math.round(BLOCK_TYPES[type].baseXP * (DIFFICULTY_LEVELS[difficulty]?.xpMultiplier || 1)),
        content: { generated: true, unitTitle: title }
    }));
}

function getSubjectIdFromUnitId(unitId) {
    if (typeof state !== 'undefined' && state.currentSubject) {
        return state.currentSubject;
    }
    return 'sociology';
}

// Inicializar dados das materias quando o ContentGenerator estiver disponivel
function initializeSubjectData() {
    if (typeof ContentGenerator !== 'undefined') {
        SUBJECTS.forEach(subject => {
            if (!SUBJECT_DATA[subject.id]) {
                const generated = ContentGenerator.generateSubjectStructure(subject.id);
                if (generated) {
                    SUBJECT_DATA[subject.id] = generated;
                }
            }
        });
        console.log('Dados das materias inicializados via ContentGenerator');
    }
}

setTimeout(initializeSubjectData, 100);

console.log('subjects.js carregado - SaberQuest v2.0');
