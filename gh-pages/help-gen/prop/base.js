'use strict'

/**
 * Defines the location of the property to validate and validate.
 * A dot separated object path can be used to quickly define nested object
 * @chainable
 * @method Prop#path
 * @param {String} path The object path to the property.
 * @returns {Prop} this
 * @example Prop.path('a')
 **/

/**
 * Denotes that the property at the specified path must be preset. Required is the default behavior
 * @chanable
 * @method Prop#required
 * @param {Boolean} [value=true]
 * @returns {Prop} this
 * @example
 * Prop.path('a').required() // a is required
 * Prop.path('b').required(false) // b is not required
 * Prop.path('c').required(true) // c is required
 **/

/**
 * Denotes that the property is optional. If the property is present, it must conform to the rules of property.
 * A property that has a value of `undefined` will fail.
 * @chainable
 * @method Prop#optional
 * @returns {Prop} this
 * @example
 * Prop.path('a').optional() // a is optional
 * Prop.path('b') // b is required
 **/

/**
 * Denotes that the property may be present and contain, specifically, a `null` value in addition to a value that
 * conforms to the rules of the property definition
 * @chainable
 * @method Prop#allowNull
 * @returns {Prop} this
 * @example
 * Prop.path('a').allowNull() // a is required and _can_ be null
 * Prop.path('b').optional().allowNull() // b is optional or can be null
 **/

/**
 * Denotes that the property must be or contain only unique values
 * @cainable
 * @method Prop#unique
 * @returns {Prop} this
 * @example
 * Prop.path('a').unique()
 * Prop.path('b').optional().unique()

/**
 * Sets a description on the property. Primarily for generating documentation
 * @chainable
 * @method Prop#desc
 * @param {String} text A breif description of the property
 * @returns {Prop} this
 * @example
 * Prop.path('a').optiona.desc('The letter a')
 **/

/**
 * Alias for {@link Prop#desc|desc}
 * @chainable
 * @method Prop#description
 * @alias Prop#desc
 * @see Prop#desc
 **/

/**
 * Sets an example on the property. Primarily for generating documentationt
 * @chainable
 * @method Prop#example
 * @param {String} text Sample value expected to be used to populate he property
 * @returns {Prop} this
 * @example
 * Prop.path('a').exmaple('a')
 **/


