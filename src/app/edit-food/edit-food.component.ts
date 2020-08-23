import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Food } from '../food';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css'],
})
export class EditFoodComponent implements OnInit {
  food = new Food();

  constructor(
    private _service: NgserviceService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = parseInt(this._activatedRouter.snapshot.paramMap.get('id'));

    this._service.fetchFoodByIdFromServer(id).subscribe(
      (data) => {
        console.log('Busca por id bem sucedida');
        this.food = data;
      },
      (error) => console.log('Error ao buscar por id')
    );
  }

  updateFoodFormSubmit() {
    this._service.updateFoodByIdFromServer(this.food.id, this.food).subscribe(
      (data) => {
        console.log('alimento atualizado');
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
