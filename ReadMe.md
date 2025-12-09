# HTTP Sarcasm Codes 🙃
[![npm](https://img.shields.io/npm/dt/http-sarcasm-codes?style=for-the-badge)](https://www.npmjs.com/package/http-sarcasm-codes)

Ever wanted your API to roast your users instead of just sending boring status codes?  
Welcome to **HTTP Sarcasm Codes**—because your server deserves a sense of humor.  
Finally, your backend can be as passive-aggressive as your code reviews.

---

## 🤷 What Is This?

A collection of HTTP status codes with enough sarcasm to make your backend feel like a stand-up comedian.  
Perfect for developers who think error messages should be as witty as their commit messages.  
Because why settle for boring errors when you can confuse and amuse your users at the same time?

---

## 📦 Installation

```bash
npm install http-sarcasm-codes
```

---

## 🚀 Usage

### 1. Use the Sarcastic Codes Directly

```js
import { errorCodes } from "http-sarcasm-codes";

console.log(errorCodes[404]);
// Output: Like your favorite pen… gone forever. 🖊️✨
```

### 2. Fetch Sarcastic Messages Dynamically

If you want your app to fetch sarcasm from a local API (because static files are so last season):

```js
import { getErrorMessage } from "http-sarcasm-codes";

getErrorMessage(500).then(msg => {
  console.log(msg);
  // Output: It’s not you, it’s me. 💔💻
});
```

### 3. Run the Excuse API Server

If you want to serve sarcasm over HTTP (for maximum confusion), fire up the **Excuse API**:

```bash
node server.js
```

Your Excuse API will be available at `http://localhost:3000/error/:code`.  
Try it in your browser or with `curl`:

```bash
curl http://localhost:3000/error/418
# Output: I’m a Teapot — 'Yes, seriously.' 🍵
```

---

## 🙏 License

MIT License.  
Do whatever you want—just don’t blame me when your users start sending snarky bug reports.

See [LICENSE](LICENSE) for the legal mumbo jumbo.
