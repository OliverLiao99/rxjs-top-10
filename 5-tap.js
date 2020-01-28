import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const source = of('molly');

const tapped = source.pipe(
    tap(t => console.log('tapped: ', t)),
    map(m => m.toUpperCase()),
    tap(t => console.log('tapped: ', t)),
    tap(async v => {
        await Promise.resolve();
    })
)

tapped.subscribe();