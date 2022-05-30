 export async function onRequest(context) {
     // Contents of context object
    const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
    } = context;
  
return new Response("Hello, world!");
  
       const cached_time = await env.CACHE.read("someCacheKey", async (key) => {
        // time now
        d1 = new Date();
        // in one minute
        d2 = new Date(d1.getTime()+60000);
        console.log (d1);
        console.log (d2);
        
        // Value is the string representation of the expiry time
        
         
          body = "<html><body>\n";
      body += "time: " + cached_time + "</p>\n";
      body += "d1 : " + d1+ "'</p>\n";
      body += "d2 " + from_qs_without + "'</p>\n";
      body += "</body></html>";
        return  new repsone (body);
        
      })

      from_qs_with = await env.RULES.get("28181987:429827431:cdn:flame-test-data");
  
      from_qs_without = await env.RULES.get(":cdn:flame-test-data");
      console.log ('with: ' + from_qs_with);
      console.log ('without: ' + from_qs_without);
 
      body = "<html><body>\n";
      body += "time: " + cached_time + "</p>\n";
      body += "from_qs_with: '" + from_qs_with + "'</p>\n";
      body += "from_qs_without: '" + from_qs_without + "'</p>\n";
      body += "</body></html>";

      return new Response(body)
    
 }
