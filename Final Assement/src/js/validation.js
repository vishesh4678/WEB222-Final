class Validator {
    constructor(checkDataResponse, validations) {
        this.invalid = []; 
        this.checkDataResponse = checkDataResponse;
        this.validations = validations;
    }

    regex(key, options) {
        return this.checkDataResponse[key].toString().match(options.pattern);
    }

    valid() {
        for (const key in this.validations) {
            if (Object.hasOwnProperty.call(this.validations, key)) {
                const options = this.validations[key];
                if (!this[options.type](key, options)) {
                    this.invalid.push(key);
                    this.showValidationError(key);
                }
            }
        }
        return this.invalid.length === 0;
    }

    showValidationError(key) 
    {
        const toast = document.createElement('div');
        const text = document.createTextNode(`Please enter a valid ${key.toUpperCase()}`);
        toast.appendChild(text);
        toast.className = "toast toast-danger show";
        document.body.appendChild(toast);
        setTimeout(() => document.body.removeChild(toast), 5000);
    }
}