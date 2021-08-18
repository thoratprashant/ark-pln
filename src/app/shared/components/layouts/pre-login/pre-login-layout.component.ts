import { Component, OnInit, AfterViewInit, ViewChild, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { 
  Router, 
  NavigationEnd, 
  RouteConfigLoadStart, 
  RouteConfigLoadEnd, 
  ResolveStart, 
  ResolveEnd 
} from '@angular/router';
import { Subscription } from "rxjs";
import { ThemeService } from '../../../services/theme.service';
import { LayoutService } from '../../../services/layout.service';
import { filter } from 'rxjs/operators';
import { JwtAuthService } from '../../../services/auth/jwt-auth.service';

@Component({
  selector: 'app-pre-login-layout',
  templateUrl: './pre-login-layout.template.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreLoginLayoutComponent implements OnInit, AfterViewInit {
  public isModuleLoading: Boolean = false;
  private moduleLoaderSub: Subscription;
  private layoutConfSub: Subscription;
  private routerEventSub: Subscription;

  public  scrollConfig = {}
  public layoutConf: any = {};
  public adminContainerClasses: any = {};

  isSticky: boolean = false;

//   @HostListener('window:scroll', ['$event']) onScroll(event){
//     this.pageYoffset = window.pageYOffset;
//     console.log('121212212')
//  }
 

    
  // @HostListener('mousewheel', ['$event']) onWindowsScroll(ev:any) {
  //   this.isSticky = window.pageYOffset >= 250; 
  //   console.log(this.isSticky); 
  // }

  // @HostListener('wheel', ['$event'])
  // onWheelScroll(evento: WheelEvent) {  
  //   console.log('010101')
  // }
  
  constructor(
    private router: Router,
    public themeService: ThemeService,
    private layout: LayoutService,
    private cdr: ChangeDetectorRef,
    private jwtAuth: JwtAuthService

  ) {
    // Check Auth Token is valid
    this.jwtAuth.checkTokenIsValid().subscribe();

    // Close sidenav after route change in mobile
    this.routerEventSub = router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((routeChange: NavigationEnd) => {
      this.layout.adjustLayout({ route: routeChange.url });
      this.scrollToTop();
    });
    
    // Translator init
  }

  ngOnInit() {

    window.addEventListener('scroll', this.scroll, true); 

    // this.layoutConf = this.layout.layoutConf;
    this.layoutConfSub = this.layout.layoutConf$.subscribe((layoutConf) => {
        this.layoutConf = layoutConf;
        // console.log(this.layoutConf);
        
        this.adminContainerClasses = this.updateAdminContainerClasses(this.layoutConf);
        this.cdr.markForCheck();
    });

    // FOR MODULE LOADER FLAG
    this.moduleLoaderSub = this.router.events.subscribe(event => {
      if(event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.isModuleLoading = true;
      }
      if(event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.isModuleLoading = false;
      }
    });
  }

  scroll = (event: any): void => { 
    const number = event.srcElement.scrollTop;

    this.isSticky = number > 100; 

    // if(number < 1000){
    //   console.log('100')
    // } else{
    //   console.log('100 +++')
    // }


    // console.log(event);
    // console.log('I am scrolling ' + number);
  };

  backToTop() {  
    window.scrollTo(0,0); 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.layout.adjustLayout(event);
  }

 
  

  
  ngAfterViewInit() {

  }
  
  scrollToTop() {
    if(document) {
      setTimeout(() => {
        let element;
        if(this.layoutConf.topbarFixed) {
          element = <HTMLElement>document.querySelector('#rightside-content-hold');
        } else {
          element = <HTMLElement>document.querySelector('#content-wrapper');
        }
        element.scrollTop = 0;
      })
    }
  }
  ngOnDestroy() {
    if(this.moduleLoaderSub) {
      this.moduleLoaderSub.unsubscribe();
    }
    if(this.layoutConfSub) {
      this.layoutConfSub.unsubscribe();
    }
    if(this.routerEventSub) {
      this.routerEventSub.unsubscribe();
    }
  }
  closeSidebar() {
    this.layout.publishLayoutChange({
      sidebarStyle: 'closed'
    })
  }

  sidebarMouseenter(e) {
    // console.log(this.layoutConf);
    if(this.layoutConf.sidebarStyle === 'compact') {
        this.layout.publishLayoutChange({sidebarStyle: 'full'}, {transitionClass: true});
    }
  }

  sidebarMouseleave(e) {
    // console.log(this.layoutConf);
    if (
        this.layoutConf.sidebarStyle === 'full' &&
        this.layoutConf.sidebarCompactToggle
    ) {
        this.layout.publishLayoutChange({sidebarStyle: 'compact'}, {transitionClass: true});
    }
  }

  updateAdminContainerClasses(layoutConf) {
    return {
      'navigation-top': layoutConf.navigationPos === 'top',
      'sidebar-full': layoutConf.sidebarStyle === 'full',
      'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
      'compact-toggle-active': layoutConf.sidebarCompactToggle,
      'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
      'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
      'sidebar-closed': layoutConf.sidebarStyle === 'closed',
      'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
    }
  }
  


}