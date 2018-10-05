import {Component, Inject}             from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-punchline-dialog',
  template: `
    <p>{{punchline}}</p>
  `
})
export class PunchlineDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PunchlineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public punchline: string) {}
}
