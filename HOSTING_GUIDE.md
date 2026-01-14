---

## 🛡️ The "Ghost" Hosts (Hardest to Block)
If `github.io` and `vercel.app` are blocked, use these "Academic" looking providers.

### 1. Surge.sh (The Hacker's Choice)
Surge is a tiny service that most school filters have never heard of. 
1.  Open your computer's terminal (or CMD).
2.  Type: `npm install --global surge`
3.  Type: `surge ./` inside your folder.
4.  It will ask for an email/password (create one).
5.  **Stealth Tip:** When it asks for a domain, type something like `homework-maths-pmt.surge.sh`.

### 2. Google Sites "Wrapper" (The Ultimate Shield)
Schools **must** allow `sites.google.com` for classes.
1.  Go to [sites.google.com](https://sites.google.com).
2.  Start a new "Blank" site.
3.  In the right panel, click **Embed**.
4.  Paste your GitHub link (even if it's blocked, it might work inside the embed).
5.  If that doesn't work, click **Embed Code** instead and paste the code from `index.html`.
6.  Publish. Your link will start with `sites.google.com/view/...`.

### 3. Firebase (Google's Pro Host)
This uses Google's own domains (`*.web.app`), which are rarely blocked.
1.  Go to [Firebase Console](https://console.firebase.google.com/).
2.  Create a project and enable **Hosting**.
3.  Follow the 3-step setup to upload your folder.

### 4. Netlify (The Professional Clone)
Netlify uses `nifty-site-name.netlify.app`. 
1.  Go to [Netlify.com](https://netlify.com) and sign up.
2.  **Drag & Drop** your folder into their "Deploy" area.
3.  Change the site name to something like `advanced-mathematics-pmt`.

### 5. Render.com (The New Frontier)
Render is newer and often completely overlooked by library/school filters.
1.  Create a "Static Site" on [Render.com](https://render.com).
2.  Connect your GitHub.
3.  The domain will be `yoursite.onrender.com`.

---

## 🛠️ Fixing "Refused to Connect" in Embeds
If the website works but the game box says "Refused to connect," it means the filter is blocking the iframe source.
**The Fix:** I've updated `index.html` with a **Blob URL Stealth Loader**. It now pulls the game data "under the radar" and runs it locally on the main page's domain. Push the latest code to GitHub for this to activate!

