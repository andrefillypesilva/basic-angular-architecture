import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

// Interfaces
import { IGenericForm } from '../../shared/forms/generic-form/interfaces/i-generic-form';

export class GenericFormMock implements IGenericForm {
    items: import("./../../shared/forms/generic-form/interfaces/i-generic-form-item").IGenericFormItem[];
}

export class MockHttp {
    get(object: any[]) {
        return TestHelper.createResponse(object);
    }
}

@Pipe({ name: 'shortDescription' })
export class MockPipe implements PipeTransform {
    transform(value: number): number {
        return value;
    }
}

@Injectable({
    providedIn: 'root'
})
export class TestHelper {

    constructor() { }

    static createResponse(_body: any): any {
        return Observable.create((observer: Observer<any>) => {
            observer.next(_body);
        })
    }
}