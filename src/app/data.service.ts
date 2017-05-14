import {Injectable} from '@angular/core'

@Injectable()
export class DataService{
    constructor(){}

    public data: any

    public getData(): any {
        return this.data;
    }

    public setData(data: any): void {
        this.data = data;
    }

}