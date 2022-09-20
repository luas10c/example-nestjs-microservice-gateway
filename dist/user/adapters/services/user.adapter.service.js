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
exports.UserAdapterService = void 0;
const common_1 = require("@nestjs/common");
let UserAdapterService = class UserAdapterService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.heroService = this.client.getService('HeroService');
    }
    async getUsers() {
        const { users } = await new Promise((resolve, reject) => {
            this.heroService.getUsers({}).subscribe({
                error(error) {
                    reject(error);
                },
                next(value) {
                    resolve(value);
                }
            });
        });
        return users;
    }
    async getUserById(id) {
        const { user } = await new Promise((resolve, reject) => {
            this.heroService.getUserById({ id }).subscribe({
                error(error) {
                    reject(error);
                },
                next(value) {
                    resolve(value);
                }
            });
        });
        if (!user) {
            throw new common_1.HttpException('Smile você quer error assim', 400);
        }
        return user;
    }
    async getUserByEmail(email) {
        const { user } = await new Promise((resolve, reject) => {
            this.heroService.getUserByEmail({ email }).subscribe({
                error(error) {
                    reject(error);
                },
                next(value) {
                    resolve(value);
                }
            });
        });
        return user;
    }
    async getUserByUsername(username) {
        const { user } = await new Promise((resolve, reject) => {
            this.heroService.getUserByUsername({ username }).subscribe({
                error(error) {
                    reject(error);
                },
                next(value) {
                    resolve(value);
                }
            });
        });
        return user;
    }
};
UserAdapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('HERO_PACKAGE')),
    __metadata("design:paramtypes", [Object])
], UserAdapterService);
exports.UserAdapterService = UserAdapterService;
