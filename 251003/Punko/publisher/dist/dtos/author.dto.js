var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { IsString, IsNotEmpty, Length } from 'class-validator';
let AuthorRequestTo = (() => {
    var _a;
    let _login_decorators;
    let _login_initializers = [];
    let _login_extraInitializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _password_extraInitializers = [];
    let _firstname_decorators;
    let _firstname_initializers = [];
    let _firstname_extraInitializers = [];
    let _lastname_decorators;
    let _lastname_initializers = [];
    let _lastname_extraInitializers = [];
    return _a = class AuthorRequestTo {
            constructor() {
                this.login = __runInitializers(this, _login_initializers, void 0);
                this.password = (__runInitializers(this, _login_extraInitializers), __runInitializers(this, _password_initializers, void 0));
                this.firstname = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _firstname_initializers, void 0));
                this.lastname = (__runInitializers(this, _firstname_extraInitializers), __runInitializers(this, _lastname_initializers, void 0));
                __runInitializers(this, _lastname_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _login_decorators = [IsString(), IsNotEmpty(), Length(2, 64)];
            _password_decorators = [IsString(), IsNotEmpty(), Length(8, 128)];
            _firstname_decorators = [IsString(), IsNotEmpty(), Length(2, 64)];
            _lastname_decorators = [IsString(), IsNotEmpty(), Length(2, 64)];
            __esDecorate(null, null, _login_decorators, { kind: "field", name: "login", static: false, private: false, access: { has: obj => "login" in obj, get: obj => obj.login, set: (obj, value) => { obj.login = value; } }, metadata: _metadata }, _login_initializers, _login_extraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
            __esDecorate(null, null, _firstname_decorators, { kind: "field", name: "firstname", static: false, private: false, access: { has: obj => "firstname" in obj, get: obj => obj.firstname, set: (obj, value) => { obj.firstname = value; } }, metadata: _metadata }, _firstname_initializers, _firstname_extraInitializers);
            __esDecorate(null, null, _lastname_decorators, { kind: "field", name: "lastname", static: false, private: false, access: { has: obj => "lastname" in obj, get: obj => obj.lastname, set: (obj, value) => { obj.lastname = value; } }, metadata: _metadata }, _lastname_initializers, _lastname_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
export { AuthorRequestTo };
let AuthorResponseTo = (() => {
    var _a;
    let _login_decorators;
    let _login_initializers = [];
    let _login_extraInitializers = [];
    return _a = class AuthorResponseTo {
            constructor() {
                this.login = __runInitializers(this, _login_initializers, void 0);
                this.firstname = __runInitializers(this, _login_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _login_decorators = [Length(2, 64)];
            __esDecorate(null, null, _login_decorators, { kind: "field", name: "login", static: false, private: false, access: { has: obj => "login" in obj, get: obj => obj.login, set: (obj, value) => { obj.login = value; } }, metadata: _metadata }, _login_initializers, _login_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
export { AuthorResponseTo };
