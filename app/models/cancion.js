import DS from 'ember-data';

var Cancion = DS.Model.extend({
  titulo: DS.attr('string'),
  puntaje: DS.attr('number'),
  artista: DS.belongsTo('artista', {async: true})
});

Cancion.reopenClass({
  FIXTURES: [
    // Canciones de Divididos
    {id: 1, titulo: 'Paisano de Hurlingham', puntaje: 4},
    {id: 2, titulo: 'Luca', puntaje: 4},
    {id: 3, titulo: 'El Arriero', puntaje: 5},
    // Canciones de La Renga
    {id: 4, titulo: 'El final es en donde parti', puntaje: 4},
    {id: 5, titulo: 'La razon que te demora', puntaje: 3}
  ]
});

export default Cancion;
