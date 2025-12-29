// ==========================================
// SOCIOLOGIA - SEÇÃO 2: OS CLÁSSICOS
// Marx, Durkheim e Weber
// Unidades 201-210 com conteúdo detalhado
// ==========================================

// Blocos para Unidade 201 - Karl Marx - Vida
const BLOCKS_201 = [
    {
        id: 20101, unitId: 201, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'Quem foi Karl Marx?',
        content: {
            title: 'Karl Marx: O Revolucionário da Sociologia',
            text: 'Karl Marx (1818-1883) foi um filósofo, economista e sociólogo alemão. Nascido em Tréveris, na Prússia, Marx é considerado um dos pensadores mais influentes da história. Junto com Friedrich Engels, desenvolveu o materialismo histórico e a crítica ao capitalismo. Suas ideias influenciaram revoluções, partidos políticos e movimentos sociais em todo o mundo.',
            keyPoints: ['Nasceu em 1818 na Alemanha', 'Filósofo, economista e sociólogo', 'Crítico do capitalismo', 'Influenciou revoluções mundiais'],
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg'
        }
    },
    {
        id: 20102, unitId: 201, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: A Vida de Marx',
        content: {
            title: 'Marx: De Estudante a Revolucionário',
            description: 'Documentário sobre a vida de Karl Marx, seus estudos, exílios e a criação de suas teorias.',
            videoUrl: 'https://www.youtube.com/watch?v=fSQgCy_iIcc',
            duration: '15 minutos',
            questions: ['Quais eventos da vida de Marx influenciaram suas ideias?', 'Por que Marx foi exilado de vários países?']
        }
    },
    {
        id: 20103, unitId: 201, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Vida de Marx',
        content: {
            questions: [
                { question: 'Em que país Karl Marx nasceu?', options: ['França', 'Inglaterra', 'Alemanha', 'Rússia'], correct: 2 },
                { question: 'Marx escreveu O Capital vivendo em qual cidade?', options: ['Berlim', 'Paris', 'Londres', 'Moscou'], correct: 2 },
                { question: 'Quem foi o principal colaborador de Marx?', options: ['Weber', 'Durkheim', 'Engels', 'Comte'], correct: 2 }
            ]
        }
    },
    {
        id: 20104, unitId: 201, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Biografia de Marx',
        content: {
            title: 'A Jornada de Karl Marx',
            text: '**Juventude (1818-1843)**\nNasceu em família judaica convertida ao protestantismo. Estudou Direito e Filosofia. Doutorou-se com uma tese sobre filosofia grega.\n\n**Exílios (1843-1849)**\nExpulso da Alemanha por suas ideias radicais. Viveu em Paris e Bruxelas. Conheceu Engels em 1844. Publicou o Manifesto Comunista em 1848.\n\n**Londres (1849-1883)**\nExilado definitivamente em Londres. Passou por extrema pobreza. Escreveu O Capital. Morreu em 1883, deixando obra inacabada.',
            keyPoints: ['Doutorou-se em filosofia', 'Exilado por ideias radicais', 'Manifesto Comunista em 1848', 'O Capital em Londres'],
            timeToRead: '10 minutos'
        }
    },
    {
        id: 20105, unitId: 201, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Eventos da Vida de Marx',
        content: {
            pairs: [
                { left: '1818', right: 'Nascimento em Tréveris' },
                { left: '1844', right: 'Encontro com Engels' },
                { left: '1848', right: 'Publicação do Manifesto Comunista' },
                { left: '1867', right: 'Publicação do Volume I de O Capital' },
                { left: '1883', right: 'Morte em Londres' }
            ]
        }
    },
    {
        id: 20106, unitId: 201, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Marx',
        content: {
            sentences: [
                { text: 'Marx nasceu na _____ em 1818.', answer: 'Alemanha', options: ['Alemanha', 'França', 'Inglaterra'] },
                { text: 'O _____ foi escrito por Marx e Engels em 1848.', answer: 'Manifesto Comunista', options: ['Capital', 'Manifesto Comunista', 'Ideologia Alemã'] },
                { text: 'Marx morreu em _____ em 1883.', answer: 'Londres', options: ['Paris', 'Berlim', 'Londres'] }
            ]
        }
    },
    {
        id: 20107, unitId: 201, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Marx',
        content: {
            cards: [
                { front: 'Friedrich Engels', back: 'Principal colaborador de Marx, co-autor do Manifesto Comunista' },
                { front: 'O Capital', back: 'Principal obra de Marx sobre economia política' },
                { front: 'Manifesto Comunista', back: 'Texto de 1848 que proclama "Proletários de todos os países, uni-vos!"' },
                { front: 'Tréveris', back: 'Cidade alemã onde Marx nasceu' },
                { front: 'Ideologia Alemã', back: 'Obra onde Marx desenvolve o materialismo histórico' }
            ]
        }
    },
    {
        id: 20108, unitId: 201, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'O Contexto de Marx',
        content: {
            title: 'A Europa do Século XIX',
            text: 'Marx viveu em uma época de grandes transformações:\n\n• **Revolução Industrial**: Fábricas, proletariado, condições precárias de trabalho\n• **Revoluções políticas**: 1848 - "Primavera dos Povos" na Europa\n• **Miséria operária**: Jornadas de 16 horas, trabalho infantil, sem direitos\n• **Ascensão do capitalismo**: Burguesia cada vez mais poderosa\n\nMarx testemunhou a exploração dos trabalhadores e buscou explicá-la cientificamente.',
            keyPoints: ['Revolução Industrial em curso', 'Condições precárias de trabalho', 'Revoluções em 1848', 'Ascensão do capitalismo']
        }
    },
    {
        id: 20109, unitId: 201, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: Obras de Marx',
        content: {
            items: [
                { text: 'Manuscritos Econômico-Filosóficos (1844)', correctOrder: 1 },
                { text: 'A Ideologia Alemã (1845-46)', correctOrder: 2 },
                { text: 'Manifesto Comunista (1848)', correctOrder: 3 },
                { text: 'O 18 Brumário de Luís Bonaparte (1852)', correctOrder: 4 },
                { text: 'O Capital - Volume I (1867)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20110, unitId: 201, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Marx Hoje',
        content: {
            prompt: 'Marx morreu há mais de 140 anos, mas suas ideias ainda são discutidas. Por que você acha que Marx continua relevante? Quais de suas críticas ao capitalismo ainda fazem sentido hoje?',
            examples: ['Desigualdade', 'Exploração do trabalho', 'Crises econômicas'],
            minWords: 60
        }
    },
    {
        id: 20111, unitId: 201, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Contexto Histórico',
        content: {
            questions: [
                { question: 'A Revolução Industrial criou qual classe social?', options: ['Nobreza', 'Clero', 'Proletariado', 'Camponeses'], correct: 2 },
                { question: 'O Manifesto Comunista foi publicado no ano de:', options: ['1818', '1848', '1867', '1883'], correct: 1 },
                { question: 'Marx passou a maior parte de sua vida adulta em:', options: ['Alemanha', 'França', 'Inglaterra', 'Rússia'], correct: 2 }
            ]
        }
    },
    {
        id: 20112, unitId: 201, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Marx e Engels',
        content: {
            title: 'Uma Parceria Histórica',
            text: 'Friedrich Engels (1820-1895) foi mais que um colaborador - foi amigo e financiador de Marx.\n\n**Engels:**\n• Filho de industrial têxtil\n• Escreveu "A Situação da Classe Trabalhadora na Inglaterra" (1845)\n• Financiou Marx durante décadas\n• Editou os volumes 2 e 3 de O Capital após a morte de Marx\n\nA amizade durou 40 anos e produziu algumas das obras mais influentes da história.',
            keyPoints: ['Engels financiou Marx', 'Amizade de 40 anos', 'Colaboração intelectual', 'Engels editou O Capital'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 20113, unitId: 201, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Marx e seu Tempo',
        content: {
            pairs: [
                { left: 'Proletariado', right: 'Classe trabalhadora industrial' },
                { left: 'Burguesia', right: 'Donos dos meios de produção' },
                { left: '1848', right: 'Revoluções na Europa' },
                { left: 'Londres', right: 'Cidade do exílio de Marx' }
            ]
        }
    },
    {
        id: 20114, unitId: 201, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Linha do Tempo: Karl Marx',
        content: {
            title: 'A Vida de Marx',
            events: [
                { year: 1818, event: 'Nascimento', description: 'Nasce em Tréveris, Alemanha' },
                { year: 1841, event: 'Doutorado', description: 'Filosofia em Berlim' },
                { year: 1844, event: 'Encontra Engels', description: 'Início da parceria' },
                { year: 1848, event: 'Manifesto Comunista', description: 'Publicação histórica' },
                { year: 1867, event: 'O Capital Vol. I', description: 'Obra-prima publicada' },
                { year: 1883, event: 'Morte', description: 'Morre em Londres' }
            ]
        }
    },
    {
        id: 20115, unitId: 201, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Marx',
        content: {
            questions: [
                { question: 'Marx é considerado um dos fundadores da:', options: ['Psicologia', 'Sociologia crítica', 'Biologia', 'Física'], correct: 1 },
                { question: 'A principal crítica de Marx era ao:', options: ['Feudalismo', 'Capitalismo', 'Socialismo', 'Anarquismo'], correct: 1 },
                { question: 'Engels era:', options: ['Rival de Marx', 'Colaborador e amigo', 'Professor de Marx', 'Inimigo político'], correct: 1 },
                { question: 'Marx foi exilado por:', options: ['Crimes comuns', 'Ideias políticas radicais', 'Dívidas', 'Problemas de saúde'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 202 - Materialismo Histórico
const BLOCKS_202 = [
    {
        id: 20201, unitId: 202, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'O que é Materialismo Histórico?',
        content: {
            title: 'A Base da Teoria de Marx',
            text: 'O materialismo histórico é o método de análise desenvolvido por Marx para entender a sociedade e a história. A ideia central é que a base material da sociedade (economia) determina as outras esferas (política, direito, cultura, religião). Não são as ideias que movem a história, mas as condições materiais de produção.',
            keyPoints: ['Economia é a base da sociedade', 'Condições materiais determinam ideias', 'Método para analisar a história', 'Oposto ao idealismo'],
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400'
        }
    },
    {
        id: 20202, unitId: 202, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: Materialismo Histórico',
        content: {
            title: 'Como Marx Explica a História',
            description: 'Vídeo explicando os conceitos fundamentais do materialismo histórico de forma didática.',
            videoUrl: 'https://www.youtube.com/watch?v=materialismo-historico',
            duration: '12 minutos',
            questions: ['O que significa dizer que a economia é a base?', 'Como as ideias se relacionam com a economia?']
        }
    },
    {
        id: 20203, unitId: 202, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Conceitos Básicos',
        content: {
            questions: [
                { question: 'Para Marx, o que determina as outras esferas da sociedade?', options: ['Religião', 'Política', 'Economia', 'Arte'], correct: 2 },
                { question: 'O materialismo histórico se opõe ao:', options: ['Capitalismo', 'Idealismo', 'Feudalismo', 'Socialismo'], correct: 1 },
                { question: 'A infraestrutura na teoria de Marx é:', options: ['A política', 'A religião', 'A base econômica', 'A cultura'], correct: 2 }
            ]
        }
    },
    {
        id: 20204, unitId: 202, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Infraestrutura e Superestrutura',
        content: {
            title: 'A Metáfora do Edifício',
            text: 'Marx usa a metáfora de um edifício para explicar a sociedade:\n\n**INFRAESTRUTURA (Base)**\n- Forças produtivas: trabalho, tecnologia, matérias-primas\n- Relações de produção: quem possui os meios de produção\n\n**SUPERESTRUTURA (Teto)**\n- Instituições políticas e jurídicas\n- Formas de consciência: religião, filosofia, arte, moral\n\nA infraestrutura (base econômica) condiciona a superestrutura (ideias e instituições).',
            keyPoints: ['Infraestrutura: base econômica', 'Superestrutura: ideias e instituições', 'Base condiciona o topo', 'Metáfora do edifício'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 20205, unitId: 202, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Infraestrutura e Superestrutura',
        content: {
            pairs: [
                { left: 'Infraestrutura', right: 'Base econômica' },
                { left: 'Superestrutura', right: 'Ideias e instituições' },
                { left: 'Forças produtivas', right: 'Trabalho, tecnologia, recursos' },
                { left: 'Relações de produção', right: 'Quem possui os meios de produção' },
                { left: 'Ideologia', right: 'Ideias que justificam a dominação' }
            ]
        }
    },
    {
        id: 20206, unitId: 202, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Materialismo',
        content: {
            sentences: [
                { text: 'A _____ é a base econômica da sociedade.', answer: 'infraestrutura', options: ['infraestrutura', 'superestrutura', 'ideologia'] },
                { text: 'Política, religião e arte fazem parte da _____.', answer: 'superestrutura', options: ['infraestrutura', 'superestrutura', 'economia'] },
                { text: 'Para Marx, a economia _____ as outras esferas.', answer: 'determina', options: ['determina', 'ignora', 'elimina'] }
            ]
        }
    },
    {
        id: 20207, unitId: 202, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Materialismo Histórico',
        content: {
            cards: [
                { front: 'Materialismo Histórico', back: 'Método de Marx que analisa a sociedade a partir de sua base econômica' },
                { front: 'Infraestrutura', back: 'Base econômica: forças produtivas + relações de produção' },
                { front: 'Superestrutura', back: 'Instituições políticas, jurídicas e formas de consciência' },
                { front: 'Forças Produtivas', back: 'Trabalho humano, tecnologia e recursos naturais' },
                { front: 'Relações de Produção', back: 'Relações entre pessoas no processo produtivo (propriedade)' }
            ]
        }
    },
    {
        id: 20208, unitId: 202, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'Modos de Produção',
        content: {
            title: 'Como a História se Move',
            text: 'Marx identifica diferentes modos de produção ao longo da história:\n\n• **Comunismo primitivo**: Sem propriedade privada\n• **Escravismo**: Escravos são propriedade\n• **Feudalismo**: Servos presos à terra\n• **Capitalismo**: Trabalhadores vendem força de trabalho\n• **Socialismo/Comunismo**: Propriedade coletiva (futuro)\n\nA passagem de um modo para outro ocorre por contradições internas e luta de classes.',
            keyPoints: ['Diferentes modos na história', 'Cada modo tem suas classes', 'Contradições geram mudança', 'Capitalismo não é eterno']
        }
    },
    {
        id: 20209, unitId: 202, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: Modos de Produção',
        content: {
            items: [
                { text: 'Comunismo primitivo', correctOrder: 1 },
                { text: 'Escravismo (Antiguidade)', correctOrder: 2 },
                { text: 'Feudalismo (Idade Média)', correctOrder: 3 },
                { text: 'Capitalismo (Modernidade)', correctOrder: 4 },
                { text: 'Socialismo/Comunismo (Futuro)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20210, unitId: 202, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Economia e Ideias',
        content: {
            prompt: 'Marx diz que "não é a consciência que determina a vida, mas a vida que determina a consciência". O que você acha? Suas ideias e valores são influenciados pela sua condição econômica?',
            examples: ['Ideias sobre meritocracia', 'Valores sobre trabalho', 'Visão de mundo e classe social'],
            minWords: 60
        }
    },
    {
        id: 20211, unitId: 202, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Modos de Produção',
        content: {
            questions: [
                { question: 'No feudalismo, a classe explorada era:', options: ['Escravos', 'Servos', 'Proletários', 'Burgueses'], correct: 1 },
                { question: 'No capitalismo, trabalhadores vendem:', options: ['Sua alma', 'Seus bens', 'Sua força de trabalho', 'Suas terras'], correct: 2 },
                { question: 'A passagem entre modos de produção ocorre por:', options: ['Acordo pacífico', 'Contradições e luta', 'Decisão dos reis', 'Vontade divina'], correct: 1 }
            ]
        }
    },
    {
        id: 20212, unitId: 202, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Ideologia',
        content: {
            title: 'As Ideias Dominantes',
            text: 'Para Marx, "as ideias dominantes de uma época são as ideias da classe dominante".\n\nA **ideologia** são as ideias que:\n• Justificam a ordem existente\n• Apresentam interesses de uma classe como interesse de todos\n• Naturalizam o que é histórico ("sempre foi assim")\n• Ocultam a exploração\n\n**Exemplo:** A ideia de que "quem trabalha duro enriquece" pode ocultar as barreiras estruturais à mobilidade social.',
            keyPoints: ['Ideias dominantes = classe dominante', 'Ideologia justifica a ordem', 'Naturaliza o que é histórico', 'Oculta exploração'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 20213, unitId: 202, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Conceitos',
        content: {
            pairs: [
                { left: 'Escravismo', right: 'Senhores e escravos' },
                { left: 'Feudalismo', right: 'Senhores feudais e servos' },
                { left: 'Capitalismo', right: 'Burguesia e proletariado' },
                { left: 'Ideologia', right: 'Ideias que justificam dominação' }
            ]
        }
    },
    {
        id: 20214, unitId: 202, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Evolução dos Modos de Produção',
        content: {
            events: [
                { year: -10000, event: 'Comunismo primitivo', description: 'Caçadores-coletores sem propriedade' },
                { year: -3000, event: 'Escravismo', description: 'Civilizações antigas' },
                { year: 500, event: 'Feudalismo', description: 'Europa medieval' },
                { year: 1500, event: 'Transição', description: 'Surgimento do capitalismo' },
                { year: 1800, event: 'Capitalismo industrial', description: 'Revolução Industrial' }
            ]
        }
    },
    {
        id: 20215, unitId: 202, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Materialismo Histórico',
        content: {
            questions: [
                { question: 'O materialismo histórico analisa a sociedade a partir de:', options: ['Ideias', 'Religião', 'Base econômica', 'Geografia'], correct: 2 },
                { question: 'A infraestrutura na teoria de Marx é:', options: ['O governo', 'A religião', 'A base econômica', 'A cultura'], correct: 2 },
                { question: 'Ideologia para Marx são ideias que:', options: ['Libertam', 'Justificam a dominação', 'São neutras', 'Vêm de Deus'], correct: 1 },
                { question: 'A história se move por:', options: ['Vontade dos reis', 'Contradições e luta de classes', 'Acaso', 'Progresso linear'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 203 - Luta de Classes
const BLOCKS_203 = [
    {
        id: 20301, unitId: 203, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'A História como Luta',
        content: {
            title: 'Luta de Classes: O Motor da História',
            text: '"A história de todas as sociedades até hoje é a história da luta de classes." Esta é a famosa abertura do Manifesto Comunista. Para Marx, em toda sociedade dividida em classes, há um conflito fundamental entre os que exploram e os que são explorados. Esta luta é o motor que move a história.',
            keyPoints: ['Conflito entre classes é central', 'Exploradores vs. explorados', 'Motor da transformação histórica', 'Presente em toda sociedade de classes'],
            image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=400'
        }
    },
    {
        id: 20302, unitId: 203, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: Luta de Classes',
        content: {
            title: 'Burguesia e Proletariado',
            description: 'Vídeo explicando o conceito de luta de classes no capitalismo.',
            videoUrl: 'https://www.youtube.com/watch?v=luta-de-classes',
            duration: '14 minutos',
            questions: ['O que define uma classe social para Marx?', 'Por que há conflito entre as classes?']
        }
    },
    {
        id: 20303, unitId: 203, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Classes no Capitalismo',
        content: {
            questions: [
                { question: 'As duas classes fundamentais do capitalismo são:', options: ['Ricos e pobres', 'Burguesia e proletariado', 'Nobres e plebeus', 'Patrões e gerentes'], correct: 1 },
                { question: 'A burguesia é definida por:', options: ['Ser rica', 'Possuir os meios de produção', 'Ter diploma', 'Morar na cidade'], correct: 1 },
                { question: 'O proletariado vende:', options: ['Produtos', 'Sua força de trabalho', 'Suas terras', 'Sua alma'], correct: 1 }
            ]
        }
    },
    {
        id: 20304, unitId: 203, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Burguesia e Proletariado',
        content: {
            title: 'As Duas Classes do Capitalismo',
            text: '**BURGUESIA**\n• Possui os meios de produção (fábricas, terras, capital)\n• Compra força de trabalho\n• Apropria-se da mais-valia\n• Interesse: manter o capitalismo\n\n**PROLETARIADO**\n• Não possui meios de produção\n• Vende sua força de trabalho\n• É explorado (produz mais do que recebe)\n• Interesse: superar o capitalismo\n\nO conflito entre essas classes é estrutural - não depende de indivíduos bons ou maus.',
            keyPoints: ['Burguesia: donos dos meios', 'Proletariado: vende trabalho', 'Conflito estrutural', 'Interesses opostos'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 20305, unitId: 203, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Características das Classes',
        content: {
            pairs: [
                { left: 'Burguesia', right: 'Possui os meios de produção' },
                { left: 'Proletariado', right: 'Vende força de trabalho' },
                { left: 'Mais-valia', right: 'Trabalho não pago apropriado' },
                { left: 'Classe em si', right: 'Existe objetivamente' },
                { left: 'Classe para si', right: 'Consciente de seus interesses' }
            ]
        }
    },
    {
        id: 20306, unitId: 203, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Classes',
        content: {
            sentences: [
                { text: 'A _____ é a classe que possui os meios de produção.', answer: 'burguesia', options: ['burguesia', 'nobreza', 'igreja'] },
                { text: 'O _____ vende sua força de trabalho para sobreviver.', answer: 'proletariado', options: ['proletariado', 'camponês', 'artesão'] },
                { text: 'A _____ é o trabalho não pago apropriado pelo capitalista.', answer: 'mais-valia', options: ['mais-valia', 'salário', 'lucro'] }
            ]
        }
    },
    {
        id: 20307, unitId: 203, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Luta de Classes',
        content: {
            cards: [
                { front: 'Burguesia', back: 'Classe que possui os meios de produção no capitalismo' },
                { front: 'Proletariado', back: 'Classe que vende sua força de trabalho' },
                { front: 'Mais-valia', back: 'Diferença entre o valor produzido e o salário pago' },
                { front: 'Consciência de classe', back: 'Reconhecimento dos interesses comuns de uma classe' },
                { front: 'Luta de classes', back: 'Conflito entre exploradores e explorados' }
            ]
        }
    },
    {
        id: 20308, unitId: 203, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'A Mais-Valia',
        content: {
            title: 'Como o Capitalista Enriquece',
            text: 'A mais-valia é o conceito central de O Capital. É a fonte do lucro capitalista.\n\n**Como funciona:**\n1. Trabalhador trabalha 8 horas\n2. Em 4 horas, produz valor equivalente ao seu salário\n3. As outras 4 horas são trabalho não pago\n4. Este trabalho não pago é a mais-valia\n5. O capitalista se apropria dela\n\n**Exemplo:** Se você produz R$ 200/dia e ganha R$ 100, a mais-valia é R$ 100.',
            keyPoints: ['Fonte do lucro', 'Trabalho não pago', 'Apropriado pelo capitalista', 'Base da exploração']
        }
    },
    {
        id: 20309, unitId: 203, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: Processo de Exploração',
        content: {
            items: [
                { text: 'Trabalhador vende força de trabalho', correctOrder: 1 },
                { text: 'Capitalista paga um salário', correctOrder: 2 },
                { text: 'Trabalhador produz mercadorias', correctOrder: 3 },
                { text: 'Valor produzido é maior que salário', correctOrder: 4 },
                { text: 'Capitalista apropria a diferença (mais-valia)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20310, unitId: 203, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Exploração Hoje',
        content: {
            prompt: 'Marx escreveu sobre fábricas do século XIX. A exploração do trabalho ainda existe hoje? Pense em trabalho precarizado, uberização, salários baixos. Como a mais-valia se manifesta no mundo atual?',
            examples: ['Trabalho por aplicativo', 'Terceirização', 'Trabalho informal'],
            minWords: 70
        }
    },
    {
        id: 20311, unitId: 203, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Mais-Valia',
        content: {
            questions: [
                { question: 'A mais-valia é:', options: ['O salário do trabalhador', 'O trabalho não pago', 'O preço do produto', 'O imposto'], correct: 1 },
                { question: 'A exploração no capitalismo ocorre porque:', options: ['Capitalistas são maus', 'Trabalhadores produzem mais do que recebem', 'Governo cobra impostos', 'Produtos são caros'], correct: 1 },
                { question: 'Para Marx, o lucro vem de:', options: ['Ideias criativas', 'Apropriação da mais-valia', 'Sorte', 'Trabalho do capitalista'], correct: 1 }
            ]
        }
    },
    {
        id: 20312, unitId: 203, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Consciência de Classe',
        content: {
            title: 'De Classe em Si para Classe para Si',
            text: 'Marx distingue dois momentos da classe:\n\n**Classe em si:**\n• Existe objetivamente pela posição na produção\n• Trabalhadores são uma classe mesmo sem saber\n• Compartilham condições semelhantes\n\n**Classe para si:**\n• Consciência dos interesses comuns\n• Organização política\n• Ação coletiva\n\nA passagem de "em si" para "para si" é fundamental para a transformação social. Sem consciência, não há ação política efetiva.',
            keyPoints: ['Classe em si: posição objetiva', 'Classe para si: consciência', 'Organização é fundamental', 'Consciência permite ação'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 20313, unitId: 203, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Conceitos',
        content: {
            pairs: [
                { left: 'Classe em si', right: 'Existência objetiva' },
                { left: 'Classe para si', right: 'Consciência dos interesses' },
                { left: 'Alienação', right: 'Perda de conexão com o produto' },
                { left: 'Revolução', right: 'Transformação radical' }
            ]
        }
    },
    {
        id: 20314, unitId: 203, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Lutas Históricas',
        content: {
            events: [
                { year: 1789, event: 'Revolução Francesa', description: 'Burguesia derruba feudalismo' },
                { year: 1848, event: 'Revoluções operárias', description: 'Proletariado entra em cena' },
                { year: 1871, event: 'Comuna de Paris', description: 'Primeira experiência operária' },
                { year: 1917, event: 'Revolução Russa', description: 'Socialismo no poder' }
            ]
        }
    },
    {
        id: 20315, unitId: 203, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Luta de Classes',
        content: {
            questions: [
                { question: '"A história é a história da luta de classes" significa:', options: ['Que sempre houve guerras', 'Que o conflito entre classes move a história', 'Que ricos sempre vencem', 'Que não há solução'], correct: 1 },
                { question: 'A mais-valia é apropriada pelo:', options: ['Estado', 'Trabalhador', 'Capitalista', 'Consumidor'], correct: 2 },
                { question: 'Consciência de classe é:', options: ['Saber que é pobre', 'Reconhecer interesses comuns da classe', 'Invejar os ricos', 'Aceitar a exploração'], correct: 1 },
                { question: 'Para Marx, a exploração no capitalismo é:', options: ['Exceção', 'Estrutural', 'Inevitável eternamente', 'Justa'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 204 - Émile Durkheim - Vida
const BLOCKS_204 = [
    {
        id: 20401, unitId: 204, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'Quem foi Émile Durkheim?',
        content: {
            title: 'Durkheim: O Fundador Científico',
            text: 'Émile Durkheim (1858-1917) foi um sociólogo francês que estabeleceu a sociologia como disciplina acadêmica. Nascido em Épinal, em uma família judaica, Durkheim foi o primeiro professor de sociologia em uma universidade francesa. Sua grande contribuição foi definir o objeto e o método da sociologia de forma rigorosa.',
            keyPoints: ['Nasceu na França em 1858', 'Primeiro professor de sociologia', 'Definiu objeto e método', 'Fundador científico da disciplina'],
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Emile_Durkheim.jpg'
        }
    },
    {
        id: 20402, unitId: 204, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: A Vida de Durkheim',
        content: {
            title: 'Durkheim e a Ciência da Sociedade',
            description: 'Documentário sobre a vida e obra de Émile Durkheim.',
            videoUrl: 'https://www.youtube.com/watch?v=durkheim-vida',
            duration: '12 minutos',
            questions: ['Por que Durkheim queria fazer da sociologia uma ciência?', 'Qual era o contexto histórico de Durkheim?']
        }
    },
    {
        id: 20403, unitId: 204, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Vida de Durkheim',
        content: {
            questions: [
                { question: 'Em que país Durkheim nasceu?', options: ['Alemanha', 'Inglaterra', 'França', 'Itália'], correct: 2 },
                { question: 'Durkheim é conhecido por ter fundado:', options: ['O marxismo', 'A sociologia como ciência acadêmica', 'A psicologia', 'A economia'], correct: 1 },
                { question: 'Qual universidade Durkheim ajudou a fundar o departamento de sociologia?', options: ['Oxford', 'Sorbonne', 'Harvard', 'Berlim'], correct: 1 }
            ]
        }
    },
    {
        id: 20404, unitId: 204, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Biografia de Durkheim',
        content: {
            title: 'A Jornada de Durkheim',
            text: '**Juventude (1858-1882)**\nNasceu em família judaica de rabinos. Estudou na École Normale Supérieure. Formou-se em filosofia.\n\n**Carreira (1882-1917)**\n• 1887: Primeiro curso de "ciência social" em Bordeaux\n• 1893: Publica "A Divisão do Trabalho Social"\n• 1895: "As Regras do Método Sociológico"\n• 1897: "O Suicídio" - obra-prima metodológica\n• 1912: "As Formas Elementares da Vida Religiosa"\n\nDurkheim sofreu com a morte do filho na Primeira Guerra e morreu em 1917.',
            keyPoints: ['Formação filosófica', 'Primeiro curso de sociologia', 'Quatro obras fundamentais', 'Morreu em 1917'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 20405, unitId: 204, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Obras de Durkheim',
        content: {
            pairs: [
                { left: '1893', right: 'A Divisão do Trabalho Social' },
                { left: '1895', right: 'As Regras do Método Sociológico' },
                { left: '1897', right: 'O Suicídio' },
                { left: '1912', right: 'As Formas Elementares da Vida Religiosa' },
                { left: 'Fato social', right: 'Conceito central de Durkheim' }
            ]
        }
    },
    {
        id: 20406, unitId: 204, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Durkheim',
        content: {
            sentences: [
                { text: 'Durkheim nasceu na _____ em 1858.', answer: 'França', options: ['França', 'Alemanha', 'Inglaterra'] },
                { text: 'Durkheim definiu o _____ como objeto da sociologia.', answer: 'fato social', options: ['fato social', 'indivíduo', 'economia'] },
                { text: '"O Suicídio" é uma obra de _____.', answer: 'Durkheim', options: ['Marx', 'Weber', 'Durkheim'] }
            ]
        }
    },
    {
        id: 20407, unitId: 204, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Durkheim',
        content: {
            cards: [
                { front: 'Émile Durkheim', back: 'Sociólogo francês (1858-1917), fundador científico da sociologia' },
                { front: 'Fato Social', back: 'Maneiras de agir, pensar e sentir exteriores ao indivíduo' },
                { front: 'O Suicídio', back: 'Estudo que mostrou que até o suicídio tem causas sociais' },
                { front: 'Solidariedade', back: 'Conceito central para entender a coesão social' },
                { front: 'Anomia', back: 'Falta de normas, desregulação social' }
            ]
        }
    },
    {
        id: 20408, unitId: 204, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'O Projeto de Durkheim',
        content: {
            title: 'Sociologia como Ciência',
            text: 'Durkheim queria fazer da sociologia uma ciência rigorosa, com:\n\n• **Objeto próprio**: Os fatos sociais\n• **Método próprio**: Tratar fatos sociais como "coisas"\n• **Independência**: Sociologia não é filosofia nem psicologia\n• **Utilidade**: Conhecer a sociedade para reformá-la\n\nDiferente de Marx (crítico do capitalismo), Durkheim queria entender e reformar a sociedade de dentro.',
            keyPoints: ['Objeto: fatos sociais', 'Método científico', 'Independência disciplinar', 'Reformista, não revolucionário']
        }
    },
    {
        id: 20409, unitId: 204, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: Obras de Durkheim',
        content: {
            items: [
                { text: 'A Divisão do Trabalho Social (1893)', correctOrder: 1 },
                { text: 'As Regras do Método Sociológico (1895)', correctOrder: 2 },
                { text: 'O Suicídio (1897)', correctOrder: 3 },
                { text: 'A Educação Moral (1902)', correctOrder: 4 },
                { text: 'As Formas Elementares da Vida Religiosa (1912)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20410, unitId: 204, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Sociedade e Indivíduo',
        content: {
            prompt: 'Durkheim dizia que "quando cumpro meu dever de irmão, esposo ou cidadão, realizo deveres que são definidos fora de mim e de meus atos". Você concorda que seguimos normas que não criamos? Consegue dar exemplos?',
            examples: ['Normas de educação', 'Leis', 'Costumes', 'Expectativas sociais'],
            minWords: 60
        }
    },
    {
        id: 20411, unitId: 204, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Contexto de Durkheim',
        content: {
            questions: [
                { question: 'Durkheim viveu durante:', options: ['Revolução Francesa', 'Terceira República francesa', 'Revolução Industrial inglesa', 'Primeira Guerra apenas'], correct: 1 },
                { question: 'Durkheim era politicamente:', options: ['Revolucionário marxista', 'Anarquista', 'Republicano reformista', 'Monarquista'], correct: 2 },
                { question: 'A preocupação central de Durkheim era:', options: ['A revolução', 'A coesão social', 'A economia', 'A religião apenas'], correct: 1 }
            ]
        }
    },
    {
        id: 20412, unitId: 204, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Durkheim vs. Marx',
        content: {
            title: 'Duas Visões da Sociedade',
            text: '**Marx:**\n• Sociedade dividida em classes em conflito\n• Capitalismo é exploração\n• Solução: revolução proletária\n• Transformação radical\n\n**Durkheim:**\n• Sociedade como organismo integrado\n• Divisão do trabalho gera solidariedade\n• Problemas são "patologias" a corrigir\n• Reforma gradual\n\nEmbora contemporâneos, tinham visões muito diferentes sobre sociedade e mudança.',
            keyPoints: ['Marx: conflito e revolução', 'Durkheim: integração e reforma', 'Diferentes diagnósticos', 'Diferentes soluções'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 20413, unitId: 204, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Marx vs. Durkheim',
        content: {
            pairs: [
                { left: 'Marx', right: 'Luta de classes' },
                { left: 'Durkheim', right: 'Solidariedade social' },
                { left: 'Marx', right: 'Revolução' },
                { left: 'Durkheim', right: 'Reforma' }
            ]
        }
    },
    {
        id: 20414, unitId: 204, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Linha do Tempo: Durkheim',
        content: {
            events: [
                { year: 1858, event: 'Nascimento', description: 'Nasce em Épinal, França' },
                { year: 1887, event: 'Primeiro curso', description: 'Ciência social em Bordeaux' },
                { year: 1895, event: 'Regras do Método', description: 'Define a sociologia' },
                { year: 1897, event: 'O Suicídio', description: 'Obra-prima metodológica' },
                { year: 1917, event: 'Morte', description: 'Morre em Paris' }
            ]
        }
    },
    {
        id: 20415, unitId: 204, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Durkheim',
        content: {
            questions: [
                { question: 'Durkheim definiu como objeto da sociologia:', options: ['O indivíduo', 'A economia', 'O fato social', 'A história'], correct: 2 },
                { question: 'Durkheim via a sociedade como:', options: ['Campo de batalha', 'Organismo integrado', 'Caos', 'Ilusão'], correct: 1 },
                { question: 'Diferente de Marx, Durkheim era:', options: ['Revolucionário', 'Reformista', 'Anarquista', 'Passivo'], correct: 1 },
                { question: '"O Suicídio" mostrou que até o suicídio:', options: ['É apenas individual', 'Tem causas sociais', 'Não pode ser estudado', 'É raro'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 205 - Fato Social
const BLOCKS_205 = [
    {
        id: 20501, unitId: 205, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'O que é Fato Social?',
        content: {
            title: 'O Objeto da Sociologia',
            text: 'O fato social é o conceito central de Durkheim. São "maneiras de agir, pensar e sentir exteriores ao indivíduo, dotadas de um poder coercitivo". Exemplos: língua, leis, costumes, moral, religião. Mesmo que você não queira, é obrigado a falar a língua do país, seguir leis, respeitar costumes. Isso é coerção social.',
            keyPoints: ['Exterior ao indivíduo', 'Exerce coerção', 'É geral na sociedade', 'Independe da vontade individual'],
            image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400'
        }
    },
    {
        id: 20502, unitId: 205, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: Fato Social',
        content: {
            title: 'O que são Fatos Sociais?',
            description: 'Vídeo explicando o conceito de fato social com exemplos do cotidiano.',
            videoUrl: 'https://www.youtube.com/watch?v=fato-social',
            duration: '10 minutos',
            questions: ['Por que a língua é um fato social?', 'O que significa coerção social?']
        }
    },
    {
        id: 20503, unitId: 205, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Características',
        content: {
            questions: [
                { question: 'O fato social é exterior porque:', options: ['Existe fora do indivíduo', 'É estrangeiro', 'Está na natureza', 'É invisível'], correct: 0 },
                { question: 'Coerção social significa que o fato social:', options: ['É proibido', 'Exerce pressão sobre o indivíduo', 'É violento', 'É opcional'], correct: 1 },
                { question: 'Um exemplo de fato social é:', options: ['Sonhar', 'Digerir', 'A língua', 'Respirar'], correct: 2 }
            ]
        }
    },
    {
        id: 20504, unitId: 205, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Características do Fato Social',
        content: {
            title: 'Os Três Critérios de Durkheim',
            text: 'Durkheim estabeleceu três características para identificar um fato social:\n\n**1. EXTERIORIDADE**\nO fato social existe fora e antes do indivíduo. A língua portuguesa existia antes de você nascer.\n\n**2. COERCITIVIDADE**\nO fato social exerce pressão. Se você não seguir as normas, sofre sanções (punição, exclusão, vergonha).\n\n**3. GENERALIDADE**\nO fato social é comum a um grupo. Não é individual, mas coletivo.\n\n"Tratar os fatos sociais como coisas" significa estudá-los objetivamente, como o cientista estuda a natureza.',
            keyPoints: ['Exterioridade: existe fora do indivíduo', 'Coercitividade: exerce pressão', 'Generalidade: comum ao grupo', 'Estudar como coisas'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 20505, unitId: 205, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Características',
        content: {
            pairs: [
                { left: 'Exterioridade', right: 'Existe fora do indivíduo' },
                { left: 'Coercitividade', right: 'Exerce pressão e sanções' },
                { left: 'Generalidade', right: 'Comum a todo o grupo' },
                { left: 'Língua', right: 'Exemplo de fato social' },
                { left: 'Respirar', right: 'NÃO é fato social' }
            ]
        }
    },
    {
        id: 20506, unitId: 205, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Fato Social',
        content: {
            sentences: [
                { text: 'O fato social é _____ ao indivíduo.', answer: 'exterior', options: ['exterior', 'interior', 'igual'] },
                { text: 'Se você não seguir as normas, sofre _____.', answer: 'sanções', options: ['sanções', 'prêmios', 'nada'] },
                { text: 'Fatos sociais devem ser tratados como _____.', answer: 'coisas', options: ['coisas', 'ideias', 'sentimentos'] }
            ]
        }
    },
    {
        id: 20507, unitId: 205, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Fato Social',
        content: {
            cards: [
                { front: 'Fato Social', back: 'Maneiras de agir, pensar e sentir exteriores ao indivíduo e coercitivas' },
                { front: 'Exterioridade', back: 'O fato social existe fora e antes do indivíduo' },
                { front: 'Coercitividade', back: 'O fato social exerce pressão sobre o indivíduo' },
                { front: 'Generalidade', back: 'O fato social é comum a todo o grupo' },
                { front: 'Sanção', back: 'Punição por não seguir as normas sociais' }
            ]
        }
    },
    {
        id: 20508, unitId: 205, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'Exemplos de Fatos Sociais',
        content: {
            title: 'Fatos Sociais no Cotidiano',
            text: '**São fatos sociais:**\n• Língua - você não escolheu, foi socializado nela\n• Leis - são impostas pelo Estado\n• Moral - o que é "certo" e "errado" na sua cultura\n• Costumes - formas de se vestir, cumprimentar\n• Religião - crenças compartilhadas\n• Profissões - papéis sociais definidos\n\n**NÃO são fatos sociais:**\n• Sonhos individuais\n• Processos biológicos\n• Pensamentos puramente pessoais',
            keyPoints: ['Língua, leis, moral são fatos sociais', 'Biologia não é fato social', 'Fatos sociais são coletivos', 'Moldam o indivíduo']
        }
    },
    {
        id: 20509, unitId: 205, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Classifique: Fato Social ou Não?',
        content: {
            instructions: 'Ordene os itens do mais claramente fato social para o menos.',
            items: [
                { text: 'Lei contra homicídio', correctOrder: 1 },
                { text: 'Língua portuguesa', correctOrder: 2 },
                { text: 'Costume de dar aperto de mão', correctOrder: 3 },
                { text: 'Preferência musical pessoal', correctOrder: 4 },
                { text: 'Respirar', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20510, unitId: 205, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Coerção Invisível',
        content: {
            prompt: 'Durkheim diz que sentimos a coerção social quando tentamos resistir a ela. Você já sentiu pressão social para agir de determinada forma? Como isso se manifestou?',
            examples: ['Pressão para casar', 'Expectativas de carreira', 'Normas de gênero', 'Pressão por consumo'],
            minWords: 60
        }
    },
    {
        id: 20511, unitId: 205, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Aplicando o Conceito',
        content: {
            questions: [
                { question: 'A moda é um fato social porque:', options: ['É bonita', 'Exerce pressão sobre como nos vestimos', 'É cara', 'Muda todo ano'], correct: 1 },
                { question: 'Sentimos a coerção social quando:', options: ['Concordamos', 'Tentamos resistir', 'Dormimos', 'Comemos'], correct: 1 },
                { question: 'Leis são fatos sociais porque:', options: ['São escritas', 'São exteriores e coercitivas', 'São antigas', 'São complicadas'], correct: 1 }
            ]
        }
    },
    {
        id: 20512, unitId: 205, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Regras do Método',
        content: {
            title: 'Como Estudar Fatos Sociais',
            text: 'Em "As Regras do Método Sociológico" (1895), Durkheim estabelece:\n\n**Regra 1:** Tratar fatos sociais como coisas\n• Afastar preconceitos\n• Observar de fora\n\n**Regra 2:** Definir o fenômeno\n• Delimitar claramente o objeto\n\n**Regra 3:** Explicar um fato social por outro fato social\n• Causas sociais para fenômenos sociais\n\n**Regra 4:** Distinguir normal e patológico\n• O crime é "normal" (existe em toda sociedade)\n• Excesso de crime é "patológico"',
            keyPoints: ['Tratar como coisas', 'Afastar preconceitos', 'Explicar pelo social', 'Normal vs. patológico'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 20513, unitId: 205, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Método',
        content: {
            pairs: [
                { left: 'Tratar como coisas', right: 'Estudar objetivamente' },
                { left: 'Afastar preconceitos', right: 'Não julgar antes de estudar' },
                { left: 'Explicar pelo social', right: 'Causas sociais para fenômenos sociais' },
                { left: 'Crime normal', right: 'Existe em toda sociedade' }
            ]
        }
    },
    {
        id: 20514, unitId: 205, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Desenvolvimento do Conceito',
        content: {
            events: [
                { year: 1893, event: 'Divisão do Trabalho', description: 'Primeira formulação' },
                { year: 1895, event: 'Regras do Método', description: 'Definição sistemática' },
                { year: 1897, event: 'O Suicídio', description: 'Aplicação exemplar' },
                { year: 1912, event: 'Formas Elementares', description: 'Religião como fato social' }
            ]
        }
    },
    {
        id: 20515, unitId: 205, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Fato Social',
        content: {
            questions: [
                { question: 'As três características do fato social são:', options: ['Bonito, útil, antigo', 'Exterior, coercitivo, geral', 'Individual, livre, raro', 'Natural, biológico, químico'], correct: 1 },
                { question: '"Tratar fatos sociais como coisas" significa:', options: ['Ignorá-los', 'Estudá-los objetivamente', 'Destruí-los', 'Comprá-los'], correct: 1 },
                { question: 'A língua é um fato social porque:', options: ['É bonita', 'É exterior, coercitiva e geral', 'Foi inventada', 'É escrita'], correct: 1 },
                { question: 'Para Durkheim, o crime é:', options: ['Sempre patológico', 'Normal em certa medida', 'Inexistente', 'Apenas individual'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 206 - Solidariedade Social
const BLOCKS_206 = [
    {
        id: 20601, unitId: 206, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'O que é Solidariedade?',
        content: {
            title: 'O Vínculo que Une a Sociedade',
            text: 'Para Durkheim, solidariedade é o que mantém a sociedade unida. É o conjunto de laços que ligam os indivíduos uns aos outros e à coletividade. Sem solidariedade, a sociedade se desintegraria. Durkheim identificou dois tipos de solidariedade: mecânica (sociedades tradicionais) e orgânica (sociedades modernas).',
            keyPoints: ['Solidariedade = coesão social', 'Liga indivíduos à sociedade', 'Dois tipos principais', 'Base da vida coletiva'],
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400'
        }
    },
    {
        id: 20602, unitId: 206, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: Solidariedade',
        content: {
            title: 'Mecânica e Orgânica',
            description: 'Vídeo explicando os dois tipos de solidariedade em Durkheim.',
            videoUrl: 'https://www.youtube.com/watch?v=solidariedade-durkheim',
            duration: '12 minutos',
            questions: ['Qual a diferença entre solidariedade mecânica e orgânica?', 'Por que sociedades modernas têm solidariedade orgânica?']
        }
    },
    {
        id: 20603, unitId: 206, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Tipos de Solidariedade',
        content: {
            questions: [
                { question: 'Solidariedade mecânica é típica de:', options: ['Grandes cidades', 'Sociedades tradicionais', 'Fábricas', 'Internet'], correct: 1 },
                { question: 'Solidariedade orgânica baseia-se em:', options: ['Semelhança', 'Diferença e interdependência', 'Religião comum', 'Medo'], correct: 1 },
                { question: 'Numa tribo, a solidariedade tende a ser:', options: ['Orgânica', 'Mecânica', 'Inexistente', 'Contratual'], correct: 1 }
            ]
        }
    },
    {
        id: 20604, unitId: 206, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Solidariedade Mecânica',
        content: {
            title: 'A União pela Semelhança',
            text: '**SOLIDARIEDADE MECÂNICA**\nCaracterística de sociedades tradicionais, tribais, pré-modernas.\n\n**Base:** Semelhança entre os indivíduos\n• Todos fazem atividades similares\n• Compartilham as mesmas crenças\n• Consciência coletiva forte\n• Pouca individualidade\n\n**Características:**\n• Religião única e obrigatória\n• Direito penal dominante (punição)\n• Desvio = crime contra todos\n• O indivíduo é absorvido pelo grupo\n\n**Exemplo:** Tribos indígenas, comunidades rurais tradicionais.',
            keyPoints: ['Base: semelhança', 'Consciência coletiva forte', 'Direito penal dominante', 'Pouca individualidade'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 20605, unitId: 206, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Solidariedade Mecânica',
        content: {
            pairs: [
                { left: 'Solidariedade Mecânica', right: 'Semelhança entre membros' },
                { left: 'Consciência coletiva forte', right: 'Crenças compartilhadas dominam' },
                { left: 'Direito penal', right: 'Punição severa por desvio' },
                { left: 'Sociedades tradicionais', right: 'Tribos, aldeias' },
                { left: 'Pouca individualidade', right: 'Grupo absorve o indivíduo' }
            ]
        }
    },
    {
        id: 20606, unitId: 206, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Solidariedade',
        content: {
            sentences: [
                { text: 'Solidariedade _____ é baseada na semelhança.', answer: 'mecânica', options: ['mecânica', 'orgânica', 'contratual'] },
                { text: 'Solidariedade _____ é baseada na interdependência.', answer: 'orgânica', options: ['mecânica', 'orgânica', 'primitiva'] },
                { text: 'Em sociedades tradicionais, a consciência coletiva é _____.', answer: 'forte', options: ['fraca', 'forte', 'inexistente'] }
            ]
        }
    },
    {
        id: 20607, unitId: 206, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Solidariedade',
        content: {
            cards: [
                { front: 'Solidariedade Mecânica', back: 'União pela semelhança, típica de sociedades tradicionais' },
                { front: 'Solidariedade Orgânica', back: 'União pela interdependência, típica de sociedades modernas' },
                { front: 'Consciência Coletiva', back: 'Conjunto de crenças e sentimentos comuns' },
                { front: 'Divisão do Trabalho', back: 'Base da solidariedade orgânica' },
                { front: 'Anomia', back: 'Falta de normas, desregulação social' }
            ]
        }
    },
    {
        id: 20608, unitId: 206, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'Solidariedade Orgânica',
        content: {
            title: 'A União pela Diferença',
            text: '**SOLIDARIEDADE ORGÂNICA**\nCaracterística de sociedades modernas, industriais, complexas.\n\n**Base:** Diferença e interdependência\n• Divisão do trabalho especializada\n• Cada um depende dos outros\n• Consciência coletiva mais fraca\n• Maior individualidade\n\n**Características:**\n• Direito restitutivo (reparação)\n• Contratos e trocas\n• Desvio = dano a reparar\n• O indivíduo tem espaço próprio\n\n**Analogia:** Como órgãos de um corpo - diferentes mas interdependentes.',
            keyPoints: ['Base: diferença e interdependência', 'Divisão do trabalho', 'Direito restitutivo', 'Mais individualidade']
        }
    },
    {
        id: 20609, unitId: 206, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: Evolução da Solidariedade',
        content: {
            items: [
                { text: 'Sociedade tribal (solidariedade mecânica)', correctOrder: 1 },
                { text: 'Comunidade rural tradicional', correctOrder: 2 },
                { text: 'Sociedade em transição', correctOrder: 3 },
                { text: 'Sociedade industrial moderna', correctOrder: 4 },
                { text: 'Sociedade contemporânea (solidariedade orgânica)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20610, unitId: 206, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Solidariedade Hoje',
        content: {
            prompt: 'Durkheim escreveu sobre solidariedade no século XIX. Hoje, com globalização, internet e individualismo, como você vê a solidariedade social? Ela está mais forte ou mais fraca?',
            examples: ['Redes sociais', 'Individualismo', 'Movimentos coletivos', 'Globalização'],
            minWords: 70
        }
    },
    {
        id: 20611, unitId: 206, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Comparando',
        content: {
            questions: [
                { question: 'A divisão do trabalho gera solidariedade:', options: ['Mecânica', 'Orgânica', 'Nenhuma', 'Ambas'], correct: 1 },
                { question: 'O direito penal é típico da solidariedade:', options: ['Orgânica', 'Mecânica', 'Moderna', 'Contratual'], correct: 1 },
                { question: 'Em sociedades modernas, a consciência coletiva é:', options: ['Mais forte', 'Mais fraca', 'Igual', 'Inexistente'], correct: 1 }
            ]
        }
    },
    {
        id: 20612, unitId: 206, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Anomia',
        content: {
            title: 'Quando a Solidariedade Falha',
            text: 'A **anomia** é um conceito central em Durkheim. Significa ausência ou enfraquecimento de normas sociais.\n\n**Causas:**\n• Mudanças sociais rápidas\n• Crises econômicas\n• Enfraquecimento de instituições\n• Transição entre tipos de solidariedade\n\n**Consequências:**\n• Desorientação individual\n• Aumento de suicídios\n• Desintegração social\n• Comportamentos desviantes\n\nPara Durkheim, a anomia é uma "patologia" social que precisa ser tratada com novas formas de integração.',
            keyPoints: ['Anomia = falta de normas', 'Causada por mudanças rápidas', 'Leva à desorientação', 'É uma patologia social'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 20613, unitId: 206, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Conceitos',
        content: {
            pairs: [
                { left: 'Mecânica', right: 'Semelhança' },
                { left: 'Orgânica', right: 'Interdependência' },
                { left: 'Anomia', right: 'Falta de normas' },
                { left: 'Direito penal', right: 'Punição' },
                { left: 'Direito restitutivo', right: 'Reparação' }
            ]
        }
    },
    {
        id: 20614, unitId: 206, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Evolução da Solidariedade',
        content: {
            events: [
                { year: -5000, event: 'Solidariedade Mecânica', description: 'Sociedades tribais' },
                { year: 500, event: 'Solidariedade Mista', description: 'Idade Média' },
                { year: 1750, event: 'Transição', description: 'Início da industrialização' },
                { year: 1893, event: 'Teoria de Durkheim', description: 'Divisão do Trabalho Social' },
                { year: 2000, event: 'Solidariedade Orgânica', description: 'Sociedades complexas' }
            ]
        }
    },
    {
        id: 20615, unitId: 206, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Solidariedade',
        content: {
            questions: [
                { question: 'A metáfora "orgânica" se refere a:', options: ['Agricultura', 'Corpo humano', 'Máquinas', 'Computadores'], correct: 1 },
                { question: 'Solidariedade mecânica predomina em sociedades:', options: ['Industriais', 'Tradicionais', 'Capitalistas', 'Globalistas'], correct: 1 },
                { question: 'Anomia ocorre quando:', options: ['Há excesso de normas', 'Faltam normas', 'Normas são justas', 'Todos concordam'], correct: 1 },
                { question: 'A divisão do trabalho moderna gera:', options: ['Isolamento total', 'Solidariedade mecânica', 'Solidariedade orgânica', 'Anarquia'], correct: 2 }
            ]
        }
    }
];

// Blocos para Unidade 207 - Max Weber - Vida
const BLOCKS_207 = [
    {
        id: 20701, unitId: 207, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'Quem foi Max Weber?',
        content: {
            title: 'Weber: O Intérprete da Modernidade',
            text: 'Max Weber (1864-1920) foi um sociólogo, economista e jurista alemão. É considerado um dos fundadores da sociologia junto com Marx e Durkheim. Weber analisou a modernidade, a burocracia, as religiões mundiais e desenvolveu conceitos como "ação social", "tipos ideais" e "desencantamento do mundo".',
            keyPoints: ['Nasceu na Alemanha em 1864', 'Jurista, economista e sociólogo', 'Analisou a modernidade', 'Conceitos: ação social, burocracia'],
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Max_Weber_1894.jpg'
        }
    },
    {
        id: 20702, unitId: 207, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: A Vida de Weber',
        content: {
            title: 'Max Weber: Vida e Obra',
            description: 'Documentário sobre a vida de Max Weber e suas contribuições à sociologia.',
            videoUrl: 'https://www.youtube.com/watch?v=max-weber-vida',
            duration: '14 minutos',
            questions: ['Qual era a formação original de Weber?', 'Por que Weber é considerado um dos pais da sociologia?']
        }
    },
    {
        id: 20703, unitId: 207, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Vida de Weber',
        content: {
            questions: [
                { question: 'Em que país Weber nasceu?', options: ['França', 'Inglaterra', 'Alemanha', 'Itália'], correct: 2 },
                { question: 'Weber era originalmente formado em:', options: ['Sociologia', 'Direito', 'Medicina', 'Teologia'], correct: 1 },
                { question: 'Weber morreu em:', options: ['1883', '1917', '1920', '1945'], correct: 2 }
            ]
        }
    },
    {
        id: 20704, unitId: 207, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Biografia de Weber',
        content: {
            title: 'A Jornada de Max Weber',
            text: '**Juventude (1864-1889)**\nNasceu em Erfurt, Alemanha, em família de classe média alta. Estudou Direito, Economia e História. Era extremamente erudito.\n\n**Carreira e Crise (1889-1903)**\n• Professor de economia em Freiburg e Heidelberg\n• Sofreu colapso nervoso em 1898\n• Afastou-se da academia por 4 anos\n\n**Maturidade (1903-1920)**\n• Retomou a escrita intensamente\n• "A Ética Protestante" (1905)\n• "Economia e Sociedade" (póstuma)\n• Morreu de pneumonia em 1920',
            keyPoints: ['Formação interdisciplinar', 'Crise nervosa em 1898', 'Ética Protestante em 1905', 'Morreu em 1920'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 20705, unitId: 207, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Eventos da Vida de Weber',
        content: {
            pairs: [
                { left: '1864', right: 'Nascimento em Erfurt' },
                { left: '1898', right: 'Colapso nervoso' },
                { left: '1905', right: 'A Ética Protestante' },
                { left: '1920', right: 'Morte por pneumonia' },
                { left: 'Economia e Sociedade', right: 'Obra póstuma' }
            ]
        }
    },
    {
        id: 20706, unitId: 207, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Weber',
        content: {
            sentences: [
                { text: 'Weber nasceu na _____ em 1864.', answer: 'Alemanha', options: ['Alemanha', 'França', 'Inglaterra'] },
                { text: 'A obra mais famosa de Weber é "A _____ Protestante e o Espírito do Capitalismo".', answer: 'Ética', options: ['Ética', 'Moral', 'Religião'] },
                { text: 'Weber estudou Direito, Economia e _____.', answer: 'História', options: ['Medicina', 'História', 'Teologia'] }
            ]
        }
    },
    {
        id: 20707, unitId: 207, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Weber',
        content: {
            cards: [
                { front: 'Max Weber', back: 'Sociólogo alemão (1864-1920), um dos fundadores da sociologia' },
                { front: 'Ação Social', back: 'Comportamento orientado pela conduta de outros' },
                { front: 'Tipo Ideal', back: 'Modelo conceitual para análise da realidade' },
                { front: 'Burocracia', back: 'Forma racional de organização' },
                { front: 'Desencantamento', back: 'Perda do caráter mágico do mundo' }
            ]
        }
    },
    {
        id: 20708, unitId: 207, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'O Projeto de Weber',
        content: {
            title: 'Sociologia Compreensiva',
            text: 'Weber desenvolveu uma sociologia diferente de Durkheim:\n\n**Durkheim:** Explicar fatos sociais por outros fatos sociais (objetividade)\n\n**Weber:** Compreender o sentido da ação social (subjetividade)\n\nPara Weber, a sociologia deve:\n• Compreender (verstehen) o significado das ações\n• Interpretar as motivações dos atores\n• Usar "tipos ideais" como ferramentas analíticas\n• Manter neutralidade axiológica (não julgar valores)',
            keyPoints: ['Sociologia compreensiva', 'Sentido da ação', 'Verstehen (compreender)', 'Tipos ideais']
        }
    },
    {
        id: 20709, unitId: 207, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: Obras de Weber',
        content: {
            items: [
                { text: 'Tese de doutorado sobre comércio medieval (1889)', correctOrder: 1 },
                { text: 'A Ética Protestante e o Espírito do Capitalismo (1905)', correctOrder: 2 },
                { text: 'Sociologia das Religiões Mundiais (1915-1920)', correctOrder: 3 },
                { text: 'A Política como Vocação (1919)', correctOrder: 4 },
                { text: 'Economia e Sociedade (1922, póstuma)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20710, unitId: 207, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Compreender vs. Explicar',
        content: {
            prompt: 'Weber dizia que precisamos "compreender" o sentido que as pessoas dão às suas ações, não apenas "explicar" causas externas. Você acha que é possível entender verdadeiramente as motivações dos outros?',
            examples: ['Empatia', 'Cultura diferente', 'Preconceitos', 'Interpretação'],
            minWords: 60
        }
    },
    {
        id: 20711, unitId: 207, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: O Método de Weber',
        content: {
            questions: [
                { question: '"Verstehen" significa:', options: ['Explicar', 'Compreender', 'Medir', 'Ignorar'], correct: 1 },
                { question: 'Weber propõe uma sociologia:', options: ['Objetiva apenas', 'Compreensiva', 'Matemática', 'Religiosa'], correct: 1 },
                { question: 'Tipo ideal é:', options: ['A sociedade perfeita', 'Uma ferramenta analítica', 'O melhor sistema', 'Uma utopia'], correct: 1 }
            ]
        }
    },
    {
        id: 20712, unitId: 207, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Weber vs. Marx vs. Durkheim',
        content: {
            title: 'Três Perspectivas',
            text: '**Marx:**\n• Foco: economia e classes\n• Método: materialismo histórico\n• Objetivo: transformar a sociedade\n\n**Durkheim:**\n• Foco: solidariedade e integração\n• Método: fatos sociais como coisas\n• Objetivo: reformar a sociedade\n\n**Weber:**\n• Foco: sentido da ação e racionalização\n• Método: compreensão interpretativa\n• Objetivo: compreender a sociedade\n\nOs três são complementares e indispensáveis para a sociologia.',
            keyPoints: ['Marx: economia e revolução', 'Durkheim: integração e reforma', 'Weber: sentido e compreensão', 'Abordagens complementares'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 20713, unitId: 207, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Os Três Clássicos',
        content: {
            pairs: [
                { left: 'Marx', right: 'Luta de classes' },
                { left: 'Durkheim', right: 'Fato social' },
                { left: 'Weber', right: 'Ação social' },
                { left: 'Alemanha', right: 'País de Marx e Weber' },
                { left: 'França', right: 'País de Durkheim' }
            ]
        }
    },
    {
        id: 20714, unitId: 207, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Linha do Tempo: Max Weber',
        content: {
            events: [
                { year: 1864, event: 'Nascimento', description: 'Nasce em Erfurt, Alemanha' },
                { year: 1889, event: 'Doutorado', description: 'Tese sobre comércio medieval' },
                { year: 1898, event: 'Crise', description: 'Colapso nervoso' },
                { year: 1905, event: 'Ética Protestante', description: 'Obra-prima publicada' },
                { year: 1920, event: 'Morte', description: 'Morre de pneumonia em Munique' }
            ]
        }
    },
    {
        id: 20715, unitId: 207, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Weber',
        content: {
            questions: [
                { question: 'Weber é conhecido por:', options: ['Materialismo histórico', 'Fato social', 'Sociologia compreensiva', 'Psicanálise'], correct: 2 },
                { question: 'A formação original de Weber era em:', options: ['Sociologia', 'Direito e Economia', 'Medicina', 'Filosofia apenas'], correct: 1 },
                { question: '"Tipo ideal" é:', options: ['A melhor sociedade', 'Modelo para análise', 'Utopia', 'Projeto político'], correct: 1 },
                { question: 'Weber morreu em:', options: ['1883', '1917', '1920', '1945'], correct: 2 }
            ]
        }
    }
];

// Blocos para Unidade 208 - Ação Social
const BLOCKS_208 = [
    {
        id: 20801, unitId: 208, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'O que é Ação Social?',
        content: {
            title: 'O Conceito Central de Weber',
            text: 'Para Weber, ação social é o objeto da sociologia. É uma ação humana cujo sentido é orientado pela conduta de outros. Nem toda ação é social: colidir involuntariamente com alguém não é ação social, mas cumprimentar alguém é. O que importa é o sentido que o agente dá à sua conduta.',
            keyPoints: ['Ação orientada por outros', 'Sentido subjetivo', 'Nem toda ação é social', 'Objeto da sociologia para Weber'],
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400'
        }
    },
    {
        id: 20802, unitId: 208, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: Ação Social',
        content: {
            title: 'Os Quatro Tipos de Ação Social',
            description: 'Vídeo explicando os quatro tipos de ação social em Weber.',
            videoUrl: 'https://www.youtube.com/watch?v=acao-social-weber',
            duration: '11 minutos',
            questions: ['Qual a diferença entre ação racional e tradicional?', 'O que é uma ação afetiva?']
        }
    },
    {
        id: 20803, unitId: 208, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Ação Social',
        content: {
            questions: [
                { question: 'Para ser ação social, a ação deve:', options: ['Ser econômica', 'Ser orientada por outros', 'Ser repetida', 'Ser legal'], correct: 1 },
                { question: 'Colidir involuntariamente com alguém é:', options: ['Ação social', 'Não é ação social', 'Ação racional', 'Ação tradicional'], correct: 1 },
                { question: 'Weber identificou quantos tipos de ação social?', options: ['2', '3', '4', '5'], correct: 2 }
            ]
        }
    },
    {
        id: 20804, unitId: 208, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Os Quatro Tipos de Ação',
        content: {
            title: 'Tipologia de Weber',
            text: 'Weber identificou quatro tipos de ação social:\n\n**1. AÇÃO RACIONAL COM RELAÇÃO A FINS**\nCalcula meios e fins. Ex: empresário maximizando lucro.\n\n**2. AÇÃO RACIONAL COM RELAÇÃO A VALORES**\nOrientada por valores, independente das consequências. Ex: mártir religioso.\n\n**3. AÇÃO AFETIVA**\nMovida por emoções. Ex: bofetada por raiva.\n\n**4. AÇÃO TRADICIONAL**\nPor hábito, costume. Ex: cumprimentar mais velhos.\n\nNa modernidade, predomina a ação racional com fins.',
            keyPoints: ['Racional-fins: calcula consequências', 'Racional-valores: princípios acima de tudo', 'Afetiva: emoções', 'Tradicional: costumes'],
            timeToRead: '9 minutos'
        }
    },
    {
        id: 20805, unitId: 208, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Tipos de Ação',
        content: {
            pairs: [
                { left: 'Racional-fins', right: 'Empresário calculando lucro' },
                { left: 'Racional-valores', right: 'Mártir religioso' },
                { left: 'Afetiva', right: 'Reação de raiva' },
                { left: 'Tradicional', right: 'Seguir costumes' },
                { left: 'Modernidade', right: 'Predomínio da racionalidade' }
            ]
        }
    },
    {
        id: 20806, unitId: 208, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Tipos de Ação',
        content: {
            sentences: [
                { text: 'Ação movida por emoções é ação _____.', answer: 'afetiva', options: ['afetiva', 'racional', 'tradicional'] },
                { text: 'Seguir costumes é ação _____.', answer: 'tradicional', options: ['afetiva', 'racional', 'tradicional'] },
                { text: 'Calcular meios e fins é ação racional com relação a _____.', answer: 'fins', options: ['valores', 'fins', 'emoções'] }
            ]
        }
    },
    {
        id: 20807, unitId: 208, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Ação Social',
        content: {
            cards: [
                { front: 'Ação Social', back: 'Ação cujo sentido é orientado pela conduta de outros' },
                { front: 'Ação Racional-fins', back: 'Calcula meios para atingir objetivos' },
                { front: 'Ação Racional-valores', back: 'Orientada por princípios, independente das consequências' },
                { front: 'Ação Afetiva', back: 'Determinada por emoções e sentimentos' },
                { front: 'Ação Tradicional', back: 'Determinada por hábitos arraigados' }
            ]
        }
    },
    {
        id: 20808, unitId: 208, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'Racionalização',
        content: {
            title: 'O Processo da Modernidade',
            text: 'Para Weber, a modernidade é marcada pelo processo de racionalização:\n\n• Predomínio da ação racional-fins\n• Calculabilidade e previsibilidade\n• Burocracia como forma de organização\n• "Desencantamento do mundo" (perda do mágico)\n\nA racionalização traz eficiência, mas também a "gaiola de ferro": um sistema burocrático que aprisiona os indivíduos.',
            keyPoints: ['Predomínio da razão instrumental', 'Burocracia', 'Desencantamento', 'Gaiola de ferro']
        }
    },
    {
        id: 20809, unitId: 208, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Classifique: Tipos de Ação',
        content: {
            instructions: 'Ordene da ação mais racional para a menos racional:',
            items: [
                { text: 'Investidor calculando retorno', correctOrder: 1 },
                { text: 'Ativista defendendo causa', correctOrder: 2 },
                { text: 'Pessoa seguindo ritual religioso', correctOrder: 3 },
                { text: 'Reação de surpresa', correctOrder: 4 },
                { text: 'Gesto automático de costume', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20810, unitId: 208, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Suas Ações',
        content: {
            prompt: 'Pense em três ações que você realizou hoje. Tente classificá-las segundo a tipologia de Weber (racional-fins, racional-valores, afetiva, tradicional). Qual tipo predominou?',
            examples: ['Ir ao trabalho/escola', 'Cumprimentar alguém', 'Ajudar um amigo', 'Reagir a uma notícia'],
            minWords: 70
        }
    },
    {
        id: 20811, unitId: 208, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Exemplos',
        content: {
            questions: [
                { question: 'Um cientista fazendo experimento realiza ação:', options: ['Afetiva', 'Tradicional', 'Racional-fins', 'Nenhuma'], correct: 2 },
                { question: 'Alguém que morre por sua fé realiza ação:', options: ['Racional-fins', 'Racional-valores', 'Tradicional', 'Afetiva'], correct: 1 },
                { question: 'Tirar o chapéu na igreja é ação:', options: ['Racional-fins', 'Afetiva', 'Tradicional', 'Revolucionária'], correct: 2 }
            ]
        }
    },
    {
        id: 20812, unitId: 208, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Ação Social vs. Fato Social',
        content: {
            title: 'Weber vs. Durkheim',
            text: '**Durkheim - Fato Social:**\n• Exterior ao indivíduo\n• Coercitivo\n• Sociedade → Indivíduo\n• Explicar causas\n\n**Weber - Ação Social:**\n• Parte do indivíduo\n• Orientada por sentido\n• Indivíduo → Sociedade\n• Compreender significados\n\nSão perspectivas complementares: Durkheim olha de cima (estrutura), Weber olha de baixo (ação).',
            keyPoints: ['Fato social: estrutura', 'Ação social: agência', 'Durkheim: explicar', 'Weber: compreender'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 20813, unitId: 208, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Weber vs. Durkheim',
        content: {
            pairs: [
                { left: 'Weber', right: 'Ação social' },
                { left: 'Durkheim', right: 'Fato social' },
                { left: 'Compreender', right: 'Método de Weber' },
                { left: 'Explicar', right: 'Método de Durkheim' },
                { left: 'Sentido', right: 'Foco de Weber' }
            ]
        }
    },
    {
        id: 20814, unitId: 208, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Desenvolvimento do Conceito',
        content: {
            events: [
                { year: 1905, event: 'Ética Protestante', description: 'Análise de ação religiosa e economia' },
                { year: 1913, event: 'Sobre Algumas Categorias', description: 'Definição de ação social' },
                { year: 1919, event: 'Vocação Política', description: 'Tipos de dominação' },
                { year: 1922, event: 'Economia e Sociedade', description: 'Sistematização póstuma' }
            ]
        }
    },
    {
        id: 20815, unitId: 208, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Ação Social',
        content: {
            questions: [
                { question: 'Ação social é uma ação:', options: ['Qualquer', 'Orientada pela conduta de outros', 'Econômica', 'Política'], correct: 1 },
                { question: 'A modernidade é marcada pelo predomínio da ação:', options: ['Tradicional', 'Afetiva', 'Racional-fins', 'Mágica'], correct: 2 },
                { question: 'Desencantamento do mundo significa:', options: ['Tristeza', 'Perda do caráter mágico', 'Desânimo', 'Revolução'], correct: 1 },
                { question: '"Gaiola de ferro" refere-se à:', options: ['Prisão', 'Burocracia opressora', 'Fábrica', 'Igreja'], correct: 1 }
            ]
        }
    }
];

// Blocos para Unidade 209 - A Ética Protestante
const BLOCKS_209 = [
    {
        id: 20901, unitId: 209, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'A Tese de Weber',
        content: {
            title: 'Religião e Capitalismo',
            text: 'Em "A Ética Protestante e o Espírito do Capitalismo" (1905), Weber faz uma pergunta provocativa: por que o capitalismo moderno surgiu no Ocidente e não em outras civilizações? Sua resposta: a ética protestante, especialmente calvinista, criou uma mentalidade favorável ao capitalismo - trabalho duro, poupança, reinvestimento dos lucros.',
            keyPoints: ['Por que capitalismo no Ocidente?', 'Ética protestante como fator', 'Calvinismo especialmente', 'Mentalidade capitalista'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        }
    },
    {
        id: 20902, unitId: 209, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: Ética Protestante',
        content: {
            title: 'Weber: Religião e Capitalismo',
            description: 'Vídeo explicando a tese de Weber sobre protestantismo e capitalismo.',
            videoUrl: 'https://www.youtube.com/watch?v=etica-protestante',
            duration: '15 minutos',
            questions: ['O que é a predestinação calvinista?', 'Como a religião influenciou a economia?']
        }
    },
    {
        id: 20903, unitId: 209, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: A Tese',
        content: {
            questions: [
                { question: 'Weber pergunta por que o capitalismo surgiu:', options: ['Na China', 'Na Índia', 'No Ocidente', 'Na África'], correct: 2 },
                { question: 'A ética que Weber analisa é:', options: ['Católica', 'Protestante', 'Budista', 'Islâmica'], correct: 1 },
                { question: 'O calvinismo enfatizava:', options: ['Prazer', 'Predestinação', 'Pobreza', 'Preguiça'], correct: 1 }
            ]
        }
    },
    {
        id: 20904, unitId: 209, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Predestinação e Trabalho',
        content: {
            title: 'A Lógica Calvinista',
            text: '**A DOUTRINA DA PREDESTINAÇÃO**\nNo calvinismo, Deus já decidiu quem será salvo e quem será condenado. Nada pode mudar isso.\n\n**O PROBLEMA PSICOLÓGICO**\nComo saber se você é um dos "eleitos"? A ansiedade era enorme.\n\n**A SOLUÇÃO PRÁTICA**\n• Trabalho duro como vocação divina\n• Sucesso nos negócios como sinal de eleição\n• Não gastar o lucro em luxo (ascetismo)\n• Reinvestir e acumular\n\nEssa mentalidade criou o "espírito do capitalismo": trabalhar e acumular como dever religioso.',
            keyPoints: ['Predestinação: destino já decidido', 'Ansiedade: sou eleito?', 'Trabalho como vocação', 'Lucro reinvestido'],
            timeToRead: '10 minutos'
        }
    },
    {
        id: 20905, unitId: 209, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Ética Protestante',
        content: {
            pairs: [
                { left: 'Predestinação', right: 'Destino já decidido por Deus' },
                { left: 'Vocação (Beruf)', right: 'Trabalho como chamado divino' },
                { left: 'Ascetismo intramundano', right: 'Trabalhar sem gastar em luxo' },
                { left: 'Sinal de eleição', right: 'Sucesso nos negócios' },
                { left: 'Espírito do capitalismo', right: 'Mentalidade de acumulação' }
            ]
        }
    },
    {
        id: 20906, unitId: 209, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Ética Protestante',
        content: {
            sentences: [
                { text: 'A doutrina da _____ diz que Deus já decidiu quem será salvo.', answer: 'predestinação', options: ['predestinação', 'reencarnação', 'salvação'] },
                { text: 'O sucesso nos negócios era visto como sinal de _____.', answer: 'eleição', options: ['pecado', 'eleição', 'preguiça'] },
                { text: 'O ascetismo protestante pregava não gastar em _____.', answer: 'luxo', options: ['comida', 'luxo', 'trabalho'] }
            ]
        }
    },
    {
        id: 20907, unitId: 209, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Conceitos',
        content: {
            cards: [
                { front: 'Predestinação', back: 'Doutrina de que Deus já decidiu quem será salvo' },
                { front: 'Beruf (Vocação)', back: 'Trabalho profissional como chamado divino' },
                { front: 'Ascetismo intramundano', back: 'Trabalhar no mundo mas sem seus prazeres' },
                { front: 'Espírito do capitalismo', back: 'Mentalidade de trabalho e acumulação como dever' },
                { front: 'Afinidade eletiva', back: 'Relação de influência mútua entre religião e economia' }
            ]
        }
    },
    {
        id: 20908, unitId: 209, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'O Espírito do Capitalismo',
        content: {
            title: 'Além da Ganância',
            text: 'Weber distingue capitalismo como sistema econômico do "espírito" do capitalismo:\n\n**NÃO É apenas:**\n• Ganância (existe em toda parte)\n• Busca de lucro (sempre existiu)\n• Comércio (é antigo)\n\n**É especificamente:**\n• Trabalho metódico e racional\n• Acumulação como dever moral\n• Reinvestimento sistemático\n• Calculabilidade e previsibilidade\n\nBenjamin Franklin: "Tempo é dinheiro" - essa mentalidade é o espírito do capitalismo.',
            keyPoints: ['Não é apenas ganância', 'Trabalho como dever', 'Acumulação metódica', 'Mentalidade específica']
        }
    },
    {
        id: 20909, unitId: 209, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: A Lógica Calvinista',
        content: {
            items: [
                { text: 'Deus predestinou quem será salvo', correctOrder: 1 },
                { text: 'Fiel sente ansiedade sobre seu destino', correctOrder: 2 },
                { text: 'Busca sinais de eleição no sucesso', correctOrder: 3 },
                { text: 'Trabalha duro e não gasta em luxo', correctOrder: 4 },
                { text: 'Acumula capital para reinvestir', correctOrder: 5 }
            ]
        }
    },
    {
        id: 20910, unitId: 209, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Trabalho Hoje',
        content: {
            prompt: 'Weber escreveu há mais de 100 anos. Hoje, muitas pessoas trabalham incansavelmente mesmo sem motivação religiosa. O "espírito do capitalismo" ainda existe? De onde vem a compulsão pelo trabalho hoje?',
            examples: ['Cultura do hustle', 'Workaholism', 'Status pelo trabalho', 'Medo do desemprego'],
            minWords: 70
        }
    },
    {
        id: 20911, unitId: 209, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Aplicando',
        content: {
            questions: [
                { question: 'Para Weber, o capitalismo moderno é diferente da simples ganância porque:', options: ['É mais rico', 'Tem uma mentalidade metódica', 'Usa máquinas', 'É ocidental'], correct: 1 },
                { question: '"Tempo é dinheiro" expressa:', options: ['Ganância', 'O espírito do capitalismo', 'Religião', 'Pobreza'], correct: 1 },
                { question: 'O ascetismo protestante era "intramundano" porque:', options: ['Rejeitava o mundo', 'Trabalhava no mundo sem seus prazeres', 'Era monástico', 'Era rico'], correct: 1 }
            ]
        }
    },
    {
        id: 20912, unitId: 209, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Críticas e Debates',
        content: {
            title: 'A Tese é Correta?',
            text: 'A tese de Weber gerou debates até hoje:\n\n**CRÍTICAS:**\n• Capitalismo existiu antes do protestantismo (Itália, Flandres)\n• Outros fatores foram decisivos (tecnologia, colonização)\n• Correlação não é causalidade\n• Weber exagerou a ansiedade calvinista\n\n**DEFESAS:**\n• Weber não disse que protestantismo causou capitalismo\n• Falou de "afinidade eletiva", influência mútua\n• Explicou a mentalidade, não o sistema\n\nA tese continua sendo discutida e refinada.',
            keyPoints: ['Debates sobre causalidade', 'Afinidade eletiva, não causa', 'Capitalismo existia antes', 'Tese ainda discutida'],
            timeToRead: '8 minutos'
        }
    },
    {
        id: 20913, unitId: 209, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Tese de Weber',
        content: {
            pairs: [
                { left: 'Calvinismo', right: 'Protestantismo estudado por Weber' },
                { left: 'Benjamin Franklin', right: 'Exemplo de espírito capitalista' },
                { left: 'Afinidade eletiva', right: 'Relação entre religião e economia' },
                { left: 'Gaiola de ferro', right: 'Capitalismo sem religião' }
            ]
        }
    },
    {
        id: 20914, unitId: 209, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Contexto Histórico',
        content: {
            events: [
                { year: 1517, event: 'Reforma Protestante', description: 'Lutero inicia a Reforma' },
                { year: 1536, event: 'Calvino em Genebra', description: 'Calvinismo se desenvolve' },
                { year: 1620, event: 'Puritanos na América', description: 'Colonização protestante' },
                { year: 1776, event: 'Benjamin Franklin', description: 'Exemplo de ética capitalista' },
                { year: 1905, event: 'Tese de Weber', description: 'A Ética Protestante publicada' }
            ]
        }
    },
    {
        id: 20915, unitId: 209, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Ética Protestante',
        content: {
            questions: [
                { question: 'A pergunta central de Weber era:', options: ['O que é capitalismo?', 'Por que capitalismo no Ocidente?', 'Como destruir o capitalismo?', 'Quem inventou o dinheiro?'], correct: 1 },
                { question: 'A predestinação calvinista gerava:', options: ['Tranquilidade', 'Ansiedade', 'Preguiça', 'Indiferença'], correct: 1 },
                { question: 'O espírito do capitalismo é:', options: ['Ganância', 'Mentalidade metódica de acumulação', 'Roubo', 'Exploração'], correct: 1 },
                { question: 'Weber falou de "afinidade eletiva", não de:', options: ['Relação', 'Influência', 'Causa única', 'Conexão'], correct: 2 }
            ]
        }
    }
];

// Blocos para Unidade 210 - Comparando os Três Clássicos
const BLOCKS_210 = [
    {
        id: 21001, unitId: 210, order: 1, type: 'concept', difficulty: 2, xp: 25,
        title: 'Os Três Fundadores',
        content: {
            title: 'Marx, Durkheim e Weber',
            text: 'Karl Marx (1818-1883), Émile Durkheim (1858-1917) e Max Weber (1864-1920) são considerados os três pais fundadores da sociologia. Cada um desenvolveu uma perspectiva única sobre a sociedade, com métodos e focos diferentes. Juntos, eles estabeleceram as bases da disciplina.',
            keyPoints: ['Três perspectivas fundamentais', 'Métodos diferentes', 'Focos complementares', 'Bases da sociologia'],
            image: 'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=400'
        }
    },
    {
        id: 21002, unitId: 210, order: 2, type: 'video', difficulty: 2, xp: 25,
        title: 'Vídeo: Comparação',
        content: {
            title: 'Marx vs. Durkheim vs. Weber',
            description: 'Vídeo comparando as três perspectivas clássicas da sociologia.',
            videoUrl: 'https://www.youtube.com/watch?v=marx-durkheim-weber',
            duration: '18 minutos',
            questions: ['Qual a principal diferença entre Marx e Durkheim?', 'O que Weber acrescenta aos outros dois?']
        }
    },
    {
        id: 21003, unitId: 210, order: 3, type: 'quiz', difficulty: 2, xp: 30,
        title: 'Quiz: Identificando',
        content: {
            questions: [
                { question: 'Quem desenvolveu o conceito de fato social?', options: ['Marx', 'Durkheim', 'Weber', 'Comte'], correct: 1 },
                { question: 'Quem desenvolveu o materialismo histórico?', options: ['Marx', 'Durkheim', 'Weber', 'Comte'], correct: 0 },
                { question: 'Quem desenvolveu a sociologia compreensiva?', options: ['Marx', 'Durkheim', 'Weber', 'Comte'], correct: 2 }
            ]
        }
    },
    {
        id: 21004, unitId: 210, order: 4, type: 'reading', difficulty: 2, xp: 20,
        title: 'Comparação Detalhada',
        content: {
            title: 'Três Visões da Sociedade',
            text: '**OBJETO DE ESTUDO:**\n• Marx: Relações de produção, luta de classes\n• Durkheim: Fatos sociais, solidariedade\n• Weber: Ação social, sentido\n\n**MÉTODO:**\n• Marx: Materialismo histórico, dialética\n• Durkheim: Positivismo, explicação causal\n• Weber: Compreensão interpretativa\n\n**VISÃO DA SOCIEDADE:**\n• Marx: Conflito e exploração\n• Durkheim: Integração e coesão\n• Weber: Racionalização e dominação\n\n**POSIÇÃO POLÍTICA:**\n• Marx: Revolucionário\n• Durkheim: Reformista\n• Weber: Liberal pessimista',
            keyPoints: ['Objetos diferentes', 'Métodos distintos', 'Visões complementares', 'Políticas variadas'],
            timeToRead: '10 minutos'
        }
    },
    {
        id: 21005, unitId: 210, order: 5, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Conceitos Centrais',
        content: {
            pairs: [
                { left: 'Marx', right: 'Luta de classes' },
                { left: 'Durkheim', right: 'Fato social' },
                { left: 'Weber', right: 'Ação social' },
                { left: 'Marx', right: 'Mais-valia' },
                { left: 'Durkheim', right: 'Anomia' },
                { left: 'Weber', right: 'Racionalização' }
            ]
        }
    },
    {
        id: 21006, unitId: 210, order: 6, type: 'fill', difficulty: 2, xp: 25,
        title: 'Complete: Os Clássicos',
        content: {
            sentences: [
                { text: 'Para Marx, a história é movida pela _____.', answer: 'luta de classes', options: ['luta de classes', 'solidariedade', 'religião'] },
                { text: 'Para Durkheim, a sociologia estuda _____.', answer: 'fatos sociais', options: ['indivíduos', 'fatos sociais', 'economia'] },
                { text: 'Para Weber, devemos _____ o sentido da ação.', answer: 'compreender', options: ['ignorar', 'compreender', 'destruir'] }
            ]
        }
    },
    {
        id: 21007, unitId: 210, order: 7, type: 'flashcard', difficulty: 2, xp: 20,
        title: 'Flashcards: Revisão',
        content: {
            cards: [
                { front: 'Infraestrutura/Superestrutura', back: 'Conceitos de Marx: base econômica e ideias' },
                { front: 'Solidariedade Mecânica/Orgânica', back: 'Conceitos de Durkheim: tipos de coesão' },
                { front: 'Tipos de Ação Social', back: 'Conceitos de Weber: racional, afetiva, tradicional' },
                { front: 'Alienação', back: 'Marx: perda de conexão com o trabalho' },
                { front: 'Desencantamento', back: 'Weber: perda do caráter mágico do mundo' }
            ]
        }
    },
    {
        id: 21008, unitId: 210, order: 8, type: 'concept', difficulty: 2, xp: 25,
        title: 'Visões da Modernidade',
        content: {
            title: 'O que é a Modernidade?',
            text: 'Cada clássico tem uma visão da modernidade:\n\n**MARX:**\nModernidade = Capitalismo\n• Exploração intensificada\n• Alienação do trabalhador\n• Crises periódicas\n• Será superado pelo socialismo\n\n**DURKHEIM:**\nModernidade = Divisão do trabalho\n• Solidariedade orgânica\n• Risco de anomia\n• Precisa de novas formas de integração\n\n**WEBER:**\nModernidade = Racionalização\n• Desencantamento do mundo\n• Burocracia\n• "Gaiola de ferro"',
            keyPoints: ['Marx: capitalismo', 'Durkheim: divisão do trabalho', 'Weber: racionalização', 'Três diagnósticos']
        }
    },
    {
        id: 21009, unitId: 210, order: 9, type: 'order', difficulty: 2, xp: 30,
        title: 'Ordene: Cronologia',
        content: {
            items: [
                { text: 'Nascimento de Marx (1818)', correctOrder: 1 },
                { text: 'Nascimento de Durkheim (1858)', correctOrder: 2 },
                { text: 'Nascimento de Weber (1864)', correctOrder: 3 },
                { text: 'Morte de Marx (1883)', correctOrder: 4 },
                { text: 'Morte de Durkheim e Weber (1917-1920)', correctOrder: 5 }
            ]
        }
    },
    {
        id: 21010, unitId: 210, order: 10, type: 'reflection', difficulty: 2, xp: 40,
        title: 'Reflexão: Qual Clássico?',
        content: {
            prompt: 'Dos três clássicos (Marx, Durkheim, Weber), qual perspectiva você acha mais útil para entender o mundo hoje? Por quê? Considere problemas atuais como desigualdade, coesão social, burocracia.',
            examples: ['Desigualdade', 'Polarização política', 'Burocracia estatal', 'Individualismo'],
            minWords: 80
        }
    },
    {
        id: 21011, unitId: 210, order: 11, type: 'quiz', difficulty: 2, xp: 35,
        title: 'Quiz: Aplicando',
        content: {
            questions: [
                { question: 'Para analisar exploração no trabalho, usamos:', options: ['Durkheim', 'Marx', 'Weber', 'Comte'], correct: 1 },
                { question: 'Para analisar coesão social, usamos:', options: ['Marx', 'Durkheim', 'Weber', 'Comte'], correct: 1 },
                { question: 'Para analisar sentido das ações, usamos:', options: ['Marx', 'Durkheim', 'Weber', 'Comte'], correct: 2 }
            ]
        }
    },
    {
        id: 21012, unitId: 210, order: 12, type: 'reading', difficulty: 2, xp: 20,
        title: 'Legado e Atualidade',
        content: {
            title: 'Os Clássicos Hoje',
            text: 'Os três clássicos continuam fundamentais:\n\n**Marx hoje:**\n• Estudos sobre desigualdade\n• Crítica ao capitalismo global\n• Economia política\n\n**Durkheim hoje:**\n• Estudos sobre coesão social\n• Sociologia da religião\n• Análise de instituições\n\n**Weber hoje:**\n• Estudos sobre burocracia\n• Sociologia das organizações\n• Análise cultural\n\nNenhuma análise sociológica séria ignora esses fundadores.',
            keyPoints: ['Marx: crítica ao capitalismo', 'Durkheim: coesão social', 'Weber: racionalização', 'Todos ainda relevantes'],
            timeToRead: '7 minutos'
        }
    },
    {
        id: 21013, unitId: 210, order: 13, type: 'match', difficulty: 2, xp: 35,
        title: 'Combine: Legado',
        content: {
            pairs: [
                { left: 'Estudos de desigualdade', right: 'Influência de Marx' },
                { left: 'Estudos de integração', right: 'Influência de Durkheim' },
                { left: 'Estudos de burocracia', right: 'Influência de Weber' },
                { left: 'Teoria crítica', right: 'Herança marxista' },
                { left: 'Funcionalismo', right: 'Herança durkheimiana' }
            ]
        }
    },
    {
        id: 21014, unitId: 210, order: 14, type: 'timeline', difficulty: 2, xp: 35,
        title: 'Os Três Clássicos',
        content: {
            events: [
                { year: 1818, event: 'Marx nasce', description: 'Tréveris, Alemanha' },
                { year: 1858, event: 'Durkheim nasce', description: 'Épinal, França' },
                { year: 1864, event: 'Weber nasce', description: 'Erfurt, Alemanha' },
                { year: 1883, event: 'Marx morre', description: 'Londres' },
                { year: 1917, event: 'Durkheim morre', description: 'Paris' },
                { year: 1920, event: 'Weber morre', description: 'Munique' }
            ]
        }
    },
    {
        id: 21015, unitId: 210, order: 15, type: 'quiz', difficulty: 2, xp: 45,
        title: 'Desafio Final: Os Clássicos',
        content: {
            questions: [
                { question: 'Os três fundadores da sociologia são:', options: ['Platão, Aristóteles, Sócrates', 'Marx, Durkheim, Weber', 'Freud, Jung, Lacan', 'Comte, Spencer, Mill'], correct: 1 },
                { question: 'Marx via a modernidade como:', options: ['Progresso', 'Capitalismo explorador', 'Integração', 'Racionalização'], correct: 1 },
                { question: 'Durkheim via a modernidade como:', options: ['Revolução', 'Divisão do trabalho', 'Caos', 'Fim da história'], correct: 1 },
                { question: 'Weber via a modernidade como:', options: ['Liberdade', 'Comunismo', 'Racionalização', 'Anarquia'], correct: 2 },
                { question: 'As três perspectivas são:', options: ['Iguais', 'Opostas', 'Complementares', 'Ultrapassadas'], correct: 2 }
            ]
        }
    }
];

// Exportar para mesclagem
if (typeof window !== 'undefined') {
    window.SECTION2_BLOCKS = {
        201: BLOCKS_201,
        202: BLOCKS_202,
        203: BLOCKS_203,
        204: BLOCKS_204,
        205: BLOCKS_205,
        206: BLOCKS_206,
        207: BLOCKS_207,
        208: BLOCKS_208,
        209: BLOCKS_209,
        210: BLOCKS_210
    };
}

console.log('✅ Seção 2 de Sociologia COMPLETA carregada!');
console.log('   - Unidades 201-210 com conteúdo completo');
console.log('   - 150 blocos educacionais sobre Marx, Durkheim e Weber');
