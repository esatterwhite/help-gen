'use strict'

/**
 * @module help-gen/lib/prop/is-prop
 * @author Evan Lucas <evanlucas@me.com>
 * @exports isProp
 **/

/**
 * Determines if an object is of type {@link Prop|Prop}
 * @param {Object} item The item to inspect
 * @returns {Boolean} true if it is a prop type
 **/
module.exports = function isProp(item) {
  return Object.prototype.toString.call(item) === '[object NanoProp]'
}
