const path = require("path");
const fs = require("fs");

//  Path of templated htmls for each role

const htmlTemplates = path.resolve(__dirname, "../htmlTemplates");

//  Main function to push all generated html divs into my main page
const employeeRenderer = (team) => {
  // console.log(team);
  const html = [];

  // Filtering by role and mapping with role related inputs

  html.push(
    team
      .filter((team) => team.getRole() === "Manager")
      .map((newMngr) => renderManager(newMngr))
  );
  html.push(
    team
      .filter((team) => team.getRole() === "Engineer")
      .map((engineers) => renderEngineer(engineers))
  );
  html.push(
    team
      .filter((team) => team.getRole() === "Intern")
      .map((interns) => renderIntern(interns))
  );
  return renderMain(html.join(""));
};

//  Rendering manager template html and passing necessary inputs

const renderManager = (manager) => {
  //  reading file of template html
  let template = fs.readFileSync(
    path.resolve(htmlTemplates, "Manager.html"),
    "utf8"
  );
  template = placeValue(template, "name", manager.getName());
  template = placeValue(template, "role", manager.getRole());
  template = placeValue(template, "email", manager.getEmail());
  template = placeValue(template, "id", manager.getId());
  template = placeValue(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

//  Rendering Engineer template html and passing necessary inputs

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(htmlTemplates, "Engineer.html"),
    "utf8"
  );
  template = placeValue(template, "name", engineer.getName());
  template = placeValue(template, "role", engineer.getRole());
  template = placeValue(template, "email", engineer.getEmail());
  template = placeValue(template, "id", engineer.getId());
  template = placeValue(template, "github", engineer.getGithub());
  return template;
};

//  Rendering Intern template html and passing necessary inputs

const renderIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(htmlTemplates, "Intern.html"),
    "utf8"
  );
  template = placeValue(template, "name", intern.getName());
  template = placeValue(template, "role", intern.getRole());
  template = placeValue(template, "email", intern.getEmail());
  template = placeValue(template, "id", intern.getId());
  template = placeValue(template, "school", intern.getSchool());
  return template;
};

const renderMain = (html) => {
  const template = fs.readFileSync(
    path.resolve(htmlTemplates, "main.html"),
    "utf8"
  );
  return placeValue(template, "team", html);
};

// Function to replace placeholders in template html with values from team array
const placeValue = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = employeeRenderer;
