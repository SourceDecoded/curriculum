var markdown = require("markdown").markdown;
var fs = require("fs");
var rimraf = require("rimraf");

var outputDirectory = "../generated";
var inputDirectory = "../content";
var templateDirectory = inputDirectory + "/templates";

var menu = {};

var mdToTemplate = function(mdContent, menuItem) {
  var htmlContent = markdown.toHTML(mdContent);
  var template = fs.readFileSync(templateDirectory + "/" + menuItem.template + ".html", "utf-8");
  var output = "";
  // inject into template
  output = template.replace("{{content}}", htmlContent);
  output = output.replace("{{title}}", menuItem.title);
  output = output.replace("{{menu}}", "Menu will go here");
  return output;
}

var scanDir = function(directory){
  var menuFile = inputDirectory + "/" + directory + "/menu.json";
  var fileExists = false;
  try {
    fs.statSync(menuFile)
    fileExists = true;
  } catch(e){
    // smells like Java, doesn't it?
  }
  if (fileExists) {
    try {
      var menu = JSON.parse(fs.readFileSync(menuFile, "utf-8"));
      menu.forEach(function(menuItem){
        if (menuItem.hasOwnProperty("md")){
          var filePath = inputDirectory + "/" + directory + "/" + menuItem.md + ".md";
          var outputFilePath = outputDirectory + "/" + directory + "/" + menuItem.md + ".html";
          var inputContent = fs.readFileSync(filePath, "utf-8");
          var outputContent = mdToTemplate(inputContent, menuItem);
          fs.writeFileSync(outputFilePath, outputContent);
        }
        else if (menuItem.hasOwnProperty("copy")) {
          fs.writeFileSync(outputDirectory + "/" + directory + "/" + fs.readFileSync(fileInfo.path));
        }
        else if (menuItem.hasOwnProperty("dir")) {
          fs.mkdirSync(outputDirectory + "/" + directory + "/" + menuItem.dir);
          scanDir(directory + "/" + menuItem.dir);
        }
      });
    } catch (e) {
      console.log(e.stack);
      console.error("Couldn't process directory: " + e.message);
    }
  } else {
    console.info("menu.json not found in " + directory);
    return;
  }
};

rimraf(outputDirectory, function(){
  fs.mkdir(outputDirectory, function(){
    scanDir("");
  });
});
