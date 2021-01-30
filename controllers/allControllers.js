const validationHandler = require('../validations/validationHandler');
const util = require('../utils/helpers');

exports.index = (req, res) => {

    const henryDetails = util.henryData;
    
    res.send(

        {
            message: 'My Rule-Validation API',
            status: 'success',
            data: henryDetails
        }
        
        );
}

exports.store = async (req, res, next) => {
    try {
            validationHandler(req);

            

            res.send(post);
    } catch (err) {
      next(err);
    }
  };