const router=require("express").Router();
const {FindById,FindByEmail,FindByPhone,addCustomer,updateCustomer,removeCustomer}=require("./customer.contorller");
/*******************************************
 * To handle all Valid Request
 *******************************************/
router.get("/:id",FindById);
router.get("/email/:id",FindByEmail);
router.get("/phone/:id",FindByPhone);
router.post("/",addCustomer);
router.post("/update",updateCustomer);
router.get("/remove/:id",removeCustomer);






  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

