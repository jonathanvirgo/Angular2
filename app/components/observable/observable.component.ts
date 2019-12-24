import { Component } from '@angular/core';
// import { form, Observable } from 'rxjs';
// import { of } from 'rxjs';

@Component({
    templateUrl:"app/components/observable/observable.component.html"
})

export class ObservableComponent{
    // const myObservable = of('apple', 'orange', 'grappe');
    // const myObserver = {
    //     next: (x: string) => console.log('Observer got a next value: ' + x),
    //     error: (err: string) => console.error('Observer got an error: ' + err),
    //     complete: () => console.log('Observer got a complete notification'),
    //     };
    constructor(){
        // const sequence = new Observable(sequenceSubscriber);
    }
    // sequenceSubscriber(observer: any) {
    //     observer.next('Apple');
    //     observer.next('Orange');
    //     observer.next('Grappe');
    //     observer.complete();
      
    //     return {unsubscribe() {}};
    //   }
}