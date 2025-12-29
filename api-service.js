// ==========================================
// SABERQUEST - API SERVICE v1.0
// Integracao com Wikipedia, Open Library, TMDB
// ==========================================

const APIService = {
    // Cache para evitar requisicoes repetidas
    cache: new Map(),
    cacheTimeout: 1000 * 60 * 30, // 30 minutos

    // ==========================================
    // WIKIPEDIA API
    // ==========================================
    wikipedia: {
        baseUrl: 'https://pt.wikipedia.org/api/rest_v1',
        searchUrl: 'https://pt.wikipedia.org/w/api.php',

        // Buscar resumo de um topico
        async getSummary(topic) {
            const cacheKey = `wiki_summary_${topic}`;
            if (APIService.checkCache(cacheKey)) {
                return APIService.getFromCache(cacheKey);
            }

            try {
                const encodedTopic = encodeURIComponent(topic);
                const response = await fetch(
                    `${this.baseUrl}/page/summary/${encodedTopic}`,
                    { headers: { 'Accept': 'application/json' } }
                );

                if (!response.ok) {
                    // Tentar buscar alternativa
                    return await this.searchAndGetFirst(topic);
                }

                const data = await response.json();
                const result = {
                    title: data.title,
                    extract: data.extract,
                    description: data.description,
                    thumbnail: data.thumbnail?.source,
                    url: data.content_urls?.desktop?.page,
                    source: 'Wikipedia'
                };

                APIService.saveToCache(cacheKey, result);
                return result;
            } catch (error) {
                console.warn('Wikipedia API error:', error);
                return this.getFallbackContent(topic);
            }
        },

        // Buscar e pegar primeiro resultado
        async searchAndGetFirst(query) {
            try {
                const params = new URLSearchParams({
                    action: 'query',
                    list: 'search',
                    srsearch: query,
                    format: 'json',
                    origin: '*',
                    srlimit: 1
                });

                const response = await fetch(`${this.searchUrl}?${params}`);
                const data = await response.json();

                if (data.query?.search?.length > 0) {
                    const firstResult = data.query.search[0];
                    return {
                        title: firstResult.title,
                        extract: firstResult.snippet.replace(/<[^>]*>/g, ''),
                        url: `https://pt.wikipedia.org/wiki/${encodeURIComponent(firstResult.title)}`,
                        source: 'Wikipedia'
                    };
                }
            } catch (error) {
                console.warn('Wikipedia search error:', error);
            }
            return this.getFallbackContent(query);
        },

        // Buscar secoes de um artigo
        async getSections(topic) {
            const cacheKey = `wiki_sections_${topic}`;
            if (APIService.checkCache(cacheKey)) {
                return APIService.getFromCache(cacheKey);
            }

            try {
                const params = new URLSearchParams({
                    action: 'parse',
                    page: topic,
                    prop: 'sections',
                    format: 'json',
                    origin: '*'
                });

                const response = await fetch(`${this.searchUrl}?${params}`);
                const data = await response.json();

                if (data.parse?.sections) {
                    const sections = data.parse.sections.map(s => ({
                        index: s.index,
                        title: s.line,
                        level: s.level
                    }));
                    APIService.saveToCache(cacheKey, sections);
                    return sections;
                }
            } catch (error) {
                console.warn('Wikipedia sections error:', error);
            }
            return [];
        },

        // Conteudo fallback quando API falha
        getFallbackContent(topic) {
            return {
                title: topic,
                extract: `Conteudo sobre ${topic}. Este e um tema importante nas ciencias humanas que merece estudo aprofundado.`,
                url: `https://pt.wikipedia.org/wiki/${encodeURIComponent(topic)}`,
                source: 'Wikipedia (offline)'
            };
        }
    },

    // ==========================================
    // OPEN LIBRARY API (Livros)
    // ==========================================
    openLibrary: {
        baseUrl: 'https://openlibrary.org',

        // Buscar livros por assunto
        async searchBooks(subject, limit = 5) {
            const cacheKey = `books_${subject}_${limit}`;
            if (APIService.checkCache(cacheKey)) {
                return APIService.getFromCache(cacheKey);
            }

            try {
                const encodedSubject = encodeURIComponent(subject);
                const response = await fetch(
                    `${this.baseUrl}/search.json?subject=${encodedSubject}&limit=${limit}&language=por`
                );

                if (!response.ok) {
                    return this.getFallbackBooks(subject);
                }

                const data = await response.json();
                const books = data.docs?.map(book => ({
                    title: book.title,
                    author: book.author_name?.[0] || 'Autor desconhecido',
                    year: book.first_publish_year,
                    cover: book.cover_i
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                        : null,
                    key: book.key,
                    subjects: book.subject?.slice(0, 5) || [],
                    isbn: book.isbn?.[0],
                    url: `${this.baseUrl}${book.key}`
                })) || [];

                APIService.saveToCache(cacheKey, books);
                return books;
            } catch (error) {
                console.warn('Open Library API error:', error);
                return this.getFallbackBooks(subject);
            }
        },

        // Buscar livros por autor
        async searchByAuthor(author, limit = 5) {
            try {
                const encodedAuthor = encodeURIComponent(author);
                const response = await fetch(
                    `${this.baseUrl}/search.json?author=${encodedAuthor}&limit=${limit}`
                );

                if (!response.ok) return [];

                const data = await response.json();
                return data.docs?.map(book => ({
                    title: book.title,
                    author: book.author_name?.[0] || author,
                    year: book.first_publish_year,
                    cover: book.cover_i
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                        : null,
                    url: `${this.baseUrl}${book.key}`
                })) || [];
            } catch (error) {
                console.warn('Open Library author search error:', error);
                return [];
            }
        },

        // Livros fallback por materia
        getFallbackBooks(subject) {
            const booksDatabase = {
                'sociologia': [
                    { title: 'As Regras do Metodo Sociologico', author: 'Emile Durkheim', year: 1895, why: 'Fundamento metodologico da sociologia' },
                    { title: 'Economia e Sociedade', author: 'Max Weber', year: 1922, why: 'Conceitos fundamentais de acao social' },
                    { title: 'O Capital', author: 'Karl Marx', year: 1867, why: 'Analise critica do capitalismo' },
                    { title: 'A Distincao', author: 'Pierre Bourdieu', year: 1979, why: 'Capital cultural e classes sociais' },
                    { title: 'Raizes do Brasil', author: 'Sergio Buarque de Holanda', year: 1936, why: 'Formacao da sociedade brasileira' }
                ],
                'filosofia': [
                    { title: 'A Republica', author: 'Platao', year: -380, why: 'Base do pensamento politico ocidental' },
                    { title: 'Etica a Nicomaco', author: 'Aristoteles', year: -340, why: 'Fundamentos da etica' },
                    { title: 'Critica da Razao Pura', author: 'Immanuel Kant', year: 1781, why: 'Revolucao no pensamento filosofico' },
                    { title: 'Ser e Tempo', author: 'Martin Heidegger', year: 1927, why: 'Ontologia fundamental' },
                    { title: 'O Segundo Sexo', author: 'Simone de Beauvoir', year: 1949, why: 'Filosofia feminista' }
                ],
                'politica': [
                    { title: 'O Principe', author: 'Nicolau Maquiavel', year: 1532, why: 'Realismo politico' },
                    { title: 'Leviata', author: 'Thomas Hobbes', year: 1651, why: 'Teoria do Estado' },
                    { title: 'Do Contrato Social', author: 'Jean-Jacques Rousseau', year: 1762, why: 'Soberania popular' },
                    { title: 'Democracia na America', author: 'Alexis de Tocqueville', year: 1835, why: 'Analise da democracia' },
                    { title: 'Origens do Totalitarismo', author: 'Hannah Arendt', year: 1951, why: 'Critica aos regimes totalitarios' }
                ],
                'antropologia': [
                    { title: 'Os Argonautas do Pacifico Ocidental', author: 'Bronislaw Malinowski', year: 1922, why: 'Metodo etnografico' },
                    { title: 'Tristes Tropicos', author: 'Claude Levi-Strauss', year: 1955, why: 'Estruturalismo antropologico' },
                    { title: 'A Interpretacao das Culturas', author: 'Clifford Geertz', year: 1973, why: 'Antropologia interpretativa' },
                    { title: 'Casa-Grande & Senzala', author: 'Gilberto Freyre', year: 1933, why: 'Formacao da sociedade brasileira' },
                    { title: 'Raca e Historia', author: 'Claude Levi-Strauss', year: 1952, why: 'Critica ao etnocentrismo' }
                ],
                'historia': [
                    { title: 'Historia da Civilizacao Ocidental', author: 'Will Durant', year: 1935, why: 'Visao panoramica da historia' },
                    { title: 'Formacao do Brasil Contemporaneo', author: 'Caio Prado Junior', year: 1942, why: 'Historia economica do Brasil' },
                    { title: 'O Povo Brasileiro', author: 'Darcy Ribeiro', year: 1995, why: 'Formacao do povo brasileiro' },
                    { title: 'Era dos Extremos', author: 'Eric Hobsbawm', year: 1994, why: 'Seculo XX em perspectiva' },
                    { title: 'Brasil: Uma Biografia', author: 'Lilia Schwarcz', year: 2015, why: 'Historia completa do Brasil' }
                ]
            };

            // Encontrar categoria mais proxima
            const subjectLower = subject.toLowerCase();
            for (const [key, books] of Object.entries(booksDatabase)) {
                if (subjectLower.includes(key) || key.includes(subjectLower)) {
                    return books.map(b => ({ ...b, source: 'Base local' }));
                }
            }

            // Retornar mix de livros
            return booksDatabase.sociologia.slice(0, 3);
        }
    },

    // ==========================================
    // TMDB API (Filmes e Series) - Gratuita com chave
    // ==========================================
    tmdb: {
        // TMDB oferece API gratuita - usar chave demo ou solicitar
        baseUrl: 'https://api.themoviedb.org/3',
        imageBase: 'https://image.tmdb.org/t/p/w200',

        // Buscar filmes por palavra-chave (sem chave API, usar fallback)
        async searchMovies(query, limit = 5) {
            // Como TMDB requer API key, usar base de dados local
            return this.getFallbackMovies(query);
        },

        // Base de dados local de filmes educativos
        getFallbackMovies(subject) {
            const moviesDatabase = {
                'sociologia': [
                    { title: 'Que Horas Ela Volta?', year: 2015, director: 'Anna Muylaert', why: 'Relacoes de classe no Brasil contemporaneo', type: 'filme' },
                    { title: 'Cidade de Deus', year: 2002, director: 'Fernando Meirelles', why: 'Violencia urbana e desigualdade social', type: 'filme' },
                    { title: 'O Som ao Redor', year: 2012, director: 'Kleber Mendonca Filho', why: 'Relacoes sociais no Recife', type: 'filme' },
                    { title: 'Parasita', year: 2019, director: 'Bong Joon-ho', why: 'Desigualdade de classes', type: 'filme' },
                    { title: 'O Poço', year: 2019, director: 'Galder Gaztelu-Urrutia', why: 'Metafora sobre desigualdade', type: 'filme' }
                ],
                'filosofia': [
                    { title: 'Matrix', year: 1999, director: 'Wachowski', why: 'Questoes sobre realidade e percepcao', type: 'filme' },
                    { title: 'O Show de Truman', year: 1998, director: 'Peter Weir', why: 'Alegoria da caverna de Platao', type: 'filme' },
                    { title: 'Blade Runner', year: 1982, director: 'Ridley Scott', why: 'O que significa ser humano', type: 'filme' },
                    { title: 'Crimes e Pecados', year: 1989, director: 'Woody Allen', why: 'Dilemas eticos e morais', type: 'filme' },
                    { title: 'O Setimo Selo', year: 1957, director: 'Ingmar Bergman', why: 'Existencialismo e fe', type: 'filme' }
                ],
                'politica': [
                    { title: 'O Ano em que Meus Pais Sairam de Ferias', year: 2006, director: 'Cao Hamburger', why: 'Ditadura militar brasileira', type: 'filme' },
                    { title: 'Olga', year: 2004, director: 'Jayme Monjardim', why: 'Era Vargas e comunismo', type: 'filme' },
                    { title: 'Democracia em Vertigem', year: 2019, director: 'Petra Costa', why: 'Crise politica brasileira', type: 'documentario' },
                    { title: 'A Onda', year: 2008, director: 'Dennis Gansel', why: 'Ascensao do fascismo', type: 'filme' },
                    { title: 'O Grande Ditador', year: 1940, director: 'Charlie Chaplin', why: 'Critica ao nazismo', type: 'filme' }
                ],
                'antropologia': [
                    { title: 'Xingu', year: 2012, director: 'Cao Hamburger', why: 'Irmaos Villas-Boas e povos indigenas', type: 'filme' },
                    { title: 'Ex Pajé', year: 2018, director: 'Luiz Bolognesi', why: 'Cultura indigena contemporanea', type: 'documentario' },
                    { title: 'Embrace of the Serpent', year: 2015, director: 'Ciro Guerra', why: 'Encontro de culturas na Amazonia', type: 'filme' },
                    { title: 'Apocalypto', year: 2006, director: 'Mel Gibson', why: 'Civilizacao Maia', type: 'filme' },
                    { title: 'O Abraco da Serpente', year: 2015, director: 'Ciro Guerra', why: 'Colonizacao e conhecimento indigena', type: 'filme' }
                ],
                'historia': [
                    { title: 'Carlota Joaquina', year: 1995, director: 'Carla Camurati', why: 'Chegada da familia real ao Brasil', type: 'filme' },
                    { title: '1492: A Conquista do Paraiso', year: 1992, director: 'Ridley Scott', why: 'Descobrimento da America', type: 'filme' },
                    { title: 'O Resgate do Soldado Ryan', year: 1998, director: 'Steven Spielberg', why: 'Segunda Guerra Mundial', type: 'filme' },
                    { title: 'Hotel Ruanda', year: 2004, director: 'Terry George', why: 'Genocidio em Ruanda', type: 'filme' },
                    { title: '12 Anos de Escravidao', year: 2013, director: 'Steve McQueen', why: 'Escravidao nos EUA', type: 'filme' }
                ],
                'historia do brasil': [
                    { title: 'Marighella', year: 2019, director: 'Wagner Moura', why: 'Luta armada na ditadura', type: 'filme' },
                    { title: 'O Auto da Compadecida', year: 2000, director: 'Guel Arraes', why: 'Cultura nordestina brasileira', type: 'filme' },
                    { title: 'Central do Brasil', year: 1998, director: 'Walter Salles', why: 'Brasil profundo', type: 'filme' },
                    { title: 'Bacurau', year: 2019, director: 'Kleber Mendonca Filho', why: 'Resistencia e identidade nordestina', type: 'filme' },
                    { title: 'Abril Despedacado', year: 2001, director: 'Walter Salles', why: 'Sertao brasileiro', type: 'filme' }
                ]
            };

            const subjectLower = subject.toLowerCase();
            for (const [key, movies] of Object.entries(moviesDatabase)) {
                if (subjectLower.includes(key) || key.includes(subjectLower)) {
                    return movies.map(m => ({ ...m, source: 'Base local' }));
                }
            }

            return moviesDatabase.sociologia.slice(0, 3);
        }
    },

    // ==========================================
    // BRASIL ESCOLA / INFO ESCOLA (Scraping nao disponivel, usar dados locais)
    // ==========================================
    educationalSources: {
        getSources(topic) {
            return [
                {
                    name: 'Wikipedia',
                    url: `https://pt.wikipedia.org/wiki/${encodeURIComponent(topic)}`,
                    type: 'enciclopedia'
                },
                {
                    name: 'Brasil Escola',
                    url: `https://brasilescola.uol.com.br/pesquisa?q=${encodeURIComponent(topic)}`,
                    type: 'educacional'
                },
                {
                    name: 'InfoEscola',
                    url: `https://www.infoescola.com/pesquisa/?cx=partner-pub-4O&q=${encodeURIComponent(topic)}`,
                    type: 'educacional'
                },
                {
                    name: 'Khan Academy',
                    url: `https://pt.khanacademy.org/search?search_again=1&page_search_query=${encodeURIComponent(topic)}`,
                    type: 'curso'
                }
            ];
        }
    },

    // ==========================================
    // CACHE UTILS
    // ==========================================
    checkCache(key) {
        const cached = this.cache.get(key);
        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            return true;
        }
        return false;
    },

    getFromCache(key) {
        return this.cache.get(key)?.data;
    },

    saveToCache(key, data) {
        this.cache.set(key, { data, timestamp: Date.now() });
    },

    clearCache() {
        this.cache.clear();
    },

    // ==========================================
    // COMBINED CONTENT FETCH
    // ==========================================
    async getTopicContent(topic, subject = 'geral') {
        showApiStatus('loading', 'Buscando conteudo...');

        try {
            const [wikiContent, books, movies] = await Promise.all([
                this.wikipedia.getSummary(topic),
                this.openLibrary.searchBooks(`${topic} ${subject}`, 3),
                Promise.resolve(this.tmdb.getFallbackMovies(subject))
            ]);

            const sources = this.educationalSources.getSources(topic);

            showApiStatus('success', 'Conteudo carregado!');
            setTimeout(() => hideApiStatus(), 2000);

            return {
                content: wikiContent,
                books: books.slice(0, 3),
                movies: movies.slice(0, 3),
                sources
            };
        } catch (error) {
            showApiStatus('error', 'Usando conteudo local');
            setTimeout(() => hideApiStatus(), 2000);

            return {
                content: this.wikipedia.getFallbackContent(topic),
                books: this.openLibrary.getFallbackBooks(subject),
                movies: this.tmdb.getFallbackMovies(subject),
                sources: this.educationalSources.getSources(topic)
            };
        }
    }
};

// ==========================================
// HELPER FUNCTIONS FOR UI
// ==========================================
function showApiStatus(type, message) {
    const statusEl = document.getElementById('api-status');
    const textEl = document.getElementById('api-status-text');
    if (statusEl && textEl) {
        statusEl.className = `api-status visible ${type}`;
        textEl.textContent = message;
    }
}

function hideApiStatus() {
    const statusEl = document.getElementById('api-status');
    if (statusEl) {
        statusEl.classList.remove('visible');
    }
}

function showLoading(message = 'Carregando...') {
    const overlay = document.getElementById('loading-overlay');
    const text = overlay?.querySelector('.loading-text');
    if (overlay) {
        overlay.classList.add('active');
        if (text) text.textContent = message;
    }
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// Exportar para uso global
window.APIService = APIService;
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.showApiStatus = showApiStatus;
window.hideApiStatus = hideApiStatus;

console.log('API Service carregado com sucesso');
