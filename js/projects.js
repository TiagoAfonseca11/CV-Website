// projects.js - Versão corrigida
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM totalmente carregado - iniciando carga de projetos');
    
    const projects = [
        {
            id: 1,
            title: "Projeto #1",
            description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
            tags: ["React", "Node.js", "MongoDB", "Redux"],
            image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            demoUrl: "#",
            codeUrl: "https://github.com/FEUP-LTW-2025/ltw-project-ltw03g02"
        },
        {
            id: 2,
            title: "Projeto #2",
            description: "A productivity app built with Vue.js and Firebase for real-time collaboration.",
            tags: ["Vue.js", "Firebase", "JavaScript", "CSS3"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 3,
            title: "Projeto #3",
            description: "Real-time weather application with geolocation and forecast features.",
            tags: ["JavaScript", "API", "Chart.js", "HTML5"],
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 4,
            title: "Projeto #4",
            description: "Responsive portfolio website with modern animations and smooth scrolling.",
            tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 5,
            title: "Projeto #5",
            description: "Real-time chat app with Socket.io, user authentication and file sharing.",
            tags: ["Socket.io", "Node.js", "Express", "MongoDB"],
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            id: 6,
            title: "Projeto #6",
            description: "Recipe search app with ingredient-based filtering and nutritional information.",
            tags: ["React", "API Integration", "Styled Components", "Redux"],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            demoUrl: "#",
            codeUrl: "#"
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
                        <a href="${project.demoUrl}" target="_blank">More</a>
                        <a href="${project.codeUrl}" target="_blank">Code</a>
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