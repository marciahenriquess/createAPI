import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    IsOptional,
  } from 'class-validator';

export class CreateUserDto {
  
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    role: string;              

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.\d)|(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$/, {
    message: 'password too weak',
  })
    password: string;  

    @IsString()
    @IsOptional()
    salt? : string | null;
    
    @IsString()
    confirmationToken : string;     
   
    @IsString()
    recoverToken: string;          
    
    @IsString()
    @IsOptional()
    createdAt?: Date | null;             
    
    @IsString()
    @IsOptional()
    updatedAt?: Date | null;     
}