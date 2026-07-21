module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generates a new React component boilerplate",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/use{{pascalCase name}}Styles.tsx",
        templateFile: "plop-templates/useComponentSytles.ts.hbs",
      },
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
        templateFile: "plop-templates/Component.spec.tsx.hbs",
      },
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/Component.stories.tsx.hbs",
      },
      {
        type: "modify",
        path: "lib/components/index.ts",
        pattern: /$/g,
        template: 'export * from "./{{pascalCase name}}";\n',
      },
      {
        type: "add",
        path: "lib/plugin/components/{{camelCase name}}/index.ts",
        templateFile: "plop-templates/plugin.ts.hbs",
      },
      {
        type: "modify",
        path: "lib/plugin/index.ts",
        pattern: /(addComponents\(\[\s*)/g,
        template: "$1{{camelCase name}},\n",
      },
      {
        type: "modify",
        path: "lib/plugin/index.ts",
        pattern: /(import base from ".\/base\/base";)/g,
        template:
          '$1\nimport {{camelCase name}} from "./components/{{camelCase name}}";',
      },
    ],
  });
};
