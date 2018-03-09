'use strict'

const Base = require('./base')

/**
 * Represents javascript string that conforms to the UUIDv4 spec
 * @class UUIDProp
 * @extends Prop
 * @author Evan Lucas
 **/
module.exports = class UUIDProp extends Base {
  constructor() {
    super()
    this._type = 'uuid'
  }
}
