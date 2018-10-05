import {Injectable}             from '@angular/core';
import {HttpClient}             from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Joke}                   from '../Models/joke.model';
import {catchError}             from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {

  private readonly ApiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.ApiUrl = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten';
  }

  public getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.ApiUrl)
      .pipe(catchError(error => throwError(error.json())));
  }
}
