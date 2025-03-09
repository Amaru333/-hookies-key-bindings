import { useEffect } from "react";

type ShortcutKeys = string[];

interface UseShortcutOptions {
  preventDefault?: boolean; // Optional: Prevent default browser behavior
}

/**
 * `useShortcut` - Detects **modifier-based** keyboard shortcuts.
 * Example: `Ctrl + C`, `Shift + A`, `Meta + S`
 */
export function useShortcut(
  keys: ShortcutKeys,
  callback: () => void,
  options: UseShortcutOptions = {}
): void {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKeys = new Set<string>();

      if (event.ctrlKey) pressedKeys.add("ctrl");
      if (event.shiftKey) pressedKeys.add("shift");
      if (event.altKey) pressedKeys.add("alt");
      if (event.metaKey) pressedKeys.add("meta");

      pressedKeys.add(event.key.toLowerCase());
      // console.log(pressedKeys, "useShortcut");

      const isMatch = keys.every((key) => pressedKeys.has(key.toLowerCase()));
      if (isMatch) {
        if (options.preventDefault) event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keys, callback, options]);
}
