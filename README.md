# HiveTip

HiveTip is a lightweight integration layer that enables seamless tipping flows for Hive-powered platforms.  
It allows content creators to receive tips in **HBD** or **Bitcoin Lightning**, with optional Keychain authentication for Hive transfers.

Originally designed for video platforms such as **3Speak**, HiveTip is extensible and can be integrated into blogs, dApps, games, or standalone websites with minimal configuration.

---

## Features

- Pop-up tipping interface with configurable UI themes.
- Automatic username extraction (compatible with 3Speak URL patterns: `watch?v=username/...`).
- Supports **Hive Keychain** authentication.
- Supports **Bitcoin Lightning tips** with auto-generated invoices.
- Built-in validation rules (Lightning minimum thresholds, username format filtering).
- Responsive UI for mobile and desktop environments.
- Modular and self-contained: no external backend required.

---

## Installation

### Using CDN (recommended)

```html
<script src="https://cdn.hivedebit.com/HiveTip.js"></script>
```

### Local hosting

Download `HiveTip.js` and include it:

```html
<script src="/js/HiveTip.js"></script>
```

---

## Usage Example

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>HiveTip Demo</title>
  <script src="https://cdn.hivedebit.com/HiveTip.js"></script>
</head>
<body>

<!-- Your embedded video (example 3Speak URL format) -->
<video src="https://3speak.tv/watch?v=meno/p723so6v" controls id="contentPlayer"></video>

<script>
  HiveTip.init({
    autoDetect3Speak: true,
    username: "GrandCherokee",
    theme: "auto",
    language: "en",
    minimumLightning: 0.50
  });
</script>

</body>
</html>
```

Once initialized, HiveTip will detect when the viewer presses play and display the tipping interface.

---

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `username` | string or null | `null` | Manually set the creator's Hive username. If null, HiveTip attempts to detect it automatically (supports 3Speak). |
| `autoDetect3Speak` | boolean | `true` | Enables automatic parsing of 3Speak video URLs to determine the content owner. |
| `theme` | `"light" | "dark" | "auto"` | UI theme control. `"auto"` follows system preference. |
| `language` | `"en" | "es"` | `"en"` | UI language. Additional language packs may be added in future versions. |
| `minimumLightning` | number | `0.50` | Minimum allowed Lightning tip in HBD value equivalent. |

---

## Keychain Login Handling

HiveTip automatically handles authentication via Hive Keychain.  
Once a user logs in successfully, HiveTip securely stores the username in session memory for the duration of the browser session.  
No private keys are ever handled or transmitted by HiveTip.

---

## Security Model

- Private keys are never stored or transmitted by the script.
- Operations requiring signing rely entirely on **Hive Keychain**.
- Lightning invoices are generated and handled client-side.

---

## Maintainer

**Jan Thomasewsky**  
Creator of **HiveDebit**

For coordination, feedback, or integration discussions, contact via Discord or GitHub Issues.

---

## License

```
Apache License 2.0

Copyright 2025 Jan Thomasewsky

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

    https://www.apache.org/licenses/LICENSE-2.0
```

---

## Contributions

Pull requests are welcome as long as they meet the following conditions:

- Code must be clean and modular.
- UI changes must remain consistent with the existing design language.
- Any new dependencies must be approved before merge.

---

## Versioning

HiveTip follows semantic versioning:

```
MAJOR.MINOR.PATCH
```

Example:

```
1.0.0 — Initial public release
```

---

## Final Notes

HiveTip is designed to be simple, minimal, and accessible for any Hive-based application.  
Future updates may include optional analytics hooks, multi-wallet Lightning support, and persistent user identity layers.

