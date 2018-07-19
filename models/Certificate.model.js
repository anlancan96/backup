const { isNullOrUndefined } = require('../helper');

const mongoose = require('mongoose');

const CertificateSchema = mongoose.Schema({
    deviceId: String,
    buildId: String,
    numberOfCounter: Number,
    numberOfNumMachine: Number,
    numberOfDisplayTablet: Number,
    nameUnit: String,
    addressUnit: String,
    descriptionUnit: String,
    contactInfoUnit: String,
    emailUnit: String,
    status: { type: Number, default : 1 }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at ' } })

CertificateSchema.statics.getLicense = function(option, cb) {
    return this.find(option)
               .limit(1)
               .lean()
               .exec((err, doc) => {
                   (err) ? cb(err) : cb(null, doc);
               })
} 

CertificateSchema.statics.getAllCertificate = function(cb) {
    return this.find({})
               .lean()
               .exec((err, doc) => {
                   (err) ? cb(err) : cb(null, doc)
               })
}

CertificateSchema.statics.updateLicense = function(data, cb) {
    if(isNullOrUndefined(data)) {
        return cb('Empty data');
    }
    if(isNullOrUndefined(data._id)) {
        return this.create(data, (err, doc) => {
            (err) ? cb(err) : cb(null, doc);
        })
    } else {
        return this.findOneAndUpdate({ _id: data._id }, { $set: data} , { new: true } , (err, doc) => {
            (err) ? cb(err) : cb(null, doc);
        })
    }
}

module.exports = mongoose.model('Certificate', CertificateSchema);