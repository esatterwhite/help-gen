'use strict'

/**
 * Sets or replaces the internal regular expression used for validation
 * The regular expression **must** have begin(`^`) and end(`$`)
 * @chainable
 * @method RegexProp#value
 * @param {Regex} expression Sets the internal regular expression for validation
 * @returns {Prop} this
 * @example
 * Prop.regex().path('name').value(/^hello$/)
 **/
