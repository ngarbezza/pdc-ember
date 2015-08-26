import Ember from 'ember';

export default Ember.Controller.extend({
  artista: null,
  sortOptions: [
    {id: "puntaje:desc,titulo:asc", name: "Mejores"},
    {id: "titulo:asc", name: "Por título (asc)"},
    {id: "titulo:desc", name: "Por título (desc)"},
    {id: "puntaje:asc", name: "Por puntaje (asc)"},
    {id: "puntaje:desc", name: "Por puntaje (desc)"}
  ],
  selectedSort: 'puntaje:desc,titulo:asc',

  sortProperties: function () {
    var selected = this.get('selectedSort');
    return (selected ? selected.split(',') : ['puntaje:desc', 'titulo:asc']);
  }.property('selectedSort'),

  cancionesOrdenadas: Ember.computed.sort('model', 'sortProperties'),

  nuevaCancionPlaceholder: function () {
    return 'Nueva canción de ' + this.get('artista.nombre');
  }.property('artista.nombre'),

  seEstaCreandoCancion: false,
  puedeCrearCancion: function () {
    return this.get('seEstaCreandoCancion') || this.get('model.length');
  }.property('seEstaCreandoCancion', 'model.length'),

  actions: {
    habilitarCreacionDeCancion: function () {
      this.set('seEstaCreandoCancion', true);
    }
  }

});