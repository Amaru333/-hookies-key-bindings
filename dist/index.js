'use strict';

var react = require('react');

/**
 * `useShortcut` - Detects modifier-based keyboard shortcuts.
 * Example: `Ctrl + C`, `Shift + A`, `Meta + S`
 */
function useShortcut(keys, callback, options = {}) {
    react.useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKeys = new Set();
            if (event.ctrlKey)
                pressedKeys.add("ctrl");
            if (event.shiftKey)
                pressedKeys.add("shift");
            if (event.altKey)
                pressedKeys.add("alt");
            if (event.metaKey)
                pressedKeys.add("meta");
            pressedKeys.add(event.key.toLowerCase());
            const isMatch = keys.every((key) => pressedKeys.has(key.toLowerCase()));
            if (isMatch) {
                if (options.preventDefault)
                    event.preventDefault();
                callback();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [keys, callback, options]);
}

/**
 * `useShortcutExtended` - Detects any keyboard shortcut.
 * Example: `A + S`, `A + 1 + M`, `X + Z`
 */
function useShortcutExtended(keys, callback, options = {}) {
    // Using a ref to hold pressed keys avoids re-rendering on every update.
    const pressedKeysRef = react.useRef(new Set());
    const { preventDefault } = options;
    // Pre-compute lowercase target keys for performance.
    const keysLower = react.useMemo(() => keys.map((key) => key.toLowerCase()), [keys]);
    react.useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toLowerCase();
            // Create a new set based on the current ref value.
            const newSet = new Set(pressedKeysRef.current);
            newSet.add(key);
            // If every target key is present in the new set, trigger the callback.
            if (keysLower.every((k) => newSet.has(k))) {
                if (preventDefault)
                    event.preventDefault();
                callback();
            }
            // Update the ref with the new set.
            pressedKeysRef.current = newSet;
        };
        const handleKeyUp = (event) => {
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

/**
 * Returns the user's operating system as a string.
 */
function getOS() {
    if (typeof window === "undefined")
        return "Unknown"; // Prevents SSR issues
    return detectOS();
}
function detectOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();
    if (platform.includes("mac"))
        return "MacOS";
    if (platform.includes("win"))
        return "Windows";
    if (platform.includes("linux"))
        return "Linux";
    if (userAgent.includes("android"))
        return "Android";
    if (/iphone|ipad|ipod/.test(userAgent))
        return "iOS";
    return "Unknown";
}

exports.getOS = getOS;
exports.useShortcut = useShortcut;
exports.useShortcutExtended = useShortcutExtended;
//# sourceMappingURL=index.js.map
