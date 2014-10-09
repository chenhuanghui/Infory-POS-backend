/**
* Campaign.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true},

        name: { type: 'string', unique: true },

        stores: { collection: 'store', via: 'campaigns', dominant: true },

        status: { type: 'integer', defaultsTo: 0}
    }
};

