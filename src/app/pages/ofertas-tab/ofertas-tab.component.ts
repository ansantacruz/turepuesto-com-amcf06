import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-ofertas-tab',
  templateUrl: './ofertas-tab.component.html',
  styleUrls: ['./ofertas-tab.component.scss'],
})
export class OfertasTabComponent implements OnInit {

  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly router: Router,
    private loadingCtrl: LoadingController
    ) { }

  async ngOnInit() {


  }

  async pasarVendedor(): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento ',
      duration: 1500,
    });
    loading.present();
    await this.authServiceService.login('VENDEDOR');
    this.router.navigate(['tabs/compras']);
  }
}
