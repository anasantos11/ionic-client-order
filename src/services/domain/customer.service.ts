import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {CustomerDTO} from "../../models/customer.dto";
import {API_CONFIG} from "../../config/api.config";

@Injectable()
export class CustomerService {

  public headers: HttpHeaders;

  constructor(public http: HttpClient) {
  }

  findAll(): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(`${API_CONFIG.baseUrl}/customers/`);
  }

  findByQuery(query: string): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(`${API_CONFIG.baseUrl}/search?entity=customers&term=` + query);
  }
}
