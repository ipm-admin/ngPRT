import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
faqs = [
  {
    q: 'asdf',
    a: `While pesticides are invaluable tools for agriculture, pesticide use presents risks that must be carefully managed. The Pesticide Risk Tool is a user-friendly tool to evaluate pesticide risks using the best available science. It helps inform decision - making for growers and crop advisors by providing a visual snapshot of potential risks.            The pesticiderisk.org team includes qualified scientists and its risk indices have undergone independent scientific reviews.`
  },
  {
    q: 'asfwfa ',
    a: 'ovbe'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
