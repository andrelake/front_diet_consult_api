import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Food } from '../food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent implements OnInit {
  food = new Food();

  constructor(private _router: Router, private _service: NgserviceService) {}

  ngOnInit(): void {}

  addFoodFormSubmit() {
    this._service.addFoodToServer(this.food).subscribe(
      (data) => {
        console.log('alimento adicionado');
        this._router.navigate(['list']);
      },
      (error) => {
        console.log('erro ao cadastrar alimento');
      }
    );
  }

  goToList() {
    this._router.navigate(['list']);
  }
}
