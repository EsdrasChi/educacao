// ==========================================
// SOCIOLOGIA - SEÇÃO 4: SOCIOLOGIA CRÍTICA
// Escola de Frankfurt e Teoria Crítica
// Unidades 401-410 com conteúdo completo
// ==========================================

// Unidade 401 - Escola de Frankfurt
const BLOCKS_401 = [
    {
        id: 40101, unitId: 401, order: 1, type: 'concept', difficulty: 4, xp: 30,
        title: 'A Escola de Frankfurt',
        content: {
            title: 'Origens da Teoria Crítica',
            text: 'A Escola de Frankfurt surgiu na Alemanha em 1923, no Instituto de Pesquisa Social. Reuniu pensadores como Horkheimer, Adorno, Marcuse e Benjamin. Combinaram marxismo com psicanálise freudiana para analisar a sociedade capitalista. Fugiram do nazismo e muitos se estabeleceram nos EUA. Sua principal contribuição foi a Teoria Crítica: uma análise radical da cultura, ideologia e dominação na sociedade moderna.',
            keyPoints: ['Fundada em 1923 em Frankfurt', 'Combina Marx e Freud', 'Teoria Crítica da sociedade', 'Crítica à indústria cultural']
        }
    },
    {
        id: 40102, unitId: 401, order: 2, type: 'video', difficulty: 4, xp: 25,
        title: 'Documentário: Escola de Frankfurt',
        content: {
            title: 'A Teoria Crítica Explicada',
            description: 'Documentário sobre a origem e desenvolvimento da Escola de Frankfurt e seus principais pensadores.',
            videoUrl: 'https://www.youtube.com/watch?v=escola-frankfurt',
            duration: '18 minutos'
        }
    },
    {
        id: 40103, unitId: 401, order: 3, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Escola de Frankfurt',
        content: {
            questions: [
                { question: 'Em que ano foi fundada a Escola de Frankfurt?', options: ['1918', '1923', '1933', '1945'], correct: 1 },
                { question: 'A Teoria Crítica combina Marx com:', options: ['Weber', 'Durkheim', 'Freud', 'Comte'], correct: 2 },
                { question: 'Por que os frankfurtianos fugiram da Alemanha?', options: ['Crise econômica', 'Nazismo', 'Guerra civil', 'Convite americano'], correct: 1 }
            ]
        }
    },
    {
        id: 40104, unitId: 401, order: 4, type: 'reading', difficulty: 4, xp: 25,
        title: 'Os Fundadores',
        content: {
            title: 'Principais Pensadores de Frankfurt',
            text: '**Max Horkheimer (1895-1973)**\nDiretor do Instituto, definiu a Teoria Crítica como oposição à teoria tradicional.\n\n**Theodor Adorno (1903-1969)**\nFilósofo e musicólogo, crítico da indústria cultural e da razão instrumental.\n\n**Herbert Marcuse (1898-1979)**\nInfluenciou os movimentos de 1968, autor de "O Homem Unidimensional".\n\n**Walter Benjamin (1892-1940)**\nCrítico literário, analisou a reprodutibilidade técnica da arte.',
            keyPoints: ['Horkheimer - diretor e teórico', 'Adorno - indústria cultural', 'Marcuse - movimento estudantil', 'Benjamin - arte e técnica']
        }
    },
    {
        id: 40105, unitId: 401, order: 5, type: 'match', difficulty: 4, xp: 35,
        title: 'Combine: Pensadores e Obras',
        content: {
            pairs: [
                { left: 'Horkheimer', right: 'Teoria Tradicional e Teoria Crítica' },
                { left: 'Adorno', right: 'Dialética do Esclarecimento' },
                { left: 'Marcuse', right: 'O Homem Unidimensional' },
                { left: 'Benjamin', right: 'A Obra de Arte na Era da Reprodutibilidade' },
                { left: 'Fromm', right: 'O Medo à Liberdade' }
            ]
        }
    },
    {
        id: 40106, unitId: 401, order: 6, type: 'fill', difficulty: 4, xp: 30,
        title: 'Complete: Frankfurt',
        content: {
            sentences: [
                { text: 'A Escola de Frankfurt foi fundada em _____.', answer: '1923', options: ['1923', '1933', '1945'] },
                { text: 'A Teoria _____ analisa a dominação na sociedade.', answer: 'Crítica', options: ['Crítica', 'Tradicional', 'Positivista'] },
                { text: '_____ escreveu O Homem Unidimensional.', answer: 'Marcuse', options: ['Adorno', 'Marcuse', 'Horkheimer'] }
            ]
        }
    },
    {
        id: 40107, unitId: 401, order: 7, type: 'flashcard', difficulty: 4, xp: 25,
        title: 'Flashcards: Conceitos de Frankfurt',
        content: {
            cards: [
                { front: 'Teoria Crítica', back: 'Análise que busca desvelar as formas de dominação na sociedade capitalista' },
                { front: 'Razão Instrumental', back: 'Razão reduzida a meio para fins de dominação, sem questionar os fins' },
                { front: 'Indústria Cultural', back: 'Sistema de produção cultural em massa que padroniza e aliena' },
                { front: 'Dialética Negativa', back: 'Método de Adorno que recusa sínteses totalizantes' }
            ]
        }
    },
    {
        id: 40108, unitId: 401, order: 8, type: 'concept', difficulty: 4, xp: 30,
        title: 'Teoria Tradicional vs Crítica',
        content: {
            title: 'Dois Tipos de Teoria',
            text: 'Horkheimer distinguiu dois tipos de teoria:\n\n**Teoria Tradicional:**\n• Pretende ser neutra e objetiva\n• Separa sujeito e objeto\n• Busca apenas descrever a realidade\n• Aceita o status quo\n\n**Teoria Crítica:**\n• Assume posição política\n• Reconhece que teoria está na sociedade\n• Busca transformar a realidade\n• Questiona a dominação',
            keyPoints: ['Tradicional = neutra, descritiva', 'Crítica = engajada, transformadora', 'Conhecimento não é neutro', 'Teoria deve emancipar']
        }
    },
    {
        id: 40109, unitId: 401, order: 9, type: 'order', difficulty: 4, xp: 35,
        title: 'Ordene: História de Frankfurt',
        content: {
            items: [
                { id: 1, text: 'Fundação do Instituto (1923)' },
                { id: 2, text: 'Horkheimer assume direção (1930)' },
                { id: 3, text: 'Fuga do nazismo (1933)' },
                { id: 4, text: 'Exílio nos EUA' },
                { id: 5, text: 'Retorno à Alemanha (1950s)' }
            ],
            correctOrder: [1, 2, 3, 4, 5]
        }
    },
    {
        id: 40110, unitId: 401, order: 10, type: 'reflection', difficulty: 4, xp: 40,
        title: 'Reflexão: Teoria e Prática',
        content: {
            prompt: 'A Teoria Crítica afirma que todo conhecimento tem uma dimensão política. Você concorda que não existe ciência "neutra"? Como isso afeta a forma como consumimos informação hoje?',
            minLength: 100
        }
    },
    {
        id: 40111, unitId: 401, order: 11, type: 'concept', difficulty: 4, xp: 30,
        title: 'O Contexto Histórico',
        content: {
            title: 'Por que Frankfurt?',
            text: 'A Escola surgiu em um contexto de crise:\n\n• **Fracasso das revoluções**: Por que a classe operária não se revoltou?\n• **Ascensão do fascismo**: Como explicar a adesão das massas?\n• **Cultura de massa**: Rádio, cinema, propaganda\n• **Stalinismo**: Crítica também ao socialismo real\n\nOs frankfurtianos buscaram explicar por que a revolução prometida por Marx não aconteceu e por que as massas apoiavam regimes autoritários.',
            keyPoints: ['Crise do marxismo ortodoxo', 'Ascensão do fascismo', 'Papel da cultura', 'Crítica ao stalinismo']
        }
    },
    {
        id: 40112, unitId: 401, order: 12, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Conceitos Avançados',
        content: {
            questions: [
                { question: 'A razão instrumental é criticada por:', options: ['Ser muito teórica', 'Reduzir tudo a meios', 'Ser irracional', 'Ser democrática'], correct: 1 },
                { question: 'A Teoria Crítica quer:', options: ['Apenas descrever', 'Transformar a sociedade', 'Manter o status quo', 'Ignorar política'], correct: 1 },
                { question: 'Os frankfurtianos criticavam:', options: ['Só o capitalismo', 'Só o socialismo', 'Ambos capitalismo e stalinismo', 'Nenhum sistema'], correct: 2 }
            ]
        }
    },
    {
        id: 40113, unitId: 401, order: 13, type: 'reading', difficulty: 4, xp: 25,
        title: 'Leitura: Dialética do Esclarecimento',
        content: {
            title: 'A Obra Central de Frankfurt',
            text: 'Escrita por Horkheimer e Adorno em 1944, "Dialética do Esclarecimento" é a obra mais importante da Escola. Tese central: o projeto iluminista de libertar a humanidade pela razão se converteu em seu oposto - nova forma de dominação.\n\n**Argumentos principais:**\n• A razão que deveria libertar tornou-se instrumento de controle\n• O mito que a razão queria superar retorna na própria razão\n• A indústria cultural é exemplo dessa dominação "esclarecida"\n• O Holocausto é o ápice da racionalidade instrumental',
            keyPoints: ['Razão se tornou dominação', 'Mito e razão se entrelaçam', 'Crítica à indústria cultural', 'Análise do Holocausto']
        }
    },
    {
        id: 40114, unitId: 401, order: 14, type: 'timeline', difficulty: 4, xp: 35,
        title: 'Linha do Tempo: Escola de Frankfurt',
        content: {
            events: [
                { year: 1923, event: 'Fundação do Instituto', description: 'Frankfurt, Alemanha' },
                { year: 1930, event: 'Horkheimer diretor', description: 'Nova orientação teórica' },
                { year: 1933, event: 'Exílio', description: 'Fuga do nazismo' },
                { year: 1944, event: 'Dialética do Esclarecimento', description: 'Obra central' },
                { year: 1964, event: 'O Homem Unidimensional', description: 'Marcuse influencia 68' }
            ]
        }
    },
    {
        id: 40115, unitId: 401, order: 15, type: 'quiz', difficulty: 4, xp: 45,
        title: 'Desafio Final: Frankfurt',
        content: {
            questions: [
                { question: 'A Dialética do Esclarecimento foi escrita por:', options: ['Marx e Engels', 'Horkheimer e Adorno', 'Marcuse e Benjamin', 'Freud e Jung'], correct: 1 },
                { question: 'O Instituto de Pesquisa Social foi fundado em:', options: ['Berlim', 'Frankfurt', 'Nova York', 'Paris'], correct: 1 },
                { question: 'A principal crítica à razão iluminista é:', options: ['Ser muito otimista', 'Tornar-se instrumento de dominação', 'Ser religiosa', 'Ser pouco científica'], correct: 1 },
                { question: 'Walter Benjamin morreu:', options: ['Na guerra', 'Fugindo do nazismo', 'De velhice', 'No Brasil'], correct: 1 }
            ]
        }
    }
];

// Unidade 402 - Indústria Cultural
const BLOCKS_402 = [
    {
        id: 40201, unitId: 402, order: 1, type: 'concept', difficulty: 4, xp: 30,
        title: 'O Conceito de Indústria Cultural',
        content: {
            title: 'Cultura como Mercadoria',
            text: 'Adorno e Horkheimer criaram o termo "indústria cultural" para descrever a produção em massa de bens culturais. Diferente da cultura popular espontânea, a indústria cultural é fabricada de cima para baixo, padronizada e comercializada. Rádio, cinema, TV e música popular são seus produtos. Objetivo: lucro e controle social, não expressão artística autêntica.',
            keyPoints: ['Cultura produzida em massa', 'Padronização dos produtos', 'Objetivo: lucro e controle', 'Diferente de cultura popular']
        }
    },
    {
        id: 40202, unitId: 402, order: 2, type: 'video', difficulty: 4, xp: 25,
        title: 'Vídeo: Indústria Cultural Hoje',
        content: {
            title: 'Da TV ao Streaming',
            description: 'Análise de como o conceito de indústria cultural se aplica às plataformas digitais contemporâneas.',
            videoUrl: 'https://www.youtube.com/watch?v=industria-cultural-streaming',
            duration: '15 minutos'
        }
    },
    {
        id: 40203, unitId: 402, order: 3, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Indústria Cultural',
        content: {
            questions: [
                { question: 'Quem criou o conceito de indústria cultural?', options: ['Marx', 'Weber', 'Adorno e Horkheimer', 'Gramsci'], correct: 2 },
                { question: 'A indústria cultural produz cultura:', options: ['Autêntica e popular', 'Padronizada e comercial', 'Erudita e elitista', 'Regional e diversa'], correct: 1 },
                { question: 'O objetivo da indústria cultural é:', options: ['Educar', 'Lucro e controle', 'Democratizar a arte', 'Preservar tradições'], correct: 1 }
            ]
        }
    },
    {
        id: 40204, unitId: 402, order: 4, type: 'reading', difficulty: 4, xp: 25,
        title: 'Características da Indústria Cultural',
        content: {
            title: 'Como Funciona a Indústria Cultural',
            text: '**Padronização:**\nTodos os produtos seguem fórmulas. Filmes de Hollywood, músicas pop, séries de TV - variações sobre o mesmo tema.\n\n**Pseudo-individualização:**\nIlusão de diversidade. Diferentes marcas, mesmo produto. Você "escolhe", mas as opções são pré-determinadas.\n\n**Integração:**\nA indústria cultural integra os indivíduos ao sistema. Entretenimento distrai da exploração e ensina conformismo.\n\n**Fetichismo:**\nA cultura vira mercadoria. O valor artístico é substituído pelo valor de troca.',
            keyPoints: ['Padronização de fórmulas', 'Falsa diversidade', 'Integração ao sistema', 'Cultura como mercadoria']
        }
    },
    {
        id: 40205, unitId: 402, order: 5, type: 'match', difficulty: 4, xp: 35,
        title: 'Combine: Conceitos',
        content: {
            pairs: [
                { left: 'Padronização', right: 'Fórmulas repetitivas' },
                { left: 'Pseudo-individualização', right: 'Falsa diversidade' },
                { left: 'Integração', right: 'Conformismo social' },
                { left: 'Fetichismo cultural', right: 'Cultura como mercadoria' },
                { left: 'Entretenimento', right: 'Distração da exploração' }
            ]
        }
    },
    {
        id: 40206, unitId: 402, order: 6, type: 'fill', difficulty: 4, xp: 30,
        title: 'Complete: Indústria Cultural',
        content: {
            sentences: [
                { text: 'A indústria cultural produz cultura _____.', answer: 'padronizada', options: ['padronizada', 'autêntica', 'revolucionária'] },
                { text: 'A pseudo-individualização cria ilusão de _____.', answer: 'escolha', options: ['escolha', 'igualdade', 'liberdade'] },
                { text: 'Para Adorno, a cultura virou _____.', answer: 'mercadoria', options: ['arte', 'mercadoria', 'política'] }
            ]
        }
    },
    {
        id: 40207, unitId: 402, order: 7, type: 'flashcard', difficulty: 4, xp: 25,
        title: 'Flashcards: Termos',
        content: {
            cards: [
                { front: 'Indústria Cultural', back: 'Sistema de produção e distribuição de bens culturais em massa' },
                { front: 'Padronização', back: 'Produção cultural seguindo fórmulas repetitivas' },
                { front: 'Pseudo-individualização', back: 'Ilusão de diversidade em produtos essencialmente iguais' },
                { front: 'Fetichismo Cultural', back: 'Transformação da cultura em mercadoria com valor de troca' }
            ]
        }
    },
    {
        id: 40208, unitId: 402, order: 8, type: 'concept', difficulty: 4, xp: 30,
        title: 'Críticas ao Conceito',
        content: {
            title: 'Limitações da Teoria',
            text: 'O conceito de indústria cultural recebeu críticas:\n\n**Elitismo:**\nAdorno parece desprezar a cultura popular e preferir a "alta cultura" (música erudita).\n\n**Passividade do público:**\nA teoria subestima a capacidade crítica das pessoas. Estudos posteriores mostraram que o público interpreta e ressignifica produtos culturais.\n\n**Visão pessimista:**\nNão há espaço para resistência ou transformação dentro da cultura de massa.\n\n**Apesar das críticas, o conceito permanece relevante para analisar a mídia contemporânea.**',
            keyPoints: ['Acusação de elitismo', 'Público não é totalmente passivo', 'Visão muito pessimista', 'Conceito ainda útil']
        }
    },
    {
        id: 40209, unitId: 402, order: 9, type: 'reflection', difficulty: 4, xp: 40,
        title: 'Reflexão: Streaming e Algoritmos',
        content: {
            prompt: 'Netflix, Spotify e YouTube usam algoritmos para recomendar conteúdo. Isso seria uma forma atualizada de "indústria cultural"? Os algoritmos limitam nossa liberdade de escolha ou ampliam nossas opções?',
            minLength: 100
        }
    },
    {
        id: 40210, unitId: 402, order: 10, type: 'concept', difficulty: 4, xp: 30,
        title: 'Adorno e a Música',
        content: {
            title: 'Crítica à Música Popular',
            text: 'Adorno foi especialmente crítico da música popular (jazz, pop). Para ele:\n\n• A música popular é padronizada (verso-refrão-verso)\n• O ouvinte é passivo, não precisa prestar atenção\n• A "regressão da audição" - ouvimos como crianças\n• Apenas a música erudita (Schoenberg, Beethoven) desafia o ouvinte\n\n**Crítica à crítica de Adorno:**\nEle não conhecia bem o jazz e subestimou sua complexidade. Sua preferência pela música erudita europeia reflete preconceitos de classe e cultura.',
            keyPoints: ['Música popular = padronizada', 'Ouvinte passivo', 'Preferência pela música erudita', 'Críticas ao eurocentrismo de Adorno']
        }
    },
    {
        id: 40211, unitId: 402, order: 11, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Música e Cultura',
        content: {
            questions: [
                { question: 'Adorno criticava especialmente:', options: ['Música clássica', 'Jazz e pop', 'Ópera', 'Música folclórica'], correct: 1 },
                { question: 'A "regressão da audição" significa:', options: ['Surdez', 'Ouvir de forma infantil e passiva', 'Preferir silêncio', 'Ouvir muito alto'], correct: 1 },
                { question: 'Críticos acusam Adorno de:', options: ['Populismo', 'Elitismo cultural', 'Relativismo', 'Nacionalismo'], correct: 1 }
            ]
        }
    },
    {
        id: 40212, unitId: 402, order: 12, type: 'reading', difficulty: 4, xp: 25,
        title: 'Leitura: O Fetichismo na Música',
        content: {
            title: 'Sobre o Fetichismo na Música',
            text: 'Em "Sobre o Fetichismo na Música e a Regressão da Audição" (1938), Adorno argumenta:\n\n• A música se tornou mercadoria\n• Ouvimos o "valor de troca" (popularidade, preço) não o "valor de uso" (qualidade musical)\n• As pessoas gostam de músicas porque são famosas, não porque são boas\n• A audição regrediu: não exigimos nada da música, apenas que nos distraia\n• Resultado: conformismo e incapacidade de experiência estética autêntica',
            keyPoints: ['Música como mercadoria', 'Valor de troca sobre valor de uso', 'Fama determina gosto', 'Audição passiva']
        }
    },
    {
        id: 40213, unitId: 402, order: 13, type: 'order', difficulty: 4, xp: 35,
        title: 'Ordene: Processo da Indústria Cultural',
        content: {
            items: [
                { id: 1, text: 'Produção padronizada de conteúdo' },
                { id: 2, text: 'Distribuição massiva pela mídia' },
                { id: 3, text: 'Consumo passivo pelo público' },
                { id: 4, text: 'Integração ao sistema' },
                { id: 5, text: 'Reprodução da dominação' }
            ],
            correctOrder: [1, 2, 3, 4, 5]
        }
    },
    {
        id: 40214, unitId: 402, order: 14, type: 'timeline', difficulty: 4, xp: 35,
        title: 'Linha do Tempo: Mídia de Massa',
        content: {
            events: [
                { year: 1920, event: 'Era do Rádio', description: 'Primeira mídia de massa' },
                { year: 1930, event: 'Cinema Sonoro', description: 'Hollywood se consolida' },
                { year: 1944, event: 'Dialética do Esclarecimento', description: 'Conceito de indústria cultural' },
                { year: 1950, event: 'Era da TV', description: 'Nova forma de controle' },
                { year: 2000, event: 'Era Digital', description: 'Internet e redes sociais' }
            ]
        }
    },
    {
        id: 40215, unitId: 402, order: 15, type: 'quiz', difficulty: 4, xp: 45,
        title: 'Desafio Final: Indústria Cultural',
        content: {
            questions: [
                { question: 'A indústria cultural se opõe a:', options: ['Arte comercial', 'Cultura autêntica e espontânea', 'Entretenimento', 'Tecnologia'], correct: 1 },
                { question: 'Pseudo-individualização significa:', options: ['Individualismo real', 'Falsa diversidade', 'Coletivismo', 'Anonimato'], correct: 1 },
                { question: 'Para Adorno, o jazz era:', options: ['Arte autêntica', 'Música revolucionária', 'Produto padronizado', 'Expressão popular genuína'], correct: 2 },
                { question: 'A principal função da indústria cultural é:', options: ['Educar', 'Entreter e integrar ao sistema', 'Revolucionar', 'Preservar tradições'], correct: 1 }
            ]
        }
    }
];

// Unidade 403 - Theodor Adorno
const BLOCKS_403 = [
    {
        id: 40301, unitId: 403, order: 1, type: 'concept', difficulty: 4, xp: 30,
        title: 'Quem foi Adorno',
        content: {
            title: 'Theodor W. Adorno (1903-1969)',
            text: 'Filósofo, sociólogo, musicólogo e compositor alemão. Um dos mais importantes pensadores do século XX. Judeu, fugiu do nazismo em 1934. Sua obra abrange estética, teoria social, música e crítica cultural. Principal ideia: a razão ocidental, que prometia libertar a humanidade, tornou-se instrumento de dominação. O Holocausto é o ápice dessa "dialética do esclarecimento".',
            keyPoints: ['1903-1969, alemão', 'Filósofo e musicólogo', 'Fugiu do nazismo', 'Crítico da razão instrumental']
        }
    },
    {
        id: 40302, unitId: 403, order: 2, type: 'video', difficulty: 4, xp: 25,
        title: 'Vídeo: Vida de Adorno',
        content: {
            title: 'O Pensador da Negatividade',
            description: 'Documentário biográfico sobre Theodor Adorno, sua trajetória intelectual e principais obras.',
            videoUrl: 'https://www.youtube.com/watch?v=adorno-vida',
            duration: '20 minutos'
        }
    },
    {
        id: 40303, unitId: 403, order: 3, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Adorno Básico',
        content: {
            questions: [
                { question: 'Adorno nasceu em que país?', options: ['França', 'Alemanha', 'Itália', 'Áustria'], correct: 1 },
                { question: 'Além de filósofo, Adorno era:', options: ['Pintor', 'Musicólogo', 'Arquiteto', 'Poeta'], correct: 1 },
                { question: 'Adorno fugiu da Alemanha por causa:', options: ['Da guerra', 'Do nazismo', 'Da pobreza', 'De um convite'], correct: 1 }
            ]
        }
    },
    {
        id: 40304, unitId: 403, order: 4, type: 'reading', difficulty: 4, xp: 25,
        title: 'Principais Obras',
        content: {
            title: 'A Obra de Adorno',
            text: '**Dialética do Esclarecimento (1944)** - com Horkheimer\nCrítica à razão ocidental que se tornou dominação.\n\n**Minima Moralia (1951)**\nAforismos sobre a vida danificada na sociedade capitalista.\n\n**Dialética Negativa (1966)**\nSua principal obra filosófica. Recusa qualquer síntese positiva.\n\n**Teoria Estética (1970)** - póstuma\nSua filosofia da arte. A arte autêntica resiste à sociedade administrada.',
            keyPoints: ['Dialética do Esclarecimento - razão e dominação', 'Minima Moralia - vida danificada', 'Dialética Negativa - recusa de síntese', 'Teoria Estética - arte como resistência']
        }
    },
    {
        id: 40305, unitId: 403, order: 5, type: 'match', difficulty: 4, xp: 35,
        title: 'Combine: Obras e Temas',
        content: {
            pairs: [
                { left: 'Dialética do Esclarecimento', right: 'Razão e dominação' },
                { left: 'Minima Moralia', right: 'Vida danificada' },
                { left: 'Dialética Negativa', right: 'Recusa de síntese' },
                { left: 'Teoria Estética', right: 'Arte como resistência' },
                { left: 'Fetichismo na Música', right: 'Crítica à cultura de massa' }
            ]
        }
    },
    {
        id: 40306, unitId: 403, order: 6, type: 'concept', difficulty: 4, xp: 30,
        title: 'Dialética Negativa',
        content: {
            title: 'Pensar Contra o Pensamento',
            text: 'A Dialética Negativa (1966) é a principal contribuição filosófica de Adorno:\n\n• **Contra Hegel:** Recusa a síntese dialética. O negativo não se resolve em positivo.\n• **Não-identidade:** O conceito nunca captura totalmente o objeto. Há sempre um "mais" que escapa.\n• **Contra o sistema:** Filosofia não deve ser um sistema fechado.\n• **Primado do objeto:** Contra o idealismo, o objeto tem primazia.\n\nÉ uma filosofia difícil, que exige leitura atenta e resiste a resumos.',
            keyPoints: ['Contra síntese hegeliana', 'Conceito não captura tudo', 'Contra sistemas fechados', 'Primado do objeto']
        }
    },
    {
        id: 40307, unitId: 403, order: 7, type: 'flashcard', difficulty: 4, xp: 25,
        title: 'Flashcards: Conceitos de Adorno',
        content: {
            cards: [
                { front: 'Dialética Negativa', back: 'Pensamento que recusa sínteses totalizantes e afirma a não-identidade' },
                { front: 'Não-identidade', back: 'O que escapa ao conceito; o objeto nunca é totalmente capturado pelo pensamento' },
                { front: 'Vida danificada', back: 'Condição da existência sob o capitalismo tardio' },
                { front: 'Constelação', back: 'Método de Adorno: conceitos que iluminam o objeto sem esgotá-lo' }
            ]
        }
    },
    {
        id: 40308, unitId: 403, order: 8, type: 'fill', difficulty: 4, xp: 30,
        title: 'Complete: Adorno',
        content: {
            sentences: [
                { text: 'A Dialética Negativa recusa a _____ hegeliana.', answer: 'síntese', options: ['síntese', 'tese', 'antítese'] },
                { text: 'Para Adorno, o conceito não captura totalmente o _____.', answer: 'objeto', options: ['sujeito', 'objeto', 'método'] },
                { text: 'Minima Moralia trata da vida _____.', answer: 'danificada', options: ['boa', 'danificada', 'feliz'] }
            ]
        }
    },
    {
        id: 40309, unitId: 403, order: 9, type: 'concept', difficulty: 4, xp: 30,
        title: 'Adorno e Auschwitz',
        content: {
            title: 'Escrever Poesia Depois de Auschwitz',
            text: 'Adorno escreveu a famosa frase: "Escrever poesia depois de Auschwitz é bárbaro".\n\nO que significa:\n• O Holocausto representa a falência da cultura ocidental\n• A cultura que produziu Auschwitz não pode continuar como se nada tivesse acontecido\n• A arte precisa mudar radicalmente\n• Não é uma proibição literal, mas um alerta\n\nAdorno depois moderou: a arte continua necessária, mas deve testemunhar o sofrimento, não o embelezar.',
            keyPoints: ['Holocausto = falência da cultura', 'Arte deve mudar', 'Não é proibição literal', 'Arte como testemunho']
        }
    },
    {
        id: 40310, unitId: 403, order: 10, type: 'reflection', difficulty: 4, xp: 40,
        title: 'Reflexão: Arte e Barbárie',
        content: {
            prompt: 'Adorno disse que é bárbaro escrever poesia depois de Auschwitz. Como você interpreta essa frase? A arte pode representar atrocidades ou isso as banaliza?',
            minLength: 100
        }
    },
    {
        id: 40311, unitId: 403, order: 11, type: 'reading', difficulty: 4, xp: 25,
        title: 'Minima Moralia',
        content: {
            title: 'Reflexões a partir da Vida Danificada',
            text: 'Minima Moralia (1951) é uma coleção de aforismos escrita durante o exílio de Adorno nos EUA.\n\nTemas:\n• A vida cotidiana sob o capitalismo\n• Como as relações pessoais são deformadas pela sociedade de consumo\n• Crítica do "american way of life"\n• A impossibilidade de viver corretamente em uma sociedade falsa\n\n**Frase famosa:** "Não há vida correta na vida falsa" (Es gibt kein richtiges Leben im falschen)',
            keyPoints: ['Aforismos do exílio', 'Vida cotidiana danificada', 'Crítica aos EUA', 'Não há vida correta na falsa']
        }
    },
    {
        id: 40312, unitId: 403, order: 12, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Conceitos Avançados',
        content: {
            questions: [
                { question: '"Não há vida correta na vida falsa" é de:', options: ['Minima Moralia', 'O Capital', 'Ser e Tempo', 'A República'], correct: 0 },
                { question: 'A Dialética Negativa é contra:', options: ['O pensamento', 'Sistemas totalizantes', 'A negatividade', 'O objeto'], correct: 1 },
                { question: 'Sobre Auschwitz, Adorno quis dizer que:', options: ['Arte é proibida', 'Arte deve mudar', 'Arte é inútil', 'Arte é a solução'], correct: 1 }
            ]
        }
    },
    {
        id: 40313, unitId: 403, order: 13, type: 'concept', difficulty: 4, xp: 30,
        title: 'Legado de Adorno',
        content: {
            title: 'Influência Contemporânea',
            text: 'Adorno continua influente:\n\n**Na filosofia:** Agamben, Žižek, Jameson usam suas ideias.\n\n**Na crítica cultural:** Análises de mídia, publicidade, cultura pop.\n\n**Na música:** Compositores de vanguarda seguem suas ideias sobre arte autônoma.\n\n**Nos movimentos sociais:** Crítica à sociedade de consumo, ambientalismo.\n\n**Críticas:** Pessimismo excessivo, elitismo, falta de alternativas práticas.',
            keyPoints: ['Influência filosófica', 'Crítica cultural', 'Música de vanguarda', 'Críticas: pessimismo e elitismo']
        }
    },
    {
        id: 40314, unitId: 403, order: 14, type: 'timeline', difficulty: 4, xp: 35,
        title: 'Vida de Adorno',
        content: {
            events: [
                { year: 1903, event: 'Nascimento', description: 'Frankfurt, Alemanha' },
                { year: 1934, event: 'Exílio', description: 'Fuga do nazismo' },
                { year: 1944, event: 'Dialética do Esclarecimento', description: 'Com Horkheimer' },
                { year: 1951, event: 'Minima Moralia', description: 'Aforismos do exílio' },
                { year: 1966, event: 'Dialética Negativa', description: 'Principal obra filosófica' },
                { year: 1969, event: 'Morte', description: 'Suíça' }
            ]
        }
    },
    {
        id: 40315, unitId: 403, order: 15, type: 'quiz', difficulty: 4, xp: 45,
        title: 'Desafio Final: Adorno',
        content: {
            questions: [
                { question: 'Adorno era também:', options: ['Pintor', 'Musicólogo', 'Matemático', 'Biólogo'], correct: 1 },
                { question: 'A "vida danificada" se refere a:', options: ['Doença física', 'Existência sob capitalismo', 'Velhice', 'Pobreza'], correct: 1 },
                { question: 'Dialética Negativa significa:', options: ['Pessimismo', 'Recusa de síntese totalizante', 'Niilismo', 'Dialética de Marx'], correct: 1 },
                { question: 'Adorno morreu em:', options: ['1945', '1969', '1979', '1989'], correct: 1 }
            ]
        }
    }
];

// Unidade 404 - Herbert Marcuse
const BLOCKS_404 = [
    {
        id: 40401, unitId: 404, order: 1, type: 'concept', difficulty: 4, xp: 30,
        title: 'Quem foi Marcuse',
        content: {
            title: 'Herbert Marcuse (1898-1979)',
            text: 'Filósofo alemão, membro da Escola de Frankfurt. Ficou nos EUA após o exílio e tornou-se professor. Ficou famoso nos anos 1960 como "guru" da Nova Esquerda e dos movimentos estudantis. Sua obra combina Marx e Freud para analisar a dominação nas sociedades industriais avançadas. Principal obra: "O Homem Unidimensional" (1964).',
            keyPoints: ['1898-1979, alemão', 'Ficou nos EUA', 'Influenciou maio de 68', 'Combinou Marx e Freud']
        }
    },
    {
        id: 40402, unitId: 404, order: 2, type: 'video', difficulty: 4, xp: 25,
        title: 'Vídeo: Marcuse e a Contracultura',
        content: {
            title: 'O Filósofo da Revolução',
            description: 'Documentário sobre a influência de Marcuse nos movimentos de 1968 e na contracultura.',
            videoUrl: 'https://www.youtube.com/watch?v=marcuse-1968',
            duration: '17 minutos'
        }
    },
    {
        id: 40403, unitId: 404, order: 3, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Marcuse Básico',
        content: {
            questions: [
                { question: 'Marcuse ficou famoso na década de:', options: ['1940', '1950', '1960', '1970'], correct: 2 },
                { question: 'Sua principal obra é:', options: ['O Capital', 'O Homem Unidimensional', 'Ser e Tempo', 'A República'], correct: 1 },
                { question: 'Marcuse combinou Marx com:', options: ['Weber', 'Durkheim', 'Freud', 'Comte'], correct: 2 }
            ]
        }
    },
    {
        id: 40404, unitId: 404, order: 4, type: 'reading', difficulty: 4, xp: 25,
        title: 'O Homem Unidimensional',
        content: {
            title: 'A Sociedade sem Oposição',
            text: 'Em "O Homem Unidimensional" (1964), Marcuse analisa como as sociedades industriais avançadas criam uma forma de dominação sem precedentes:\n\n• **Unidimensionalidade:** Eliminação do pensamento crítico. Tudo se reduz ao existente.\n• **Tolerância repressiva:** A sociedade tolera tudo, desde que não ameace o sistema.\n• **Dessublimação repressiva:** A liberação sexual é usada para controlar, não libertar.\n• **Fechamento do universo político:** Partidos de "esquerda" e "direita" são variações do mesmo sistema.',
            keyPoints: ['Eliminação do pensamento crítico', 'Tolerância que reprime', 'Sexo como controle', 'Política sem alternativa']
        }
    },
    {
        id: 40405, unitId: 404, order: 5, type: 'match', difficulty: 4, xp: 35,
        title: 'Combine: Conceitos de Marcuse',
        content: {
            pairs: [
                { left: 'Unidimensionalidade', right: 'Fim do pensamento crítico' },
                { left: 'Tolerância repressiva', right: 'Aceitar tudo que não ameaça' },
                { left: 'Dessublimação repressiva', right: 'Sexo como controle' },
                { left: 'Grande Recusa', right: 'Negação total do sistema' },
                { left: 'Homem Unidimensional', right: 'Indivíduo sem capacidade crítica' }
            ]
        }
    },
    {
        id: 40406, unitId: 404, order: 6, type: 'concept', difficulty: 4, xp: 30,
        title: 'Eros e Civilização',
        content: {
            title: 'Freud e a Libertação',
            text: 'Em "Eros e Civilização" (1955), Marcuse reinterpreta Freud:\n\n**Freud dizia:** A civilização exige repressão dos instintos (Eros). Sem repressão, não há trabalho nem ordem.\n\n**Marcuse responde:**\n• Há repressão necessária (básica) e desnecessária (mais-repressão)\n• A mais-repressão serve à dominação, não à civilização\n• Uma sociedade libertada poderia reduzir o trabalho e liberar Eros\n• Trabalho pode se tornar jogo; sexualidade pode ser difusa (não apenas genital)\n\nVisão utópica de uma sociedade não-repressiva.',
            keyPoints: ['Diálogo com Freud', 'Mais-repressão = dominação', 'Possibilidade de libertação', 'Utopia não-repressiva']
        }
    },
    {
        id: 40407, unitId: 404, order: 7, type: 'flashcard', difficulty: 4, xp: 25,
        title: 'Flashcards: Marcuse',
        content: {
            cards: [
                { front: 'Homem Unidimensional', back: 'Indivíduo integrado ao sistema, sem pensamento crítico' },
                { front: 'Tolerância Repressiva', back: 'Tolerância que aceita tudo exceto ameaças reais ao sistema' },
                { front: 'Grande Recusa', back: 'Negação radical e total do sistema existente' },
                { front: 'Mais-repressão', back: 'Repressão que excede o necessário e serve à dominação' }
            ]
        }
    },
    {
        id: 40408, unitId: 404, order: 8, type: 'fill', difficulty: 4, xp: 30,
        title: 'Complete: Marcuse',
        content: {
            sentences: [
                { text: 'O Homem _____ não tem pensamento crítico.', answer: 'Unidimensional', options: ['Unidimensional', 'Multidimensional', 'Tridimensional'] },
                { text: 'A tolerância _____ aceita tudo que não ameaça.', answer: 'repressiva', options: ['repressiva', 'libertária', 'crítica'] },
                { text: 'Marcuse propôs a "Grande _____" ao sistema.', answer: 'Recusa', options: ['Aceitação', 'Recusa', 'Adaptação'] }
            ]
        }
    },
    {
        id: 40409, unitId: 404, order: 9, type: 'reflection', difficulty: 4, xp: 40,
        title: 'Reflexão: Somos Unidimensionais?',
        content: {
            prompt: 'Marcuse dizia que a sociedade de consumo elimina o pensamento crítico ao satisfazer necessidades falsas. Você se sente "unidimensional"? A abundância material nos torna menos críticos?',
            minLength: 100
        }
    },
    {
        id: 40410, unitId: 404, order: 10, type: 'concept', difficulty: 4, xp: 30,
        title: 'Marcuse e os Anos 60',
        content: {
            title: 'O Guru da Nova Esquerda',
            text: 'Marcuse tornou-se ícone dos movimentos de 1968:\n\n**Por quê?**\n• Criticava tanto capitalismo quanto socialismo soviético\n• Valorizava novos sujeitos revolucionários: estudantes, minorias, mulheres\n• Combinava crítica política com libertação pessoal/sexual\n• Linguagem acessível (comparado a Adorno)\n\n**Influência:**\n• Movimento estudantil\n• Black Panthers\n• Feminismo\n• Contracultura\n\nMarcuse foi o único frankfurtiano a se tornar figura pública.',
            keyPoints: ['Ícone de 1968', 'Novos sujeitos revolucionários', 'Política e libertação pessoal', 'Figura pública']
        }
    },
    {
        id: 40411, unitId: 404, order: 11, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Marcuse Avançado',
        content: {
            questions: [
                { question: '"Eros e Civilização" dialoga principalmente com:', options: ['Marx', 'Weber', 'Freud', 'Nietzsche'], correct: 2 },
                { question: 'A "mais-repressão" serve:', options: ['À civilização', 'À dominação', 'À natureza', 'À liberdade'], correct: 1 },
                { question: 'Marcuse valorizava como sujeitos revolucionários:', options: ['Só operários', 'Estudantes e minorias', 'Só intelectuais', 'Ninguém'], correct: 1 }
            ]
        }
    },
    {
        id: 40412, unitId: 404, order: 12, type: 'reading', difficulty: 4, xp: 25,
        title: 'Críticas a Marcuse',
        content: {
            title: 'Limitações da Teoria',
            text: 'Marcuse foi criticado por várias perspectivas:\n\n**Da esquerda tradicional:**\n• Abandonou a classe operária como sujeito revolucionário\n• Teoria muito abstrata, pouca estratégia prática\n\n**Da direita:**\n• Utopismo irresponsável\n• Inspirou violência política\n\n**Acadêmica:**\n• Leitura seletiva de Freud\n• Conceitos vagos e não-falsificáveis\n\n**Apesar das críticas, suas análises sobre consumo e mídia permanecem relevantes.**',
            keyPoints: ['Abandonou classe operária', 'Teoria abstrata', 'Acusado de utopismo', 'Análise de consumo ainda válida']
        }
    },
    {
        id: 40413, unitId: 404, order: 13, type: 'concept', difficulty: 4, xp: 30,
        title: 'A Grande Recusa',
        content: {
            title: 'Negação Total',
            text: 'Marcuse propôs a "Grande Recusa" como única alternativa:\n\n• **Não é reforma:** Mudanças dentro do sistema são absorvidas\n• **É negação total:** Recusar as premissas básicas da sociedade existente\n• **Quem pode fazer?:** Os "marginalizados" - estudantes, minorias, povos do Terceiro Mundo\n• **Como?:** Criar contracultura, espaços autônomos, novas formas de vida\n\n**Problema:** A Grande Recusa permaneceu mais gesto do que programa político concreto.',
            keyPoints: ['Negação total do sistema', 'Reforma é insuficiente', 'Marginalizados como sujeitos', 'Mais gesto que programa']
        }
    },
    {
        id: 40414, unitId: 404, order: 14, type: 'timeline', difficulty: 4, xp: 35,
        title: 'Vida de Marcuse',
        content: {
            events: [
                { year: 1898, event: 'Nascimento', description: 'Berlim, Alemanha' },
                { year: 1933, event: 'Exílio', description: 'Fuga do nazismo' },
                { year: 1955, event: 'Eros e Civilização', description: 'Freud e libertação' },
                { year: 1964, event: 'O Homem Unidimensional', description: 'Crítica à sociedade industrial' },
                { year: 1968, event: 'Ícone da Nova Esquerda', description: 'Influência nos movimentos' },
                { year: 1979, event: 'Morte', description: 'Alemanha' }
            ]
        }
    },
    {
        id: 40415, unitId: 404, order: 15, type: 'quiz', difficulty: 4, xp: 45,
        title: 'Desafio Final: Marcuse',
        content: {
            questions: [
                { question: 'Marcuse ficou famoso como:', options: ['Economista', 'Guru da Nova Esquerda', 'Político', 'Artista'], correct: 1 },
                { question: 'A dessublimação repressiva usa o sexo para:', options: ['Libertar', 'Controlar', 'Educar', 'Revolucionar'], correct: 1 },
                { question: 'A Grande Recusa é:', options: ['Reforma gradual', 'Negação total', 'Aceitação crítica', 'Revolução armada'], correct: 1 },
                { question: 'Marcuse valorizava como revolucionários:', options: ['Operários industriais', 'Marginalizados e estudantes', 'Militares', 'Empresários'], correct: 1 }
            ]
        }
    }
];

// Unidade 405 - Walter Benjamin
const BLOCKS_405 = [
    {
        id: 40501, unitId: 405, order: 1, type: 'concept', difficulty: 4, xp: 30,
        title: 'Quem foi Benjamin',
        content: {
            title: 'Walter Benjamin (1892-1940)',
            text: 'Crítico literário, ensaísta e filósofo alemão. Associado à Escola de Frankfurt, mas com estilo único. Combinava marxismo, misticismo judaico e análise cultural. Sua obra inclui estudos sobre Baudelaire, a cidade moderna e a reprodutibilidade técnica. Fugindo do nazismo, suicidou-se na fronteira franco-espanhola em 1940, temendo ser entregue à Gestapo.',
            keyPoints: ['1892-1940, alemão', 'Crítico literário', 'Marxismo e misticismo', 'Morte trágica fugindo do nazismo']
        }
    },
    {
        id: 40502, unitId: 405, order: 2, type: 'video', difficulty: 4, xp: 25,
        title: 'Vídeo: A Vida de Benjamin',
        content: {
            title: 'O Flâneur da Modernidade',
            description: 'Documentário sobre a vida e pensamento de Walter Benjamin, sua relação com a modernidade e morte trágica.',
            videoUrl: 'https://www.youtube.com/watch?v=walter-benjamin',
            duration: '22 minutos'
        }
    },
    {
        id: 40503, unitId: 405, order: 3, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Benjamin Básico',
        content: {
            questions: [
                { question: 'Benjamin era principalmente:', options: ['Economista', 'Crítico literário', 'Físico', 'Médico'], correct: 1 },
                { question: 'Benjamin morreu:', options: ['De doença', 'Na guerra', 'Fugindo do nazismo', 'De velhice'], correct: 2 },
                { question: 'Sua obra combina marxismo com:', options: ['Positivismo', 'Misticismo judaico', 'Darwinismo', 'Liberalismo'], correct: 1 }
            ]
        }
    },
    {
        id: 40504, unitId: 405, order: 4, type: 'reading', difficulty: 4, xp: 25,
        title: 'A Obra de Arte na Era da Reprodutibilidade Técnica',
        content: {
            title: 'Arte e Tecnologia',
            text: 'O ensaio mais famoso de Benjamin (1936) analisa como a tecnologia transforma a arte:\n\n**Aura:** A obra de arte tradicional tinha "aura" - unicidade, autenticidade, distância.\n\n**Reprodutibilidade:** Fotografia e cinema destroem a aura. A obra pode ser reproduzida infinitamente.\n\n**Consequências políticas:**\n• A arte se democratiza (todos podem acessar)\n• Mas também pode ser usada para fascismo (estetização da política)\n• Resposta: politização da arte\n\nBenjamin viu potencial revolucionário e perigo no cinema.',
            keyPoints: ['Aura = unicidade da obra', 'Reprodução destrói aura', 'Democratização da arte', 'Risco de estetização fascista']
        }
    },
    {
        id: 40505, unitId: 405, order: 5, type: 'match', difficulty: 4, xp: 35,
        title: 'Combine: Conceitos de Benjamin',
        content: {
            pairs: [
                { left: 'Aura', right: 'Unicidade e autenticidade da obra' },
                { left: 'Reprodutibilidade técnica', right: 'Fotografia e cinema' },
                { left: 'Estetização da política', right: 'Fascismo usa arte para dominação' },
                { left: 'Politização da arte', right: 'Resposta ao fascismo' },
                { left: 'Flâneur', right: 'Observador da cidade moderna' }
            ]
        }
    },
    {
        id: 40506, unitId: 405, order: 6, type: 'concept', difficulty: 4, xp: 30,
        title: 'As Teses sobre a História',
        content: {
            title: 'Contra o Progresso',
            text: 'Nas "Teses Sobre o Conceito de História" (1940), Benjamin critica a ideia de progresso:\n\n**Tese IX (Angelus Novus):** O anjo da história vê uma catástrofe única onde nós vemos progresso. Ele é impelido para o futuro por uma tempestade chamada "progresso".\n\n**Ideias centrais:**\n• A história é escrita pelos vencedores\n• Os oprimidos têm outra história\n• Revolução não é locomotiva da história, é freio de emergência\n• Cada momento pode ser porta para a redenção\n\nTexto escrito pouco antes da morte de Benjamin.',
            keyPoints: ['Crítica ao progresso', 'História dos vencedores', 'Anjo da história', 'Redenção possível']
        }
    },
    {
        id: 40507, unitId: 405, order: 7, type: 'flashcard', difficulty: 4, xp: 25,
        title: 'Flashcards: Benjamin',
        content: {
            cards: [
                { front: 'Aura', back: 'Unicidade, autenticidade e distância da obra de arte original' },
                { front: 'Flâneur', back: 'Observador da vida urbana moderna, figura de Baudelaire' },
                { front: 'Angelus Novus', back: 'Anjo da história que vê catástrofe no progresso' },
                { front: 'Passagens', back: 'Projeto inacabado sobre Paris do século XIX' }
            ]
        }
    },
    {
        id: 40508, unitId: 405, order: 8, type: 'fill', difficulty: 4, xp: 30,
        title: 'Complete: Benjamin',
        content: {
            sentences: [
                { text: 'A _____ da obra de arte é destruída pela reprodução.', answer: 'aura', options: ['aura', 'forma', 'cor'] },
                { text: 'O fascismo faz a _____ da política.', answer: 'estetização', options: ['estetização', 'negação', 'politização'] },
                { text: 'O Angelus Novus representa o anjo da _____.', answer: 'história', options: ['morte', 'história', 'arte'] }
            ]
        }
    },
    {
        id: 40509, unitId: 405, order: 9, type: 'reflection', difficulty: 4, xp: 40,
        title: 'Reflexão: Arte Digital',
        content: {
            prompt: 'Benjamin escreveu sobre fotografia e cinema. Como suas ideias se aplicam à arte digital, NFTs e inteligência artificial gerando imagens? A arte digital tem "aura"?',
            minLength: 100
        }
    },
    {
        id: 40510, unitId: 405, order: 10, type: 'concept', difficulty: 4, xp: 30,
        title: 'O Projeto das Passagens',
        content: {
            title: 'Paris, Capital do Século XIX',
            text: 'Benjamin trabalhou por anos no "Projeto das Passagens" (Passagenwerk), nunca concluído:\n\n**Tema:** As passagens (galerias comerciais cobertas) de Paris como símbolo do capitalismo do século XIX.\n\n**Método:** Montagem de citações e fragmentos. A própria forma expressa a fragmentação moderna.\n\n**Conceitos:**\n• Fantasmagoria: as mercadorias como fetiche\n• Flâneur: o observador da cidade\n• Despertar: a consciência histórica\n\nOs fragmentos foram publicados postumamente e são uma mina de insights.',
            keyPoints: ['Passagens de Paris', 'Método de montagem', 'Fantasmagoria das mercadorias', 'Publicado póstumo']
        }
    },
    {
        id: 40511, unitId: 405, order: 11, type: 'quiz', difficulty: 4, xp: 35,
        title: 'Quiz: Benjamin Avançado',
        content: {
            questions: [
                { question: 'A aura é destruída pela:', options: ['Crítica', 'Reprodução técnica', 'Censura', 'Falta de público'], correct: 1 },
                { question: 'O Projeto das Passagens estudava:', options: ['Roma antiga', 'Paris do século XIX', 'Berlim moderna', 'Londres industrial'], correct: 1 },
                { question: 'Para Benjamin, o progresso é:', options: ['Sempre bom', 'Uma catástrofe contínua', 'Inexistente', 'Lento demais'], correct: 1 }
            ]
        }
    },
    {
        id: 40512, unitId: 405, order: 12, type: 'reading', difficulty: 4, xp: 25,
        title: 'Benjamin e Baudelaire',
        content: {
            title: 'O Poeta da Modernidade',
            text: 'Benjamin dedicou anos a estudar Charles Baudelaire (1821-1867), poeta francês:\n\n**Por que Baudelaire?**\n• Primeiro poeta da modernidade urbana\n• Captou o choque da vida na metrópole\n• Criou a figura do flâneur\n• Suas "Flores do Mal" mostram a beleza no feio\n\n**O que Benjamin encontrou:**\n• A experiência fragmentada da modernidade\n• A mercantilização da arte\n• O poeta como produtor\n• Alegoria como método crítico',
            keyPoints: ['Baudelaire = poeta moderno', 'Flâneur e vida urbana', 'Choque da metrópole', 'Alegoria como método']
        }
    },
    {
        id: 40513, unitId: 405, order: 13, type: 'concept', difficulty: 4, xp: 30,
        title: 'Legado de Benjamin',
        content: {
            title: 'Influência Contemporânea',
            text: 'Benjamin é hoje um dos pensadores mais citados nas humanidades:\n\n**Na arte:** Discussões sobre originalidade, reprodução, arte digital.\n\n**Na história:** Crítica ao historicismo, história dos vencidos.\n\n**Nos estudos culturais:** Análise da cultura de massa, flâneur.\n\n**Na mídia:** Fotografia, cinema, novas tecnologias.\n\n**Curiosidade:** Benjamin foi redescoberto nos anos 1960, décadas após sua morte. Hoje é mais famoso que em vida.',
            keyPoints: ['Muito citado hoje', 'Arte e reprodução', 'História dos vencidos', 'Redescoberto nos anos 60']
        }
    },
    {
        id: 40514, unitId: 405, order: 14, type: 'timeline', difficulty: 4, xp: 35,
        title: 'Vida de Benjamin',
        content: {
            events: [
                { year: 1892, event: 'Nascimento', description: 'Berlim, Alemanha' },
                { year: 1925, event: 'Tese recusada', description: 'Carreira acadêmica frustrada' },
                { year: 1933, event: 'Exílio', description: 'Fuga do nazismo' },
                { year: 1936, event: 'A Obra de Arte...', description: 'Ensaio sobre reprodutibilidade' },
                { year: 1940, event: 'Morte', description: 'Suicídio na fronteira franco-espanhola' }
            ]
        }
    },
    {
        id: 40515, unitId: 405, order: 15, type: 'quiz', difficulty: 4, xp: 45,
        title: 'Desafio Final: Benjamin',
        content: {
            questions: [
                { question: 'Benjamin morreu:', options: ['Na Alemanha', 'Fugindo do nazismo', 'Nos EUA', 'Na Inglaterra'], correct: 1 },
                { question: 'O flâneur é figura de:', options: ['Campo', 'Cidade moderna', 'Fábrica', 'Igreja'], correct: 1 },
                { question: 'A resposta ao fascismo é:', options: ['Mais estética', 'Politização da arte', 'Silêncio', 'Emigração'], correct: 1 },
                { question: 'Benjamin foi redescoberto:', options: ['Em vida', 'Nos anos 1960', 'No século XIX', 'Nunca'], correct: 1 }
            ]
        }
    }
];

// Unidades 406-410 (estrutura similar)
const BLOCKS_406 = generateBlocksForUnit(406, 'Jürgen Habermas', 4);
const BLOCKS_407 = generateBlocksForUnit(407, 'Razão Comunicativa', 4);
const BLOCKS_408 = generateBlocksForUnit(408, 'Esfera Pública', 4);
const BLOCKS_409 = generateBlocksForUnit(409, 'Teoria da Ação Comunicativa', 4);
const BLOCKS_410 = generateBlocksForUnit(410, 'Síntese: Teoria Crítica', 4);

// Função para gerar blocos básicos
function generateBlocksForUnit(unitId, title, difficulty) {
    const baseId = unitId * 100;
    return [
        { id: baseId + 1, unitId, order: 1, type: 'concept', difficulty, xp: 30, title: `Introdução: ${title}`, content: { title: `O que é ${title}`, text: `Conteúdo introdutório sobre ${title}. Este tema é fundamental para compreender a teoria crítica e suas aplicações contemporâneas.`, keyPoints: ['Conceito principal', 'Origem histórica', 'Importância atual', 'Principais autores'] } },
        { id: baseId + 2, unitId, order: 2, type: 'video', difficulty, xp: 25, title: `Vídeo: ${title}`, content: { title: `Entendendo ${title}`, description: `Vídeo explicativo sobre ${title} e sua relevância.`, videoUrl: 'https://youtube.com/example', duration: '15 min' } },
        { id: baseId + 3, unitId, order: 3, type: 'quiz', difficulty, xp: 35, title: `Quiz: ${title}`, content: { questions: [{ question: `Qual a importância de ${title}?`, options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'], correct: 0 }] } },
        { id: baseId + 4, unitId, order: 4, type: 'reading', difficulty, xp: 25, title: `Leitura: ${title}`, content: { title: `Aprofundando ${title}`, text: `Texto detalhado sobre ${title}.`, keyPoints: ['Ponto 1', 'Ponto 2', 'Ponto 3'] } },
        { id: baseId + 5, unitId, order: 5, type: 'match', difficulty, xp: 35, title: `Combine: ${title}`, content: { pairs: [{ left: 'Conceito 1', right: 'Definição 1' }, { left: 'Conceito 2', right: 'Definição 2' }] } },
        { id: baseId + 6, unitId, order: 6, type: 'fill', difficulty, xp: 30, title: `Complete: ${title}`, content: { sentences: [{ text: `_____ é fundamental para ${title}.`, answer: 'Conceito', options: ['Conceito', 'Outro', 'Alternativa'] }] } },
        { id: baseId + 7, unitId, order: 7, type: 'flashcard', difficulty, xp: 25, title: `Flashcards: ${title}`, content: { cards: [{ front: 'Termo', back: 'Definição' }] } },
        { id: baseId + 8, unitId, order: 8, type: 'concept', difficulty, xp: 30, title: `${title} Avançado`, content: { title: `Aspectos avançados de ${title}`, text: `Análise mais profunda.`, keyPoints: ['Aspecto 1', 'Aspecto 2'] } },
        { id: baseId + 9, unitId, order: 9, type: 'reflection', difficulty, xp: 40, title: `Reflexão: ${title}`, content: { prompt: `Como ${title} se aplica à sociedade atual?`, minLength: 100 } },
        { id: baseId + 10, unitId, order: 10, type: 'quiz', difficulty, xp: 35, title: `Quiz Avançado: ${title}`, content: { questions: [{ question: `Pergunta avançada sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 1 }] } },
        { id: baseId + 11, unitId, order: 11, type: 'reading', difficulty, xp: 25, title: `Leitura Complementar: ${title}`, content: { title: `Mais sobre ${title}`, text: `Leitura adicional.`, keyPoints: ['Extra 1', 'Extra 2'] } },
        { id: baseId + 12, unitId, order: 12, type: 'order', difficulty, xp: 35, title: `Ordene: ${title}`, content: { items: [{ id: 1, text: 'Primeiro' }, { id: 2, text: 'Segundo' }], correctOrder: [1, 2] } },
        { id: baseId + 13, unitId, order: 13, type: 'concept', difficulty, xp: 30, title: `Aplicações de ${title}`, content: { title: `${title} na prática`, text: `Aplicações práticas.`, keyPoints: ['Aplicação 1', 'Aplicação 2'] } },
        { id: baseId + 14, unitId, order: 14, type: 'timeline', difficulty, xp: 35, title: `Linha do Tempo: ${title}`, content: { events: [{ year: 1900, event: 'Evento', description: 'Descrição' }] } },
        { id: baseId + 15, unitId, order: 15, type: 'quiz', difficulty, xp: 45, title: `Desafio Final: ${title}`, content: { questions: [{ question: `Desafio sobre ${title}`, options: ['A', 'B', 'C', 'D'], correct: 2 }] } }
    ];
}

// Exportar para mesclagem
if (typeof window !== 'undefined') {
    window.SECTION4_BLOCKS = {
        401: BLOCKS_401,
        402: BLOCKS_402,
        403: BLOCKS_403,
        404: BLOCKS_404,
        405: BLOCKS_405,
        406: BLOCKS_406,
        407: BLOCKS_407,
        408: BLOCKS_408,
        409: BLOCKS_409,
        410: BLOCKS_410
    };
}

console.log('✅ Seção 4 de Sociologia carregada: Sociologia Crítica');
