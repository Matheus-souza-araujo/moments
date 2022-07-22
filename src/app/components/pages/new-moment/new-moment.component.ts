import { Component, OnInit } from '@angular/core';
import { IMoment } from 'src/app/interfaces/Moment';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss'],
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar!';

  constructor() {}

  ngOnInit(): void {}

  async createHandler(moment: IMoment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }
  }
}
