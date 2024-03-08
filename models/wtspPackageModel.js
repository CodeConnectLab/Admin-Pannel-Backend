const mongoose = require('mongoose');

const wtsppackageSchama = ({
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

module.exports=mongoose.model("wtsppack",wtsppackageSchama);