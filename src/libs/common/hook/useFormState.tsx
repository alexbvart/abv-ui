import { useState } from "react";

export function useSmartForm<T>(initialValues: T) {
    const [values, setValues] = useState<T>(initialValues);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    const resetForm = () => setValues(initialValues);
  
    return { values, handleChange, resetForm };
  }