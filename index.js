// Sarcastic HTTP Status Codes Library
// Inspired by Wikipedia's full list of HTTP status codes

export const errorCodes = {
    // 1xx - Informational
    100: "Continue — Server says: 'Go on, I’m listening… probably.' 👂",
    101: "Switching Protocols — 'Changing my outfit, gimme a sec.' 👗🔄",
    102: "Processing — 'Slow and steady loses the race.' 🐌",
    103: "Early Hints — 'Here’s a teaser before the main show.' 🎬",

    // 2xx - Success
    200: "OK — 'Everything worked. I’m as shocked as you are.' ✅",
    201: "Created — 'Congrats, you just made something out of nothing.' 🎉",
    202: "Accepted — 'Not now, but sure… maybe later.' ⏳",
    203: "Non-Authoritative Information — 'I copied this from someone else.' 📋",
    204: "No Content — 'Mission accomplished… but I brought nothing.' 📭",
    205: "Reset Content — 'Go ahead, refresh your brain.' 🔄",
    206: "Partial Content — 'Here’s half… the rest is a mystery.' 🧩",
    207: "Multi-Status — 'Too much info, too little care.' 📑",
    208: "Already Reported — 'Yeah, yeah… I heard you the first time.' 🔁",
    226: "IM Used — 'I processed this with some extra magic.' ✨",

    // 3xx - Redirection
    300: "Multiple Choices — 'Pick one… I don’t care.' 🤷‍♂️",
    301: "Moved Permanently — 'I live somewhere else now.' 🏠",
    302: "Found — 'Oh hey, over here!' 👋",
    303: "See Other — 'This isn’t the page you’re looking for.' 🛑",
    304: "Not Modified — 'Nothing new, move along.' 🚶",
    305: "Use Proxy — 'Talk to my middleman.' 🕵️‍♂️",
    307: "Temporary Redirect — 'Just visiting somewhere else for now.' 🧳",
    308: "Permanent Redirect — 'I’ve moved out, don’t send mail here.' 📦",

    // 4xx - Client Errors
    400: "Bad Request — 'Your request is as broken as my Monday morning.' ☕💥",
    401: "Unauthorized — 'Nice try, but no VIP pass for you.' 🚪❌",
    402: "Payment Required — 'Show me the money.' 💸",
    403: "Forbidden — 'You can’t sit with us.' 🚫",
    404: "Not Found — 'Like your favorite pen… gone forever.' 🖊️✨",
    405: "Method Not Allowed — 'That’s not how we do things here.' 🙅",
    406: "Not Acceptable — 'Nope, not good enough for my standards.' 👑",
    407: "Proxy Authentication Required — 'Ask my bouncer first.' 🕶️",
    408: "Request Timeout — 'I got bored and left.' ⏰",
    409: "Conflict — 'There’s some drama going on.' 🎭",
    410: "Gone — 'It was here once… now it’s just a legend.' 🦄",
    411: "Length Required — 'Tell me how long it is first.' 📏",
    412: "Precondition Failed — 'You assumed wrong.' ❌",
    413: "Payload Too Large — 'Woah, slow down Hulk.' 🏋️",
    414: "URI Too Long — 'Your link is extra AF.' 🔗",
    415: "Unsupported Media Type — 'I don’t speak that format.' 🎥",
    416: "Range Not Satisfiable — 'That range is out of bounds.' 📉",
    417: "Expectation Failed — 'Well, that was disappointing.' 😔",
    418: "I’m a Teapot — 'Yes, seriously.' 🍵",
    421: "Misdirected Request — 'Oops, wrong address.' 📬",
    422: "Unprocessable Entity — 'I understood it, but I refuse to deal with it.' 🙅‍♀️",
    423: "Locked — 'Mine. You can’t have it.' 🔒",
    424: "Failed Dependency — 'I was counting on something else… and it failed.' 💔",
    425: "Too Early — 'Chill. You’re too soon.' 🕰️",
    426: "Upgrade Required — 'Please update yourself, dinosaur.' 🦖",
    428: "Precondition Required — 'Not without some ground rules.' 📜",
    429: "Too Many Requests — 'Calm down, spammer.' 📩",
    431: "Request Header Fields Too Large — 'Your intro is too long, cut it short.' ✂️",
    451: "Unavailable For Legal Reasons — 'Shhh… the lawyers said no.' ⚖️",

    // 5xx - Server Errors
    500: "Internal Server Error — 'It’s not you, it’s me.' 💔💻",
    501: "Not Implemented — 'Yeah… I can’t do that.' 🛠️",
    502: "Bad Gateway — 'My friend gave me bad info.' 🤥",
    503: "Service Unavailable — 'On a coffee break. Back later.' ☕",
    504: "Gateway Timeout — 'My friend took too long to reply.' 🐢",
    505: "HTTP Version Not Supported — 'That’s so last season.' 👗",
    506: "Variant Also Negotiates — 'I argued with myself and lost.' 🤯",
    507: "Insufficient Storage — 'No space left, like my phone.' 📱",
    508: "Loop Detected — 'I’m stuck in a time loop. Help.' 🔁",
    510: "Not Extended — 'You need more DLC for this request.' 🎮",
    511: "Network Authentication Required — 'Log into the WiFi first.' 📶",
};
export const getErrorMessage = (code) => {
    return errorCodes[code] || "Unknown Error Code — 'Seriously, what is this?' 🤷‍♀️";
};