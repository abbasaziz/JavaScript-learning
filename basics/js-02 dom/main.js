var form = document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//form item delete
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    //add new class
    li.className= 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    
    
    //create delete button element addition
    var dlbutton = document.createElement('button')

    //add classes to del button

    dlbutton.className = 'btn btn-danger btn-sm float-right delete';

    //append text node

    dlbutton.appendChild(document.createTextNode('X'));

    li.appendChild(dlbutton);

    itemList.appendChild(li);
}

//function for removing item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

//function for filtering items

function filterItems(e){
    //convert to lower case
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.getElementsByTagName('li');
    //convert to array 
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display ='block';
        }
        else{
            item.style.display = 'none';
            
        }
    });

}