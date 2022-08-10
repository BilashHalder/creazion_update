const router=require("express").Router();
const {addAdmin,getAdminByEmail,removeAdmin,updateAdmin,getAdminByPhone,getAdmin}=require("./admin.controller");
/*******************************************
 * To handle all Valid Request
 *******************************************/

router.get("/:id",getAdmin);
router.get("/phone/:id",getAdminByPhone);
router.get("/email/:id",getAdminByEmail);
router.post("/",addAdmin);
router.post("/update",updateAdmin);
router.get("/remove/:id",removeAdmin);

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

