import { JwtService } from './jwt.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if ('x-jwt' in req.headers) {
      const token = req.headers['x-jwt'];
      try {
        const decoded = this.jwtService.verify(token.toString());
        if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
          const { ok, user } = await this.usersService.findById(decoded['id']);
          req['user'] = user;
        }
      } catch (error) {}
    }
    next();
  }
}
