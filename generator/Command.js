module.exports = function() {
  var self = this;

  self.prepareForMenu = function(){
    // default implementation does nothing
  };

  self.execute = function(){
     throw new Error("Execute must be defined for subclasses");
  };
}
