/**
 * Module dependencies
 */
var _ = require('underscore'),
    actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	// create: function(req, res){

 //        var data = actionUtil.parseValues(req),
 //            recipe = req.body.recipe;

 //        // Create new product
 //        Product.create(data).exec(function created (err, newProduct) {

 //            // Differentiate between waterline-originated validation errors
 //            // and serious underlying issues. Respond with badRequest if a
 //            // validation error is encountered, w/ validation info.
 //            if (err) return res.negotiate(err);

 //            // If we have the pubsub hook, use the model class's publish method
 //            // to notify all subscribers about the created item
 //            if (req._sails.hooks.pubsub) {
 //                if (req.isSocket) {
 //                    Model.subscribe(req, newProduct);
 //                    Model.introduce(newProduct);
 //                }
 //                Model.publishCreate(newProduct, !req.options.mirror && req);
 //            }

 //            // Create new recipe items
 //            recipe.forEach(function(elem){
 //                elem.product = newProduct.id;
 //                RecipeItem.create(elem).exec();
 //            })

 //            // Send JSONP-friendly response if it's supported
 //            // (HTTP 201: Created)
 //            res.status(201);
 //            res.ok(newInstance.toJSON());
 //        });
 //    }
};

