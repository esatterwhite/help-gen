'use strict'
module.exports = {}

// TypeBase

/**
 * Defines the location of the property to validate and validate.
 * A dot separated object path can be used to quickly define nested object
 * @chainable
 * @method Type#path
 * @param {String} path The object path to the property.
 * @returns {Type} this
 * @example Prop.path('a')
 **/

/**
 * Denotes that the property at the specified path must be preset. Required is the default behavior
 * @chanable
 * @method Type#required
 * @param {Boolean} [value=true]
 * @returns {Type} this
 * @example
 * Prop.path('a').required() // a is required
 * Prop.path('b').required(false) // b is not required
 * Prop.path('c').required(true) // c is required
 **/

/**
 * Denotes that the property is optional. If the property is present, it must conform to the rules of property.
 * A property that has a value of `undefined` will fail.
 * @chainable
 * @method Type#optional
 * @returns {Type} this
 * @example
 * Prop.path('a').optional() // a is optional
 * Prop.path('b') // b is required
 **/

/**
 * Denotes that the property may be present and contain, specifically, a `null` value in addition to a value that
 * conforms to the rules of the property definition
 * @chainable
 * @method Type#allowNull
 * @returns {Type} this
 * @example
 * Prop.path('a').allowNull() // a is required and _can_ be null
 * Prop.path('b').optional().allowNull() // b is optional or can be null
 **/

/**
 * Denotes that the property must be or contain only unique values
 * @cainable
 * @method Type#unique
 * @returns {Type} this
 * @example
 * Prop.path('a').unique()
 * Prop.path('b').optional().unique()

/**
 * Sets a description on the property. Primarily for generating documentation
 * @chainable
 * @method Type#desc
 * @param {String} text A breif description of the property
 * @returns {Type} this
 * @example
 * Prop.path('a').optiona.desc('The letter a')
 **/

/**
 * Alias for {@link Type#desc|desc}
 * @chainable
 * @method Type#description
 * @alias Type#desc
 * @see Type#desc
 **/

/**
 * Sets an example on the property. Primarily for generating documentationt
 * @chainable
 * @method Type#example
 * @param {String} text Sample value expected to be used to populate he property
 * @returns {Type} this
 * @example
 * Prop.path('a').exmaple('a')
 **/


// ArrayType

/**
 * Represents a javascript array containing zero or more uniform data types
 * @cainable
 * @method ArrayType#props
 * @param {Type} prop A property definition of the kind of data the array is allowed to contain
 * @returns {Type} this
 * @example
 * cosnt {Prop} = require('help-gen')
 * Prop.array().path('a').props(Prop.number().min(0)) // and array of positive numbers
 * Prop.array().path('b').props(
 *   Prop.object().props([
 *     Prop.string().path('c').allowNull()
 *   , Prop.number().path('d').optional()
 *   ])
 * )
 **/

// EmailType

/**
 * Allows the email address to contain both the name parts and email envelope
 * @chainable
 * @method EmailType#allowname
 * @returns {Type} this
 * @example
 * Prop.email().path('email') // playerone@help.com
 * Prop.email().path('email').allowName() // '"player One" <playerone@help.com>'
 **/

// EnumType

/**
 * Defines or overrides the allowable values for a property
 * @chainable
 * @method EnumType#values
 * @param {String[]} values The allowable values for the property
 * @returns {Type} this
 * @example Prop.enum().path('a').values(['b', 'c'])
 **/

// IPType

/**
 * Allows for an IPv4 CIDR format
 * @chainable
 * @method IPType#allowCIDR
 * @returns {Type} this
 * @example
 * Prop.ip().path('a') // 192.168.0.5
 * Prop.io().path('b').allowCIDR() // 192.168.10.0/22
 **/

// NumberType

/**
 * Sets the minimum allowable value for the property
 * @chainable
 * @method NumberType#min
 * @param {Number} min The minimum value allowed
 * @returns {Type} this
 * @example
 * Prop.number().path('num').min(0).allowNull()
 **/

/**
 * Sets the maximum allowable value for the property
 * @chainable
 * @method NumberType#min
 * @param {Number} max The maximum value allowed
 * @returns {Type} this
 * @example
 * Prop.number().path('num').max(10).allowNull()
 **/

/**
 * Denotes to allow any and all preperties to remain on the final output object
 * reguardless if they have been defined or not
 * @chainable
 * @method ObjectType#passthrough
 * @returns {Type} this
 * @example
 * Prop.object().path('a').passthrough() // any object will pass
 **/

/**
 * An array of Propery definitions that defines that genaerl schema the object must abide by
 * If this function is not called, {@link ObjectType#passthrough|passthrough} must be called.
 * @chainable
 * @method ObjectType#props
 * @param {Type[]} props An array of property definitions
 * @returns {Type} this
 * @example
 * Prop.object().path('a').props([
 *   Prop.string().path('b').max(100)
 * , Prop.Object().path('c').passthrough()
 * ])
 **/
