module.exports = ((app)=>{
  const path = require('path');

  //METHODS
  const sendHome = (req,res) => {
    res.sendFile( path.join( __dirname, '../html/home.html'));
  }

  //GETS
  app.get('/', sendHome );

  //POSTS

});
