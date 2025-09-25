import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), './data/products.json');

interface Product {
    id: number;
    name: string;
    price: number;
}

export async function GET() {
    return new Promise<NextResponse>((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return resolve(NextResponse.json({ error: 'Failed to read data' }, { status: 500 }));
            }
            resolve(NextResponse.json(JSON.parse(data)));
        });
    });
}

export async function POST(request: Request) {
    const newProduct: Product = await request.json();

    return new Promise<NextResponse>((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return resolve(NextResponse.json({ error: 'Failed to read data' }, { status: 500 }));
            }

            const products: Product[] = JSON.parse(data);
            products.push(newProduct);

            fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
                if (err) {
                    return resolve(NextResponse.json({ error: 'Failed to save data' }, { status: 500 }));
                }
                resolve(NextResponse.json(newProduct, { status: 201 }));
            });
        });
    });
}