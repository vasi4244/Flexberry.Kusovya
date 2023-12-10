import {
  defineNamespace,
  defineProjections,
  Model as РезОпросMixin
} from '../mixins/regenerated/models/i-i-s-kusovya-рез-опрос';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РезОпросMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
