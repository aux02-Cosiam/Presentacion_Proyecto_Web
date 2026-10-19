document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const revealElements = document.querySelectorAll('.reveal');

    // =========================================================================
    // 1. NAVEGACIÓN Y MENÚ RESPONSIVE
    // =========================================================================
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        let currentSection = '';
        const scrollPosition = window.scrollY + 240;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // =========================================================================
    // 2. ANIMACIÓN DE APARICIÓN AL BAJAR (REVEAL)
    // =========================================================================
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // =========================================================================
    // 3. SECCIÓN 11: CATÁLOGO QUIRÚRGICO "BUY A FEATURE" (46 TAREAS)
    // Conversión:
    // ⏱️ 1 Reloj = 1 Hora
    // ☀️ 1 Sol = 1 Día de trabajo = 4 Horas
    // 📅 1 Calendario = 1 Semana = 5 Días = 20 Horas
    // =========================================================================
    const HOURS_PER_DAY = 4;
    const HOURS_PER_WEEK = 20;

    const featuresCatalog = [
        {
            category: "Módulo 1: Sistema de Acceso y Seguridad (Login)",
            items: [
                { id: "LOG-01", title: "Diseño visual de la ventana de Login (Responsive)", desc: "Maquetar la pantalla con identidad Cosiam, campos seguros y adaptación impecable a móviles y computadoras.", hours: 4, tier: "mvp" },
                { id: "LOG-02", title: "Bóveda de usuarios y encriptación robusta de claves", desc: "Estructura de base de datos cifrada para proteger las contraseñas con estándares de seguridad.", hours: 6, tier: "mvp" },
                { id: "LOG-03", title: "Motor de autenticación y validación en servidor", desc: "Procesar peticiones de entrada, verificar credenciales y gestionar tokens de sesión segura.", hours: 6, tier: "mvp" },
                { id: "LOG-04", title: "Gafete digital de sesión y expiración automática", desc: "Control de caducidad de sesión para proteger el acceso si una computadora se queda sin supervisión.", hours: 5, tier: "mvp" },
                { id: "LOG-05", title: "Semáforo de redirección y permisos por Rol", desc: "Reglas estrictas en backend para separar vistas de Administrador, Proveedor y Clientes.", hours: 6, tier: "mvp" },
                { id: "LOG-06", title: "Candado anti-fuerza bruta (Bloqueo temporal)", desc: "Congelar temporalmente cuentas tras múltiples intentos fallidos de acceso.", hours: 5, tier: "rec" },
                { id: "LOG-07", title: "Pantalla y flujo de recuperación de contraseña", desc: "Interfaces para solicitar restablecimiento de clave mediante enlace cifrado.", hours: 5, tier: "rec" },
                { id: "LOG-08", title: "Robot de envío de correos automáticos (Recuperación)", desc: "Conexión SMTP para despacho inmediato de correos con tokens de un solo uso y caducidad.", hours: 8, tier: "rec" }
            ]
        },
        {
            category: "Módulo 2: Panel de Administrador (Control Interno Cosiam)",
            items: [
                { id: "ADM-01", title: "Gestor de altas para Clientes y Proveedores", desc: "Formularios de registro de cuentas corporativas, asignación de credenciales y logotipos.", hours: 6, tier: "mvp" },
                { id: "ADM-02", title: "Directorio de usuarios con estatus Activo / Suspendido", desc: "Panel de control para habilitar o cortar accesos de forma instantánea.", hours: 5, tier: "mvp" },
                { id: "ADM-03", title: "Herramienta de reseteo manual de claves", desc: "Acceso interno para que soporte técnico auxilie a clientes vía telefónica.", hours: 3, tier: "mvp" },
                { id: "ADM-04", title: "Publicador dinámico de Cotizaciones y PDFs", desc: "Formulario para cargar folios, importes, asociar clientes y almacenar archivos PDF adjuntos.", hours: 8, tier: "mvp" },
                { id: "ADM-05", title: "Editor de propuestas publicadas (Modificación y reemplazo)", desc: "Capacidad de actualizar montos o sustituir documentos vigentes sin alterar la estructura.", hours: 6, tier: "rec" },
                { id: "ADM-06", title: "Gestor de estatus operativos de mantenimiento", desc: "Control de etapas (Programado, En Revisión, Concluido) reflejado en tiempo real.", hours: 5, tier: "mvp" },
                { id: "ADM-07", title: "Tablero de requerimientos para Proveedores", desc: "Publicación de avisos de refacciones y listas de referencia para socios comerciales.", hours: 5, tier: "mvp" }
            ]
        },
        {
            category: "Módulo 3: Portal Dinámico del Cliente (Ej. Toyota / CBRE)",
            items: [
                { id: "CLI-01", title: "Plantilla adaptable de branding por cliente", desc: "Carga dinámica de identidad visual y datos corporativos según la cuenta autenticada.", hours: 6, tier: "mvp" },
                { id: "CLI-02", title: "Aislamiento estricto de datos (Multi-tenant security)", desc: "Filtros a nivel base de datos que blindan la información para que ningún cliente vea datos ajenos.", hours: 6, tier: "mvp" },
                { id: "CLI-03", title: "Tabla interactiva de cotizaciones activas e historiales", desc: "Listado filtrable de propuestas con montos y estatus de servicio.", hours: 6, tier: "mvp" },
                { id: "CLI-04", title: "Visor de documentos PDF incrustado", desc: "Reproductor web integrado para lectura directa de propuestas técnicas.", hours: 5, tier: "mvp" },
                { id: "CLI-05", title: "Buscador avanzado y filtros por fecha / folio", desc: "Herramienta de localización rápida para catálogos extensos de cotizaciones.", hours: 4, tier: "rec" },
                { id: "CLI-06", title: "Módulo de aprobación y retroalimentación de propuestas", desc: "Botones de autorización de presupuestos con registro de observaciones del cliente.", hours: 8, tier: "rec" },
                { id: "CLI-07", title: "Historial y Ficha Técnica de Equipos de Cocina", desc: "Inventario de equipos industriales con fechas de mantenimiento e informes previos.", hours: 10, tier: "full" }
            ]
        },
        {
            category: "Módulo 4: Portal de Proveedores e Inventario de Refacciones",
            items: [
                { id: "PRV-01", title: "Sección de lineamientos operativos y normativos", desc: "Visualización de políticas de compra, datos de facturación y requerimientos de Cosiam.", hours: 4, tier: "mvp" },
                { id: "PRV-02", title: "Consulta de insumos y refacciones solicitadas", desc: "Listado de requerimientos técnicos vigentes para cotización de proveedores.", hours: 5, tier: "mvp" },
                { id: "PRV-03", title: "Buzón de carga de propuestas de suministro", desc: "Interfaz para recepción de listas de precios y cotizaciones externas de insumos.", hours: 8, tier: "full" },
                { id: "PRV-04", title: "Control de Inventario y Refacciones por Cliente", desc: "Módulo para rastrear stock de refacciones críticas asignadas a cada planta industrial.", hours: 10, tier: "full" }
            ]
        },
        {
            category: "Módulo 5: Bitácora (Logs), Auditoría y Reportes de Servicio",
            items: [
                { id: "AUD-01", title: "Registro automático de accesos al sistema", desc: "Guardar bitácora inalterable de cada inicio de sesión con marca de tiempo e IP.", hours: 5, tier: "rec" },
                { id: "AUD-02", title: "Auditoría de operaciones críticas (Creación/Edición)", desc: "Monitoreo de qué usuario generó, modificó o aprobó una cotización.", hours: 6, tier: "rec" },
                { id: "AUD-03", title: "Visor gerencial de bitácoras para Dirección", desc: "Panel de consulta con filtros de búsqueda para supervisión administrativa.", hours: 6, tier: "rec" },
                { id: "AUD-04", title: "Generador y Visor de Reportes de Servicio Digitales", desc: "Módulo para emitir, firmar digitalmente y consultar reportes de mantenimiento en campo.", hours: 12, tier: "full" }
            ]
        },
        {
            category: "Módulo 6: Automatización en WhatsApp Business",
            items: [
                { id: "WA-01", title: "Conexión con API de WhatsApp Business (Meta Cloud API)", desc: "Configuración del canal de comunicación oficial para envío y recepción de mensajes automáticos.", hours: 8, tier: "rec" },
                { id: "WA-02", title: "Robot de notificaciones de cotizaciones nuevas", desc: "Envío automático de alertas por WhatsApp al cliente cuando Cosiam sube una propuesta.", hours: 6, tier: "rec" },
                { id: "WA-03", title: "Bot de aprobación rápida de presupuestos por chat", desc: "Permitir que el cliente responda comandos rápidos (ej. aprobar) para actualizar el sistema.", hours: 10, tier: "full" }
            ]
        },
        {
            category: "Módulo 7: Videos Interactivos Generados con IA",
            items: [
                { id: "AI-01", title: "Integración de reproductor multimedia inteligente", desc: "Estructura web para alojar y reproducir contenidos audiovisuales institucionales y tutoriales.", hours: 4, tier: "rec" },
                { id: "AI-02", title: "Conexión con generadores de video por IA (Avatares y voz)", desc: "Automatización de guiones para crear explicaciones de propuestas personalizadas con avatares virtuales.", hours: 10, tier: "full" }
            ]
        },
        {
            category: "Módulo 8: Servidor 24/7, Base de Datos y Modelado 3D",
            items: [
                { id: "INF-01", title: "Diseño y normalización de la Base de Datos relacional", desc: "Estructuración de tablas para usuarios, permisos, catálogos y transacciones.", hours: 8, tier: "mvp" },
                { id: "INF-02", title: "Gestor de almacenamiento y seguridad para archivos PDF", desc: "Controlador de subida y validación de documentos adjuntos en servidor.", hours: 6, tier: "mvp" },
                { id: "INF-03", title: "Despliegue en Servidor Cloud (VPS) y Certificado SSL", desc: "Configuración de entorno de producción 24/7, dominio y candado de seguridad HTTPS.", hours: 8, tier: "mvp" },
                { id: "INF-04", title: "Automatización de copias de respaldo (Backups)", desc: "Programación de respaldos periódicos inmutables para protección de datos.", hours: 5, tier: "rec" },
                { id: "3D-01", title: "Integración del motor 3D interactivo en la plataforma", desc: "Montaje del visor web (model-viewer) con controles de órbita, zoom y luces.", hours: 6, tier: "rec" },
                { id: "3D-02", title: "Modelado geométrico de equipos de cocina industrial", desc: "Construcción 3D detallada de componentes (ej. hornos o equipos iVario).", hours: 12, tier: "full" },
                { id: "3D-03", title: "Texturizado PBR realista (Acero inoxidable y acabados)", desc: "Aplicación de materiales físicos avanzados para realismo visual.", hours: 8, tier: "full" },
                { id: "3D-04", title: "Optimización de geometría y exportación ligera (.GLB)", desc: "Reducción de peso y polígonos para asegurar fluidez de carga en navegadores.", hours: 6, tier: "full" }
            ]
        }
    ];

    const catalogContainer = document.getElementById('baf-catalog');
    const totalHoursEl = document.getElementById('total-hours');
    const totalDaysEl = document.getElementById('total-days');
    const totalWeeksEl = document.getElementById('total-weeks');
    const tokensContainer = document.getElementById('tokens-container');
    const selectedCountEl = document.getElementById('selected-count');
    const totalFeaturesCountEl = document.getElementById('total-features-count');

    const selectedFeatures = new Set();
    let totalFeatureItems = 0;

    function getVisualCoinsForTask(hours) {
        const suns = Math.floor(hours / HOURS_PER_DAY);
        const clocks = hours % HOURS_PER_DAY;
        return '☀️'.repeat(suns) + '⏱️'.repeat(clocks);
    }

    function getTextEquivalent(hours) {
        const suns = Math.floor(hours / HOURS_PER_DAY);
        const clocks = hours % HOURS_PER_DAY;
        const parts = [];
        if (suns > 0) parts.push(`${suns} ${suns === 1 ? 'Día' : 'Días'}`);
        if (clocks > 0) parts.push(`${clocks} ${clocks === 1 ? 'Hora' : 'Horas'}`);
        return parts.join(' y ');
    }

    function renderCatalog() {
        catalogContainer.innerHTML = '';
        totalFeatureItems = 0;

        featuresCatalog.forEach(group => {
            const block = document.createElement('div');
            block.className = 'baf-category-block';

            let moduleSelectedHours = 0;
            let moduleTotalHours = 0;
            group.items.forEach(item => {
                moduleTotalHours += item.hours;
                if (selectedFeatures.has(item.id)) {
                    moduleSelectedHours += item.hours;
                }
            });

            const headerDiv = document.createElement('div');
            headerDiv.className = 'baf-category-header';
            headerDiv.innerHTML = `
                <h4 class="baf-category-title">${group.category}</h4>
                <span class="baf-category-subtotal">Subtotal módulo: ${moduleSelectedHours} de ${moduleTotalHours} hrs</span>
            `;
            block.appendChild(headerDiv);

            group.items.forEach(item => {
                totalFeatureItems++;
                const isSelected = selectedFeatures.has(item.id);

                let badgePill = '';
                if (item.tier === 'mvp') {
                    badgePill = '<span class="mvp-pill">Indispensable (Fase 1)</span>';
                } else if (item.tier === 'rec') {
                    badgePill = '<span class="rec-pill">Recomendado</span>';
                }

                const card = document.createElement('div');
                card.className = `feature-item-card ${isSelected ? 'selected' : ''}`;

                card.innerHTML = `
                    <div class="feature-left">
                        <div class="feature-checkbox">${isSelected ? '✓' : ''}</div>
                        <div class="feature-info">
                            <h5>
                                <span class="task-code">${item.id}</span>
                                ${item.title}
                                ${badgePill}
                            </h5>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                    <div class="feature-cost-badge">
                        <span class="feature-visual-coins">${getVisualCoinsForTask(item.hours)}</span>
                        <span class="feature-cost-hours">${item.hours} horas totales</span>
                        <span class="feature-cost-sub">(${getTextEquivalent(item.hours)})</span>
                    </div>
                `;

                card.addEventListener('click', () => {
                    if (selectedFeatures.has(item.id)) {
                        selectedFeatures.delete(item.id);
                    } else {
                        selectedFeatures.add(item.id);
                    }
                    renderCatalog();
                    updateSummary();
                });

                block.appendChild(card);
            });

            catalogContainer.appendChild(block);
        });

        totalFeaturesCountEl.textContent = totalFeatureItems;
    }

    function updateSummary() {
        let sumHours = 0;

        featuresCatalog.forEach(group => {
            group.items.forEach(item => {
                if (selectedFeatures.has(item.id)) {
                    sumHours += item.hours;
                }
            });
        });

        const totalDays = (sumHours / HOURS_PER_DAY).toFixed(1).replace('.0', '');
        const totalWeeks = (sumHours / HOURS_PER_WEEK).toFixed(1).replace('.0', '');

        totalHoursEl.textContent = sumHours;
        totalDaysEl.textContent = totalDays;
        totalWeeksEl.textContent = totalWeeks;
        selectedCountEl.textContent = selectedFeatures.size;

        if (sumHours === 0) {
            tokensContainer.innerHTML = `<span class="empty-tokens-msg">Haz clic en las micro-tareas de la izquierda para ver cuántas semanas, días y horas toma construirlas...</span>`;
            return;
        }

        const calendarsCount = Math.floor(sumHours / HOURS_PER_WEEK);
        const remainingAfterWeeks = sumHours % HOURS_PER_WEEK;
        const sunsCount = Math.floor(remainingAfterWeeks / HOURS_PER_DAY);
        const clocksCount = remainingAfterWeeks % HOURS_PER_DAY;

        let tokensHTML = '';

        if (calendarsCount > 0) {
            tokensHTML += `
                <div class="token-row">
                    <strong>${calendarsCount} Semana(s) de trabajo (${calendarsCount * 20} hrs):</strong>
                    <div class="token-emojis">${'📅'.repeat(calendarsCount)}</div>
                </div>
            `;
        }

        if (sunsCount > 0) {
            tokensHTML += `
                <div class="token-row">
                    <strong>+ ${sunsCount} Día(s) de trabajo (${sunsCount * 4} hrs):</strong>
                    <div class="token-emojis">${'☀️'.repeat(sunsCount)}</div>
                </div>
            `;
        }

        if (clocksCount > 0) {
            tokensHTML += `
                <div class="token-row">
                    <strong>+ ${clocksCount} Hora(s) suelta(s):</strong>
                    <div class="token-emojis">${'⏱️'.repeat(clocksCount)}</div>
                </div>
            `;
        }

        tokensContainer.innerHTML = tokensHTML;
    }

    document.getElementById('btn-select-mvp').addEventListener('click', () => {
        selectedFeatures.clear();
        featuresCatalog.forEach(group => {
            group.items.forEach(item => {
                if (item.tier === 'mvp') selectedFeatures.add(item.id);
            });
        });
        renderCatalog();
        updateSummary();
    });

    const btnRec = document.getElementById('btn-select-rec');
    if (btnRec) {
        btnRec.addEventListener('click', () => {
            selectedFeatures.clear();
            featuresCatalog.forEach(group => {
                group.items.forEach(item => {
                    if (item.tier === 'mvp' || item.tier === 'rec') {
                        selectedFeatures.add(item.id);
                    }
                });
            });
            renderCatalog();
            updateSummary();
        });
    }

    document.getElementById('btn-select-all').addEventListener('click', () => {
        featuresCatalog.forEach(group => {
            group.items.forEach(item => selectedFeatures.add(item.id));
        });
        renderCatalog();
        updateSummary();
    });

    document.getElementById('btn-clear-all').addEventListener('click', () => {
        selectedFeatures.clear();
        renderCatalog();
        updateSummary();
    });

    featuresCatalog.forEach(group => {
        group.items.forEach(item => {
            if (item.tier === 'mvp' || item.tier === 'rec') {
                selectedFeatures.add(item.id);
            }
        });
    });

    renderCatalog();
    updateSummary();
});