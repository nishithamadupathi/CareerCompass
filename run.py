"""
CareerCompass - Local Development & Evaluation Server
Runs a lightweight zero-dependency HTTP server and opens the browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Clean logging
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def main():
    os.chdir(DIRECTORY)
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True

    actual_port = PORT
    for attempt in range(10):
        try:
            with socketserver.TCPServer(("", actual_port), Handler) as httpd:
                url = f"http://localhost:{actual_port}"
                print("=" * 60)
                print("  🧭 CareerCompass - Student Career & Skill Gap Roadmap")
                print("=" * 60)
                print(f"  Server running at: {url}")
                print(f"  Serving files from: {DIRECTORY}")
                print("  Press Ctrl+C to stop the server.")
                print("=" * 60)

                # Open browser automatically if not headless
                try:
                    webbrowser.open(url)
                except Exception:
                    pass

                httpd.serve_forever()
                break
        except OSError as e:
            if "Address already in use" in str(e) or e.errno == 98 or e.winerror == 10048:
                actual_port += 1
            else:
                raise

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nCareerCompass server stopped.")
