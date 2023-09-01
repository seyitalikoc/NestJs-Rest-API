import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { type Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
export declare class UserProviders {
    private userRepository;
    private readonly logger;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOneByID(id: number): Promise<string | User>;
    findOneByName(name: string): Promise<string | User>;
    create(n_user: CreateUserDto): Promise<User | "This username is using. Enter another username.">;
    patchUpdate(id: number, body: UserDto): Promise<string | User>;
    putUpdate(id: number, body: UserDto): Promise<string | User>;
    delete(id: number): Promise<"user didn't find." | "user deleted.">;
}
