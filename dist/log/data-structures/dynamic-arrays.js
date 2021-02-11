(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../data-structures/dynamic-array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const dynamic_array_1 = require("../../data-structures/dynamic-array");
    const array = new dynamic_array_1.DynamicArray();
    console.log(array.isEmpty());
    array.push(1);
    console.log(array.isEmpty());
    console.log(array);
});
//# sourceMappingURL=dynamic-arrays.js.map