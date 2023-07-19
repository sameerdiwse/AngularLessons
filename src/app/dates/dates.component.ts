import { Component } from '@angular/core';

@Component({
  selector: 'app-dates',
  template: '{{Course.age}} <br> <br> {{Course.date}}<br> {{Course.text | summary}} <br>'
})
export class DatesComponent {
Course={
  text : 'dsfadfkj dj df kldjfl jklsdjf jslkjf iuioure wieurw lkjwe lkwje klj ajkl lkfj ld a dsf dfsf lkj kjdf kjlkdf',
  age : 20,
  date: 23-3-2020
}
}
