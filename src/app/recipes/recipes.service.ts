import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{

  recipeSelected=new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('meat',1),
      new Ingredient('french fires',10)
    ]
    ),
    new Recipe('Another Test Recipe',
     'This is simply a test',
     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [
      new Ingredient('noodle',12),
      new Ingredient('bread',13)
     ])
  ];

  getRecipe(){
    return this.recipes.slice()
  }

  constructor(private slService:ShoppingListService){

  }

  addToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
