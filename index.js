function addToList(){
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${$(this).find('#shopping-list-entry').val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
    });
}

$(addToList);

function toggleCheck(){
    $('ul').on('click', '.shopping-item-toggle', function(event){
        event.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

$(toggleCheck);

function deleteItem(){
    $('ul').on('click', '.shopping-item-delete', function(event){
        event.preventDefault();
        $(this).closest('li').remove();
    });
}

$(deleteItem);