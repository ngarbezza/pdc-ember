import DS from 'ember-data';

export default DS.Model.extend({
  titulo: DS.attr('string'),
  puntaje: DS.attr('number'),
  artista: DS.belongsTo('artista', {async: false})
});