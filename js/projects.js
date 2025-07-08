// projects.js - Versão corrigida
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM totalmente carregado - iniciando carga de projetos');
    
    const projects = [
        {
            id: 1,
            title: "C++ Image converter",
            description: "An .png converter into .svg to increase image scalability and quality",
            detailedDescription: `
                <p>This project is a high-performance image converter that transforms PNG files into scalable SVG vector graphics.</p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Supports batch processing of multiple files</li>
                    <li>Preserves transparency and color accuracy</li>
                    <li>Customizable output resolution</li>
                </ul>
                <h4>Technologies Used:</h4>
                <p>C++17, STL, libpng, custom vectorization algorithms</p>
            `,
            tags: ["C++", "C"],
            image: "",
            demoUrl: "#",
            codeUrl: "https://github.com/TiagoAfonseca11/cpp-png-converter"
        },
        // ... other projects with similar detailedDescription
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