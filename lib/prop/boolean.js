'use strict'

const Base = require('./base')

/**
 * Represents javascript boolean value
 * @class DateProp
 * @extends Prop
 * @author Evan Lucas
 **/
module.exports = class BooleanProp extends Base {
  constructor() {
    super()
    this._type = 'boolean'
  }
}
