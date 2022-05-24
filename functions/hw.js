// Reacts to POST /hello-world
export async function onRequestPost(request) {
  // ...
  console.log ('a');
  return new Response(`Hello world`);
}
