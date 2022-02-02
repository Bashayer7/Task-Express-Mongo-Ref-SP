const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const ShopSchema = new mongoose.Schema(
  {
    name: String,

    image: String,
  }
  // { timestamps: trShops:{ type:mongoose.Schema.Types.ObjecIdShops"},
);

// ProductSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = mongoose.model("Shop", ShopSchema);
