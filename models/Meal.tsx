export class Meal {
    public id: string;
    public categoryIds: Array<string>;
    public isVegetarian: boolean;
    public imageUrl: string;
    public title: string;
    public ingredients: Array<String>;
    public steps: Array<String>;
    public duration: number;
    public complexity: string;
    public affordability: string;
    public isGlutenFree: boolean;
    public isVegan: boolean;
    public isLactoseFree: boolean;

    constructor(
        id: string,
        categoryIds: Array<string>,
        title: string,
        affordability: string,
        complexity: string,
        imageUrl: string,
        duration: number,
        ingredients: Array<String>,
        steps: Array<String>,
        isGlutenFree: boolean,
        isVegan: boolean,
        isVegetarian: boolean,
        isLactoseFree: boolean,
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.steps = steps;
        this.duration = duration;
        this.complexity = complexity;
        this.affordability = affordability;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}
