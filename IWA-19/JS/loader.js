// loader.js

// Function to dynamically add a script tag with type="module" and defer attribute
function addModuleScript(src) {
  const scriptElement = document.createElement("script");
  scriptElement.type = "module";
  scriptElement.src = src;
  scriptElement.defer = true;

  // Append the script tag to the document head
  document.head.appendChild(scriptElement);
}

// Call the function for each script file you want to modify
addModuleScript("../JS/scripts.js");
addModuleScript("../JS/data.js");
