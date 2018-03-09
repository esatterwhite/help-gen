'use strict'

const Base = require('./base')

/**
 * Represents a string in the format of an email address sans name parts and envolope
 * @class EmailProp
 * @extends Prop
 * @author Evan Lucas
 **/

module.exports = class EmailProp extends Base {
  constructor() {
    super()
    this._type = 'email'
    this._allowName = false
  }

  allowName() {
    this._allowName = true
    return this
  }

  toJSON() {
    return Object.assign(super.toJSON(), {
      allowName: this._allowName
    })
  }
}
