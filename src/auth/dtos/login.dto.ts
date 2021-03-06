import { IsNotEmpty, IsString } from 'class-validator';
import { ISessionMeta } from '../intrafeces/session-meta';

export class LoginDto implements ISessionMeta {
  @IsString()
  @IsNotEmpty()
  emailOrUsername: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  ip?: string;

  agent: string;

  deviceToken: string;
}
