import { Observable } from 'rxjs';

declare module 'rxjs' {
    interface Observable<T> {
        currentValue: () => any;
    }
}

declare global {
    interface Observable<T> {
        currentValue: () => any;
    }
}

Observable.prototype.currentValue = function (): any {
    let value;
    this.subscribe((_value) => (value = _value)).unsubscribe();
    return value;
};