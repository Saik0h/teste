import Module from "../../../_lib/Module_Initializer.js";
import UrlController from "./url.controller.js";

const urlController = new UrlController();

export const urlModuleConfig = {
  name: 'URLs',
  globalMiddlewares: [],
  prefix: '/urls',           
  routes: [
    {
      method: 'POST',
      path: '/shorten',
      handler: urlController.shortenUrl,
    },
    {
      method: 'GET',
      path: '/:id',
      handler: urlController.redirectToURL,
    },
  ],
};

const UrlModule = new Module(urlModuleConfig);
export default UrlModule