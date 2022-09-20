"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdapterModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const user_adapter_service_1 = require("./services/user.adapter.service");
const user_resolver_1 = require("./resolvers/user.resolver");
let UserAdapterModule = class UserAdapterModule {
};
UserAdapterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'HERO_PACKAGE',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        url: '0.0.0.0:50051',
                        package: 'hero',
                        protoPath: (0, path_1.join)(__dirname, '..', '..', 'protobuffs', 'hero.proto'),
                        loader: {
                            keepCase: true,
                            longs: Number,
                            enums: String,
                            defaults: false,
                            arrays: true,
                            objects: true,
                            includeDirs: [(0, path_1.join)(__dirname, '..', '..', 'protobufs')]
                        }
                    }
                }
            ])
        ],
        providers: [user_adapter_service_1.UserAdapterService, user_resolver_1.UserResolver]
    })
], UserAdapterModule);
exports.UserAdapterModule = UserAdapterModule;
