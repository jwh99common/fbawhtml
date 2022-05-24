addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  if (request.method.toLowerCase() === "options") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
  }
console.log ('z');

  return new Response('Hello worker!', {
    headers: {
      'content-type': 'text/html',
      "Access-Control-Allow-Origin": "*"
    },
  })
}
