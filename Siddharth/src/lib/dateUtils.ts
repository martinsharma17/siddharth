import NepaliDate from 'nepali-date-converter';

/**
 * Normalizes date string to YYYY-MM-DD
 */
const normalizeBS = (str: string) => str.replace(/\//g, '-');

/**
 * Converts BS date string (YYYY-MM-DD or YYYY/MM/DD) to AD date string (YYYY-MM-DD)
 */
export const bsToAd = (bsDateStr: string): string => {
    try {
        if (!bsDateStr) return '';
        const normalized = normalizeBS(bsDateStr);
        if (!normalized.match(/^\d{4}-\d{2}-\d{2}$/)) return '';
        const nepaliDate = new NepaliDate(normalized);
        const adDate = nepaliDate.toAD();

        // Use local date components to avoid timezone shifting
        const y = adDate.getFullYear();
        const m = String(adDate.getMonth() + 1).padStart(2, '0');
        const d = String(adDate.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    } catch (e) {
        return '';
    }
};

/**
 * Converts AD date string (YYYY-MM-DD) to BS date string (YYYY-MM-DD)
 */
export const adToBs = (adDateStr: string): string => {
    try {
        if (!adDateStr) return '';
        const adDate = new Date(adDateStr);
        if (isNaN(adDate.getTime())) return '';
        const nepaliDate = new NepaliDate(adDate);
        return nepaliDate.format('YYYY-MM-DD');
    } catch (e) {
        return '';
    }
};
