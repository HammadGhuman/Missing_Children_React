import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(user: {
        email: string;
        password: string;
    }, req: any): Promise<any>;
    createUser(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
}
