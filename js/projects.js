// projects.js - Versão corrigida
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM totalmente carregado - iniciando carga de projetos');
    
    const projects = [
        {
            id: 1,
            title: "PNG to SVG Converter",
            description: "A C/C++ program that converts .png into .svg",
            tags: ["C++", "C"],
            image: "assets/c.webp.png",
            demoUrl: "project1.html",
            codeUrl: "https://github.com/TiagoAfonseca11/cpp-png-converter"
        },
        {
            id: 2,
            title: "Minixsweeper Game",
            description: "Minesweeper game built with C on Minix3, utilizing low-level device programming",
            tags: ["C", "Minix3"],
            image: "assets/images.png",
            demoUrl: "project2.html",
            codeUrl: "https://github.com/TiagoAfonseca11/Minixsweeper/tree/main/proj/src"
        },
        {
            id: 3,
            title: "Freelancer Platform",
            description: "A full-featured freelancer marketplace connecting clients and service providers, with integrated RESTful API and database management.",
            tags: ["JavaScript", "PHP", "SQL", "HTML5", "CSS"],
            image: "assets/sql.webp",
            demoUrl: "project3.html",
            codeUrl: "https://github.com/TiagoAfonseca11/Freelancer-Website"
        },
        {
            id: 4,
            "title": "Lost & Found App",
            "description": "Flutter app for managing lost and found items, with Firebase integration, responsive UI, and secure user authentication.",          
            tags: ["Flutter", "Dart", "Firebase"],
            image: "assets/flutter.png",
            demoUrl: "projeto4.html",
            codeUrl: "https://github.com/TiagoAfonseca11/Lost-and-Founds-App"
        },
        {
            id: 5,
            title: "Best-Route Planner with Dijkstra & Graph Algorithms",
            description: "C++ application that computes optimal routes using Dijkstra and other graph algorithms, supported by custom data structures and unit tests.",
            tags: ["C++", "C", "GoogleTest"],
            image: "assets/route.gif",
            demoUrl: "projeto5.html",
            codeUrl: "https://github.com/TiagoAfonseca11/Best-Route---Dijkstra-s"
        },
        {
            id: 6,
            title: "NBA Predictor 2025-26",
            description: "Prediction model in Python that analyzes NBA statistics to forecast championship probabilities and rank teams for the 2025-26 season.",
            tags: ["Python", "Machine Learning", "Data Analysis", "NBA API"],
            image: "assets/Python-logo-notext.svg.png",
            demoUrl: "projeto6.html",
            codeUrl: "https://github.com/TiagoAfonseca11/NBA-Champion-predictor"
        }
    ];

    function renderProjects() {
        const container = document.getElementById('projects-container');
        
        if (!container) {
            console.error('Container projects-container não encontrado!');
            return;
        }

        console.log('Renderizando projetos...', projects.length, 'projetos encontrados');
        
        // Limpar container antes de adicionar novos projetos
        container.innerHTML = '';
        
        // Criar HTML para cada projeto
        const projectsHTML = projects.map((project, index) => `
            <div class="project-card animate-on-scroll" style="transition-delay: ${index * 0.1}s">
                <div class="project-image" style="background-image: url('${project.image}')"></div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demoUrl}">More</a>
                        <a href="${project.codeUrl}">Code</a>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Inserir HTML no container
        container.innerHTML = projectsHTML;
        
        console.log('Projetos renderizados com sucesso!');
        
        // Re-inicializar as animações para os novos elementos
        const newAnimateElements = container.querySelectorAll('.animate-on-scroll');
        if (window.observer) {
            newAnimateElements.forEach(element => {
                window.observer.observe(element);
            });
        }
    }

    // Tentar renderizar imediatamente
    renderProjects();
    
    // Fallback adicional
    setTimeout(() => {
        console.log('Tentativa de fallback após 500ms');
        renderProjects();
    }, 500);
    
    // Fallback final
    setTimeout(() => {
        console.log('Tentativa final após 1000ms');
        renderProjects();
    }, 1000);
});