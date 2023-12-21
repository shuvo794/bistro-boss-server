const express=require('express')
const app =express(express);
const cors = require('cors');

// middile ware

app.use(cors())