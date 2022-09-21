const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "http://demoqa.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("task", {
        log(message){
          console.log(`Soy el console log del task ${message}`)
          return null
        }
      });
    },
  },
});
