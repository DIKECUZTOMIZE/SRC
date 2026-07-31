// // ==========================================
// // 1. Core Primitives & System Tokens
// // ==========================================
// import { colors } from './colors.js';
// import { typography } from './typography.js';
// import { spacing } from './spacing.js';
// import { shadow } from './shadow.js';
// import { radius } from './radius.js';
// import { layout } from './layout.js';
// import { animation } from './animation.js';

// // ==========================================
// // 2. Component Design Presets
// // ==========================================
// import { button } from './button.js';
// import { card } from './card.js';
// import { input } from './input.js';
// import { table } from './table.js';
// import { badge } from './badge.js';
// import { modal } from './modal.js';
// import { form } from './form.js';
// import { navbar } from './navbar.js';
// import { sidebar } from './sidebar.js';
// import { sectionHeader } from './sectionHeader.js';

// // ==========================================
// // 3. Central Theme Registry
// // ==========================================
// export const theme = {
//   tokens: {
//     colors,
//     typography,
//     spacing,
//     shadow,
//     radius,
//     layout,
//   },
//   components: {
//     button,
//     card,
//     input,
//     table,
//     badge,
//     modal,
//     form,
//     navbar,
//     sidebar,
//     sectionHeader,
//   },
//   animation,
// } as const;

// // ==========================================
// // 4. Production Utility Helpers
// // ==========================================

// /**
//  * Classnames Merger Utility (cx)
//  * Merges conditional Tailwind CSS class names cleanly, filtering out falsy values.
//  */
// export function cx(...classes: (string | boolean | null | undefined)[]): string {
//   return classes.filter(Boolean).join(' ');
// }

// /**
//  * Deep Theme / Style Overrider Utility
//  * Recursively merges custom overrides into a component's base design config.
//  */
// export function mergeTheme<T extends Record<string, any>>(
//   baseStyle: T,
//   overrides: Partial<T> = {}
// ): T {
//   const result = { ...baseStyle };

//   for (const key in overrides) {
//     if (
//       Object.prototype.hasOwnProperty.call(overrides, key) &&
//       overrides[key] !== undefined
//     ) {
//       if (
//         typeof overrides[key] === 'object' &&
//         overrides[key] !== null &&
//         !Array.isArray(overrides[key]) &&
//         typeof result[key] === 'object'
//       ) {
//         result[key] = mergeTheme(result[key], overrides[key] as any);
//       } else {
//         result[key] = overrides[key] as any;
//       }
//     }
//   }

//   return result;
// }

// // Backward-compatible alias for overrides
// export const createCustomComponentStyle = mergeTheme;

// // ==========================================
// // 5. Named Module Exports
// // ==========================================
// export {
//   // Tokens
//   colors,
//   typography,
//   spacing,
//   shadow,
//   radius,
//   layout,
//   animation,
//   // Components
//   button,
//   card,
//   input,
//   table,
//   badge,
//   modal,
//   form,
//   navbar,
//   sidebar,
//   sectionHeader,
// };

// // ==========================================
// // 6. TypeScript Types
// // ==========================================
// export type Theme = typeof theme;
// export type ThemeTokens = typeof theme.tokens;
// export type ThemeComponents = typeof theme.components;