'use strict'

/**
 * Validate a datelike string
 * @function isDate
 * @memberof module:help-gen/lib/is-helper
 * @param {String} variable The name of the variable to be checked
 * @returns ASTNode
 * @example
 * const {isDate} = require('@helpdotcom/help-gen/lib/is-helper')
 * isDate('now')
 *
 * // Generates
 * const is = require('@helpdotcom/is')
 * is.isDate(now)
 **/

/**
 * Validate a string representing an email address sans the name parts
 * @function isEmail
 * @memberof module:help-gen/lib/is-helper
 * @param {String} variable The name of the variable to be checked
 * @returns ASTNode
 * @example
 * const {isEmail} = require('@helpdotcom/help-gen/lib/is-helper')
 * isEmail('email')
 *
 * // Generates
 * const is = require('@helpdotcom/is')
 * is.isEmail(email)
 **/

/**
 * Validate a string representing an email address with the name parts
 * @function isEmailAllowName
 * @memberof module:help-gen/lib/is-helper
 * @param {String} variable The name of the variable to be checked
 * @returns ASTNode
 * @example
 * const {isEmailAllowName} = require('@helpdotcom/help-gen/lib/is-helper')
 * isEmailAllowName('now')
 *
 * // Generates
 * const is = require('@helpdotcom/is')
 * is.isEmailAllowName(now)
 **/

/**
 * Validate a string representing a v4 uuid
 * @function isUUID
 * @memberof module:help-gen/lib/is-helper
 * @param {String} variable The name of the variable to be checked
 * @returns ASTNode
 * @example
 * const {isUUID} = require('@helpdotcom/help-gen/lib/is-helper')
 * isUUID('now')
 *
 * // Generates
 * const is = require('@helpdotcom/is')
 * is.isUUID(now)
 **/

/**
 * Validate a string representing a v4 uuid
 * @function isDate
 * @memberof module:help-gen/lib/is-helper
 * @param {String} variable The name of the variable to be checked
 * @returns ASTNode
 * @example
 * const {isUUID} = require('@helpdotcom/help-gen/lib/is-helper')
 * isUUID('now')
 *
 * // Generates
 * const is = require('@helpdotcom/is')
 * is.isUUID(now)
 **/

/**
 * Validate a string representing a url
 * @function isUrl
 * @memberof module:help-gen/lib/is-helper
 * @param {String} variable The name of the variable to be checked
 * @returns ASTNode
 * @example
 * const {isUUID} = require('@helpdotcom/help-gen/lib/is-helper')
 * isUUID('user.avatar_url')
 *
 * // Generates
 * const is = require('@helpdotcom/is')
 * is.isUrl(user.avatar_url)
 **/

/**
 * Validate a variable is an array
 * @function isArray
 * @memberof module:help-gen/lib/is-helper
 * @param {String} variable The name of the variable to be checked
 * @returns ASTNode
 * @example
 * const {isUUID} = require('@helpdotcom/help-gen/lib/is-helper')
 * isUUID('user.avatar_url')
 *
 * // Generates
 * Array.isArray(user.avatar_url)
 **/
