export class NullishGuard {
    static guard(value, name) {
        if (typeof(value) === 'undefined' || value === null) {
            throw new Error(`${name} is null or undefined.`);
        }
    }
}
