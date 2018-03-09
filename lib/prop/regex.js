'use strict'

const Base = require('./base')
const toStringArg = require('./symbols').toStringArg

/**
 * Represents javascript String that conforms to a regular expression
 * @class RegexProp
 * @extends Prop
 * @author Evan Lucas
 * @requires help-gen/lib/prop/symbols
 * @param {Regex} [expression] The regular expression to use as the string validator
 **/
module.exports = class RegexProp extends Base {
  constructor(re) {
    super()
    this._type = 'regex'
    this._value = null

    if (re) {
      this.value(re)
    }
  }

  get [toStringArg]() {
    return this._value
  }

  value(val) {
    if (!/^\/\^.*\$\/[^/]*$/.test(val)) {
      throw new Error('Regular expressions for Prop.regex() need to start ' +
                      'with ^ and end with $')
    }

    this._value = val
    return this
  }

  toJSON() {
    return Object.assign(super.toJSON(), {
      value: this._value
    })
  }
}
