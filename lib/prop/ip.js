'use strict'

const Base = require('./base')

/**
 * Represents javascript string in the format of an IPV4 address
 * @class IPProp
 * @extends Prop
 * @author Evan Lucas
 **/

module.exports = class IpProp extends Base {
  constructor() {
    super()
    this._type = 'ip'
    this._allowCIDR = false
  }

  allowCIDR() {
    this._allowCIDR = true
    return this
  }

  toJSON() {
    return Object.assign(super.toJSON(), {
      allowCIDR: this._allowCIDR
    })
  }
}
