import http from 'stream-http';
import { constructServerLayout,  sendLayoutHTTPResponse,
} from "single-spa-layout/dist/types/single-spa-layout-server";


const serverLayout = constructServerLayout({
  filePath: 'microfrontend-layout.html',
});


http
  .createServer((req:any, res) => {
    sendLayoutHTTPResponse({
      res,
      serverLayout,
      urlPath: req.path,
      async renderApplication({ appName, propsPromise }){},
      async retrieveApplicationHeaders({ appName, propsPromise }) {},
      async retrieveProp(propName) {},
      async assembleFinalHeaders(allHeaders) {},
      renderFragment(name) {}

    });
  })
  .listen(9000);