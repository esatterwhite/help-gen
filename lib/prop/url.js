'use strict'

const Base = require('./base')

/**
 * Represents javascript string that conforms to
 * the [WHATWG](https://url.spec.whatwg.org/#example-url-parsing) url specification
 * @class UrlProp
 * @extends Prop
 * @author Evan Lucas
 * @requires help-gen/lib/prop/is-prop
 **/

module.exports = class UrlProp extends Base {
  constructor() {
    super()
    this._type = 'url'
  }
}
