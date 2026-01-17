# Sealos Official "One-Click" Setup 🚀

Since you originally used the official code, the **Sealos App Store** is the best and easiest way to get your server back online!

### 1. The Easy Deployment
1.  Go to your **Sealos Desktop**.
2.  Open the **App Store** (Rainbow icon).
3.  Search for **"Eaglercraft"**.
4.  Click on the Eaglercraft template and hit **"Deploy"**.
    *   *This automatically sets up everything (server + plugins).*

### 2. Tweak for Performance (Ghost Mode)
Once deployed, click on your new app in the **App Launchpad** to verify:
1.  **CPU:** `1 Core`
2.  **Memory:** `2 Gi` (Crucial for 1.12.2 support!)
3.  **Port:** Ensure **5200** is public (this is your wss:// link).

### 3. Sync with Website
*   Copy your **Public URL** (it looks like `xxxxxxxx.usw-1.sealos.app`).
*   Go to your website, click the **SYNC** button, and paste your URL.
*   The website will automatically add `:443` and connect you!

> [!TIP]
> If it says "Outdated Server", use the **TROUBLESHOOT** button on the website—it has a one-line command to fix the plugins in 5 seconds!

### 4. Storage (Important!)
1. Click **"Add Volume"**.
2. **Mount Path:** `/world`  <-- **USE THIS FOR THE WORLD DATA**
3. **Size:** `2 Gi`.
   - *Since Sealos only lets you add one volume in the basic view, this is the most important one to keep your world safe!*

### 5. Deploy & Check Logs
1. Click **"Deploy"**.
2. **CRITICAL:** Go to the **"Logs"** tab immediately.
3. **Find the Port:** Look for a line that says something like `Listening on port: 8081` or `5200`.
   - *If the number in your logs is different than 8081, you MUST go back to "Update" and change the Container Port to match the logs!*

### 6. Get your Address
Your website link will be:
`wss://[YOUR-SEALOS-URL]` (e.g., `wss://persesmp-xxxx.sealos.run`)

---

### 💡 Why this works
By pointing the **Container Port** to the number found in your logs, Sealos can finally "see" your server and clear that 503 error. Setting the **Mount Path to /world** ensures your builds are saved forever!
