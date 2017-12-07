import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Home',  icon: 'dashboard', class: '' },
    { path: 'cadastro', title: 'Cadastro',  icon:'person_add', class: '' },
    { path: 'login', title: 'Login',  icon:'account_circle', class: '' },
    { path: 'sobre', title: 'Sobre',  icon:'computer', class: '' },
    { path: 'blog', title: 'Blog',  icon:'library_books', class: '' },
    { path: 'contato', title: 'Contato',  icon:'email', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
