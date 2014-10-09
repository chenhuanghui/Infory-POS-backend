/**
* Product.js
*
* @description :: products are what can be saled at local stores
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    schema: true,

    attributes: {
        id: { type: 'integer', autoIncrement: true, primaryKey: true },

        name: { type: 'string', required: true, unique: true },

        price: { type: 'float', required: true, defaultsTo: 0 },

        image: { type: 'text', required: false },

        description: { type: 'text', required: false },

        category: { model: 'category' },

        toJSON: function() {
            var obj = this.toObject();
            // var host = sails.getBaseurl() + '/';
            var host = 'http://192.168.1.104:1337/';
            obj.image = host + obj.image;
            return obj;
        }
    }


};

