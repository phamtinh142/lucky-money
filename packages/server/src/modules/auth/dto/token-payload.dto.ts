import { ApiProperty } from "@nestjs/swagger";

export class TokenPayloadDto {
  @ApiProperty({ enum: Number })
  expiresIn: number;

  @ApiProperty({ enum: String })
  accessToken: string;

  constructor(data: { expiresIn: number; accessToken: string }) {
    this.expiresIn = data.expiresIn;
    this.accessToken = data.accessToken;
  }
}
