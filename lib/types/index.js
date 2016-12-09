'use strict'

// Define first since ArrayType and ObjectType have circular dependencies on it.
exports.getCheck = getCheck

const ArrayType = require('./array')
const BaseType = require('./base')
const EnumType = require('./enum')
const NumberType = require('./number')
const ObjectType = require('./object')
const RegexType = require('./regex')
const StringType = require('./string')

function getCheck(conf) {
  const CheckClass = ({
    'array': ArrayType
  , 'boolean': BaseType
  , 'date': BaseType
  , 'email': BaseType
  , 'uuid': BaseType
  , 'enum': EnumType
  , 'number': NumberType
  , 'object': ObjectType
  , 'regex': RegexType
  , 'string': StringType
  })[conf.prop.type]

  return new CheckClass(conf)
}