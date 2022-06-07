import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {


  constructor(public router:Router) { }

  ngOnInit(): void {
  }



}
