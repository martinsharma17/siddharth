declare module 'nepali-date-converter' {
    class NepaliDate {
        constructor(date?: string | number | Date);
        toAD(): Date;
        format(formatStr: string): string;
        getDate(): number;
        getMonth(): number;
        getYear(): number;
        // Add more methods if needed
    }
    export default NepaliDate;
}
