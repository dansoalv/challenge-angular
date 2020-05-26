import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
  totalInstructors;
  size = 10;
  page = 1;
  totalPages;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`https://api.siclo.com/api/v2/plus/instructors/?page=${this.page}&page_size=${this.size}`).subscribe(data => {
      this.totalInstructors = data.data.results;
      this.totalPages = data.data.total_pages;
    });
  }

  getInstructors(): any {
    this.totalInstructors =  null;
    this.page = this.page <= this.totalPages ? this.page += 1 : this.page;
    this.http.get<any>(`https://api.siclo.com/api/v2/plus/instructors/?page=${this.page}&page_size=${this.size}`).subscribe(data => {
      this.totalInstructors = data.data.results;
    });
  }

}
