webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroEmpresaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroEmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroEmpresaPage = /** @class */ (function () {
    function CadastroEmpresaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroEmpresaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroEmpresaPage');
    };
    CadastroEmpresaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-empresa',template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\cadastro-empresa\cadastro-empresa.html"*/'<!--\n  Generated template for the CadastroEmpresaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cadastroEmpresa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\cadastro-empresa\cadastro-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastroEmpresaPage);
    return CadastroEmpresaPage;
}());

//# sourceMappingURL=cadastro-empresa.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_linkedin__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, alertCtrl, loadingCtrl, db, linkedin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.db = db;
        this.linkedin = linkedin;
        this.nome = "";
        this.sobrenome = "";
        this.idade = "";
        this.gender = "";
        this.escolaridade = "";
        this.areaAtuacao = "";
        this.email = "";
        this.senha = "";
        this.repetirSenha = "";
    }
    CadastroPage.prototype.cadastro = function () {
        var _this = this;
        if (this.nome == "" ||
            this.sobrenome == "" ||
            this.idade == "" ||
            this.gender == "" ||
            this.escolaridade == "" ||
            this.areaAtuacao == "" ||
            this.email == "" ||
            this.senha == "" ||
            this.repetirSenha == "") {
            var alert_1 = this.alertCtrl.create({
                title: "Ei, temos um problema!",
                subTitle: "Parece que você não preencheu todos os campos. Verifique se falta algo para prosseguirmos com seu cadastro!",
                buttons: ["OK"]
            });
            alert_1.present();
        }
        else if (this.senha != this.repetirSenha) {
            var alert_2 = this.alertCtrl.create({
                title: "Ei, temos um problema!",
                subTitle: "As senhas que você digitou não são coincidem! Tente digitar senhas iguais para concluir seu cadastro!",
                buttons: ["OK"]
            });
            alert_2.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                spinner: "crescent",
                content: "Aguarde enquanto cadastramos seus dados!"
            });
            loading_1.present();
            this.db
                .rodarQuery("INSERT INTO usuarioPessoa(nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha) VALUES (?,?,?,?,?,?,?,?)", [
                this.nome,
                this.sobrenome,
                this.idade,
                this.gender,
                this.escolaridade,
                this.areaAtuacao,
                this.email,
                this.senha
            ])
                .then(function (arg) {
                loading_1.dismiss();
                _this.alertCtrl
                    .create({
                    subTitle: "Cadastro feito com sucesso!"
                })
                    .present();
                _this.navCtrl.popToRoot();
            })
                .catch(function (err) {
                loading_1.dismiss();
                _this.alertCtrl
                    .create({
                    subTitle: err.message
                })
                    .present();
                console.error(JSON.stringify(err));
            });
        }
    };
    CadastroPage.prototype.goLinkedin = function () {
        this.linkedin
            .hasActiveSession()
            .then(function (active) { return console.log("has active session?", active); });
        this.linkedin
            .login(["r_basicprofile", "r_emailaddress", "rw_company_admin", "w_share"], true)
            .then(function () { return console.log("Logged in!"); })
            .catch(function (e) { return console.log("Error logging in", e); });
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CadastroPage");
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-cadastro",template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\cadastro\cadastro.html"*/'<ion-header>\n  <ion-navbar> <ion-title>Cadastro de Usuário</ion-title> </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button (click)="goLinkedin()">Cadastrar com Linkedin</button>\n\n  <ion-input type="text" placeholder="Nome" [(ngModel)]="nome"></ion-input>\n  <br />\n  <ion-input\n    type="text"\n    placeholder="Sobrenome"\n    [(ngModel)]="sobrenome"\n  ></ion-input>\n  <br />\n  <ion-input type="number" placeholder="Idade" [(ngModel)]="idade"></ion-input>\n  <br />\n  <ion-item>\n    <ion-label>Gênero</ion-label>\n    <ion-select [(ngModel)]="gender">\n      <ion-option value="f">Feminino</ion-option>\n      <ion-option value="m">Masculino</ion-option>\n    </ion-select>\n  </ion-item>\n  <br />\n  <ion-item>\n    <ion-label>Escolaridade</ion-label>\n    <ion-select [(ngModel)]="escolaridade">\n      <ion-option value="fundamental">Fundamental</ion-option>\n      <ion-option value="medioIncompleto">Médio Incompleto</ion-option>\n      <ion-option value="medioCompleto">Médio Completo</ion-option>\n      <ion-option value="superiorCompleto">Superior Completo</ion-option>\n      <ion-option value="superiorIncompleto">Superior Incompleto</ion-option>\n      <ion-option value="superiorCursando">Superior Cursando</ion-option>\n    </ion-select>\n  </ion-item>\n  <br />\n  <ion-item>\n    <ion-label>Área de atuação</ion-label>\n    <ion-select [(ngModel)]="areaAtuacao">\n      <ion-option value="adm">Administração</ion-option>\n      <ion-option value="alimentos">Alimentação / Gastronomia</ion-option>\n      <ion-option value="arquitetura">Arquitetura / Decoração</ion-option>\n      <ion-option value="artes">Artes</ion-option>\n      <ion-option value="agricultura"\n        >Agricultura / Pecuária / Veterinária</ion-option\n      >\n      <ion-option value="auditoria">Auditoria</ion-option>\n      <ion-option value="comercial">Comercial / Vendas</ion-option>\n      <ion-option value="construção">Construção / Manutenção</ion-option>\n      <ion-option value="compras">Compras</ion-option>\n      <ion-option value="comunicação">Comunicação</ion-option>\n      <ion-option value="ciencia">Ciências</ion-option>\n      <ion-option value="contabil">Contábil / Finanças / Economia</ion-option>\n      <ion-option value="cultura">Cultura / Lazer</ion-option>\n      <ion-option value="engenharia">Engenharias</ion-option>\n      <ion-option value="estetica">Estética</ion-option>\n      <ion-option value="hotelaria">Hotelaria / Turismo</ion-option>\n      <ion-option value="informatica">Informática / TI</ion-option>\n      <ion-option value="industrial">Industrial / Produção</ion-option>\n      <ion-option value="juridica">Jurídica</ion-option>\n      <ion-option value="logistica">Logistica</ion-option>\n      <ion-option value="moda">Moda</ion-option>\n      <ion-option value="marketing">Marketing</ion-option>\n      <ion-option value="pedagogia">Pedagogia</ion-option>\n      <ion-option value="quimica">Química</ion-option>\n      <ion-option value="qualidade">Qualidade</ion-option>\n      <ion-option value="rh">Recursos Humanos</ion-option>\n      <ion-option value="saude">Saúde</ion-option>\n      <ion-option value="servicos">Serviços Gerais</ion-option>\n      <ion-option value="seguranca">Segurança</ion-option>\n      <ion-option value="social">Serviço Social</ion-option>\n      <ion-option value="outros">Outros...</ion-option>\n    </ion-select>\n  </ion-item>\n  <br />\n  <ion-input type="email" placeholder="E-mail" [(ngModel)]="email"></ion-input>\n  <br />\n  <ion-input\n    type="password"\n    placeholder="Senha"\n    [(ngModel)]="senha"\n  ></ion-input>\n  <br />\n  <ion-input\n    type="password"\n    placeholder="Repita sua Senha"\n    [(ngModel)]="repetirSenha"\n  ></ion-input>\n  <br />\n  <button id="bCadastrar" (click)="cadastro()">Concluir cadastro</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\cadastro\cadastro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_linkedin__["a" /* LinkedIn */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmpresasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmpresasPage = /** @class */ (function () {
    function EmpresasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmpresasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmpresasPage');
    };
    EmpresasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-empresas',template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\empresas\empresas.html"*/'<!--\n  Generated template for the EmpresasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>empresas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\empresas\empresas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EmpresasPage);
    return EmpresasPage;
}());

//# sourceMappingURL=empresas.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventosPage = /** @class */ (function () {
    function EventosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventosPage');
    };
    EventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos',template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\eventos\eventos.html"*/'<!--\n  Generated template for the EventosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>eventos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\eventos\eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EventosPage);
    return EventosPage;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_empresa_cadastro_empresa__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastro_cadastro__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.nome = "";
    }
    LoginPage.prototype.login = function () {
    };
    LoginPage.prototype.cadastro = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Que tipo de cadastro deseja fazer?',
            inputs: [
                {
                    name: 'empresa',
                    label: 'Empresa',
                    type: 'radio',
                    handler: function () {
                        _this.nome = "empresa";
                    }
                },
                {
                    name: 'usuario',
                    label: 'Pessoa',
                    type: 'radio',
                    handler: function () {
                        _this.nome = "usuario";
                    }
                }
            ],
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        if (_this.nome == "usuario") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cadastro_cadastro__["a" /* CadastroPage */]);
                        }
                        else if (_this.nome == "empresa") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastro_empresa_cadastro_empresa__["a" /* CadastroEmpresaPage */]);
                        }
                    }
                }],
        });
        alert.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\login\login.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content padding class="login">\n  <div id="dLogo">\n    <img id="logo" src="../../assets/imgs/logo.png">\n  </div>\n  <div id="iLogin">\n    <ion-input type="text" placeholder="Usuário"></ion-input>\n    <br>\n    <ion-input type="password" placeholder="Senha"></ion-input>\n    <button id="bLogin">Login</button>\n  </div>\n  <button ion-button color="light" clear (click)="cadastro()">Ou cadastre-se</button>\n</ion-content>'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VagasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VagasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VagasPage = /** @class */ (function () {
    function VagasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VagasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VagasPage');
    };
    VagasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vagas',template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\vagas\vagas.html"*/'<!--\n  Generated template for the VagasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>vagas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\vagas\vagas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VagasPage);
    return VagasPage;
}());

//# sourceMappingURL=vagas.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-empresa/cadastro-empresa.module": [
		286,
		7
	],
	"../pages/cadastro/cadastro.module": [
		287,
		6
	],
	"../pages/empresas/empresas.module": [
		288,
		5
	],
	"../pages/eventos/eventos.module": [
		289,
		4
	],
	"../pages/login/login.module": [
		290,
		3
	],
	"../pages/mensagens/mensagens.module": [
		291,
		0
	],
	"../pages/perfil/perfil.module": [
		292,
		2
	],
	"../pages/vagas/vagas.module": [
		293,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sql) {
        this.sql = sql;
        this.dbName = "transjobs.db";
        this.dbLocation = "default";
        this.db = null;
        console.log("Hello DatabaseProvider Provider");
        this.inicializar();
    }
    DatabaseProvider.prototype.inicializar = function () {
        var _this = this;
        this.sql
            .create({
            name: this.dbName,
            location: this.dbLocation
        })
            .then(function (d) {
            _this.db = d;
            d.executeSql("CREATE TABLE IF NOT EXISTS usuarioPessoa(id INTEGER PRIMARY KEY AUTOINCREMENT, nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha)");
        });
    };
    DatabaseProvider.prototype.rodarQuery = function (query, data) {
        var _this = this;
        if (data === void 0) { data = []; }
        return new Promise(function (resolve, reject) {
            _this.db
                .executeSql(query, data)
                .then(resolve)
                .catch(reject);
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_linkedin__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_empresas_empresas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_eventos_eventos__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_vagas_vagas__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_empresa_cadastro_empresa__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_tasks_service_tasks_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_database_database__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_empresas_empresas__["a" /* EmpresasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_eventos_eventos__["a" /* EventosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vagas_vagas__["a" /* VagasPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_empresa_cadastro_empresa__["a" /* CadastroEmpresaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-empresa/cadastro-empresa.module#CadastroEmpresaPageModule', name: 'CadastroEmpresaPage', segment: 'cadastro-empresa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/empresas/empresas.module#EmpresasPageModule', name: 'EmpresasPage', segment: 'empresas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventos/eventos.module#EventosPageModule', name: 'EventosPage', segment: 'eventos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensagens/mensagens.module#MensagensPageModule', name: 'MensagensPage', segment: 'mensagens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vagas/vagas.module#VagasPageModule', name: 'VagasPage', segment: 'vagas', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_empresas_empresas__["a" /* EmpresasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_eventos_eventos__["a" /* EventosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vagas_vagas__["a" /* VagasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_empresa_cadastro_empresa__["a" /* CadastroEmpresaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_linkedin__["a" /* LinkedIn */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_tasks_service_tasks_service__["a" /* TasksServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { TabsPage } from '../pages/tabs/tabs';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vagas_vagas__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empresas_empresas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventos_eventos__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__["a" /* PerfilPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__empresas_empresas__["a" /* EmpresasPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__vagas_vagas__["a" /* VagasPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__eventos_eventos__["a" /* EventosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jeann\Downloads\TransJobs\src\pages\tabs\tabs.html"*/'<ion-tabs>\n 	<ion-tab [root]="tab2Root" tabTitle="Perfil" tabIcon="ios-person-outline"></ion-tab>\n  	<ion-tab [root]="tab3Root" tabTitle="Empresas" tabIcon="ios-briefcase-outline"></ion-tab>\n  	<ion-tab [root]="tab4Root" tabTitle="Vagas" tabIcon="ios-search-outline"></ion-tab>\n  	<ion-tab [root]="tab5Root" tabTitle="Eventos" tabIcon="ios-calendar-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\jeann\Downloads\TransJobs\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TasksServiceProvider = /** @class */ (function () {
    function TasksServiceProvider(http) {
        this.http = http;
        this.db = null;
        console.log('Hello TasksServiceProvider Provider');
    }
    TasksServiceProvider.prototype.setDataBase = function (db) {
        if (this.db === null) {
            this.db = db;
        }
    };
    TasksServiceProvider.prototype.createUsuarioPessoa = function () {
        var sql = 'CREATE TABLE IF NOT EXISTS usuarioPessoa(id INTEGER PRIMARY KEY AUTOINCREMENT, nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha)';
        return this.db.executeSql(sql, []);
    };
    TasksServiceProvider.prototype.insertUsuarioPessoa = function (nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha) {
        var sql = 'INSERT INTO usuarioPessoa(nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        return this.db.executeSql(sql, [nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha]);
    };
    TasksServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TasksServiceProvider);
    return TasksServiceProvider;
}());

//# sourceMappingURL=tasks-service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map