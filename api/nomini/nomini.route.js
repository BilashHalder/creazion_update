const router=require("express").Router();
const {getNominiById,findCustomerNomini,removeNominiById,removeNominiesByCustomerId,updateNomini,addNomini}=require("./nomini.controller");


/*******************************************
 * To handle all Valid Request
 *******************************************/

router.get("/:id",getNominiById);
router.get("/customer/:id",findCustomerNomini);
router.get("/remove/:id",removeNominiById);
router.get("/remove/customer/:id",removeNominiesByCustomerId);
router.post("/",addNomini);
router.post("/update",updateNomini);


  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

