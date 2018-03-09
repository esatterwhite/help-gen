'use strict'

/**
 * Denotes that the property is an array Models rather than a singular instance
 * The following two accomplis the same thing
 * ```javascript
 * Prop.array().path('user').props(Prop.ref('User'))
 * Prop.ref('User').path('user').multi()
 * ```
 * @chainable
 * @method RefProp#multi
 * @returns {Prop} this
 * @example
 * Prop.ref('User').path('user').multi()
 **/
