# 🚀 The Ultimate School Bypass (Domain Masking)

If your Sealos server works at home but not at school, it's because the school filter has blacklisted the words "sealos.app" or "sealos.run". 

We will fix this by creating a **Cloudflare "Secret Tunnel"** that masks your server under a trusted `workers.dev` domain.

### 1. Create a Cloudflare Account
1. Go to [Cloudflare.com](https://cloudflare.com) and sign up for a free account.
2. Verify your email.

### 2. Create the "Secret Tunnel" (Worker)
1. In your Cloudflare dashboard, click **"Workers & Pages"** on the left sidebar.
2. Click **"Create Application"** -> **"Create Worker"**.
3. Name it something school-appropriate like `maths-calculator` or `pmt-revision`.
4. Click **"Deploy"**.
5. Once deployed, click **"Edit Code"**.

### 3. Paste the Proxy Script
Delete everything in the editor and paste this exact code:

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // REPLACE THE URL BELOW WITH YOUR SEALOS PUBLIC ADDRESS
    const targetAddress = "leeamqhjtlbw.usw-1.sealos.app"; 

    url.hostname = targetAddress;
    url.port = "443";
    url.protocol = "https:";

    const newRequest = new Request(url, request);
    
    // Handle WebSocket upgrade headers for Eaglercraft
    if (request.headers.get("Upgrade") === "websocket") {
      return fetch(newRequest);
    }

    return fetch(newRequest, {
      redirect: "follow"
    });
  },
};
```

6. **CRITICAL:** Change `leeamqhjtlbw.usw-1.sealos.app` in the code above to your *own* Sealos URL if it's different.
7. Click **"Save and Deploy"**.

### 4. Update your Website
1. Get your new tunnel link from the Cloudflare dashboard (it will look like `https://maths-calculator.yourname.workers.dev`).
2. In your Minecraft website's server list, change your server address to:
   **`wss://maths-calculator.yourname.workers.dev`**
3. Push the changes to GitHub.

### 💡 Why this works
When you connect to `workers.dev`, the school firewall says: *"Oh, Cloudflare Workers? That's used for web development and school projects. ALLOWED."*
Cloudflare then secretly talks to Sealos for you and passes the data back through the "legal" tunnel. The school filter never even sees the word "Sealos"!
