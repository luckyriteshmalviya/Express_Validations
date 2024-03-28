const getDetailValidation = (req, res, goAhead) => {
  console.log(typeof req.params.productId, req.query, "9009");

  if (isNaN(req.params.productId)) {
    console.log("Id missing");
    res.send({message: 'ID should be a number'})
  } 

  if (Object.keys(req.query).length) {
    res.send({message:'query will not be allowed'})  
    return console.log('query will not be allowed');
  }
  goAhead();
};

module.exports = { getDetailValidation };
