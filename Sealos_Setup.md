# Sealos Official "One-Click" Setup 🚀

Since you originally used the official code, the **Sealos App Store** is the best and easiest way to get your server back online!

### 1. The Easy Deployment
1.  Go to your **Sealos Desktop**.
2.  Open the **App Store** (Rainbow icon).
3.  Search for **"Eaglercraft"**.
4.  Click on the Eaglercraft template and hit **"Deploy"**.
    *   *This automatically sets up everything (server + plugins).*

### 2. Tiered Performance Recommendations
Choose the tier that fits your needs:

| Setting | **Standard (1-3 Players)** | **PRO (5-15 Players)** | **ULTIMATE (Large World/24x7)** |
| :--- | :--- | :--- | :--- |
| **CPU** | `1 Core` | `2 Cores` | `4 Cores` |
| **Memory** | `2 Gi` | `4 Gi` | `6 Gi` |
| **Storage** | `5 Gi` | `10 Gi` | `20 Gi+` |

> [!WARNING]
> **PRICE ALERT:** Sealos shows a "Max Monthly Cost" which assumes your server is under 100% stress 24/7. 
> - If it says **$500**, you accidentally selected the **PRO Cluster** or **Dedicated Nodes**.
> - **Fix:** Switch back to **Standard/Shared** pods. A normal 1.12.2 server should cost about **$15-$25/month** total if running 24/7, and even less if you only play at school!

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

### 7. Fixing the 503 "Service Unavailable" Error 🛠️
If your link shows a 503 error, follow these exact steps to recover:

1.  **Check for "OOMKilled":**
    - Go to the **Logs** tab of your app.
    - If you see `OOMKilled`, it means the server crashed because it ran out of RAM.
    - **The Fix:** Go to **"Update"** and increase Memory to `3 Gi`. 1.12.2 is very heavy!

2.  **Check for "No Healthy Upstream":**
    - This means Sealos is looking at the wrong Port.
    - Go to the **Logs** and look for a line like: `[Eagler] Starting WebSocket Proxy on port 8081`.
    - **The Fix:** Go to **"Update"**, find the **Container Port**, and change it from `5200` to `8081` (or whatever number you see in your logs).

4.  **Check for "No Space Left on Device":**
    - This happens if your world or logs grow too big for the `2 Gi` limit.
    - **The Symptoms:** The server starts but then immediately crashes or gives "Internal Server Error".
    - **The Fix:** Go to **"Update"**, find your **Volume**, and increase the size to `5 Gi`. 
    - *Note: You can also use the Terminal to run `du -sh /eaglerX-1.8-server/bungee/logs` to see if logs are hogging space.*

5.  **The "Nuclear" Restart / Clean Install:**
    - If nothing works and you suspect storage corruption, delete the app, delete the volume, and start fresh with the **App Store** method.
