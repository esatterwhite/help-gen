'use strict'

const Base = require('./base')

/**
 * Represents javascript Date string in ISO 8601
 * @class DateProp
 * @extends Prop
 * @author Evan Lucas
 **/

module.exports = class DateProp extends Base {
  constructor() {
    super()
    this._type = 'date'
  }
}
