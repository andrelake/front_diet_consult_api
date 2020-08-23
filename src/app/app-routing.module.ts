import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

const routes: Routes = [
  { path: 'list', component: FoodListComponent },
  { path: 'add', component: AddFoodComponent },
  { path: 'update/:id', component: EditFoodComponent },
  { path: 'update', component: EditFoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
