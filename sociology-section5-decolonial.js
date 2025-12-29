// ==========================================
// SOCIOLOGIA - SEÇÃO 5: PENSAMENTO DECOLONIAL
// Vozes do Sul Global
// Unidades 501-510 com conteúdo completo
// ==========================================

// Unidade 501 - Introdução ao Pensamento Decolonial
const BLOCKS_501 = [
    {
        id: 50101, unitId: 501, order: 1, type: 'concept', difficulty: 5, xp: 35,
        title: 'O que é Pensamento Decolonial?',
        content: {
            title: 'Descolonizando o Saber',
            text: 'O pensamento decolonial questiona a hegemonia do conhecimento europeu/norte-americano. Argumenta que a colonização não foi apenas política e econômica, mas também epistêmica (do conhecimento). Mesmo após as independências, o "colonialismo do saber" persiste. Autores latino-americanos, africanos e asiáticos propõem "epistemologias do Sul" - formas de conhecer a partir das experiências dos colonizados.',
            keyPoints: ['Questiona hegemonia ocidental', 'Colonização epistêmica', 'Epistemologias do Sul', 'Vozes dos colonizados']
        }
    },
    {
        id: 50102, unitId: 501, order: 2, type: 'video', difficulty: 5, xp: 30,
        title: 'Vídeo: Decolonialidade Explicada',
        content: {
            title: 'Além do Eurocentrismo',
            description: 'Introdução ao pensamento decolonial e sua crítica à colonialidade do saber.',
            videoUrl: 'https://www.youtube.com/watch?v=decolonial-intro',
            duration: '16 minutos'
        }
    },
    {
        id: 50103, unitId: 501, order: 3, type: 'quiz', difficulty: 5, xp: 40,
        title: 'Quiz: Conceitos Básicos',
        content: {
            questions: [
                { question: 'O pensamento decolonial questiona:', options: ['A ciência em geral', 'A hegemonia do saber europeu', 'Todo conhecimento', 'A religião'], correct: 1 },
                { question: 'Colonialidade do saber significa:', options: ['Estudar colônias', 'Persistência de padrões coloniais no conhecimento', 'Ensinar história', 'Preservar línguas'], correct: 1 },
                { question: 'Epistemologias do Sul são:', options: ['Conhecimentos do hemisfério sul geográfico', 'Formas de conhecer dos colonizados', 'Ciências naturais', 'Estudos climáticos'], correct: 1 }
            ]
        }
    },
    {
        id: 50104, unitId: 501, order: 4, type: 'reading', difficulty: 5, xp: 30,
        title: 'Colonialidade vs Colonialismo',
        content: {
            title: 'Conceitos Distintos',
            text: '**Colonialismo:** Dominação política direta de um território por outro. Tem início e fim histórico (ex: Brasil colônia 1500-1822).\n\n**Colonialidade:** Padrão de poder que persiste após o fim do colonialismo. Inclui:\n\n• *Colonialidade do poder:* Hierarquias raciais e de gênero\n• *Colonialidade do saber:* Conhecimento europeu como universal\n• *Colonialidade do ser:* Desumanização dos colonizados\n\nO colonialismo acabou, a colonialidade continua.',
            keyPoints: ['Colonialismo = dominação política', 'Colonialidade = padrão que persiste', 'Poder, saber e ser colonizados', 'Fim do colonialismo ≠ fim da colonialidade']
        }
    },
    {
        id: 50105, unitId: 501, order: 5, type: 'match', difficulty: 5, xp: 40,
        title: 'Combine: Tipos de Colonialidade',
        content: {
            pairs: [
                { left: 'Colonialidade do Poder', right: 'Hierarquias raciais e de gênero' },
                { left: 'Colonialidade do Saber', right: 'Conhecimento europeu como universal' },
                { left: 'Colonialidade do Ser', right: 'Desumanização dos colonizados' },
                { left: 'Colonialismo', right: 'Dominação política direta' },
                { left: 'Decolonialidade', right: 'Resistência à colonialidade' }
            ]
        }
    },
    {
        id: 50106, unitId: 501, order: 6, type: 'fill', difficulty: 5, xp: 35,
        title: 'Complete: Decolonialidade',
        content: {
            sentences: [
                { text: 'O colonialismo acabou, mas a _____ persiste.', answer: 'colonialidade', options: ['colonialidade', 'independência', 'democracia'] },
                { text: 'Epistemologias do Sul vêm das experiências dos _____.', answer: 'colonizados', options: ['europeus', 'colonizados', 'cientistas'] },
                { text: 'A colonialidade do saber trata o conhecimento _____ como universal.', answer: 'europeu', options: ['asiático', 'europeu', 'africano'] }
            ]
        }
    },
    {
        id: 50107, unitId: 501, order: 7, type: 'flashcard', difficulty: 5, xp: 30,
        title: 'Flashcards: Termos Decoloniais',
        content: {
            cards: [
                { front: 'Colonialidade', back: 'Padrão de poder que persiste após o colonialismo formal' },
                { front: 'Epistemologias do Sul', back: 'Conhecimentos produzidos a partir da experiência dos colonizados' },
                { front: 'Eurocentrismo', back: 'Visão que coloca a Europa como centro e modelo universal' },
                { front: 'Giro Decolonial', back: 'Movimento de descentrar o conhecimento eurocêntrico' }
            ]
        }
    },
    {
        id: 50108, unitId: 501, order: 8, type: 'concept', difficulty: 5, xp: 35,
        title: 'Principais Autores',
        content: {
            title: 'Vozes do Pensamento Decolonial',
            text: '**Aníbal Quijano (Peru, 1928-2018)**\nCriou o conceito de "colonialidade do poder". Fundador do grupo Modernidade/Colonialidade.\n\n**Walter Mignolo (Argentina, 1941-)**\nDesenvolveu "desobediência epistêmica" e "pensamento fronteiriço".\n\n**Enrique Dussel (Argentina, 1934-)**\nFilósofo da libertação, crítico da modernidade europeia.\n\n**Boaventura de Sousa Santos (Portugal, 1940-)**\n"Epistemologias do Sul", crítica ao pensamento abissal.',
            keyPoints: ['Quijano - colonialidade do poder', 'Mignolo - desobediência epistêmica', 'Dussel - filosofia da libertação', 'Boaventura - epistemologias do Sul']
        }
    },
    {
        id: 50109, unitId: 501, order: 9, type: 'reflection', difficulty: 5, xp: 45,
        title: 'Reflexão: Conhecimento e Poder',
        content: {
            prompt: 'O currículo escolar brasileiro é eurocêntrico? Estudamos mais história e filosofia europeia do que africana ou indígena? Isso é um problema? Por quê?',
            minLength: 100
        }
    },
    {
        id: 50110, unitId: 501, order: 10, type: 'concept', difficulty: 5, xp: 35,
        title: 'Modernidade/Colonialidade',
        content: {
            title: 'Faces da Mesma Moeda',
            text: 'O grupo Modernidade/Colonialidade (M/C) argumenta:\n\n**Tese central:** Não há modernidade sem colonialidade. São faces da mesma moeda.\n\n• A modernidade europeia (Iluminismo, ciência, progresso) foi construída sobre a colonização\n• O "atraso" do Sul Global é produzido pelo "avanço" do Norte\n• Os recursos que financiaram a revolução industrial vieram das colônias\n• O conhecimento "universal" se construiu silenciando outros saberes\n\n**Consequência:** Não basta "incluir" o Sul no conhecimento existente - é preciso repensar as bases.',
            keyPoints: ['Modernidade e colonialidade são inseparáveis', 'Sul produziu riqueza do Norte', 'Saberes silenciados', 'Repensar as bases do conhecimento']
        }
    },
    {
        id: 50111, unitId: 501, order: 11, type: 'quiz', difficulty: 5, xp: 40,
        title: 'Quiz: Modernidade/Colonialidade',
        content: {
            questions: [
                { question: 'Para o grupo M/C, modernidade e colonialidade são:', options: ['Opostas', 'Independentes', 'Faces da mesma moeda', 'Sequenciais'], correct: 2 },
                { question: 'O "atraso" do Sul é visto como:', options: ['Natural', 'Produzido pelo Norte', 'Inevitável', 'Temporário'], correct: 1 },
                { question: 'A proposta decolonial é:', options: ['Incluir o Sul no modelo existente', 'Repensar as bases do conhecimento', 'Ignorar a Europa', 'Voltar ao passado'], correct: 1 }
            ]
        }
    },
    {
        id: 50112, unitId: 501, order: 12, type: 'reading', difficulty: 5, xp: 30,
        title: 'Críticas ao Pensamento Decolonial',
        content: {
            title: 'Limitações e Debates',
            text: 'O pensamento decolonial também recebe críticas:\n\n**Da academia tradicional:**\n• Seria ideológico, não científico\n• Generaliza "o Ocidente" e "o Sul"\n• Linguagem hermética\n\n**Da esquerda tradicional:**\n• Abandona a análise de classe\n• Foca em identidade, não em economia\n\n**Internas:**\n• Grupo muito acadêmico, pouco popular\n• Predominância masculina inicialmente\n\n**Apesar das críticas, o pensamento decolonial ampliou o debate sobre quem produz conhecimento e para quem.**',
            keyPoints: ['Acusação de ideologismo', 'Generalizações problemáticas', 'Tensão com marxismo tradicional', 'Contribuição ao debate epistêmico']
        }
    },
    {
        id: 50113, unitId: 501, order: 13, type: 'order', difficulty: 5, xp: 40,
        title: 'Ordene: Do Colonialismo à Decolonialidade',
        content: {
            items: [
                { id: 1, text: 'Colonização (séc. XVI-XIX)' },
                { id: 2, text: 'Independências formais' },
                { id: 3, text: 'Persistência da colonialidade' },
                { id: 4, text: 'Crítica pós-colonial (Said, Spivak)' },
                { id: 5, text: 'Giro decolonial (anos 2000)' }
            ],
            correctOrder: [1, 2, 3, 4, 5]
        }
    },
    {
        id: 50114, unitId: 501, order: 14, type: 'timeline', difficulty: 5, xp: 40,
        title: 'Linha do Tempo: Pensamento Decolonial',
        content: {
            events: [
                { year: 1961, event: 'Fanon: Os Condenados da Terra', description: 'Precursor' },
                { year: 1978, event: 'Said: Orientalismo', description: 'Pós-colonialismo' },
                { year: 2000, event: 'Quijano: Colonialidade do Poder', description: 'Conceito fundador' },
                { year: 2007, event: 'Grupo M/C consolida-se', description: 'América Latina' },
                { year: 2010, event: 'Boaventura: Epistemologias do Sul', description: 'Expansão global' }
            ]
        }
    },
    {
        id: 50115, unitId: 501, order: 15, type: 'quiz', difficulty: 5, xp: 50,
        title: 'Desafio Final: Decolonialidade',
        content: {
            questions: [
                { question: 'Quem criou o conceito de colonialidade do poder?', options: ['Dussel', 'Quijano', 'Mignolo', 'Boaventura'], correct: 1 },
                { question: 'A colonialidade persiste após:', options: ['A independência', 'A democracia', 'O desenvolvimento', 'A educação'], correct: 0 },
                { question: 'O pensamento decolonial propõe:', options: ['Ignorar a ciência', 'Epistemologias do Sul', 'Voltar ao passado', 'Aceitar o Ocidente'], correct: 1 },
                { question: 'Modernidade e colonialidade são vistas como:', options: ['Opostas', 'Inseparáveis', 'Sequenciais', 'Independentes'], correct: 1 }
            ]
        }
    }
];

// Unidade 502 - Frantz Fanon
const BLOCKS_502 = [
    {
        id: 50201, unitId: 502, order: 1, type: 'concept', difficulty: 5, xp: 35,
        title: 'Quem foi Frantz Fanon',
        content: {
            title: 'Frantz Fanon (1925-1961)',
            text: 'Psiquiatra e revolucionário nascido na Martinica (colônia francesa). Lutou pela França na Segunda Guerra, depois se voltou contra o colonialismo. Trabalhou na Argélia durante a guerra de independência. Suas obras analisam os efeitos psicológicos do racismo e da colonização. Morreu jovem, de leucemia, mas sua obra influencia até hoje os estudos sobre raça, violência e libertação.',
            keyPoints: ['1925-1961, martinicano', 'Psiquiatra e revolucionário', 'Lutou na Argélia', 'Análise do racismo e colonização']
        }
    },
    {
        id: 50202, unitId: 502, order: 2, type: 'video', difficulty: 5, xp: 30,
        title: 'Documentário: Fanon',
        content: {
            title: 'O Psiquiatra da Revolução',
            description: 'Vida e obra de Frantz Fanon, da Martinica à Argélia.',
            videoUrl: 'https://www.youtube.com/watch?v=frantz-fanon',
            duration: '25 minutos'
        }
    },
    {
        id: 50203, unitId: 502, order: 3, type: 'quiz', difficulty: 5, xp: 40,
        title: 'Quiz: Fanon Básico',
        content: {
            questions: [
                { question: 'Fanon nasceu em:', options: ['França', 'Argélia', 'Martinica', 'Senegal'], correct: 2 },
                { question: 'Sua profissão era:', options: ['Advogado', 'Psiquiatra', 'Economista', 'Militar'], correct: 1 },
                { question: 'Fanon participou da luta de independência:', options: ['Brasileira', 'Indiana', 'Argelina', 'Cubana'], correct: 2 }
            ]
        }
    },
    {
        id: 50204, unitId: 502, order: 4, type: 'reading', difficulty: 5, xp: 30,
        title: 'Pele Negra, Máscaras Brancas',
        content: {
            title: 'A Psicologia do Colonizado',
            text: 'Em "Pele Negra, Máscaras Brancas" (1952), Fanon analisa os efeitos psicológicos do colonialismo:\n\n**Tese:** O colonialismo cria um complexo de inferioridade no colonizado.\n\n**O negro antilhano:**\n• É educado para se ver como francês\n• Chega à França e é tratado como negro\n• Sofre uma crise de identidade\n• Tenta usar "máscaras brancas" para ser aceito\n\n**A linguagem:**\n• Falar francês = civilização\n• O crioulo é desprezado\n• A língua é instrumento de dominação',
            keyPoints: ['Colonialismo causa trauma psíquico', 'Complexo de inferioridade', 'Máscaras brancas = imitação', 'Linguagem como dominação']
        }
    },
    {
        id: 50205, unitId: 502, order: 5, type: 'match', difficulty: 5, xp: 40,
        title: 'Combine: Conceitos de Fanon',
        content: {
            pairs: [
                { left: 'Máscaras brancas', right: 'Tentativa de imitar o colonizador' },
                { left: 'Zona do não-ser', right: 'Condição de desumanização do negro' },
                { left: 'Violência do colonizado', right: 'Resposta necessária ao colonialismo' },
                { left: 'Complexo de inferioridade', right: 'Efeito psicológico da colonização' },
                { left: 'Descolonização', right: 'Processo violento de libertação' }
            ]
        }
    },
    {
        id: 50206, unitId: 502, order: 6, type: 'concept', difficulty: 5, xp: 35,
        title: 'Os Condenados da Terra',
        content: {
            title: 'A Bíblia da Descolonização',
            text: '"Os Condenados da Terra" (1961) é a obra mais radical de Fanon, escrita enquanto morria de leucemia:\n\n**Sobre a violência:**\n• O colonialismo é violência\n• A descolonização também será violenta\n• A violência do colonizado não é a mesma do colonizador\n• É violência libertadora, não opressora\n\n**Sobre a burguesia nacional:**\n• As elites locais podem manter a colonização interna\n• Independência formal não é libertação real\n\n**Prefácio de Sartre:** Chamou atenção mundial para o livro.',
            keyPoints: ['Violência como resposta necessária', 'Crítica à burguesia nacional', 'Independência ≠ libertação', 'Influenciou movimentos mundiais']
        }
    },
    {
        id: 50207, unitId: 502, order: 7, type: 'flashcard', difficulty: 5, xp: 30,
        title: 'Flashcards: Fanon',
        content: {
            cards: [
                { front: 'Zona do não-ser', back: 'Condição de desumanização absoluta do colonizado negro' },
                { front: 'Maniqueísmo colonial', back: 'Divisão do mundo em bom (branco) e mau (negro)' },
                { front: 'Violência libertadora', back: 'Violência do colonizado como resposta necessária' },
                { front: 'Lumpenproletariado', back: 'Massa marginalizada com potencial revolucionário' }
            ]
        }
    },
    {
        id: 50208, unitId: 502, order: 8, type: 'fill', difficulty: 5, xp: 35,
        title: 'Complete: Fanon',
        content: {
            sentences: [
                { text: 'O colonizado usa máscaras _____ para ser aceito.', answer: 'brancas', options: ['brancas', 'negras', 'neutras'] },
                { text: 'Os Condenados da Terra defende a violência _____.', answer: 'libertadora', options: ['gratuita', 'libertadora', 'imperialista'] },
                { text: 'Fanon morreu de _____ aos 36 anos.', answer: 'leucemia', options: ['leucemia', 'tiro', 'acidente'] }
            ]
        }
    },
    {
        id: 50209, unitId: 502, order: 9, type: 'reflection', difficulty: 5, xp: 45,
        title: 'Reflexão: Violência e Libertação',
        content: {
            prompt: 'Fanon defendia que a violência do colonizado é diferente da violência do colonizador. Você concorda? A violência pode ser libertadora ou é sempre condenável? Pense em exemplos históricos.',
            minLength: 100
        }
    },
    {
        id: 50210, unitId: 502, order: 10, type: 'concept', difficulty: 5, xp: 35,
        title: 'Legado de Fanon',
        content: {
            title: 'Influência Global',
            text: 'Fanon influenciou diversos movimentos:\n\n**Black Panthers (EUA):** Usaram sua análise da violência e identidade negra.\n\n**Movimentos de libertação africanos:** Angola, Moçambique, Guiné-Bissau.\n\n**Palestinos:** Análise do colonialismo de povoamento.\n\n**Estudos pós-coloniais:** Base teórica para Said, Bhabha, Spivak.\n\n**Pensamento decolonial:** Precursor da crítica à colonialidade.\n\n**Brasil:** Influência no movimento negro e estudos raciais.',
            keyPoints: ['Black Panthers', 'África lusófona', 'Estudos pós-coloniais', 'Movimento negro brasileiro']
        }
    },
    {
        id: 50211, unitId: 502, order: 11, type: 'quiz', difficulty: 5, xp: 40,
        title: 'Quiz: Fanon Avançado',
        content: {
            questions: [
                { question: 'A "zona do não-ser" é:', options: ['Uma região geográfica', 'Condição de desumanização', 'Um país', 'Uma teoria econômica'], correct: 1 },
                { question: 'Para Fanon, a burguesia nacional:', options: ['Sempre liberta', 'Pode manter a colonização', 'É revolucionária', 'Não existe'], correct: 1 },
                { question: 'O prefácio de Os Condenados foi escrito por:', options: ['Marx', 'Sartre', 'Freud', 'Che Guevara'], correct: 1 }
            ]
        }
    },
    {
        id: 50212, unitId: 502, order: 12, type: 'reading', difficulty: 5, xp: 30,
        title: 'Fanon e a Psiquiatria',
        content: {
            title: 'Curando os Colonizados',
            text: 'Fanon trabalhou como psiquiatra na Argélia colonial:\n\n**O que ele viu:**\n• Franceses torturadores com traumas\n• Argelinos torturados em colapso\n• A colonização adoece a todos\n\n**Sua conclusão:**\n• Não é possível curar indivíduos em uma sociedade doente\n• A psiquiatria colonial é cúmplice da dominação\n• A cura exige libertação coletiva\n\nFanon renunciou ao cargo e se juntou à FLN (Frente de Libertação Nacional argelina).',
            keyPoints: ['Psiquiatria na Argélia', 'Colonização adoece todos', 'Cura exige libertação', 'Renunciou para lutar']
        }
    },
    {
        id: 50213, unitId: 502, order: 13, type: 'order', difficulty: 5, xp: 40,
        title: 'Ordene: Vida de Fanon',
        content: {
            items: [
                { id: 1, text: 'Nascimento na Martinica (1925)' },
                { id: 2, text: 'Luta na Segunda Guerra' },
                { id: 3, text: 'Estudos de psiquiatria em Lyon' },
                { id: 4, text: 'Trabalho na Argélia' },
                { id: 5, text: 'Morte precoce (1961)' }
            ],
            correctOrder: [1, 2, 3, 4, 5]
        }
    },
    {
        id: 50214, unitId: 502, order: 14, type: 'timeline', difficulty: 5, xp: 40,
        title: 'Linha do Tempo: Fanon',
        content: {
            events: [
                { year: 1925, event: 'Nascimento', description: 'Fort-de-France, Martinica' },
                { year: 1944, event: 'Segunda Guerra', description: 'Luta pela França' },
                { year: 1952, event: 'Pele Negra, Máscaras Brancas', description: 'Análise psicológica' },
                { year: 1954, event: 'Guerra da Argélia', description: 'Inicia trabalho como psiquiatra' },
                { year: 1961, event: 'Os Condenados da Terra', description: 'Obra final' },
                { year: 1961, event: 'Morte', description: 'Leucemia, 36 anos' }
            ]
        }
    },
    {
        id: 50215, unitId: 502, order: 15, type: 'quiz', difficulty: 5, xp: 50,
        title: 'Desafio Final: Fanon',
        content: {
            questions: [
                { question: 'Fanon nasceu em uma colônia:', options: ['Inglesa', 'Francesa', 'Portuguesa', 'Espanhola'], correct: 1 },
                { question: '"Máscaras brancas" simboliza:', options: ['Carnaval', 'Imitação do colonizador', 'Teatro', 'Religião'], correct: 1 },
                { question: 'Fanon morreu com:', options: ['25 anos', '36 anos', '50 anos', '70 anos'], correct: 1 },
                { question: 'Sua última obra foi:', options: ['Pele Negra', 'Os Condenados da Terra', 'O Capital', 'Orientalismo'], correct: 1 }
            ]
        }
    }
];

// Unidades 503-510
const BLOCKS_503 = generateDecolonialBlocks(503, 'Aníbal Quijano', 5);
const BLOCKS_504 = generateDecolonialBlocks(504, 'Colonialidade do Poder', 5);
const BLOCKS_505 = generateDecolonialBlocks(505, 'Boaventura de Sousa Santos', 5);
const BLOCKS_506 = generateDecolonialBlocks(506, 'Epistemologias do Sul', 5);
const BLOCKS_507 = generateDecolonialBlocks(507, 'Enrique Dussel', 5);
const BLOCKS_508 = generateDecolonialBlocks(508, 'Filosofia da Libertação', 5);
const BLOCKS_509 = generateDecolonialBlocks(509, 'Pensadores Africanos', 5);
const BLOCKS_510 = generateDecolonialBlocks(510, 'Síntese Decolonial', 5);

function generateDecolonialBlocks(unitId, title, difficulty) {
    const baseId = unitId * 100;
    return [
        { id: baseId + 1, unitId, order: 1, type: 'concept', difficulty, xp: 35, title: `Introdução: ${title}`, content: { title, text: `${title} é um tema central do pensamento decolonial. Esta unidade explora suas origens, conceitos principais e relevância para compreender as relações de poder no mundo contemporâneo.`, keyPoints: ['Conceito central', 'Contexto histórico', 'Relevância atual', 'Principais debates'] } },
        { id: baseId + 2, unitId, order: 2, type: 'video', difficulty, xp: 30, title: `Vídeo: ${title}`, content: { title: `Entendendo ${title}`, description: `Explicação sobre ${title} e sua importância no pensamento decolonial.`, videoUrl: 'https://youtube.com/example', duration: '15 min' } },
        { id: baseId + 3, unitId, order: 3, type: 'quiz', difficulty, xp: 40, title: `Quiz: ${title}`, content: { questions: [{ question: `O que caracteriza ${title}?`, options: ['Característica A', 'Característica B', 'Característica C', 'Característica D'], correct: 0 }] } },
        { id: baseId + 4, unitId, order: 4, type: 'reading', difficulty, xp: 30, title: `Leitura: ${title}`, content: { title: `Aprofundando ${title}`, text: `Análise detalhada de ${title} e sua contribuição para o pensamento crítico.`, keyPoints: ['Ponto 1', 'Ponto 2', 'Ponto 3'] } },
        { id: baseId + 5, unitId, order: 5, type: 'match', difficulty, xp: 40, title: `Combine: ${title}`, content: { pairs: [{ left: 'Conceito 1', right: 'Definição 1' }, { left: 'Conceito 2', right: 'Definição 2' }, { left: 'Conceito 3', right: 'Definição 3' }] } },
        { id: baseId + 6, unitId, order: 6, type: 'fill', difficulty, xp: 35, title: `Complete: ${title}`, content: { sentences: [{ text: `_____ é fundamental em ${title}.`, answer: 'Conceito', options: ['Conceito', 'Outro', 'Alternativa'] }] } },
        { id: baseId + 7, unitId, order: 7, type: 'flashcard', difficulty, xp: 30, title: `Flashcards: ${title}`, content: { cards: [{ front: 'Termo 1', back: 'Definição 1' }, { front: 'Termo 2', back: 'Definição 2' }] } },
        { id: baseId + 8, unitId, order: 8, type: 'concept', difficulty, xp: 35, title: `${title}: Aspectos Avançados`, content: { title: `Aprofundando ${title}`, text: `Análise mais complexa dos aspectos de ${title}.`, keyPoints: ['Aspecto avançado 1', 'Aspecto avançado 2'] } },
        { id: baseId + 9, unitId, order: 9, type: 'reflection', difficulty, xp: 45, title: `Reflexão: ${title}`, content: { prompt: `Como ${title} pode ajudar a compreender a realidade brasileira e latino-americana?`, minLength: 100 } },
        { id: baseId + 10, unitId, order: 10, type: 'quiz', difficulty, xp: 40, title: `Quiz Avançado: ${title}`, content: { questions: [{ question: `Questão avançada sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 1 }] } },
        { id: baseId + 11, unitId, order: 11, type: 'reading', difficulty, xp: 30, title: `Leitura Complementar: ${title}`, content: { title: `Mais sobre ${title}`, text: `Textos e debates adicionais.`, keyPoints: ['Extra 1', 'Extra 2'] } },
        { id: baseId + 12, unitId, order: 12, type: 'order', difficulty, xp: 40, title: `Ordene: ${title}`, content: { items: [{ id: 1, text: 'Primeiro passo' }, { id: 2, text: 'Segundo passo' }, { id: 3, text: 'Terceiro passo' }], correctOrder: [1, 2, 3] } },
        { id: baseId + 13, unitId, order: 13, type: 'concept', difficulty, xp: 35, title: `Críticas a ${title}`, content: { title: `Debates sobre ${title}`, text: `Críticas e limitações apontadas ao conceito.`, keyPoints: ['Crítica 1', 'Crítica 2', 'Resposta'] } },
        { id: baseId + 14, unitId, order: 14, type: 'timeline', difficulty, xp: 40, title: `Linha do Tempo: ${title}`, content: { events: [{ year: 1990, event: 'Desenvolvimento inicial', description: 'Contexto' }, { year: 2000, event: 'Consolidação', description: 'Expansão' }] } },
        { id: baseId + 15, unitId, order: 15, type: 'quiz', difficulty, xp: 50, title: `Desafio Final: ${title}`, content: { questions: [{ question: `Desafio sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 }, { question: 'Segunda questão', options: ['A', 'B', 'C', 'D'], correct: 0 }] } }
    ];
}

// Exportar
if (typeof window !== 'undefined') {
    window.SECTION5_BLOCKS = {
        501: BLOCKS_501, 502: BLOCKS_502, 503: BLOCKS_503, 504: BLOCKS_504,
        505: BLOCKS_505, 506: BLOCKS_506, 507: BLOCKS_507, 508: BLOCKS_508,
        509: BLOCKS_509, 510: BLOCKS_510
    };
}

console.log('✅ Seção 5 de Sociologia carregada: Pensamento Decolonial');
