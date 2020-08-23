import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { Food } from '../food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  _foodList: Food[];

  constructor(private _service: NgserviceService, private _router: Router) {}

  ngOnInit() {
    this._service.fetchFoodListFromServer().subscribe(
      (data) => {
        this._foodList = data;
        console.log('lista carregada com sucesso');
      },
      (error) => console.log('error ao carregar lista')
    );
  }

  goToAddFood() {
    this._router.navigate(['/add']);
  }
}
