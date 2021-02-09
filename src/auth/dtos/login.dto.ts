import { ISessionMeta } from '../intrafeces/session-meta';

export class LoginDto implements ISessionMeta {
  emailOrUsername: string;

  password: string;

  ip?: string;

  agent: string;

  deviceToken: string;
}
