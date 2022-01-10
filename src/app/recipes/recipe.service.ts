import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Chyba bataty',
      'Bataty Bataty Bataty Bataty Bataty',
      'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
      [
        new Ingredient('bataty', 5),
        new Ingredient('cytryna', 1),
      ]),
    new Recipe(
      'Burgerek',
      'Burgerek Burgerek BurgerekBurgerek',
      'https://d1e3z2jco40k3v.cloudfront.net/-/media/kamispl-2016/franks-pl/recipes_img/2000x1125/big_0003_pikantny_teksanski_burger.png?rev=f2980b5e47d3472da0142bc30113c968&vd=20200704T053827Z&hash=42F58857DE48407DFBF083BA2EFE70BA',
      [
        new Ingredient('mięcho', 1),
        new Ingredient('bułka', 1),
      ]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
