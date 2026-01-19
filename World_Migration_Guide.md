4.  **CRITICAL:** The app **MUST** be in the "Running" state (Green circle). If it is "Stopped" or "Crashed", the **`>_`** Terminal button will be invisible.
    - *If it's stopped, click the **Start** button first.*
5.  **Find the Terminal:** Look for the small **`>_`** icon in the top right.
6.  Paste this command:
    ```bash
    apt-get update && apt-get install -y zip curl && \
    zip -r world_backup.zip /eaglerX-1.8-server/server/world && \
    curl --upload-file ./world_backup.zip https://bashupload.com/world_backup.zip
    ```
4.  **Copy the link** that the terminal gives you (it will look like `https://bashupload.com/xxxxxx/world_backup.zip`).
5.  Download that file to your computer.

### Part 2: Importing to HidenCloud
1.  Log into your **HidenCloud Panel**.
2.  Go to the **File Manager**.
3.  Upload the `world_backup.zip` you just downloaded.
4.  Right-click the file and select **Unarchive** or **Extract**.
5.  Make sure the folder is named `world` (HidenCloud's default world folder name).
6.  Restart your HidenCloud server.

### Part 3: Fixing "Outdated Client" on HidenCloud
If you join and it says your client is too new/old:
1.  Go to the **Console** on HidenCloud.
2.  Type `version` to see what it's running.
3.  If needed, install the **ViaVersion** and **ViaBackwards** plugins in your `plugins` folder on HidenCloud to support 1.12.2.

### �️ How to find the "Storage" App
If you are still inside the screen from your photo, you need to go "home" first:
1.  **Click the Blue Paper Plane Icon** in the absolute **Top-Left Corner** of the entire website. 
    *   *This is the "Home" button for Sealos.*
2.  Now you will see the **Sealos Desktop** (it looks like a computer screen with many icons).
3.  Look for the **Storage** icon (it looks like a blue folder or hard drive). 

### 🛡️ The "Backdoor" Method (Storage App)
Once you open the **Storage** app:
1.  Look for the volume named **`persesmp-world`** (or just `world`).
2.  Click the **"Browser"** or **"File Manager"** icon next to it.
3.  Go into `server` -> `world`.
4.  Select all the files inside and click **Download**.
5.  **Zip them myself:** On your computer, put those files into a folder called `world` and zip it. 
