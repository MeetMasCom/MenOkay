"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = __importStar(require("nodemailer"));
var nodemailer_express_handlebars_1 = __importDefault(require("nodemailer-express-handlebars"));
var enviroment_1 = require("../constants/enviroment");
var EmailHelper = /** @class */ (function () {
    function EmailHelper() {
        var _this = this;
        this.loginUser = function (fullName, code, email) {
            var result = _this.sendEmailTemplate("Iniciar Sesión", null, "user_login", {
                fullName: fullName,
                code: code,
                email: email,
            })
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, "Exito"];
                });
            }); })
                .catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, err];
                });
            }); });
            return result;
        };
        this.recoverUsername = function (fullName, username, email) {
            var result = _this.sendEmailTemplate("Recuperar Usuario", null, "recover_username", {
                fullName: fullName,
                username: username,
                email: email,
            })
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, "Exito"];
                });
            }); })
                .catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, err];
                });
            }); });
            return result;
        };
        this.recoverPassword = function (fullName, code, email) {
            var result = _this.sendEmailTemplate("Recuperar Contraseña", null, "recover_password", {
                fullName: fullName,
                code: code,
                email: email,
            })
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, "Exito"];
                });
            }); })
                .catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, err];
                });
            }); });
            return result;
        };
        this.reviewRecharg = function (fullName, code, remark, email, status) {
            var result = _this.sendEmailTemplate("Revisión recarga", null, "review_recharg", {
                fullName: fullName,
                code: code,
                remark: remark,
                email: email,
                status: status == 1 ? 'Aprobada' : 'Rechazado'
            })
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, "Exito"];
                });
            }); })
                .catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, err];
                });
            }); });
            return result;
        };
        this.reviewRetreat = function (fullName, code, remark, email, status, photo, amount) {
            var result = _this.sendEmailTemplate("Revisión retiro", null, "review_retreat", {
                fullName: fullName,
                code: code,
                remark: remark,
                email: email,
                status: status == 1 ? 'Aprobada' : 'Rechazado',
                photo: photo,
                amount: amount
            })
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, "Exito"];
                });
            }); })
                .catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, err];
                });
            }); });
            return result;
        };
        this.nodemailerConfig = {
            host: enviroment_1.HOST_EMAIL,
            port: Number(enviroment_1.PORT_EMAIL),
            secure: true,
            auth: {
                user: enviroment_1.USER_EMAIL,
                pass: enviroment_1.PASS_EMAIL,
            },
        };
        this.nodemailer = nodemailer.createTransport(this.nodemailerConfig);
        this.nodemailer.use("compile", (0, nodemailer_express_handlebars_1.default)({
            viewEngine: {
                extname: ".hbs",
                defaultLayout: "main",
                layoutsDir: "views/layouts",
                partialsDir: "views/partials",
            },
            extName: ".hbs",
            viewPath: "views",
        }));
    }
    EmailHelper.prototype.sendEmailTemplate = function (titulo, attachments, templateName, contexts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var mailOpciones = {
                from: enviroment_1.EMISOR_EMAIL,
                to: contexts.email,
                subject: titulo,
                attachments: attachments,
                template: templateName,
                context: contexts,
            };
            _this.nodemailer.sendMail(mailOpciones, function (error) {
                if (error)
                    reject(error.message);
                resolve(true);
            });
        });
    };
    return EmailHelper;
}());
exports.default = EmailHelper;