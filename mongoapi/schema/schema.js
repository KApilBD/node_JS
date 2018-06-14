var mongo=require('mongoose');

var companies=mongo.model('companies',new mongo.Schema(
    {
        name:String,
        number_of_employees:Number,
        founded_year:Number,
        overview:String,
        total_money_raised:String,
        offices:{city:String,address1:String,adress:String,zip_code:String}
    }
),
'companies');

module.exports = companies;