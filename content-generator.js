// ==========================================
// SABERQUEST - CONTENT GENERATOR v1.0
// Geracao dinamica de conteudo educacional
// ==========================================

const ContentGenerator = {
    // ==========================================
    // BASE DE CONHECIMENTO POR MATERIA
    // ==========================================
    knowledgeBase: {
        sociology: {
            name: 'Sociologia',
            color: '#58cc02',
            icon: 'fa-users',
            sections: [
                { id: 1, title: 'Fundamentos da Sociologia', topics: ['O que e Sociologia', 'Imaginacao Sociologica', 'Metodos de Pesquisa', 'Fato Social', 'Teoria Social'] },
                { id: 2, title: 'Classicos da Sociologia', topics: ['Auguste Comte', 'Emile Durkheim', 'Max Weber', 'Karl Marx', 'Georg Simmel'] },
                { id: 3, title: 'Sociologia Moderna', topics: ['Escola de Chicago', 'Funcionalismo', 'Interacionismo Simbolico', 'Teoria Critica', 'Estruturalismo'] },
                { id: 4, title: 'Teoria Critica', topics: ['Escola de Frankfurt', 'Theodor Adorno', 'Herbert Marcuse', 'Jurgen Habermas', 'Industria Cultural'] },
                { id: 5, title: 'Pensamento Decolonial', topics: ['Colonialidade', 'Anibal Quijano', 'Walter Mignolo', 'Boaventura Santos', 'Epistemologias do Sul'] },
                { id: 6, title: 'Sociologia Brasileira', topics: ['Gilberto Freyre', 'Sergio Buarque', 'Caio Prado Jr', 'Florestan Fernandes', 'Darcy Ribeiro'] },
                { id: 7, title: 'Desigualdade Social', topics: ['Classes Sociais', 'Mobilidade Social', 'Pobreza', 'Exclusao Social', 'Politicas Publicas'] },
                { id: 8, title: 'Cultura e Sociedade', topics: ['Cultura Popular', 'Industria Cultural', 'Globalizacao', 'Identidade Cultural', 'Multiculturalismo'] },
                { id: 9, title: 'Instituicoes Sociais', topics: ['Familia', 'Educacao', 'Religiao', 'Estado', 'Midia'] },
                { id: 10, title: 'Movimentos Sociais', topics: ['Acao Coletiva', 'Movimento Operario', 'Feminismo', 'Movimento Negro', 'LGBTQIA+'] },
                { id: 11, title: 'Sociologia Urbana', topics: ['Cidade', 'Urbanizacao', 'Segregacao', 'Violencia Urbana', 'Espaco Publico'] },
                { id: 12, title: 'Sociologia do Trabalho', topics: ['Divisao do Trabalho', 'Alienacao', 'Precarizacao', 'Sindicalismo', 'Economia Solidaria'] },
                { id: 13, title: 'Sociologia Contemporanea', topics: ['Pierre Bourdieu', 'Anthony Giddens', 'Zygmunt Bauman', 'Manuel Castells', 'Ulrich Beck'] },
                { id: 14, title: 'Genero e Sexualidade', topics: ['Estudos de Genero', 'Teoria Queer', 'Patriarcado', 'Masculinidades', 'Interseccionalidade'] },
                { id: 15, title: 'Raca e Etnia', topics: ['Racismo', 'Branquitude', 'Negritude', 'Cotas Raciais', 'Genocidio Negro'] }
            ]
        },
        philosophy: {
            name: 'Filosofia',
            color: '#ce82ff',
            icon: 'fa-brain',
            sections: [
                { id: 1, title: 'Introducao a Filosofia', topics: ['O que e Filosofia', 'Pensamento Critico', 'Argumentacao', 'Logica', 'Metodo Filosofico'] },
                { id: 2, title: 'Filosofia Antiga', topics: ['Pre-Socraticos', 'Socrates', 'Platao', 'Aristoteles', 'Estoicismo'] },
                { id: 3, title: 'Filosofia Helenistica', topics: ['Epicurismo', 'Ceticismo', 'Neoplatonismo', 'Cinismo', 'Filosofia Romana'] },
                { id: 4, title: 'Filosofia Medieval', topics: ['Patristica', 'Santo Agostinho', 'Escolastica', 'Tomas de Aquino', 'Ockham'] },
                { id: 5, title: 'Filosofia Moderna', topics: ['Racionalismo', 'Descartes', 'Spinoza', 'Leibniz', 'Metodo Cientifico'] },
                { id: 6, title: 'Empirismo', topics: ['Francis Bacon', 'John Locke', 'George Berkeley', 'David Hume', 'Conhecimento Empirico'] },
                { id: 7, title: 'Iluminismo', topics: ['Razao', 'Voltaire', 'Montesquieu', 'Rousseau', 'Enciclopedismo'] },
                { id: 8, title: 'Filosofia Kantiana', topics: ['Immanuel Kant', 'Critica da Razao', 'Imperativo Categorico', 'Idealismo Transcendental', 'Estetica'] },
                { id: 9, title: 'Idealismo Alemao', topics: ['Fichte', 'Schelling', 'Hegel', 'Dialetica', 'Espirito Absoluto'] },
                { id: 10, title: 'Existencialismo', topics: ['Kierkegaard', 'Nietzsche', 'Heidegger', 'Sartre', 'Camus'] },
                { id: 11, title: 'Fenomenologia', topics: ['Husserl', 'Merleau-Ponty', 'Consciencia', 'Intencionalidade', 'Mundo da Vida'] },
                { id: 12, title: 'Filosofia Analitica', topics: ['Frege', 'Russell', 'Wittgenstein', 'Filosofia da Linguagem', 'Logica Moderna'] },
                { id: 13, title: 'Etica', topics: ['Etica das Virtudes', 'Deontologia', 'Utilitarismo', 'Etica Aplicada', 'Bioetica'] },
                { id: 14, title: 'Filosofia Politica', topics: ['Justica', 'Liberdade', 'Democracia', 'Direitos Humanos', 'John Rawls'] },
                { id: 15, title: 'Filosofia Contemporanea', topics: ['Pos-estruturalismo', 'Foucault', 'Deleuze', 'Derrida', 'Agamben'] }
            ]
        },
        politics: {
            name: 'Politica',
            color: '#ff4b4b',
            icon: 'fa-landmark',
            sections: [
                { id: 1, title: 'Introducao a Ciencia Politica', topics: ['O que e Politica', 'Poder', 'Estado', 'Governo', 'Regimes Politicos'] },
                { id: 2, title: 'Teoria Politica Classica', topics: ['Platao', 'Aristoteles', 'Cicero', 'Cidade-Estado', 'Bem Comum'] },
                { id: 3, title: 'Pensamento Politico Medieval', topics: ['Santo Agostinho', 'Tomas de Aquino', 'Igreja e Estado', 'Poder Temporal', 'Poder Espiritual'] },
                { id: 4, title: 'Maquiavel e o Realismo', topics: ['O Principe', 'Razao de Estado', 'Virtu', 'Fortuna', 'Republica'] },
                { id: 5, title: 'Contratualismo', topics: ['Hobbes', 'Locke', 'Rousseau', 'Contrato Social', 'Estado de Natureza'] },
                { id: 6, title: 'Liberalismo', topics: ['Liberalismo Classico', 'John Stuart Mill', 'Liberalismo Social', 'Neoliberalismo', 'Liberdade Individual'] },
                { id: 7, title: 'Conservadorismo', topics: ['Edmund Burke', 'Tradicao', 'Ordem Social', 'Neoconservadorismo', 'Direita Politica'] },
                { id: 8, title: 'Socialismo e Marxismo', topics: ['Socialismo Utopico', 'Marx e Engels', 'Materialismo Historico', 'Luta de Classes', 'Revolucao'] },
                { id: 9, title: 'Democracia', topics: ['Democracia Direta', 'Democracia Representativa', 'Participacao', 'Eleicoes', 'Cidadania'] },
                { id: 10, title: 'Autoritarismo e Totalitarismo', topics: ['Fascismo', 'Nazismo', 'Stalinismo', 'Ditadura', 'Hannah Arendt'] },
                { id: 11, title: 'Sistema Politico Brasileiro', topics: ['Constituicao', 'Tres Poderes', 'Federalismo', 'Partidos Politicos', 'Sistema Eleitoral'] },
                { id: 12, title: 'Relacoes Internacionais', topics: ['Realismo', 'Liberalismo', 'Construtivismo', 'Geopolitica', 'Organizacoes Internacionais'] },
                { id: 13, title: 'Politicas Publicas', topics: ['Formulacao', 'Implementacao', 'Avaliacao', 'Politica Social', 'Politica Economica'] },
                { id: 14, title: 'Movimentos e Participacao', topics: ['Sociedade Civil', 'ONGs', 'Ativismo', 'Protestos', 'Redes Sociais'] },
                { id: 15, title: 'Desafios Contemporaneos', topics: ['Populismo', 'Fake News', 'Polarizacao', 'Crise Democratica', 'Novos Atores'] }
            ]
        },
        anthropology: {
            name: 'Antropologia',
            color: '#1cb0f6',
            icon: 'fa-globe-americas',
            sections: [
                { id: 1, title: 'Introducao a Antropologia', topics: ['O que e Antropologia', 'Cultura', 'Alteridade', 'Etnocentrismo', 'Relativismo Cultural'] },
                { id: 2, title: 'Historia da Antropologia', topics: ['Evolucionismo', 'Difusionismo', 'Funcionalismo', 'Estruturalismo', 'Pos-modernismo'] },
                { id: 3, title: 'Metodo Etnografico', topics: ['Trabalho de Campo', 'Observacao Participante', 'Malinowski', 'Escrita Etnografica', 'Etica'] },
                { id: 4, title: 'Parentesco', topics: ['Sistemas de Parentesco', 'Casamento', 'Familia', 'Descendencia', 'Alianca'] },
                { id: 5, title: 'Religiao e Magia', topics: ['Sagrado e Profano', 'Mito', 'Ritual', 'Xamanismo', 'Sincretismo'] },
                { id: 6, title: 'Antropologia Economica', topics: ['Reciprocidade', 'Redistribuicao', 'Troca', 'Kula', 'Potlatch'] },
                { id: 7, title: 'Antropologia Politica', topics: ['Poder', 'Chefia', 'Estado', 'Sociedades Sem Estado', 'Pierre Clastres'] },
                { id: 8, title: 'Antropologia Simbolica', topics: ['Clifford Geertz', 'Interpretacao', 'Simbolo', 'Significado', 'Cultura como Texto'] },
                { id: 9, title: 'Antropologia do Corpo', topics: ['Corpo', 'Tecnicas Corporais', 'Marcel Mauss', 'Corporalidade', 'Embodiment'] },
                { id: 10, title: 'Antropologia Brasileira', topics: ['Indigenismo', 'Darcy Ribeiro', 'Roberto DaMatta', 'Eduardo Viveiros de Castro', 'Perspectivismo'] },
                { id: 11, title: 'Povos Indigenas', topics: ['Diversidade', 'Cosmologia', 'Territorio', 'Direitos Indigenas', 'Resistencia'] },
                { id: 12, title: 'Antropologia Urbana', topics: ['Cidade', 'Espaco Urbano', 'Tribos Urbanas', 'Periferia', 'Etnografia Urbana'] },
                { id: 13, title: 'Antropologia Visual', topics: ['Imagem', 'Cinema Etnografico', 'Fotografia', 'Representacao', 'Jean Rouch'] },
                { id: 14, title: 'Genero e Sexualidade', topics: ['Construcao de Genero', 'Masculinidades', 'Feminismos', 'Diversidade Sexual', 'Queer'] },
                { id: 15, title: 'Antropologia Contemporanea', topics: ['Globalizacao', 'Fluxos Culturais', 'Hibridismo', 'Antropologia Digital', 'Novos Campos'] }
            ]
        },
        'world-history': {
            name: 'Historia do Mundo',
            color: '#ff9600',
            icon: 'fa-globe',
            sections: [
                { id: 1, title: 'Pre-Historia', topics: ['Evolucao Humana', 'Paleolitico', 'Neolitico', 'Revolucao Agricola', 'Arte Rupestre'] },
                { id: 2, title: 'Mesopotamia e Egito', topics: ['Sumerios', 'Babilonia', 'Assirios', 'Egito Antigo', 'Faraos'] },
                { id: 3, title: 'Grecia Antiga', topics: ['Cidades-Estado', 'Democracia Ateniense', 'Esparta', 'Guerras Persicas', 'Alexandre'] },
                { id: 4, title: 'Roma Antiga', topics: ['Republica', 'Imperio', 'Pax Romana', 'Cristianismo', 'Queda de Roma'] },
                { id: 5, title: 'Idade Media', topics: ['Feudalismo', 'Igreja Medieval', 'Cruzadas', 'Renascimento Carolingio', 'Peste Negra'] },
                { id: 6, title: 'Civilizacoes Asiaticas', topics: ['China Imperial', 'Japao Feudal', 'India', 'Rota da Seda', 'Mongois'] },
                { id: 7, title: 'Civilizacoes Africanas', topics: ['Egito', 'Mali', 'Songhai', 'Zimbabwe', 'Africa Pre-Colonial'] },
                { id: 8, title: 'Americas Pre-Colombianas', topics: ['Maias', 'Astecas', 'Incas', 'Povos Norte-Americanos', 'Culturas Andinas'] },
                { id: 9, title: 'Renascimento', topics: ['Humanismo', 'Arte Renascentista', 'Ciencia', 'Reforma', 'Contrarreforma'] },
                { id: 10, title: 'Era das Navegacoes', topics: ['Expansao Maritima', 'Colonizacao', 'Comercio', 'Encontro de Culturas', 'Tratado de Tordesilhas'] },
                { id: 11, title: 'Revolucoes', topics: ['Revolucao Inglesa', 'Revolucao Americana', 'Revolucao Francesa', 'Revolucao Industrial', 'Primavera dos Povos'] },
                { id: 12, title: 'Seculo XIX', topics: ['Nacionalismo', 'Imperialismo', 'Unificacoes', 'Abolicao', 'Belle Epoque'] },
                { id: 13, title: 'Primeira Guerra Mundial', topics: ['Causas', 'Trincheiras', 'Tratado de Versalhes', 'Consequencias', 'Revolucao Russa'] },
                { id: 14, title: 'Entreguerras e Segunda Guerra', topics: ['Crise de 1929', 'Fascismo', 'Nazismo', 'Segunda Guerra', 'Holocausto'] },
                { id: 15, title: 'Mundo Contemporaneo', topics: ['Guerra Fria', 'Descolonizacao', 'Globalizacao', 'Seculo XXI', 'Novos Conflitos'] }
            ]
        },
        'brazil-history': {
            name: 'Historia do Brasil',
            color: '#00c853',
            icon: 'fa-flag',
            sections: [
                { id: 1, title: 'Brasil Pre-Colonial', topics: ['Povos Originarios', 'Tupi', 'Tapuia', 'Organizacao Social', 'Cultura Indigena'] },
                { id: 2, title: 'Chegada dos Portugueses', topics: ['Descobrimento', 'Carta de Caminha', 'Primeiros Contatos', 'Pau-Brasil', 'Feitorias'] },
                { id: 3, title: 'Colonizacao', topics: ['Capitanias Hereditarias', 'Governo-Geral', 'Economia Acucareira', 'Escravidao', 'Igreja Colonial'] },
                { id: 4, title: 'Brasil Holandes', topics: ['Invasoes', 'Mauricio de Nassau', 'Insurreicao Pernambucana', 'Legado', 'Arte Holandesa'] },
                { id: 5, title: 'Expansao Territorial', topics: ['Bandeiras', 'Missoes', 'Tratados', 'Ciclo do Ouro', 'Minas Gerais'] },
                { id: 6, title: 'Crise Colonial', topics: ['Inconfidencia Mineira', 'Conjuracao Baiana', 'Revolucao Pernambucana', 'Ideias Iluministas', 'Tensoes'] },
                { id: 7, title: 'Periodo Joanino', topics: ['Vinda da Corte', 'Abertura dos Portos', 'Reino Unido', 'Transformacoes', 'Rio de Janeiro'] },
                { id: 8, title: 'Independencia', topics: ['Processo', 'Dom Pedro I', 'Constituicao de 1824', 'Primeiro Reinado', 'Abdicacao'] },
                { id: 9, title: 'Regencias e Revoltas', topics: ['Periodo Regencial', 'Cabanagem', 'Farroupilha', 'Balaiada', 'Sabinada'] },
                { id: 10, title: 'Segundo Reinado', topics: ['Dom Pedro II', 'Cafe', 'Guerra do Paraguai', 'Abolicao', 'Imigracao'] },
                { id: 11, title: 'Republica Velha', topics: ['Proclamacao', 'Politica do Cafe-com-Leite', 'Coronelismo', 'Canudos', 'Cangaco'] },
                { id: 12, title: 'Era Vargas', topics: ['Revolucao de 30', 'Estado Novo', 'Trabalhismo', 'Industrializacao', 'Legado'] },
                { id: 13, title: 'Republica Democratica', topics: ['Redemocratizacao', 'JK', 'Brasilia', 'Janio e Jango', 'Reformas de Base'] },
                { id: 14, title: 'Ditadura Militar', topics: ['Golpe de 64', 'AI-5', 'Milagre Economico', 'Resistencia', 'Abertura'] },
                { id: 15, title: 'Nova Republica', topics: ['Diretas Ja', 'Constituicao de 88', 'Plano Real', 'Democracia', 'Brasil Contemporaneo'] }
            ]
        }
    },

    // ==========================================
    // GERADORES DE CONTEUDO POR TIPO
    // ==========================================

    // Gerar conteudo de LEITURA
    generateReading(topic, subjectId, difficulty) {
        const subject = this.knowledgeBase[subjectId];
        return {
            type: 'reading',
            title: topic,
            content: {
                title: topic,
                text: this.getReadingText(topic, subjectId),
                keyPoints: this.getKeyPoints(topic),
                sources: APIService.educationalSources.getSources(topic),
                books: APIService.openLibrary.getFallbackBooks(subjectId).slice(0, 2),
                movies: APIService.tmdb.getFallbackMovies(subjectId).slice(0, 2)
            },
            xp: Math.round(15 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de QUIZ
    generateQuiz(topic, subjectId, difficulty) {
        const questions = this.generateQuestions(topic, subjectId, 5);
        return {
            type: 'quiz',
            title: `Quiz: ${topic}`,
            content: {
                topic: topic,
                questions: questions
            },
            xp: Math.round(25 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de VIDEO
    generateVideo(topic, subjectId, difficulty) {
        const movies = APIService.tmdb.getFallbackMovies(subjectId);
        const movie = movies[Math.floor(Math.random() * movies.length)];
        return {
            type: 'video',
            title: movie.title,
            content: {
                title: movie.title,
                director: movie.director,
                year: movie.year,
                description: movie.why,
                duration: '2h',
                videoUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' filme completo')}`,
                reflectionQuestions: [
                    `Como o filme retrata ${topic}?`,
                    'Quais elementos do filme se relacionam com o que estudamos?',
                    'Que criticas sociais o filme apresenta?'
                ]
            },
            xp: Math.round(20 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de MATCH
    generateMatch(topic, subjectId, difficulty) {
        const pairs = this.generateMatchPairs(topic, subjectId);
        return {
            type: 'match',
            title: `Combine: ${topic}`,
            content: {
                instructions: 'Conecte cada conceito a sua definicao correta.',
                pairs: pairs
            },
            xp: Math.round(30 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de FLASHCARD
    generateFlashcard(topic, subjectId, difficulty) {
        const cards = this.generateFlashcards(topic, subjectId);
        return {
            type: 'flashcard',
            title: `Flashcards: ${topic}`,
            content: {
                cards: cards
            },
            xp: Math.round(15 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de REFLEXAO
    generateReflection(topic, subjectId, difficulty) {
        return {
            type: 'reflection',
            title: `Reflexao: ${topic}`,
            content: {
                prompt: this.getReflectionPrompt(topic, subjectId),
                examples: this.getReflectionExamples(topic),
                minWords: 50
            },
            xp: Math.round(35 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de TIMELINE
    generateTimeline(topic, subjectId, difficulty) {
        const events = this.generateTimelineEvents(topic, subjectId);
        return {
            type: 'timeline',
            title: `Linha do Tempo: ${topic}`,
            content: {
                title: topic,
                events: events
            },
            xp: Math.round(30 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de CONCEITO
    generateConcept(topic, subjectId, difficulty) {
        return {
            type: 'concept',
            title: topic,
            content: {
                title: topic,
                text: this.getConceptText(topic, subjectId),
                keyPoints: this.getKeyPoints(topic),
                sources: APIService.educationalSources.getSources(topic)
            },
            xp: Math.round(20 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de ORDENAR
    generateOrder(topic, subjectId, difficulty) {
        const items = this.generateOrderItems(topic, subjectId);
        return {
            type: 'order',
            title: `Ordene: ${topic}`,
            content: {
                instructions: 'Coloque os itens na ordem cronologica ou logica correta.',
                items: items
            },
            xp: Math.round(25 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // Gerar conteudo de COMPLETAR
    generateFill(topic, subjectId, difficulty) {
        const sentences = this.generateFillSentences(topic, subjectId);
        return {
            type: 'fill',
            title: `Complete: ${topic}`,
            content: {
                instructions: 'Complete as frases com as palavras corretas.',
                sentences: sentences
            },
            xp: Math.round(20 * this.getDifficultyMultiplier(difficulty))
        };
    },

    // ==========================================
    // HELPERS PARA GERACAO DE CONTEUDO
    // ==========================================

    getDifficultyMultiplier(difficulty) {
        const multipliers = { 1: 1, 2: 1.2, 3: 1.4, 4: 1.6, 5: 1.8, 6: 2, 7: 2.2, 8: 2.5, 9: 2.8, 10: 3 };
        return multipliers[difficulty] || 1;
    },

    getReadingText(topic, subjectId) {
        // Base de textos educacionais
        const baseTexts = {
            'sociologia': `A Sociologia e a ciencia que estuda a sociedade, suas estruturas, instituicoes e relacoes sociais. Quando analisamos ${topic}, precisamos compreender como esse fenomeno se relaciona com as forcas sociais mais amplas que moldam nossa realidade.\n\n${topic} representa um conceito fundamental para entender as dinamicas sociais contemporaneas. Os teoricos classicos ja apontavam para a importancia de compreender esses processos dentro de um contexto historico e estrutural.\n\nPara aprofundar seus estudos, recomendamos consultar as fontes abaixo e refletir sobre como ${topic} se manifesta em sua realidade cotidiana.`,
            'filosofia': `A Filosofia nos convida a pensar criticamente sobre os fundamentos de nossa existencia e conhecimento. ${topic} e um tema que atravessa seculos de reflexao filosofica, desde os gregos antigos ate os pensadores contemporaneos.\n\nAo estudar ${topic}, estamos nos engajando com questoes fundamentais sobre a natureza da realidade, do conhecimento e da existencia humana. Grandes filosofos dedicaram suas vidas a compreender esses problemas.\n\nA reflexao filosofica sobre ${topic} nos ajuda a questionar pressupostos, examinar argumentos e desenvolver um pensamento mais rigoroso e critico.`,
            'politica': `A Ciencia Politica analisa as relacoes de poder, as instituicoes governamentais e os processos politicos que estruturam a vida em sociedade. ${topic} e central para compreender como o poder e exercido, contestado e legitimado.\n\nAo longo da historia, pensadores politicos refletiram sobre ${topic}, oferecendo diferentes perspectivas e teorias. Essas reflexoes continuam relevantes para analisar os desafios politicos contemporaneos.\n\nCompreender ${topic} e essencial para uma participacao cidada informada e para o fortalecimento da democracia.`,
            'anthropology': `A Antropologia busca compreender a diversidade humana em suas multiplas dimensoes culturais, sociais e simbolicas. ${topic} nos permite explorar como diferentes sociedades constroem significados e organizam suas vidas.\n\nO olhar antropologico sobre ${topic} nos ajuda a desnaturalizar praticas que tomamos como obvias e a reconhecer a pluralidade de formas de ser e estar no mundo.\n\nAtravés da etnografia e da comparacao cultural, podemos compreender melhor ${topic} e suas variacoes em diferentes contextos.`,
            'world-history': `A Historia nos permite compreender os processos, eventos e transformacoes que moldaram o mundo em que vivemos. ${topic} representa um momento ou fenomeno crucial para entender a trajetoria da humanidade.\n\nAo estudar ${topic}, analisamos fontes historicas, contextualizamos eventos e buscamos compreender as multiplas causalidades que explicam as mudancas ao longo do tempo.\n\nA perspectiva historica sobre ${topic} nos ajuda a evitar anacronismos e a compreender o presente a luz do passado.`,
            'brazil-history': `A Historia do Brasil nos revela os processos de formacao de nossa sociedade, desde os povos originarios ate os desafios contemporaneos. ${topic} e fundamental para compreender a construcao da nacao brasileira.\n\nEstudar ${topic} na historia brasileira significa analisar as continuidades e rupturas, os conflitos e negociacoes que marcaram nossa trajetoria como povo.\n\nCompreender ${topic} e essencial para entender o Brasil de hoje e os desafios que enfrentamos como sociedade.`
        };

        return baseTexts[subjectId] || baseTexts['sociologia'];
    },

    getConceptText(topic, subjectId) {
        return `${topic} e um conceito fundamental na area de ${this.knowledgeBase[subjectId]?.name || 'Ciencias Humanas'}. Este tema nos ajuda a compreender aspectos importantes da realidade social, cultural e historica.\n\nAo longo dos estudos, voce vai perceber como ${topic} se conecta com outros temas e como sua compreensao e essencial para uma visao mais ampla e critica do mundo.`;
    },

    getKeyPoints(topic) {
        return [
            `Compreender a definicao e contexto de ${topic}`,
            `Identificar os principais pensadores relacionados ao tema`,
            `Analisar a relevancia contemporanea de ${topic}`,
            `Relacionar ${topic} com outros conceitos estudados`,
            `Aplicar o conhecimento em analises criticas`
        ];
    },

    getReflectionPrompt(topic, subjectId) {
        const prompts = {
            'sociologia': `Reflita sobre como ${topic} se manifesta em sua vida cotidiana. Quais exemplos voce consegue identificar em sua comunidade? Como esse fenomeno afeta diferentes grupos sociais?`,
            'filosofia': `Considerando o que aprendeu sobre ${topic}, que questoes filosoficas esse tema levanta? Como voce relacionaria isso com sua propria experiencia de vida e busca por conhecimento?`,
            'politica': `Analise como ${topic} influencia a politica brasileira contemporanea. Quais sao os principais debates e posicionamentos sobre esse tema? Como voce se posiciona?`,
            'anthropology': `Pensando em ${topic} a partir de uma perspectiva antropologica, como diferentes culturas poderiam compreender esse fenomeno? Que relativizacoes sao necessarias?`,
            'world-history': `Reflita sobre a importancia historica de ${topic}. Quais foram as consequencias a longo prazo? Como esse tema ainda reverbera nos dias atuais?`,
            'brazil-history': `Considerando ${topic} na historia brasileira, como esse tema se relaciona com a formacao de nossa identidade nacional? Quais grupos foram mais afetados?`
        };
        return prompts[subjectId] || prompts['sociologia'];
    },

    getReflectionExamples(topic) {
        return [
            `Exemplo: Ao pensar em ${topic}, podemos considerar...`,
            'Uma analise critica deveria abordar aspectos como...',
            'E importante considerar diferentes perspectivas sobre o tema...'
        ];
    },

    generateQuestions(topic, subjectId, count) {
        // Base de questoes genericas que podem ser adaptadas
        const questionTemplates = [
            {
                question: `Qual das alternativas melhor define ${topic}?`,
                options: ['Definicao correta e completa', 'Definicao parcialmente correta', 'Definicao incorreta', 'Conceito nao relacionado'],
                correct: 0
            },
            {
                question: `Qual pensador e mais associado ao estudo de ${topic}?`,
                options: ['Pensador principal', 'Pensador secundario', 'Pensador de outra area', 'Autor contemporaneo'],
                correct: 0
            },
            {
                question: `Em relacao a ${topic}, e INCORRETO afirmar que:`,
                options: ['Afirmacao verdadeira 1', 'Afirmacao verdadeira 2', 'Afirmacao falsa', 'Afirmacao verdadeira 3'],
                correct: 2
            },
            {
                question: `A importancia de ${topic} para os estudos de ${this.knowledgeBase[subjectId]?.name} reside em:`,
                options: ['Razao principal correta', 'Razao secundaria', 'Razao menos relevante', 'Razao incorreta'],
                correct: 0
            },
            {
                question: `Qual contexto historico e fundamental para compreender ${topic}?`,
                options: ['Contexto correto', 'Contexto parcial', 'Contexto incorreto', 'Contexto anacronico'],
                correct: 0
            }
        ];

        return questionTemplates.slice(0, count);
    },

    generateMatchPairs(topic, subjectId) {
        return [
            { left: 'Conceito 1', right: 'Definicao 1' },
            { left: 'Conceito 2', right: 'Definicao 2' },
            { left: 'Conceito 3', right: 'Definicao 3' },
            { left: 'Conceito 4', right: 'Definicao 4' },
            { left: 'Conceito 5', right: 'Definicao 5' }
        ];
    },

    generateFlashcards(topic, subjectId) {
        return [
            { front: `O que e ${topic}?`, back: `${topic} e um conceito fundamental que se refere a...` },
            { front: 'Qual a origem do termo?', back: 'O termo tem origem no contexto de...' },
            { front: 'Quem sao os principais teoricos?', back: 'Os principais pensadores incluem...' },
            { front: 'Qual a importancia atual?', back: 'Atualmente, esse conceito e relevante para...' },
            { front: 'Como se relaciona com outros temas?', back: 'Este tema se conecta com...' }
        ];
    },

    generateTimelineEvents(topic, subjectId) {
        return [
            { year: '1800', event: 'Evento historico 1', description: 'Descricao do evento inicial' },
            { year: '1850', event: 'Evento historico 2', description: 'Desenvolvimento do tema' },
            { year: '1900', event: 'Evento historico 3', description: 'Transformacoes importantes' },
            { year: '1950', event: 'Evento historico 4', description: 'Novas perspectivas' },
            { year: '2000', event: 'Evento historico 5', description: 'Situacao contemporanea' }
        ];
    },

    generateOrderItems(topic, subjectId) {
        return [
            { text: 'Primeiro passo/evento', correctOrder: 1 },
            { text: 'Segundo passo/evento', correctOrder: 2 },
            { text: 'Terceiro passo/evento', correctOrder: 3 },
            { text: 'Quarto passo/evento', correctOrder: 4 },
            { text: 'Quinto passo/evento', correctOrder: 5 }
        ];
    },

    generateFillSentences(topic, subjectId) {
        return [
            { text: `${topic} e estudado principalmente pela _____.`, options: [this.knowledgeBase[subjectId]?.name, 'Matematica', 'Fisica'], answer: this.knowledgeBase[subjectId]?.name },
            { text: 'O conceito foi desenvolvido no seculo _____.', options: ['XIX', 'V', 'XXI'], answer: 'XIX' },
            { text: 'A principal caracteristica e a _____.', options: ['analise critica', 'memorizacao', 'repeticao'], answer: 'analise critica' }
        ];
    },

    // ==========================================
    // GERADOR PRINCIPAL DE BLOCOS
    // ==========================================
    generateBlocksForUnit(unitId, unitTitle, sectionId, subjectId, difficulty) {
        const blockTypes = ['concept', 'reading', 'quiz', 'video', 'match', 'flashcard', 'reflection', 'timeline', 'order', 'fill', 'quiz', 'reading', 'concept', 'match', 'quiz'];
        const baseId = unitId * 100;

        return blockTypes.map((type, index) => {
            const blockId = baseId + index + 1;
            let block;

            switch (type) {
                case 'reading':
                    block = this.generateReading(unitTitle, subjectId, difficulty);
                    break;
                case 'quiz':
                    block = this.generateQuiz(unitTitle, subjectId, difficulty);
                    break;
                case 'video':
                    block = this.generateVideo(unitTitle, subjectId, difficulty);
                    break;
                case 'match':
                    block = this.generateMatch(unitTitle, subjectId, difficulty);
                    break;
                case 'flashcard':
                    block = this.generateFlashcard(unitTitle, subjectId, difficulty);
                    break;
                case 'reflection':
                    block = this.generateReflection(unitTitle, subjectId, difficulty);
                    break;
                case 'timeline':
                    block = this.generateTimeline(unitTitle, subjectId, difficulty);
                    break;
                case 'concept':
                    block = this.generateConcept(unitTitle, subjectId, difficulty);
                    break;
                case 'order':
                    block = this.generateOrder(unitTitle, subjectId, difficulty);
                    break;
                case 'fill':
                    block = this.generateFill(unitTitle, subjectId, difficulty);
                    break;
                default:
                    block = this.generateConcept(unitTitle, subjectId, difficulty);
            }

            return {
                id: blockId,
                unitId: unitId,
                order: index + 1,
                ...block
            };
        });
    },

    // Gerar estrutura completa de uma materia
    generateSubjectStructure(subjectId) {
        const subject = this.knowledgeBase[subjectId];
        if (!subject) return null;

        const sections = [];
        const units = {};
        const allBlocks = {};

        subject.sections.forEach((section, sIndex) => {
            const sectionId = sIndex + 1;
            sections.push({
                id: sectionId,
                title: section.title,
                subtitle: `${section.topics.length * 15} atividades`,
                icon: subject.icon,
                color: subject.color,
                difficulty: Math.min(10, sIndex + 1)
            });

            units[sectionId] = [];

            section.topics.forEach((topic, tIndex) => {
                const unitId = sectionId * 100 + tIndex + 1;
                units[sectionId].push({
                    id: unitId,
                    sectionId: sectionId,
                    order: tIndex + 1,
                    title: topic,
                    subtitle: '15 atividades',
                    difficulty: Math.min(10, sIndex + 1)
                });

                allBlocks[unitId] = this.generateBlocksForUnit(
                    unitId,
                    topic,
                    sectionId,
                    subjectId,
                    Math.min(10, sIndex + 1)
                );
            });
        });

        return {
            SECTIONS: sections,
            UNITS: units,
            ALL_BLOCKS: allBlocks
        };
    }
};

// Exportar para uso global
window.ContentGenerator = ContentGenerator;

console.log('Content Generator carregado com sucesso');
