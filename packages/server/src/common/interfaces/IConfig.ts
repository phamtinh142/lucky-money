export interface IConfigNAT {
  host: string;
  port: number;
}

export interface IConfigAuth {
  jwtSecret: string;
  jwtExpirationTime: number;
}

export interface IConfigApp {
  port: string;
}
