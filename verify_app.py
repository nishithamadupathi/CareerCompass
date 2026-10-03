"""
CareerCompass - Automated Verification Test Suite
Validates file integrity, data completeness for all 4 careers and 12-week roadmaps,
and tests HTTP server asset delivery.
"""

import os
import sys
import threading
import time
import urllib.request
import http.server
import socketserver

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def test_file_existence():
    print("[1/4] Checking required files existence...")
    required_files = [
        "index.html",
        "package.json",
        "run.py",
        "README.md",
        "css/styles.css",
        "vendor/react.production.min.js",
        "vendor/react-dom.production.min.js",
        "vendor/babel.min.js",
        "js/data/skills.js",
        "js/data/careers.js",
        "js/data/roadmaps.js",
        "js/app.js"
    ]
    for rel_path in required_files:
        full_path = os.path.join(BASE_DIR, rel_path)
        assert os.path.isfile(full_path), f"Missing file: {rel_path}"
        size = os.path.getsize(full_path)
        assert size > 0, f"File {rel_path} is empty"
        print(f"  [OK] {rel_path} ({size:,} bytes)")
    print("  -> All required files present and non-empty.\n")

def test_static_data_structure():
    print("[2/4] Validating career and roadmap data integrity...")
    
    # Check careers.js
    careers_path = os.path.join(BASE_DIR, "js", "data", "careers.js")
    with open(careers_path, "r", encoding="utf-8") as f:
        careers_content = f.read()
    
    required_careers = ["ai-ml", "software-dev", "data-analyst", "web-dev"]
    for cid in required_careers:
        assert f'id: "{cid}"' in careers_content or f"id: '{cid}'" in careers_content, f"Career {cid} missing in careers.js"
        print(f"  [OK] Career track present: {cid}")

    # Check roadmaps.js
    roadmaps_path = os.path.join(BASE_DIR, "js", "data", "roadmaps.js")
    with open(roadmaps_path, "r", encoding="utf-8") as f:
        roadmaps_content = f.read()

    for cid in required_careers:
        assert f'"{cid}":' in roadmaps_content or f"'{cid}':" in roadmaps_content, f"Roadmap for {cid} missing in roadmaps.js"
        print(f"  [OK] 12-week roadmap present for: {cid}")

    # Check that 12 weeks are mentioned
    for week_num in range(1, 13):
        assert f"week: {week_num}" in roadmaps_content, f"Week {week_num} missing in roadmaps"
    print("  [OK] All 12 weeks verified across roadmaps.\n")

def test_react_app_components():
    print("[3/4] Verifying React components and core user flow...")
    app_path = os.path.join(BASE_DIR, "js", "app.js")
    with open(app_path, "r", encoding="utf-8") as f:
        app_content = f.read()

    expected_components = [
        "CareerCompassApp",
        "LandingView",
        "ProfileView",
        "DiscoveryView",
        "SkillGapView",
        "RoadmapView",
        "DashboardView",
        "ExportPlanModal"
    ]
    for comp in expected_components:
        assert comp in app_content, f"React component {comp} missing in app.js"
        print(f"  [OK] Component defined: {comp}")

    # Verify key interaction triggers
    assert "markSkillAsLearned" in app_content, "Skill gap 'mark as learned' logic missing"
    assert "toggleWeekCompletion" in app_content, "Roadmap week toggle logic missing"
    assert "calculateMatch" in app_content, "Career match calculation missing"
    assert "localStorage" in app_content, "Local storage persistence missing"
    print("  [OK] State management, local storage, and calculation logic verified.\n")

def test_http_serving():
    print("[4/4] Testing HTTP asset serving over local server...")
    port = 9876
    
    class SilentHandler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=BASE_DIR, **kwargs)
        def log_message(self, format, *args):
            pass

    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    server = socketserver.TCPServer(("", port), SilentHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()
    time.sleep(0.5)

    try:
        endpoints = [
            "/",
            "/index.html",
            "/css/styles.css",
            "/vendor/react.production.min.js",
            "/vendor/react-dom.production.min.js",
            "/vendor/babel.min.js",
            "/js/data/skills.js",
            "/js/data/careers.js",
            "/js/data/roadmaps.js",
            "/js/app.js",
            "/package.json"
        ]
        for ep in endpoints:
            url = f"http://localhost:{port}{ep}"
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req, timeout=3) as resp:
                status = resp.status
                content = resp.read()
                assert status == 200, f"Endpoint {ep} returned status {status}"
                assert len(content) > 0, f"Endpoint {ep} returned empty content"
                print(f"  [OK] HTTP 200 OK: {ep} ({len(content):,} bytes)")
        print("  -> All HTTP endpoints successfully serve valid data.\n")
    finally:
        server.shutdown()
        server.server_close()

def main():
    print("=" * 60)
    print("  CareerCompass QA Test Suite")
    print("=" * 60)
    test_file_existence()
    test_static_data_structure()
    test_react_app_components()
    test_http_serving()
    print("=" * 60)
    print("  SUCCESS: ALL VERIFICATION TESTS PASSED!")
    print("=" * 60)

if __name__ == "__main__":
    main()
