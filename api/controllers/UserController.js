/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  auth: (req, res) => {
    const mobile = req.param('mobile');
    const password = req.param('password');
    if (mobile != undefined && password != undefined) {
      User.findOne({
        mobile,
        password
      }).then((user) => {
        if (user) {
          return res.json({
            success: true,
            id: user.id,
            mobile: user.mobile
          });
        } else {
          return res.status(401).json({
            success: false,
            message: "Wrong credentials"
          });
        }
      }).catch((err) => {
        sails.log.error(err);
        res.status(500).json({
          success: false,
          message: "Unable to authenticate"
        });
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid parameters"
      });
    }
  }
};
