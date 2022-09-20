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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_adapter_service_1 = require("../services/user.adapter.service");
const user_1 = require("../../../common/types/inputs/user");
const user_2 = require("../../../common/types/outputs/user");
let UserResolver = class UserResolver {
    constructor(userAdapterService) {
        this.userAdapterService = userAdapterService;
    }
    async getUsers() {
        const users = await this.userAdapterService.getUsers();
        return users;
    }
    async getUserById(data) {
        const { id } = data;
        const user = await this.userAdapterService.getUserById(id);
        return user;
    }
    async getUserByEmail(data) {
        const { email } = data;
        const user = await this.userAdapterService.getUserByEmail(email);
        return user;
    }
    async getUserByUsername(data) {
        const { username } = data;
        const user = await this.userAdapterService.getUserByUsername(username);
        return user;
    }
};
__decorate([
    (0, graphql_1.Query)(() => [user_2.UserOutput]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Query)(() => user_2.UserOutput),
    __param(0, (0, graphql_1.Args)('getUserByIdInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserByIdInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserById", null);
__decorate([
    (0, graphql_1.Query)(() => user_2.UserOutput),
    __param(0, (0, graphql_1.Args)('getUserByEmailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserByEmailInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserByEmail", null);
__decorate([
    (0, graphql_1.Query)(() => user_2.UserOutput),
    __param(0, (0, graphql_1.Args)('getUserByUsername')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserByUsernameInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserByUsername", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_adapter_service_1.UserAdapterService])
], UserResolver);
exports.UserResolver = UserResolver;
