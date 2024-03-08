const mongoose = require('mongoose');

const smspackageSchama = ({
    noofsms: {
        type: Number,
        trim: true
    },
    price: {
        type: Number,
        trim: true
    }

}
);

module.exports=mongoose.model("smspack",smspackageSchama);