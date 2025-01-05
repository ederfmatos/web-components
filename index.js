import { MultiSelect } from './components/form-multi-select.js'
import { Badge } from './components/ui-badge.js'
import { Input } from './components/form-input.js'
import { Select } from './components/form-select.js';

customElements.define('ui-badge', Badge);

customElements.define('form-input', Input);
customElements.define('form-multi-select', MultiSelect);
customElements.define('form-select', Select);