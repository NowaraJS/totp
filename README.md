# 🔐 NowaraJS - TOTP

## 📌 Table of Contents

- [🔐 NowaraJS - TOTP](#-nowarajs---totp)
	- [📌 Table of Contents](#-table-of-contents)
	- [📝 Description](#-description)
	- [✨ Features](#-features)
	- [🔧 Installation](#-installation)
	- [⚙️ Usage](#-usage)
		- [Basic TOTP Generation](#basic-totp-generation)
		- [TOTP Verification](#totp-verification)
		- [HOTP Support](#hotp-support)
		- [OTPAuth URI Generation](#otpauth-uri-generation)
		- [Secret Generation](#secret-generation)
	- [🔑 Advanced Configuration](#-advanced-configuration)
	- [🛠️ Utilities](#-utilities)
	- [📚 API Reference](#-api-reference)
	- [⚖️ License](#-license)
	- [📧 Contact](#-contact)

## 📝 Description

> A comprehensive Time-based One-Time Password (TOTP) and HMAC-based One-Time Password (HOTP) implementation for TypeScript/JavaScript.

**NowaraJS TOTP** provides a secure and RFC-compliant implementation of TOTP and HOTP algorithms with full support for QR code generation, secret management, and various authentication configurations. Perfect for implementing two-factor authentication (2FA) in your applications.

## ✨ Features

- 🔐 **RFC 6238 TOTP**: Full RFC-compliant Time-based One-Time Password implementation
- 🔑 **RFC 4226 HOTP**: Complete HMAC-based One-Time Password support
- 📱 **QR Code Support**: Generate OTPAuth URIs for easy mobile app integration
- 🔒 **Crypto Secure**: Uses Web Crypto API for secure random number generation
- ⚡ **High Performance**: Optimized for speed with minimal dependencies
- 🛠️ **Configurable**: Support for different algorithms (SHA-1, SHA-256, SHA-512)
- 📐 **Flexible Digits**: Support for 6-8 digit codes
- ⏰ **Time Window**: Configurable time periods and verification windows
- 🎯 **Base32 Encoding**: Built-in Base32 encoding/decoding utilities

## 🔧 Installation

```bash
bun add @nowarajs/totp @nowarajs/error
```

## ⚙️ Usage

### Basic TOTP Generation

```ts
import { totp, generateSecretBytes, base32Encode } from '@nowarajs/totp';

// Generate a secret
const secret = generateSecretBytes(20); // 20 bytes = 160 bits
const secretBase32 = base32Encode(secret);

// Generate TOTP code
const code = await totp(secret, {
	algorithm: 'SHA-1',
	digits: 6,
	period: 30
});

console.log('TOTP Code:', code); // e.g., "123456"
```

### TOTP Verification

```ts
import { verifyTotp } from '@nowarajs/totp';

// Verify a TOTP code
const isValid = await verifyTotp(secret, userInputCode, {
	algorithm: 'SHA-1',
	digits: 6,
	period: 30,
	window: 1 // Allow 1 time step before/after current time
});

if (isValid) {
	console.log('✅ Code is valid!');
} else {
	console.log('❌ Invalid code');
}
```

### HOTP Support

```ts
import { hotp } from '@nowarajs/totp';

// Generate HOTP code with counter
const counter = 123;
const hotpCode = await hotp(secret, counter, {
	algorithm: 'SHA-1',
	digits: 6
});

console.log('HOTP Code:', hotpCode);
```

### OTPAuth URI Generation

```ts
import { buildOtpAuthUri, base32Encode } from '@nowarajs/totp';

const secret = generateSecretBytes(20);
const secretBase32 = base32Encode(secret);

// Create URI for QR code
const uri = buildOtpAuthUri({
	secretBase32,
	label: 'user@example.com',
	issuer: 'MyApp',
	algorithm: 'SHA-1',
	digits: 6,
	period: 30
});

console.log('QR Code URI:', uri);
// otpauth://totp/user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=MyApp
```

### Secret Generation

```ts
import { generateSecretBytes, base32Encode, base32Decode } from '@nowarajs/totp/utils';

// Generate cryptographically secure secret
const secret = generateSecretBytes(32); // 256 bits for extra security

// Encode for storage/transmission
const encoded = base32Encode(secret);
console.log('Base32 Secret:', encoded);

// Decode when needed
const decoded = base32Decode(encoded);
console.log('Original bytes match:', secret.every((byte, i) => byte === decoded[i]));
```

## 🔑 Advanced Configuration

### Custom Algorithm and Settings

```ts
// Use SHA-256 with 8 digits and 60-second period
const advancedCode = await totp(secret, {
	algorithm: 'SHA-256',
	digits: 8,
	period: 60
});

// Verify with larger time window for clock drift tolerance
const isValid = await verifyTotp(secret, userCode, {
	algorithm: 'SHA-256',
	digits: 8,
	period: 60,
	window: 2 // Allow ±2 time steps (±2 minutes)
});
```

### Parse Existing OTPAuth URIs

```ts
import { parseOtpAuthUri } from '@nowarajs/totp';

const uri = 'otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example';
const parsed = parseOtpAuthUri(uri);

console.log(parsed);
// {
//   type: 'totp',
//   label: 'Example:alice@google.com',
//   secret: 'JBSWY3DPEHPK3PXP',
//   issuer: 'Example',
//   algorithm: 'SHA-1',
//   digits: 6,
//   period: 30
// }
```

## 🛠️ Utilities

The package includes several utility functions available through subpath imports:

```ts
// Base32 encoding/decoding
import { base32Encode, base32Decode } from '@nowarajs/totp/utils';

// Secret generation
import { generateSecretBytes } from '@nowarajs/totp/utils';

// Time utilities
import { timeRemaining } from '@nowarajs/totp/utils';

// Get seconds until next TOTP generation
const remaining = timeRemaining(30); // for 30-second period
console.log(`Next code in ${remaining} seconds`);
```

## 📚 API Reference

You can find the complete API reference documentation for `NowaraJS TOTP` at:

- [Reference Documentation](https://nowarajs.github.io/totp/)

## ⚖️ License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

## 📧 Contact

- Mail: [nowarajs@pm.me](mailto:nowarajs@pm.me)
- GitHub: [NowaraJS](https://github.com/NowaraJS)
