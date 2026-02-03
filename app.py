import os
import http.server
import socketserver

PORT = int(os.environ.get('PORT', 8000))

Handler = http.server.SimpleHTTPRequestHandler

# Allow address reuse to prevent "Address already in use" errors on restart
class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

with ReusableTCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
