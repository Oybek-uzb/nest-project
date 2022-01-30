import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

    @Get()
    // @Redirect('https://google.com', 301) // making redirect
    getAll() {
        return "getAll"
    }

    // @Get(':id')
    // getOneParam(@Param() params) {
    //     return `getOne ${params.id}`
    // }

    @Get(':id')
    getOneId(@Param('id') id: string): string {
        return `getOneId ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() product: CreateProductDTO): string {
        return `Title: ${product.title}, Price: ${product.price}`
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `Removed ${id}`
    }

    @Put(':id')
    update(@Body() product: UpdateProductDTO, @Param('id') id: string): string {
        return `Updated ${id}: Title: ${product.title}, Price: ${product.price}`
    }
}
