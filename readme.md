# 🚀 @hookies/key-bindings

[![npm version](https://img.shields.io/npm/v/@hookies/key-bindings?color=blue)](https://www.npmjs.com/package/@hookies/key-bindings)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-blue)](https://www.typescriptlang.org/)
[![GitHub issues](https://img.shields.io/github/issues/Amaru333/-hookies-key-bindings)](https://github.com/Amaru333/-hookies-key-bindings/issues)

A lightweight **React Hook** for adding **keyboard shortcuts** to your application. Easily bind keyboard combinations to functions without extra configuration!

---

## 📖 Table of Contents

- [📦 Installation](#-installation)
- [🔥 Usage](#-usage)
- [🎯 OS-Specific Shortcuts](#-os-specific-shortcuts)
- [⚙ API Reference](#-api-reference)
  - [`useShortcut`](#useshortcutkeys-string-callback--void-options-useshortcutoptions)
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

## 🔥 Usage

Import the `useShortcut` hook and bind a keyboard shortcut to an action.

### **Basic Example**

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

### **4️⃣ Make Changes**

- Implement your feature or fix.
- Ensure the build succeeds:
  ```bash
  npm run build
  ```
- If you modified TypeScript files, check types:
  ```bash
  tsc --noEmit
  ```

### **5️⃣ Test Your Changes**

We encourage testing before submitting PRs!  
_(Unit tests are coming soon!)_

### **6️⃣ Commit and Push**

- Stage your changes:
  ```bash
  git add .
  ```
- Commit your changes using a **meaningful commit message**:
  ```bash
  git commit -m "✨ Add new feature: Keyboard shortcuts for Mac"
  ```
- Push your changes:
  ```bash
  git push origin feature/your-feature-name
  ```

### **7️⃣ Open a Pull Request (PR)**

- Go to your fork on GitHub.
- Click **"New Pull Request"**.
- Select your branch and describe the changes you've made.
- Submit the PR! 🚀

---

## 📜 **License**

This project is licensed under the **ISC License**.

---

## ⭐ **Support & Feedback**

If you like this project, give it a ⭐ on [GitHub](https://github.com/Amaru333/-hookies-key-bindings)!  
For issues or feature requests, open an [issue](https://github.com/Amaru333/-hookies-key-bindings/issues).
