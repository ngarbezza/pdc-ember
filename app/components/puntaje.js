import Ember from 'ember';

var PuntajeComponent = Ember.Component.extend({
  classNames: ['rating-panel'],

  cantidadDeEstrellas: Ember.computed.alias('puntajeMaximo'),
  todasLasEstrellas: Ember.computed.alias('puntaje'),

  estrellas: function () {
    var estrellasLlenas = this.starRange(1, this.get('estrellasLlenas'), 'llena');
    var estrellasVacias = this.starRange(this.get('estrellasLlenas') + 1, this.get('cantidadDeEstrellas'), 'vacia');
    return estrellasLlenas.concat(estrellasVacias);
  }.property('todasLasEstrellas', 'cantidadDeEstrellas'),

  rangoDeEstrellas: function (start, end, type) {
    var estrellasData = [];
    for (var i = start; i <= end; i++) {
      estrellasData.push({puntaje: i, llena: type === 'llena'});
    }
    return estrellasData;
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