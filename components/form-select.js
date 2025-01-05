export class Select extends HTMLElement {
  constructor() {
    super();

    const id = this.getAttribute("id");
    const label = this.getAttribute("label");

    this.innerHTML = `
          <label for="${id}" class="block mb-2 text-sm font-medium text-gray-900">${label}</label>
          <select id="${id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            ${this.innerHTML}
          </select>
        `;
  }

  getAttribute(name) {
    const value = super.getAttribute(name);
    this.removeAttribute(name);
    return value;
  }

  get value() {
    return this.querySelector("select").value;
  }

  clear() {
    this.querySelector("select").value = "";
  }
}
