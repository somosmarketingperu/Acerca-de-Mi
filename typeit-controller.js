import { createSnakeFor } from './snake-animator.js';

const neonColors = ['neon-red', 'neon-orange', 'neon-yellow', 'neon-green', 'neon-blue', 'neon-indigo', 'neon-violet'];
let colorIndex = 0;

/**
 * Creates and executes a TypeIt animation instance, now with a snake!
 * @param {string} elementId - The ID of the element to type into.
 * @param {object} config - The TypeIt configuration object.
 * @returns {Promise<void>} A promise that resolves when the animation is complete.
 */
function runTypeIt(elementId, config) {
    return new Promise((resolve, reject) => {
        const el = document.getElementById(elementId);
        if (!el) {
            console.error(`Element with ID '${elementId}' not found.`);
            return reject(`Element with ID '${elementId}' not found.`);
        }

        const codeBlock = el.closest('.code-block');
        if (!codeBlock) {
            console.error(`Could not find parent .code-block for element '${elementId}'.`);
            return reject(`Could not find parent .code-block for element '${elementId}'.`);
        }

        // Create the snake and get its update function
        const updateSnake = createSnakeFor(codeBlock);
        el.classList.add('rainbow-text-flow');

        new TypeIt(el, {
            ...config,
            afterChar: (char, instance) => {
                // Find the last typed character element and update the snake
                const lastCharElement = el.querySelector('.ti-char:last-of-type');
                if (lastCharElement) {
                    updateSnake(lastCharElement);
                }
            },
            afterComplete: (instance) => {
                el.classList.remove('rainbow-text-flow');
                
                const chosenColor = neonColors[colorIndex % neonColors.length];
                el.classList.add(chosenColor, 'font-bold');
                colorIndex++;

                instance.destroy();
                resolve();
            }
        }).go();
    });
}

/**
 * The main controller for the animation sequence.
 */
export async function runAnimationSequence() {
    const baseConfig = {
        speed: 90,
        startDelay: 200,
        waitUntilVisible: true,
        cursorChar: "▋",
        lifeLike: true,
    };

    try {
        await runTypeIt('summary-text', {
            ...baseConfig,
            speed: 50,
            strings: "Soy un apasionado por la innovación tecnológica y he logrado optimizar procesos y crear sistemas robustos. Mi experiencia como desarrollador Full Stack incluye web scraping con Python, conocimientos en Google Cloud Platform y SEO. Estoy listo para liderar proyectos digitales de alto impacto.",
        });

        await runTypeIt('job1-title', {
            ...baseConfig,
            strings: 'const PRACTICANTE = {<br>  empresa: "UNIDAD DE GESTION EDUCATIVA N 03",<br>  periodo: "ago. 2023 - nov. 2023",<br>};',
        });
        
        await runTypeIt('job2-title', {
            ...baseConfig,
            strings: 'const ADMINISTRADOR = {<br>  empresa: "NEGOCIO INDEPENDIENTE",<br>  periodo: "ene. 2018 - jul. 2023",<br>};',
        });

        await runTypeIt('job3-title', {
            ...baseConfig,
            strings: 'const ANALISTA_JGSAC = {<br>  empresa: "IMPORT EXPORT JG SAC",<br>  periodo: "mar. 2015 - dic. 2021",<br>  logros: [<br>    "Supervisión y diseño de soluciones tech.",<br>    "Implementación de S/W y H/W.",<br>    "Reducción del 40% en adquisición de insumos.",<br>    "Gestión de proyectos y mejora continua."<br>  ]<br>};',
        });

        await runTypeIt('education-title', {
            ...baseConfig,
            strings: 'const UNIVERSIDAD = {<br>  institucion: "Universidad de Lima",<br>  carrera: "Ingeniería de Sistemas (10mo ciclo)",<br>  periodo: "2019 - Presente",<br>};',
        });

        await runTypeIt('certs-title', {
            ...baseConfig,
            strings: 'const CERTIFICADOS = {<br>  SeguridadElectronica: "INICTEL-UNI (2023)",<br>  PythonEssentials: "PCAP Cisco (2022)",<br>};',
        });
    } catch (error) {
        console.error("An error occurred during the animation sequence:", error);
    }
}
