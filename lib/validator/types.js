'use strict'

/**
 * Constant values providing meta data about various types
 * @module help-gen/lib/validator/types
 * @property {Set} BUILTINS Language built-in types
 * @property {Set} CUSTOM Custom Property types
 * @property {Set} NEED_HELP_IS types that required @helpdotcom/is
 * @property {SET} ALLOW_MIN_MAX Types that allow a min / max
 **/

const BUILTINS = new Set([
  'boolean'
, 'number'
, 'object'
, 'string'
])

const CUSTOM = new Set([
  'array'
, 'date'
, 'email'
, 'enum'
, 'regex'
, 'uuid'
])

const NEED_HELP_IS = new Set([
  'date'
, 'email'
, 'uuid'
, 'url'
])

const ALLOW_MIN_MAX = new Set([
  'number'
, 'string'
])

exports.ALLOW_MIN_MAX = ALLOW_MIN_MAX
exports.BUILTINS = BUILTINS
exports.CUSTOM = CUSTOM
exports.NEED_HELP_IS = NEED_HELP_IS
