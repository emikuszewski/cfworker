// Curlredirect.js
// This worker redirects curl requests to Cloudflare documentation

// From provided script
addEventListener("fetch", event => {
  event.respondWith(doRedirects(event.request))
})

//Updated with URL from #8
const newLocationHost = "developers.cloudflare.com/learning-paths/get-started/"

async function doRedirects(request) {
  
  // OLD CODE --> let reqUA = req.headers.get('user-agent')
  // Updated 'reqUA' to human readable 'requestUserAgent'
  // Added || for fallback
  // Updated 'req' to match 'request' above
  // Updated const vs let to prevent changes to variable
  const requestUserAgent = request.headers.get('user-agent') || ''
  
  // OLD CODE -->  if (reqUA.matches('curl').true)
  // Updated 'reqUA' to human readable 'requestUserAgent' 
  // Fixed matches and added 'i' for case insensitive 
  if (requestUserAgent.match(/curl/i)) {
   
    // OLD CODE -->  let newLocation = "https://"+newLocationHost
    // Updated 'const' vs 'let' to prevent changes to variable
    // Updated URL to use interpolation vs concatenation
    const newLocation = `https://${newLocationHost}`
    return Response.redirect(newLocation, 302)
  }
  
  // Add header for what this worker does
  return new Response('Hi There! This worker redirects curl requests to Cloudflare documentation.', {
      headers: { 'content-type': 'text/plain' }
    })
}
