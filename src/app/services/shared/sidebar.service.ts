import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu = [
    {
      titulo: "Menu principal",
      icono: "mdi mdi-gauge",
      submenu: [
        { titulo: "Dashboard", url: "/home" },
        { titulo: "Progress", url: "/progress" },
        { titulo: "Gráficas", url: "/graficas1" },
        { titulo: "Promesas", url: "/promesas" },
        { titulo: "RxJs", url: "/rxjs" },
      ]
    },
  ]

  constructor() { }
}
