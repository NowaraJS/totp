# 🔐 NowaraJS TOTP

Let's be honest: there are already packages like `totp-generator` that do this. I built this one mostly for myself—to learn how TOTP/HOTP actually works under the hood, and to have a lightweight alternative I fully understand.

## Why this package?

No grand mission here. I wanted:
1. **To learn** how RFC 6238/4226 work in practice
2. **A tiny footprint** without pulling half of npm
3. **Something I control** for my own projects

If you're looking for battle-tested libraries, check out the established ones. If you want something small and readable, this might be for you.

## 📌 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

- 🔐 **RFC Compliant**: Full RFC 6238 (TOTP) and RFC 4226 (HOTP) implementation.
- 📱 **QR Code Ready**: Generate OTPAuth URIs compatible with Google Authenticator, Authy, etc.
- 🔒 **Crypto Secure**: Uses Web Crypto API for truly random secret generation.
- 🛠️ **Flexible**: SHA-1, SHA-256, SHA-512 algorithms with 6-8 digit codes.
- 📦 **Zero Dependencies**: Pure TypeScript, tiny footprint.

## 🔧 Installation

```bash
bun add @nowarajs/totp @nowarajs/error
```

## ⚙️ Usage

### Generate a TOTP Code

Use this when you need to generate a one-time password for the current time window.

```ts
import { totp, generateSecretBytes, base32Encode } from '@nowarajs/totp';

// Generate a cryptographically secure secret
const secret = generateSecretBytes(20);

// Generate the current TOTP code
const code = await totp(secret, {
    algorithm: 'SHA-1',
    digits: 6,
    period: 30
});

console.log('Your code:', code); // e.g., "847263"
```

### Verify a User's Code

Use this to validate the code your user just entered. The `window` option handles clock drift gracefully.

```ts
import { verifyTotp } from '@nowarajs/totp';

const isValid = await verifyTotp(secret, userInputCode, {
    algorithm: 'SHA-1',
    digits: 6,
    period: 30,
    window: 1 // Accept codes from ±30 seconds
});

if (isValid) console.log('✅ Access granted');
else console.log('❌ Invalid code');
```

### Generate a QR Code URI

Use this to let users scan a QR code with their authenticator app.

```ts
import { buildOtpAuthUri, generateSecretBytes, base32Encode } from '@nowarajs/totp';

const secret = generateSecretBytes(20);
const secretBase32 = base32Encode(secret);

const uri = buildOtpAuthUri({
    secretBase32,
    label: 'user@example.com',
    issuer: 'MyApp',
    algorithm: 'SHA-1',
    digits: 6,
    period: 30
});

// Feed this URI to any QR code library
console.log(uri);
// otpauth://totp/user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=MyApp
```

### HOTP (Counter-Based)

Use this when you need counter-based OTPs instead of time-based ones.

```ts
import { hotp } from '@nowarajs/totp';

const code = await hotp(secret, 123, {
    algorithm: 'SHA-1',
    digits: 6
});
```

## 📚 API Reference

Full docs: [nowarajs.github.io/totp](https://nowarajs.github.io/totp/)

## ⚖️ License

MIT - Feel free to use it.

## 📧 Contact

- Mail: [nowarajs@pm.me](mailto:nowarajs@pm.me)
- GitHub: [NowaraJS](https://github.com/NowaraJS)
