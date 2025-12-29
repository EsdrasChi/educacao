// ==========================================
// SOCIOLOGIA - SEÇÃO 1: FUNDAMENTOS COMPLETA
// Unidades 103-110 com conteúdo detalhado
// ==========================================

// Blocos para Unidade 103 - Auguste Comte
const BLOCKS_103 = [
    {
        id: 10301, unitId: 103, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'Quem foi Auguste Comte?',
        content: {
            title: 'O Fundador da Sociologia',
            text: 'Auguste Comte (1798-1857) foi um filósofo francês que criou o termo "sociologia" em 1838. Nascido em Montpellier, ele viveu durante um período de grandes transformações sociais na França pós-revolucionária. Comte acreditava que a sociedade poderia ser estudada cientificamente, assim como a física estuda a natureza.',
            keyPoints: ['Nasceu na França em 1798', 'Criou o termo "sociologia" em 1838', 'Fundador do Positivismo', 'Queria uma ciência da sociedade'],
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Auguste_Comte.jpg'
        }
    },
    {
        id: 10302, unitId: 103, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'Vídeo: Auguste Comte e o Positivismo',
        content: {
            title: 'Comte e a Ciência da Sociedade',
            description: 'Vídeo educativo sobre a vida e obra de Auguste Comte.',
            videoUrl: 'https://www.youtube.com/watch?v=RVz6NN1-pBo',
            duration: '12 minutos',
            questions: ['Por que Comte queria criar uma ciência da sociedade?', 'O que significa "positivismo"?']
        }
    },
    {
        id: 10303, unitId: 103, order: 3, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Vida de Comte',
        content: {
            questions: [
                { question: 'Em que país Auguste Comte nasceu?', options: ['Alemanha', 'França', 'Inglaterra', 'Itália'], correct: 1 },
                { question: 'Em que ano Comte criou o termo "sociologia"?', options: ['1798', '1818', '1838', '1858'], correct: 2 },
                { question: 'Comte é considerado o fundador de qual corrente?', options: ['Marxismo', 'Positivismo', 'Existencialismo', 'Estruturalismo'], correct: 1 }
            ]
        }
    },
    {
        id: 10304, unitId: 103, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'A Lei dos Três Estados',
        content: {
            title: 'A Evolução do Pensamento Humano',
            text: 'Comte propôs que o pensamento humano evolui por três estágios:\n\n**1. Estado Teológico**: Os fenômenos são explicados por forças sobrenaturais, deuses e espíritos.\n\n**2. Estado Metafísico**: As explicações deixam de ser sobrenaturais, mas ainda são abstratas.\n\n**3. Estado Positivo**: O conhecimento baseia-se na observação, experimentação e leis científicas.',
            keyPoints: ['Teológico: explicações sobrenaturais', 'Metafísico: explicações abstratas', 'Positivo: explicações científicas'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 10305, unitId: 103, order: 5, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Estados do Conhecimento',
        content: {
            instructions: 'Conecte cada estado à sua característica.',
            pairs: [
                { left: 'Estado Teológico', right: 'Explicações por deuses e espíritos' },
                { left: 'Estado Metafísico', right: 'Explicações abstratas e filosóficas' },
                { left: 'Estado Positivo', right: 'Explicações científicas e observáveis' },
                { left: 'Positivismo', right: 'Doutrina de Comte' },
                { left: 'Sociologia', right: 'Termo criado por Comte' }
            ]
        }
    },
    {
        id: 10306, unitId: 103, order: 6, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete: Positivismo',
        content: {
            sentences: [
                { text: 'Comte criou o termo _____ em 1838.', answer: 'sociologia', options: ['sociologia', 'filosofia', 'psicologia'] },
                { text: 'O estado mais avançado é o _____.', answer: 'positivo', options: ['teológico', 'metafísico', 'positivo'] },
                { text: 'Comte é o fundador do _____.', answer: 'positivismo', options: ['marxismo', 'positivismo', 'funcionalismo'] }
            ]
        }
    },
    {
        id: 10307, unitId: 103, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Conceitos de Comte',
        content: {
            cards: [
                { front: 'Positivismo', back: 'Corrente que valoriza o conhecimento científico baseado em fatos observáveis' },
                { front: 'Lei dos Três Estados', back: 'Teoria de que o pensamento evolui do teológico ao metafísico ao positivo' },
                { front: 'Física Social', back: 'Nome original que Comte deu à sociologia' },
                { front: 'Estado Teológico', back: 'Primeiro estágio: explicações sobrenaturais' },
                { front: 'Estado Positivo', back: 'Terceiro estágio: conhecimento científico' }
            ]
        }
    },
    {
        id: 10308, unitId: 103, order: 8, type: 'concept', difficulty: 1, xp: 20,
        title: 'O Projeto de Comte',
        content: {
            title: 'Uma Nova Ciência para uma Nova Era',
            text: 'Comte queria aplicar os métodos das ciências naturais ao estudo da sociedade. Ele organizou as ciências em uma hierarquia: Matemática → Astronomia → Física → Química → Biologia → Sociologia. A sociologia seria a "rainha das ciências".',
            keyPoints: ['Método científico aplicado à sociedade', 'Hierarquia das ciências', 'Sociologia como ciência mais complexa']
        }
    },
    {
        id: 10309, unitId: 103, order: 9, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene: Hierarquia das Ciências',
        content: {
            instructions: 'Ordene as ciências segundo Comte (da mais simples à mais complexa).',
            items: [
                { text: 'Matemática', correctOrder: 1 },
                { text: 'Astronomia', correctOrder: 2 },
                { text: 'Física', correctOrder: 3 },
                { text: 'Química', correctOrder: 4 },
                { text: 'Biologia', correctOrder: 5 },
                { text: 'Sociologia', correctOrder: 6 }
            ]
        }
    },
    {
        id: 10310, unitId: 103, order: 10, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Reflexão: Ciência e Sociedade',
        content: {
            prompt: 'Comte acreditava que a ciência poderia resolver todos os problemas sociais. Você concorda? Quais são os limites de usar métodos científicos para estudar a sociedade?',
            examples: ['A sociedade é previsível como a natureza?', 'Valores podem ser estudados cientificamente?'],
            minWords: 50
        }
    },
    {
        id: 10311, unitId: 103, order: 11, type: 'quiz', difficulty: 1, xp: 30,
        title: 'Quiz: Aprofundando Comte',
        content: {
            questions: [
                { question: 'Qual nome Comte deu inicialmente à sociologia?', options: ['Ciência social', 'Física social', 'Estudo humano', 'Antropologia'], correct: 1 },
                { question: 'O lema "Ordem e Progresso" veio de:', options: ['Marx', 'Durkheim', 'Comte', 'Weber'], correct: 2 }
            ]
        }
    },
    {
        id: 10312, unitId: 103, order: 12, type: 'reading', difficulty: 1, xp: 15,
        title: 'Comte e o Brasil',
        content: {
            title: 'Positivismo na Bandeira Brasileira',
            text: 'O positivismo de Comte teve grande influência no Brasil. O lema "Ordem e Progresso" na bandeira brasileira vem diretamente de Comte. Intelectuais e militares brasileiros no fim do século XIX foram fortemente influenciados pelo positivismo. Benjamin Constant, um dos proclamadores da República, era positivista.',
            keyPoints: ['Lema da bandeira brasileira', 'Influência na proclamação da República', 'Igreja Positivista no Brasil'],
            timeToRead: '6 minutos'
        }
    },
    {
        id: 10313, unitId: 103, order: 13, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Conceitos e Definições',
        content: {
            pairs: [
                { left: 'Ordem e Progresso', right: 'Lema positivista na bandeira do Brasil' },
                { left: 'Física Social', right: 'Primeiro nome da sociologia' },
                { left: '1838', right: 'Ano de criação do termo sociologia' },
                { left: 'Hierarquia das ciências', right: 'Da matemática à sociologia' }
            ]
        }
    },
    {
        id: 10314, unitId: 103, order: 14, type: 'timeline', difficulty: 1, xp: 30,
        title: 'Linha do Tempo: Auguste Comte',
        content: {
            title: 'Vida e Obra de Comte',
            events: [
                { year: 1798, event: 'Nascimento', description: 'Auguste Comte nasce em Montpellier, França' },
                { year: 1817, event: 'Encontra Saint-Simon', description: 'Torna-se secretário do filósofo' },
                { year: 1838, event: 'Cria "Sociologia"', description: 'O termo aparece no Curso de Filosofia Positiva' },
                { year: 1857, event: 'Morte', description: 'Comte morre em Paris' }
            ]
        }
    },
    {
        id: 10315, unitId: 103, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final: Comte',
        content: {
            questions: [
                { question: 'A Lei dos Três Estados propõe que o conhecimento evolui de:', options: ['Positivo → Teológico → Metafísico', 'Teológico → Metafísico → Positivo', 'Metafísico → Positivo → Teológico'], correct: 1 },
                { question: 'No Brasil, o positivismo influenciou:', options: ['Apenas a literatura', 'A bandeira e a República', 'Só a economia'], correct: 1 },
                { question: 'Comte organizou as ciências com a sociologia:', options: ['Na base', 'No meio', 'No topo (mais complexa)'], correct: 2 }
            ]
        }
    }
];

// Blocos para Unidade 104 - Método Sociológico
const BLOCKS_104 = [
    {
        id: 10401, unitId: 104, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'O que é Método Científico?',
        content: {
            title: 'Como a Sociologia Estuda a Sociedade',
            text: 'O método sociológico é o conjunto de procedimentos usados para estudar a sociedade de forma sistemática e rigorosa. Diferente do senso comum, a sociologia usa técnicas específicas para coletar e analisar dados sobre fenômenos sociais.',
            keyPoints: ['Procedimentos sistemáticos', 'Diferente do senso comum', 'Rigor na coleta de dados', 'Análise objetiva']
        }
    },
    {
        id: 10402, unitId: 104, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'Vídeo: Métodos de Pesquisa',
        content: {
            title: 'Como Fazer Pesquisa Social',
            description: 'Vídeo explicando os principais métodos usados em pesquisas sociológicas.',
            videoUrl: 'https://www.youtube.com/watch?v=metodos-sociologia',
            duration: '15 minutos'
        }
    },
    {
        id: 10403, unitId: 104, order: 3, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Métodos Básicos',
        content: {
            questions: [
                { question: 'A pesquisa que usa números e estatísticas é chamada de:', options: ['Qualitativa', 'Quantitativa', 'Teórica', 'Abstrata'], correct: 1 },
                { question: 'Entrevistas em profundidade são típicas de pesquisas:', options: ['Quantitativas', 'Qualitativas', 'Matemáticas', 'Estatísticas'], correct: 1 },
                { question: 'O que diferencia a sociologia do senso comum?', options: ['Nada', 'Método científico', 'Opinião pessoal', 'Intuição'], correct: 1 }
            ]
        }
    },
    {
        id: 10404, unitId: 104, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'Tipos de Pesquisa',
        content: {
            title: 'Métodos Quantitativos e Qualitativos',
            text: '**Pesquisa Quantitativa**\nUsa números, estatísticas e grandes amostras. Exemplos: censos, pesquisas eleitorais, surveys.\n\n**Pesquisa Qualitativa**\nBusca compreender significados e interpretações. Exemplos: entrevistas, observação participante.\n\n**Métodos Mistos**\nCombina quantitativo e qualitativo para uma visão mais completa.',
            keyPoints: ['Quantitativa: números e estatísticas', 'Qualitativa: significados e interpretações', 'Mista: combina ambas'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 10405, unitId: 104, order: 5, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Métodos e Técnicas',
        content: {
            pairs: [
                { left: 'Pesquisa quantitativa', right: 'Usa estatísticas e grandes amostras' },
                { left: 'Pesquisa qualitativa', right: 'Busca significados e interpretações' },
                { left: 'Observação participante', right: 'Pesquisador participa do grupo' },
                { left: 'Survey', right: 'Questionário aplicado a muitas pessoas' },
                { left: 'Entrevista', right: 'Conversa guiada por roteiro' }
            ]
        }
    },
    {
        id: 10406, unitId: 104, order: 6, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete: Metodologia',
        content: {
            sentences: [
                { text: 'A pesquisa _____ trabalha com números e estatísticas.', answer: 'quantitativa', options: ['quantitativa', 'qualitativa', 'teórica'] },
                { text: 'A pesquisa _____ busca compreender significados.', answer: 'qualitativa', options: ['quantitativa', 'qualitativa', 'numérica'] },
                { text: 'O _____ é a base da pesquisa científica.', answer: 'método', options: ['método', 'achismo', 'preconceito'] }
            ]
        }
    },
    {
        id: 10407, unitId: 104, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Técnicas de Pesquisa',
        content: {
            cards: [
                { front: 'Survey', back: 'Questionário padronizado aplicado a grande número de pessoas' },
                { front: 'Observação Participante', back: 'Pesquisador convive com o grupo estudado' },
                { front: 'Etnografia', back: 'Descrição detalhada de um grupo ou cultura' },
                { front: 'Análise de Conteúdo', back: 'Estudo sistemático de textos, imagens ou discursos' },
                { front: 'Grupo Focal', back: 'Discussão em grupo sobre um tema específico' }
            ]
        }
    },
    {
        id: 10408, unitId: 104, order: 8, type: 'concept', difficulty: 1, xp: 20,
        title: 'Etapas da Pesquisa',
        content: {
            title: 'Do Problema à Conclusão',
            text: 'Uma pesquisa sociológica segue etapas:\n\n1. **Definir o problema**: O que queremos saber?\n2. **Revisar literatura**: O que já foi estudado?\n3. **Criar hipóteses**: O que esperamos encontrar?\n4. **Escolher método**: Como vamos pesquisar?\n5. **Coletar dados**: Aplicar questionários, fazer entrevistas\n6. **Analisar dados**: Interpretar os resultados\n7. **Conclusões**: Responder às perguntas iniciais',
            keyPoints: ['Pesquisa é um processo', 'Cada etapa é importante', 'Rigor metodológico']
        }
    },
    {
        id: 10409, unitId: 104, order: 9, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene: Etapas da Pesquisa',
        content: {
            items: [
                { text: 'Definir o problema de pesquisa', correctOrder: 1 },
                { text: 'Revisar a literatura existente', correctOrder: 2 },
                { text: 'Formular hipóteses', correctOrder: 3 },
                { text: 'Coletar dados', correctOrder: 4 },
                { text: 'Analisar e interpretar dados', correctOrder: 5 },
                { text: 'Apresentar conclusões', correctOrder: 6 }
            ]
        }
    },
    {
        id: 10410, unitId: 104, order: 10, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Reflexão: Pesquisa e Ética',
        content: {
            prompt: 'A pesquisa sociológica envolve pessoas. Quais cuidados éticos um pesquisador deve ter?',
            examples: ['Consentimento informado', 'Anonimato dos participantes', 'Não causar danos'],
            minWords: 50
        }
    },
    {
        id: 10411, unitId: 104, order: 11, type: 'quiz', difficulty: 1, xp: 30,
        title: 'Quiz: Ética e Pesquisa',
        content: {
            questions: [
                { question: 'O consentimento informado significa que:', options: ['O pesquisador decide tudo', 'Os participantes sabem do que se trata', 'Não precisa permissão'], correct: 1 },
                { question: 'O anonimato protege:', options: ['O pesquisador', 'A identidade dos participantes', 'Os dados estatísticos'], correct: 1 },
                { question: 'Uma hipótese é:', options: ['Uma certeza', 'Uma suposição a ser testada', 'O resultado final'], correct: 1 }
            ]
        }
    },
    {
        id: 10412, unitId: 104, order: 12, type: 'reading', difficulty: 1, xp: 15,
        title: 'Senso Comum vs. Ciência',
        content: {
            title: 'Por que Precisamos de Método?',
            text: 'O senso comum é o conhecimento do dia a dia. Já a ciência busca ir além:\n\n**Senso Comum:**\n- Generalizações sem dados\n- Preconceitos não questionados\n\n**Ciência Sociológica:**\n- Pesquisa com dados\n- Comparação histórica\n- Análise das causas sociais',
            keyPoints: ['Senso comum: experiência pessoal', 'Ciência: baseada em método', 'Sociologia questiona o óbvio'],
            timeToRead: '6 minutos'
        }
    },
    {
        id: 10413, unitId: 104, order: 13, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Senso Comum e Ciência',
        content: {
            pairs: [
                { left: 'Senso comum', right: 'Conhecimento do dia a dia' },
                { left: 'Ciência', right: 'Conhecimento metodológico' },
                { left: 'Hipótese', right: 'Suposição a ser testada' },
                { left: 'Dados', right: 'Informações coletadas' }
            ]
        }
    },
    {
        id: 10414, unitId: 104, order: 14, type: 'timeline', difficulty: 1, xp: 30,
        title: 'Evolução dos Métodos',
        content: {
            events: [
                { year: 1838, event: 'Comte: sociologia como ciência', description: 'Propõe método positivo' },
                { year: 1895, event: 'Durkheim: regras do método', description: 'Estabelece bases científicas' },
                { year: 1920, event: 'Escola de Chicago', description: 'Desenvolve métodos qualitativos' },
                { year: 2000, event: 'Métodos digitais', description: 'Análise de redes e big data' }
            ]
        }
    },
    {
        id: 10415, unitId: 104, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final: Método',
        content: {
            questions: [
                { question: 'A principal diferença entre senso comum e sociologia é:', options: ['Nenhuma', 'O método científico', 'A opinião'], correct: 1 },
                { question: 'Observação participante é um método:', options: ['Quantitativo', 'Qualitativo', 'Estatístico'], correct: 1 },
                { question: 'Qual etapa vem primeiro na pesquisa?', options: ['Conclusão', 'Coleta de dados', 'Definir o problema'], correct: 2 }
            ]
        }
    }
];

// Blocos para Unidade 105 - Sociedade e Indivíduo
const BLOCKS_105 = [
    {
        id: 10501, unitId: 105, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'O Grande Debate',
        content: {
            title: 'Sociedade e Indivíduo: Quem Determina Quem?',
            text: 'Uma das questões centrais da sociologia é: somos moldados pela sociedade ou moldamos a sociedade? Este debate entre estrutura (sociedade) e agência (indivíduo) atravessa toda a história da sociologia.',
            keyPoints: ['Estrutura: forças sociais que nos moldam', 'Agência: capacidade de escolher e agir', 'Debate central na sociologia']
        }
    },
    {
        id: 10502, unitId: 105, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'Vídeo: Indivíduo e Sociedade',
        content: {
            title: 'Como a Sociedade nos Forma',
            description: 'Vídeo que explora a relação entre indivíduo e sociedade.',
            videoUrl: 'https://www.youtube.com/watch?v=sociedade-individuo',
            duration: '10 minutos'
        }
    },
    {
        id: 10503, unitId: 105, order: 3, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Estrutura e Agência',
        content: {
            questions: [
                { question: 'Estrutura social se refere a:', options: ['Prédios e construções', 'Forças sociais que moldam comportamento', 'Escolhas individuais'], correct: 1 },
                { question: 'Agência significa:', options: ['Uma empresa', 'Capacidade de agir e escolher', 'Estrutura social'], correct: 1 },
                { question: 'O debate estrutura vs. agência pergunta:', options: ['Quem é mais rico', 'Quem determina quem', 'Quem é mais inteligente'], correct: 1 }
            ]
        }
    },
    {
        id: 10504, unitId: 105, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'Perspectivas Sociológicas',
        content: {
            title: 'Diferentes Visões sobre Indivíduo e Sociedade',
            text: '**Durkheim:** A sociedade é maior que os indivíduos. Ela nos precede e nos molda.\n\n**Weber:** A sociedade é construída pelas ações de indivíduos. Devemos entender o significado das ações.\n\n**Marx:** Os homens fazem sua própria história, mas não em condições escolhidas por eles.\n\n**Bourdieu e Giddens:** Estrutura e agência se influenciam mutuamente.',
            keyPoints: ['Durkheim: sociedade molda indivíduo', 'Weber: indivíduo constrói sociedade', 'Contemporâneos: influência mútua'],
            timeToRead: '10 minutos'
        }
    },
    {
        id: 10505, unitId: 105, order: 5, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Pensadores e Visões',
        content: {
            pairs: [
                { left: 'Durkheim', right: 'Sociedade molda o indivíduo' },
                { left: 'Weber', right: 'Indivíduo dá sentido às ações' },
                { left: 'Marx', right: 'Relação dialética' },
                { left: 'Estrutura', right: 'Forças sociais' },
                { left: 'Agência', right: 'Capacidade de ação' }
            ]
        }
    },
    {
        id: 10506, unitId: 105, order: 6, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete: Conceitos',
        content: {
            sentences: [
                { text: 'A _____ se refere às forças sociais que nos moldam.', answer: 'estrutura', options: ['estrutura', 'agência', 'liberdade'] },
                { text: 'A _____ é a capacidade de agir e fazer escolhas.', answer: 'agência', options: ['estrutura', 'agência', 'sociedade'] },
                { text: 'Para _____, a sociedade é como um organismo.', answer: 'Durkheim', options: ['Marx', 'Weber', 'Durkheim'] }
            ]
        }
    },
    {
        id: 10507, unitId: 105, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Indivíduo e Sociedade',
        content: {
            cards: [
                { front: 'Estrutura Social', back: 'Padrões estáveis de relações que moldam o comportamento' },
                { front: 'Agência', back: 'Capacidade dos indivíduos de agir e fazer escolhas' },
                { front: 'Determinismo Social', back: 'Ideia de que a sociedade determina completamente o indivíduo' },
                { front: 'Habitus (Bourdieu)', back: 'Disposições incorporadas que guiam nossas ações' }
            ]
        }
    },
    {
        id: 10508, unitId: 105, order: 8, type: 'concept', difficulty: 1, xp: 20,
        title: 'Exemplos Práticos',
        content: {
            title: 'Estrutura e Agência no Cotidiano',
            text: 'Pense em escolher uma profissão:\n\n**Fatores Estruturais:**\n- Classe social da família\n- Acesso à educação\n- Gênero e expectativas\n\n**Fatores de Agência:**\n- Interesses pessoais\n- Esforço individual\n- Decisões conscientes\n\nA realidade é uma combinação de ambos.',
            keyPoints: ['Escolhas não são totalmente livres', 'Nem totalmente determinadas', 'Contexto importa']
        }
    },
    {
        id: 10509, unitId: 105, order: 9, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene: Do Micro ao Macro',
        content: {
            items: [
                { text: 'Pensamentos pessoais', correctOrder: 1 },
                { text: 'Relações familiares', correctOrder: 2 },
                { text: 'Grupos de amigos', correctOrder: 3 },
                { text: 'Instituições (escola, trabalho)', correctOrder: 4 },
                { text: 'Estrutura social ampla', correctOrder: 5 }
            ]
        }
    },
    {
        id: 10510, unitId: 105, order: 10, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Reflexão: Sua Vida',
        content: {
            prompt: 'Pense em uma escolha importante que você fez. Quais fatores estruturais (família, classe, gênero) influenciaram? Quais foram suas escolhas pessoais?',
            examples: ['Escolha de curso', 'Primeiro emprego', 'Onde morar'],
            minWords: 60
        }
    },
    {
        id: 10511, unitId: 105, order: 11, type: 'quiz', difficulty: 1, xp: 30,
        title: 'Quiz: Aplicando Conceitos',
        content: {
            questions: [
                { question: 'Uma pessoa nascer em família rica é exemplo de:', options: ['Agência', 'Estrutura', 'Escolha'], correct: 1 },
                { question: 'Decidir estudar mais é exemplo de:', options: ['Só estrutura', 'Só agência', 'Ambos'], correct: 2 },
                { question: 'O habitus de Bourdieu conecta:', options: ['Política e economia', 'Estrutura e agência', 'Religião e ciência'], correct: 1 }
            ]
        }
    },
    {
        id: 10512, unitId: 105, order: 12, type: 'reading', difficulty: 1, xp: 15,
        title: 'Bourdieu e o Habitus',
        content: {
            title: 'Uma Ponte entre Estrutura e Agência',
            text: 'Pierre Bourdieu desenvolveu o conceito de **habitus** para explicar como estrutura e agência se conectam.\n\nO habitus são disposições duráveis que incorporamos desde a infância: formas de falar, de se portar, de pensar. Ele é produto da estrutura social, mas também orienta nossas ações.',
            keyPoints: ['Habitus: disposições incorporadas', 'Produto da socialização', 'Orienta ações sem determinar'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 10513, unitId: 105, order: 13, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Exemplos',
        content: {
            pairs: [
                { left: 'Nascer em família pobre', right: 'Fator estrutural' },
                { left: 'Estudar para concurso', right: 'Fator de agência' },
                { left: 'Expectativas de gênero', right: 'Fator estrutural' },
                { left: 'Mudar de carreira', right: 'Fator de agência' }
            ]
        }
    },
    {
        id: 10514, unitId: 105, order: 14, type: 'timeline', difficulty: 1, xp: 30,
        title: 'Evolução do Debate',
        content: {
            events: [
                { year: 1895, event: 'Durkheim: Regras do Método', description: 'Ênfase na estrutura' },
                { year: 1920, event: 'Weber: Economia e Sociedade', description: 'Ênfase na ação social' },
                { year: 1970, event: 'Bourdieu: Habitus', description: 'Busca síntese' },
                { year: 1984, event: 'Giddens: Estruturação', description: 'Dualidade da estrutura' }
            ]
        }
    },
    {
        id: 10515, unitId: 105, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final',
        content: {
            questions: [
                { question: 'O debate estrutura vs. agência questiona:', options: ['Quem é mais rico', 'Quanto somos livres ou determinados', 'Quem é mais inteligente'], correct: 1 },
                { question: 'Bourdieu propõe o conceito de:', options: ['Mais-valia', 'Habitus', 'Anomia'], correct: 1 },
                { question: 'Para a sociologia contemporânea:', options: ['Só estrutura importa', 'Só agência importa', 'Ambos se influenciam'], correct: 2 }
            ]
        }
    }
];

// Blocos para Unidade 106 - Cultura e Socialização
const BLOCKS_106 = [
    {
        id: 10601, unitId: 106, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'O que é Cultura?',
        content: {
            title: 'Cultura: O Mundo que Construímos',
            text: 'Cultura é tudo aquilo que é criado pelos seres humanos: língua, costumes, valores, arte, tecnologia, leis. Diferente dos instintos biológicos, a cultura é aprendida e transmitida de geração em geração.',
            keyPoints: ['Cultura é criação humana', 'É aprendida, não inata', 'Transmitida entre gerações', 'Varia entre sociedades']
        }
    },
    {
        id: 10602, unitId: 106, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'Vídeo: Cultura e Identidade',
        content: {
            title: 'Como a Cultura nos Define',
            description: 'Documentário sobre como diferentes culturas moldam a identidade das pessoas.',
            videoUrl: 'https://www.youtube.com/watch?v=cultura-identidade',
            duration: '12 minutos'
        }
    },
    {
        id: 10603, unitId: 106, order: 3, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Conceito de Cultura',
        content: {
            questions: [
                { question: 'Cultura é:', options: ['Só arte e música', 'Tudo que é criado por humanos', 'Instinto biológico'], correct: 1 },
                { question: 'A cultura é:', options: ['Inata', 'Aprendida', 'Genética'], correct: 1 },
                { question: 'Língua, costumes e valores são exemplos de:', options: ['Biologia', 'Cultura', 'Instinto'], correct: 1 }
            ]
        }
    },
    {
        id: 10604, unitId: 106, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'Elementos da Cultura',
        content: {
            title: 'Do que é Feita a Cultura',
            text: '**Elementos Materiais:** Objetos, tecnologias, arquitetura\n\n**Elementos Simbólicos:** Língua, valores, crenças, normas, símbolos\n\n**Componentes Principais:**\n- **Valores**: O que é considerado bom ou mau\n- **Normas**: Regras de comportamento\n- **Símbolos**: Coisas que representam outras\n- **Linguagem**: Sistema de comunicação',
            keyPoints: ['Cultura material e simbólica', 'Valores orientam escolhas', 'Normas regulam comportamento'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 10605, unitId: 106, order: 5, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Elementos Culturais',
        content: {
            pairs: [
                { left: 'Valores', right: 'O que é considerado bom ou mau' },
                { left: 'Normas', right: 'Regras de comportamento' },
                { left: 'Símbolos', right: 'Bandeira, cruz, logotipos' },
                { left: 'Linguagem', right: 'Sistema de comunicação' },
                { left: 'Cultura material', right: 'Objetos e tecnologias' }
            ]
        }
    },
    {
        id: 10606, unitId: 106, order: 6, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete: Cultura',
        content: {
            sentences: [
                { text: 'A _____ é aprendida, não inata.', answer: 'cultura', options: ['cultura', 'biologia', 'genética'] },
                { text: '_____ são regras de comportamento social.', answer: 'Normas', options: ['Normas', 'Genes', 'Instintos'] },
                { text: 'A _____ é o principal sistema de comunicação cultural.', answer: 'linguagem', options: ['linguagem', 'genética', 'biologia'] }
            ]
        }
    },
    {
        id: 10607, unitId: 106, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Cultura',
        content: {
            cards: [
                { front: 'Cultura', back: 'Conjunto de conhecimentos, crenças, arte, moral, leis e costumes de uma sociedade' },
                { front: 'Etnocentrismo', back: 'Julgar outras culturas pelos padrões da própria' },
                { front: 'Relativismo Cultural', back: 'Compreender cada cultura em seus próprios termos' },
                { front: 'Aculturação', back: 'Processo de mudança cultural pelo contato entre culturas' },
                { front: 'Subcultura', back: 'Grupo com cultura própria dentro de uma cultura maior' }
            ]
        }
    },
    {
        id: 10608, unitId: 106, order: 8, type: 'concept', difficulty: 1, xp: 20,
        title: 'Socialização',
        content: {
            title: 'Como Nos Tornamos Sociais',
            text: 'Socialização é o processo pelo qual aprendemos a viver em sociedade. Desde que nascemos, somos ensinados a falar, a nos comportar, a pensar de certas formas. Sem socialização, não seríamos humanos no sentido social.',
            keyPoints: ['Processo de aprendizado social', 'Começa no nascimento', 'Dura toda a vida', 'Nos torna membros da sociedade']
        }
    },
    {
        id: 10609, unitId: 106, order: 9, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene: Agentes de Socialização',
        content: {
            items: [
                { text: 'Família', correctOrder: 1 },
                { text: 'Escola', correctOrder: 2 },
                { text: 'Grupo de amigos', correctOrder: 3 },
                { text: 'Trabalho', correctOrder: 4 },
                { text: 'Mídia e redes sociais', correctOrder: 5 }
            ]
        }
    },
    {
        id: 10610, unitId: 106, order: 10, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Reflexão: Sua Socialização',
        content: {
            prompt: 'Pense nos principais agentes que participaram da sua socialização. Quais valores, comportamentos e formas de pensar você aprendeu com cada um?',
            examples: ['O que a família ensinou?', 'O que aprendeu na escola além do conteúdo?', 'Influência dos amigos'],
            minWords: 60
        }
    },
    {
        id: 10611, unitId: 106, order: 11, type: 'quiz', difficulty: 1, xp: 30,
        title: 'Quiz: Socialização',
        content: {
            questions: [
                { question: 'O principal agente de socialização primária é:', options: ['A escola', 'A família', 'O trabalho'], correct: 1 },
                { question: 'Socialização secundária ocorre principalmente:', options: ['Na família', 'Na escola e trabalho', 'No útero'], correct: 1 },
                { question: 'Sem socialização, uma pessoa:', options: ['Seria mais inteligente', 'Não seria humana socialmente', 'Seria igual'], correct: 1 }
            ]
        }
    },
    {
        id: 10612, unitId: 106, order: 12, type: 'reading', difficulty: 1, xp: 15,
        title: 'Tipos de Socialização',
        content: {
            title: 'Socialização Primária e Secundária',
            text: '**Socialização Primária:**\n- Ocorre na infância, principalmente na família\n- Aprendemos a língua, valores básicos, normas fundamentais\n- É a mais profunda e duradoura\n\n**Socialização Secundária:**\n- Ocorre depois, em instituições como escola, trabalho\n- Aprendemos papéis específicos\n- É contínua ao longo da vida\n\n**Ressocialização:**\n- Mudança radical de valores\n- Ocorre em instituições totais (prisões, conventos)',
            keyPoints: ['Primária: família, infância', 'Secundária: escola, trabalho', 'Ressocialização: mudança radical'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 10613, unitId: 106, order: 13, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Tipos de Socialização',
        content: {
            pairs: [
                { left: 'Socialização primária', right: 'Família, infância' },
                { left: 'Socialização secundária', right: 'Escola, trabalho' },
                { left: 'Ressocialização', right: 'Prisão, exército' },
                { left: 'Etnocentrismo', right: 'Julgar outras culturas' },
                { left: 'Relativismo', right: 'Compreender cada cultura' }
            ]
        }
    },
    {
        id: 10614, unitId: 106, order: 14, type: 'timeline', difficulty: 1, xp: 30,
        title: 'Linha do Tempo da Socialização',
        content: {
            events: [
                { year: 0, event: 'Nascimento', description: 'Início da socialização primária' },
                { year: 6, event: 'Entrada na escola', description: 'Início da socialização secundária' },
                { year: 15, event: 'Adolescência', description: 'Forte influência do grupo de pares' },
                { year: 20, event: 'Entrada no trabalho', description: 'Socialização profissional' }
            ]
        }
    },
    {
        id: 10615, unitId: 106, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final: Cultura e Socialização',
        content: {
            questions: [
                { question: 'Cultura se diferencia de natureza porque é:', options: ['Inata', 'Aprendida', 'Genética'], correct: 1 },
                { question: 'Julgar outras culturas pela nossa é:', options: ['Relativismo', 'Etnocentrismo', 'Aculturação'], correct: 1 },
                { question: 'A socialização primária ocorre principalmente:', options: ['No trabalho', 'Na família', 'Na prisão'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 107 - Instituições Sociais
const BLOCKS_107 = [
    {
        id: 10701, unitId: 107, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'O que são Instituições?',
        content: {
            title: 'Instituições Sociais: Pilares da Sociedade',
            text: 'Instituições sociais são estruturas estáveis que organizam a vida em sociedade. Elas estabelecem padrões de comportamento, normas e valores. As principais são: família, educação, religião, economia, política e mídia.',
            keyPoints: ['Estruturas estáveis', 'Organizam a vida social', 'Estabelecem normas e padrões', 'São fundamentais para a sociedade']
        }
    },
    {
        id: 10702, unitId: 107, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'Vídeo: Instituições Sociais',
        content: {
            title: 'Como as Instituições Funcionam',
            description: 'Vídeo educativo explicando o papel das principais instituições.',
            videoUrl: 'https://www.youtube.com/watch?v=instituicoes-sociais',
            duration: '14 minutos'
        }
    },
    {
        id: 10703, unitId: 107, order: 3, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Instituições Básicas',
        content: {
            questions: [
                { question: 'Qual é a primeira instituição de socialização?', options: ['Escola', 'Igreja', 'Família'], correct: 2 },
                { question: 'Instituições sociais são:', options: ['Prédios físicos', 'Estruturas de organização social', 'Leis escritas'], correct: 1 },
                { question: 'NÃO é uma instituição social:', options: ['Família', 'Escola', 'Árvore'], correct: 2 }
            ]
        }
    },
    {
        id: 10704, unitId: 107, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'A Família como Instituição',
        content: {
            title: 'A Família: Primeira e Principal Instituição',
            text: 'A família é considerada a instituição mais básica da sociedade. Suas funções incluem:\n\n**Funções Tradicionais:**\n- Reprodução e cuidado das crianças\n- Socialização primária\n- Suporte emocional e afetivo\n\n**Mudanças Contemporâneas:**\n- Novos arranjos familiares\n- Menor número de filhos\n- Mulheres no mercado de trabalho',
            keyPoints: ['Primeira instituição social', 'Socialização primária', 'Em constante transformação'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 10705, unitId: 107, order: 5, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Instituições e Funções',
        content: {
            pairs: [
                { left: 'Família', right: 'Socialização primária' },
                { left: 'Escola', right: 'Educação formal' },
                { left: 'Religião', right: 'Sentido e valores morais' },
                { left: 'Estado', right: 'Organização política' },
                { left: 'Economia', right: 'Produção e distribuição' }
            ]
        }
    },
    {
        id: 10706, unitId: 107, order: 6, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete: Instituições',
        content: {
            sentences: [
                { text: 'A _____ é a primeira instituição de socialização.', answer: 'família', options: ['família', 'escola', 'igreja'] },
                { text: 'A _____ é responsável pela educação formal.', answer: 'escola', options: ['família', 'escola', 'mídia'] },
                { text: 'O _____ organiza a vida política da sociedade.', answer: 'Estado', options: ['Estado', 'mercado', 'clube'] }
            ]
        }
    },
    {
        id: 10707, unitId: 107, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Instituições',
        content: {
            cards: [
                { front: 'Instituição Social', back: 'Estrutura estável que organiza comportamentos e relações sociais' },
                { front: 'Família', back: 'Instituição responsável pela reprodução e socialização primária' },
                { front: 'Escola', back: 'Instituição de socialização secundária e educação formal' },
                { front: 'Religião', back: 'Instituição que fornece sentido, valores morais e rituais' },
                { front: 'Estado', back: 'Instituição política com poder sobre um território' }
            ]
        }
    },
    {
        id: 10708, unitId: 107, order: 8, type: 'concept', difficulty: 1, xp: 20,
        title: 'Escola e Educação',
        content: {
            title: 'A Escola: Fábrica de Cidadãos?',
            text: 'A escola é a instituição responsável pela educação formal. Mas ela não ensina apenas conteúdos - também transmite valores, disciplina e formas de pensar.\n\n**Durkheim:** A escola ensina valores comuns.\n**Bourdieu:** A escola reproduz desigualdades.\n**Foucault:** A escola disciplina corpos e mentes.',
            keyPoints: ['Educação formal', 'Transmissão de valores', 'Pode integrar ou reproduzir desigualdades']
        }
    },
    {
        id: 10709, unitId: 107, order: 9, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene: Escala das Instituições',
        content: {
            items: [
                { text: 'Família', correctOrder: 1 },
                { text: 'Escola', correctOrder: 2 },
                { text: 'Religião/Igreja', correctOrder: 3 },
                { text: 'Mercado de trabalho', correctOrder: 4 },
                { text: 'Estado/Governo', correctOrder: 5 }
            ]
        }
    },
    {
        id: 10710, unitId: 107, order: 10, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Reflexão: Instituições em Mudança',
        content: {
            prompt: 'As instituições sociais estão mudando rapidamente (família, escola, religião). Escolha uma e reflita: como ela mudou nas últimas décadas?',
            examples: ['Novos modelos de família', 'Escola e tecnologia', 'Declínio da religião tradicional'],
            minWords: 60
        }
    },
    {
        id: 10711, unitId: 107, order: 11, type: 'quiz', difficulty: 1, xp: 30,
        title: 'Quiz: Funções das Instituições',
        content: {
            questions: [
                { question: 'Para Durkheim, a escola serve para:', options: ['Reproduzir desigualdades', 'Integrar à sociedade', 'Disciplinar corpos'], correct: 1 },
                { question: 'Para Bourdieu, a escola tende a:', options: ['Igualar todos', 'Reproduzir desigualdades', 'Eliminar classes'], correct: 1 },
                { question: 'Religião é uma instituição que oferece:', options: ['Só entretenimento', 'Sentido e valores', 'Só política'], correct: 1 }
            ]
        }
    },
    {
        id: 10712, unitId: 107, order: 12, type: 'reading', difficulty: 1, xp: 15,
        title: 'Religião e Sociedade',
        content: {
            title: 'O Papel da Religião',
            text: '**Durkheim:** A religião é fundamentalmente social. Ela cria coesão social.\n\n**Weber:** A religião pode influenciar a economia (ética protestante e capitalismo).\n\n**Marx:** A religião é "o ópio do povo" - alivia o sofrimento mas impede a revolta.',
            keyPoints: ['Durkheim: coesão social', 'Weber: influência na economia', 'Marx: alienação'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 10713, unitId: 107, order: 13, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Pensadores e Visões',
        content: {
            pairs: [
                { left: 'Durkheim sobre religião', right: 'Coesão social' },
                { left: 'Weber sobre religião', right: 'Influência na economia' },
                { left: 'Marx sobre religião', right: 'Ópio do povo' },
                { left: 'Bourdieu sobre escola', right: 'Reprodução de desigualdades' }
            ]
        }
    },
    {
        id: 10714, unitId: 107, order: 14, type: 'timeline', difficulty: 1, xp: 30,
        title: 'Transformações Institucionais',
        content: {
            events: [
                { year: 1850, event: 'Família tradicional', description: 'Patriarcal, muitos filhos' },
                { year: 1950, event: 'Família nuclear', description: 'Pai, mãe, poucos filhos' },
                { year: 1970, event: 'Questionamentos', description: 'Feminismo questiona papéis' },
                { year: 2000, event: 'Diversidade familiar', description: 'Múltiplos arranjos' }
            ]
        }
    },
    {
        id: 10715, unitId: 107, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final: Instituições',
        content: {
            questions: [
                { question: 'Instituições sociais são:', options: ['Apenas prédios', 'Estruturas de organização social', 'Leis escritas'], correct: 1 },
                { question: 'A família é considerada a primeira instituição porque:', options: ['É a mais rica', 'É onde ocorre a socialização primária', 'É a mais antiga'], correct: 1 },
                { question: 'Para Durkheim, a religião:', options: ['É ilusão total', 'Cria coesão social', 'Não tem função'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 108 - Estratificação Social
const BLOCKS_108 = [
    {
        id: 10801, unitId: 108, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'O que é Estratificação?',
        content: {
            title: 'Estratificação Social: A Sociedade em Camadas',
            text: 'Estratificação social é a divisão da sociedade em camadas hierárquicas, onde alguns grupos têm mais recursos, poder e prestígio que outros.',
            keyPoints: ['Divisão em camadas', 'Hierarquia de recursos', 'Desigualdade estruturada', 'Presente em todas as sociedades complexas']
        }
    },
    {
        id: 10802, unitId: 108, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'Vídeo: Desigualdade Social',
        content: {
            title: 'Por que Existe Desigualdade?',
            description: 'Vídeo explicando as causas e consequências da desigualdade social.',
            videoUrl: 'https://www.youtube.com/watch?v=desigualdade-social',
            duration: '15 minutos'
        }
    },
    {
        id: 10803, unitId: 108, order: 3, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Estratificação Básica',
        content: {
            questions: [
                { question: 'Estratificação social significa:', options: ['Igualdade total', 'Divisão em camadas hierárquicas', 'Democracia'], correct: 1 },
                { question: 'Classes sociais são divisões baseadas em:', options: ['Religião', 'Posição econômica', 'Cor dos olhos'], correct: 1 },
                { question: 'No sistema de castas, a mobilidade é:', options: ['Total', 'Muito restrita', 'Fácil'], correct: 1 }
            ]
        }
    },
    {
        id: 10804, unitId: 108, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'Sistemas de Estratificação',
        content: {
            title: 'Diferentes Formas de Dividir a Sociedade',
            text: '**Escravidão:** Forma mais extrema: pessoas são propriedade de outras.\n\n**Castas:** Sistema rígido onde a posição é definida pelo nascimento. Exemplo: Índia tradicional.\n\n**Estamentos:** Sistema da Idade Média. Nobreza, clero e servos.\n\n**Classes:** Sistema moderno baseado em posição econômica.',
            keyPoints: ['Escravidão: mais extrema', 'Castas: nascimento define', 'Estamentos: Idade Média', 'Classes: posição econômica'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 10805, unitId: 108, order: 5, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Sistemas e Características',
        content: {
            pairs: [
                { left: 'Escravidão', right: 'Pessoas como propriedade' },
                { left: 'Castas', right: 'Posição definida pelo nascimento' },
                { left: 'Estamentos', right: 'Nobreza, clero e servos' },
                { left: 'Classes', right: 'Baseado em posição econômica' },
                { left: 'Mobilidade social', right: 'Mudança de posição na hierarquia' }
            ]
        }
    },
    {
        id: 10806, unitId: 108, order: 6, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete: Estratificação',
        content: {
            sentences: [
                { text: 'A _____ no Brasil foi abolida em 1888.', answer: 'escravidão', options: ['escravidão', 'democracia', 'república'] },
                { text: 'No sistema de _____, a posição é definida pelo nascimento.', answer: 'castas', options: ['castas', 'classes', 'democracia'] },
                { text: 'Mobilidade social é a mudança de _____ na hierarquia.', answer: 'posição', options: ['posição', 'nome', 'religião'] }
            ]
        }
    },
    {
        id: 10807, unitId: 108, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Estratificação',
        content: {
            cards: [
                { front: 'Estratificação Social', back: 'Divisão da sociedade em camadas hierárquicas' },
                { front: 'Classe Social', back: 'Grupo definido pela posição econômica' },
                { front: 'Mobilidade Social', back: 'Capacidade de mudar de posição na hierarquia' },
                { front: 'Mobilidade Ascendente', back: 'Subir na hierarquia social' },
                { front: 'Mobilidade Descendente', back: 'Descer na hierarquia social' }
            ]
        }
    },
    {
        id: 10808, unitId: 108, order: 8, type: 'concept', difficulty: 1, xp: 20,
        title: 'Marx e as Classes',
        content: {
            title: 'A Visão de Marx sobre Classes',
            text: 'Para Karl Marx, as classes são definidas pela relação com os meios de produção:\n\n**Burguesia:** Dona dos meios de produção (fábricas, terras, capital)\n\n**Proletariado:** Vende sua força de trabalho para sobreviver\n\nA história seria movida pela luta entre essas classes.',
            keyPoints: ['Relação com meios de produção', 'Burguesia vs. Proletariado', 'Luta de classes', 'Exploração como causa']
        }
    },
    {
        id: 10809, unitId: 108, order: 9, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene: Camadas Sociais',
        content: {
            items: [
                { text: 'Elite econômica', correctOrder: 1 },
                { text: 'Classe média alta', correctOrder: 2 },
                { text: 'Classe média', correctOrder: 3 },
                { text: 'Classe trabalhadora', correctOrder: 4 },
                { text: 'Classe baixa/pobre', correctOrder: 5 }
            ]
        }
    },
    {
        id: 10810, unitId: 108, order: 10, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Reflexão: Mobilidade no Brasil',
        content: {
            prompt: 'O Brasil é um país de baixa mobilidade social - quem nasce pobre tende a continuar pobre. Quais fatores dificultam a mobilidade social no Brasil?',
            examples: ['Acesso à educação', 'Discriminação', 'Concentração de renda'],
            minWords: 60
        }
    },
    {
        id: 10811, unitId: 108, order: 11, type: 'quiz', difficulty: 1, xp: 30,
        title: 'Quiz: Classes Sociais',
        content: {
            questions: [
                { question: 'Para Marx, burguesia é quem:', options: ['Trabalha na fábrica', 'É dono dos meios de produção', 'É funcionário público'], correct: 1 },
                { question: 'Proletariado é quem:', options: ['Vende sua força de trabalho', 'É dono de empresas', 'Não trabalha'], correct: 0 },
                { question: 'A luta de classes é central na teoria de:', options: ['Durkheim', 'Weber', 'Marx'], correct: 2 }
            ]
        }
    },
    {
        id: 10812, unitId: 108, order: 12, type: 'reading', difficulty: 1, xp: 15,
        title: 'Weber e a Estratificação',
        content: {
            title: 'Uma Visão Mais Complexa',
            text: 'Max Weber ampliou a análise de estratificação:\n\n**Classe:** Posição econômica (renda, propriedade)\n\n**Status:** Prestígio social (honra, respeito)\n\n**Poder:** Capacidade de impor sua vontade\n\nAlguém pode ter alto status sem ter muita riqueza (professor), ou riqueza sem status (novo-rico).',
            keyPoints: ['Classe: economia', 'Status: prestígio', 'Poder: influência política', 'Estratificação multidimensional'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 10813, unitId: 108, order: 13, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Dimensões da Estratificação',
        content: {
            pairs: [
                { left: 'Classe (Weber)', right: 'Posição econômica' },
                { left: 'Status', right: 'Prestígio social' },
                { left: 'Poder', right: 'Capacidade de impor vontade' },
                { left: 'Burguesia (Marx)', right: 'Donos dos meios de produção' }
            ]
        }
    },
    {
        id: 10814, unitId: 108, order: 14, type: 'timeline', difficulty: 1, xp: 30,
        title: 'História da Estratificação',
        content: {
            events: [
                { year: -3000, event: 'Escravidão antiga', description: 'Egito, Grécia, Roma' },
                { year: 500, event: 'Feudalismo', description: 'Estamentos na Europa' },
                { year: 1500, event: 'Colonização', description: 'Escravidão nas Américas' },
                { year: 1850, event: 'Sociedade de classes', description: 'Capitalismo industrial' }
            ]
        }
    },
    {
        id: 10815, unitId: 108, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final: Estratificação',
        content: {
            questions: [
                { question: 'Estratificação social é:', options: ['Igualdade', 'Divisão em camadas', 'Democracia'], correct: 1 },
                { question: 'Para Marx, a história é movida por:', options: ['Ideias', 'Luta de classes', 'Religião'], correct: 1 },
                { question: 'Weber acrescentou às classes:', options: ['Só economia', 'Status e poder', 'Só religião'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 109 - Mudança Social
const BLOCKS_109 = [
    {
        id: 10901, unitId: 109, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'O que é Mudança Social?',
        content: {
            title: 'Mudança Social: A Sociedade em Movimento',
            text: 'Mudança social é a transformação das estruturas, instituições, relações e valores de uma sociedade ao longo do tempo. Nenhuma sociedade é estática - todas mudam, embora em ritmos diferentes.',
            keyPoints: ['Transformação da sociedade', 'Presente em todas as sociedades', 'Ritmos diferentes', 'Pode ser lenta ou rápida']
        }
    },
    {
        id: 10902, unitId: 109, order: 2, type: 'video', difficulty: 1, xp: 20,
        title: 'Vídeo: Transformações Sociais',
        content: {
            title: 'Como as Sociedades Mudam',
            description: 'Documentário sobre as grandes transformações sociais da história.',
            videoUrl: 'https://www.youtube.com/watch?v=mudanca-social',
            duration: '18 minutos'
        }
    },
    {
        id: 10903, unitId: 109, order: 3, type: 'quiz', difficulty: 1, xp: 25,
        title: 'Quiz: Mudança Social',
        content: {
            questions: [
                { question: 'Mudança social é:', options: ['Estabilidade', 'Transformação da sociedade', 'Repetição'], correct: 1 },
                { question: 'As sociedades:', options: ['Nunca mudam', 'Sempre mudam', 'Só mudam com guerras'], correct: 1 },
                { question: 'Uma revolução é um tipo de mudança:', options: ['Lenta', 'Rápida e profunda', 'Superficial'], correct: 1 }
            ]
        }
    },
    {
        id: 10904, unitId: 109, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'Fatores de Mudança',
        content: {
            title: 'O que Causa Mudança Social?',
            text: '**Fatores Econômicos:** Industrialização, automação, novas formas de trabalho\n\n**Fatores Tecnológicos:** Invenções (imprensa, internet, IA)\n\n**Fatores Políticos:** Revoluções, guerras, movimentos sociais\n\n**Fatores Culturais:** Novas ideias, mudança de valores\n\n**Fatores Demográficos:** Crescimento populacional, migração',
            keyPoints: ['Economia: trabalho e produção', 'Tecnologia: invenções', 'Política: revoluções e leis', 'Cultura: ideias e valores'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 10905, unitId: 109, order: 5, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Fatores e Exemplos',
        content: {
            pairs: [
                { left: 'Fator econômico', right: 'Industrialização' },
                { left: 'Fator tecnológico', right: 'Invenção da internet' },
                { left: 'Fator político', right: 'Revolução Francesa' },
                { left: 'Fator cultural', right: 'Feminismo' },
                { left: 'Fator demográfico', right: 'Migração em massa' }
            ]
        }
    },
    {
        id: 10906, unitId: 109, order: 6, type: 'fill', difficulty: 1, xp: 20,
        title: 'Complete: Mudanças',
        content: {
            sentences: [
                { text: 'A Revolução _____ transformou a economia e sociedade.', answer: 'Industrial', options: ['Industrial', 'Francesa', 'Verde'] },
                { text: 'A _____ mudou radicalmente a comunicação no século XXI.', answer: 'internet', options: ['internet', 'televisão', 'rádio'] },
                { text: 'Movimentos sociais são fatores de mudança _____.', answer: 'política', options: ['política', 'geográfica', 'biológica'] }
            ]
        }
    },
    {
        id: 10907, unitId: 109, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Tipos de Mudança',
        content: {
            cards: [
                { front: 'Evolução Social', back: 'Mudança gradual e contínua' },
                { front: 'Revolução', back: 'Mudança rápida e radical' },
                { front: 'Reforma', back: 'Mudança parcial dentro do sistema' },
                { front: 'Movimento Social', back: 'Ação coletiva para mudança' },
                { front: 'Globalização', back: 'Integração mundial de economias e culturas' }
            ]
        }
    },
    {
        id: 10908, unitId: 109, order: 8, type: 'concept', difficulty: 1, xp: 20,
        title: 'Teorias da Mudança',
        content: {
            title: 'Como os Clássicos Explicam a Mudança',
            text: '**Marx:** A mudança vem da luta de classes.\n\n**Durkheim:** A mudança vem da divisão do trabalho.\n\n**Weber:** A mudança pode vir de ideias (ética protestante → capitalismo).',
            keyPoints: ['Marx: luta de classes', 'Durkheim: divisão do trabalho', 'Weber: ideias e racionalização']
        }
    },
    {
        id: 10909, unitId: 109, order: 9, type: 'order', difficulty: 1, xp: 25,
        title: 'Ordene: Revoluções Históricas',
        content: {
            items: [
                { text: 'Revolução Industrial (Inglaterra)', correctOrder: 1 },
                { text: 'Revolução Francesa', correctOrder: 2 },
                { text: 'Revolução Russa', correctOrder: 3 },
                { text: 'Revolução Cubana', correctOrder: 4 },
                { text: 'Revolução Digital', correctOrder: 5 }
            ]
        }
    },
    {
        id: 10910, unitId: 109, order: 10, type: 'reflection', difficulty: 1, xp: 35,
        title: 'Reflexão: Mudanças Atuais',
        content: {
            prompt: 'Vivemos uma época de mudanças aceleradas (tecnologia, clima, trabalho, valores). Qual mudança você considera mais significativa? Por quê?',
            examples: ['Inteligência artificial', 'Crise climática', 'Polarização política'],
            minWords: 70
        }
    },
    {
        id: 10911, unitId: 109, order: 11, type: 'quiz', difficulty: 1, xp: 30,
        title: 'Quiz: Teorias da Mudança',
        content: {
            questions: [
                { question: 'Para Marx, o motor da história é:', options: ['A religião', 'A luta de classes', 'A tecnologia apenas'], correct: 1 },
                { question: 'Weber mostrou como ideias religiosas influenciaram:', options: ['Só a arte', 'O capitalismo', 'Só a política'], correct: 1 },
                { question: 'Durkheim focou na mudança pela:', options: ['Guerra', 'Divisão do trabalho', 'Religião apenas'], correct: 1 }
            ]
        }
    },
    {
        id: 10912, unitId: 109, order: 12, type: 'reading', difficulty: 1, xp: 15,
        title: 'Movimentos Sociais',
        content: {
            title: 'Agentes de Mudança',
            text: 'Movimentos sociais são ações coletivas que buscam mudança ou resistência à mudança.\n\n**Exemplos históricos:**\n- Movimento operário (direitos trabalhistas)\n- Sufragismo (voto feminino)\n- Direitos civis (igualdade racial)\n\n**Movimentos contemporâneos:**\n- Feminismo\n- LGBTQIA+\n- Black Lives Matter',
            keyPoints: ['Ações coletivas organizadas', 'Buscam mudança social', 'Fundamentais na história'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 10913, unitId: 109, order: 13, type: 'match', difficulty: 1, xp: 30,
        title: 'Combine: Movimentos e Conquistas',
        content: {
            pairs: [
                { left: 'Movimento operário', right: 'Direitos trabalhistas' },
                { left: 'Sufragismo', right: 'Voto feminino' },
                { left: 'Direitos civis (EUA)', right: 'Fim da segregação racial' },
                { left: 'Ambientalismo', right: 'Proteção ambiental' }
            ]
        }
    },
    {
        id: 10914, unitId: 109, order: 14, type: 'timeline', difficulty: 1, xp: 30,
        title: 'Grandes Mudanças da História',
        content: {
            events: [
                { year: 1760, event: 'Revolução Industrial', description: 'Mudança econômica radical' },
                { year: 1789, event: 'Revolução Francesa', description: 'Mudança política' },
                { year: 1917, event: 'Revolução Russa', description: 'Socialismo no poder' },
                { year: 1990, event: 'Revolução Digital', description: 'Internet muda tudo' }
            ]
        }
    },
    {
        id: 10915, unitId: 109, order: 15, type: 'quiz', difficulty: 1, xp: 40,
        title: 'Desafio Final: Mudança Social',
        content: {
            questions: [
                { question: 'Mudança social inclui:', options: ['Só economia', 'Estruturas, valores e relações', 'Só política'], correct: 1 },
                { question: 'Revolução se diferencia de reforma por ser:', options: ['Mais lenta', 'Mais radical e rápida', 'Superficial'], correct: 1 },
                { question: 'A globalização é um processo de:', options: ['Isolamento', 'Integração mundial', 'Separação'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 110 - Desafio Final (Fundamentos)
const BLOCKS_110 = [
    {
        id: 11001, unitId: 110, order: 1, type: 'concept', difficulty: 1, xp: 20,
        title: 'Revisão: Fundamentos',
        content: {
            title: 'O que Aprendemos até Aqui',
            text: 'Parabéns por chegar ao desafio final da Seção 1! Vamos revisar os principais conceitos:\n\n• **Sociologia**: Ciência que estuda a sociedade\n• **Auguste Comte**: Fundador do positivismo\n• **Método**: Forma científica de estudar\n• **Estrutura e Agência**: Sociedade e indivíduo\n• **Cultura**: O que é criado pelos humanos\n• **Socialização**: Como aprendemos a viver\n• **Instituições**: Estruturas que organizam\n• **Estratificação**: Divisão em camadas\n• **Mudança Social**: Transformações',
            keyPoints: ['Revisão de 9 unidades', 'Conceitos fundamentais', 'Base para próximas seções']
        }
    },
    {
        id: 11002, unitId: 110, order: 2, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz Revisão: Origens',
        content: {
            questions: [
                { question: 'Quem criou o termo sociologia?', options: ['Marx', 'Durkheim', 'Comte', 'Weber'], correct: 2 },
                { question: 'A sociologia surgiu no contexto de:', options: ['Antiguidade', 'Idade Média', 'Rev. Industrial e Francesa'], correct: 2 },
                { question: 'A imaginação sociológica conecta:', options: ['Terra e céu', 'Biografia e história', 'Passado e futuro'], correct: 1 }
            ]
        }
    },
    {
        id: 11003, unitId: 110, order: 3, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Todos os Conceitos',
        content: {
            pairs: [
                { left: 'Positivismo', right: 'Conhecimento baseado em ciência' },
                { left: 'Socialização', right: 'Aprender a viver em sociedade' },
                { left: 'Estratificação', right: 'Divisão em camadas sociais' },
                { left: 'Instituição', right: 'Estrutura que organiza a vida' },
                { left: 'Agência', right: 'Capacidade de agir e escolher' }
            ]
        }
    },
    {
        id: 11004, unitId: 110, order: 4, type: 'reading', difficulty: 1, xp: 15,
        title: 'A Visão Sociológica',
        content: {
            title: 'O Olhar Sociológico sobre o Mundo',
            text: 'Ao terminar esta seção, você desenvolveu uma nova forma de olhar o mundo:\n\n**Antes:** Vemos eventos como fatos isolados\n**Agora:** Conectamos eventos a estruturas sociais\n\n**Antes:** Aceitamos explicações do senso comum\n**Agora:** Questionamos e buscamos evidências\n\n**Antes:** Vemos escolhas como puramente individuais\n**Agora:** Entendemos a influência da sociedade',
            keyPoints: ['Nova forma de ver o mundo', 'Questionar o óbvio', 'Conectar individual e social'],
            timeToRead: '5 minutos'
        }
    },
    {
        id: 11005, unitId: 110, order: 5, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Método e Cultura',
        content: {
            questions: [
                { question: 'Pesquisa quantitativa usa principalmente:', options: ['Entrevistas profundas', 'Números e estatísticas', 'Observação participante'], correct: 1 },
                { question: 'Cultura se diferencia de natureza porque:', options: ['É inata', 'É aprendida', 'É genética'], correct: 1 },
                { question: 'Etnocentrismo é:', options: ['Valorizar todas as culturas', 'Julgar outras culturas pela nossa', 'Estudar etnias'], correct: 1 }
            ]
        }
    },
    {
        id: 11006, unitId: 110, order: 6, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: Conceitos Aprendidos',
        content: {
            items: [
                { text: 'O que é Sociologia', correctOrder: 1 },
                { text: 'Contexto Histórico', correctOrder: 2 },
                { text: 'Auguste Comte', correctOrder: 3 },
                { text: 'Método Sociológico', correctOrder: 4 },
                { text: 'Cultura e Socialização', correctOrder: 5 }
            ]
        }
    },
    {
        id: 11007, unitId: 110, order: 7, type: 'flashcard', difficulty: 1, xp: 15,
        title: 'Flashcards: Revisão Geral',
        content: {
            cards: [
                { front: 'Lei dos Três Estados', back: 'Teológico → Metafísico → Positivo (Comte)' },
                { front: 'Habitus', back: 'Disposições incorporadas que orientam ações (Bourdieu)' },
                { front: 'Revolução Industrial', back: 'Transformação que criou contexto para sociologia' },
                { front: 'Mobilidade Social', back: 'Mudança de posição na hierarquia social' },
                { front: 'Movimento Social', back: 'Ação coletiva buscando mudança' }
            ]
        }
    },
    {
        id: 11008, unitId: 110, order: 8, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Estrutura e Estratificação',
        content: {
            questions: [
                { question: 'Estrutura social se refere a:', options: ['Prédios', 'Forças que moldam comportamento', 'Escolhas livres'], correct: 1 },
                { question: 'No sistema de classes, a posição é definida por:', options: ['Nascimento apenas', 'Posição econômica', 'Cor da pele'], correct: 1 },
                { question: 'Para Marx, burguesia e proletariado são:', options: ['Amigos', 'Classes em conflito', 'A mesma coisa'], correct: 1 }
            ]
        }
    },
    {
        id: 11009, unitId: 110, order: 9, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão Final',
        content: {
            prompt: 'Ao terminar esta seção sobre Fundamentos, o que mais impactou sua forma de ver o mundo? Como você pode usar o pensamento sociológico no seu dia a dia?',
            examples: ['Questionar notícias', 'Entender desigualdades', 'Analisar sua própria vida'],
            minWords: 80
        }
    },
    {
        id: 11010, unitId: 110, order: 10, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Pensadores',
        content: {
            pairs: [
                { left: 'Comte', right: 'Criou o termo sociologia' },
                { left: 'C. Wright Mills', right: 'Imaginação sociológica' },
                { left: 'Marx', right: 'Luta de classes' },
                { left: 'Weber', right: 'Classe, status e poder' },
                { left: 'Bourdieu', right: 'Habitus' }
            ]
        }
    },
    {
        id: 11011, unitId: 110, order: 11, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Linha do Tempo: Origens',
        content: {
            events: [
                { year: 1760, event: 'Revolução Industrial', description: 'Transforma economia' },
                { year: 1789, event: 'Revolução Francesa', description: 'Questiona ordem' },
                { year: 1838, event: 'Termo "sociologia"', description: 'Comte batiza a ciência' },
                { year: 1867, event: 'O Capital', description: 'Marx publica obra-prima' },
                { year: 1895, event: 'Regras do Método', description: 'Durkheim estabelece bases' }
            ]
        }
    },
    {
        id: 11012, unitId: 110, order: 12, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Instituições e Mudança',
        content: {
            questions: [
                { question: 'A primeira instituição de socialização é:', options: ['Escola', 'Trabalho', 'Família'], correct: 2 },
                { question: 'Movimentos sociais são:', options: ['Ações individuais', 'Ações coletivas', 'Leis'], correct: 1 },
                { question: 'A globalização é um processo de:', options: ['Isolamento', 'Integração mundial', 'Estagnação'], correct: 1 }
            ]
        }
    },
    {
        id: 11013, unitId: 110, order: 13, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Revisão',
        content: {
            sentences: [
                { text: 'A _____ é a ciência que estuda a sociedade.', answer: 'sociologia', options: ['sociologia', 'biologia', 'física'] },
                { text: 'Comte fundou o _____.', answer: 'positivismo', options: ['marxismo', 'positivismo', 'anarquismo'] },
                { text: 'A cultura é _____, não inata.', answer: 'aprendida', options: ['aprendida', 'genética', 'instintiva'] }
            ]
        }
    },
    {
        id: 11014, unitId: 110, order: 14, type: 'video', difficulty: 1, xp: 25,
        title: 'Vídeo: Próximos Passos',
        content: {
            title: 'O que Vem Depois',
            description: 'Prévia da próxima seção: Os Clássicos - Marx, Durkheim e Weber.',
            videoUrl: 'https://www.youtube.com/watch?v=classicos-sociologia',
            duration: '8 minutos'
        }
    },
    {
        id: 11015, unitId: 110, order: 15, type: 'quiz', difficulty: 3, xp: 50,
        title: 'DESAFIO FINAL DA SEÇÃO 1',
        content: {
            title: 'Prova de Conhecimento - Fundamentos',
            questions: [
                { question: 'A sociologia nasceu para explicar:', options: ['Fenômenos naturais', 'Transformações sociais modernas', 'Questões religiosas'], correct: 1 },
                { question: 'O estado positivo de Comte é caracterizado por:', options: ['Explicações divinas', 'Explicações abstratas', 'Explicações científicas'], correct: 2 },
                { question: 'A diferença entre pesquisa quantitativa e qualitativa está em:', options: ['Tema estudado', 'Método de coleta e análise', 'Custo da pesquisa'], correct: 1 },
                { question: 'O debate estrutura vs. agência questiona:', options: ['Economia vs. política', 'Quanto somos livres ou determinados', 'Religião vs. ciência'], correct: 1 },
                { question: 'A socialização primária ocorre principalmente:', options: ['Na escola', 'No trabalho', 'Na família'], correct: 2 },
                { question: 'Weber ampliou a análise de classes incluindo:', options: ['Só economia', 'Status e poder', 'Só religião'], correct: 1 },
                { question: 'Movimentos sociais são agentes de:', options: ['Estabilidade', 'Mudança social', 'Conformismo'], correct: 1 },
                { question: 'O etnocentrismo é problemático porque:', options: ['Valoriza outras culturas', 'Julga culturas pelos padrões da própria', 'Promove diálogo'], correct: 1 }
            ]
        }
    }
];

// Exportar os blocos para serem usados no data.js
if (typeof window !== 'undefined') {
    window.SECTION1_BLOCKS = {
        103: BLOCKS_103,
        104: BLOCKS_104,
        105: BLOCKS_105,
        106: BLOCKS_106,
        107: BLOCKS_107,
        108: BLOCKS_108,
        109: BLOCKS_109,
        110: BLOCKS_110
    };
}

console.log('✅ Seção 1 de Sociologia carregada com sucesso!');
console.log('   - Unidades 103-110 com conteúdo completo');
console.log('   - Total de 120 blocos educacionais');
