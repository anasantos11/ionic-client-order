import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {CustomerDTO} from "../../models/customer.dto";
import {CustomerService} from "../../services/domain/customer.service";

@Component({
  selector: 'page-home',
  templateUrl: 'customer.html'
})
export class HomePage {

  customers: CustomerDTO[];
  queriedCustomers: any[];
  showSearched: boolean = false;
  query: string;

  constructor(
    public customerService: CustomerService,
    public modalCtrl: ModalController,
    public navCtrl: NavController) {
  }

  // noinspection JSUnusedGlobalSymbols
  ionViewWillEnter(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.findAll()
      .subscribe(response => {
        this.customers = this.rmWhiteSpacesCustomerArr(response);
      })
  }

  onInputSearchQuery(): void {
    if (this.query !== "") {
      this.customerService.findByQuery(this.query)
        .subscribe(response => {
          this.queriedCustomers = this.rmWhiteSpacesCustomerArr(response);
          this.showSearched = true;
        })

    } else {
      this.showSearched = false;
    }
  }

  showDetails(customer: any[]): void {
    let detailsModal = this.modalCtrl.create('CustomerDetailsPage', customer);

    detailsModal.present();
  }

  rmWhiteSpaceCustomer(customerArg: CustomerDTO): any[] {
    let customer = Object.values(customerArg).map(attr => {
      return (typeof attr === "string") ? attr.replace(/\s/g, "") : attr;
    });

    return customer;
  }

  rmWhiteSpacesCustomerArr(customersArg: any[]): any[] {
    let customers = customersArg.map(customer => {
      return this.rmWhiteSpaceCustomer(customer);
    });

    return customers;
  }
}
