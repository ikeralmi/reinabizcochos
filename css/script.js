// Funcionalidad para hacer la página más interactiva y divertida

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Animación para el título principal
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(5deg) scale(1.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        logo.addEventListener('mouseout', function() {
            this.style.transform = 'rotate(0) scale(1)';
        });
    }
    
    // Efecto para las tarjetas de recetas
    const recetaCards = document.querySelectorAll('.receta-card');
    recetaCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Solo activar si no se hizo clic en el botón
            if (!e.target.classList.contains('btn-small')) {
                const recetaId = this.id + '-receta';
                document.getElementById(recetaId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Mensaje sorpresa al hacer hover en la bio de Idaira
    const bioText = document.querySelector('.bio-text');
    if (bioText) {
        bioText.addEventListener('mouseover', function() {
            const sorpresa = document.createElement('div');
            sorpresa.className = 'mensaje-sorpresa';
            sorpresa.textContent = '¡Gracias por interesarte en mi historia! Te regalo una sonrisa virtual 😊';
            sorpresa.style.position = 'absolute';
            sorpresa.style.backgroundColor = 'var(--color-secondary)';
            sorpresa.style.color = 'white';
            sorpresa.style.padding = '10px 15px';
            sorpresa.style.borderRadius = '10px';
            sorpresa.style.boxShadow = 'var(--shadow)';
            sorpresa.style.zIndex = '100';
            sorpresa.style.opacity = '0';
            sorpresa.style.transition = 'all 0.5s ease';
            
            this.appendChild(sorpresa);
            
            // Posicionar el mensaje
            const rect = this.getBoundingClientRect();
            sorpresa.style.top = '20px';
            sorpresa.style.right = '20px';
            
            // Mostrar con animación
            setTimeout(() => {
                sorpresa.style.opacity = '1';
            }, 100);
            
            // Eliminar después de un tiempo
            setTimeout(() => {
                sorpresa.style.opacity = '0';
                setTimeout(() => {
                    sorpresa.remove();
                }, 500);
            }, 3000);
        });
    }
    
    // Efecto confeti al hacer clic en "La Reina de Los Bizcochos"
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        tagline.addEventListener('click', function() {
            lanzarConfeti();
        });
    }
    
    // Función para lanzar confeti
    function lanzarConfeti() {
        for (let i = 0; i < 100; i++) {
            const confeti = document.createElement('div');
            confeti.className = 'confeti';
            
            // Estilos para el confeti
            confeti.style.position = 'fixed';
            confeti.style.width = Math.random() * 10 + 5 + 'px';
            confeti.style.height = Math.random() * 10 + 5 + 'px';
            confeti.style.backgroundColor = getRandomColor();
            confeti.style.borderRadius = '50%';
            confeti.style.zIndex = '1000';
            confeti.style.pointerEvents = 'none';
            
            // Posición inicial
            confeti.style.left = Math.random() * window.innerWidth + 'px';
            confeti.style.top = '-20px';
            
            // Animación
            confeti.style.animation = `caida ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(confeti);
            
            // Eliminar después de la animación
            setTimeout(() => {
                confeti.remove();
            }, 5000);
        }
        
        // Añadir keyframes para la animación si no existen
        if (!document.getElementById('confetiAnimation')) {
            const style = document.createElement('style');
            style.id = 'confetiAnimation';
            style.innerHTML = `
                @keyframes caida {
                    0% {
                        transform: translateY(0) rotate(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(${window.innerHeight}px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Función para obtener un color aleatorio
    function getRandomColor() {
        const colors = [
            '#ff6b6b', // primary
            '#feca57', // secondary
            '#48dbfb', // accent
            '#1dd1a1', // success
            '#ff9ff3', // pink
            '#54a0ff'  // blue
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Efecto de hover para las imágenes de la galería
    const galeriaItems = document.querySelectorAll('.galeria-item');
    galeriaItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05) rotate(3deg)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) rotate(0)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    
    // Juego de "Encuentra el ingrediente secreto"
    const ingredienteSecreto = document.createElement('div');
    ingredienteSecreto.className = 'ingrediente-secreto';
    ingredienteSecreto.innerHTML = '🍓';
    ingredienteSecreto.style.position = 'fixed';
    ingredienteSecreto.style.fontSize = '24px';
    ingredienteSecreto.style.cursor = 'pointer';
    ingredienteSecreto.style.zIndex = '1000';
    ingredienteSecreto.style.opacity = '0.7';
    ingredienteSecreto.style.transition = 'all 0.3s ease';
    
    // Posición aleatoria
    const posicionarIngrediente = () => {
        ingredienteSecreto.style.left = Math.random() * (window.innerWidth - 50) + 'px';
        ingredienteSecreto.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    };
    
    posicionarIngrediente();
    document.body.appendChild(ingredienteSecreto);
    
    // Contador de ingredientes encontrados
    let ingredientesEncontrados = 0;
    
    // Evento de clic para el ingrediente secreto
    ingredienteSecreto.addEventListener('click', function() {
        ingredientesEncontrados++;
        
        // Mostrar mensaje
        const mensaje = document.createElement('div');
        mensaje.className = 'mensaje-ingrediente';
        mensaje.textContent = `¡Has encontrado un ingrediente secreto! (${ingredientesEncontrados})`;
        mensaje.style.position = 'fixed';
        mensaje.style.top = '20px';
        mensaje.style.left = '50%';
        mensaje.style.transform = 'translateX(-50%)';
        mensaje.style.backgroundColor = 'var(--color-success)';
        mensaje.style.color = 'white';
        mensaje.style.padding = '10px 20px';
        mensaje.style.borderRadius = '30px';
        mensaje.style.boxShadow = 'var(--shadow)';
        mensaje.style.zIndex = '1001';
        mensaje.style.opacity = '0';
        mensaje.style.transition = 'all 0.5s ease';
        
        document.body.appendChild(mensaje);
        
        // Mostrar con animación
        setTimeout(() => {
            mensaje.style.opacity = '1';
        }, 100);
        
        // Eliminar después de un tiempo
        setTimeout(() => {
            mensaje.style.opacity = '0';
            setTimeout(() => {
                mensaje.remove();
            }, 500);
        }, 3000);
        
        // Cambiar el emoji del ingrediente
        const emojis = ['🍓', '🍒', '🍰', '🧁', '🍪', '🍫', '🍯', '🥞'];
        this.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Reposicionar
        posicionarIngrediente();
        
        // Efecto de confeti si encuentra 5 ingredientes
        if (ingredientesEncontrados % 5 === 0) {
            lanzarConfeti();
            
            // Mensaje especial
            const mensajeEspecial = document.createElement('div');
            mensajeEspecial.className = 'mensaje-especial';
            mensajeEspecial.textContent = '¡Zorionak! Has encontrado 5 ingredientes secretos. ¡Idaira estaría orgullosa de ti! Me la ssssssssssubes';
            mensajeEspecial.style.position = 'fixed';
            mensajeEspecial.style.top = '50%';
            mensajeEspecial.style.left = '50%';
            mensajeEspecial.style.transform = 'translate(-50%, -50%)';
            mensajeEspecial.style.backgroundColor = 'var(--color-primary)';
            mensajeEspecial.style.color = 'white';
            mensajeEspecial.style.padding = '20px 30px';
            mensajeEspecial.style.borderRadius = 'var(--border-radius)';
            mensajeEspecial.style.boxShadow = 'var(--shadow)';
            mensajeEspecial.style.zIndex = '1002';
            mensajeEspecial.style.textAlign = 'center';
            mensajeEspecial.style.fontSize = '1.2rem';
            mensajeEspecial.style.opacity = '0';
            mensajeEspecial.style.transition = 'all 0.5s ease';
            
            document.body.appendChild(mensajeEspecial);
            
            // Mostrar con animación
            setTimeout(() => {
                mensajeEspecial.style.opacity = '1';
            }, 100);
            
            // Eliminar después de un tiempo
            setTimeout(() => {
                mensajeEspecial.style.opacity = '0';
                setTimeout(() => {
                    mensajeEspecial.remove();
                }, 500);
            }, 5000);
        }
    });
    
    // Efecto de tipeo para la sección "Sobre Mí"
    const bioParrafos = document.querySelectorAll('.bio-text p');
    if (bioParrafos.length > 0) {
        // Guardar el texto original
        const textoOriginal = bioParrafos[0].textContent;
        bioParrafos[0].textContent = '';
        
        // Función para simular tipeo
        let i = 0;
        function tipear() {
            if (i < textoOriginal.length) {
                bioParrafos[0].textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(tipear, 20);
            }
        }
        
        // Iniciar efecto cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tipear();
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(bioParrafos[0]);
    }
    
    // Botón para cambiar el tema de colores
    const temaBtn = document.createElement('button');
    temaBtn.textContent = '🎨';
    temaBtn.title = 'Cambiar tema de colores';
    temaBtn.style.position = 'fixed';
    temaBtn.style.bottom = '20px';
    temaBtn.style.right = '20px';
    temaBtn.style.width = '50px';
    temaBtn.style.height = '50px';
    temaBtn.style.borderRadius = '50%';
    temaBtn.style.backgroundColor = 'var(--color-primary)';
    temaBtn.style.color = 'white';
    temaBtn.style.border = 'none';
    temaBtn.style.fontSize = '1.5rem';
    temaBtn.style.cursor = 'pointer';
    temaBtn.style.boxShadow = 'var(--shadow)';
    temaBtn.style.zIndex = '999';
    temaBtn.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(temaBtn);
    
    // Temas de colores
    const temas = [
        {
            primary: '#ff6b6b',
            secondary: '#feca57',
            accent: '#48dbfb'
        },
        {
            primary: '#6c5ce7',
            secondary: '#fdcb6e',
            accent: '#00cec9'
        },
        {
            primary: '#e84393',
            secondary: '#55efc4',
            accent: '#74b9ff'
        },
        {
            primary: '#ff7675',
            secondary: '#a29bfe',
            accent: '#81ecec'
        }
    ];
    
    let temaActual = 0;
    
    temaBtn.addEventListener('click', function() {
        temaActual = (temaActual + 1) % temas.length;
        const nuevoTema = temas[temaActual];
        
        document.documentElement.style.setProperty('--color-primary', nuevoTema.primary);
        document.documentElement.style.setProperty('--color-secondary', nuevoTema.secondary);
        document.documentElement.style.setProperty('--color-accent', nuevoTema.accent);
        
        // Animación del botón
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0)';
        }, 300);
    });
    
    // Efecto de hover para el botón de tema
    temaBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    temaBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
