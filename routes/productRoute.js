const express = require("express");
const router = express.Router();
const services = require("../services/render");

const {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductsfind,
  findprice,
  finddata,
  updateManyProduct,
  findnew,
} = require("../controllers/productControllers");

const {
  createDetail,
  getDetail,
  getDetails,
  deleteDetail,
  updateDetail,
  findDetail,
} = require("../controllers/loginControllers");

router.route("/get").get(getProducts);
router.route("/get/find").get(getProductsfind);
router.route("/get/price").get(findprice);
router.route("/get/bro").get(findnew);
router.route("/get/data").get(finddata);
router.route("/post").post(createProduct);
router.route("/get/:id").get(getProduct);
router.route("/delete/:id").delete(deleteProduct);
router.route("/update/:id").put(updateProduct);
router.route("/new/many").put(updateManyProduct);
router.route("/login/:id").get(getDetail);
router.route("/login").get(getDetails);
router.route("/login/post").post(createDetail);
router.route("/a").post(findDetail)

router.get("/", services.homeRoutes);

module.exports = router;
