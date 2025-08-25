
## v1.1.3

[compare changes](https://github.com/NowaraJS/totp/compare/v1.1.2...v1.1.3)

### 📖 Documentation

- **📖:** [Add Contributor Covenant Code of Conduct] ([ef8a067](https://github.com/NowaraJS/totp/commit/ef8a067))
- **📖:** [Add contributing guidelines to the project] ([933b053](https://github.com/NowaraJS/totp/commit/933b053))
- **📖:** [Add SECURITY.md for vulnerability reporting and supported versions] ([6d888c1](https://github.com/NowaraJS/totp/commit/6d888c1))

### 📦 Build

- **📦:** [Update dependencies and author information in package.json] ([c3eb931](https://github.com/NowaraJS/totp/commit/c3eb931))

### 🦉 Chore

- **🦉:** [Update contact email in issue template] Updated the contact email in the issue template from komiriko@pm.me to nowarajs@pm.me to reflect the correct address for project inquiries. ([b8cc348](https://github.com/NowaraJS/totp/commit/b8cc348))
- **🦉:** [rename MIT License file with explicit .md] ([cc0cdc8](https://github.com/NowaraJS/totp/commit/cc0cdc8))

### ❤️ Contributors

- Komiroko <komiriko@pm.me>

## v1.1.2

[compare changes](https://github.com/NowaraJS/totp/compare/v1.1.1...v1.1.2)

### 🦉 Chore

- **🦉:** [Update package.json with correct name and description] ([e007586](https://github.com/NowaraJS/totp/commit/e007586))

### ❤️ Contributors

- Komiroko <komiriko@pm.me>

## v1.1.1

[compare changes](https://github.com/NowaraJS/totp/compare/v1.1.0...v1.1.1)

### 📖 Documentation

- **📖:** [Update README with comprehensive TOTP features and usage] ([e8f8369](https://github.com/NowaraJS/totp/commit/e8f8369))

### ❤️ Contributors

- Komiroko <komiriko@pm.me>

## v1.1.0


### 🚀 Enhancements

- **🚀:** [Add Base32 encoding and decoding utilities] ([580be95](https://github.com/NowaraJS/totp/commit/580be95))
- **🚀:** [Add TOTP error keys enumeration] ([cd31d9d](https://github.com/NowaraJS/totp/commit/cd31d9d))
- **🚀:** [Add createCounterBuffer utility for big-endian conversion] ([6effcbf](https://github.com/NowaraJS/totp/commit/6effcbf))
- **🚀:** [Add dynamic truncation utility for HMAC results] ([8b9d226](https://github.com/NowaraJS/totp/commit/8b9d226))
- **🚀:** [Add generateHmac utility for HMAC generation] ## Features - Introduced a new utility function `generateHmac` for generating HMACs. ([86a62ee](https://github.com/NowaraJS/totp/commit/86a62ee))
- **🚀:** [Add generateSecretBytes utility for TOTP secret generation] ([f0fa3b4](https://github.com/NowaraJS/totp/commit/f0fa3b4))
- **🚀:** [Add timeRemaining utility for TOTP code calculation] ([38c2591](https://github.com/NowaraJS/totp/commit/38c2591))
- **🚀:** [Implement HMAC-based One-Time Password (HOTP) functionality] ([57cc8db](https://github.com/NowaraJS/totp/commit/57cc8db))
- **🚀:** [Add OTPAuth URI building and parsing functionality] ([3c3108c](https://github.com/NowaraJS/totp/commit/3c3108c))
- **🚀:** [Add TOTP implementation and verification functionality] ([e9ca7da](https://github.com/NowaraJS/totp/commit/e9ca7da))

### 📖 Documentation

- **📖:** [Update copilot instructions for clarity and structure] ([57ca1ea](https://github.com/NowaraJS/totp/commit/57ca1ea))

### 📦 Build

- **📦:** [Update devDependencies and exports in package.json] ([2e32770](https://github.com/NowaraJS/totp/commit/2e32770))
- **📦:** [Refactor entrypoints in builder.ts for clarity] ([7e241b4](https://github.com/NowaraJS/totp/commit/7e241b4))
- **📦:** [Clean and add entrypoints] ([6a82236](https://github.com/NowaraJS/totp/commit/6a82236))

### 🦉 Chore

- **🦉:** [Remove unused utility files and related tests] ## Chores - Deleted `exampleKeyError.ts`, `foo.ts`, and their corresponding test files. ## Description This commit removes unused utility files and their associated tests to clean up the codebase and reduce clutter. These files are no longer needed and their removal helps maintain a more manageable project structure. ([62c6231](https://github.com/NowaraJS/totp/commit/62c6231))

### 🧪 Tests

- **🧪:** [Add unit tests for Base32 encoding and decoding] ([7292a8d](https://github.com/NowaraJS/totp/commit/7292a8d))
- **🧪:** [Add unit tests for createCounterBuffer utility] ([b13eea0](https://github.com/NowaraJS/totp/commit/b13eea0))
- **🧪:** [Add unit tests for dynamic truncation utility] ([9dfb41c](https://github.com/NowaraJS/totp/commit/9dfb41c))
- **🧪:** [Add unit tests for generateHmac utility] ([67aa60b](https://github.com/NowaraJS/totp/commit/67aa60b))
- **🧪:** [Add unit tests for generateSecretBytes utility] ([52f2ec6](https://github.com/NowaraJS/totp/commit/52f2ec6))
- **🧪:** [Add unit tests for timeRemaining utility] ## Tests - Introduced unit tests for the timeRemaining utility function. ## Description This commit adds a test suite for the timeRemaining function, ensuring that it correctly calculates the remaining time until the next TOTP code based on a specified period. The test checks that the remaining time is less than the period, validating the function's expected behavior. ([ae820e8](https://github.com/NowaraJS/totp/commit/ae820e8))
- **🧪:** [Add unit tests for HOTP code generation] ([932fb33](https://github.com/NowaraJS/totp/commit/932fb33))
- **🧪:** [Add unit tests for OTP Auth URI building and parsing] ## Tests - Implemented unit tests for `buildOtpAuthUri` to ensure it constructs a valid OTP Auth URI. - Added tests for `parseOtpAuthUri` to validate parsing of a valid OTP Auth URI and error handling for invalid cases. ([6160cbd](https://github.com/NowaraJS/totp/commit/6160cbd))
- **🧪:** [Add unit tests for TOTP generation and verification] ## Tests - Added tests for TOTP code generation to ensure it produces a valid 6-digit code. - Implemented tests for TOTP code verification, including both valid and invalid scenarios. ## Description This commit introduces unit tests for the TOTP functionality, validating both the generation of TOTP codes and their verification. The tests check that generated codes are of the correct length and format, and that the verification function correctly identifies valid and invalid codes. ([445a954](https://github.com/NowaraJS/totp/commit/445a954))

### 🤖 CI

- **🤖:** [Enhance CI workflows with additional MSSQL secrets] ([b96813c](https://github.com/NowaraJS/totp/commit/b96813c))

### ❤️ Contributors

- Komiroko <komiriko@pm.me>

