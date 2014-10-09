/**
 * SaleController
 *
 * @description :: Server-side logic for managing sales
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function(req, res){

        // res.status(200);
        // res.ok({ok: "OK"});

        var receipt = eval("(" + req.body.receipt + ")");
        delete req.body.receipt;

        // Create new sale
        Sale.create(req.body).exec(function created (err, newSale) {

            // Differentiate between waterline-originated validation errors
            // and serious underlying issues. Respond with badRequest if a
            // validation error is encountered, w/ validation info.
            if (err) return res.negotiate(err);

            // Create new sale items
            var nSaleItem = receipt.length,
                j = 0;
            for(i=0; i<nSaleItem; i++){
                var saleItem = {
                    sale: newSale.id,
                    product: receipt[i][0],
                    quantity: receipt[i][1],
                    price: receipt[i][2]
                }

                SaleItem.create(saleItem).exec(function(err, newSaleItem){
                    if (err) return res.negotiate(err);

                    j++;
                    if(j == nSaleItem)
                    {
                        // Send JSONP-friendly response if it's supported
                        // (HTTP 201: Created)
                        res.status(201);
                        res.ok(newSale.toJSON());
                    }
                });

                // update stock status
                RecipeItem.find({product: saleItem.product}).exec(function(err, recipeItems){
                    // TODO: handle error

                    for(k=0; k<recipeItems.length; k++){
                        var recipeItem = recipeItems[k];
                        Material.findOne(recipeItem.material).exec(function(err, material){
                            Material.update(
                                {id: material.id},
                                {instock: material.instock - saleItem.quantity*recipeItem.quantity}
                                ).exec(function(err, newMaterial){
                                    if(err)
                                        sails.log.error(err);
                                });
                        })
                    }
                })
            }
        });
    }
};

