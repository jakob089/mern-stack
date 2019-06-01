var mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
    name: {
        type : String,
    },
    price: {
        type : Number,
    },
    sku: {
        type : Number,
    },
    colors: {
        type : Array,
    },
    sizes: {
        type : Array,
    },
    image_urls: {
        type : Array,
    },
    description: {
        type : Array,
    },
    images: {
        type : Array,
    }
});
var Products = mongoose.model('products', productsSchema);


module.exports = Products;