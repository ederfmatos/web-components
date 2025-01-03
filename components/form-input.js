export class Input extends HTMLElement {
  constructor() {
      super();

      this.classList.add('flex', 'flex-col')

      const id = this.getAttribute('id')
      const type = this.getAttribute('type')
      const label = this.getAttribute('label')
      const placeholder = this.getAttribute('placeholder')

      this.innerHTML = `
        <label for="${id}" class="block mb-2 text-sm font-medium text-gray-900">${label}</label>
        <input type="${type}" id="${id}" placeholder="${placeholder}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      `
  }

  getAttribute(name) {
        const value = super.getAttribute(name)
        this.removeAttribute(name)
        return value
  }
}