//----------------------------------------------------------------------------//
var express = require('express');
var app = express();
//----------------------------------------------------------------------------//

// static files
app.use(express.static('./server/public'));

// port to listen on
app.listen(3000);