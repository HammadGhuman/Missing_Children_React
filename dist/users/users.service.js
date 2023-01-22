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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const user = new user_entity_1.User();
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.fullName = createUserDto.fullName;
        user.type = "user";
        console.log(user);
        try {
            const res = await this.userRepository.save(user);
            console.log(" Error ");
            console.log(res);
            return res;
        }
        catch (err) {
            console.log("///////////////..........Error............//////////////");
            console.log(err.errno);
            if (err.errno === 1062) {
                console.log("///////////////..........Error  Duplicate............//////////////");
                throw new common_1.BadRequestException("Email/User Already Exists");
            }
            throw new common_1.BadRequestException(err.sqlMessage);
        }
    }
    async login(cred) {
        console.log(cred.email);
        const user = await this.userRepository.find({
            where: {
                email: cred.email
            }
        });
        const all = await this.userRepository.find();
        console.log("all", all);
        console.log("user = ", user);
        if (user.length !== 0) {
            console.log("user = ", user[0]);
            if (user[0].password === cred.password) {
                console.log(user[0].fullName, user[0].id);
                const payload = { name: user[0].fullName, email: user[0].email, id: user[0].id, type: user[0].type };
                const access_token = await this.jwtService.signAsync(payload);
                return { access_token, fullName: user[0].fullName, email: user[0].email, id: user[0].id, type: user[0].type };
            }
            else {
                throw new common_1.BadRequestException("Email or Password Wrong");
            }
        }
        else {
            throw new common_1.BadRequestException("No User Found");
        }
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map