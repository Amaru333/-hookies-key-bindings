# 🚀 @hookies/key-bindings

[![npm version](https://img.shields.io/npm/v/@hookies/key-bindings?color=blue)](https://www.npmjs.com/package/@hookies/key-bindings)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-blue)](https://www.typescriptlang.org/)
[![GitHub issues](https://img.shields.io/github/issues/Amaru333/-hookies-key-bindings)](https://github.com/Amaru333/-hookies-key-bindings/issues)

A lightweight **React Hook** for adding **keyboard shortcuts** to your application. Easily bind keyboard combinations to functions without extra configuration!

---

## 📖 Table of Contents

- [📦 Installation](#-installation)
- [🎮 Playground - Test Key Bindings Online](#-playground---test-key-bindings-online)
- [🔥 Usage](#-usage)
- [🎯 OS-Specific Shortcuts](#-os-specific-shortcuts)
- [⚙ API Reference](#-api-reference)
  - [`useShortcut`](#useshortcutkeys-string-callback---void-options-useshortcutoptions)
  - [`useShortcutExtended`](#useshortcutextendedkeys-string-callback---void-options-useshortcutoptions)
  - [`getOS`](#getos)
- [🛠 Advanced Features (Coming Soon)](#-advanced-features-coming-soon)
- [🚀 Contributing](#-contributing-to-hookies-key-bindings)
- [📜 License](#-license)
- [⭐ Support & Feedback](#-support--feedback)

---

## 📦 Installation

Install the package using npm:

```bash
npm install @hookies/key-bindings
```

or using yarn:

```bash
yarn add @hookies/key-bindings
```

---

## 🎮 Playground - Test Key Bindings Online

Want to try out keyboard shortcuts before using them in your project? Use our **interactive playground** to generate the function dynamically!

🛠 **[🔗 Open Playground](https://amaru333.github.io/hookies/components/key-bindings#playground)**

- **Press any key combination** (e.g., `Meta + X`, `Ctrl + Shift + A`).
- The playground **shows the generated function** with the exact keys pressed.
- Copy the generated function and paste it into your project.

📌 **Example Output in Playground**  
If you press `Meta + X`, the playground will generate:

```tsx
useShortcut(["meta", "x"], func);
```

Just **copy and use** in your code! 🚀

---

## 🔥 Usage

Import the `useShortcut` or `useShortcutExtended` hook and bind a keyboard shortcut to an action.

### **Basic Example: Modifier-Based Shortcuts (`useShortcut`)**

```tsx
import React, { useState } from "react";
import { useShortcut } from "@hookies/key-bindings";

const App = () => {
  const [message, setMessage] = useState("Press Ctrl+8");

  useShortcut(["Ctrl", "8"], () => setMessage("Shortcut Triggered!"));

  return <h1>{message}</h1>;
};

export default App;
```

### **Example: Any Key Combination (`useShortcutExtended`)**

```tsx
import { useState } from "react";
import { useShortcutExtended } from "@hookies/key-bindings";

const App = () => {
  const [message, setMessage] = useState("Press A + S");

  useShortcutExtended(["a", "s"], () => setMessage("Shortcut Triggered!"));

  return <h1>{message}</h1>;
};

export default App;
```

---

## 🎯 **OS-Specific Shortcuts**

This library **does not auto-adjust** shortcuts for Mac vs Windows. If you need platform-specific bindings, use [`getOS()`](#getos).

```tsx
import { useShortcut, getOS } from "@hookies/key-bindings";

const os = getOS();
const shortcutKeys = os === "MacOS" ? ["Meta", "8"] : ["Ctrl", "8"];

useShortcut(shortcutKeys, () => console.log("Shortcut Triggered!"));
```

---

## ⚙ **API Reference**

### [`useShortcut(keys: string[], callback: () => void, options?: UseShortcutOptions)`](#useshortcutkeys-string-callback--void-options-useshortcutoptions)

- **`keys`** _(string[])_ – Array of keys that should trigger the shortcut (e.g., `["Ctrl", "8"]`).
- **`callback`** _(function)_ – Function to execute when the shortcut is triggered.
- **`options`** _(optional)_
  - `preventDefault` _(boolean)_ – Prevents default browser behavior (default: `false`).

#### **Example: Prevent Default Behavior**

```tsx
useShortcut(["Ctrl", "S"], () => console.log("Save triggered"), { preventDefault: true });
```

---

### [`useShortcutExtended(keys: string[], callback: () => void, options?: UseShortcutOptions)`](#useshortcutextendedkeys-string-callback--void-options-useshortcutoptions)

This hook detects **any key combination**, including non-modifier keys.

- **`keys`** _(string[])_ – Array of keys to trigger the shortcut (e.g., `["a", "s"]`).
- **`callback`** _(function)_ – Function to execute when the shortcut is triggered.
- **`options`** _(optional)_
  - `preventDefault` _(boolean)_ – Prevents default browser behavior (default: `false`).

#### **Example: Detecting Non-Modifier Key Combinations**

```tsx
useShortcutExtended(["a", "s"], () => console.log("Pressed A + S!"));
useShortcutExtended(["x", "z", "q"], () => console.log("Pressed X + Z + Q!"));
```

---

### [`getOS()`](#getos)

Returns the user's operating system as a string: `"Windows"`, `"MacOS"`, `"Linux"`, `"Android"`, `"iOS"`, or `"Unknown"`.

#### **Example**

```tsx
console.log(getOS()); // Outputs: "MacOS"
```

---

## 🛠 **Advanced Features (Coming Soon)**

- ✅ Support for **multiple shortcut registrations** in a single call.
- ✅ Global shortcut manager.
- ✅ Dynamic shortcut customization via props.

---

## 🚀 **Contributing to Hookies Key Bindings**

🎉 Thank you for considering contributing to **Hookies Key Bindings**!  
We welcome all contributions, whether it's **bug fixes, feature additions, documentation updates, or tests**.

### **1️⃣ Fork the Repository**

- Click on the **"Fork"** button in the top-right corner of the [repository](https://github.com/Amaru333/-hookies-key-bindings).
- Clone your forked repository:

  ```bash
  git clone https://github.com/YOUR-USERNAME/-hookies-key-bindings.git
  cd -hookies-key-bindings
  ```

### **2️⃣ Set Up the Project**

- Install dependencies:
  ```bash
  npm install
  ```
- Build the project:
  ```bash
  npm run build
  ```

### **3️⃣ Create a New Branch**

Before making any changes, create a new branch:

```bash
git checkout -b feature/your-feature-name
```

or for bug fixes:

```bash
git checkout -b fix/your-fix-name
```

### **4️⃣ Make Changes and Test**

- Implement your feature or fix.
- Ensure the build succeeds:
  ```bash
  npm run build
  ```
- If you modified TypeScript files, check types:
  ```bash
  tsc --noEmit
  ```

### **5️⃣ Commit and Push**

- Commit your changes:
  ```bash
  git commit -m "✨ Add new feature: Keyboard shortcuts for Mac"
  ```
- Push your changes:

  ```bash
  git push origin feature/your-feature-name
  ```

- Open a **Pull Request (PR)** and submit your changes! 🚀

---

## 📜 **License**

This project is licensed under the **ISC License**.

---

## ⭐ **Support & Feedback**

If you like this project, give it a ⭐ on [GitHub](https://github.com/Amaru333/-hookies-key-bindings)!  
For issues or feature requests, open an [issue](https://github.com/Amaru333/-hookies-key-bindings/issues).
