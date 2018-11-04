import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {API_CONFIG} from "../../config/api.config";
import { OrderDTO } from "../../models/order.dto";

@Injectable()
export class OrderService {

  public headers: HttpHeaders;

  constructor(public http: HttpClient) {
  }

  findAllByCustomer(customerId: number) : Observable<OrderDTO[]> {
    return this.http.get<OrderDTO[]>(`${API_CONFIG.baseUrl}/customerOrders/` + customerId);
  }
}
