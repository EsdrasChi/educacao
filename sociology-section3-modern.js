// ==========================================
// SOCIOLOGIA - SEÇÃO 3: TEORIA SOCIAL MODERNA
// Século XX e novas perspectivas
// Unidades 301-310 com conteúdo detalhado
// ==========================================

// Blocos para Unidade 301 - Funcionalismo
const BLOCKS_301 = [
    {
        id: 30101, unitId: 301, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'O que é Funcionalismo?',
        content: {
            title: 'A Sociedade como Organismo',
            text: 'O funcionalismo é uma perspectiva teórica que vê a sociedade como um sistema integrado, onde cada parte (instituição) tem uma função específica para manter o equilíbrio do todo. Assim como órgãos em um corpo, família, escola, religião e Estado trabalham juntos para a estabilidade social. Principais representantes: Talcott Parsons e Robert Merton.',
            keyPoints: ['Sociedade como sistema', 'Cada parte tem função', 'Busca equilíbrio', 'Parsons e Merton'],
            image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400'
        }
    },
    {
        id: 30102, unitId: 301, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Funcionalismo',
        content: {
            title: 'Entendendo o Funcionalismo',
            description: 'Vídeo explicando a teoria funcionalista e seus principais conceitos.',
            videoUrl: 'https://www.youtube.com/watch?v=funcionalismo-sociologia',
            duration: '14 minutos',
            questions: ['Qual a metáfora central do funcionalismo?', 'O que significa função latente?']
        }
    },
    {
        id: 30103, unitId: 301, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Conceitos Básicos',
        content: {
            questions: [
                { question: 'O funcionalismo compara a sociedade a:', options: ['Uma máquina', 'Um organismo vivo', 'Uma batalha', 'Um mercado'], correct: 1 },
                { question: 'Para funcionalistas, as instituições existem porque:', options: ['Exploram pessoas', 'Cumprem funções necessárias', 'São tradicionais', 'Dão lucro'], correct: 1 },
                { question: 'Talcott Parsons era:', options: ['Marxista', 'Funcionalista', 'Interacionista', 'Fenomenólogo'], correct: 1 }
            ]
        }
    },
    {
        id: 30104, unitId: 301, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'Talcott Parsons',
        content: {
            title: 'O Sistema Social',
            text: '**TALCOTT PARSONS (1902-1979)**\nSociólogo americano, principal teórico do funcionalismo estrutural.\n\n**Conceitos principais:**\n• Sistema Social: sociedade como conjunto integrado\n• AGIL: quatro funções necessárias\n  - Adaptação (economia)\n  - Goal attainment (política)\n  - Integração (direito, religião)\n  - Latência (família, educação)\n• Variáveis padrão: orientações de ação\n\n**Críticas:** Conservador, ignora conflitos, visão estática.',
            keyPoints: ['Sistema integrado', 'Esquema AGIL', 'Variáveis padrão', 'Equilíbrio social'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30105, unitId: 301, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: AGIL de Parsons',
        content: {
            pairs: [
                { left: 'A - Adaptação', right: 'Economia' },
                { left: 'G - Goal attainment', right: 'Política' },
                { left: 'I - Integração', right: 'Direito e religião' },
                { left: 'L - Latência', right: 'Família e educação' },
                { left: 'Função', right: 'Contribuição para o sistema' }
            ]
        }
    },
    {
        id: 30106, unitId: 301, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Funcionalismo',
        content: {
            sentences: [
                { text: 'O funcionalismo vê a sociedade como um _____ integrado.', answer: 'sistema', options: ['sistema', 'conflito', 'mercado'] },
                { text: 'Parsons desenvolveu o esquema _____ com quatro funções.', answer: 'AGIL', options: ['AGIL', 'MARX', 'WEBER'] },
                { text: 'Instituições existem porque cumprem _____ necessárias.', answer: 'funções', options: ['funções', 'lucros', 'guerras'] }
            ]
        }
    },
    {
        id: 30107, unitId: 301, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Funcionalismo',
        content: {
            cards: [
                { front: 'Funcionalismo', back: 'Teoria que vê a sociedade como sistema integrado com partes funcionais' },
                { front: 'Talcott Parsons', back: 'Principal teórico do funcionalismo estrutural (1902-1979)' },
                { front: 'AGIL', back: 'Esquema de quatro funções: Adaptação, Goal, Integração, Latência' },
                { front: 'Função manifesta', back: 'Consequência intencional e reconhecida de uma instituição' },
                { front: 'Função latente', back: 'Consequência não intencional e não reconhecida' }
            ]
        }
    },
    {
        id: 30108, unitId: 301, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Robert Merton',
        content: {
            title: 'Funcionalismo de Médio Alcance',
            text: 'Robert Merton (1910-2003) reformulou o funcionalismo:\n\n**Contribuições:**\n• Funções manifestas vs. latentes\n• Disfunções: consequências negativas\n• Teorias de médio alcance (não totalizantes)\n• Anomia e desvio\n\n**Exemplo:** A escola tem função manifesta (educar) e latente (socializar, babysitting).\n\nMerton foi mais flexível que Parsons, reconhecendo que nem tudo é funcional.',
            keyPoints: ['Funções manifestas e latentes', 'Disfunções existem', 'Teorias de médio alcance', 'Mais flexível']
        }
    },
    {
        id: 30109, unitId: 301, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Desenvolvimento do Funcionalismo',
        content: {
            items: [
                { text: 'Durkheim: bases funcionalistas (1890s)', correctOrder: 1 },
                { text: 'Radcliffe-Brown: funcionalismo na antropologia (1920s)', correctOrder: 2 },
                { text: 'Parsons: O Sistema Social (1951)', correctOrder: 3 },
                { text: 'Merton: funções manifestas e latentes (1957)', correctOrder: 4 },
                { text: 'Declínio do funcionalismo (1970s)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30110, unitId: 301, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Funcionalismo Hoje',
        content: {
            prompt: 'O funcionalismo foi criticado por ser conservador e ignorar conflitos. Mas será que não há nada de útil nessa perspectiva? Pense em uma instituição (escola, família, mídia) e analise suas funções manifestas e latentes.',
            examples: ['Escola: educar (manifesta) / criar redes (latente)', 'Religião: espiritualidade (manifesta) / coesão social (latente)'],
            minWords: 70
        }
    },
    {
        id: 30111, unitId: 301, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Merton',
        content: {
            questions: [
                { question: 'Função latente é:', options: ['Intencional e reconhecida', 'Não intencional e não reconhecida', 'Sempre negativa', 'Sempre econômica'], correct: 1 },
                { question: 'Disfunção significa:', options: ['Função positiva', 'Consequência negativa', 'Ausência de função', 'Função dupla'], correct: 1 },
                { question: 'Merton propôs teorias de:', options: ['Grande alcance', 'Médio alcance', 'Pequeno alcance', 'Nenhum alcance'], correct: 1 }
            ]
        }
    },
    {
        id: 30112, unitId: 301, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'Críticas ao Funcionalismo',
        content: {
            title: 'Limitações da Teoria',
            text: '**Críticas principais:**\n\n• **Conservadorismo:** Justifica o status quo\n• **Ignora conflitos:** Não explica mudanças, revoluções\n• **Teleológico:** Explica causas pelos efeitos\n• **Ahistórico:** Não considera transformações\n• **Homogeneidade:** Assume consenso de valores\n\n**Declínio:** Nos anos 1960-70, movimentos sociais mostraram que sociedades têm conflitos profundos.\n\n**Legado:** Influenciou neofuncionalismo (Alexander) e sistemas (Luhmann).',
            keyPoints: ['Conservador', 'Ignora conflitos', 'Declinou nos anos 60-70', 'Deixou legado'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 30113, unitId: 301, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Conceitos',
        content: {
            pairs: [
                { left: 'Parsons', right: 'Esquema AGIL' },
                { left: 'Merton', right: 'Funções manifestas e latentes' },
                { left: 'Função', right: 'Contribuição positiva' },
                { left: 'Disfunção', right: 'Contribuição negativa' },
                { left: 'Crítica', right: 'Ignora conflitos' }
            ]
        }
    },
    {
        id: 30114, unitId: 301, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'História do Funcionalismo',
        content: {
            events: [
                { year: 1893, event: 'Durkheim', description: 'Bases funcionalistas' },
                { year: 1937, event: 'Estrutura da Ação', description: 'Parsons sintetiza teoria' },
                { year: 1951, event: 'O Sistema Social', description: 'Obra-prima de Parsons' },
                { year: 1957, event: 'Social Theory', description: 'Merton reformula' },
                { year: 1970, event: 'Declínio', description: 'Críticas se intensificam' }
            ]
        }
    },
    {
        id: 30115, unitId: 301, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Funcionalismo',
        content: {
            questions: [
                { question: 'O funcionalismo compara a sociedade a:', options: ['Máquina', 'Organismo', 'Teatro', 'Mercado'], correct: 1 },
                { question: 'AGIL significa:', options: ['Quatro pensadores', 'Quatro funções sociais', 'Quatro classes', 'Quatro épocas'], correct: 1 },
                { question: 'Função latente é:', options: ['Reconhecida', 'Não reconhecida', 'Negativa', 'Econômica'], correct: 1 },
                { question: 'Principal crítica ao funcionalismo:', options: ['Muito radical', 'Ignora conflitos', 'Muito matemático', 'Muito religioso'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 302 - Interacionismo Simbólico
const BLOCKS_302 = [
    {
        id: 30201, unitId: 302, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'O que é Interacionismo?',
        content: {
            title: 'O Significado nas Interações',
            text: 'O interacionismo simbólico é uma perspectiva que enfatiza o papel dos símbolos e da interpretação na vida social. Para os interacionistas, a sociedade é construída através das interações cotidianas entre pessoas. Os significados não são dados, mas construídos. Principais representantes: George Herbert Mead e Erving Goffman.',
            keyPoints: ['Foco na interação face a face', 'Símbolos e significados', 'Construção social da realidade', 'Mead e Goffman'],
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400'
        }
    },
    {
        id: 30202, unitId: 302, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Interacionismo',
        content: {
            title: 'Mead e o Self Social',
            description: 'Vídeo explicando os conceitos centrais do interacionismo simbólico.',
            videoUrl: 'https://www.youtube.com/watch?v=interacionismo-simbolico',
            duration: '12 minutos',
            questions: ['O que é o "eu" e o "mim" em Mead?', 'Como construímos significados nas interações?']
        }
    },
    {
        id: 30203, unitId: 302, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Conceitos Básicos',
        content: {
            questions: [
                { question: 'O interacionismo foca em:', options: ['Estruturas macro', 'Interações cotidianas', 'Economia', 'Genética'], correct: 1 },
                { question: 'Para interacionistas, significados são:', options: ['Dados pela natureza', 'Construídos nas interações', 'Herdados geneticamente', 'Impostos pelo Estado'], correct: 1 },
                { question: 'George Herbert Mead desenvolveu o conceito de:', options: ['Mais-valia', 'Self social', 'Fato social', 'Burocracia'], correct: 1 }
            ]
        }
    },
    {
        id: 30204, unitId: 302, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'George Herbert Mead',
        content: {
            title: 'O Self e a Sociedade',
            text: '**G.H. MEAD (1863-1931)**\nFilósofo e psicólogo social americano, fundador do interacionismo.\n\n**Conceitos principais:**\n• **Self:** consciência de si mesmo\n• **Eu (I):** resposta espontânea\n• **Mim (Me):** atitudes dos outros internalizadas\n• **Outro generalizado:** sociedade internalizada\n• **Jogo e brincadeira:** estágios de desenvolvimento\n\n**Ideia central:** Nos tornamos humanos através da interação social. O self emerge da sociedade.',
            keyPoints: ['Self social', 'Eu e Mim', 'Outro generalizado', 'Interação forma identidade'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30205, unitId: 302, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Conceitos de Mead',
        content: {
            pairs: [
                { left: 'Self', right: 'Consciência de si mesmo' },
                { left: 'Eu (I)', right: 'Resposta espontânea e criativa' },
                { left: 'Mim (Me)', right: 'Atitudes dos outros internalizadas' },
                { left: 'Outro generalizado', right: 'Sociedade internalizada' },
                { left: 'Jogo', right: 'Estágio de desenvolvimento' }
            ]
        }
    },
    {
        id: 30206, unitId: 302, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Interacionismo',
        content: {
            sentences: [
                { text: 'Para Mead, o _____ emerge da interação social.', answer: 'self', options: ['self', 'cérebro', 'gene'] },
                { text: 'O "Eu" (I) é a parte _____ do self.', answer: 'espontânea', options: ['espontânea', 'social', 'biológica'] },
                { text: 'O "outro generalizado" representa a _____ internalizada.', answer: 'sociedade', options: ['família', 'sociedade', 'escola'] }
            ]
        }
    },
    {
        id: 30207, unitId: 302, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Mead',
        content: {
            cards: [
                { front: 'Interacionismo Simbólico', back: 'Perspectiva que foca na construção de significados através da interação' },
                { front: 'George H. Mead', back: 'Fundador do interacionismo simbólico (1863-1931)' },
                { front: 'Self', back: 'Consciência de si mesmo, formada socialmente' },
                { front: 'Eu (I)', back: 'Parte espontânea e criativa do self' },
                { front: 'Mim (Me)', back: 'Parte social do self - atitudes dos outros internalizadas' }
            ]
        }
    },
    {
        id: 30208, unitId: 302, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Erving Goffman',
        content: {
            title: 'A Vida como Teatro',
            text: 'Erving Goffman (1922-1982) desenvolveu a análise dramatúrgica:\n\n**Conceitos principais:**\n• **Performance:** vida como representação teatral\n• **Palco frontal:** onde atuamos para os outros\n• **Bastidores:** onde relaxamos a performance\n• **Gerenciamento de impressões:** controlar como somos vistos\n• **Estigma:** identidades socialmente desacreditadas\n\nPara Goffman, todos somos atores no palco da vida social.',
            keyPoints: ['Metáfora teatral', 'Palco e bastidores', 'Gerenciamento de impressões', 'Estigma']
        }
    },
    {
        id: 30209, unitId: 302, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Obras de Goffman',
        content: {
            items: [
                { text: 'A Representação do Eu na Vida Cotidiana (1959)', correctOrder: 1 },
                { text: 'Manicômios, Prisões e Conventos (1961)', correctOrder: 2 },
                { text: 'Estigma (1963)', correctOrder: 3 },
                { text: 'A Interação Face a Face (1967)', correctOrder: 4 },
                { text: 'Frame Analysis (1974)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30210, unitId: 302, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Sua Performance',
        content: {
            prompt: 'Goffman diz que todos fazemos "gerenciamento de impressões". Pense em como você se apresenta em diferentes contextos (trabalho, família, amigos, redes sociais). Você é a mesma pessoa em todos? Por que mudamos nossa "performance"?',
            examples: ['Linguagem diferente', 'Roupas diferentes', 'Posturas diferentes', 'Redes sociais'],
            minWords: 70
        }
    },
    {
        id: 30211, unitId: 302, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Goffman',
        content: {
            questions: [
                { question: 'Goffman usa a metáfora do:', options: ['Organismo', 'Teatro', 'Máquina', 'Mercado'], correct: 1 },
                { question: 'Bastidores são onde:', options: ['Atuamos', 'Relaxamos a performance', 'Trabalhamos', 'Dormimos'], correct: 1 },
                { question: 'Estigma é:', options: ['Elogio', 'Identidade desacreditada', 'Talento', 'Profissão'], correct: 1 }
            ]
        }
    },
    {
        id: 30212, unitId: 302, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'Instituições Totais',
        content: {
            title: 'Manicômios, Prisões e Conventos',
            text: 'Goffman estudou "instituições totais" - lugares onde pessoas vivem isoladas:\n\n**Características:**\n• Vida em um único local\n• Atividades controladas\n• Identidade anterior destruída\n• Nova identidade imposta\n\n**Exemplos:**\n• Prisões\n• Manicômios\n• Conventos\n• Quartéis\n• Navios\n\nGoffman mostrou como essas instituições despersonalizam e mortificam o self.',
            keyPoints: ['Instituições totais', 'Mortificação do self', 'Controle total', 'Despersonalização'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 30213, unitId: 302, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Goffman',
        content: {
            pairs: [
                { left: 'Palco frontal', right: 'Onde atuamos' },
                { left: 'Bastidores', right: 'Onde relaxamos' },
                { left: 'Estigma', right: 'Marca social negativa' },
                { left: 'Instituição total', right: 'Prisão, manicômio' },
                { left: 'Performance', right: 'Representação de si' }
            ]
        }
    },
    {
        id: 30214, unitId: 302, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Interacionismo Simbólico',
        content: {
            events: [
                { year: 1934, event: 'Mead (póstumo)', description: 'Mind, Self and Society' },
                { year: 1937, event: 'Blumer', description: 'Cunha o termo "interacionismo simbólico"' },
                { year: 1959, event: 'Goffman', description: 'A Representação do Eu' },
                { year: 1963, event: 'Becker', description: 'Outsiders - teoria do desvio' },
                { year: 1967, event: 'Garfinkel', description: 'Etnometodologia' }
            ]
        }
    },
    {
        id: 30215, unitId: 302, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Interacionismo',
        content: {
            questions: [
                { question: 'Mead desenvolveu o conceito de:', options: ['Fato social', 'Self social', 'Mais-valia', 'Burocracia'], correct: 1 },
                { question: 'Para Goffman, a vida social é como:', options: ['Um organismo', 'Um teatro', 'Uma guerra', 'Um mercado'], correct: 1 },
                { question: 'O "Eu" (I) de Mead é:', options: ['Social', 'Espontâneo', 'Biológico', 'Econômico'], correct: 1 },
                { question: 'Estigma é um conceito de:', options: ['Mead', 'Goffman', 'Parsons', 'Marx'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 303 - Fenomenologia
const BLOCKS_303 = [
    {
        id: 30301, unitId: 303, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'O que é Fenomenologia Social?',
        content: {
            title: 'O Mundo da Vida Cotidiana',
            text: 'A fenomenologia social estuda como as pessoas experimentam e dão sentido ao mundo em sua vida cotidiana. Derivada da filosofia de Husserl, foi aplicada à sociologia por Alfred Schutz. O foco está no "mundo da vida" (Lebenswelt) - o mundo pré-científico, dado como certo, onde vivemos nossas experiências.',
            keyPoints: ['Experiência subjetiva', 'Mundo da vida', 'Sentido comum', 'Schutz e Berger'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        }
    },
    {
        id: 30302, unitId: 303, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Fenomenologia',
        content: {
            title: 'Alfred Schutz e o Mundo da Vida',
            description: 'Vídeo introdutório à fenomenologia social.',
            videoUrl: 'https://www.youtube.com/watch?v=fenomenologia-social',
            duration: '13 minutos',
            questions: ['O que é o "mundo da vida"?', 'Como tipificamos a realidade?']
        }
    },
    {
        id: 30303, unitId: 303, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Conceitos Básicos',
        content: {
            questions: [
                { question: 'A fenomenologia foca em:', options: ['Estruturas objetivas', 'Experiência subjetiva', 'Economia', 'Genética'], correct: 1 },
                { question: 'Lebenswelt significa:', options: ['Vida eterna', 'Mundo da vida', 'Lei natural', 'Ciência pura'], correct: 1 },
                { question: 'Alfred Schutz aplicou a fenomenologia à:', options: ['Física', 'Sociologia', 'Biologia', 'Matemática'], correct: 1 }
            ]
        }
    },
    {
        id: 30304, unitId: 303, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'Alfred Schutz',
        content: {
            title: 'O Mundo Dado como Certo',
            text: '**ALFRED SCHUTZ (1899-1959)**\nSociólogo austríaco, fundador da fenomenologia social.\n\n**Conceitos principais:**\n• **Mundo da vida:** realidade cotidiana, pré-científica\n• **Tipificações:** categorias que usamos para entender o mundo\n• **Relevâncias:** o que nos interessa em cada situação\n• **Receitas:** conhecimentos práticos compartilhados\n• **Intersubjetividade:** compartilhamento de significados\n\n**Ideia central:** Antes da ciência, já vivemos em um mundo de sentido comum.',
            keyPoints: ['Mundo da vida', 'Tipificações', 'Receitas de ação', 'Intersubjetividade'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30305, unitId: 303, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Schutz',
        content: {
            pairs: [
                { left: 'Mundo da vida', right: 'Realidade cotidiana' },
                { left: 'Tipificações', right: 'Categorias de compreensão' },
                { left: 'Receitas', right: 'Conhecimentos práticos' },
                { left: 'Intersubjetividade', right: 'Significados compartilhados' },
                { left: 'Relevâncias', right: 'O que nos interessa' }
            ]
        }
    },
    {
        id: 30306, unitId: 303, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Fenomenologia',
        content: {
            sentences: [
                { text: 'O _____ da vida é a realidade cotidiana.', answer: 'mundo', options: ['mundo', 'fim', 'início'] },
                { text: 'Usamos _____ para categorizar a realidade.', answer: 'tipificações', options: ['tipificações', 'números', 'máquinas'] },
                { text: 'Schutz estudou a _____, o compartilhamento de significados.', answer: 'intersubjetividade', options: ['objetividade', 'intersubjetividade', 'matemática'] }
            ]
        }
    },
    {
        id: 30307, unitId: 303, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Fenomenologia',
        content: {
            cards: [
                { front: 'Fenomenologia Social', back: 'Estudo da experiência subjetiva do mundo social' },
                { front: 'Alfred Schutz', back: 'Fundador da fenomenologia social (1899-1959)' },
                { front: 'Mundo da vida', back: 'Realidade cotidiana, dada como certa, pré-científica' },
                { front: 'Tipificação', back: 'Categoria usada para classificar experiências' },
                { front: 'Intersubjetividade', back: 'Compartilhamento de significados entre pessoas' }
            ]
        }
    },
    {
        id: 30308, unitId: 303, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Berger e Luckmann',
        content: {
            title: 'A Construção Social da Realidade',
            text: 'Peter Berger e Thomas Luckmann publicaram em 1966 "A Construção Social da Realidade":\n\n**Tese central:** A realidade é socialmente construída.\n\n**Processo:**\n1. **Exteriorização:** criamos instituições\n2. **Objetivação:** elas parecem "naturais"\n3. **Interiorização:** internalizamos como "realidade"\n\n**Exemplo:** O dinheiro é uma construção social que parece natural.\n\nEste livro é um clássico da sociologia do conhecimento.',
            keyPoints: ['Realidade construída socialmente', 'Exteriorização', 'Objetivação', 'Interiorização']
        }
    },
    {
        id: 30309, unitId: 303, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Construção da Realidade',
        content: {
            items: [
                { text: 'Exteriorização: criamos padrões de ação', correctOrder: 1 },
                { text: 'Habitualização: repetimos os padrões', correctOrder: 2 },
                { text: 'Institucionalização: padrões viram regras', correctOrder: 3 },
                { text: 'Objetivação: parecem "naturais"', correctOrder: 4 },
                { text: 'Interiorização: novas gerações aprendem como "realidade"', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30310, unitId: 303, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: O que é Natural?',
        content: {
            prompt: 'Berger e Luckmann dizem que muito do que consideramos "natural" é na verdade construído socialmente. Pense em algo que você sempre achou natural mas que pode ser uma construção social (papéis de gênero, dinheiro, nação, etc.).',
            examples: ['Família nuclear', 'Papéis de gênero', 'Dinheiro', 'Fronteiras nacionais'],
            minWords: 70
        }
    },
    {
        id: 30311, unitId: 303, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Berger e Luckmann',
        content: {
            questions: [
                { question: 'A realidade é:', options: ['Dada pela natureza', 'Socialmente construída', 'Geneticamente determinada', 'Impossível'], correct: 1 },
                { question: 'Exteriorização significa:', options: ['Destruir', 'Criar instituições', 'Internalizar', 'Ignorar'], correct: 1 },
                { question: 'Quando a realidade parece "natural", houve:', options: ['Exteriorização', 'Objetivação', 'Revolução', 'Destruição'], correct: 1 }
            ]
        }
    },
    {
        id: 30312, unitId: 303, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'Etnometodologia',
        content: {
            title: 'Harold Garfinkel',
            text: '**Harold Garfinkel (1917-2011)** fundou a etnometodologia:\n\n**Foco:** Os métodos que pessoas comuns usam para dar sentido ao mundo.\n\n**Conceitos:**\n• **Indexicalidade:** significado depende do contexto\n• **Reflexividade:** ações criam o contexto que descrevem\n• **Accounts:** explicações que damos\n\n**Experimentos de ruptura:** Garfinkel pedia a alunos que questionassem o óbvio para revelar pressupostos ocultos.',
            keyPoints: ['Métodos do senso comum', 'Indexicalidade', 'Experimentos de ruptura', 'Garfinkel'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 30313, unitId: 303, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Fenomenologia e Etnometodologia',
        content: {
            pairs: [
                { left: 'Schutz', right: 'Fenomenologia social' },
                { left: 'Berger e Luckmann', right: 'Construção social da realidade' },
                { left: 'Garfinkel', right: 'Etnometodologia' },
                { left: 'Mundo da vida', right: 'Realidade cotidiana' },
                { left: 'Experimentos de ruptura', right: 'Questionar o óbvio' }
            ]
        }
    },
    {
        id: 30314, unitId: 303, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Fenomenologia Social',
        content: {
            events: [
                { year: 1932, event: 'Schutz', description: 'A Construção Significativa do Mundo Social' },
                { year: 1966, event: 'Berger e Luckmann', description: 'A Construção Social da Realidade' },
                { year: 1967, event: 'Garfinkel', description: 'Studies in Ethnomethodology' },
                { year: 1970, event: 'Análise de Conversação', description: 'Sacks, Schegloff' }
            ]
        }
    },
    {
        id: 30315, unitId: 303, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Fenomenologia',
        content: {
            questions: [
                { question: 'O "mundo da vida" é:', options: ['A ciência', 'A realidade cotidiana', 'A economia', 'A política'], correct: 1 },
                { question: 'Para Berger e Luckmann, a realidade é:', options: ['Natural', 'Socialmente construída', 'Impossível', 'Religiosa'], correct: 1 },
                { question: 'Etnometodologia estuda:', options: ['Etnias', 'Métodos do senso comum', 'Economia', 'Política'], correct: 1 },
                { question: 'Tipificações são:', options: ['Tipos de máquinas', 'Categorias de compreensão', 'Tipos de governo', 'Nada'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 304 - Estruturalismo
const BLOCKS_304 = [
    {
        id: 30401, unitId: 304, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'O que é Estruturalismo?',
        content: {
            title: 'As Estruturas Profundas',
            text: 'O estruturalismo busca identificar as estruturas profundas que organizam a cultura e a sociedade. Originado na linguística de Saussure, foi aplicado à antropologia por Claude Lévi-Strauss. A ideia central: por trás da diversidade cultural, existem estruturas universais da mente humana.',
            keyPoints: ['Estruturas profundas', 'Universais da mente', 'Lévi-Strauss', 'Oposições binárias'],
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400'
        }
    },
    {
        id: 30402, unitId: 304, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Estruturalismo',
        content: {
            title: 'Lévi-Strauss e as Estruturas',
            description: 'Vídeo explicando o estruturalismo de Lévi-Strauss.',
            videoUrl: 'https://www.youtube.com/watch?v=estruturalismo-levi-strauss',
            duration: '15 minutos',
            questions: ['O que são oposições binárias?', 'O que Lévi-Strauss descobriu sobre mitos?']
        }
    },
    {
        id: 30403, unitId: 304, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Conceitos Básicos',
        content: {
            questions: [
                { question: 'O estruturalismo busca:', options: ['A história', 'Estruturas profundas', 'O indivíduo', 'A economia'], correct: 1 },
                { question: 'Lévi-Strauss era:', options: ['Sociólogo', 'Antropólogo', 'Economista', 'Físico'], correct: 1 },
                { question: 'Oposições binárias são:', options: ['Dois partidos', 'Pares de conceitos opostos', 'Dois países', 'Duas pessoas'], correct: 1 }
            ]
        }
    },
    {
        id: 30404, unitId: 304, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'Claude Lévi-Strauss',
        content: {
            title: 'O Estruturalismo Antropológico',
            text: '**CLAUDE LÉVI-STRAUSS (1908-2009)**\nAntropólogo francês, pai do estruturalismo.\n\n**Conceitos principais:**\n• **Estrutura:** padrão organizador subjacente\n• **Oposições binárias:** natureza/cultura, cru/cozido\n• **Mito:** narrativa que resolve contradições\n• **Bricolagem:** criação a partir do disponível\n\n**Obras:** Tristes Trópicos, O Pensamento Selvagem, Mitológicas\n\n**Ideia central:** Todas as culturas operam com as mesmas estruturas mentais.',
            keyPoints: ['Estruturas universais', 'Oposições binárias', 'Análise de mitos', 'Mente humana'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30405, unitId: 304, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Oposições Binárias',
        content: {
            pairs: [
                { left: 'Natureza', right: 'Cultura' },
                { left: 'Cru', right: 'Cozido' },
                { left: 'Selvagem', right: 'Domesticado' },
                { left: 'Sagrado', right: 'Profano' },
                { left: 'Masculino', right: 'Feminino' }
            ]
        }
    },
    {
        id: 30406, unitId: 304, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Estruturalismo',
        content: {
            sentences: [
                { text: 'Lévi-Strauss buscava _____ universais da mente.', answer: 'estruturas', options: ['estruturas', 'sentimentos', 'genes'] },
                { text: 'Oposições _____ organizam o pensamento.', answer: 'binárias', options: ['políticas', 'binárias', 'religiosas'] },
                { text: 'Os _____ são narrativas que resolvem contradições.', answer: 'mitos', options: ['mitos', 'jornais', 'livros'] }
            ]
        }
    },
    {
        id: 30407, unitId: 304, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Estruturalismo',
        content: {
            cards: [
                { front: 'Estruturalismo', back: 'Busca de estruturas profundas que organizam cultura e pensamento' },
                { front: 'Claude Lévi-Strauss', back: 'Antropólogo francês, fundador do estruturalismo (1908-2009)' },
                { front: 'Oposição binária', back: 'Par de conceitos opostos que organiza o pensamento' },
                { front: 'Mito', back: 'Narrativa que medeia e resolve contradições' },
                { front: 'Bricolagem', back: 'Criação a partir de elementos disponíveis' }
            ]
        }
    },
    {
        id: 30408, unitId: 304, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Estruturalismo e Linguagem',
        content: {
            title: 'Saussure e a Linguística',
            text: 'Ferdinand de Saussure (1857-1913) fundou a linguística estrutural:\n\n**Conceitos:**\n• **Langue:** sistema da língua\n• **Parole:** fala individual\n• **Signo:** significante + significado\n• **Diferença:** significado vem da diferença entre signos\n\n**Influência:** O modelo de Saussure influenciou Lévi-Strauss, Barthes, Lacan e toda a análise estrutural.',
            keyPoints: ['Langue e parole', 'Signo linguístico', 'Sistema de diferenças', 'Base do estruturalismo']
        }
    },
    {
        id: 30409, unitId: 304, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Desenvolvimento',
        content: {
            items: [
                { text: 'Saussure: linguística estrutural (1916)', correctOrder: 1 },
                { text: 'Jakobson: fonologia estrutural (1930s)', correctOrder: 2 },
                { text: 'Lévi-Strauss: antropologia estrutural (1949)', correctOrder: 3 },
                { text: 'Barthes: semiologia (1960s)', correctOrder: 4 },
                { text: 'Pós-estruturalismo (1970s)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30410, unitId: 304, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Oposições',
        content: {
            prompt: 'Lévi-Strauss diz que pensamos através de oposições binárias (natureza/cultura, masculino/feminino). Você concorda? Essas oposições são universais ou culturais? Existem outras formas de pensar além de oposições?',
            examples: ['Gênero não-binário', 'Culturas diferentes', 'Pensamento oriental'],
            minWords: 70
        }
    },
    {
        id: 30411, unitId: 304, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Lévi-Strauss',
        content: {
            questions: [
                { question: 'Lévi-Strauss estudou principalmente:', options: ['Economia', 'Mitos e parentesco', 'Física', 'Política'], correct: 1 },
                { question: 'Tristes Trópicos é um livro sobre:', options: ['Viagem e antropologia', 'Economia', 'Física', 'Música'], correct: 0 },
                { question: 'O estruturalismo busca estruturas:', options: ['Superficiais', 'Profundas', 'Econômicas', 'Políticas'], correct: 1 }
            ]
        }
    },
    {
        id: 30412, unitId: 304, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'Críticas ao Estruturalismo',
        content: {
            title: 'Limitações',
            text: '**Críticas principais:**\n\n• **Ahistórico:** ignora mudanças históricas\n• **Anti-humanista:** dissolve o sujeito\n• **Universalista:** ignora diferenças culturais\n• **Estático:** não explica transformações\n\n**Pós-estruturalismo:**\nDerrida, Foucault e outros criticaram e superaram o estruturalismo, mantendo a ênfase em linguagem e discurso mas rejeitando estruturas fixas.',
            keyPoints: ['Ahistórico', 'Anti-humanista', 'Pós-estruturalismo', 'Superação crítica'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 30413, unitId: 304, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Estruturalismo',
        content: {
            pairs: [
                { left: 'Saussure', right: 'Linguística estrutural' },
                { left: 'Lévi-Strauss', right: 'Antropologia estrutural' },
                { left: 'Barthes', right: 'Semiologia' },
                { left: 'Derrida', right: 'Pós-estruturalismo' },
                { left: 'Langue', right: 'Sistema da língua' }
            ]
        }
    },
    {
        id: 30414, unitId: 304, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Estruturalismo',
        content: {
            events: [
                { year: 1916, event: 'Saussure', description: 'Curso de Linguística Geral' },
                { year: 1949, event: 'Lévi-Strauss', description: 'Estruturas Elementares do Parentesco' },
                { year: 1962, event: 'Lévi-Strauss', description: 'O Pensamento Selvagem' },
                { year: 1967, event: 'Derrida', description: 'Gramatologia - crítica' },
                { year: 2009, event: 'Morte Lévi-Strauss', description: 'Aos 100 anos' }
            ]
        }
    },
    {
        id: 30415, unitId: 304, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Estruturalismo',
        content: {
            questions: [
                { question: 'Lévi-Strauss era:', options: ['Sociólogo', 'Antropólogo', 'Economista', 'Físico'], correct: 1 },
                { question: 'Oposições binárias incluem:', options: ['Natureza/cultura', 'Preço/valor', '1+1=2', 'Nada'], correct: 0 },
                { question: 'O estruturalismo originou-se na:', options: ['Economia', 'Linguística', 'Física', 'Biologia'], correct: 1 },
                { question: 'Uma crítica ao estruturalismo é ser:', options: ['Muito histórico', 'Ahistórico', 'Muito individual', 'Muito econômico'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 305 - Georg Simmel
const BLOCKS_305 = [
    {
        id: 30501, unitId: 305, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'Quem foi Georg Simmel?',
        content: {
            title: 'O Sociólogo das Formas',
            text: 'Georg Simmel (1858-1918) foi um sociólogo alemão que analisou as formas de socialização - os padrões recorrentes das interações sociais. Diferente de Marx (conteúdo econômico) ou Durkheim (fatos sociais), Simmel focou nas formas: conflito, subordinação, sociabilidade. Pioneiro da sociologia urbana e do estudo da modernidade.',
            keyPoints: ['Formas de socialização', 'Sociologia formal', 'Vida urbana', 'Modernidade'],
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Georg_Simmel.jpg'
        }
    },
    {
        id: 30502, unitId: 305, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Simmel',
        content: {
            title: 'Georg Simmel e a Vida Moderna',
            description: 'Vídeo sobre a sociologia de Simmel.',
            videoUrl: 'https://www.youtube.com/watch?v=simmel-sociologia',
            duration: '13 minutos',
            questions: ['O que são formas sociais?', 'Como a metrópole afeta a vida mental?']
        }
    },
    {
        id: 30503, unitId: 305, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Simmel',
        content: {
            questions: [
                { question: 'Simmel focou em:', options: ['Conteúdo econômico', 'Formas de interação', 'Genética', 'Religião'], correct: 1 },
                { question: 'Simmel era:', options: ['Francês', 'Inglês', 'Alemão', 'Italiano'], correct: 2 },
                { question: 'Simmel é pioneiro da sociologia:', options: ['Rural', 'Urbana', 'Religiosa', 'Militar'], correct: 1 }
            ]
        }
    },
    {
        id: 30504, unitId: 305, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'A Metrópole e a Vida Mental',
        content: {
            title: 'A Experiência Urbana',
            text: 'Em "A Metrópole e a Vida Mental" (1903), Simmel analisa:\n\n**Efeitos da cidade:**\n• **Intensificação nervosa:** excesso de estímulos\n• **Atitude blasé:** indiferença como defesa\n• **Anonimato:** liberdade mas solidão\n• **Economia monetária:** tudo tem preço\n\n**Paradoxo:** A cidade liberta do controle tradicional mas cria novas formas de alienação.\n\nEste ensaio influenciou toda a sociologia urbana posterior.',
            keyPoints: ['Excesso de estímulos', 'Atitude blasé', 'Anonimato', 'Economia monetária'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30505, unitId: 305, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Simmel',
        content: {
            pairs: [
                { left: 'Atitude blasé', right: 'Indiferença como defesa' },
                { left: 'Metrópole', right: 'Excesso de estímulos' },
                { left: 'Formas sociais', right: 'Padrões de interação' },
                { left: 'Dinheiro', right: 'Quantifica tudo' },
                { left: 'Estrangeiro', right: 'Próximo e distante' }
            ]
        }
    },
    {
        id: 30506, unitId: 305, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Simmel',
        content: {
            sentences: [
                { text: 'Simmel estudou as _____ de socialização.', answer: 'formas', options: ['formas', 'leis', 'causas'] },
                { text: 'A atitude _____ é indiferença como defesa na cidade.', answer: 'blasé', options: ['blasé', 'feliz', 'triste'] },
                { text: 'Na cidade, há excesso de _____.', answer: 'estímulos', options: ['dinheiro', 'estímulos', 'comida'] }
            ]
        }
    },
    {
        id: 30507, unitId: 305, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Simmel',
        content: {
            cards: [
                { front: 'Georg Simmel', back: 'Sociólogo alemão das formas sociais (1858-1918)' },
                { front: 'Formas de socialização', back: 'Padrões recorrentes de interação social' },
                { front: 'Atitude blasé', back: 'Indiferença como defesa contra excesso de estímulos' },
                { front: 'O Estrangeiro', back: 'Figura que é ao mesmo tempo próxima e distante' },
                { front: 'Filosofia do Dinheiro', back: 'Obra de Simmel sobre a economia monetária' }
            ]
        }
    },
    {
        id: 30508, unitId: 305, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'A Filosofia do Dinheiro',
        content: {
            title: 'O Dinheiro e a Modernidade',
            text: 'Em "A Filosofia do Dinheiro" (1900), Simmel analisa:\n\n**Efeitos do dinheiro:**\n• Quantifica relações qualitativas\n• Permite liberdade (troca impessoal)\n• Cria distância (tudo tem preço)\n• Acelera a vida\n\n**Paradoxo:** O dinheiro liberta de laços pessoais mas empobrece as relações.\n\nSimmel antecipou muitas análises da sociedade de consumo.',
            keyPoints: ['Quantificação', 'Liberdade e distância', 'Aceleração', 'Impessoalidade']
        }
    },
    {
        id: 30509, unitId: 305, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Obras de Simmel',
        content: {
            items: [
                { text: 'Sobre a Diferenciação Social (1890)', correctOrder: 1 },
                { text: 'A Filosofia do Dinheiro (1900)', correctOrder: 2 },
                { text: 'Sociologia (1908)', correctOrder: 3 },
                { text: 'Questões Fundamentais da Sociologia (1917)', correctOrder: 4 },
                { text: 'Morte (1918)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30510, unitId: 305, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Vida Urbana',
        content: {
            prompt: 'Simmel escreveu sobre a metrópole em 1903. Hoje, com smartphones e redes sociais, o excesso de estímulos aumentou? Você pratica a "atitude blasé" no seu cotidiano? Como você lida com o bombardeio de informações?',
            examples: ['Notificações', 'Redes sociais', 'Indiferença', 'Desconexão'],
            minWords: 70
        }
    },
    {
        id: 30511, unitId: 305, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Conceitos',
        content: {
            questions: [
                { question: 'A Filosofia do Dinheiro analisa:', options: ['Como ficar rico', 'Efeitos culturais do dinheiro', 'Investimentos', 'Bancos'], correct: 1 },
                { question: 'O estrangeiro de Simmel é:', options: ['Um turista', 'Próximo e distante ao mesmo tempo', 'Um inimigo', 'Um parente'], correct: 1 },
                { question: 'Simmel influenciou a Escola de:', options: ['Frankfurt', 'Chicago', 'Paris', 'Londres'], correct: 1 }
            ]
        }
    },
    {
        id: 30512, unitId: 305, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'O Estrangeiro',
        content: {
            title: 'Proximidade e Distância',
            text: 'O ensaio "O Estrangeiro" (1908) é um clássico:\n\n**Características do estrangeiro:**\n• Está no grupo mas não pertence totalmente\n• Objetividade: vê o que os nativos não veem\n• Mobilidade: pode partir a qualquer momento\n• Confiança: recebe confissões por ser "de fora"\n\n**Exemplo:** O comerciante, o judeu na Europa, o migrante.\n\nEste conceito influenciou estudos sobre migração e marginalidade.',
            keyPoints: ['Próximo e distante', 'Objetividade', 'Mobilidade', 'Marginalidade'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 30513, unitId: 305, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Conceitos de Simmel',
        content: {
            pairs: [
                { left: 'Metrópole', right: 'Vida urbana moderna' },
                { left: 'Dinheiro', right: 'Quantifica relações' },
                { left: 'Estrangeiro', right: 'Próximo e distante' },
                { left: 'Blasé', right: 'Indiferença defensiva' },
                { left: 'Forma', right: 'Padrão de interação' }
            ]
        }
    },
    {
        id: 30514, unitId: 305, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Georg Simmel',
        content: {
            events: [
                { year: 1858, event: 'Nascimento', description: 'Berlim, Alemanha' },
                { year: 1900, event: 'Filosofia do Dinheiro', description: 'Obra sobre modernidade' },
                { year: 1903, event: 'A Metrópole', description: 'Ensaio clássico' },
                { year: 1908, event: 'Sociologia', description: 'Obra sistemática' },
                { year: 1918, event: 'Morte', description: 'Estrasburgo' }
            ]
        }
    },
    {
        id: 30515, unitId: 305, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Simmel',
        content: {
            questions: [
                { question: 'Simmel focou nas _____ de socialização:', options: ['Causas', 'Formas', 'Leis', 'Origens'], correct: 1 },
                { question: 'A atitude blasé é:', options: ['Entusiasmo', 'Indiferença', 'Raiva', 'Amor'], correct: 1 },
                { question: 'O Estrangeiro é caracterizado por:', options: ['Ser nativo', 'Proximidade e distância', 'Riqueza', 'Pobreza'], correct: 1 },
                { question: 'Simmel é pioneiro da sociologia:', options: ['Rural', 'Urbana', 'Religiosa', 'Militar'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 306 - Norbert Elias
const BLOCKS_306 = [
    {
        id: 30601, unitId: 306, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'Quem foi Norbert Elias?',
        content: {
            title: 'O Processo Civilizador',
            text: 'Norbert Elias (1897-1990) foi um sociólogo alemão que desenvolveu a sociologia processual. Sua obra-prima, "O Processo Civilizador", mostra como comportamentos considerados "civilizados" (controle de emoções, etiqueta) foram historicamente construídos. Elias superou a divisão indivíduo/sociedade com o conceito de figuração.',
            keyPoints: ['Processo civilizador', 'Sociologia figuracional', 'Controle de emoções', 'Longa duração'],
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400'
        }
    },
    {
        id: 30602, unitId: 306, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Norbert Elias',
        content: {
            title: 'O Processo Civilizador',
            description: 'Vídeo explicando a teoria de Elias sobre civilização.',
            videoUrl: 'https://www.youtube.com/watch?v=norbert-elias',
            duration: '14 minutos',
            questions: ['O que é o processo civilizador?', 'Como a etiqueta à mesa mudou?']
        }
    },
    {
        id: 30603, unitId: 306, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Elias',
        content: {
            questions: [
                { question: 'Elias estudou o processo:', options: ['Econômico', 'Civilizador', 'Militar', 'Religioso'], correct: 1 },
                { question: 'Para Elias, comportamentos civilizados são:', options: ['Naturais', 'Historicamente construídos', 'Genéticos', 'Divinos'], correct: 1 },
                { question: 'Figuração significa:', options: ['Desenho', 'Rede de interdependências', 'Figura de linguagem', 'Estatística'], correct: 1 }
            ]
        }
    },
    {
        id: 30604, unitId: 306, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'O Processo Civilizador',
        content: {
            title: 'Civilização como Construção',
            text: '**O PROCESSO CIVILIZADOR (1939)**\n\nElias analisou manuais de etiqueta medievais e mostrou:\n\n**Mudanças históricas:**\n• Comer com as mãos → garfo e faca\n• Cuspir na mesa → proibido\n• Funções corporais em público → privadas\n• Violência espontânea → autocontrole\n\n**Causa:** Centralização do Estado e monopolização da violência.\n\n**Tese:** Não somos mais "civilizados" que medievais - aprendemos diferentes normas de autocontrole.',
            keyPoints: ['Etiqueta historicamente construída', 'Centralização do Estado', 'Autocontrole crescente', 'Não é progresso natural'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30605, unitId: 306, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Elias',
        content: {
            pairs: [
                { left: 'Processo civilizador', right: 'Construção histórica de comportamentos' },
                { left: 'Figuração', right: 'Rede de interdependências' },
                { left: 'Autocontrole', right: 'Controle de emoções e impulsos' },
                { left: 'Estado', right: 'Monopoliza violência' },
                { left: 'Etiqueta', right: 'Normas de comportamento' }
            ]
        }
    },
    {
        id: 30606, unitId: 306, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Elias',
        content: {
            sentences: [
                { text: 'Elias estudou o processo _____.', answer: 'civilizador', options: ['civilizador', 'econômico', 'religioso'] },
                { text: 'Comportamentos civilizados são _____ construídos.', answer: 'historicamente', options: ['geneticamente', 'historicamente', 'divinamente'] },
                { text: 'Figuração é uma rede de _____.', answer: 'interdependências', options: ['computadores', 'interdependências', 'estradas'] }
            ]
        }
    },
    {
        id: 30607, unitId: 306, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Elias',
        content: {
            cards: [
                { front: 'Norbert Elias', back: 'Sociólogo alemão do processo civilizador (1897-1990)' },
                { front: 'Processo Civilizador', back: 'Construção histórica de normas de autocontrole e etiqueta' },
                { front: 'Figuração', back: 'Rede de interdependências entre indivíduos' },
                { front: 'Sociologia processual', back: 'Foco em processos de longa duração' },
                { front: 'Monopolização da violência', back: 'Estado centraliza o uso legítimo da força' }
            ]
        }
    },
    {
        id: 30608, unitId: 306, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Figuração e Interdependência',
        content: {
            title: 'Superando Indivíduo vs. Sociedade',
            text: 'Elias criticou a falsa oposição indivíduo/sociedade:\n\n**Figuração:**\n• Indivíduos só existem em redes de interdependência\n• Não há indivíduo isolado nem sociedade abstrata\n• Poder é relacional, não uma coisa\n• Sociedade é processo, não estrutura fixa\n\n**Analogia:** Um jogo de cartas - cada jogada depende das outras.\n\nElias propõe pensar em "nós" antes de "eu" ou "eles".',
            keyPoints: ['Supera dicotomia', 'Interdependência', 'Poder relacional', 'Processo']
        }
    },
    {
        id: 30609, unitId: 306, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Vida de Elias',
        content: {
            items: [
                { text: 'Nascimento em Breslau (1897)', correctOrder: 1 },
                { text: 'Fuga da Alemanha nazista (1933)', correctOrder: 2 },
                { text: 'O Processo Civilizador (1939)', correctOrder: 3 },
                { text: 'Reconhecimento tardio (1970s)', correctOrder: 4 },
                { text: 'Morte em Amsterdã (1990)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30610, unitId: 306, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Civilização',
        content: {
            prompt: 'Elias mostra que o que consideramos "civilizado" foi construído historicamente. Você pode pensar em comportamentos que eram aceitos no passado mas hoje são considerados "bárbaros"? E o contrário - coisas aceitas hoje que no futuro podem ser vistas como "bárbaras"?',
            examples: ['Escravidão', 'Duelos', 'Execuções públicas', 'Criação industrial de animais'],
            minWords: 70
        }
    },
    {
        id: 30611, unitId: 306, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Conceitos',
        content: {
            questions: [
                { question: 'Elias analisou manuais de:', options: ['Física', 'Etiqueta medieval', 'Economia', 'Direito'], correct: 1 },
                { question: 'O Estado monopoliza:', options: ['O comércio', 'A violência legítima', 'A religião', 'A educação'], correct: 1 },
                { question: 'Figuração supera a dicotomia:', options: ['Homem/mulher', 'Indivíduo/sociedade', 'Dia/noite', 'Certo/errado'], correct: 1 }
            ]
        }
    },
    {
        id: 30612, unitId: 306, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'Os Estabelecidos e Outsiders',
        content: {
            title: 'Poder e Estigma',
            text: 'Em "Os Estabelecidos e os Outsiders" (1965), Elias estudou uma pequena cidade inglesa:\n\n**Descobertas:**\n• Moradores antigos (estabelecidos) estigmatizavam os novos (outsiders)\n• Não havia diferença de classe, raça ou renda\n• A única diferença: tempo de residência\n\n**Conclusão:** O estigma não precisa de diferenças "reais" - basta a percepção de superioridade grupal.\n\nEste estudo ilumina racismo, xenofobia e outras formas de discriminação.',
            keyPoints: ['Estabelecidos vs. outsiders', 'Estigma sem diferença objetiva', 'Poder grupal', 'Aplicável a racismo'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 30613, unitId: 306, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Obras de Elias',
        content: {
            pairs: [
                { left: 'O Processo Civilizador', right: 'Etiqueta e autocontrole' },
                { left: 'Os Estabelecidos e Outsiders', right: 'Estigma e poder' },
                { left: 'A Sociedade dos Indivíduos', right: 'Figuração' },
                { left: 'Mozart', right: 'Sociologia de um gênio' },
                { left: 'A Solidão dos Moribundos', right: 'Morte e civilização' }
            ]
        }
    },
    {
        id: 30614, unitId: 306, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Norbert Elias',
        content: {
            events: [
                { year: 1897, event: 'Nascimento', description: 'Breslau, Alemanha' },
                { year: 1939, event: 'O Processo Civilizador', description: 'Obra-prima ignorada' },
                { year: 1965, event: 'Estabelecidos e Outsiders', description: 'Estudo sobre estigma' },
                { year: 1977, event: 'Reconhecimento', description: 'Prêmio Adorno' },
                { year: 1990, event: 'Morte', description: 'Amsterdã, aos 93 anos' }
            ]
        }
    },
    {
        id: 30615, unitId: 306, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Elias',
        content: {
            questions: [
                { question: 'O Processo Civilizador foi publicado em:', options: ['1900', '1939', '1968', '1990'], correct: 1 },
                { question: 'Figuração é:', options: ['Uma figura', 'Rede de interdependências', 'Um desenho', 'Uma estatística'], correct: 1 },
                { question: 'Para Elias, civilização é:', options: ['Natural', 'Historicamente construída', 'Genética', 'Divina'], correct: 1 },
                { question: 'Elias foi reconhecido:', options: ['Imediatamente', 'Tardiamente', 'Nunca', 'Na infância'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 307 - Pierre Bourdieu
const BLOCKS_307 = [
    {
        id: 30701, unitId: 307, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'Quem foi Pierre Bourdieu?',
        content: {
            title: 'O Sociólogo da Reprodução',
            text: 'Pierre Bourdieu (1930-2002) foi um sociólogo francês que revolucionou o entendimento de como a desigualdade se reproduz. Desenvolveu conceitos como habitus, campo e capital cultural. Mostrou que a escola, longe de ser neutra, reproduz as desigualdades sociais ao privilegiar a cultura das classes dominantes.',
            keyPoints: ['Habitus', 'Campo', 'Capital cultural', 'Reprodução social'],
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Pierre_Bourdieu_%281%29.jpg'
        }
    },
    {
        id: 30702, unitId: 307, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Bourdieu',
        content: {
            title: 'Habitus, Campo e Capital',
            description: 'Vídeo explicando os conceitos centrais de Bourdieu.',
            videoUrl: 'https://www.youtube.com/watch?v=bourdieu-habitus',
            duration: '15 minutos',
            questions: ['O que é habitus?', 'Como a escola reproduz desigualdades?']
        }
    },
    {
        id: 30703, unitId: 307, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Bourdieu',
        content: {
            questions: [
                { question: 'Habitus é:', options: ['Um hábito', 'Disposições incorporadas', 'Um habitat', 'Uma casa'], correct: 1 },
                { question: 'Capital cultural inclui:', options: ['Dinheiro', 'Conhecimentos e diplomas', 'Imóveis', 'Ações'], correct: 1 },
                { question: 'Para Bourdieu, a escola:', options: ['Elimina desigualdades', 'Reproduz desigualdades', 'É irrelevante', 'É neutra'], correct: 1 }
            ]
        }
    },
    {
        id: 30704, unitId: 307, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'Habitus',
        content: {
            title: 'Disposições Incorporadas',
            text: '**HABITUS**\n\nO habitus são disposições duráveis e transferíveis:\n\n**Características:**\n• Incorporado: está no corpo (postura, gosto, sotaque)\n• Durável: adquirido na infância, difícil de mudar\n• Transferível: aplica-se em diferentes situações\n• Inconsciente: não pensamos sobre ele\n\n**Origem:** Socialização primária (família) e secundária (escola)\n\n**Exemplo:** A "naturalidade" de quem nasceu em família culta é habitus - outros precisam aprender conscientemente.',
            keyPoints: ['Disposições incorporadas', 'Adquirido na socialização', 'Inconsciente', 'Marca de classe'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30705, unitId: 307, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Conceitos de Bourdieu',
        content: {
            pairs: [
                { left: 'Habitus', right: 'Disposições incorporadas' },
                { left: 'Campo', right: 'Espaço de disputa por poder' },
                { left: 'Capital cultural', right: 'Conhecimentos e diplomas' },
                { left: 'Capital social', right: 'Rede de relações' },
                { left: 'Capital simbólico', right: 'Prestígio e reconhecimento' }
            ]
        }
    },
    {
        id: 30706, unitId: 307, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Bourdieu',
        content: {
            sentences: [
                { text: 'O _____ são disposições incorporadas na socialização.', answer: 'habitus', options: ['habitus', 'campo', 'capital'] },
                { text: 'Capital _____ inclui diplomas e conhecimentos.', answer: 'cultural', options: ['econômico', 'cultural', 'social'] },
                { text: 'O _____ é um espaço de disputa por poder.', answer: 'campo', options: ['habitus', 'campo', 'gosto'] }
            ]
        }
    },
    {
        id: 30707, unitId: 307, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Bourdieu',
        content: {
            cards: [
                { front: 'Pierre Bourdieu', back: 'Sociólogo francês da reprodução social (1930-2002)' },
                { front: 'Habitus', back: 'Disposições duráveis incorporadas na socialização' },
                { front: 'Campo', back: 'Espaço estruturado de posições e disputas' },
                { front: 'Capital cultural', back: 'Conhecimentos, diplomas, familiaridade com cultura legítima' },
                { front: 'Violência simbólica', back: 'Imposição de significados como legítimos' }
            ]
        }
    },
    {
        id: 30708, unitId: 307, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Campo e Capitais',
        content: {
            title: 'Espaços de Disputa',
            text: '**CAMPO**\nÉ um espaço social de disputa (campo artístico, acadêmico, político...):\n\n• Tem regras próprias\n• Agentes disputam posições\n• Quem tem mais capital domina\n\n**TIPOS DE CAPITAL:**\n• **Econômico:** dinheiro, propriedades\n• **Cultural:** diplomas, conhecimentos, gosto\n• **Social:** rede de relações\n• **Simbólico:** prestígio, reconhecimento\n\nOs capitais são conversíveis entre si (dinheiro compra educação, educação gera renda).',
            keyPoints: ['Campo: espaço de disputa', 'Quatro tipos de capital', 'Capitais conversíveis', 'Dominação multidimensional']
        }
    },
    {
        id: 30709, unitId: 307, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Obras de Bourdieu',
        content: {
            items: [
                { text: 'Os Herdeiros (1964)', correctOrder: 1 },
                { text: 'A Reprodução (1970)', correctOrder: 2 },
                { text: 'A Distinção (1979)', correctOrder: 3 },
                { text: 'Homo Academicus (1984)', correctOrder: 4 },
                { text: 'A Miséria do Mundo (1993)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30710, unitId: 307, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Seu Habitus',
        content: {
            prompt: 'Bourdieu diz que nosso habitus (gostos, posturas, maneiras de falar) revela nossa origem social. Você consegue identificar aspectos do seu habitus? Há coisas que você faz "naturalmente" que outros precisam aprender?',
            examples: ['Gosto musical', 'Forma de falar', 'Posturas corporais', 'Preferências alimentares'],
            minWords: 70
        }
    },
    {
        id: 30711, unitId: 307, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Capitais',
        content: {
            questions: [
                { question: 'Capital econômico inclui:', options: ['Diplomas', 'Dinheiro', 'Amigos', 'Prestígio'], correct: 1 },
                { question: 'Capital social são:', options: ['Relações', 'Conhecimentos', 'Dinheiro', 'Prestígio'], correct: 0 },
                { question: 'Violência simbólica é:', options: ['Agressão física', 'Imposição de significados', 'Crime', 'Guerra'], correct: 1 }
            ]
        }
    },
    {
        id: 30712, unitId: 307, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'A Distinção',
        content: {
            title: 'Gosto como Marca de Classe',
            text: 'Em "A Distinção" (1979), Bourdieu pesquisou gostos na França:\n\n**Descobertas:**\n• O "bom gosto" é o gosto da classe dominante\n• Classes populares têm "gosto de necessidade"\n• Classes médias imitam classes altas\n• Gosto legitima desigualdades\n\n**Exemplo:** Preferir música clássica não é mais "refinado" - é marca de classe.\n\nO gosto parece natural mas é socialmente construído.',
            keyPoints: ['Gosto é marca de classe', 'Bom gosto = classe dominante', 'Legitimação da desigualdade', 'Construção social'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 30713, unitId: 307, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Bourdieu',
        content: {
            pairs: [
                { left: 'Os Herdeiros', right: 'Escola e reprodução' },
                { left: 'A Distinção', right: 'Gosto e classe' },
                { left: 'A Miséria do Mundo', right: 'Sofrimento social' },
                { left: 'Violência simbólica', right: 'Dominação naturalizada' },
                { left: 'Illusio', right: 'Crença no jogo do campo' }
            ]
        }
    },
    {
        id: 30714, unitId: 307, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Pierre Bourdieu',
        content: {
            events: [
                { year: 1930, event: 'Nascimento', description: 'Denguin, França' },
                { year: 1964, event: 'Os Herdeiros', description: 'Crítica à escola' },
                { year: 1979, event: 'A Distinção', description: 'Obra-prima' },
                { year: 1995, event: 'Engajamento político', description: 'Greves na França' },
                { year: 2002, event: 'Morte', description: 'Paris' }
            ]
        }
    },
    {
        id: 30715, unitId: 307, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Bourdieu',
        content: {
            questions: [
                { question: 'Habitus são:', options: ['Hábitos', 'Disposições incorporadas', 'Habitats', 'Casas'], correct: 1 },
                { question: 'Para Bourdieu, a escola:', options: ['Elimina desigualdades', 'Reproduz desigualdades', 'É neutra', 'É irrelevante'], correct: 1 },
                { question: 'Capital cultural inclui:', options: ['Dinheiro', 'Diplomas e conhecimentos', 'Amigos', 'Imóveis'], correct: 1 },
                { question: 'A Distinção estuda:', options: ['Gosto e classe', 'Economia', 'Política', 'Religião'], correct: 0 }
            ]
        }
    }
];

// Blocos para Unidade 308 - Anthony Giddens
const BLOCKS_308 = [
    {
        id: 30801, unitId: 308, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'Quem foi Anthony Giddens?',
        content: {
            title: 'A Teoria da Estruturação',
            text: 'Anthony Giddens (1938-) é um sociólogo britânico que desenvolveu a teoria da estruturação, tentando superar a oposição entre estrutura e agência. Para Giddens, estrutura e ação não são opostas - as estruturas são criadas e recriadas pelas ações dos indivíduos, e ao mesmo tempo condicionam essas ações.',
            keyPoints: ['Teoria da estruturação', 'Dualidade da estrutura', 'Modernidade reflexiva', 'Terceira Via'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        }
    },
    {
        id: 30802, unitId: 308, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Giddens',
        content: {
            title: 'A Teoria da Estruturação',
            description: 'Vídeo explicando a teoria de Giddens.',
            videoUrl: 'https://www.youtube.com/watch?v=giddens-estruturacao',
            duration: '13 minutos',
            questions: ['O que é dualidade da estrutura?', 'Como agência e estrutura se relacionam?']
        }
    },
    {
        id: 30803, unitId: 308, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Giddens',
        content: {
            questions: [
                { question: 'Giddens desenvolveu a teoria da:', options: ['Evolução', 'Estruturação', 'Relatividade', 'Revolução'], correct: 1 },
                { question: 'Dualidade da estrutura significa:', options: ['Duas estruturas', 'Estrutura e agência se constituem mutuamente', 'Estrutura dupla', 'Duas teorias'], correct: 1 },
                { question: 'Giddens é:', options: ['Francês', 'Alemão', 'Britânico', 'Americano'], correct: 2 }
            ]
        }
    },
    {
        id: 30804, unitId: 308, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'A Teoria da Estruturação',
        content: {
            title: 'Estrutura e Agência',
            text: '**TEORIA DA ESTRUTURAÇÃO**\n\nGiddens propõe superar dois extremos:\n• Objetivismo: estrutura determina tudo\n• Subjetivismo: indivíduo é livre\n\n**Dualidade da estrutura:**\n• Estrutura é meio e resultado da ação\n• Ao agir, reproduzimos ou transformamos estruturas\n• Estruturas são "regras e recursos"\n• Não existem fora das práticas\n\n**Exemplo:** Ao falar português, reproduzo a língua (estrutura), mas também posso criar gírias (transformação).',
            keyPoints: ['Dualidade da estrutura', 'Estrutura: regras e recursos', 'Ação reproduz/transforma', 'Supera oposição'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30805, unitId: 308, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Giddens',
        content: {
            pairs: [
                { left: 'Estruturação', right: 'Produção e reprodução de estruturas' },
                { left: 'Dualidade', right: 'Estrutura é meio e resultado' },
                { left: 'Agência', right: 'Capacidade de agir' },
                { left: 'Reflexividade', right: 'Monitoramento da ação' },
                { left: 'Rotinização', right: 'Repetição de práticas' }
            ]
        }
    },
    {
        id: 30806, unitId: 308, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Giddens',
        content: {
            sentences: [
                { text: 'A _____ da estrutura significa que estrutura é meio e resultado.', answer: 'dualidade', options: ['dualidade', 'unidade', 'pluralidade'] },
                { text: 'Para Giddens, estruturas são regras e _____.', answer: 'recursos', options: ['recursos', 'leis', 'teorias'] },
                { text: 'A _____ é o monitoramento reflexivo da ação.', answer: 'reflexividade', options: ['estruturação', 'reflexividade', 'rotinização'] }
            ]
        }
    },
    {
        id: 30807, unitId: 308, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Giddens',
        content: {
            cards: [
                { front: 'Anthony Giddens', back: 'Sociólogo britânico da teoria da estruturação (1938-)' },
                { front: 'Teoria da estruturação', back: 'Estrutura e agência se constituem mutuamente' },
                { front: 'Dualidade da estrutura', back: 'Estrutura é meio e resultado da ação' },
                { front: 'Agência', back: 'Capacidade de agir e fazer diferença' },
                { front: 'Modernidade reflexiva', back: 'Indivíduos constantemente se questionam' }
            ]
        }
    },
    {
        id: 30808, unitId: 308, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Modernidade Reflexiva',
        content: {
            title: 'A Modernidade Tardia',
            text: 'Giddens analisa a modernidade tardia:\n\n**Características:**\n• **Reflexividade:** constante auto-questionamento\n• **Desencaixe:** relações não dependem de lugar\n• **Sistemas peritos:** confiamos em especialistas\n• **Risco:** vivemos em "sociedade de risco"\n\n**Identidade:** Na modernidade, a identidade é projeto - construímos quem somos.\n\nDiferente de pós-modernos, Giddens vê continuidade (modernidade radicalizada).',
            keyPoints: ['Reflexividade constante', 'Desencaixe', 'Sistemas peritos', 'Identidade como projeto']
        }
    },
    {
        id: 30809, unitId: 308, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Obras de Giddens',
        content: {
            items: [
                { text: 'As Novas Regras do Método Sociológico (1976)', correctOrder: 1 },
                { text: 'A Constituição da Sociedade (1984)', correctOrder: 2 },
                { text: 'As Consequências da Modernidade (1990)', correctOrder: 3 },
                { text: 'Modernidade e Identidade (1991)', correctOrder: 4 },
                { text: 'A Terceira Via (1998)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30810, unitId: 308, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Identidade',
        content: {
            prompt: 'Giddens diz que na modernidade a identidade é um "projeto reflexivo" - não herdamos quem somos, construímos. Você concorda? Quanto da sua identidade você escolheu e quanto foi determinado pela sua origem social?',
            examples: ['Carreira', 'Estilo de vida', 'Valores', 'Crenças'],
            minWords: 70
        }
    },
    {
        id: 30811, unitId: 308, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Modernidade',
        content: {
            questions: [
                { question: 'Reflexividade significa:', options: ['Reflexos', 'Auto-questionamento constante', 'Espelhos', 'Reação'], correct: 1 },
                { question: 'Desencaixe significa:', options: ['Relações não dependem de lugar', 'Móveis desmontados', 'Peças soltas', 'Confusão'], correct: 0 },
                { question: 'Para Giddens, identidade na modernidade é:', options: ['Fixa', 'Projeto', 'Impossível', 'Natural'], correct: 1 }
            ]
        }
    },
    {
        id: 30812, unitId: 308, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'A Terceira Via',
        content: {
            title: 'Política e Giddens',
            text: 'Giddens teve influência política com a "Terceira Via":\n\n**Proposta:**\n• Nem socialismo tradicional nem neoliberalismo\n• Estado ativo mas não grande\n• Mercado com regulação\n• Responsabilidade individual com proteção social\n\n**Influência:** Assessorou Tony Blair (Reino Unido), influenciou Clinton (EUA), FHC (Brasil).\n\n**Críticas:** Vista como capitulação ao neoliberalismo pela esquerda.',
            keyPoints: ['Nem esquerda nem direita', 'Influenciou governos', 'Criticado pela esquerda', 'Pragmatismo'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 30813, unitId: 308, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Giddens',
        content: {
            pairs: [
                { left: 'A Constituição da Sociedade', right: 'Teoria da estruturação' },
                { left: 'Modernidade e Identidade', right: 'Self na modernidade' },
                { left: 'A Terceira Via', right: 'Proposta política' },
                { left: 'Reflexividade', right: 'Auto-questionamento' },
                { left: 'Tony Blair', right: 'Influenciado por Giddens' }
            ]
        }
    },
    {
        id: 30814, unitId: 308, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Anthony Giddens',
        content: {
            events: [
                { year: 1938, event: 'Nascimento', description: 'Edmonton, Inglaterra' },
                { year: 1984, event: 'A Constituição', description: 'Teoria da estruturação' },
                { year: 1990, event: 'Consequências', description: 'Modernidade reflexiva' },
                { year: 1997, event: 'LSE', description: 'Diretor da London School' },
                { year: 2004, event: 'Barão', description: 'Entra na House of Lords' }
            ]
        }
    },
    {
        id: 30815, unitId: 308, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Giddens',
        content: {
            questions: [
                { question: 'Dualidade da estrutura significa:', options: ['Duas estruturas', 'Estrutura é meio e resultado', 'Duas teorias', 'Conflito'], correct: 1 },
                { question: 'Para Giddens, estruturas são:', options: ['Prédios', 'Regras e recursos', 'Leis físicas', 'Teorias'], correct: 1 },
                { question: 'A Terceira Via é:', options: ['Uma rua', 'Proposta política', 'Uma teoria física', 'Uma religião'], correct: 1 },
                { question: 'Giddens assessorou:', options: ['Marx', 'Tony Blair', 'Durkheim', 'Weber'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 309 - Michel Foucault
const BLOCKS_309 = [
    {
        id: 30901, unitId: 309, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'Quem foi Michel Foucault?',
        content: {
            title: 'O Pensador do Poder',
            text: 'Michel Foucault (1926-1984) foi um filósofo francês que revolucionou o entendimento de poder, saber e subjetividade. Mostrou que o poder não está apenas no Estado, mas em todas as relações sociais. Analisou como instituições (prisões, hospitais, escolas) disciplinam corpos e produzem "verdades".',
            keyPoints: ['Poder e saber', 'Disciplina', 'Discurso', 'Biopolítica'],
            image: 'https://upload.wikimedia.org/wikipedia/en/4/47/Foucault5.jpg'
        }
    },
    {
        id: 30902, unitId: 309, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Foucault',
        content: {
            title: 'Poder e Disciplina em Foucault',
            description: 'Vídeo explicando os conceitos centrais de Foucault.',
            videoUrl: 'https://www.youtube.com/watch?v=foucault-poder',
            duration: '16 minutos',
            questions: ['O que é poder para Foucault?', 'O que é o panóptico?']
        }
    },
    {
        id: 30903, unitId: 309, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Foucault',
        content: {
            questions: [
                { question: 'Para Foucault, poder está:', options: ['Apenas no Estado', 'Em todas as relações', 'Apenas na economia', 'Em lugar nenhum'], correct: 1 },
                { question: 'O panóptico é um modelo de:', options: ['Hospital', 'Vigilância', 'Economia', 'Religião'], correct: 1 },
                { question: 'Foucault era:', options: ['Alemão', 'Italiano', 'Francês', 'Inglês'], correct: 2 }
            ]
        }
    },
    {
        id: 30904, unitId: 309, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'Poder e Saber',
        content: {
            title: 'Uma Nova Concepção de Poder',
            text: '**PODER PARA FOUCAULT**\n\nDiferente da visão tradicional (poder como repressão):\n\n**Características:**\n• **Produtivo:** produz realidade, verdade, sujeitos\n• **Relacional:** não é coisa, está em relações\n• **Capilar:** está em toda parte, não só no Estado\n• **Saber-poder:** conhecimento e poder se implicam\n\n**Exemplo:** A psiquiatria não apenas descobre a loucura - define o que é loucura e quem é louco.\n\n"Onde há poder, há resistência."',
            keyPoints: ['Poder produtivo', 'Relacional', 'Capilar', 'Saber-poder'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 30905, unitId: 309, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Foucault',
        content: {
            pairs: [
                { left: 'Saber-poder', right: 'Conhecimento e poder se implicam' },
                { left: 'Disciplina', right: 'Adestramento de corpos' },
                { left: 'Panóptico', right: 'Vigilância constante' },
                { left: 'Biopolítica', right: 'Gestão da vida da população' },
                { left: 'Discurso', right: 'Práticas que produzem verdade' }
            ]
        }
    },
    {
        id: 30906, unitId: 309, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Foucault',
        content: {
            sentences: [
                { text: 'Para Foucault, poder é _____, não apenas repressivo.', answer: 'produtivo', options: ['produtivo', 'negativo', 'inexistente'] },
                { text: 'O _____ é um modelo de vigilância constante.', answer: 'panóptico', options: ['panóptico', 'hospital', 'teatro'] },
                { text: 'Saber e _____ se implicam mutuamente.', answer: 'poder', options: ['economia', 'poder', 'religião'] }
            ]
        }
    },
    {
        id: 30907, unitId: 309, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Foucault',
        content: {
            cards: [
                { front: 'Michel Foucault', back: 'Filósofo francês do poder e do saber (1926-1984)' },
                { front: 'Saber-poder', back: 'Conhecimento e poder estão sempre ligados' },
                { front: 'Disciplina', back: 'Técnicas de adestramento e normalização dos corpos' },
                { front: 'Panóptico', back: 'Modelo de vigilância - ver sem ser visto' },
                { front: 'Biopolítica', back: 'Poder sobre a vida da população' }
            ]
        }
    },
    {
        id: 30908, unitId: 309, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Vigiar e Punir',
        content: {
            title: 'A Sociedade Disciplinar',
            text: 'Em "Vigiar e Punir" (1975), Foucault analisa:\n\n**Transição histórica:**\n• Suplício público → prisão\n• Punir o corpo → disciplinar a alma\n• Espetáculo → vigilância\n\n**O Panóptico:** Prisão circular onde presos podem ser vigiados a qualquer momento. O efeito: internalização da vigilância.\n\n**Tese:** A modernidade criou uma "sociedade disciplinar" - escolas, hospitais, fábricas funcionam como prisões.',
            keyPoints: ['Do suplício à prisão', 'Disciplina', 'Panóptico', 'Vigilância internalizada']
        }
    },
    {
        id: 30909, unitId: 309, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Obras de Foucault',
        content: {
            items: [
                { text: 'História da Loucura (1961)', correctOrder: 1 },
                { text: 'As Palavras e as Coisas (1966)', correctOrder: 2 },
                { text: 'Vigiar e Punir (1975)', correctOrder: 3 },
                { text: 'História da Sexualidade I (1976)', correctOrder: 4 },
                { text: 'História da Sexualidade II-III (1984)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 30910, unitId: 309, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Vigilância Hoje',
        content: {
            prompt: 'Foucault escreveu sobre o panóptico antes da internet e das câmeras em toda parte. Como você vê a vigilância hoje? Redes sociais, câmeras, dados - vivemos em um "panóptico digital"? Você internaliza a vigilância?',
            examples: ['Câmeras', 'Redes sociais', 'Dados pessoais', 'Autocensura'],
            minWords: 70
        }
    },
    {
        id: 30911, unitId: 309, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Disciplina',
        content: {
            questions: [
                { question: 'O panóptico permite:', options: ['Ver sem ser visto', 'Ser visto sem ver', 'Ninguém vê', 'Todos veem tudo'], correct: 0 },
                { question: 'Vigiar e Punir analisa:', options: ['A educação', 'A prisão', 'A economia', 'A religião'], correct: 1 },
                { question: 'A sociedade disciplinar inclui:', options: ['Apenas prisões', 'Escolas, hospitais, fábricas', 'Apenas escolas', 'Nada'], correct: 1 }
            ]
        }
    },
    {
        id: 30912, unitId: 309, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'Biopolítica',
        content: {
            title: 'O Poder sobre a Vida',
            text: 'Na "História da Sexualidade", Foucault desenvolve:\n\n**BIOPOLÍTICA:**\nPoder que administra a vida da população:\n• Natalidade, mortalidade, saúde pública\n• Estatísticas e normas\n• Gestão de populações\n\n**Dois eixos:**\n1. Anatomopolítica: disciplina do corpo individual\n2. Biopolítica: gestão da população\n\n**Exemplo:** Políticas de saúde, campanhas de natalidade, eugenia.\n\nO poder não apenas mata - faz viver de certas formas.',
            keyPoints: ['Poder sobre a vida', 'Gestão da população', 'Anatomopolítica e biopolítica', 'Fazer viver'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 30913, unitId: 309, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Obras e Temas',
        content: {
            pairs: [
                { left: 'História da Loucura', right: 'Como definimos loucura' },
                { left: 'Vigiar e Punir', right: 'Prisão e disciplina' },
                { left: 'História da Sexualidade', right: 'Biopolítica' },
                { left: 'As Palavras e as Coisas', right: 'Epistemes' },
                { left: 'O Nascimento da Clínica', right: 'Medicina e olhar' }
            ]
        }
    },
    {
        id: 30914, unitId: 309, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Michel Foucault',
        content: {
            events: [
                { year: 1926, event: 'Nascimento', description: 'Poitiers, França' },
                { year: 1961, event: 'História da Loucura', description: 'Tese de doutorado' },
                { year: 1975, event: 'Vigiar e Punir', description: 'Sociedade disciplinar' },
                { year: 1976, event: 'Vontade de Saber', description: 'Biopolítica' },
                { year: 1984, event: 'Morte', description: 'Paris, AIDS' }
            ]
        }
    },
    {
        id: 30915, unitId: 309, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Foucault',
        content: {
            questions: [
                { question: 'Para Foucault, poder é:', options: ['Apenas repressivo', 'Também produtivo', 'Inexistente', 'Natural'], correct: 1 },
                { question: 'O panóptico representa:', options: ['Liberdade', 'Vigilância', 'Economia', 'Religião'], correct: 1 },
                { question: 'Biopolítica é poder sobre:', options: ['A economia', 'A vida da população', 'Os militares', 'Os animais'], correct: 1 },
                { question: 'Foucault diz que onde há poder:', options: ['Não há nada', 'Há resistência', 'Há apenas obediência', 'Há economia'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 310 - Síntese Moderna
const BLOCKS_310 = [
    {
        id: 31001, unitId: 310, order: 1, type: 'concept', difficulty: 3, xp: 25,
        title: 'Teoria Social Moderna',
        content: {
            title: 'Conectando as Perspectivas',
            text: 'Nesta seção, estudamos várias perspectivas da teoria social moderna: funcionalismo (Parsons, Merton), interacionismo (Mead, Goffman), fenomenologia (Schutz, Berger), estruturalismo (Lévi-Strauss), e autores como Simmel, Elias, Bourdieu, Giddens e Foucault. Cada um oferece uma lente única para entender a sociedade.',
            keyPoints: ['Múltiplas perspectivas', 'Lentes diferentes', 'Complementaridade', 'Debates internos'],
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400'
        }
    },
    {
        id: 31002, unitId: 310, order: 2, type: 'video', difficulty: 3, xp: 25,
        title: 'Vídeo: Síntese',
        content: {
            title: 'Comparando Teorias',
            description: 'Vídeo comparando as principais teorias sociológicas modernas.',
            videoUrl: 'https://www.youtube.com/watch?v=teorias-sociologicas',
            duration: '18 minutos',
            questions: ['Qual a diferença entre funcionalismo e interacionismo?', 'Como Bourdieu e Giddens diferem?']
        }
    },
    {
        id: 31003, unitId: 310, order: 3, type: 'quiz', difficulty: 3, xp: 30,
        title: 'Quiz: Identificando Teorias',
        content: {
            questions: [
                { question: 'Habitus é conceito de:', options: ['Parsons', 'Bourdieu', 'Foucault', 'Giddens'], correct: 1 },
                { question: 'Sociedade como organismo é ideia do:', options: ['Interacionismo', 'Funcionalismo', 'Marxismo', 'Pós-modernismo'], correct: 1 },
                { question: 'Saber-poder é conceito de:', options: ['Bourdieu', 'Giddens', 'Foucault', 'Mead'], correct: 2 }
            ]
        }
    },
    {
        id: 31004, unitId: 310, order: 4, type: 'reading', difficulty: 3, xp: 20,
        title: 'Macro vs. Micro',
        content: {
            title: 'Níveis de Análise',
            text: '**TEORIAS MACRO (estrutura):**\n• Funcionalismo (Parsons)\n• Estruturalismo (Lévi-Strauss)\n• Marxismo\n\n**TEORIAS MICRO (ação):**\n• Interacionismo (Mead, Goffman)\n• Fenomenologia (Schutz)\n• Etnometodologia (Garfinkel)\n\n**TENTATIVAS DE SÍNTESE:**\n• Bourdieu (habitus + campo)\n• Giddens (estruturação)\n• Elias (figuração)\n\nO debate micro/macro continua central na sociologia.',
            keyPoints: ['Teorias macro: estrutura', 'Teorias micro: ação', 'Tentativas de síntese', 'Debate continua'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 31005, unitId: 310, order: 5, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Teorias e Conceitos',
        content: {
            pairs: [
                { left: 'Funcionalismo', right: 'AGIL, funções' },
                { left: 'Interacionismo', right: 'Self, performance' },
                { left: 'Fenomenologia', right: 'Mundo da vida' },
                { left: 'Bourdieu', right: 'Habitus, campo' },
                { left: 'Foucault', right: 'Saber-poder' }
            ]
        }
    },
    {
        id: 31006, unitId: 310, order: 6, type: 'fill', difficulty: 3, xp: 25,
        title: 'Complete: Síntese',
        content: {
            sentences: [
                { text: 'Teorias _____ focam em estruturas.', answer: 'macro', options: ['macro', 'micro', 'médio'] },
                { text: 'Teorias _____ focam em interações.', answer: 'micro', options: ['macro', 'micro', 'médio'] },
                { text: 'Bourdieu e Giddens tentam _____ macro e micro.', answer: 'sintetizar', options: ['separar', 'sintetizar', 'eliminar'] }
            ]
        }
    },
    {
        id: 31007, unitId: 310, order: 7, type: 'flashcard', difficulty: 3, xp: 20,
        title: 'Flashcards: Revisão',
        content: {
            cards: [
                { front: 'Funcionalismo', back: 'Sociedade como sistema com partes funcionais (Parsons, Merton)' },
                { front: 'Interacionismo', back: 'Foco em interações e construção de significados (Mead, Goffman)' },
                { front: 'Fenomenologia', back: 'Experiência subjetiva e mundo da vida (Schutz, Berger)' },
                { front: 'Estruturalismo', back: 'Estruturas profundas (Lévi-Strauss)' },
                { front: 'Pós-estruturalismo', back: 'Crítica às estruturas fixas (Foucault, Derrida)' }
            ]
        }
    },
    {
        id: 31008, unitId: 310, order: 8, type: 'concept', difficulty: 3, xp: 25,
        title: 'Questões Transversais',
        content: {
            title: 'Temas Comuns',
            text: 'Apesar das diferenças, há questões comuns:\n\n**1. Estrutura vs. Agência**\nO que pesa mais? Condições sociais ou escolhas individuais?\n\n**2. Ordem vs. Conflito**\nA sociedade é integrada ou dividida?\n\n**3. Objetivismo vs. Subjetivismo**\nPrivilegiar fatos externos ou experiências internas?\n\n**4. Modernidade**\nContinuidade ou ruptura? Libertação ou novas opressões?',
            keyPoints: ['Estrutura vs. agência', 'Ordem vs. conflito', 'Objetivo vs. subjetivo', 'Questão da modernidade']
        }
    },
    {
        id: 31009, unitId: 310, order: 9, type: 'order', difficulty: 3, xp: 30,
        title: 'Ordene: Cronologia',
        content: {
            items: [
                { text: 'Mead: Mind, Self, Society (1934)', correctOrder: 1 },
                { text: 'Parsons: O Sistema Social (1951)', correctOrder: 2 },
                { text: 'Goffman: A Representação do Eu (1959)', correctOrder: 3 },
                { text: 'Berger e Luckmann (1966)', correctOrder: 4 },
                { text: 'Bourdieu: A Distinção (1979)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 31010, unitId: 310, order: 10, type: 'reflection', difficulty: 3, xp: 40,
        title: 'Reflexão: Sua Perspectiva',
        content: {
            prompt: 'Após estudar várias teorias, qual perspectiva você acha mais útil para entender a sociedade? Por quê? Você pode combinar elementos de diferentes teorias?',
            examples: ['Funcionalismo para instituições', 'Interacionismo para cotidiano', 'Bourdieu para desigualdade', 'Foucault para poder'],
            minWords: 80
        }
    },
    {
        id: 31011, unitId: 310, order: 11, type: 'quiz', difficulty: 3, xp: 35,
        title: 'Quiz: Aplicando Teorias',
        content: {
            questions: [
                { question: 'Para analisar rituais cotidianos, use:', options: ['Funcionalismo', 'Interacionismo', 'Marxismo', 'Estruturalismo'], correct: 1 },
                { question: 'Para analisar reprodução de desigualdades, use:', options: ['Interacionismo', 'Bourdieu', 'Fenomenologia', 'Funcionalismo'], correct: 1 },
                { question: 'Para analisar poder em instituições, use:', options: ['Funcionalismo', 'Interacionismo', 'Foucault', 'Fenomenologia'], correct: 2 }
            ]
        }
    },
    {
        id: 31012, unitId: 310, order: 12, type: 'reading', difficulty: 3, xp: 20,
        title: 'Legado e Futuro',
        content: {
            title: 'Para Onde Vai a Teoria?',
            text: '**Tendências atuais:**\n\n• **Sociologia digital:** redes, algoritmos, dados\n• **Interseccionalidade:** raça, gênero, classe juntos\n• **Pós-colonialismo:** vozes do Sul Global\n• **Antropoceno:** sociedade e natureza\n\n**Clássicos ainda importam:**\n• Bourdieu para desigualdade\n• Foucault para vigilância digital\n• Giddens para identidade online\n\nA teoria social continua evoluindo.',
            keyPoints: ['Novos temas', 'Clássicos atualizados', 'Sociologia digital', 'Interseccionalidade'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 31013, unitId: 310, order: 13, type: 'match', difficulty: 3, xp: 35,
        title: 'Combine: Autores e Países',
        content: {
            pairs: [
                { left: 'Parsons', right: 'EUA' },
                { left: 'Bourdieu', right: 'França' },
                { left: 'Giddens', right: 'Reino Unido' },
                { left: 'Elias', right: 'Alemanha' },
                { left: 'Goffman', right: 'Canadá/EUA' }
            ]
        }
    },
    {
        id: 31014, unitId: 310, order: 14, type: 'timeline', difficulty: 3, xp: 35,
        title: 'Teoria Social Moderna',
        content: {
            events: [
                { year: 1934, event: 'Mead', description: 'Interacionismo simbólico' },
                { year: 1951, event: 'Parsons', description: 'Funcionalismo estrutural' },
                { year: 1966, event: 'Berger/Luckmann', description: 'Construção social' },
                { year: 1979, event: 'Bourdieu', description: 'A Distinção' },
                { year: 1984, event: 'Giddens', description: 'Estruturação' }
            ]
        }
    },
    {
        id: 31015, unitId: 310, order: 15, type: 'quiz', difficulty: 3, xp: 45,
        title: 'Desafio Final: Teoria Moderna',
        content: {
            questions: [
                { question: 'A oposição macro/micro opõe:', options: ['Economia/política', 'Estrutura/ação', 'Norte/sul', 'Homem/mulher'], correct: 1 },
                { question: 'Bourdieu e Giddens tentam:', options: ['Destruir a sociologia', 'Sintetizar macro e micro', 'Ignorar conflitos', 'Criar nova religião'], correct: 1 },
                { question: 'Foucault analisa:', options: ['Apenas economia', 'Poder e saber', 'Apenas política', 'Apenas religião'], correct: 1 },
                { question: 'Teoria social hoje inclui:', options: ['Apenas clássicos', 'Temas como digital e interseccionalidade', 'Apenas política', 'Nada novo'], correct: 1 }
            ]
        }
    }
];

// Exportar para mesclagem
if (typeof window !== 'undefined') {
    window.SECTION3_BLOCKS = {
        301: BLOCKS_301,
        302: BLOCKS_302,
        303: BLOCKS_303,
        304: BLOCKS_304,
        305: BLOCKS_305,
        306: BLOCKS_306,
        307: BLOCKS_307,
        308: BLOCKS_308,
        309: BLOCKS_309,
        310: BLOCKS_310
    };
}

console.log('✅ Seção 3 de Sociologia COMPLETA carregada!');
console.log('   - Unidades 301-310 com conteúdo completo');
console.log('   - 150 blocos educacionais sobre Teoria Social Moderna');
