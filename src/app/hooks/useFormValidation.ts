import { useState } from "react";

interface ValidationRules {
  [key: string]: (value: string) => boolean;
}

interface ErrorMessages {
  [key: string]: string;
}

interface ValidationResult {
  values: Record<string, string>;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateForm: () => boolean;
}

const useFormValidation = (
  initialState: Record<string, string>,
  validationRules: ValidationRules,
  errorMessages: ErrorMessages
): ValidationResult => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateForm = () => {
    let newErrors: Record<string, string> = {};
    for (const [key, rule] of Object.entries(validationRules)) {
      if (!rule(values[key])) {
        newErrors[key] = errorMessages[key] || "Required";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return { values, handleChange, errors, validateForm };
};

export default useFormValidation;
