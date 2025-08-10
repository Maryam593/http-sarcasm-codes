# HTTP Sarcasm Codes 🙃

Ever wanted your API to roast your users instead of just sending boring status codes?  
Welcome to **HTTP Sarcasm Codes**—because your server deserves a sense of humor.

---

## 🤷 What Is This?

A collection of HTTP status codes with enough sarcasm to make your backend feel like a stand-up comedian.  
Perfect for developers who think error messages should be as witty as their commit messages.

---

## 📦 Installation

```bash
npm install http-sarcasm-codes
```

---

## 🚀 Usage

```js
import { errorCodes, getErrorMessage } from "http-sarcasm-codes";

console.log(errorCodes[404]);
// Output: Like your favorite pen… gone forever. 🖊️✨

console.log(getErrorMessage(500));
// Output: It’s not you, it’s me. 💔💻
```

---

## 🙏 License

MIT License.  
Do whatever you want—just don’t blame me when your users start sending snarky bug reports.

See [LICENSE](LICENSE) for the legal mumbo jumbo.