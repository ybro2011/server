# Connectivity & "Already Connected" Fixes 🛠️

If you are seeing errors at school, use these quick fixes.

### 1. "Already connected to this proxy"
This is the most common error at school. It means the server thinks you are already logged in.
*   **The Cause:** All students at your school share the same "Public IP". If two people use the same username (like the default "Player"), BungeeCord blocks the second one.
*   **The Fix:** 
    1.  Go back to the **Eaglercraft Main Menu**.
    2.  Click **"Edit Profile"** or the **Settings** gear.
    3.  Change your **Username** to something unique (e.g., `SuperStudent_99`).
    4.  Try joining again!

### 2. "Disconnected" or "Outdated Server"
If the game won't load at all or says it's outdated:
*   **The Fix:** Visit the **"Troubleshoot"** panel in the game HUD on your website. It has a command you can copy-paste into your Sealos terminal to update the plugins.

### 3. "Connection Refused" (School Firewall)
If the game loads but you can't join the server:
*   **The Fix:** Make sure you are using your **Cloudflare Worker** link if the `sealos.app` domain is blocked.

### 4. "No Space Left on Device" (Storage Full)
If your world grows too large or logs fill up the disk:
*   **The Symptoms:** Server crashes on startup or says "Failed to save world".
*   **The Fix:** 
    1.  Go to **Sealos App Launchpad** -> **Update**.
    2.  Increase the **Volume Size** from `2 Gi` to `5 Gi`.
    3.  If you want to clean up logs to save space, run this in the terminal:
        `rm -rf /eaglerX-1.8-server/bungee/logs/*`
