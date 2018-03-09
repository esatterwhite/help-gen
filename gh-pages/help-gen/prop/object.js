'use strict'

/**
 * Denotes to allow any and all preperties to remain on the final output object
 * reguardless if they have been defined or not
 * @chainable
 * @method ObjectProp#passthrough
 * @returns {Prop} this
 * @example
 * Prop.object().path('a').passthrough() // any object will pass
 **/

/**
 * An array of Propery definitions that defines that genaerl schema the object must abide by
 * If this function is not called, {@link ObjectProp#passthrough|passthrough} must be called.
 * It is possible to call `Prop.object().props(...)` with sub-properties whose
 * parents only implicitly exist, e.g.
 * ```javascript
 * [ Prop.someType().path('foo')
 *      , Prop.someType().path('bar.baz')
 *      , Prop.someType().path('bar.quux') ].
 * // This function adds the missing parents, e.g. transforms the above into
 * [ Prop.someType().path('foo')
 * , Prop.object().path('bar').props([
 *     Prop.someType().path('baz')
 *   , Prop.someType().path('quux')
 *   ])
 * ]
 * ```
 * Yields the following structure
 * ```javascript
 * { 'foo' => [ ]
 * , 'bar' => [ Prop.someType().path('bar.baz')
 *            , Prop.someType().path('bar.quux') ] }
 *```
 * @chainable
 * @method ObjectProp#props
 * @param {Prop[]} props An array of property definitions
 * @returns {Prop} this
 * @example
 * Prop.object().path('a').props([
 *   Prop.string().path('b').max(100)
 * , Prop.Object().path('c').passthrough()
 * ])
 **/

