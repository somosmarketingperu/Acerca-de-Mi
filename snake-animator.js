/**
 * Creates and manages a snake animation that follows text being typed.
 * The snake is drawn on an SVG canvas behind the text.
 *
 * @param {HTMLElement} containerElement - The parent container (e.g., .code-block) where the animation occurs.
 * @returns {function(HTMLElement): void} An update function to be called with each new character element.
 */
export function createSnakeFor(containerElement) {
    // 1. Create the SVG canvas
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('snake-canvas');
    // Style the SVG to overlay the container but stay behind the text
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '0'; // Behind the text (which is z-index 1)

    // 2. Create the snake path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'snake-path'); // For styling via CSS
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-width', '2.5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    svg.appendChild(path);
    // Prepend to ensure it's at the bottom of the stacking context within the container
    containerElement.prepend(svg);

    let pathData = '';
    const containerRect = containerElement.getBoundingClientRect();
    let lastPoint = { x: 0, y: 0 };

    // 3. Return the update function
    return function updateSnake(charElement) {
        if (!charElement) return;

        const charRect = charElement.getBoundingClientRect();
        
        // Calculate the center of the character relative to the container
        const x = charRect.left - containerRect.left + charRect.width / 2;
        const y = charRect.top - containerRect.top + charRect.height / 2;

        // To avoid jagged lines, only add a new point if it's moved a certain distance
        const distance = Math.sqrt(Math.pow(x - lastPoint.x, 2) + Math.pow(y - lastPoint.y, 2));
        if (distance < 5 && pathData !== '') return; // Threshold to prevent too many points

        lastPoint = { x, y };

        if (pathData === '') {
            pathData = `M ${x} ${y}`;
        } else {
            pathData += ` L ${x} ${y}`;
        }
        path.setAttribute('d', pathData);
    };
}
