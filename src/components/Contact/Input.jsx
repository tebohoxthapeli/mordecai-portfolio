import { Field, ErrorMessage } from "formik";

function Input({ title, name, inputType, errors, touched }) {
    const ringColour = errors[name] && touched[name] ? "ring-red-400" : "ring-lime-500";

    return (
        <label className="form-label">
            <span className="capitalize">
                {title} <span className="text-red-400">*</span>
            </span>

            {inputType === "textarea" ? (
                <Field
                    as="textarea"
                    name={name}
                    maxLength={500}
                    rows={6}
                    required
                    className={ringColour}
                />
            ) : (
                <Field
                    name={name}
                    type={inputType}
                    maxLength={100}
                    spellCheck="false"
                    required
                    className={ringColour}
                />
            )}

            <ErrorMessage name={name} component="p" />
        </label>
    );
}

export default Input;
