import DS from 'ember-data';

export default DS.Model.extend({
  activity: DS.attr('string'),
  intensity: DS.attr('string')
});
