const express=require('express')
const app =express(express);
const cors = require('cors');
const port = process.env.PORT || 5000;

// middile ware

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('boss is setting on chair')
})

app.listen(port,()=>{
    console.log(`bistro boos is setting ${port}`);
})