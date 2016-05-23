// put your javascript code here
var categories_template, animals_template, animal_template;
var cur_catagory = animals_data.category[0];
var cur_animal = cur_catagory.animals[0];

function render(template, data) {
    var html = template(data);
    $("#content").html(html);
}

$(document).ready(function() {
    var source = $('#categories-template').html();
    categories_template = Handlebars.compile(source);
    source = $('#animals-template').html();
    animals_template = Handlebars.compile(source);
    source = $('#animal-template').html();
    animal_template = Handlebars.compile(source);
    
    $('#categories-tab').click(function() {
        render(categories_template, animals_data);
        $('.nav-tabs .active').removeClass('active');
        $('#categories-tab').addClass('active');
        
        $(".category-thumbnail").click(function() {
            var index = $(this).data("id");
            cur_catagory = animals_data.category[index];
            render(animals_template, cur_catagory);

            $('.animal-thumbnail').click(function() {
                var index = $(this).data("id");
                cur_animal = cur_catagory.animals[index];
                render(animal_template, cur_animal);
            });
        });
    });
    
    $('#animals-tab').click(function() {
        render(animals_template, cur_catagory);
        $('.nav-tabs .active').removeClass('active');
        $('#animals-tabs').addClass('active');

        $('.animal-thumbnail').click(function() {
            var index = $(this).data("id");
            cur_animal = cur_catagory.animals[index];
            render(animal_template, cur_animal);
        });
    });
    
    $('#categories-tab').click();
});