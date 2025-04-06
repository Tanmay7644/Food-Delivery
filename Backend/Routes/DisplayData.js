import express from 'express';
const router = express.Router();

router.post('/foodData',async (req,res)=>{
    try {
        // console.log(global.foodItems);
        res.send([global.foodItems,global.foodCategory]);
    } catch (error) {
        res.send({error:"Error fetching data"});
    }
})


export default router;