'use strict'

/**
 * Represents a javascript array containing zero or more uniform data types
 * @cainable
 * @method ArrayProp#props
 * @param {Prop} prop A property definition of the kind of data the array is allowed to contain
 * @returns {Prop} this
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

