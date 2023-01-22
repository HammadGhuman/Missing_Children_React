import { Repository } from 'typeorm';
import { CreateMissingDto } from './dto/createMisingDto';
import { Child } from './entities/Child';
export declare class UploadsService {
    private childRepository;
    constructor(childRepository: Repository<Child>);
    reportMissingChild(createMissingDto: CreateMissingDto): Promise<Child>;
    reportFoundChild(createMissingDto: CreateMissingDto): Promise<Child>;
}
