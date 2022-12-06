import { IsOptional, IsNumberString } from 'class-validator';

export class findAllQueryDTO {
  @IsOptional()
  @IsNumberString()
  userId?: number;
}
