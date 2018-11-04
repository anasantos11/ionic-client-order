import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { OrderService } from '../../services/domain/order.service';
import { OrderDTO } from '../../models/order.dto';

/**
 * Generated class for the CustomerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-details',
  templateUrl: 'customer-details.html',
})
export class CustomerDetailsPage {

  customer: any[];
  orders: OrderDTO[];
  showNoHasOrders: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public orderService: OrderService) {

    this.customer = this.navParams.data;
    this.loadOrdersByCustomer();
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  loadOrdersByCustomer(): void {
    this.orderService.findAllByCustomer(this.customer[0])
      .subscribe(response => {
        this.orders = response.map(x => {
          x.order_date = new Date(x.order_date);
          return x;
        });
        this.showNoHasOrders = this.orders.length <= 0;
      })
  }


}
