const mongoose = require('mongoose');

const vcdSchema = mongoose.Schema({
    name: { type: String, require },
    Quality: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
}, {
    timestamps: true,
})
const vcdModel = mongoose.model('vcds', vcdSchema)

module.exports = vcdModel;

