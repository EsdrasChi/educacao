// ==========================================
// EDULEARN - APP v4.0
// Plataforma Multi-Disciplinar de Aprendizado
// ==========================================

// Estado global da aplicação
let state = {
    currentSubject: null,
    globalUser: {
        name: ''
    },
    subjects: {}
};

// Inicializar estado para cada matéria
function initializeSubjectState(subjectId) {
    if (!state.subjects[subjectId]) {
        state.subjects[subjectId] = {
            user: {
                xp: 0,
                streak: 0,
                hearts: 5,
                level: 1,
                lastStudyDate: null
            },
            progress: {
                completedBlocks: [],
                completedUnits: [],
                completedSections: [],
                currentSection: null,
                currentUnit: null,
                currentBlock: null,
                currentBlockIndex: 0
            },
            achievements: [],
            dailyBlocks: 0,
            lastDailyReset: null
        };
    }
    return state.subjects[subjectId];
}

// Obter estado da matéria atual
function getCurrentSubjectState() {
    if (!state.currentSubject) return null;
    return initializeSubjectState(state.currentSubject);
}

// Obter dados da matéria atual
function getCurrentSubjectData() {
    if (!state.currentSubject) return null;
    return SUBJECT_DATA[state.currentSubject] || null;
}

// Variáveis de jogo
let currentQuizIndex = 0;
let quizCorrect = 0;
let matchPairs = [];
let selectedMatch = null;
let orderItems = [];
let flashcardIndex = 0;
let isFlipped = false;
let selectedQuizAnswer = null;

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔍 DOMContentLoaded - Iniciando app');
    console.log('🔍 SUBJECTS disponível:', typeof SUBJECTS !== 'undefined' ? SUBJECTS.length + ' matérias' : 'NÃO DEFINIDO');
    try {
        loadProgress();
        console.log('🔍 loadProgress() concluído');
        checkDailyReset();
        console.log('✅ App inicializado com sucesso');
    } catch (error) {
        console.error('❌ Erro na inicialização:', error);
    }
});

function checkDailyReset() {
    const today = new Date().toDateString();
    SUBJECTS.forEach(subject => {
        const subjectState = state.subjects[subject.id];
        if (subjectState && subjectState.lastDailyReset !== today) {
            subjectState.dailyBlocks = 0;
            subjectState.lastDailyReset = today;
        }
    });
    saveProgress();
}

// ==========================================
// NAVEGAÇÃO
// ==========================================
function showScreen(screenId) {
    console.log('🔍 showScreen() chamada com:', screenId);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
        console.log('✅ Tela ativada:', screenId);
    } else {
        console.error('❌ Tela não encontrada:', screenId);
    }
}

function startJourney() {
    console.log('🔍 startJourney() chamada');
    try {
        const username = document.getElementById('username').value.trim();
        state.globalUser.name = username || 'Estudante';
        console.log('🔍 Nome do usuário:', state.globalUser.name);
        saveProgress();
        console.log('🔍 Progresso salvo');
        showSubjectSelection();
        console.log('✅ startJourney() concluída');
    } catch (error) {
        console.error('❌ Erro em startJourney():', error);
        alert('Erro: ' + error.message);
    }
}

function continueJourney() {
    loadProgress();
    if (state.globalUser.name) {
        showSubjectSelection();
    } else {
        showScreen('login-screen');
    }
}

// ==========================================
// SELEÇÃO DE MATÉRIAS
// ==========================================
function showSubjectSelection() {
    showScreen('subject-selection-screen');
    renderSubjects();
}

function renderSubjects() {
    console.log('🔍 renderSubjects() chamada');
    const container = document.getElementById('subjects-container');
    console.log('🔍 Container:', container);
    console.log('🔍 SUBJECTS:', SUBJECTS);
    if (!container) {
        console.error('❌ Container subjects-container não encontrado!');
        return;
    }

    let html = '';

    SUBJECTS.forEach(subject => {
        const subjectState = state.subjects[subject.id];
        const completedBlocks = subjectState ? subjectState.progress.completedBlocks.length : 0;
        const totalBlocks = subject.totalBlocks;
        const progress = Math.round((completedBlocks / totalBlocks) * 100);
        const level = subjectState ? calculateLevelForSubject(subjectState) : 1;
        const xp = subjectState ? subjectState.user.xp : 0;

        html += `
            <div class="subject-card" onclick="selectSubject('${subject.id}')" style="--subject-color: ${subject.color}">
                <div class="subject-icon" style="background: ${subject.color}">
                    <i class="fas ${subject.icon}"></i>
                </div>
                <div class="subject-info">
                    <h3>${subject.name}</h3>
                    <p>${subject.subtitle}</p>
                    <div class="subject-progress">
                        <div class="subject-progress-bar">
                            <div class="subject-progress-fill" style="width: ${progress}%; background: ${subject.color}"></div>
                        </div>
                        <span class="subject-progress-text">${progress}%</span>
                    </div>
                    <div class="subject-stats">
                        <span><i class="fas fa-star"></i> ${xp} XP</span>
                        <span><i class="fas fa-trophy"></i> Nível ${level}</span>
                        <span><i class="fas fa-book"></i> ${completedBlocks}/${totalBlocks}</span>
                    </div>
                </div>
                <div class="subject-arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;
    });

    console.log('🔍 HTML gerado, tamanho:', html.length);
    container.innerHTML = html;
    console.log('✅ renderSubjects() concluída');
}

function selectSubject(subjectId) {
    state.currentSubject = subjectId;
    initializeSubjectState(subjectId);
    saveProgress();
    showMainScreen();
}

function backToSubjects() {
    state.currentSubject = null;
    showSubjectSelection();
}

// ==========================================
// TELA PRINCIPAL DA MATÉRIA
// ==========================================
function showMainScreen() {
    showScreen('main-screen');

    const subject = getSubject(state.currentSubject);
    if (subject) {
        // Atualizar header com info da matéria
        const subjectIndicator = document.getElementById('current-subject-indicator');
        if (subjectIndicator) {
            subjectIndicator.innerHTML = `
                <div class="current-subject" onclick="backToSubjects()" style="cursor: pointer;">
                    <i class="fas ${subject.icon}" style="color: ${subject.color}"></i>
                    <span>${subject.name}</span>
                    <i class="fas fa-exchange-alt" style="font-size: 12px; opacity: 0.7;"></i>
                </div>
            `;
        }
    }

    renderSections();
    updateStats();
    checkStreak();
}

function backToMain() {
    showScreen('main-screen');
    renderSections();
}

// ==========================================
// RENDERIZAÇÃO DAS SEÇÕES
// ==========================================
function renderSections() {
    const container = document.getElementById('sections-container');
    if (!container) return;

    const subjectData = getCurrentSubjectData();
    const subjectState = getCurrentSubjectState();
    const subject = getSubject(state.currentSubject);

    if (!subjectData || !subjectState || !subject) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Conteúdo em desenvolvimento...</p>';
        return;
    }

    const sections = subjectData.SECTIONS || [];
    const totalBlocks = subject.totalBlocks;
    const completedBlocks = subjectState.progress.completedBlocks.length;
    const overallProgress = Math.round((completedBlocks / totalBlocks) * 100);

    document.getElementById('overall-progress').style.width = `${overallProgress}%`;
    document.getElementById('progress-text').textContent = `${overallProgress}% concluído`;

    let html = '';

    sections.forEach((section, index) => {
        const isUnlocked = index === 0 || subjectState.progress.completedSections.includes(sections[index - 1].id);
        const isCompleted = subjectState.progress.completedSections.includes(section.id);
        const sectionProgress = calculateSectionProgress(section.id);
        const difficulty = DIFFICULTY_LEVELS[section.difficulty] || DIFFICULTY_LEVELS[1];

        html += `
            <div class="section-card ${isUnlocked ? '' : 'locked'} ${isCompleted ? 'completed' : ''}"
                 onclick="${isUnlocked ? `openSection(${section.id})` : 'showLockedMessage()'}">
                <div class="section-icon" style="background: ${section.color || subject.color}">
                    <i class="fas ${section.icon || subject.icon}"></i>
                </div>
                <div class="section-info">
                    <h3>${section.title}</h3>
                    <p>${section.subtitle}</p>
                    <div class="section-progress-bar">
                        <div class="section-progress-fill" style="width: ${sectionProgress}%; background: ${section.color || subject.color}"></div>
                    </div>
                    <div class="section-meta">
                        <span><i class="fas fa-book"></i> 10 unidades</span>
                        <span class="difficulty-tag" style="background: ${difficulty.color}20; color: ${difficulty.color}">
                            ${difficulty.name}
                        </span>
                    </div>
                </div>
                <div class="section-status">
                    ${isCompleted ? '<i class="fas fa-check-circle" style="color: var(--primary)"></i>' :
                      (isUnlocked ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-lock"></i>')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function showLockedMessage() {
    showFeedback(false, 'Complete a seção anterior primeiro!');
}

function calculateSectionProgress(sectionId) {
    const subjectData = getCurrentSubjectData();
    const subjectState = getCurrentSubjectState();
    if (!subjectData || !subjectState) return 0;

    const units = subjectData.UNITS[sectionId] || [];
    const totalBlocks = units.length * 15;
    if (totalBlocks === 0) return 0;

    let completed = 0;
    units.forEach(unit => {
        for (let i = 1; i <= 15; i++) {
            const blockId = unit.id * 100 + i;
            if (subjectState.progress.completedBlocks.includes(blockId)) {
                completed++;
            }
        }
    });

    return Math.round((completed / totalBlocks) * 100);
}

// ==========================================
// TELA DE SEÇÃO (UNIDADES)
// ==========================================
function openSection(sectionId) {
    const subjectData = getCurrentSubjectData();
    const subjectState = getCurrentSubjectState();
    const subject = getSubject(state.currentSubject);

    if (!subjectData) return;

    const section = subjectData.SECTIONS.find(s => s.id === sectionId);
    if (!section) return;

    subjectState.progress.currentSection = sectionId;
    showScreen('section-screen');

    const headerBg = document.getElementById('section-header-bg');
    const sectionColor = section.color || subject.color;
    headerBg.style.background = `linear-gradient(135deg, ${sectionColor}, ${adjustColor(sectionColor, -30)})`;

    document.getElementById('section-title').textContent = section.title;
    document.getElementById('section-subtitle').textContent = section.subtitle;
    document.getElementById('section-icon').className = `fas ${section.icon || subject.icon}`;
    document.getElementById('section-icon').style.color = 'white';

    renderUnits(sectionId);
}

function renderUnits(sectionId) {
    const container = document.getElementById('units-container');
    const subjectData = getCurrentSubjectData();
    const subjectState = getCurrentSubjectState();
    const subject = getSubject(state.currentSubject);

    if (!subjectData || !subjectState) return;

    const units = subjectData.UNITS[sectionId] || [];
    const section = subjectData.SECTIONS.find(s => s.id === sectionId);

    let html = '';

    units.forEach((unit, index) => {
        const isUnlocked = index === 0 || subjectState.progress.completedUnits.includes(units[index - 1].id);
        const isCompleted = subjectState.progress.completedUnits.includes(unit.id);
        const unitProgress = calculateUnitProgress(unit.id);
        const sectionColor = section?.color || subject.color;

        html += `
            <div class="unit-card ${isUnlocked ? '' : 'locked'} ${isCompleted ? 'completed' : ''}"
                 onclick="${isUnlocked ? `openUnit(${unit.id})` : ''}">
                <div class="unit-number" style="${isCompleted ? `background: ${sectionColor}; border-color: ${sectionColor}; color: white` : ''}">
                    ${isCompleted ? '<i class="fas fa-check"></i>' : (isUnlocked ? unit.order : '<i class="fas fa-lock"></i>')}
                </div>
                <div class="unit-info">
                    <h4>${unit.title}</h4>
                    <p>${unit.subtitle}</p>
                    <div class="unit-progress">
                        <div class="unit-progress-bar">
                            <div class="unit-progress-fill" style="width: ${unitProgress}%; background: ${sectionColor}"></div>
                        </div>
                        <span class="unit-progress-text">${unitProgress}%</span>
                    </div>
                </div>
                <div class="unit-status">
                    ${isCompleted ? '<i class="fas fa-check-circle" style="color: var(--primary)"></i>' :
                      (isUnlocked ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-lock"></i>')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function calculateUnitProgress(unitId) {
    const subjectState = getCurrentSubjectState();
    if (!subjectState) return 0;

    let completed = 0;
    for (let i = 1; i <= 15; i++) {
        const blockId = unitId * 100 + i;
        if (subjectState.progress.completedBlocks.includes(blockId)) {
            completed++;
        }
    }
    return Math.round((completed / 15) * 100);
}

function backToSections() {
    showScreen('main-screen');
    renderSections();
}

// ==========================================
// TELA DE UNIDADE (BLOCOS)
// ==========================================
function openUnit(unitId) {
    const subjectData = getCurrentSubjectData();
    const subjectState = getCurrentSubjectState();
    const subject = getSubject(state.currentSubject);

    if (!subjectData || !subjectState) return;

    const sectionId = Math.floor(unitId / 100);
    const section = subjectData.SECTIONS.find(s => s.id === sectionId);
    const units = subjectData.UNITS[sectionId] || [];
    const unit = units.find(u => u.id === unitId);
    if (!unit) return;

    subjectState.progress.currentUnit = unitId;
    showScreen('unit-screen');

    const headerBg = document.getElementById('unit-header-bg');
    const sectionColor = section?.color || subject.color;
    headerBg.style.background = `linear-gradient(135deg, ${sectionColor}, ${adjustColor(sectionColor, -30)})`;
    document.getElementById('unit-title').textContent = unit.title;

    renderBlocks(unitId, section || subject);
}

function renderBlocks(unitId, section) {
    const container = document.getElementById('blocks-container');
    const subjectState = getCurrentSubjectState();
    const blocks = getBlocksForUnit(unitId);

    let html = '<div class="blocks-path">';

    blocks.forEach((block, index) => {
        const isCompleted = subjectState.progress.completedBlocks.includes(block.id);
        const prevCompleted = index === 0 || subjectState.progress.completedBlocks.includes(blocks[index - 1].id);
        const isUnlocked = index === 0 || prevCompleted;
        const isCurrent = isUnlocked && !isCompleted;
        const blockType = BLOCK_TYPES[block.type];

        html += `
            <div class="block-node ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${!isUnlocked ? 'locked' : ''}"
                 onclick="${isUnlocked ? `startBlock(${block.id})` : ''}">
                <div class="block-icon ${block.type}" style="${isCompleted ? 'background: var(--primary); border-color: var(--primary)' : ''}">
                    <i class="fas ${blockType.icon}"></i>
                </div>
                <span class="block-label">${blockType.name}</span>
                <span class="block-xp">+${block.xp} XP</span>
            </div>
        `;

        if (index < blocks.length - 1) {
            html += `<div class="path-line ${isCompleted ? 'completed' : ''}"></div>`;
        }
    });

    html += '</div>';
    container.innerHTML = html;
}

function getBlocksForUnit(unitId) {
    const subjectData = getCurrentSubjectData();

    if (subjectData && subjectData.ALL_BLOCKS && subjectData.ALL_BLOCKS[unitId]) {
        return subjectData.ALL_BLOCKS[unitId];
    }

    // Gerar blocos automaticamente se não existirem
    const sectionId = Math.floor(unitId / 100);
    const subject = getSubject(state.currentSubject);

    if (subjectData) {
        const section = subjectData.SECTIONS?.find(s => s.id === sectionId);
        const units = subjectData.UNITS?.[sectionId] || [];
        const unit = units.find(u => u.id === unitId);

        if (unit && section) {
            return generateBlocksForUnit(unitId, unit.title, section.difficulty);
        }
    }

    return generateBlocksForUnit(unitId, 'Conteúdo', 1);
}

function backToUnits() {
    const subjectState = getCurrentSubjectState();
    if (!subjectState) return;
    const sectionId = subjectState.progress.currentSection;
    openSection(sectionId);
}

// ==========================================
// EXECUTAR BLOCO
// ==========================================
function startBlock(blockId) {
    const subjectState = getCurrentSubjectState();
    const subject = getSubject(state.currentSubject);
    const unitId = Math.floor(blockId / 100);
    const blocks = getBlocksForUnit(unitId);
    const block = blocks.find(b => b.id === blockId);
    if (!block || !subjectState) return;

    subjectState.progress.currentBlock = block;
    subjectState.progress.currentBlockIndex = blocks.indexOf(block);
    subjectState.user.hearts = 5;

    showScreen('block-screen');

    const sectionId = Math.floor(unitId / 100);
    const subjectData = getCurrentSubjectData();
    const section = subjectData?.SECTIONS?.find(s => s.id === sectionId);
    document.getElementById('block-header-bg').style.background = section?.color || subject.color;

    document.getElementById('hearts-count').textContent = subjectState.user.hearts;
    document.getElementById('block-action-btn').style.display = 'block';
    document.getElementById('block-action-btn').disabled = false;

    renderBlockContent(block);
    updateBlockProgress();
}

function renderBlockContent(block) {
    const container = document.getElementById('block-content');

    // Se o conteúdo foi gerado automaticamente, criar conteúdo padrão
    if (block.content.generated) {
        renderGeneratedBlock(container, block);
        return;
    }

    switch (block.type) {
        case 'concept':
            renderConcept(container, block);
            break;
        case 'video':
            renderVideo(container, block);
            break;
        case 'quiz':
            currentQuizIndex = 0;
            quizCorrect = 0;
            renderQuiz(container, block);
            break;
        case 'reading':
            renderReading(container, block);
            break;
        case 'match':
            renderMatch(container, block);
            break;
        case 'fill':
            renderFill(container, block);
            break;
        case 'flashcard':
            flashcardIndex = 0;
            isFlipped = false;
            renderFlashcard(container, block);
            break;
        case 'order':
            renderOrder(container, block);
            break;
        case 'reflection':
            renderReflection(container, block);
            break;
        case 'timeline':
            renderTimeline(container, block);
            break;
        default:
            renderGeneratedBlock(container, block);
    }
}

// ==========================================
// BLOCO GERADO AUTOMATICAMENTE
// ==========================================
function renderGeneratedBlock(container, block) {
    const blockType = BLOCK_TYPES[block.type];
    const unitTitle = block.content.unitTitle || block.title;

    container.innerHTML = `
        <div class="concept-block animate-in">
            <div class="block-type-header" style="text-align: center; margin-bottom: 24px;">
                <div class="block-type-icon" style="width: 80px; height: 80px; border-radius: 50%; background: var(--bg-card); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 32px;">
                    <i class="fas ${blockType.icon}"></i>
                </div>
                <h2>${blockType.name}</h2>
                <p style="color: var(--text-secondary);">${unitTitle}</p>
            </div>
            <div class="concept-content" style="background: var(--bg-card); padding: 24px; border-radius: 16px;">
                <p style="text-align: center; color: var(--text-secondary); line-height: 1.8;">
                    Este é um bloco de <strong>${blockType.name}</strong> sobre o tema "${unitTitle}".
                    <br><br>
                    O conteúdo completo será adicionado em breve. Por enquanto, você pode continuar para ganhar XP e avançar no curso.
                </p>
            </div>
            <div class="xp-preview" style="text-align: center; margin-top: 20px; padding: 16px; background: rgba(88, 204, 2, 0.1); border-radius: 12px;">
                <i class="fas fa-star" style="color: var(--primary); margin-right: 8px;"></i>
                <span style="font-weight: 700; color: var(--primary);">+${block.xp} XP</span>
            </div>
        </div>
    `;

    document.getElementById('block-action-btn').textContent = 'Continuar';
    document.getElementById('block-action-btn').onclick = () => completeBlock();
}

// ==========================================
// TIPOS DE BLOCO: CONCEITO
// ==========================================
function renderConcept(container, block) {
    const c = block.content;
    container.innerHTML = `
        <div class="concept-block animate-in">
            ${c.image ? `<img src="${c.image}" alt="${c.title}" class="concept-image" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">` : ''}
            <h2 class="concept-title">${c.title}</h2>
            <div class="concept-content">
                <p style="line-height: 1.8; color: var(--text-secondary);">${c.text}</p>
                ${c.keyPoints ? `
                    <div class="key-points" style="margin-top: 20px; padding: 16px; background: rgba(88, 204, 2, 0.1); border-radius: 12px; border-left: 4px solid var(--primary);">
                        <h4 style="color: var(--primary); margin-bottom: 12px;"><i class="fas fa-key"></i> Pontos-chave:</h4>
                        <ul style="padding-left: 20px;">
                            ${c.keyPoints.map(p => `<li style="margin-bottom: 8px; color: var(--text-secondary);">${p}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    document.getElementById('block-action-btn').textContent = 'Entendi!';
    document.getElementById('block-action-btn').onclick = () => completeBlock();
}

// ==========================================
// TIPOS DE BLOCO: VÍDEO
// ==========================================
function renderVideo(container, block) {
    const c = block.content;
    container.innerHTML = `
        <div class="video-block animate-in">
            <div class="video-container">
                <div class="video-placeholder">
                    <i class="fas fa-play-circle" style="font-size: 64px; color: var(--danger);"></i>
                    <span>Clique para assistir</span>
                </div>
                <div class="video-info" style="margin-top: 16px;">
                    <h3>${c.title}</h3>
                    ${c.director ? `<p style="color: var(--secondary); margin-bottom: 8px;">Dir: ${c.director}</p>` : ''}
                    <p style="color: var(--text-secondary); line-height: 1.6;">${c.description}</p>
                    <div style="margin-top: 12px; color: var(--text-muted);">
                        <i class="fas fa-clock"></i> ${c.duration}
                    </div>
                </div>
                <a href="${c.videoUrl}" target="_blank" class="video-link" style="display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; padding: 12px 24px; background: var(--danger); color: white; text-decoration: none; border-radius: 12px; font-weight: 600;">
                    <i class="fas fa-play"></i> Assistir
                </a>
                ${c.amazonLink ? `
                    <a href="${c.amazonLink}" target="_blank" class="amazon-link" style="display: inline-flex; align-items: center; gap: 8px; margin-top: 8px; margin-left: 8px; padding: 12px 24px; background: #FF9900; color: white; text-decoration: none; border-radius: 12px; font-weight: 600;">
                        <i class="fab fa-amazon"></i> Comprar na Amazon
                    </a>
                ` : ''}
            </div>
            ${c.reflectionQuestions ? `
                <div style="margin-top: 20px; padding: 16px; background: var(--bg-card); border-radius: 12px;">
                    <h4 style="margin-bottom: 12px;"><i class="fas fa-brain"></i> Reflita sobre:</h4>
                    <ul style="padding-left: 20px;">
                        ${c.reflectionQuestions.map(q => `<li style="margin-bottom: 8px; color: var(--text-secondary);">${q}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
    document.getElementById('block-action-btn').textContent = 'Assistido!';
    document.getElementById('block-action-btn').onclick = () => completeBlock();
}

// ==========================================
// TIPOS DE BLOCO: QUIZ
// ==========================================
function renderQuiz(container, block) {
    const questions = block.content.questions;
    if (currentQuizIndex >= questions.length) {
        showQuizResults(block);
        return;
    }

    const q = questions[currentQuizIndex];
    container.innerHTML = `
        <div class="quiz-block animate-in">
            <div class="quiz-progress" style="text-align: center; margin-bottom: 20px; color: var(--text-muted);">
                Questão ${currentQuizIndex + 1} de ${questions.length}
            </div>
            <div class="quiz-question">
                <h3>${q.question}</h3>
            </div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <button class="quiz-option" onclick="selectQuizOption(this, ${i}, ${q.correct})">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('block-action-btn').textContent = 'Verificar';
    document.getElementById('block-action-btn').disabled = true;
    document.getElementById('block-action-btn').onclick = () => {};
}

function selectQuizOption(element, index, correct) {
    document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    element.classList.add('selected');
    selectedQuizAnswer = index;
    document.getElementById('block-action-btn').disabled = false;
    document.getElementById('block-action-btn').onclick = () => checkQuizAnswer(index, correct);
}

function checkQuizAnswer(selected, correct) {
    const subjectState = getCurrentSubjectState();
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        opt.onclick = null;
        if (i === correct) {
            opt.classList.add('correct');
        } else if (i === selected && selected !== correct) {
            opt.classList.add('incorrect');
        }
    });

    if (selected === correct) {
        quizCorrect++;
        showFeedback(true, 'Correto!');
    } else {
        subjectState.user.hearts--;
        document.getElementById('hearts-count').textContent = subjectState.user.hearts;
        showFeedback(false, 'Incorreto!');
    }

    setTimeout(() => {
        currentQuizIndex++;
        const block = subjectState.progress.currentBlock;
        renderQuiz(document.getElementById('block-content'), block);
    }, 1500);
}

function showQuizResults(block) {
    const total = block.content.questions.length;
    const accuracy = Math.round((quizCorrect / total) * 100);
    const container = document.getElementById('block-content');

    container.innerHTML = `
        <div class="quiz-results animate-in" style="text-align: center;">
            <div class="results-icon" style="width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 48px; ${accuracy >= 70 ? 'background: var(--primary); color: white;' : 'background: var(--danger); color: white;'}">
                <i class="fas ${accuracy >= 70 ? 'fa-trophy' : 'fa-redo'}"></i>
            </div>
            <h2>${accuracy >= 70 ? 'Parabéns!' : 'Continue tentando!'}</h2>
            <div class="results-stats" style="display: flex; justify-content: center; gap: 40px; margin: 24px 0;">
                <div class="stat">
                    <div style="font-size: 32px; font-weight: 800; color: var(--primary);">${quizCorrect}/${total}</div>
                    <div style="color: var(--text-muted);">Corretas</div>
                </div>
                <div class="stat">
                    <div style="font-size: 32px; font-weight: 800; color: var(--secondary);">${accuracy}%</div>
                    <div style="color: var(--text-muted);">Precisão</div>
                </div>
            </div>
        </div>
    `;

    if (accuracy >= 70) {
        document.getElementById('block-action-btn').textContent = 'Continuar';
        document.getElementById('block-action-btn').onclick = () => completeBlock();
    } else {
        document.getElementById('block-action-btn').textContent = 'Tentar Novamente';
        document.getElementById('block-action-btn').onclick = () => {
            currentQuizIndex = 0;
            quizCorrect = 0;
            renderQuiz(container, block);
        };
    }
    document.getElementById('block-action-btn').disabled = false;
}

// ==========================================
// TIPOS DE BLOCO: LEITURA
// ==========================================
function renderReading(container, block) {
    const c = block.content;
    container.innerHTML = `
        <div class="reading-block animate-in">
            <div class="reading-header-block">
                <div class="reading-icon-large">
                    <i class="fas fa-book-open"></i>
                </div>
                <div class="reading-header-info">
                    <h3>${c.title}</h3>
                    ${c.author ? `<p>por ${c.author}</p>` : ''}
                </div>
            </div>
            <div class="reading-content-area">
                ${c.text.split('\n').map(p => `<p>${p}</p>`).join('')}
            </div>
            ${c.keyPoints ? `
                <div style="padding: 16px; background: rgba(88, 204, 2, 0.1); border-radius: 12px; margin-top: 16px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px;"><i class="fas fa-bookmark"></i> Resumo:</h4>
                    <ul style="padding-left: 20px;">
                        ${c.keyPoints.map(p => `<li style="color: var(--text-secondary); margin-bottom: 4px;">${p}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${c.amazonLink ? `
                <a href="${c.amazonLink}" target="_blank" class="amazon-link" style="display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; padding: 12px 24px; background: #FF9900; color: white; text-decoration: none; border-radius: 12px; font-weight: 600;">
                    <i class="fab fa-amazon"></i> Comprar na Amazon
                </a>
            ` : ''}
            <div style="margin-top: 16px; color: var(--text-muted); font-size: 14px;">
                <i class="fas fa-clock"></i> ${c.timeToRead || '5 min'}
            </div>
        </div>
    `;
    document.getElementById('block-action-btn').textContent = 'Leitura Concluída';
    document.getElementById('block-action-btn').onclick = () => completeBlock();
}

// ==========================================
// TIPOS DE BLOCO: COMBINAÇÃO (MATCH)
// ==========================================
function renderMatch(container, block) {
    const pairs = block.content.pairs;
    matchPairs = pairs.map((p, i) => ({ id: i, left: p.left, right: p.right, matched: false }));
    selectedMatch = null;

    const shuffledRight = [...matchPairs].sort(() => Math.random() - 0.5);

    container.innerHTML = `
        <div class="match-block animate-in">
            <h3 class="match-title">Combine os pares</h3>
            <p class="match-instruction">${block.content.instructions || 'Conecte cada item da esquerda com seu par correto à direita.'}</p>
            <div class="match-columns">
                <div class="match-column">
                    <h4>Conceitos</h4>
                    <div class="match-items">
                        ${matchPairs.map(p => `
                            <div class="match-item" data-id="${p.id}" data-side="left" onclick="selectMatchItem(this, 'left', ${p.id})">
                                ${p.left}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="match-column">
                    <h4>Definições</h4>
                    <div class="match-items">
                        ${shuffledRight.map(p => `
                            <div class="match-item" data-id="${p.id}" data-side="right" onclick="selectMatchItem(this, 'right', ${p.id})">
                                ${p.right}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('block-action-btn').textContent = 'Combine todos';
    document.getElementById('block-action-btn').disabled = true;
}

function selectMatchItem(element, side, id) {
    if (element.classList.contains('matched')) return;
    const subjectState = getCurrentSubjectState();

    // Desselecionar itens do mesmo lado
    document.querySelectorAll(`.match-item[data-side="${side}"]`).forEach(i => i.classList.remove('selected'));
    element.classList.add('selected');

    if (!selectedMatch) {
        selectedMatch = { side, id, element };
    } else if (selectedMatch.side !== side) {
        if (selectedMatch.id === id) {
            element.classList.add('matched');
            selectedMatch.element.classList.add('matched');
            element.classList.remove('selected');
            selectedMatch.element.classList.remove('selected');
            matchPairs.find(p => p.id === id).matched = true;
            showFeedback(true, 'Correto!');

            if (matchPairs.every(p => p.matched)) {
                setTimeout(() => completeBlock(), 1000);
            }
        } else {
            element.classList.add('wrong');
            selectedMatch.element.classList.add('wrong');
            subjectState.user.hearts--;
            document.getElementById('hearts-count').textContent = subjectState.user.hearts;
            showFeedback(false, 'Incorreto!');

            setTimeout(() => {
                element.classList.remove('wrong', 'selected');
                selectedMatch.element.classList.remove('wrong', 'selected');
            }, 500);
        }
        selectedMatch = null;
    }
}

// ==========================================
// TIPOS DE BLOCO: COMPLETE (FILL)
// ==========================================
function renderFill(container, block) {
    const sentences = block.content.sentences;
    container.innerHTML = `
        <div class="fill-block animate-in">
            <h3 class="fill-title">Complete as frases</h3>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 24px;">${block.content.instructions || 'Escolha a palavra correta para cada lacuna.'}</p>
            <div class="fill-sentences">
                ${sentences.map((s, i) => `
                    <div class="fill-sentence" style="background: var(--bg-card); padding: 20px; border-radius: 12px; margin-bottom: 16px;">
                        <p style="font-size: 16px; line-height: 1.8;">
                            ${s.text.replace('_____', `
                                <select class="fill-select" data-index="${i}" onchange="checkFillAnswers()" style="padding: 8px 16px; border: 2px solid var(--bg-hover); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 16px; font-family: inherit;">
                                    <option value="">Escolha...</option>
                                    ${s.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                                </select>
                            `)}
                        </p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('block-action-btn').textContent = 'Verificar';
    document.getElementById('block-action-btn').disabled = true;
}

function checkFillAnswers() {
    const selects = document.querySelectorAll('.fill-select');
    const allFilled = Array.from(selects).every(s => s.value !== '');
    document.getElementById('block-action-btn').disabled = !allFilled;

    if (allFilled) {
        document.getElementById('block-action-btn').onclick = () => {
            const subjectState = getCurrentSubjectState();
            const block = subjectState.progress.currentBlock;
            const sentences = block.content.sentences;
            let allCorrect = true;

            selects.forEach((select, i) => {
                if (select.value === sentences[i].answer) {
                    select.style.borderColor = 'var(--primary)';
                    select.style.background = 'rgba(88, 204, 2, 0.1)';
                } else {
                    select.style.borderColor = 'var(--danger)';
                    select.style.background = 'rgba(255, 75, 75, 0.1)';
                    allCorrect = false;
                }
                select.disabled = true;
            });

            if (allCorrect) {
                showFeedback(true, 'Todas corretas!');
                setTimeout(() => completeBlock(), 1500);
            } else {
                subjectState.user.hearts--;
                document.getElementById('hearts-count').textContent = subjectState.user.hearts;
                showFeedback(false, 'Algumas incorretas!');
                setTimeout(() => {
                    selects.forEach(s => {
                        s.style.borderColor = 'var(--bg-hover)';
                        s.style.background = 'var(--bg-secondary)';
                        s.disabled = false;
                        s.value = '';
                    });
                    document.getElementById('block-action-btn').disabled = true;
                }, 2000);
            }
        };
    }
}

// ==========================================
// TIPOS DE BLOCO: FLASHCARD
// ==========================================
function renderFlashcard(container, block) {
    const cards = block.content.cards;
    const card = cards[flashcardIndex];

    container.innerHTML = `
        <div class="flashcard-block animate-in">
            <p class="flashcard-instruction">Toque no card para virar</p>
            <div style="text-align: center; margin-bottom: 16px; color: var(--text-muted);">
                Card ${flashcardIndex + 1} de ${cards.length}
            </div>
            <div class="flashcard ${isFlipped ? 'flipped' : ''}" onclick="flipCard()">
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <h3>${card.front}</h3>
                        <p>Toque para ver a resposta</p>
                    </div>
                    <div class="flashcard-back">
                        <p>${card.back}</p>
                    </div>
                </div>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn didnt-know" onclick="nextCard()" ${flashcardIndex === 0 && !isFlipped ? 'disabled' : ''}>
                    ${flashcardIndex === cards.length - 1 ? 'Concluir' : 'Próximo'} <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    document.getElementById('block-action-btn').style.display = 'none';
}

function flipCard() {
    isFlipped = !isFlipped;
    document.querySelector('.flashcard').classList.toggle('flipped', isFlipped);
}

function nextCard() {
    const subjectState = getCurrentSubjectState();
    const block = subjectState.progress.currentBlock;
    if (flashcardIndex < block.content.cards.length - 1) {
        flashcardIndex++;
        isFlipped = false;
        renderFlashcard(document.getElementById('block-content'), block);
    } else {
        document.getElementById('block-action-btn').style.display = 'block';
        completeBlock();
    }
}

// ==========================================
// TIPOS DE BLOCO: ORDENAR
// ==========================================
function renderOrder(container, block) {
    orderItems = [...block.content.items].sort(() => Math.random() - 0.5);

    container.innerHTML = `
        <div class="order-block animate-in">
            <h3 class="order-title">Ordene corretamente</h3>
            <p class="order-instruction">${block.content.instructions || 'Arraste os itens para colocá-los na ordem correta.'}</p>
            <div class="order-list" id="order-list">
                ${orderItems.map((item, i) => `
                    <div class="order-item" draggable="true" data-order="${item.correctOrder}" data-index="${i}">
                        <span class="order-handle"><i class="fas fa-grip-vertical"></i></span>
                        <span class="order-number">${i + 1}</span>
                        <span class="order-text">${item.text}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    setupDragAndDrop();
    document.getElementById('block-action-btn').textContent = 'Verificar Ordem';
    document.getElementById('block-action-btn').onclick = () => checkOrder();
}

function setupDragAndDrop() {
    const list = document.getElementById('order-list');
    const items = list.querySelectorAll('.order-item');

    items.forEach(item => {
        item.addEventListener('dragstart', () => item.classList.add('dragging'));
        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            updateOrderNumbers();
        });
    });

    list.addEventListener('dragover', e => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(list, e.clientY);
        if (afterElement) {
            list.insertBefore(dragging, afterElement);
        } else {
            list.appendChild(dragging);
        }
    });
}

function getDragAfterElement(container, y) {
    const elements = [...container.querySelectorAll('.order-item:not(.dragging)')];
    return elements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        }
        return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateOrderNumbers() {
    const items = document.querySelectorAll('#order-list .order-item');
    items.forEach((item, index) => {
        item.querySelector('.order-number').textContent = index + 1;
    });
}

function checkOrder() {
    const subjectState = getCurrentSubjectState();
    const items = document.querySelectorAll('#order-list .order-item');
    let allCorrect = true;

    items.forEach((item, index) => {
        const correctOrder = parseInt(item.dataset.order);
        if (correctOrder === index + 1) {
            item.classList.add('correct');
        } else {
            item.classList.add('incorrect');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        showFeedback(true, 'Ordem correta!');
        setTimeout(() => completeBlock(), 1500);
    } else {
        subjectState.user.hearts--;
        document.getElementById('hearts-count').textContent = subjectState.user.hearts;
        showFeedback(false, 'Ordem incorreta!');
        setTimeout(() => {
            items.forEach(i => i.classList.remove('correct', 'incorrect'));
        }, 2000);
    }
}

// ==========================================
// TIPOS DE BLOCO: REFLEXÃO
// ==========================================
function renderReflection(container, block) {
    const c = block.content;
    container.innerHTML = `
        <div class="reflection-block animate-in">
            <h3 class="reflection-title"><i class="fas fa-brain"></i> Momento de Reflexão</h3>
            <div class="reflection-prompt">
                <p>${c.prompt}</p>
            </div>
            ${c.examples ? `
                <div style="margin: 16px 0; padding: 16px; background: var(--bg-card); border-radius: 12px;">
                    <strong style="color: var(--secondary);">Exemplos:</strong>
                    <ul style="padding-left: 20px; margin-top: 8px;">
                        ${c.examples.map(e => `<li style="color: var(--text-secondary); margin-bottom: 4px;">${e}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <textarea class="reflection-textarea" placeholder="Escreva sua reflexão aqui..."
                      oninput="checkReflectionLength(this, ${c.minWords || 30})"></textarea>
            <p style="text-align: center; margin-top: 8px; color: var(--text-muted);">
                Mínimo: <span id="word-count">0</span>/${c.minWords || 30} palavras
            </p>
        </div>
    `;
    document.getElementById('block-action-btn').textContent = 'Enviar Reflexão';
    document.getElementById('block-action-btn').disabled = true;
}

function checkReflectionLength(textarea, minWords) {
    const words = textarea.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    document.getElementById('word-count').textContent = words;
    document.getElementById('block-action-btn').disabled = words < minWords;
    document.getElementById('block-action-btn').onclick = () => completeBlock();
}

// ==========================================
// TIPOS DE BLOCO: TIMELINE
// ==========================================
function renderTimeline(container, block) {
    const events = block.content.events;
    container.innerHTML = `
        <div class="timeline-block animate-in">
            <h3 class="timeline-title">${block.content.title || 'Linha do Tempo'}</h3>
            <div class="timeline">
                ${events.map((event, i) => `
                    <div class="timeline-event">
                        <div class="timeline-marker"></div>
                        <span class="timeline-year">${event.year}</span>
                        <h4>${event.event}</h4>
                        <p>${event.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('block-action-btn').textContent = 'Continuar';
    document.getElementById('block-action-btn').onclick = () => completeBlock();
}

// ==========================================
// COMPLETAR BLOCO
// ==========================================
function completeBlock() {
    const subjectState = getCurrentSubjectState();
    const block = subjectState.progress.currentBlock;
    if (!block) return;

    if (!subjectState.progress.completedBlocks.includes(block.id)) {
        subjectState.progress.completedBlocks.push(block.id);
        subjectState.user.xp += block.xp;
        subjectState.dailyBlocks++;
        checkUnitCompletion(block.unitId);
        checkAchievements();
        saveProgress();
    }

    showBlockComplete(block);
}

function showBlockComplete(block) {
    document.getElementById('block-content').innerHTML = `
        <div class="block-complete animate-in" style="text-align: center;">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; animation: bounce 0.5s ease infinite alternate;">
                <i class="fas fa-check" style="font-size: 48px; color: white;"></i>
            </div>
            <h2>Bloco Concluído!</h2>
            <div class="xp-earned" style="margin: 24px 0;">
                <i class="fas fa-star" style="color: var(--warning);"></i>
                <span style="font-size: 28px; font-weight: 800; color: var(--primary);">+${block.xp} XP</span>
            </div>
        </div>
    `;

    document.getElementById('block-action-btn').textContent = 'Próximo';
    document.getElementById('block-action-btn').onclick = () => goToNextBlock();
    document.getElementById('block-action-btn').disabled = false;
    document.getElementById('block-action-btn').style.display = 'block';

    updateStats();
}

function goToNextBlock() {
    const subjectState = getCurrentSubjectState();
    const unitId = subjectState.progress.currentUnit;
    const blocks = getBlocksForUnit(unitId);
    const nextIndex = subjectState.progress.currentBlockIndex + 1;

    if (nextIndex < blocks.length) {
        startBlock(blocks[nextIndex].id);
    } else {
        backToUnits();
    }
}

function checkUnitCompletion(unitId) {
    const subjectState = getCurrentSubjectState();
    let allComplete = true;
    for (let i = 1; i <= 15; i++) {
        if (!subjectState.progress.completedBlocks.includes(unitId * 100 + i)) {
            allComplete = false;
            break;
        }
    }

    if (allComplete && !subjectState.progress.completedUnits.includes(unitId)) {
        subjectState.progress.completedUnits.push(unitId);
        checkSectionCompletion(Math.floor(unitId / 100));
    }
}

function checkSectionCompletion(sectionId) {
    const subjectState = getCurrentSubjectState();
    const subjectData = getCurrentSubjectData();
    if (!subjectData) return;

    const units = subjectData.UNITS[sectionId] || [];
    const allComplete = units.every(u => subjectState.progress.completedUnits.includes(u.id));

    if (allComplete && !subjectState.progress.completedSections.includes(sectionId)) {
        subjectState.progress.completedSections.push(sectionId);
    }
}

function exitBlock() {
    backToUnits();
}

function updateBlockProgress() {
    const subjectState = getCurrentSubjectState();
    const blocks = getBlocksForUnit(subjectState.progress.currentUnit);
    const progress = ((subjectState.progress.currentBlockIndex + 1) / blocks.length) * 100;
    document.getElementById('block-progress-fill').style.width = `${progress}%`;
}

// ==========================================
// FEEDBACK
// ==========================================
function showFeedback(isCorrect, message) {
    const container = document.getElementById('feedback-container');
    const feedback = document.createElement('div');
    feedback.className = `feedback-toast ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        <span>${message}</span>
    `;
    container.appendChild(feedback);

    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// ==========================================
// UTILITÁRIOS
// ==========================================
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return '#' + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function updateStats() {
    const subjectState = getCurrentSubjectState();
    if (!subjectState) return;

    document.getElementById('xp-count').textContent = subjectState.user.xp;
    document.getElementById('streak-count').textContent = subjectState.user.streak;
    document.getElementById('level-count').textContent = calculateLevelForSubject(subjectState);
}

function calculateLevelForSubject(subjectState) {
    const xp = subjectState.user.xp;
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].xpRequired) {
            return LEVELS[i].level;
        }
    }
    return 1;
}

function checkStreak() {
    const subjectState = getCurrentSubjectState();
    if (!subjectState) return;

    const today = new Date().toDateString();
    const lastStudy = subjectState.user.lastStudyDate;

    if (!lastStudy) {
        subjectState.user.streak = 1;
    } else if (lastStudy !== today) {
        const lastDate = new Date(lastStudy);
        const todayDate = new Date(today);
        const diffDays = Math.ceil((todayDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            subjectState.user.streak++;
        } else if (diffDays > 1) {
            subjectState.user.streak = 1;
        }
    }

    subjectState.user.lastStudyDate = today;
    saveProgress();
}

function checkAchievements() {
    const subjectState = getCurrentSubjectState();
    if (!subjectState) return;

    ACHIEVEMENTS.forEach(ach => {
        if (subjectState.achievements.includes(ach.id)) return;

        let unlocked = false;
        const condition = ach.condition;

        switch (condition.type) {
            case 'blocks':
                if (subjectState.progress.completedBlocks.length >= condition.value) unlocked = true;
                break;
            case 'daily':
                if (subjectState.dailyBlocks >= condition.value) unlocked = true;
                break;
            case 'streak':
                if (subjectState.user.streak >= condition.value) unlocked = true;
                break;
            case 'subject_complete':
                if (condition.value === state.currentSubject) {
                    const subject = getSubject(state.currentSubject);
                    if (subject && subjectState.progress.completedBlocks.length >= subject.totalBlocks) {
                        unlocked = true;
                    }
                }
                break;
            case 'subjects_complete':
                let completedSubjects = 0;
                SUBJECTS.forEach(s => {
                    const sState = state.subjects[s.id];
                    if (sState && sState.progress.completedBlocks.length >= s.totalBlocks) {
                        completedSubjects++;
                    }
                });
                if (completedSubjects >= condition.value) unlocked = true;
                break;
            case 'all_complete':
                let allComplete = true;
                SUBJECTS.forEach(s => {
                    const sState = state.subjects[s.id];
                    if (!sState || sState.progress.completedBlocks.length < s.totalBlocks) {
                        allComplete = false;
                    }
                });
                if (allComplete) unlocked = true;
                break;
        }

        if (unlocked) {
            subjectState.achievements.push(ach.id);
        }
    });
}

function saveProgress() {
    localStorage.setItem('edulearn_state', JSON.stringify(state));
}

function loadProgress() {
    const saved = localStorage.getItem('edulearn_state');
    if (saved) {
        state = JSON.parse(saved);
    }

    // Migrar dados antigos do SocioLearn se existirem
    const oldSaved = localStorage.getItem('sociolearn_state');
    if (oldSaved && !saved) {
        const oldState = JSON.parse(oldSaved);
        state.globalUser.name = oldState.user?.name || '';
        state.subjects.sociology = {
            user: {
                xp: oldState.user?.xp || 0,
                streak: oldState.user?.streak || 0,
                hearts: oldState.user?.hearts || 5,
                level: 1,
                lastStudyDate: oldState.user?.lastStudyDate || null
            },
            progress: oldState.progress || {
                completedBlocks: [],
                completedUnits: [],
                completedSections: [],
                currentSection: null,
                currentUnit: null,
                currentBlock: null,
                currentBlockIndex: 0
            },
            achievements: oldState.achievements || [],
            dailyBlocks: oldState.dailyBlocks || 0,
            lastDailyReset: oldState.lastDailyReset || null
        };
        saveProgress();
    }
}

function resetProgress() {
    if (confirm('Tem certeza que deseja reiniciar TODO o progresso de TODAS as matérias? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('edulearn_state');
        localStorage.removeItem('sociolearn_state');
        state = {
            currentSubject: null,
            globalUser: { name: '' },
            subjects: {}
        };
        showScreen('login-screen');
    }
}

function resetSubjectProgress() {
    const subject = getSubject(state.currentSubject);
    if (!subject) return;

    if (confirm(`Tem certeza que deseja reiniciar o progresso de ${subject.name}? Esta ação não pode ser desfeita.`)) {
        state.subjects[state.currentSubject] = null;
        initializeSubjectState(state.currentSubject);
        saveProgress();
        showMainScreen();
    }
}

// ==========================================
// PERFIL
// ==========================================
function showProfile() {
    showScreen('profile-screen');
    renderProfile();
}

function renderProfile() {
    const subjectState = getCurrentSubjectState();
    const subject = getSubject(state.currentSubject);

    if (!subjectState || !subject) {
        // Mostrar perfil global
        renderGlobalProfile();
        return;
    }

    const level = calculateLevelForSubject(subjectState);
    const levelInfo = LEVELS.find(l => l.level === level) || LEVELS[0];
    const nextLevel = LEVELS.find(l => l.level === level + 1);

    document.getElementById('profile-container').innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar" style="background: ${subject.color}">
                <i class="fas ${subject.icon}"></i>
            </div>
            <h2 class="profile-name">${state.globalUser.name || 'Estudante'}</h2>
            <p class="profile-level">${subject.name} - Nível ${level} - ${levelInfo.title}</p>
        </div>

        ${nextLevel ? `
            <div style="background: var(--bg-card); padding: 20px; border-radius: 16px; margin-bottom: 20px;">
                <p style="margin-bottom: 12px; color: var(--text-secondary);">Próximo nível: <strong>${nextLevel.title}</strong></p>
                <div style="height: 12px; background: var(--bg-secondary); border-radius: 6px; overflow: hidden;">
                    <div style="height: 100%; background: ${subject.color}; border-radius: 6px; width: ${((subjectState.user.xp - levelInfo.xpRequired) / (nextLevel.xpRequired - levelInfo.xpRequired)) * 100}%"></div>
                </div>
                <p style="margin-top: 8px; text-align: center; color: var(--text-muted);">${subjectState.user.xp} / ${nextLevel.xpRequired} XP</p>
            </div>
        ` : '<div style="text-align: center; padding: 20px; color: var(--warning);"><i class="fas fa-crown"></i> Nível Máximo Atingido!</div>'}

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${subjectState.user.xp}</div>
                <div class="stat-label">XP Total</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${subjectState.user.streak}</div>
                <div class="stat-label">Dias Seguidos</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${subjectState.progress.completedBlocks.length}</div>
                <div class="stat-label">Blocos</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${subjectState.progress.completedSections.length}/${subject.sections}</div>
                <div class="stat-label">Seções</div>
            </div>
        </div>

        <div class="achievements-section">
            <h3><i class="fas fa-trophy"></i> Conquistas</h3>
            ${ACHIEVEMENTS.slice(0, 6).map(ach => `
                <div class="achievement-card ${subjectState.achievements.includes(ach.id) ? 'unlocked' : ''}">
                    <div class="achievement-icon">
                        <i class="fas ${ach.icon}"></i>
                    </div>
                    <div class="achievement-info">
                        <div class="achievement-title">${ach.title}</div>
                        <div class="achievement-desc">${ach.description}</div>
                    </div>
                </div>
            `).join('')}
        </div>

        <button class="btn btn-secondary" onclick="resetSubjectProgress()" style="width: 100%; margin-top: 24px;">
            <i class="fas fa-redo"></i> Reiniciar Progresso de ${subject.name}
        </button>

        <button class="btn btn-secondary" onclick="resetProgress()" style="width: 100%; margin-top: 12px; background: var(--danger);">
            <i class="fas fa-trash"></i> Reiniciar TODO o Progresso
        </button>
    `;
}

function renderGlobalProfile() {
    // Calcular estatísticas globais
    let totalXP = 0;
    let totalBlocks = 0;
    let totalSections = 0;
    let maxStreak = 0;

    SUBJECTS.forEach(subject => {
        const sState = state.subjects[subject.id];
        if (sState) {
            totalXP += sState.user.xp;
            totalBlocks += sState.progress.completedBlocks.length;
            totalSections += sState.progress.completedSections.length;
            if (sState.user.streak > maxStreak) maxStreak = sState.user.streak;
        }
    });

    document.getElementById('profile-container').innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <i class="fas fa-user-graduate"></i>
            </div>
            <h2 class="profile-name">${state.globalUser.name || 'Estudante'}</h2>
            <p class="profile-level">Perfil Global - EduLearn</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${totalXP}</div>
                <div class="stat-label">XP Total</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${maxStreak}</div>
                <div class="stat-label">Maior Streak</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${totalBlocks}</div>
                <div class="stat-label">Blocos</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${totalSections}</div>
                <div class="stat-label">Seções</div>
            </div>
        </div>

        <h3 style="margin: 24px 0 16px;"><i class="fas fa-chart-bar"></i> Progresso por Matéria</h3>
        ${SUBJECTS.map(subject => {
            const sState = state.subjects[subject.id];
            const progress = sState ? Math.round((sState.progress.completedBlocks.length / subject.totalBlocks) * 100) : 0;
            return `
                <div style="background: var(--bg-card); padding: 16px; border-radius: 12px; margin-bottom: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                        <i class="fas ${subject.icon}" style="color: ${subject.color}; font-size: 20px;"></i>
                        <span style="font-weight: 600;">${subject.name}</span>
                        <span style="margin-left: auto; color: var(--text-muted);">${progress}%</span>
                    </div>
                    <div style="height: 8px; background: var(--bg-secondary); border-radius: 4px; overflow: hidden;">
                        <div style="height: 100%; background: ${subject.color}; border-radius: 4px; width: ${progress}%;"></div>
                    </div>
                </div>
            `;
        }).join('')}

        <button class="btn btn-secondary" onclick="resetProgress()" style="width: 100%; margin-top: 24px; background: var(--danger);">
            <i class="fas fa-trash"></i> Reiniciar TODO o Progresso
        </button>
    `;
}
console.log('✅ app.js carregado completamente');
