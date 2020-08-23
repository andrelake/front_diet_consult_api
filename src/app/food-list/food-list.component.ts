import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { Food } from '../food';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  _foodList: Food[];

  constructor(private _service: NgserviceService, private _router: Router) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
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

  goToUpdateFood(id: number) {
    console.log('id: ' + id);
    this._router.navigate(['/update', id]);
  }

  deleteFoodById(id: number) {
    console.log('id: ' + id);
    this._service.deleteFoodByIdFromServer(id).subscribe(
      (data) => {
        this.getAllData();
        console.log('Alimento deletado com sucesso');
        // this._router.navigate(['list']);
      },
      (error) => console.log('Erro ao deletar produto')
    );
  }
}
