var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
  
var StaffSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
  first_name: {
        type: String,
        required: true
    },
  last_name: {
        type: String,
        required: true
    },
  isAdmin: {
        type: Boolean,
        default: false
    },
  isReception: {
        type: Boolean,
        default: false
    },
  isEntrance: {
        type: Boolean,
        default: false
    },
  isStaff: {
        type: Boolean,
        default: false
    },
  password: {
        type: String,
        required: true
    },
  company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
  visitors: [{
        type: Schema.Types.ObjectId,
        ref: "Visitor"
    }],
   bookings: [{
        type: Schema.Types.ObjectId,
        ref: "Booking"
    }],
});

// StaffSchema.pre('save', function(next, done) {
//     var staff = this;
//     mongoose.models["Staff"].findOne({username: staff.username}, function(err, user) {
//         if(err) {
//             done(err);
//         } else if(user) {            
//             if (user._id.equals(staff._id)) return next(); // If id's are equal, then we don't care about false dupe username error because its the same user!

//             staff.invalidate('username', 'Sorry but this username is already taken');
//             done(new Error('Sorry but this username is already taken'));
//         } else {
//             next();
//         }
//     });
// });
 
StaffSchema.pre('save',  function(next) {
    var staff = this;
 
     if (!staff.isModified('password')) return next();
 
     bcrypt.genSalt(10, function(err, salt) {
         if (err) return next(err);
 
         bcrypt.hash(staff.password, salt, function(err, hash) {
             if (err) return next(err);
 
             staff.password = hash;
             next();
         });
     });
});
 
StaffSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
 
module.exports = mongoose.model('Staff', StaffSchema);