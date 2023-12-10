import { Serializer as РезОпросSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kusovya-рез-опрос';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РезОпросSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
