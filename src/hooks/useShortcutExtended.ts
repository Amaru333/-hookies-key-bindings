import { useEffect, useRef, useMemo } from "react";

type ShortcutKeys = string[];

interface UseShortcutOptions {
  preventDefault?: boolean; // Optional: Prevent default behavior
}

/**
 * `useShortcutExtended` - Detects any keyboard shortcut.
 * Example: `A + S`, `A + 1 + M`, `X + Z`
 */
export function useShortcutExtended(
  keys: ShortcutKeys,
  callback: () => void,
  options: UseShortcutOptions = {}
): void {
  // Using a ref to hold pressed keys avoids re-rendering on every update.
  const pressedKeysRef = useRef<Set<string>>(new Set());
  const { preventDefault } = options;
  // Pre-compute lowercase target keys for performance.
  const keysLower = useMemo(() => keys.map((key) => key.toLowerCase()), [keys]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      // Create a new set based on the current ref value.
      const newSet = new Set(pressedKeysRef.current);
      newSet.add(key);

      // If every target key is present in the new set, trigger the callback.
      if (keysLower.every((k) => newSet.has(k))) {
        if (preventDefault) event.preventDefault();
        callback();
      }

      // Update the ref with the new set.
      pressedKeysRef.current = newSet;
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const newSet = new Set(pressedKeysRef.current);
      newSet.delete(key);
      // If a modifier key is released, clear the set.
      if (["meta", "control", "alt", "shift"].includes(key)) {
        newSet.clear();
      }
      pressedKeysRef.current = newSet;
    };

    const handleBlur = () => {
      pressedKeysRef.current.clear();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, [keysLower, callback, preventDefault]);
}
