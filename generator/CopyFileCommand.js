var fs = require("fs");
var Command = require("./Command");

module.exports = function(destination, source){
  var self = this;
  Command.apply(self, arguments);
  self.destination = destination;
  self.source = source;

  self.execute = function(){
    fs.writeFileSync(self.destination, fs.readFileSync(self.source));
  }
};
