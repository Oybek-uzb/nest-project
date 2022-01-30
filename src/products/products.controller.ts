import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get()
    // @Redirect('https://google.com', 301) // making redirect
    getAll(): Promise<Product[]> {
        return this.productsService.getAll()
    }

    // @Get(':id')
    // getOneParam(@Param() params) {
    //     return `getOne ${params.id}`
    // }

    @Get(':id')
    getOneId(@Param('id') id: string): Promise<Product> {
        return this.productsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    // @Header('Cache-Control', 'none')
    create(@Body() product: CreateProductDTO): Promise<Product> {
        return this.productsService.create(product)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Product> {
        return this.productsService.remove(id)
    }

    @Put(':id')
    update(@Body() product: UpdateProductDTO, @Param('id') id: string): Promise<Product> {
        return this.productsService.update(id, product)
    }
}
