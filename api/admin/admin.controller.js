const addAdmin=(req,res)=>{
    console.log(req.body);
    res.status(201).json({
        status:"ok",
    
    });
    }

module.exports={addAdmin}
    