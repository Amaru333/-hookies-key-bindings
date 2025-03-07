import { useEffect } from "react";

/**
 * Returns the user's operating system as a string.
 */
export function getOS(): string {
  if (typeof window === "undefined") return "Unknown"; // Prevents SSR issues
  return detectOS();
}

function detectOS(): string {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform.toLowerCase();

  if (platform.includes("mac")) return "MacOS";
  if (platform.includes("win")) return "Windows";
  if (platform.includes("linux")) return "Linux";
  if (userAgent.includes("android")) return "Android";
  if (/iphone|ipad|ipod/.test(userAgent)) return "iOS";

  return "Unknown";
}

/**
 * Type definition for shortcut keys
 */
type ShortcutKeys = string[];

interface UseShortcutOptions {
  preventDefault?: boolean; // Optional: Prevent default behavior
}

/**
 * useShortcut Hook - Detects keyboard shortcuts and executes callback
 */
export function useShortcut(
  keys: ShortcutKeys,
  callback: () => void,
  options: UseShortcutOptions = {}
): void {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKeys = new Set<string>();

      if (event.ctrlKey) pressedKeys.add("Ctrl");
      if (event.shiftKey) pressedKeys.add("Shift");
      if (event.altKey) pressedKeys.add("Alt");
      if (event.metaKey) pressedKeys.add("Meta"); // Mac ⌘ key

      pressedKeys.add(event.key);

      const isMatch = keys.every((key) => pressedKeys.has(key));

      if (isMatch) {
        if (options.preventDefault) event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keys, callback, options]);
}
