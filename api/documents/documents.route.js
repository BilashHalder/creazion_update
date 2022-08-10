const router=require("express").Router();
const {findDocument,addDocument,updateDocument,removeDocument}=require("./documents.controller")
/*******************************************
 * To handle all Valid Request
 *******************************************/
router.get("/:id",findDocument);
router.post("/",addDocument);
router.post("/update",updateDocument);
router.get("/remove/:id",removeDocument);




  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

