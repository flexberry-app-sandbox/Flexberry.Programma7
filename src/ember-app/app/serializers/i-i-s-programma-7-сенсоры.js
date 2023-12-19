import { Serializer as СенсорыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-programma-7-сенсоры';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СенсорыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
