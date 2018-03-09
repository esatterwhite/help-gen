
module.exports = {}

/**
 * Registers a new model
 * @method ModelManager#define
 * @param {ModelConfig} conf A model Definition
 * @return ModelConfig
 **/

/**
 * Converts registered model configuration into an AST and generates javascript class representations
 * @method ModelManager#generate
 **/

/**
 * Registers an array of {@link ModelConfig} to be generated
 * @protected
 * @method ModelManager#_loadConfigs
 **/

/**
 * Converts an AST into final code and prepares it for export
 * @protected
 * @method ModelManager#_addResult
 * @param {String} name
 * @param {String} filename
 * @param {Object} ast
 **/
