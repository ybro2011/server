/**
 * Eaglercraft Unified Bridge & Website Proxy
 * Bypasses school blocks by hosting the frontend on workers.dev
 */

const BACKEND_SITE = "https://server-b0e.pages.dev";
const BACKEND_GAME = "http://zeus.hidencloud.com:24669";

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // 1. Handle WebSocket Bridge (Eaglercraft Game Traffic)
        if (request.headers.get("Upgrade") === "websocket") {
            try {
                const newReq = new Request(BACKEND_GAME, request);
                const headers = new Headers(newReq.headers);

                // Strip Cloudflare/Forwarded headers to bypass HidenCloud WAF
                for (const [key, value] of headers.entries()) {
                    if (key.toLowerCase().startsWith("cf-") || key.toLowerCase().startsWith("x-forwarded-")) {
                        headers.delete(key);
                    }
                }

                headers.set("Host", "zeus.hidencloud.com");
                headers.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

                return await fetch(BACKEND_GAME, {
                    method: request.method,
                    headers: headers,
                });
            } catch (err) {
                return new Response("Bridge Error: " + err.message, { status: 500 });
            }
        }

        // 2. Handle Website Proxy (Hosting Frontend on workers.dev)
        try {
            const proxyUrl = new URL(url.pathname + url.search, BACKEND_SITE);
            const proxyReq = new Request(proxyUrl, request);

            // Set correct Host header for the backend
            proxyReq.headers.set("Host", new URL(BACKEND_SITE).hostname);

            const response = await fetch(proxyReq);

            // Create a new response to modify headers if needed
            const newResponse = new Response(response.body, response);
            newResponse.headers.set("Access-Control-Allow-Origin", "*");

            return newResponse;

        } catch (err) {
            return new Response("Proxy Error: " + err.message, { status: 500 });
        }
    },
};