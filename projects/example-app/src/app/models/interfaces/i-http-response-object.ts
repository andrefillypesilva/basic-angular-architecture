// Interfaces
import { IGeneric } from './i-generic';

export interface IHttpResponseObject<T extends IGeneric> {
    message: string,
    object: T
}