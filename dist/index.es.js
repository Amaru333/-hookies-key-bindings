import { useEffect } from 'react';

/**
 * Returns the user's operating system as a string.
 */
function getOS() {
    if (typeof window === "undefined")
        return "Unknown"; // Prevents SSR issues
    return detectOS();
}
function detectOS() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    var platform = window.navigator.platform.toLowerCase();
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
/**
 * useShortcut Hook - Detects keyboard shortcuts and executes callback
 */
function useShortcut(keys, callback, options) {
    if (options === void 0) { options = {}; }
    useEffect(function () {
        var handleKeyDown = function (event) {
            var pressedKeys = new Set();
            if (event.ctrlKey)
                pressedKeys.add("Ctrl");
            if (event.shiftKey)
                pressedKeys.add("Shift");
            if (event.altKey)
                pressedKeys.add("Alt");
            if (event.metaKey)
                pressedKeys.add("Meta"); // Mac ⌘ key
            pressedKeys.add(event.key);
            var isMatch = keys.every(function (key) { return pressedKeys.has(key); });
            if (isMatch) {
                if (options.preventDefault)
                    event.preventDefault();
                callback();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return function () { return window.removeEventListener("keydown", handleKeyDown); };
    }, [keys, callback, options]);
}

export { getOS, useShortcut };
