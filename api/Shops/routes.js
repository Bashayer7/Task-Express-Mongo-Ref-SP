const express = require("express");

const { getShop, shopCreate, ShopDelete, fetchShop } = require("./controllers");
const upload = require("../../middleware/multer");

const router = express.Router();

router.param("shopId", async (req, res, next, shopId) => {
  const Shop = await fetchProduct(shopId, next);
  if (shop) {
    req.product = product;
    next();
  } else {
    const err = new Error("Product Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getShop);
router.post("/", upload.single("image"), ShopCreate);
router.delete("/:shopId", ShopDelete);
router.put("/:shopId", upload.single("image"), ShopUpdate);

module.exports = router;
