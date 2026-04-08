import { type classValue, cslx } from 'cslx';
import { twMerge } from 'tailwind-merge';

export function cn ( ...inputs: classValue[]){
    return  twMerge(cslx(inputs))
}