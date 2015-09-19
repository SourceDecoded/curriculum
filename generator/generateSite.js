var markdown = require("markdown").markdown;
var fs = require("fs");

var outputDirectory = "../generated";
var inputDirectory = "../content";

var menu = {};

var convertMarkdown = function(mdContent) {
  var htmlContent = markdown.toHTML(mdContent);
  // inject into template
  return htmlContent;
}

var scanDir = function(directory){
  if(directory === "templates") {
    return;
  }

  var contents = fs.readdirSync(inputDirectory + "/" + directory).map(function(path){
    var info = fs.statSync(path);
    info.path = directory + "/" + path;
  });

  if (fs.fileexistsSync(directory + "/menu.json")) {
    // add this menu stuff to the master menu object
  }

  contents.forEach(function(fileInfo){
    if (fileInfo.isDirectory()) {
      scanDir(fileInfo.path);
    } else if(fileInfo.path.substr(-2) === "md") {
      var outputFilePath = outputDirectory + "/" + fileInfo.path.substring(0, fileInfo.path.substring.length - 2) + "html";
      var inputContent = fs.readFileSync(fileInfo.path, "utf-8");
      var outputContent = convertMarkdown(inputContent);
      fs.writeFileSync(outputFilePath, outputContent);
    } else if(fileInfo.path.substr(-4) === "html") {
      fs.writeFileSync(outputDirectory + "/" + fileInfo.path, fs.readFileSync(fileInfo.path));
    }
  });
};

var outputStat = fs.statSync(outputDirectory);

if(! outputStat.isDirectory()) {
  if (outputStat.isFile()) {
    throw(new Error("Cannot write output directory: there's a file in the way at " + outputDirectory));
  }
  try {
    fs.mkdirSync(outputDirectory);
  } catch (e) {
    throw new Error("Cannot write output directory: " + e.message);
  }
}

scanDir(inputDirectory);
