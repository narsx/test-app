import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mensaje: string | null = "";
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.mensaje= this.router.getCurrentNavigation()?.extras?.state?.['example']
    Keyboard.show()
    
  }
  onBlur(){}
}
