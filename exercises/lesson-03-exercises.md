# Lesson 03 exercises

## Exercise 03-1
### Create application scaffold

1. Create a new workspace with an application `ng new lesson03-network-communication --routing --style scss`
2. Add a client module with routing to the application `ng g m client --routing`
3. Add an exported client overview component to the client module `ng g c client/clientOverview -m client --export`
4. Add an exported client details component to the client module `ng g c client/clientDetails -m client --export`

## Exercise 03-2
### Setup the `HttpClientModule` and `ClientService`

1. Go to `/src/app/app.module.ts` and add `HttpClientModule` to the `imports` array.
2. Create a client service with `ng g s client`
3. Add an exported client interface to the client module that fits the following data:
```json
// client node example
  {
    "id": 2,
    "picture": "https://robohash.org/idetet.jpg?size=150x150&set=set1",
    "first_name": "Vance",
    "last_name": "Jime",
    "email": "vjime1@deviantart.com",
    "gender": "Male",
    "wallet": "1KQmmY7gDQxjoaVpyqzU6MtNv67bxhrw8T"
}
```

## Exercise 03-3
### Set up routes

1. Setup routes for `AppModule` in `src/app/client/client-routing.module.ts`
2. Setup routes for `ClientModule` in `src/app/app.module.ts`
3. Add a `RouterOutlet` to `src/app/app.component.html`

## Exercise 03-4
### Setup a simple service
1. Clone from GitHub `git clone https://github.com/bvda/lesson03-network-commication-service`
2. Run `npm i` to install all dependencies
3. Run `npm start` to compile and run the service on port `3000`

## Exercise 03-5
### Get list of clients 

1. Go to `/src/app/client/client-overview/client-overview.component.ts` and inject `ClientService`
2. Print out the result in `/src/app/client/client-overview/client-overview.component.html`

Extra: Make a `CourseListItemComponent` in `ClientModule` and pimp it out with your I4GUI skills

## Exercise 03-5
### Setup error handling
1. Add a `catchError` operator<sup>(<a href="https://rxjs.dev/api/operators/catchError">docs</a>)</sup> to the call to `GET /clients` call in `src/app/client.service.ts`
2. Update the url to `/faulty-clients` to test it out. _Hint: It will fail ~50% of the time_

## Exercise 03-6
### Add logging with `HttpInterceptor`

1. Generate an interceptor with `ng g interceptor logging`
2. Add the following content from the Angular examples<sup>(<a href="https://angular.io/guide/example-apps-list#server-communication">docs</a>)</sup> to the `intercept()` method
```typescript
...
const started = Date.now();
let ok: string;

return next.handle(request)
  .pipe(
    tap(
      event => ok = event instanceof HttpResponse ? 'succeeded' : '',
      error => ok = 'failed'
    ),
    finalize(() => {
      const elapsed = Date.now() - started;
      const msg = `${request.method} ${request.urlWithParams} ${ok} in ${elapsed} ms.`;
      console.log(msg)
    }
  )
)
... 
```
3. Setup the interceptor in `src/app/app.module.ts`<sup>(<a href="https://angular.io/guide/http#provide-the-interceptor">docs</a>)</sup>