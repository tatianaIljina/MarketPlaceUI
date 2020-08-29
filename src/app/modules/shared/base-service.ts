import {Observable, of, from } from 'rxjs';

export interface BaseService<TModel, TParam> {
    create(data: TParam): Observable<any>;

    delete(id: string): Observable<any>;

    patch(data: TParam): Observable<any>;
}