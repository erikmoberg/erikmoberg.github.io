export class Fixture {
    constructor() {
        this.tests = [];
    }

    test(fn) {
        this.tests.push(fn);
    }

    run() {
        for (const test of this.tests) {
            test();
        }
    }

    equal(expected, actual, desc) {
        if (expected === actual) {
            console.log('%cOK: ' + desc, 'color: green;');
        } else {
            console.error(`Fail in ${desc}: Expected ${expected}, got ${actual}`);
        }
    }
}