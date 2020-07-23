// Interfaces
import { IExample } from './../interfaces/i-example';

export class Example implements IExample {

    private _title: string;
    private _quantity: number;
    private _ready: boolean;

    constructor(
        _title: string,
        _quantity: number,
        _ready: boolean) {
            this.title = _title;
            this.quantity = _quantity;
            this.ready = _ready;
    }

    get title(): string {
        return this._title;
    }

    set title(_title: string) {
        this._title = _title;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(_quantity: number) {
        this._quantity = _quantity;
    }

    get ready(): boolean {
        return this._ready;
    }

    set ready(_ready: boolean) {
        this._ready = _ready;
    }

    printMessage(): void {
        console.log(`Title: ${this.title} - Quantity: ${this.quantity} - Ready? ${this.ready ? 'Yes!' : 'No!'}`);
    }
}
