import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector:"app-recipe-list",
    templateUrl:"./recipe-list.component.html"
})

export class RecipeListComponent{
    
    
    recipes:Recipe[] = [
        new Recipe('Le Welsh de batard', 'c\'est pas pour les pd !', 'https://www.cookingandcakes.fr/wp-content/uploads/2019/06/welsh-cidre.jpg'),
        new Recipe('L\'Carbonatte', 'c\'est pas vegan ça !', 'https://img.cuisineaz.com/660x660/2013/12/20/i16046-recette-de-carbonnade-flamande-facile.jpeg'),
        new Recipe('Chicon gratin', 'bah ché des chicon qu\'on fait au gratin !', 'https://www.supermarche-match.lu/uploads/recipes/images/_header/Chicons-gratin.jpg')
    ];



};

