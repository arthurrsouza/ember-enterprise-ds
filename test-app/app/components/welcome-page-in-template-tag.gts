import type { TOC } from '@ember/component/template-only';
import { EntButton } from 'ember-enterprise';

interface EntButtonInTemplateTagSignature {
  Args: Record<string, never>;
}

const EntButtonInTemplateTagComponent: TOC<EntButtonInTemplateTagSignature> =
  <template>
    <EntButton />
  </template>

export default EntButtonInTemplateTagComponent;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    EntButtonInTemplateTag: typeof EntButtonInTemplateTagComponent;
  }
}
