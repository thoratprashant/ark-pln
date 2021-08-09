import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  tdatas: any;
  cfDatas: any;
  constructor() { }

  ngOnInit(): void {
    this.tdatas = [
      {
        iconName: 'fa-thumbs-o-up',
        heading: 'Greater Profits',
        info: 'With industry leading leverage options, you risk less of your own money and get to realize more of the profits.'
      },
      {
        iconName: 'fa-check-square-o',
        heading: 'Housing Shortage, Solved',
        info: 'The only way to solve a housing shortage is to bring on new inventory. With products designed specifically for builders and investors, you can do just that.'
      },
      {
        iconName: 'fa-handshake-o',
        heading: 'Relationships > Deals',
        info: 'Deals pay the bills, but relationships solidify careers. By placing an emphasis on the relationship, more deals get done.'
      }
    ]
    this.cfDatas = [
      {
        comment: "Working with the team at PLN was delightful. They we re professional, prompt and delivered on every item promised. I would highly recommend them to anyone seeking financing for investment properties.",
        clientImg: "assets/images/arkenea/face-1.jpg",
        clientName: "Christian Covarrubias",
        clientAdd: "Atlanta, GA"
      },
      {
        comment: "What sets PLN apart from other hard money lenders, is their ability to speak to our client’s with us on the telephone, get the correct forms and directions in a timely manner and walk us through what we do not understand.",
        clientImg: "assets/images/arkenea/face-1.jpg",
        clientName: "Brenda Nichols & Isidore Francois",
        clientAdd: "New York City, NY"
      },
      {
        comment: "Working with the team at Baker Collins & Co. was delightful. They were professional, prompt and deli   vered on every item promised. I look forward to working with them in future and would highly recommend them to anyone seeking financing for investment properties.",
        clientImg: "assets/images/arkenea/face-1.jpg",
        clientName: "Christian Covarrubias",
        clientAdd: "Atlanta, GA"
      }
    ]
  }

}
