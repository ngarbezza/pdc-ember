import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('artista');
  },

  afterModel: function () {
    Ember.$(document).attr('title', 'Artistas - Rock & Roll');
  },

  actions: {
    crearArtista: function () {
      var route = this,
          controller = this.get('controller');

      var artista = this.store.createRecord('artista', {
        nombre: controller.get('nuevoNombre')
      });
      artista.save().then(function () {
        controller.set('nuevoNombre', '');
        route.transitionTo('artistas.artista.canciones', artista);
      })['catch'](function (error) {
        console.error(error);
      });
    }
  }
});