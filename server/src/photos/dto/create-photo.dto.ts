import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePhotoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsUrl()
  image: string;
}
