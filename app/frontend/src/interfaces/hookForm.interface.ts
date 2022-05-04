import { FieldValues, UseFormRegister } from 'react-hook-form';

export default interface Register {
    register: UseFormRegister<FieldValues>
    errors: { [x:string]: any }
};