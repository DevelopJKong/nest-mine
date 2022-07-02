import { CoreOutput } from './../../common/dtos/output.dto';
import { User } from './../entities/user.entity';
import { InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';

@InputType()
export class EditProfileInput extends PartialType(
  PickType(User, ['email','password']),
) {}

@ObjectType()
export class EditProfileOutput extends CoreOutput {}
