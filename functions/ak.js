export default {
  async fetch(request, env) {

    try {

      cached_time = await env.CACHE.read("someCacheKey", async (key) => {
        // time now
        d1 = new Date()
        // in one minute
        d2 = new Date(d1.getTime()+60000)
        console.log (d1);
        console.log (d2);
        
        // Value is the string representation of the expiry time
        return { value: d2.toTimeString(), expiration: d2 };
      })

      from_qs_with = await env.RULES.get("28181987:429827431:cdn:flame-test-data")
      from_qs_without = await env.RULES.get(":cdn:flame-test-data")

      body = "<html><body>\n"
      body += "time: " + cached_time + "</p>\n"
      body += "from_qs_with: '" + from_qs_with + "'</p>\n"
      body += "from_qs_without: '" + from_qs_without + "'</p>\n"
      body += "</body></html>"

      return new Response(body, {    headers: {      'content-type': 'text/html;charset=UTF-8'    },  })     }catch (error) {
      return new Response(error.stack, { status: 500 })
    }
  }
}
