/**
 * Переводит первую букву слов в апперкейс
 * @param {string} str строка для модификации
 * @param {boolean=false} lower Остальные буквы должны быть в ловеркейсе
 * @return {string}
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
 export const capitalize = (str, lower = false) =>
 (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;