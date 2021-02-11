(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DynamicArray = void 0;
    class DynamicArray {
        constructor() {
            this.array = new Array();
            this.length = 0;
            this.capacity = 0;
        }
        size() {
            return this.length;
        }
        isEmpty() {
            return !this.size();
        }
        get(index) {
            if (index < 0 || index >= length) {
                throw Error('Index is not correct');
            }
            return this.array[index];
        }
        set(index, value) {
            if (index < 0 || index >= length) {
                throw Error('Index is not correct');
            }
            else {
                this.array[index] = value;
            }
        }
        clear() {
            this.array.forEach((elem) => (elem = null));
            this.length = 0;
        }
        push(elem) {
            const lastIndex = this.size() - 1;
            this.length = this.size() * 2;
            return [...this.array, elem];
        }
    }
    exports.DynamicArray = DynamicArray;
});
//# sourceMappingURL=dynamic-array.js.map