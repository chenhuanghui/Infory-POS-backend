/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
        name: { type: 'string', required: true},
        email: {
            type: 'string',
            required: true,
            uniqued: true
        },
        store: { model: 'store' },

        hashedPassword: {
            type: 'string',
        },
        // Override toJSON method to remove password from API
        toJSON: function() {
          var obj = this.toObject();
          delete obj.password;
          return obj;
        }
  },

  beforeCreate: function(values, next){
    bcrypt.hash(values.password, 10, function(err, hash) {
      if(err) return next(err);
      values.hashedPassword = hash;
      delete values.password;
      next();
    });
  }

};
