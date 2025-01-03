const badgeColors = {};
const colorPalette = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1', '#fd7e14', '#20c997', '#e83e8c', '#6610f2'];

export class Badge extends HTMLElement {
    constructor() {
        super();

        const text = this.textContent
         if (!badgeColors[text]) {
            badgeColors[text] = colorPalette[Object.keys(badgeColors).length % colorPalette.length];
        }

        this.classList.add('text-white', 'rounded-full', 'px-2', 'py-1', 'inline-block', 'text-sm', 'mr-1', 'mb-1', 'font-medium', 'badge')
        this.style.backgroundColor = badgeColors[text]
        this.setAttribute('role', 'span')
    }
}