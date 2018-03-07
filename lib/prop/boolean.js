'use strict'

const Base = require('./base')

/**
 * Represents javascript boolean value
 * @class DateType
 * @extends Type
 * @author Evan Lucas
 **/
module.exports = class BooleanProp extends Base {
  constructor() {
    super()
    this._type = 'boolean'
  }
}
