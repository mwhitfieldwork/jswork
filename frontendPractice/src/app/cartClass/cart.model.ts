import { Injectable } from '@angular/core';
import{CartLine} from './cartline.model'


@Injectable()
export class Cart {
    public lines: CartLine[] = []
    public itemCoun:number = 0;


    addLine(value1: any = 0, value2:any = 1) {
        return value1 + value2;
    }

}