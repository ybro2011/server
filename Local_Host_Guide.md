# Plan B: 24/7 Local PC Hosting (The "Pro" Way)

Since HidenCloud is out of stock, your own computer is the best server! You can use a **"Secure Tunnel"** to let your friends join even if you're behind a school or home firewall.

### 1. Requirements
- A spare laptop or PC that can stay turned on.
- No money, no credits, and no "stock" limits.

### 2. Setup the Server on your PC
1. Download the **Eaglercraft 1.12.2 Server Folder**.
2. Run `start.bat` (Windows) or `start.sh` (Mac/Linux).
3. Accept the EULA by changing `eula=false` to `eula=true` in `eula.txt`.
4. In `server.properties`, make sure `online-mode=false`.

### 3. Create the Tunnel (Cloudflare)
Cloudflare is the best way to get a `wss://` address for free.
1. Download **[cloudflared](https://github.com/cloudflare/cloudflared/releases)**.
2. Run this command in your terminal:
   ```bash
   cloudflared tunnel --url http://localhost:8081
   ```
3. Cloudflare will give you a random link like: `https://something-random.trycloudflare.com`.

### 4. Join the Game
1. On your website, add a server using:
   - `wss://something-random.trycloudflare.com`
2. As long as your computer is on and `cloudflared` is running, your friends can join 24/7!

### 5. Why this is the best:
- **No Credits:** You never have to pay or wait.
- **Fast:** Since it's on your own hardware, it won't lag.
- **24/7:** Just leave the laptop lid open!

**Recommendation:** If HidenCloud doesn't restock by tomorrow, go with this method. It's much more reliable!
