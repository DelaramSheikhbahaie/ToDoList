import './App.css';
import Form from './Form';
import TodoList from './TodoList';
import {useState , useEffect} from 'react';


function App() {
  const[inputText , setInputText] = useState('');
  const[listItems , setListItems ]= useState ([]);
  const[status , setStatus ]= useState ('all');
  const[filter , setFilter ]= useState ([]);

  useEffect( () =>{
    FilterHandler();
  },[listItems , status]);

  useEffect(()=>{
    GetLocatListItems();
  },[]);

  const SaveLocatListItems = () => {
    localStorage.setItem("listItems" , JSON.stringify(listItems));
  }

  const GetLocatListItems = () =>{
    if(localStorage.getItem("listItems") === null){
      localStorage.setItem("listItems" , JSON.stringify([]));
    }else{
      let localItem = JSON.parse(localStorage.getItem("listItems"));
      setListItems(localItem);
    }
  }

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
}
  const SubmitInputHandler = (e) => {
    e.preventDefault();
    if(inputText !== ''){
    setListItems([
      ...listItems , {Text:inputText , completed: false , id: Math.random()}
    ]);
  }
    setInputText('');
  }

  const DeleteHandler = (listId) => {
    setListItems(listItems.filter((li) => li.id !==listId));
      
  }

  const CheckHandler =(listItem) =>{
    setListItems(listItems.map((li) => {
    if(li.id === listItem.id){
      return{
        ...li , completed: !li.completed
      }
      
    }
    return li;
  }));   
  }

  const StatusHandler = (e) =>{
    setStatus(e.target.value);
  }

  const FilterHandler = () =>{
    switch(status){
      case 'completed' : setFilter(listItems.filter(li => li.completed === true));
      break;
      case 'uncompleted' : setFilter(listItems.filter(li => li.completed === false));
      break;
      case 'all' : setFilter(listItems);
      break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">Delaram`s Todo List</h1>
      </header>
      <Form
        
        onType={inputTextHandler}
        onSubmit={SubmitInputHandler}
        inputText = {inputText}
        onChangeStatus ={StatusHandler}
       
        />
        <div className="todo-div">
        {filter.map(listItem =>(
        <TodoList
          key = {listItem.id}
          listItem={listItem}
          onDelete = {DeleteHandler}
          onCheck ={CheckHandler}
        />
        ))} 
        </div>
    </div>
  );
}

export default App;
