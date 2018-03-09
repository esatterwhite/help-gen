'use strict'

const Base = require('./base')
const toStringArg = require('./symbols').toStringArg

/**
 * Denoes a Property that uses another registered Model as its type definition
 * @class RefProp
 * @extends Prop
 * @author Evan Lucas
 * @requires help-gen/lib/symbols
 * @param {String} name The Registered Model Name
 * @example Prop.path('user').Ref('User')
 **/

module.exports = class RefProp extends Base {
  constructor(name) {
    super()
    this._type = 'ref'
    this._name = name
    this._multi = false
  }

  get [toStringArg]() {
    return JSON.stringify(this._name)
  }

  multi() {
    this._multi = true
    return this
  }

  toJSON() {
    return Object.assign(super.toJSON(), {
      multi: this._multi
    , name: this._name
    })
  }
}
