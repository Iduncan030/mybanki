export function numberFormat(currency) {
    return new Intl.NumberFormat().format(currency);
}
