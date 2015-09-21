var fs = require("fs");
var Command = require("./Command");
var MenuWriter = require("./MenuWriter");

module.exports = function(writePath, templateContent){
  var self = this;
  Command.apply(self, arguments);

  self.writePath = writePath;
  self.templateContent = templateContent;


  self.prepareForMenu = function(menu){
    self.templateContent = self.templateContent.replace("{{menu}}", MenuWriter(menu));
  };

  self.execute = function(){
    fs.writeFileSync(self.writePath, self.templateContent);
  };
};
