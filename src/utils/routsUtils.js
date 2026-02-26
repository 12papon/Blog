//scaffolding
const routsUtils = {};
//Router all function
routsUtils.getData = (req, res, next) => {
  res.send("hallo");
  next();
};
//getDataid
//Post
routsUtils.postData = (req, res, next) => {
  res.send("Data posted");
  next();
};

module.exports = routsUtils;
