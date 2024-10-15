import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class healthController {

    @Get()
    getAllHealth(): string {
        return '';
    }
}
