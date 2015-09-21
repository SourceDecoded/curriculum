var fs = require("fs");
var Command = require("./Command");

module.exports = function(writePath) {
  var self = this;
  Command.apply(self, arguments);

  self.writePath = writePath;

  self.execute = function(){
    fs.mkdir(self.writePath);
  };
}
