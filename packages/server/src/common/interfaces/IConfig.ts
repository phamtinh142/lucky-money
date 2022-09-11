export interface IConfigAuth {
  jwtSecret: string;
  jwtExpirationTime: number;
}

export interface IConfigApp {
  port: string;
}
