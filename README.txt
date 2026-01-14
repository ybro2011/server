HIGHT PERFORMANCE INSTRUCTIONS (JS/WASM)
=====================================

You chose to use the JS/WASM version for better performance. 
Instead of one single file, you will have several.

STEPS:

1.  **Place Files:**
    Move ALL the files you downloaded into the `game/` folder:
    `/Users/yliu3y/Desktop/Minecraft website/eaglecraft-site/game/`

    You should have files like:
    - `classes.js`
    - `assets.epk`
    - `eaglercraft.wasm` (if using WASM)
    - `index.html` (The entry point)

2.  **Rename Entry Point:**
    Rename the `index.html` (the one INSIDE the game folder) to exactly: `game_entry.html`
    
    *Wait, why?* Because your website already has an `index.html`. 
    Renaming it prevents conflicts.

3.  **Play:**
    Open the main `index.html` (in the root folder) and click "Play Now".

=====================================
Troubleshooting:
- Ensure `game_entry.html` is inside the `game/` folder.
- If you still have a single file version, you can just rename it to `game.html` and put it in the root folder (it will still work as a backup).
