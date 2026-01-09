declare module '@sbmdkl/nepali-datepicker-reactjs' {
    import React from 'react';
    export interface NepaliDatePickerProps {
        value: string;
        handler: (value: string) => void;
        className?: string;
        placeholder?: string;
    }
    const NepaliDatePicker: React.FC<NepaliDatePickerProps>;
    export default NepaliDatePicker;
}
