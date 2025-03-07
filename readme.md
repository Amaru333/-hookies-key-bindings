# 🚀 @hookies/key-bindings

A lightweight **React Hook** for adding **keyboard shortcuts** to your application. Easily bind keyboard combinations to functions without extra configuration!

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

This library **does not auto-adjust** shortcuts for Mac vs Windows. If you need platform-specific bindings, use `getOS()`:

```tsx
import { useShortcut, getOS } from "@hookies/key-bindings";

const os = getOS();
const shortcutKeys = os === "MacOS" ? ["Meta", "8"] : ["Ctrl", "8"];

useShortcut(shortcutKeys, () => console.log("Shortcut Triggered!"));
```

---

## ⚙ **API Reference**

### `useShortcut(keys: string[], callback: () => void, options?: UseShortcutOptions)`

- **`keys`** _(string[])_ – Array of keys that should trigger the shortcut (e.g., `["Ctrl", "8"]`).
- **`callback`** _(function)_ – Function to execute when the shortcut is triggered.
- **`options`** _(optional)_
  - `preventDefault` _(boolean)_ – Prevents default browser behavior (default: `false`).

#### **Example: Prevent Default Behavior**

```tsx
useShortcut(["Ctrl", "S"], () => console.log("Save triggered"), { preventDefault: true });
```

---

### `getOS()`

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

## 🏗 **Contributing**

We welcome contributions! To contribute:

1. **Fork** this repo.
2. **Clone** your fork.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Make your changes.
5. Run tests (coming soon).
6. Submit a **pull request**! 🚀

---

## 📜 **License**

This project is licensed under the **ISC License**.

---

## ⭐ **Support & Feedback**

If you like this project, give it a ⭐ on [GitHub](https://github.com/hookies/key-bindings)!  
For issues or feature requests, open an [issue](https://github.com/hookies/key-bindings/issues).

Happy coding! 🚀
