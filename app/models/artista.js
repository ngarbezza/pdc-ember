import DS from 'ember-data';

var Artista = DS.Model.extend({
  nombre: DS.attr('string'),
  canciones: DS.hasMany('cancion', {async: true})
});

Artista.reopenClass({
  FIXTURES: [
    {id: 1, nombre: 'Divididos', canciones: [1, 2, 3]},
    {id: 2, nombre: 'La Renga', canciones: [4, 5]}
  ]
});

export default Artista;
