import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { module, test } from 'qunit';

module(
  'Integration | Component | ent-button-in-template-tag',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      await render(hbs`
        <EntButtonInTemplateTag />
      `);

      assert
        .dom('.tomster img')
        .hasAttribute(
          'alt',
          'Under construction',
          'The image has an alternate text.'
        )
        .hasAttribute(
          'src',
          '/ember-ent-button/images/construction.png',
          'The image source is correct.'
        );
    });
  }
);
