const mongoose=require('mongoose')

const transferSchme=mongoose.Schema({
    from:{type:mongoose.Schema.Types.ObjectId, ref:'Bank', required:true},
    to:{type:mongoose.Schema.Types.ObjectId, ref:'Bank', required:true},
    amount:{type:'Number',required:true}
})


const bankSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    accountNumber:{type:Number,required:true},
    iifcNumber:{type:Number,required:true},
    accoutBalance:{type:Number,required:true}
})


module.exports={
    Bank:mongoose.model('Bank',bankSchema),
    transaction:mongoose.model('Transaction',transferSchme)
}