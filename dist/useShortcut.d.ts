/**
 * Returns the user's operating system as a string.
 */
export declare function getOS(): string;
/**
 * Type definition for shortcut keys
 */
type ShortcutKeys = string[];
interface UseShortcutOptions {
    preventDefault?: boolean;
}
/**
 * useShortcut Hook - Detects keyboard shortcuts and executes callback
 */
export declare function useShortcut(keys: ShortcutKeys, callback: () => void, options?: UseShortcutOptions): void;
export {};
//# sourceMappingURL=useShortcut.d.ts.map