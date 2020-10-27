import exampleModel from "./models/example.json";

export function serverMock() {

  window.mock = function ( url, content ) {

    // Switch endpoint
    switch(url) {

      case "example":
      case "example?auth=token":
        return example(url,content);

      default:
        // pass through any requests not handled above
        return fetch(url, content).then(response => resolve(response));
    }
  }

  function example (url,content) {

    return new Promise((resolve, reject) => {

      // Declare response
      let response = {
        ok : false
      };

      // Get request method
      let method = content.method;

      if ( method == "POST" ) {

        // Get payload from request, use them to resolve/throw errors
        let payload = content.body;

        if (payload) {

          // Declare response
          response.ok = true;
          response.body = exampleModel;

        }
      } else {

        if ( url.endsWith('auth=token') ) {
          // Declare response
          response.ok = true;
          response.body = exampleModel;
        }

      }

      // Make sure response is good
      if ( response.ok ) {

        // Resolve
        return resolve({ ok: true, json: () => Promise.resolve(JSON.stringify( response.body )) });

      } else {

        // Throw error
        return reject('Request was not good');
      }
    });
  }
}
