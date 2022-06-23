import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        return {
          ok: false,
          error: 'There is a user with that email',
        };
      }

      const user = await this.users.save(
        this.users.create({ email, password, role }),
      );

      return {
        ok: true,
      };
    } catch (error) {
      return { ok: false, error: "Couldn't create account" };
    }
  }
  
  async findById() {

  }

  async login() {

  }
}