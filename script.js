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
    // 3. SECCIÓN 11: CATÁLOGO QUIRÚRGICO "BUY A FEATURE" (31 MICRO-TAREAS)
    // Conversión:
    // ⏱️ 1 Reloj = 1 Hora
    // ☀️ 1 Sol = 1 Día de trabajo = 4 Horas
    // 📅 1 Calendario = 1 Semana = 5 Días = 20 Horas
    // =========================================================================
    const HOURS_PER_DAY = 4;
    const HOURS_PER_WEEK = 20;

    const featuresCatalog = [
        {
            category: "Módulo 1: Sistema de Acceso y Seguridad (Login Desglosado)",
            items: [
                {
                    id: "LOG-01",
                    title: "Diseño visual de la ventana de Login (Frontend)",
                    desc: "Maquetar la pantalla con el logo de Cosiam, cajas de correo y contraseña, botón de 'ojito' para ver clave escrita y adaptación a celulares.",
                    hours: 3,
                    tier: "mvp"
                },
                {
                    id: "LOG-02",
                    title: "Bóveda de usuarios y encriptación de contraseñas",
                    desc: "Programar la tabla en la base de datos para que las contraseñas se guarden cifradas (nadie, ni el programador, puede ver la clave real).",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "LOG-03",
                    title: "Motor de verificación de entrada (Correo + Contraseña)",
                    desc: "Conectar la pantalla con el servidor: revisar que el correo exista, comprobar la clave cifrada y mostrar avisos si se equivocó.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "LOG-04",
                    title: "Gafete digital de sesión activa y cierre por inactividad",
                    desc: "Crear el pase de seguridad para que no le pida contraseña en cada clic, y cerrar su sesión sola si deja la computadora abandonada.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "LOG-05",
                    title: "Semáforo de redirección y bloqueo por Rol (Admin / Proveedor / Cliente)",
                    desc: "Lógica que detecta quién acaba de entrar y lo manda a su pantalla correcta, impidiendo que un proveedor entre a la vista de un cliente.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "LOG-06",
                    title: "Candado anti-hackeo (Bloqueo tras 5 intentos fallidos)",
                    desc: "Si alguien intenta adivinar una contraseña y falla 5 veces seguidas, el sistema congela esa cuenta por 15 minutos por seguridad.",
                    hours: 3,
                    tier: "rec"
                },
                {
                    id: "LOG-07",
                    title: "Pantalla visual de '¿Olvidaste tu contraseña?'",
                    desc: "Dos pantallas adicionales: una para escribir el correo a recuperar y otra donde el usuario escribe y confirma su contraseña nueva.",
                    hours: 2,
                    tier: "rec"
                },
                {
                    id: "LOG-08",
                    title: "Envío automático de correo con enlace temporal de recuperación",
                    desc: "Conectar un servidor de correos que genere un código único con validez de 15 minutos y lo envíe al instante al usuario que olvidó su clave.",
                    hours: 6,
                    tier: "rec"
                }
            ]
        },
        {
            category: "Módulo 2: Panel de Administrador (Control Interno de Cosiam)",
            items: [
                {
                    id: "ADM-01",
                    title: "Formulario para registrar nuevos Clientes y Proveedores",
                    desc: "Pantalla donde Cosiam da de alta una empresa nueva (ej. Toyota), asigna su correo de acceso, su contraseña inicial y sube su logotipo.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "ADM-02",
                    title: "Directorio de usuarios con interruptor 'Suspender / Activar'",
                    desc: "Lista de todas las cuentas creadas con un botón para cortar el acceso en 1 segundo si un cliente o proveedor deja de trabajar con Cosiam.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "ADM-03",
                    title: "Reseteo manual de contraseña por parte del Administrador",
                    desc: "Botón rápido para que desde las oficinas de Cosiam puedan cambiarle la contraseña a un cliente si llama por teléfono pidiendo apoyo.",
                    hours: 2,
                    tier: "mvp"
                },
                {
                    id: "ADM-04",
                    title: "Publicador de Cotizaciones Nuevas asignadas por Cliente",
                    desc: "Formulario para elegir al cliente (ej. Toyota), escribir folio, descripción del servicio, monto total y adjuntar el archivo PDF de la propuesta.",
                    hours: 6,
                    tier: "mvp"
                },
                {
                    id: "ADM-05",
                    title: "Editor de cotizaciones publicadas (Actualizar precios o PDF)",
                    desc: "Poder modificar una cotización que ya se había subido (cambiar un costo o reemplazar el archivo PDF) sin tener que borrarla.",
                    hours: 4,
                    tier: "rec"
                },
                {
                    id: "ADM-06",
                    title: "Control de estatus de cotización y mantenimiento",
                    desc: "Selector para cambiar una propuesta entre: 'En Revisión', 'Aprobada', 'Mantenimiento en Proceso' o 'Servicio Concluido'.",
                    hours: 3,
                    tier: "mvp"
                },
                {
                    id: "ADM-07",
                    title: "Panel para actualizar información y costos para Proveedores",
                    desc: "Pantalla donde el administrador de Cosiam publica qué refacciones se buscan, precios de referencia o avisos operativos para proveedores.",
                    hours: 4,
                    tier: "mvp"
                }
            ]
        },
        {
            category: "Módulo 3: Portal Dinámico del Cliente (Ej. Toyota / CBRE)",
            items: [
                {
                    id: "CLI-01",
                    title: "Portada dinámica personalizada según el cliente que entra",
                    desc: "En vez de hacer una página por cliente, una sola plantilla inteligente carga el nombre, colores y logo de Toyota (o del cliente que inicie sesión).",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "CLI-02",
                    title: "Candado de aislamiento de datos entre clientes",
                    desc: "Regla de seguridad en el servidor para garantizar al 100% que Toyota jamás pueda ver cotizaciones ni precios de otro cliente.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "CLI-03",
                    title: "Tabla de Cotizaciones del Cliente con estatus en vivo",
                    desc: "Listado donde el cliente ve todas sus propuestas recibidas, fecha, monto y en qué etapa se encuentran actualmente.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "CLI-04",
                    title: "Visor de PDF integrado dentro de la página",
                    desc: "Ventana igual a la propuesta de Toyota/CBRE para que el cliente lea el documento PDF directo en pantalla sin tener que descargarlo.",
                    hours: 3,
                    tier: "mvp"
                },
                {
                    id: "CLI-05",
                    title: "Buscador de cotizaciones por folio, fecha o palabra clave",
                    desc: "Barra de búsqueda para que cuando el cliente tenga 50 cotizaciones acumuladas, encuentre la que busca en 2 segundos.",
                    hours: 3,
                    tier: "rec"
                },
                {
                    id: "CLI-06",
                    title: "Botón interactivo de 'Aprobar Cotización' o 'Pedir Ajuste'",
                    desc: "Permitir que el cliente autorice la propuesta desde su pantalla con un clic y deje un comentario escrito para Cosiam.",
                    hours: 6,
                    tier: "rec"
                },
                {
                    id: "CLI-07",
                    title: "Bitácora de Equipos de Cocina Industrial del Cliente",
                    desc: "Apartado especial donde el cliente consulta sus equipos registrados (hornos, refrigeradores, lavavajillas) y cuándo les toca mantenimiento.",
                    hours: 8,
                    tier: "full"
                }
            ]
        },
        {
            category: "Módulo 4: Portal de Proveedores",
            items: [
                {
                    id: "PRV-01",
                    title: "Pantalla de información corporativa y requisitos de Cosiam",
                    desc: "Vista exclusiva para proveedores con políticas de compra, datos de facturación y lineamientos de entrega de Grupo Cosiam.",
                    hours: 3,
                    tier: "mvp"
                },
                {
                    id: "PRV-02",
                    title: "Tabla de costos de referencia y refacciones requeridas",
                    desc: "Sección donde el proveedor visualiza los insumos o mantenimientos que Cosiam necesita cotizar o surtir.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "PRV-03",
                    title: "Buzón para que el proveedor suba su lista de precios o propuesta",
                    desc: "Formulario donde el proveedor puede enviarle a Cosiam sus costos actualizados o adjuntar su catálogo en PDF.",
                    hours: 6,
                    tier: "full"
                }
            ]
        },
        {
            category: "Módulo 5: Bitácora (Logs) y Avisos Automáticos",
            items: [
                {
                    id: "AUD-01",
                    title: "Grabadora automática de inicios de sesión (Logs de acceso)",
                    desc: "Guardar en la libreta del sistema cada vez que alguien entra: usuario, fecha, hora exacta y desde qué dispositivo entró.",
                    hours: 4,
                    tier: "rec"
                },
                {
                    id: "AUD-02",
                    title: "Grabadora de movimientos (Quién subió, editó o aprobó algo)",
                    desc: "Registrar con nombre y hora cada vez que se crea una cotización, se modifica un costo o un cliente aprueba un presupuesto.",
                    hours: 4,
                    tier: "rec"
                },
                {
                    id: "AUD-03",
                    title: "Pantalla de Auditoría para Dirección de Cosiam",
                    desc: "Tabla visual dentro del panel de administrador para que los jefes puedan revisar el historial de quién hizo qué y cuándo.",
                    hours: 5,
                    tier: "rec"
                },
                {
                    id: "AUD-04",
                    title: "Alertas automáticas por correo electrónico",
                    desc: "Enviar un correo automático a Toyota cuando Cosiam le suba una cotización nueva, y un correo a Cosiam cuando el cliente la apruebe.",
                    hours: 6,
                    tier: "full"
                }
            ]
        },
        {
            category: "Módulo 6: Servidor 24/7, Base de Datos y Respaldos",
            items: [
                {
                    id: "INF-01",
                    title: "Diseño y programación de la Base de Datos central",
                    desc: "Construir los cimientos donde se conectan los usuarios, los clientes, las cotizaciones, los costos y la bitácora sin mezclarse.",
                    hours: 6,
                    tier: "mvp"
                },
                {
                    id: "INF-02",
                    title: "Bodega segura para archivos PDF y logotipos",
                    desc: "Configurar el sistema que recibe, valida y guarda los archivos PDF en el servidor para que carguen rápido y seguros.",
                    hours: 4,
                    tier: "mvp"
                },
                {
                    id: "INF-03",
                    title: "Puesta en marcha en Servidor en la Nube (VPS) y Candado HTTPS",
                    desc: "Configurar el servidor Linux 24/7, conectar el dominio de Cosiam y activar el certificado de seguridad SSL.",
                    hours: 6,
                    tier: "mvp"
                },
                {
                    id: "INF-04",
                    title: "Programación de Respaldos Automáticos Nocturnos (Backups)",
                    desc: "Dejar programada la copia de seguridad automática todas las noches para proteger la información ante cualquier imprevisto.",
                    hours: 3,
                    tier: "rec"
                }
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

    // Convierte horas en dibujos de Soles y Relojes para cada tarjeta individual
    function getVisualCoinsForTask(hours) {
        const suns = Math.floor(hours / HOURS_PER_DAY);
        const clocks = hours % HOURS_PER_DAY;
        return '☀️'.repeat(suns) + '⏱️'.repeat(clocks);
    }

    // Texto explicativo debajo de los íconos de cada tarjeta
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

            // Calcular subtotal de horas seleccionadas en este módulo
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

    // Botón 1: Solo lo mínimo indispensable (MVP)
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

    // Botón 2: Paquete Recomendado Cosiam (MVP + Recuperar contraseñas + Bitácora + Respaldos)
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

    // Botón 3: Todo el proyecto completo (las 33 micro-tareas)
    document.getElementById('btn-select-all').addEventListener('click', () => {
        featuresCatalog.forEach(group => {
            group.items.forEach(item => selectedFeatures.add(item.id));
        });
        renderCatalog();
        updateSummary();
    });

    // Botón 4: Limpiar todo
    document.getElementById('btn-clear-all').addEventListener('click', () => {
        selectedFeatures.clear();
        renderCatalog();
        updateSummary();
    });

    // Iniciar por defecto con el Paquete Recomendado para que vean un alcance sólido
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