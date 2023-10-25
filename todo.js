const form = document.getElementById('toDoFrom');
  let toDo = document.getElementById('toDoInput');
  let ul = document.querySelector('ul');

  const createListItem = (value) => {
    let  li = document.createElement('li');
    
    li.textContent = value;
    li.style['border'] = '1px solid maroon';
    li.style['padding'] = '5px 5px';
    li.style['backgroundColor'] = 'grey';
    li.style['display'] = 'block'
    // li.appendChild(div);
    return li;
  }
  
  const submitHandler = e => {
    e.preventDefault();
    if(toDo.value != null ) {
      let value = toDo.value;
      let liItem = createListItem(value);
      ul.insertBefore(liItem, ul.children[0]);

      toDo.value = '';
      document.getElementById('toDoInput').innerHTML = '';
    }
      
  }
  
  form.addEventListener('submit', submitHandler);