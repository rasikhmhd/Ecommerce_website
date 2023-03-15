var db=require('../config/connection')
var collection=require('../config/collections')
const { response } = require('../app')
var objectId=require('mongodb').ObjectID

module.exports={
    addProduct:(product,callback)=>{
        
        db.get().collection('product').insertOne(product).then((data)=>{
            callback(data.ops[0]._id)
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)

        })
        

    },
    deleteProduct:(proId)=>{
      return new Promise((resolve,reject)=>{
        db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:objectId(proId)}).then((response)=>{
            resolve(response)
        })
      })  
    },
    getProductDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:objectId(proid)}).then((product)=>{
                resolve(product)
            })

        })
    },
    updateProduct:(proId,ProDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).updateone({_id:objectId(proId)},{
                $set:{
                    Name:ProductDetails.Name,
                    Description:ProDetails.Description,
                    proce:ProDetails.Price,
                    Category:ProDetails.Category

                }
            }).then((response)=>{
                resolve()
            })
        })
    }

}
    
