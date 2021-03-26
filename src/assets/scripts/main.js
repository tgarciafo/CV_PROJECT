/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

 window.addEventListener("load", () => {
  document.querySelector("#menuIcon").addEventListener("click", e => {
      var x = document.getElementById("menuNav");
      if (x.className === "menu") {
          x.className += " responsive";
      } else {
          x.className = "menu";
      }
  });
});

