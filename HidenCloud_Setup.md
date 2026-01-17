# HidenCloud 24/7 Server Setup Guide (Minecraft 1.12.2)

HidenCloud provides truly free 24/7 hosting. You just have to click a "Renew" button in their dashboard once every 7 days.

> [!WARNING]
> **School Filter Alert:** HidenCloud often uses non-standard ports (like `:25565`). Many school firewalls block these. If you can't join your server but can join others, use the [Sealos Stealth Guide](file:///Users/yliu3y/Desktop/Minecraft%20website/eaglecraft-site/Sealos_Setup.md) instead!

*Note: If "Locations" are out of stock, see the bottom of this file for alternatives.*

### 1. Account Selection & Finding the Free Tier
1. Go to [HidenCloud.com](https://hidencloud.com/).
2. **CRITICAL:** Scroll all the way to the **bottom** of the page.
3. Look for the **"Resources"** column at the very bottom.
4. Click on **"Free"** and then **"Minecraft"**. 
   - *Do NOT click the "Lite", "Standard", or "Performance" buttons at the top, as those cost money.*

### 2. Create the Server
1. Click **"Order Now"** on the Free Minecraft plan.
2. **Location:** Select any available (e.g., Europe or North America).
3. **Software:** Select **Minecraft Java** -> **Paper** or **Spigot**.
4. **Version:** Select **1.12.2**.
5. Click **"Check Out"** (It should show €0.00).

### 3. Server Configuration (CRITICAL)
1. Go to the **File Manager** in your HidenCloud panel.
2. Find `server.properties` and change this line:
   - `online-mode=true` -> `online-mode=false`
3. Save the file.

### 4. Install Eaglercraft Support
1. Go to the **Plugins** tab (or upload to the `plugins` folder).
2. Look for **EaglercraftXServer** (for 1.12.2).
3. If it's not in the list, download it from [here](https://github.com/lax1dude/eaglercraftx-1.12/releases) and upload it to the `plugins` folder.
4. **Restart** the server.

### 5. Get your WSS Address
1. Look at your server's IP address in the dashboard (e.g., `123.456.78.910:25565`).
2. The Eaglercraft WebSocket usually runs on a different port (check the plugin config or the "Ports/Allocations" tab).
3. Your address for the website will look like:
   - `wss://your-server-ip:port`
   - *Note: If HidenCloud provides a domain like `myserver.hidencloud.com`, use that instead of the IP.*

### 6. Keeping it 24/7
- **Don't forget:** Every week, log into the HidenCloud dashboard and click the **"Renew"** button. If you forget, the server will turn off, but your files will stay safe!

### 7. Join the Game
1. On your Minecraft website, go to **Multiplayer** -> **Add Server**.
2. Paste your `wss://...` address.
3. Enjoy your 24/7 private world!

---

## 🛑 Out of Stock? Try these 24/7 Alternatives:

### 1. Sealos (The Next Best Thing)
If HidenCloud is full, try **Sealos**.
- **The Catch:** They give you free credits when you sign up. Once they run out, you have to create a new account or pay a tiny amount.
- **Link:** [Sealos.io](https://sealos.io/) (Search for "Eaglercraft" in their App Store).

### 2. Oracle Cloud (The "Gold Standard")
This is what professional server owners use. It is **100% Free Forever** and stays online **24/7**.
- **Pros:** 4 CPUs and 24GB of RAM (huge!). No credits, no "Renew" buttons.
- **The Catch:** You **MUST** have a valid Credit or Debit card for identity verification. It won't charge you a cent, but most people under 18 can't get this.
- **Link:** [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/).

### 3. Just Wait!
HidenCloud is "out of stock" because so many people are using it.
- Servers are deleted every day when people forget to click "Renew".
- **Check back in 1 to 2 hours**; a slot will almost certainly open up!

### 4. Aternos (Not 24/7)
Aternos is very popular because it's completely free, but there are two big reasons it might not work for you:
- **No 24/7:** The server automatically turns off if no one is playing. You (or a friend) have to go to the website and click "Start" every single time you want to play.
- **WebSocket Problem:** Aternos doesn't support the magic link (`wss://`) needed for Eaglercraft. To make it work, you'd have to set up another proxy on Replit, which we already saw is getting blocked.

**Verdict:** Use HidenCloud or Sealos instead if you want a server that stays on!
