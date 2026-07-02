<p align="center">
  <img src="https://skalfa.sejedigital.com/images/logo-skalfa.png" alt="Skalfa Logo" width="300" />
</p>

# @skalfa/skalfa-app

> Modern frontend starter template built with Next.js, pre-configured with PWA, Tauri, and modular extensions.

---

## About this Package

This package is part of the **Skalfa Framework**, a premium development ecosystem designed to build high-performance, modular web applications and APIs.

---

## Documentation

See the usage documentation at [Documentation](https://skalfa.sejedigital.com/app-docs).

---

## Installation

You can install this package using your preferred package manager:

```bash
# Using npm
npm install @skalfa/skalfa-app

# Using bun
bun add @skalfa/skalfa-app
```

---

## Development, Testing & Production Scripts

This frontend starter template provides the following CLI execution scripts:

### 💻 Development
* **`bun run dev`**: Starts the Next.js development server in hot-reload mode.

### 📦 Build & Production
* **`bun run build`**: Compiles the Next.js application into optimized production build outputs (or static files if Tauri mode is triggered).
* **`bun run start`**: Starts the Next.js production server.

### 🧪 Verification & Linting
* **`bun run test`**: Performs a strict, project-wide TypeScript compilation check (`tsc --noEmit`) to ensure type-safety.
* **`bun run lint`**: Runs ESLint to analyze and format the source code.

### 🖥️ Tauri Desktop & Mobile (Optional Extensions)
* **`bun run tauri dev`**: Runs the Tauri desktop application wrapper in development mode.
* **`bun run tauri build`**: Builds and packages the Tauri desktop application installer.
* **`bun run tauri:android`**: Runs the Tauri application in an Android emulator.
* **`bun run tauri:ios`**: Runs the Tauri application in an iOS simulator.

---

## Pre-installed Dependencies

The following key dependencies are packaged and managed within this project:

| Dependency | Scope | Version |
| :--- | :--- | :--- |
| `@fortawesome/fontawesome-svg-core` | runtime | `^6.7.2` |
| `@fortawesome/free-brands-svg-icons` | runtime | `^6.7.2` |
| `@fortawesome/free-regular-svg-icons` | runtime | `^6.7.2` |
| `@fortawesome/free-solid-svg-icons` | runtime | `^6.7.2` |
| `@fortawesome/react-fontawesome` | runtime | `^0.2.2` |
| `@react-google-maps/api` | runtime | `^2.20.7` |
| `@skalfa/skalfa-app-core` | runtime | `^1.0.0` |
| `@tailwindcss/postcss` | runtime | `^4.0.0` |
| `axios` | runtime | `^1.12.0` |
| `moment` | runtime | `^2.30.1` |
| `next` | runtime | `16.1.1` |
| `postcss` | runtime | `^8.5.1` |
| `react` | runtime | `^19.2.1` |
| `react-dom` | runtime | `^19.2.1` |
| `tailwindcss` | runtime | `^4.0.0` |
| `@types/node` | development | `^20` |
| `@types/react` | development | `^19.0.0` |
| `@types/react-dom` | development | `^19.0.0` |
| `eslint` | development | `^9.19.0` |
| `typescript` | development | `^6.0.3` |

---

## License

This package is licensed under the **MIT License**. For full license text, see the [LICENSE](LICENSE) file.
