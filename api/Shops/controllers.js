const Shop = require("../../models/Shop");

exports.fetchShop = async (shopId, next) => {
  try {
    const s = await Shop.findById(shopId);
    return s;
  } catch (error) {
    next(error);
  }
};

exports.getShop = async (req, res) => {
  try {
    const s = await Shop.find();
    return res.json(s);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.ShopCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const newShops = await Shop.create(req.body);
    return res.status(201).json(newShops);
  } catch (error) {
    next(error);
  }
};

exports.ShopDelete = async (req, res, next) => {
  try {
    await req.product.remove();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.ShopUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const Shop = await Product.findByIdAndUpdate(
      { _id: req.product.id },
      req.body,
      { new: true, runValidators: true } // returns the updated product
    );
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
