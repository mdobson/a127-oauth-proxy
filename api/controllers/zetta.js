var argo = require('argo');


var app = argo()
          .target('http://hello-zetta.herokuapp.com/')
          .build();

module.exports = {
  zetta: zetta
};

function zetta(req, res) {
  if(req.method === 'GET') {
    req.body = null;
  }

  app.run(req, res);
}
