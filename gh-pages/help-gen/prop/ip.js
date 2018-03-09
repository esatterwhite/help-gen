'use strict'

/**
 * Allows for an IPv4 CIDR format
 * @chainable
 * @method IPProp#allowCIDR
 * @returns {Prop} this
 * @example
 * Prop.ip().path('a') // 192.168.0.5
 * Prop.io().path('b').allowCIDR() // 192.168.10.0/22
 **/
