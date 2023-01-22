import { UsersService } from './users.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: UsersService);
    validate(email: string, password: string): Promise<any>;
}
export {};
