import DS from 'ember-data';

var Artista = DS.Model.extend({
  nombre: DS.attr('string'),
  canciones: DS.hasMany('cancion', {async: false})
});

Artista.reopenClass({
  FIXTURES: [
    {id: 1, nombre: 'Charly García'},
    {id: 2, nombre: 'Luis A. Spinetta'}
  ]
});

export default Artista;