/**
* Material.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true},

        name: { type: 'string', size: 50, required: true, unique: true },

        description: { type: 'text' },

        unit: { type: 'string', size: 5, required: true, enum: ['cái', 'g', 'ml'], defaultsTo: 'cái'},

        instock: {type: 'integer', required: true, defaultsTo: 0}
    }
};

