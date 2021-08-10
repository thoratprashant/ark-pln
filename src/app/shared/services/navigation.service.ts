import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {}
  iconMenu: IMenuItem[] = [
 
    {
      name: " What We Do ",
      type: "dropDown", 
      icon: "whatshot",
      state: "dashboard",
      sub: [
        { name: "New Construction Loans", state: "default" },
        { name: " Fix & Flip Loans", state: "default" },
        { name: "Community Development Loans", state: "default" },
        { name: "Rental Loans", state: "default" },
        
      ]
    },
    {
      name: " How We Help  ",
      type: "dropDown", 
      icon: "widgets",
      state: "dashboard",
      sub: [
        { name: "High Leverage Loans", state: "default" },
        { name: "  Plan. Build. Grow.", state: "default" },
        { name: "Finance Expertise", state: "default" },         
      ]
    },
    {
      name: " Who We Work With  ",
      type: "dropDown", 
      icon: "people",
      state: "dashboard",
      sub: [
        { name: "Builders", state: "default" },
        { name: " Flippers", state: "default" },
        { name: "Developers", state: "default" },       
        { name: " Investors", state: "default" },
        { name: "Brokers", state: "default" }  
      ]
    },
    {
      name: "Lender Login",
      type: "link", 
      icon: "directions",
      state: "pricing"
    },
    {
      name: " Sign Up ",
      type: "link", 
      icon: "assignment_turned_in",
      state: "pricing"
    },
    
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  
}
