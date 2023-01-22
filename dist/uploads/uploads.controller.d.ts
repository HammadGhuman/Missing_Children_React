/// <reference types="multer" />
import { CreateMissingDto } from './dto/createMisingDto';
import { UploadsService } from './uploads.service';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    reportMissingChild(file: Express.Multer.File, createMissingDto: CreateMissingDto, req: any): Promise<import("./entities/Child").Child>;
    reportFoundChild(file: Express.Multer.File, createMissingDto: CreateMissingDto): Promise<import("./entities/Child").Child>;
}
