import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-ofertas-tab',
  templateUrl: './ofertas-tab.component.html',
  styleUrls: ['./ofertas-tab.component.scss'],
})
export class OfertasTabComponent implements OnInit {

  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly router: Router
    ) { }

  ngOnInit() {}

  async pasarVendedor(): Promise<void> {
    await this.authServiceService.login('VENDEDOR');
    this.router.navigate(['tabs/compras']);
  }
}
