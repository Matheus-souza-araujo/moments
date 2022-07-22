import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMoment } from 'src/app/interfaces/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss'],
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<IMoment>();

  @Input() btnText!: string;

  momentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  submit() {
    if (this.momentForm.invalid) {
      this.momentForm.markAsTouched();
      return;
    }
    console.log('enviou o formulário', this.momentForm.value);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.onSubmit.emit(this.momentForm.value);
  }
}
