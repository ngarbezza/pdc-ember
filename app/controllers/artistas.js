import Ember from 'ember';

export default Ember.Controller.extend({
  nuevoNombre: '',
  disabled: function () {
    return Ember.isEmpty(this.get('nuevoNombre'));
  }.property('nuevoNombre')
});