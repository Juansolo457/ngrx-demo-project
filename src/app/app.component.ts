import { Element } from '@angular/compiler';
import { Component } from '@angular/core';
import { filter, fromEvent, map, mapTo, of, pluck } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled1';


  ngOnInit() {
    of(1,2,3,4,5).pipe(
      /*
       * map applies the function you provide on each emitted value,
       * then emits the result.
       */
      filter(v => v > 2)
      // map(value => value * 10)
    ).subscribe(console.log);

    const keyup$ = fromEvent(document, 'keyup');
    const keycode$ = keyup$.pipe(
      map((event: any) => event.code)
    );

    const enter$ = keycode$.pipe(
      filter(c => c === 'Enter')
    );

    enter$.subscribe(() => console.log('hit your enter subscriber! value!'))


    /*
     * One popular use case is mapping to a property (or multiple properties)
     * on an object. In this case you can use map like below...
     */
    // const keycode$ = keyup$.pipe(
    //   map((event: any) => event.code)
    // );

    /*
     * Or you could use pluck, which accepts the property name you
     * wish to emit. You can also 'pluck' nested properties,
     * for instance: pluck('target', 'value'). I would use whichever
     * you feel is easiest to read (regarding map for single prop vs pluck).
     */
    // const keycodeWithPluck$ = keyup$.pipe(
    //   pluck('code')
    // );

    /*
     * For scenarios where you ALWAYS want to map to the same,
     * static value, you can use mapTo instead. This emits the value
     * you supply on any emissions from the source observable. We will see
     * a few examples of where this can be useful in upcoming lessons.
     */
    // const pressed$ = keyup$.pipe(
    //   mapTo('Key Pressed!')
    // );

    // keycodeWithPluck$.subscribe(console.log);
    function calculateScrollPercent(element: HTMLElement) {
      const { scrollTop, scrollHeight, clientHeight } = element;

      return (scrollTop / (scrollHeight - clientHeight)) * 100;
    }

// elems
    const progressBar: any = document.querySelector('.progress-bar');

// streams
    const scroll$ = fromEvent(document, 'scroll');

    const progress$ = scroll$.pipe(
      /*
       * For every scroll event, we use our helper function to
       * map to a current scroll progress value.
       */
      map(({ target }: any) => calculateScrollPercent(target.scrollingElement))
    );
    /*
     * We can then take the emitted percent and set the width
     * on our progress bar.
     */
    progress$.subscribe(percent => {
      progressBar.style.width = `${percent}%`;
    });

    /********************
     * Have a question, comment, or just want to chat about RxJS?
     * Ping me on Ultimate Courses slack or on
     * Twitter https://twitter.com/btroncone
     * I look forward to hearing from you!
     * For additional RxJS info and operator examples check out
     * Learn RxJS (https://www.learnrxjs.io) and
     * the Ultimate Course RxJS blog!
     * (https://ultimatecourses.com/blog/category/rxjs)
     ********************/

  }

}
