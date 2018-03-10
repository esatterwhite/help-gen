'use strict'

const generator = require('escodegen').generate

const opts = {
  format: {
    indent: {
      style: '  '
    , base: 0
    , adjustMultilineComment: false
    }
  , space: ' '
  , json: false
  , quotes: 'single'
  , semicolons: false
  , compact: false
  }
}

/**
 * Converts an abstract syntax tree into a code string
 * @param {Object} AST
 * @returns {String} javascript code
 * @author Evan Lucas <evan.lucas@me.com>
 **/
module.exports = function toCode(ast) {
  return generator(ast, opts)
}
