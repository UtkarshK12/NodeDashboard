const mongoose= require('mongoose');

const ErrorSchema=mongoose.Schema({
    errorName:{
        type: String,
        
    },
    errorLocation:{
        type: String,
      
    },
    errorMessage:{
        type: String,
       
    },
    errorBody:{
        type: String,
        
    },

})

module.exports = mongoose.model('ErrorSchema', ErrorSchema);