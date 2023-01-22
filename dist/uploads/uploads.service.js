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
exports.UploadsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Child_1 = require("./entities/Child");
let UploadsService = class UploadsService {
    constructor(childRepository) {
        this.childRepository = childRepository;
    }
    async reportMissingChild(createMissingDto) {
        const missingChild = new Child_1.Child();
        missingChild.ChildName = createMissingDto.ChildName;
        missingChild.age = createMissingDto.age;
        missingChild.LocationOfChild = createMissingDto.LocationOfChild;
        missingChild.descriptionOfChild = createMissingDto.descriptionOfChild;
        missingChild.contactNumber = createMissingDto.contactNumber;
        missingChild.gender = createMissingDto.gender;
        missingChild.imageOfChild = createMissingDto.imageOfChild;
        missingChild.status = 'missing';
        try {
            return await this.childRepository.save(missingChild);
        }
        catch (err) {
            console.log(err);
            throw new common_1.InternalServerErrorException('error');
        }
    }
    async reportFoundChild(createMissingDto) {
        const foundChild = new Child_1.Child();
        foundChild.ChildName = createMissingDto.ChildName;
        foundChild.age = createMissingDto.age;
        foundChild.LocationOfChild = createMissingDto.LocationOfChild;
        foundChild.descriptionOfChild = createMissingDto.descriptionOfChild;
        foundChild.contactNumber = createMissingDto.contactNumber;
        foundChild.gender = createMissingDto.gender;
        foundChild.imageOfChild = createMissingDto.imageOfChild;
        foundChild.status = 'found';
        try {
            return await this.childRepository.save(foundChild);
        }
        catch (err) {
            console.log(err);
            throw new common_1.InternalServerErrorException('error');
        }
    }
};
UploadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Child_1.Child)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UploadsService);
exports.UploadsService = UploadsService;
//# sourceMappingURL=uploads.service.js.map