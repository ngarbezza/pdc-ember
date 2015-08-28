import Ember from 'ember';

var PuntajeComponent = Ember.Component.extend({
  classNames: ['rating-panel'],

  cantidadDeEstrellas: Ember.computed.alias('puntajeMaximo'),
  estrellasLlenas: Ember.computed.alias('puntaje'),

  estrellas: function () {
    var estrellasLlenas = this.rangoDeEstrellas(1, this.get('estrellasLlenas'), 'llena');
    var estrellasVacias = this.rangoDeEstrellas(this.get('estrellasLlenas') + 1, this.get('cantidadDeEstrellas'), 'vacia');
    return estrellasLlenas.concat(estrellasVacias);
  }.property('estrellasLlenas', 'cantidadDeEstrellas'),

  rangoDeEstrellas: function (start, end, type) {
    var estrellas = [];
    for (var i = start; i <= end; i++) {
      estrellas.push({puntaje: i, llena: type === 'llena'});
    }
    return estrellas;
  },

  actions: {
    cambiarPuntaje: function (nuevoPuntaje) {
      this.sendAction('setAction', {
        item: this.get('item'),
        puntaje: nuevoPuntaje
      });
    }
  }
});

export default PuntajeComponent;