# Hosting Your Minecraft Website (Eaglecraft)

To play your website from anywhere, you need to "host" it on a web server. Since your site is a collection of static files (HTML, CSS, JS), you can do this for **FREE**.

## Recommended Options

### Option 1: GitHub Pages (Best for permanent/school use)
1.  **Create an account** on [github.com](https://github.com).
2.  **Create a new Repository** named `minecraft-web`.
3.  **Upload your files**:
    *   Upload everything inside your `eaglecraft-site` folder.
    *   Make sure `index.html` is in the root (top) folder of the repository.
    *   Make sure the `game/` folder is uploaded too.
4.  **Enable Hosting**:
    *   Go to **Settings** > **Pages**.
    *   Under "Build and deployment", set Branch to `main` and click **Save**.
5.  **Result**: Your site will be live at `https://USERNAME.github.io/minecraft-web/`.

### Option 2: Vercel (Easiest / Drag & Drop)
1.  Go to [vercel.com](https://vercel.com).
2.  Sign up with your email or GitHub.
3.  **Deploy**: Just drag and drop your `eaglecraft-site` folder directly onto the Vercel dashboard.
4.  **Result**: Vercel will give you a random live link (e.g., `minecraft-site.vercel.app`) instantly.

---

### ⚠️ Important: File Size Limits
Some free hosts have limits. 
*   **GitHub Pages**: Limit is 1GB (Your game is ~15MB, so it's fine).
*   **WASM Support**: Both Vercel and GitHub support WASM files, which is perfect for your performance version.

### Next Steps
Try **Vercel** first if you want it live in 30 seconds. Try **GitHub** if you want to keep the code organized forever.

---

## 🚀 The "Performance Kings" (Fastest Loading)

If you want the game to load instantly for everyone (fastest download of the large `.wasm` and `.epk` files), these are the winners:

1.  **Vercel (Recommended):** They have one of the fastest global edge networks. When someone visits your link, the 15MB game file is delivered from the server physically closest to them.
2.  **Cloudflare Pages:** Technically the "fastest" for low-latency static assets. Since Cloudflare powers a huge portion of the internet's infrastructure, their delivery speed is unrivaled.

**Why it matters:**  
Eaglecraft performance isn't just about FPS; it's about **Load Time**. Using a host with a high-speed CDN ensures the game doesn't get stuck on the "Downloading Resources" screen for your players.

