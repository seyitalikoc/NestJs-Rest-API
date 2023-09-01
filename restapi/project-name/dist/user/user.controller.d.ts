import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    findAll(): Promise<import("./entity/user.entity").User[]>;
    findOneById(id: number): Promise<string | import("./entity/user.entity").User>;
    create(newUser: CreateUserDto): Promise<import("./entity/user.entity").User | "This username is using. Enter another username.">;
    patchUpdate(id: number, body: any): Promise<string | import("./entity/user.entity").User>;
    putUpdate(id: number, body: UserDto): Promise<string | import("./entity/user.entity").User>;
    delete(id: number): Promise<String>;
}
