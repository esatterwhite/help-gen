'use strict'

const ___0 = /\S@\S\.\S/im
module.exports = function biscuits(obj, cb) {
  if (!obj || typeof obj !== 'object') {
    return setImmediate(() => {
      cb(new TypeError('obj must be an object'))
    })
  }
  if (!___0.test(obj.email)) {
    return setImmediate(() => {
      cb(new Error(`Path "email" must match ${ ___0 }`))
    })
  }
  const ___1 = typeof obj.name
  if (typeof obj.name !== 'string') {
    return setImmediate(() => {
      cb(new TypeError(`Missing or invalid required param (name) for name name. Expected string, got ${ ___1 }`))
    })
  }
  return setImmediate(() => {
    cb(null, obj)
  })
}
