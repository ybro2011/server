# Sealos "Stealth" Server Setup (Manual Method)

If your last server gave a "503 Error", it's usually because the port was wrong. Follow these **exact** steps for a fresh start.

> [!TIP]
> **Blocked at School?** If this works at home but is "Refused to Connect" at school, the school has blocked the Sealos domain. [Follow the School Bypass Guide here.](file:///Users/yliu3y/Desktop/Minecraft%20website/eaglecraft-site/School_Bypass_Guide.md)

### 1. Open App Launchpad
1. Log in to [Sealos.io](https://sealos.io/).
2. Click **App Launchpad** (Rocket ship).
3. Click **"Create App"**.

### 2. Configure the "Revision Module"
1.  **App Name:** `persesmp` (Lowercase only!)
2.  **Docker Image:** `ghcr.io/yangchuansheng/eaglerx1.8server:1.12.1`
    *   *Note: This is the updated version for "Ghost Mode".*
3.  **CPU:** Min: `1 Core`
4.  **Memory:** Min: `2 Gi` (Crucial for 1.12.2, or it will crash!)
5.  **Container Port:** `5200`
    *   *Ensure the "Public Access" switch is **ON**.*

### 3. Enable Stealth Access (Port 443)
1. Select **"Public"**.
2. **External Port:** Sealos will automatically set this to **443** when you use the public URL. 
3. You should see your URL appearing (e.g., `xxxx.sealos.run`).

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
