type ShortcutKeys = string[];
interface UseShortcutOptions {
    preventDefault?: boolean;
}
/**
 * `useShortcut` - Detects modifier-based keyboard shortcuts.
 * Example: `Ctrl + C`, `Shift + A`, `Meta + S`
 */
export declare function useShortcut(keys: ShortcutKeys, callback: () => void, options?: UseShortcutOptions): void;
export {};
//# sourceMappingURL=useShortcut.d.ts.map