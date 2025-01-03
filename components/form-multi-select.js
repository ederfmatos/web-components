export class MultiSelect extends HTMLElement {
  selectedItems = {}

  constructor() {
      super();

      const label = this.getAttribute('label')
      const name = this.getAttribute('name')
      const options = Array.from(this.querySelectorAll('option'));
      this.setAttribute('role', 'div')

      this.classList.add('flex', 'flex-col', 'flex-1', 'relative')

      this.innerHTML = `
          <label class="block mb-2 text-sm font-medium text-gray-900">${label}</label>
          <label class="relative">
              <input type="checkbox" class="hidden peer" name="${label}" />
              <div name="selectedText" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 cursor-pointer">
                  Selecione...
              </div>
              <div class="mt-2 rounded absolute bg-white border p-2 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto">
                  <ul name="select-options" class="list-none flex flex-col overflow-y-auto max-h-[40vh]">
                      ${options.map(option => `
                            <label class="flex items-center cursor-pointer p-2 hover:bg-blue-100">
                                <input type="checkbox" name="${name}" value="${option.value}" class="cursor-pointer" data-label="${option.textContent}" />
                                <span class="ml-2 text-sm text-gray-900">${option.textContent}</span>
                            </label>
                      `).join('')}
                  </ul>
              </div>
          </label>
      `;

      document.addEventListener('click', (event) => {
          const checkbox = this.querySelector(`.hidden.peer`)
          if (!checkbox.checked) return

          if (!this.contains(event.target)) {
              checkbox.checked = false
              return
          }

          if (event.target.name !== name) return

          if (event.target.checked) {
              this.selectedItems[event.target.value] = event.target.getAttribute('data-label')
          } else {
              delete this.selectedItems[event.target.value]
          }

          this.updateSelectText()
      });
  }

  updateSelectText() {
      const selectText = this.querySelector('[name=selectedText]')
      const selectedItems = Object.values(this.selectedItems)

      if (selectedItems.length === 0) {
          selectText.innerText = 'Selecione...'
      } else if (selectedItems.length > 2) {
          selectText.innerText = `${selectedItems.length} selecionados`
      } else {
          selectText.innerText = selectedItems.join(', ')
      }
  }

  setItems(items) {
      const optionsContainer = this.querySelector('[name=select-options]')
      const name = this.getAttribute('name')
      optionsContainer.innerHTML = items.map(item => `
            <label class="flex items-center cursor-pointer p-2 hover:bg-blue-100">
                <input type="checkbox" name="${name}" value="${item}" class="cursor-pointer" data-label="${item}" />
                <span class="ml-2 text-sm text-gray-900">${item}</span>
            </label>
      `).join('')
  }

  get items() {
      return Object.keys(this.selectedItems)
  }

  clear() {
      this.querySelectorAll('.selected').forEach(tag => tag.classList.remove('selected'))
  }
}