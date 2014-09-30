var usergrid = require('usergrid');

var ug = new usergrid.client({
  orgName:'dobson',
  appName:'sandbox'
});

module.exports.passwordCheck = function(username, password, cb) {
  ug.login(username, password, function(err, data, user) {
    if(err) {
      cb(err);
    } else {
      cb(null, true);
    }
  });
};
