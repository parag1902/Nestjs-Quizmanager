import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { quizDto } from 'src/DTO/quizdto';

@Controller('quiz')
export class QuizController 
{
    constructor(private readonly quiservice:QuizService){}
    @Get('1')
    getAllQuiz()
    {
        return this.quiservice.getAllQuiz();
    }
    @Post('1')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizdata:quizDto)
    {
        return {data:quizdata};
    }

}
