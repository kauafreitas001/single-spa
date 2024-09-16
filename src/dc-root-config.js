import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: (location) => location.pathname == '/', PARA RENDERIZAR O FRONT APENAS QUANDO A URL FOR EXATAMENTE IGUAL
// });

registerApplication({
  name: "@dc/nav-bar",
  app: () => System.import("@dc/nav-bar"),
  activeWhen: ["/"],
  customProps: {
    domElement: document.getElementById('menu-container'),
  },
});

registerApplication({
  name: "@dc/atendimento",
  app: () => System.import("@dc/atendimento"),
  activeWhen: ["/"],
  customProps: {
    domElement: document.getElementById('content-container'),
  },
});

start({
  urlRerouteOnly: true,
});
