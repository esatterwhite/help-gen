'use strict'

const Base = require('./base')

/**
 * Represents javascript Date string in ISO 8601
 * @class DateType
 * @extends Type
 * @author Evan Lucas
 **/

module.exports = class DateProp extends Base {
  constructor() {
    super()
    this._type = 'date'
  }
}
