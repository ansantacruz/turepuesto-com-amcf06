import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras-tab',
  templateUrl: './compras-tab.component.html',
  styleUrls: ['./compras-tab.component.scss'],
})
export class ComprasTabComponent implements OnInit {

  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly router: Router
  ) { }

  ngOnInit() {}

  async pasarComprador(): Promise<void> {
    await this.authServiceService.login('COMPRADOR');
    this.router.navigate(['tabs/ofertas']);
  }

}
