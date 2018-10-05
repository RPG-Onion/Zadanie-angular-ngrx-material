import {Component, OnInit}        from '@angular/core';
import {Joke}                     from '../../Models/joke.model';
import {select, Store}            from '@ngrx/store';
import {IJokesState}              from '../../Store/reducers/joke.reducer';
import {getJokes, getJokesSorted} from '../../Store/selectors/jokes.selectors';
import {JokesLoad}                from '../../Store/actions/joke.actions';
import {MatDialog, Sort}          from '@angular/material';
import {PunchlineDialogComponent} from '../punchline-dialog/punchline-dialog.component';

@Component({
  selector   : 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls  : ['./jokes-list.component.sass']
})
export class JokesListComponent implements OnInit {
  public Jokes: Joke[];

  public tableCollumns: string[];

  constructor(private store: Store<IJokesState>, public dialog: MatDialog) {
    this.tableCollumns = ['id', 'type', 'setup'];
  }

  ngOnInit() {
    this.store.pipe<Joke[]>(select(getJokes)).subscribe(jokes => this.Jokes = jokes);
    this.store.dispatch(new JokesLoad());
  }

  sortList(newSort: Sort) {
    this.store.pipe<Joke[]>(select(getJokesSorted, newSort)).subscribe(jokes => this.Jokes = jokes);
  }

  BaDumTss(joke: Joke): void {
    this.dialog.open(PunchlineDialogComponent, {
      width   : '320px',
      position: {
        top: '15%'
      },
      data    : joke.punchline
    });
  }
}
