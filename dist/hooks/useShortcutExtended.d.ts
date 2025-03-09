type ShortcutKeys = string[];
interface UseShortcutOptions {
    preventDefault?: boolean;
}
/**
 * `useShortcutExtended` - Detects **any** keyboard shortcut.
 * Example: `A + S`, `A + 1 + M`, `X + Z`
 */
export declare function useShortcutExtended(keys: ShortcutKeys, callback: () => void, options?: UseShortcutOptions): void;
export {};
//# sourceMappingURL=useShortcutExtended.d.ts.map