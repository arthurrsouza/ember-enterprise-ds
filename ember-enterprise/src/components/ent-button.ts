import Component from '@glimmer/component';
import { action } from '@ember/object';

// import './ent-button.css';

interface EntButtonComponentSignatures {
  Element: HTMLTableElement;
  // We accept an array of items, one per row
  Args: {
    onClick: () => void;
  };
  
  Blocks: {
    default: [];
  };
}

export default class EntButtonComponent extends Component<EntButtonComponentSignatures> {
  @action
  onClick() {
    console.log('Enterprise DS - Button clicked');

    this.args.onClick?.()
  }
}
