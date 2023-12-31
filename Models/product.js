const mongoose = require('mongoose');
const { Schema } = mongoose;


//Schema
const brandsSchema = new Schema({
  name:
  {
    type: String,
    required: true
  }
});

const modelsSchema = new Schema({
  brandName: { type: brandsSchema, required: true },
  modelName: { type: String, required: true },
  color: { type: String },
  countryOfOrigin: { type: String },
  asin: { type: String },
  imei: { type: [String] },
  closingStock: { type: Number },
  sellingPrice: { type: Number },
  createdOn: { type: Date },
  lastUpdated: { type: Date }

});


exports.Brand = mongoose.model('brand', brandsSchema);
exports.Model = mongoose.model('model', modelsSchema);