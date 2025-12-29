// ==========================================
// SOCIOLOGIA - SEÇÕES 7-8
// Temas Contemporâneos e Mestria
// ==========================================

// SEÇÃO 7: TEMAS CONTEMPORÂNEOS
function generateContemporaryBlocks(unitId, title, difficulty) {
    const baseId = unitId * 100;
    return [
        { id: baseId + 1, unitId, order: 1, type: 'concept', difficulty, xp: 45, title: `O que é ${title}?`, content: { title, text: `${title} é um tema central da sociologia contemporânea. Analisa transformações sociais do século XXI e seus impactos nas relações humanas, identidades e estruturas de poder.`, keyPoints: ['Definição', 'Contexto atual', 'Debates principais', 'Autores de referência'] } },
        { id: baseId + 2, unitId, order: 2, type: 'video', difficulty, xp: 40, title: `Vídeo: ${title}`, content: { title: `Entendendo ${title}`, description: `Análise contemporânea de ${title}.`, videoUrl: 'https://youtube.com/example', duration: '16 min' } },
        { id: baseId + 3, unitId, order: 3, type: 'quiz', difficulty, xp: 50, title: `Quiz: ${title}`, content: { questions: [{ question: `Como ${title} afeta a sociedade?`, options: ['Forma A', 'Forma B', 'Forma C', 'Forma D'], correct: 1 }] } },
        { id: baseId + 4, unitId, order: 4, type: 'reading', difficulty, xp: 40, title: `Leitura: ${title}`, content: { title: `Aprofundando ${title}`, text: `Texto analítico sobre ${title} na sociedade contemporânea.`, keyPoints: ['Aspecto 1', 'Aspecto 2', 'Aspecto 3'] } },
        { id: baseId + 5, unitId, order: 5, type: 'match', difficulty, xp: 50, title: `Combine: ${title}`, content: { pairs: [{ left: 'Conceito', right: 'Definição' }, { left: 'Autor', right: 'Teoria' }] } },
        { id: baseId + 6, unitId, order: 6, type: 'fill', difficulty, xp: 45, title: `Complete: ${title}`, content: { sentences: [{ text: `_____ é característica de ${title}.`, answer: 'Transformação', options: ['Transformação', 'Estagnação', 'Retrocesso'] }] } },
        { id: baseId + 7, unitId, order: 7, type: 'flashcard', difficulty, xp: 40, title: `Flashcards: ${title}`, content: { cards: [{ front: 'Termo contemporâneo', back: 'Definição atualizada' }] } },
        { id: baseId + 8, unitId, order: 8, type: 'concept', difficulty, xp: 45, title: `${title}: Debates`, content: { title: `Controvérsias`, text: `Principais debates em torno de ${title}.`, keyPoints: ['Posição A', 'Posição B', 'Síntese'] } },
        { id: baseId + 9, unitId, order: 9, type: 'reflection', difficulty, xp: 55, title: `Reflexão: ${title}`, content: { prompt: `Como ${title} se manifesta no seu cotidiano? Dê exemplos concretos.`, minLength: 100 } },
        { id: baseId + 10, unitId, order: 10, type: 'quiz', difficulty, xp: 50, title: `Quiz Avançado: ${title}`, content: { questions: [{ question: `Questão complexa sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 }] } },
        { id: baseId + 11, unitId, order: 11, type: 'reading', difficulty, xp: 40, title: `Casos: ${title}`, content: { title: `Estudos de Caso`, text: `Exemplos práticos de ${title}.`, keyPoints: ['Caso 1', 'Caso 2'] } },
        { id: baseId + 12, unitId, order: 12, type: 'order', difficulty, xp: 50, title: `Ordene: ${title}`, content: { items: [{ id: 1, text: 'Etapa 1' }, { id: 2, text: 'Etapa 2' }, { id: 3, text: 'Etapa 3' }], correctOrder: [1, 2, 3] } },
        { id: baseId + 13, unitId, order: 13, type: 'concept', difficulty, xp: 45, title: `Futuro de ${title}`, content: { title: `Tendências`, text: `Para onde caminha ${title}?`, keyPoints: ['Tendência 1', 'Tendência 2'] } },
        { id: baseId + 14, unitId, order: 14, type: 'timeline', difficulty, xp: 50, title: `Evolução: ${title}`, content: { events: [{ year: 2000, event: 'Início', description: 'Emergência' }, { year: 2020, event: 'Consolidação', description: 'Mainstream' }] } },
        { id: baseId + 15, unitId, order: 15, type: 'quiz', difficulty, xp: 60, title: `Desafio: ${title}`, content: { questions: [{ question: `Desafio final sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 0 }] } }
    ];
}

const BLOCKS_701 = generateContemporaryBlocks(701, 'Sociedade em Rede', 7);
const BLOCKS_702 = generateContemporaryBlocks(702, 'Globalização', 7);
const BLOCKS_703 = generateContemporaryBlocks(703, 'Gênero e Sexualidade', 7);
const BLOCKS_704 = generateContemporaryBlocks(704, 'Raça e Racismo', 7);
const BLOCKS_705 = generateContemporaryBlocks(705, 'Movimentos Sociais', 7);
const BLOCKS_706 = generateContemporaryBlocks(706, 'Tecnologia e Sociedade', 7);
const BLOCKS_707 = generateContemporaryBlocks(707, 'Meio Ambiente', 7);
const BLOCKS_708 = generateContemporaryBlocks(708, 'Trabalho no Séc. XXI', 7);
const BLOCKS_709 = generateContemporaryBlocks(709, 'Desigualdade', 7);
const BLOCKS_710 = generateContemporaryBlocks(710, 'Síntese Contemporânea', 7);

// SEÇÃO 8: MESTRIA SOCIOLÓGICA
function generateMasteryBlocks(unitId, title, difficulty) {
    const baseId = unitId * 100;
    return [
        { id: baseId + 1, unitId, order: 1, type: 'concept', difficulty, xp: 50, title: `Mestria: ${title}`, content: { title: `Dominando ${title}`, text: `Nível avançado de ${title}. Integração de conhecimentos anteriores com análises complexas e aplicações práticas.`, keyPoints: ['Integração teórica', 'Análise avançada', 'Aplicação prática', 'Pensamento crítico'] } },
        { id: baseId + 2, unitId, order: 2, type: 'video', difficulty, xp: 45, title: `Vídeo Avançado: ${title}`, content: { title: `${title} em Profundidade`, description: `Análise avançada para mestres.`, videoUrl: 'https://youtube.com/example', duration: '20 min' } },
        { id: baseId + 3, unitId, order: 3, type: 'quiz', difficulty, xp: 55, title: `Quiz Mestre: ${title}`, content: { questions: [{ question: `Questão de mestria sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 }, { question: 'Segunda questão avançada', options: ['A', 'B', 'C', 'D'], correct: 1 }] } },
        { id: baseId + 4, unitId, order: 4, type: 'reading', difficulty, xp: 45, title: `Texto Avançado: ${title}`, content: { title: `Análise Profunda`, text: `Texto de nível avançado sobre ${title}.`, keyPoints: ['Complexidade 1', 'Complexidade 2'] } },
        { id: baseId + 5, unitId, order: 5, type: 'match', difficulty, xp: 55, title: `Combine Avançado: ${title}`, content: { pairs: [{ left: 'Teoria complexa', right: 'Aplicação' }, { left: 'Autor', right: 'Conceito sofisticado' }] } },
        { id: baseId + 6, unitId, order: 6, type: 'fill', difficulty, xp: 50, title: `Complete: ${title}`, content: { sentences: [{ text: `A análise avançada de ${title} requer _____.`, answer: 'integração', options: ['integração', 'simplificação', 'negação'] }] } },
        { id: baseId + 7, unitId, order: 7, type: 'flashcard', difficulty, xp: 45, title: `Flashcards Mestres: ${title}`, content: { cards: [{ front: 'Conceito avançado', back: 'Definição complexa' }] } },
        { id: baseId + 8, unitId, order: 8, type: 'concept', difficulty, xp: 50, title: `${title}: Síntese`, content: { title: `Integrando Conhecimentos`, text: `Síntese avançada.`, keyPoints: ['Integração 1', 'Integração 2'] } },
        { id: baseId + 9, unitId, order: 9, type: 'reflection', difficulty, xp: 60, title: `Reflexão Mestre: ${title}`, content: { prompt: `Como você aplicaria ${title} para analisar um problema social complexo? Desenvolva uma análise original.`, minLength: 150 } },
        { id: baseId + 10, unitId, order: 10, type: 'quiz', difficulty, xp: 55, title: `Quiz Elite: ${title}`, content: { questions: [{ question: `Questão elite sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 3 }] } },
        { id: baseId + 11, unitId, order: 11, type: 'reading', difficulty, xp: 45, title: `Texto de Referência: ${title}`, content: { title: `Fonte Primária`, text: `Trecho de obra fundamental.`, keyPoints: ['Citação 1', 'Análise'] } },
        { id: baseId + 12, unitId, order: 12, type: 'order', difficulty, xp: 55, title: `Ordene Complexo: ${title}`, content: { items: [{ id: 1, text: 'Premissa' }, { id: 2, text: 'Desenvolvimento' }, { id: 3, text: 'Conclusão' }, { id: 4, text: 'Aplicação' }], correctOrder: [1, 2, 3, 4] } },
        { id: baseId + 13, unitId, order: 13, type: 'concept', difficulty, xp: 50, title: `Aplicações: ${title}`, content: { title: `Na Prática`, text: `Como usar ${title} profissionalmente.`, keyPoints: ['Aplicação 1', 'Aplicação 2'] } },
        { id: baseId + 14, unitId, order: 14, type: 'timeline', difficulty, xp: 55, title: `História: ${title}`, content: { events: [{ year: 1900, event: 'Origens', description: 'Fundamentos' }, { year: 2000, event: 'Atualidade', description: 'Desenvolvimentos' }] } },
        { id: baseId + 15, unitId, order: 15, type: 'quiz', difficulty, xp: 70, title: `Desafio Mestre: ${title}`, content: { questions: [{ question: `Desafio máximo sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 1 }, { question: 'Segundo desafio', options: ['A', 'B', 'C', 'D'], correct: 2 }] } }
    ];
}

const BLOCKS_801 = generateMasteryBlocks(801, 'Teoria Sociológica', 8);
const BLOCKS_802 = generateMasteryBlocks(802, 'Métodos de Pesquisa', 8);
const BLOCKS_803 = generateMasteryBlocks(803, 'Análise Social', 8);
const BLOCKS_804 = generateMasteryBlocks(804, 'Escrita Acadêmica', 8);
const BLOCKS_805 = generateMasteryBlocks(805, 'Debate Teórico', 8);
const BLOCKS_806 = generateMasteryBlocks(806, 'Pesquisa de Campo', 8);
const BLOCKS_807 = generateMasteryBlocks(807, 'Interpretação de Dados', 8);
const BLOCKS_808 = generateMasteryBlocks(808, 'Crítica Sociológica', 8);
const BLOCKS_809 = generateMasteryBlocks(809, 'Projeto de Pesquisa', 8);
const BLOCKS_810 = generateMasteryBlocks(810, 'Mestria Final', 8);

// Exportar
if (typeof window !== 'undefined') {
    window.SECTION7_BLOCKS = {
        701: BLOCKS_701, 702: BLOCKS_702, 703: BLOCKS_703, 704: BLOCKS_704, 705: BLOCKS_705,
        706: BLOCKS_706, 707: BLOCKS_707, 708: BLOCKS_708, 709: BLOCKS_709, 710: BLOCKS_710
    };
    window.SECTION8_BLOCKS = {
        801: BLOCKS_801, 802: BLOCKS_802, 803: BLOCKS_803, 804: BLOCKS_804, 805: BLOCKS_805,
        806: BLOCKS_806, 807: BLOCKS_807, 808: BLOCKS_808, 809: BLOCKS_809, 810: BLOCKS_810
    };
}

console.log('✅ Seções 7-8 de Sociologia carregadas: Contemporâneo e Mestria');
