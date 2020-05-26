import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
  totalInstructors;
  size = 10;
  pages = [];
  page = 1;
  loading = true;
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.http.get<any>(`https://api.siclo.com/api/v2/plus/instructors/?page=${this.page}&page_size=${this.size}`).subscribe(data => {
      this.totalInstructors = data.data.results;
      for (let i = 1; i <= data.data.total_pages; i++){
        this.pages.push(i);
      }
      setTimeout( () => {
        this.spinner.hide();
        this.loading = false;
      }, 500);
    });
  }

  getInstructors(page: number): any {
    this.loading = true;
    this.spinner.show();
    this.totalInstructors =  null;
    this.http.get<any>(`https://api.siclo.com/api/v2/plus/instructors/?page=${page}&page_size=${this.size}`).subscribe(data => {
      this.totalInstructors = data.data.results;
      setTimeout( () => {
        this.spinner.hide();
        this.loading = false;
      }, 500);
    });
  }

}
