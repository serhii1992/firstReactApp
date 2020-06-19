import React from 'react';
import s from "./FormsControl.module.css";

export const Textarea = ({ input, meta, ...props } ) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={`${s.formsControl} ${hasError ? s.error : ''}`} >
            <div>
                <textarea  {...input} {...props} />
            </div>
                {hasError && <span span>{meta.error}</span>}   
        </div>
    )
}

export const Input = ({ input, meta, ...props } ) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={`${s.formsControl} ${hasError ? s.error : ''}`} >
            <div>
                <input  {...input} {...props} />
            </div>
                {hasError && <span span>{meta.error}</span>}   
        </div>
    )
}