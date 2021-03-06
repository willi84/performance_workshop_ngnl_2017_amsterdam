var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var RoundTripDirective = RoundTripDirective_1 = (function () {
    function RoundTripDirective() {
    }
    RoundTripDirective.prototype.validate = function (control) {
        var formGroup = control;
        var fromCtrl = formGroup.controls['from'];
        var toCtrl = formGroup.controls['to'];
        if (!fromCtrl || !toCtrl) {
            return {};
        }
        var from = fromCtrl.value;
        var to = toCtrl.value;
        if (from === to) {
            return {
                'round-trip': {
                    city: from
                }
            };
        }
        return {};
    };
    return RoundTripDirective;
}());
RoundTripDirective = RoundTripDirective_1 = __decorate([
    Directive({
        selector: '[flightRoundTrip]',
        providers: [{ provide: NG_VALIDATORS, useExisting: RoundTripDirective_1, multi: true }]
    })
], RoundTripDirective);
export { RoundTripDirective };
var RoundTripDirective_1;
//# sourceMappingURL=roundtrip.validator.js.map