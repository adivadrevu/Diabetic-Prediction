import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-diabetics',
  templateUrl: './diabetics.component.html',
  styleUrls: ['./diabetics.component.scss'],
})
export class diabeticsComponent implements OnInit {
  public glucose: any;
  public insulin: any;
  public BMI: any;
  public Age: any;
  public disableResults : boolean = false;
  public imagePath = '';
  public responseData = '';
  public displayGraphs : boolean = true;
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  getDiabetics(): void {
    const payload: any = {
      glucose: this.glucose,
      insulin: this.insulin,
      BMI: this.BMI,
      Age: this.Age,
    };
    let queryParams = new HttpParams()
      .set('Glucose', this.glucose)
      .set('Insulin', this.insulin)
      .set('BMI', this.BMI)
      .set('Age', this.Age);
    this.http
      .get<any>('http://127.0.0.1:5000/', { params: queryParams })
      .subscribe((response) => {
        if (response) {
          this.responseData = response.output;
          
          this.glucose = null;
          this.insulin = null;
          this.BMI = null;
          this.Age = null;
          this.disableResults = true;
        }
      });
  }
  displayResultsMethod() {

    this.displayGraphs = !this.displayGraphs;
  }
}
