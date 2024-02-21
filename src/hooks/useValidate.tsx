'use client'

import { useField } from 'formik';

export const useValidate = (inputType: string, { ...props }: any) => {
    const [field, meta] = useField(props);
    let inputValidated = () => { };

    switch (inputType) {

        case 'input':
            inputValidated = () => {

                if (!meta.touched && !meta.error) {
                    return <input {...field} {...props} className={`${props.className}`} />
                } else if (meta.touched && meta.error) {
                    return <input {...field} {...props} rows="5" className={`${props.className} not-validate`} />
                } else if (meta.touched && !meta.error) {
                    return <input {...field} {...props} rows="5" className={`${props.className} validate`} />
                } else {
                    return <input {...field} {...props} rows="5" className={`${props.className}`} />
                }
            };

            return inputValidated

        case 'textarea':
            inputValidated = () => {

                if (!meta.touched && !meta.error) {
                    return <textarea {...field} {...props} rows="5" className={`${props.className}`} />
                } else if (meta.touched && meta.error) {
                    return <textarea {...field} {...props} rows="5" className={`${props.className} not-validate`} />
                } else if (meta.touched && !meta.error) {
                    return <textarea {...field} {...props} rows="5" className={`${props.className} validate`} />
                } else {
                    return <textarea {...field} {...props} rows="5" className={`${props.className}`} />
                }
            };

            return inputValidated

        default:
            return
        
    }
}