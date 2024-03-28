const basicController =(req, res)=>{
    console.log('response comming')
    res.send({message: 'products listing'})
}

const detailController = (req, res)=>{  
    res.send({message: `A complete detail of ${req.params.productId} product`})
}

const fallbackController = (req, res)=>{
    res.send({message: 'Please send proper route'})
}
module.exports = {basicController, detailController, fallbackController}