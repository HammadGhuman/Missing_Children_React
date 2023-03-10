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
exports.UploadsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const jwt_auth_guard_1 = require("../users/jwt.auth.guard");
const createMisingDto_1 = require("./dto/createMisingDto");
const uploads_service_1 = require("./uploads.service");
let UploadsController = class UploadsController {
    constructor(uploadsService) {
        this.uploadsService = uploadsService;
    }
    reportMissingChild(file, createMissingDto, req) {
        console.log(req.user);
        createMissingDto.imageOfChild = file.destination;
        console.log(file);
        return this.uploadsService.reportMissingChild(createMissingDto);
    }
    reportFoundChild(file, createMissingDto) {
        createMissingDto.imageOfChild = file.destination;
        console.log(file);
        return this.uploadsService.reportFoundChild(createMissingDto);
    }
};
__decorate([
    (0, common_1.Post)('/missing'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: "./missingChildren",
            filename: (req, file, cb) => {
                const name = file.originalname.split(".")[0];
                const fileExtension = file.originalname.split(".")[1];
                let date = new Date();
                let dateStr = date.toLocaleDateString();
                let dateTime = date.toLocaleTimeString();
                const us = req.user;
                const newFileName = name.split(" ").join("_") + "_" + us.email + "_" + dateStr.split("/")[0] + "#" + dateStr.split("/")[1] + "#" + dateStr.split("/")[2] + "_" + dateTime + "_" + fileExtension;
                console.log(newFileName);
                cb(null, newFileName);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createMisingDto_1.CreateMissingDto, Object]),
    __metadata("design:returntype", void 0)
], UploadsController.prototype, "reportMissingChild", null);
__decorate([
    (0, common_1.Post)('/found'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: "./foundChildren",
            filename: (req, file, cb) => {
                const name = file.originalname.split(".")[0];
                const fileExtension = file.originalname.split(".")[1];
                let date = new Date();
                let dateStr = date.toLocaleDateString();
                let dateTime = date.toLocaleTimeString();
                const newFileName = name.split(" ").join("_") + "_" + dateStr.split("/")[0] + "#" + dateStr.split("/")[1] + "#" + dateStr.split("/")[2] + "_" + dateTime + "_" + fileExtension;
                console.log(newFileName);
                cb(null, newFileName);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createMisingDto_1.CreateMissingDto]),
    __metadata("design:returntype", void 0)
], UploadsController.prototype, "reportFoundChild", null);
UploadsController = __decorate([
    (0, common_1.Controller)('uploads'),
    __metadata("design:paramtypes", [uploads_service_1.UploadsService])
], UploadsController);
exports.UploadsController = UploadsController;
//# sourceMappingURL=uploads.controller.js.map