import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

    @Get()
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
