import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  tdatas: any;
  constructor() { }

  ngOnInit(): void {
    this.tdatas = [
      {
        iconName: 'thumb_up',
        heading: 'Greater Profits',
        info: 'With industry leading leverage options, you risk less of your own money and get to realize more of the profits.'
      },
      {
        iconName: 'thumb_up',
        heading: 'Housing Shortage, Solved',
        info: 'The only way to solve a housing shortage is to bring on new inventory. With products designed specifically for builders and investors, you can do just that.'
      },
      {
        iconName: 'thumb_up',
        heading: 'Relationships > Deals',
        info: 'Deals pay the bills, but relationships solidify careers. By placing an emphasis on the relationship, more deals get done.'
      }
    ]
  }

}
