import express from 'express'
import { orarendModositas } from '../controllers/orarendController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();


router.get("/orarendModositas",  validateToken , orarendModositas);
router.get("/orarendLekeres", validateToken, (req, res) => {
    console.log("Órarend lekérve"); 
    if (!req.body.id)
    {
        
        res.status(404).json("Nincs id!");
    }
    else 
    {
        const id = req.body.id;
        console.log("id: " + id);
        res.status(200).json("id: " + id);
        
        
    }
});
export default router