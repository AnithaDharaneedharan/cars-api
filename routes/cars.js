const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send(' are on cars')
})

module.exports = router;