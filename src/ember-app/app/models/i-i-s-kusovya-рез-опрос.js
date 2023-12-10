import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РезОпросMixin
} from '../mixins/regenerated/models/i-i-s-kusovya-рез-опрос';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РезОпросMixin, Validations, {
});

defineProjections(Model);

export default Model;
