
  // your code here
  function recipeFactory(title, ingredients, instructions)
  {
    return 
    {
      title: title,
      ingredients: ingredients, //what's wrong here??
      instructions: instructions,
      instructionsHtml: function()
      {
        return '<ol>' + this.instructions.map(function(instr) {return '<li>' + instr + '</li>';}).join('') + '</ol>';
      },
       ingredientsHtml: function() 
      {
        return '<ul>' + this.ingredients.map(function(ingr) {return '<li>' + ingr + '</li>';}).join('') + '</ul>';
      }
    }
  }


// tests

function testRecipeFactory() {  
  var grilledCheese = recipeFactory(
    'grilled cheese',
    ['2 slices bread', 'butter', '1 slice cheese'],
    ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']
  ); 
  if (grilledCheese) {
    // `$` is a shortcut to the jQuery library, which
    // you'll learn about in the next unit.
    // Here, we're using jQuery to update elements in the HTML
    $('.js-recipe-name').text(grilledCheese.title;
    $('.js-ingredients').html(grilledCheese.ingredientsHtml());
    $('.js-steps').html(grilledCheese.instructionsHtml());
  }
}

testRecipeFactory()