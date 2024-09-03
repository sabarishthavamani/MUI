const mongoose=require('mongoose')

const schema=mongoose.Schema;

const useschema= new schema({
        Fname:{
            type:  String,
            required:true
        },
        Lname:{
            type: String,
            required:true
        },
        Email:{
            type: String,
            required:true
        },
        Password:{
            type: String,
            required:true
        },
        check:{
            type: Boolean,
    },
    
})

module.exports=mongoose.model('AdminDetails',useschema)