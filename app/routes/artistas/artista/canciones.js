import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('artistas.artista').get('canciones');
  },

  afterModel: function () {
    var nombreArtista = this.modelFor('artistas.artista').get('nombre');
    Ember.$(document).attr('title', 'Canciones de ' + nombreArtista + ' - Rock & Roll');
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('artista', this.modelFor('artistas.artista'));
  },

  resetController: function (controller) {
    controller.setProperties({
      nuevoTitulo: '',
      seEstaCreandoCancion: false
    });
  },

  actions: {
    crearCancion: function () {
      var controller = this.get('controller'),
          artista = this.modelFor('artistas.artista');

      var cancion = this.store.createRecord('cancion', {
        titulo: controller.get('nuevoTitulo'),
        artista: artista
      });
      cancion.save().then(function () {
        controller.set('nuevoTitulo', '');
      })['catch'](function (error) {
        console.error(error);
      });
    },

    cambiarPuntaje: function (params) {
      var cancion = params.item,
          puntaje = params.puntaje;

      if (cancion.get('puntaje') === puntaje) {
        puntaje = null;
      }
      cancion.set('puntaje', puntaje);
      return cancion.save();
    }
  }
});

