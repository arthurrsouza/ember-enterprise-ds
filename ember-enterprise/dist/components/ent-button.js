import Component from '@glimmer/component';
import { action } from '@ember/object';
import { precompileTemplate } from '@ember/template-compilation';
import { n } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<button class=\"ent-button\" {{on \'click\' this.onClick}}>\n  {{yield}}\n</button>\n");

class EntButtonComponent extends Component {
  onClick() {
    console.log('Enterprise DS - Button clicked');
    this.args.onClick?.();
  }
  static {
    n(this.prototype, "onClick", [action]);
  }
}
setComponentTemplate(TEMPLATE, EntButtonComponent);

export { EntButtonComponent as default };
//# sourceMappingURL=ent-button.js.map
