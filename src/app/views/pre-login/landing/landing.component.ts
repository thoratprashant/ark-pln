import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  tdatas: any;
  cfDatas: any;
  constructor() { 
    
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY); 
  }

  

 

  ngOnInit(): void {
    this.tdatas = [
      {
        iconName: 'fa-thumbs-o-up',
        heading: 'Greater Profits',
        info: 'The only way to solve a housing shortage is to bring on new inventory. With products designed specifically for builders and investors, you can do just that.'
      },
      {
        iconName: 'fa-check-square-o',
        heading: 'Housing Shortage, Solved',
        info: 'The only way to solve a housing shortage is to bring on new inventory. With products designed specifically for builders and investors, you can do just that.'
      },
      {
        iconName: 'fa-handshake-o',
        heading: 'Relationships > Deals',
        info: 'The only way to solve a housing shortage is to bring on new inventory. With products designed specifically for builders and investors, you can do just that.'
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
        comment: "Working with the team at PLN was delightful. They we re professional, prompt and delivered on every item promised. I would highly recommend them to anyone seeking financing for investment properties.",
        clientImg: "assets/images/arkenea/face-1.jpg",
        clientName: "Brenda Nichols & Isidore Francois",
        clientAdd: "New York City, NY"
      },
      {
        comment: "Working with the team at PLN was delightful. They we re professional, prompt and delivered on every item promised. I would highly recommend them to anyone seeking financing for investment properties.",
        clientImg: "assets/images/arkenea/face-1.jpg",
        clientName: "Christian Covarrubias",
        clientAdd: "Atlanta, GA"
      }
    ]
  }

  ngAfterViewInit(): void {

    const content = document.querySelector('.app-admin-container');
    const scroll$ = fromEvent(content, 'scroll').pipe(map(() => content));

    scroll$.subscribe(element => {
      console.log('32131')
    });
  }

  


}
