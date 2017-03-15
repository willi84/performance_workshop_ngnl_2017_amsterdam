"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var router_1 = require("@angular/router");
var ng2_translate_1 = require("ng2-translate");
var AppComponent = (function () {
    function AppComponent(router, oauthService, translate) {
        this.router = router;
        this.oauthService = oauthService;
        this.translate = translate;
        this.info = 'Welt';
        this.showWaitInfo = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initNgTranslate();
        this.initRouterEvents();
        this.initAuth();
    };
    AppComponent.prototype.initNgTranslate = function () {
        /*
        this.translate.addLangs(['en', 'de']);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        */
    };
    AppComponent.prototype.initRouterEvents = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.showWaitInfo = true;
            }
            if (event instanceof router_1.NavigationEnd
                || event instanceof router_1.NavigationCancel
                || event instanceof router_1.NavigationError) {
                _this.showWaitInfo = false;
            }
        });
    };
    AppComponent.prototype.initAuth = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'flight-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        angular_oauth2_oidc_1.OAuthService,
        ng2_translate_1.TranslateService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map