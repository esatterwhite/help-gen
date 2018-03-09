'use strict'

/**
 * Allows the email address to contain both the name parts and email envelope
 * @chainable
 * @method EmailProp#allowname
 * @returns {Prop} this
 * @example
 * Prop.email().path('email') // playerone@help.com
 * Prop.email().path('email').allowName() // '"player One" <playerone@help.com>'
 **/
