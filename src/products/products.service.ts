import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    private products = [
        {
            id: "1",
            title: "book",
            price: 12
        },
        {
            id: "2",
            title: "macbook",
            price: 119
        }
    ]

    getAll() {
        return this.products
    }

    getById(id: string) {
        return this.products.find(product => product.id === id)
    }

    create(product: CreateProductDTO) {
        const id: string =  Date.now().toString()
        this.products.push({
            ...product,
            id
        })
        return id
    }
}
