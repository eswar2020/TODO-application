// var h = document.createElement('h1')
// var myValue  = document.createTextNode('MyTodo Application')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);

// var val = 5;
// while (val >= 1) {
//     console.log(val);
//     val--;
    
// }

var ul = document.getElementById('list');
var li;


var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

var removeItems = document.getElementById('removeAll');
removeItems.addEventListener('click',removeall)

function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)
    
    if (item === '') {
        return false;
    } else {
        // create li
        li =document.createElement('li');
        
        // create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        //create label
        var label = document.createElement('label');

        //add these things on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual'; 
        }, 4);

        input.value = '';
        
    }
}
function removeItem() {
    li = ul.children
    // console.log(li);
        for (let index = 0; index < li.length; index++) {
            while (li[index] && li[index].children[0].checked) {
                ul.removeChild(li[index])
                
            }
            
        }
}

function removeall() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
        
        
        
    }
}