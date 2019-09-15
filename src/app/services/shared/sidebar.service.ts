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
      ]
    },
  ]

  constructor() { }
}
