import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr('number'),
  name: DS.attr('string'),
  gender: DS.attr('string'),
  birthDate: DS.attr('date'),
  heightCm: DS.attr('number'),
  weightKg: DS.attr('number'),
  bmi: DS.attr('number')
});
