import { IsNotEmpty, Length } from "class-validator";

export class quizDto
{
    @IsNotEmpty({message:"Quiz Should have a message"})
    @Length(3,255)
    title:string;
    
    @IsNotEmpty()
    @Length(3)
    description:string;
}