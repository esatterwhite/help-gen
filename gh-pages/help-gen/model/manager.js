'use strict'

/**
 * Registers a new model
 * @method ModelManager#define
 * @param {ModelConfig} conf A model Definition
 * @return ModelConfig
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

/**
 * Converts registered model instances into final code
 * @protected
 * @method ModelManager#_generateModels
 **/

/**
 * Generates all registered models into javascript suitable for writing to a detination file
 * @method ModelManager#generate
 * @returns {GenResult} resuls
 **/

/**
 * @typedef {Map} GenResult
 * @property {String} name The model's registered name
 * @property {Code} code The final rendered code Objects
 **/

/**
 * @typedef {Object} Code
 * @property {String} filename The model output file name
 * @property {String} code generated javascript code
 **/
