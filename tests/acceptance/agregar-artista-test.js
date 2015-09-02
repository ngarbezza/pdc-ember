import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'pdc/tests/helpers/start-app';

module('Acceptance | agregar artista', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('agregar artista exitosamente', function(assert) {
  visit('/artistas');
  fillIn('.new-band', 'Los Redondos');
  click('.new-band-button');

  andThen(function() {
    assert.equal(find('.nombre-artista:last').text(), 'Los Redondos');
  });
});
