module.exports = (()=>{
  const express = require('express'); app = express();
  const path = require('path');
  const routing = require(path.join(__dirname, 'server.routing.js'))(app);
  const bp = require('body-parser');

  //parse application/x-www-form-urlencoded
  app.use(bp.urlencoded({extended:false}));
  //parse application/json
  app.use(bp.json());
  //static files
  app.use('/client', express.static(path.join(__dirname, '../../client/')))

  return {
    run : function( port ) {
      app.listen( port, err => {
        if( err ) throw err;
        console.log(`Server initialiazed on port ${port}`);
      })

    }
  }

})();
