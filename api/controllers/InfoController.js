/**
 * InfoController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  index: function(req,res)
  {
    res.json({"msg":"if you see this you successfully went through OAuth2 authorization process"});
  },

  me: function(req,res)
  {
    Store.findOne(req.user.store).exec(function(err, store){
      res.json({id: req.user.id, email: req.user.email, name: req.user.name, store: store, createdAt: req.user.createdAt});
    })
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to InfoController)
   */
  _config: {}


};
