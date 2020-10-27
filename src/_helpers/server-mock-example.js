export function mockExample() {

  const requestOptions = {
    method : 'GET',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body   : { username : "foo" }
  };

  mock( 'example?auth=token', requestOptions )
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
    });
}