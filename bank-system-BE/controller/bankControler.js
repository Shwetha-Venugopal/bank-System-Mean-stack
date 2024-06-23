const {transaction,Bank}=require('../schema/bank')


let saveBank=async (req,res)=>{
    let {name,email,phone,accountNumber,iifcNumber,accoutBalance}=req.body
    try{
        let bankData=new Bank({
            name:name,
            email:email,
            phone:phone,
            accountNumber:accountNumber,
            iifcNumber:iifcNumber,
            accoutBalance:accoutBalance
        })
        await bankData.save()
        res.status(201).send({msg:'Bank Saved Successfully'})
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}


let getBank=async (req,res)=>{
    try{
        let bankList=await Bank.find()
        res.status(200).send(bankList)

    }catch(error){
        res.status(500).send({msg:error.message})
    }
}

let getTrasaction=async (req,res)=>{
    try{
        let trasactionList=await transaction.find()
        .populate('from', 'name')
        .populate('to', 'name')
        .sort({ date: -1 });
        res.status(200).send(trasactionList)
    }catch(error){
        res.status(500).send({msg:error.message})
    }
}



let saveTransaction = async (req, res) => {
    let { from, to, amount } = req.body;
    console.log(from, to, amount);
    try {
        let fromAccountList = await Bank.findById(from);
        let toAccountList = await Bank.findById(to);

        if (amount < 0) {
            return res.status(400).send({ msg: 'Amount must be greater than zero.' });
        }

        if (amount > fromAccountList.accountBalance) {
            return res.status(400).send({ msg: 'Insufficient balance' });
        }

        fromAccountList.accoutBalance -= amount;
        toAccountList.accoutBalance += amount;

        console.log('Updated From Account:', fromAccountList);
        console.log('Updated To Account:', toAccountList);

        let transactionList = new transaction({
            from: from,
            to: to,
            amount: amount
        });

        await fromAccountList.save();
        await toAccountList.save();
        await transactionList.save();

        res.status(200).send({ msg: 'Transaction successful' });
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
};


module.exports={getBank,saveBank, getTrasaction, saveTransaction}