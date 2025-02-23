# cfworker
cfworker

Example:

Command 
  --> curl -I https://cfworker.mikuszed.workers.dev

Response  
  HTTP/2 302 
  date: Sun, 23 Feb 2025 16:54:43 GMT
  location: https://developers.cloudflare.com/learning-paths/get-started/
  report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?  s=Drc9IQwhHd%2BbsBTo2Dlz9RIqF%2BSvoABZSOeQiq24Nsm6nJnnSzfSAk5OhyXfHGGMhkgZrs6V15WvR3oumtLjRd39mSd9W8h%2FMsP8HgzJUxlmeF9CPcLe8Ynk2ZFc9b8F7n0Dvhx4fm0D8aO6YKGhCQ%3D%3D"}],"group":"cf-nel","max_age":604800}
  nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
  server: cloudflare
  cf-ray: 9168bd4a4ad0f06c-DFW
  alt-svc: h3=":443"; ma=86400
  server-timing: cfL4;desc="?        
proto=TCP&rtt=28785&min_rtt=23595&rtt_var=12555&sent=5&recv=8&lost=0&retrans=0&sent_bytes=2932&recv_bytes=583&delivery_rate=122737&cwnd=140&u  nsent_bytes=0&cid=de3c2dcdfbf81c9a&ts=38&x=0"

Key Things To Look For:

Redirect -->
HTTP/2 302

Destination URL -->
https://developers.cloudflare.com/learning-paths/get-started/ 

Cloudflare-specific Headers -->
cf-ray: 9168bd4a4ad0f06c-DFW
