import { useEffect, useState } from 'react';
import '../App.css'
import Menu from '../assets/components/Menu'
import Child from '../assets/components/Child'
import Child2 from '../assets/components/Child2';
import HelloUser from '../assets/components/HelloUser';
import Child3 from '../assets/components/Child3';
import Child4 from '../assets/components/Child4';
//import Child5 from '../assets/components/Child5';
import axios from "axios";
import HeaderComponent from '../components/HeaderComponent';


  function Test() {
    
    const saySomething = () =>{
    console.log("something");
  }

  const [number, setNumber] = useState(1);

    const addOne = () =>{
      setNumber(number + 1);
      console.log(number);
    };

  const [myText, setMyText] = useState("Tu Nombre");
  const [myValue, setMyValue] = useState("fasffsd");

  const handleInput = (e) =>{
    const upperValue = e.target.value.toUpperCase();
    console.log(upperValue);
    setMyValue(upperValue);

  };

  const condition = true;

  const movies = ["Lord of the Rings", "Star Wars", "Dune"];
  const HTMLmovies = movies.map((movie, index)=>{
    return <p key={movie}>{index + 1}+{movie}</p>
  });

  const animals = [{
    id: 1,
    name: "MoggerCat",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVUxurUM2SGCwtbTmhhgZncpGzjahnE3ryHobji9wrA&s=10"
  },{
    id: 2,
    name: "dog",
    img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjVueHZqeG85bjE1dDJiajA1MGd3b3Zhb25rY2I3ZWtseDZ1cjh4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ESoyoehd6lBGVeAZ7t/giphy.gif"
  },{
    id: 3,
    name: "Mordecai",
    img: "https://i.pinimg.com/originals/72/a4/fe/72a4fef8edd9deae8f1556b451c70195.jpg"
  }]

  const HTMLAnimals = animals.map(animal =>{
    return(
      <div key={animal.id}>
        <h2>{animal.name}</h2>
        <img src={animal.img} alt="" width="200px" />

      </div>
    );
  });

  const text = "variable desde el padre";
  const person ={
    sex: "hombre",
    age: 30
  }

    const [displayName, SetDisplayName] = useState("");

    const login = (name) =>{
      SetDisplayName(name);
    };
    
    const [showChild, setShowChild] = useState(true);

      const [users, setUsers] = useState([]);
      const getUsers = async () =>{
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      //const data = await response.json();
      console.log(response);
      setUsers(response.data);
      }

      useEffect(()=>{
        getUsers();
      },[])
    
      const HTMLUsers = users.map((user) =>{
        return(
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        )
      })

        const [user, setUser] = useState({
          username: "",
          password: ""
        })
      const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("user")
        console.log("El formulario se ha enviado");

      }
      const handleUsernameInput = (e)=>{
        setUser({...user, username: e.target.value})
      }
      const handlePasswordInput = (e)=>{
        setUser({...user, password: e.target.value})
      }
      



  return (
    <>
    <HeaderComponent></HeaderComponent>
    <div>
      <Menu></Menu>
      <h1>Pulsador de Patata:</h1>
    <h2 onClick={()=>{
      console.log("patata")
    }}>Te doy patatas</h2>
    <br />
    <h1>Contador:</h1>
    <h2 onClick={addOne}>Number: {number}</h2>
    <br />
    <h1>Input de Texto:</h1>
    <input type="text" placeholder={myText} value={myValue} onChange={handleInput}/>
    <h2>Resultado:{myValue}</h2>
    <br />
    <h1>Renderizado condicional</h1>

    {condition ? (<h2>La condicion se cumple</h2>

    ) : (
      <h2>La condicion no se cumple</h2>
    )}
    <br />
    <div>
        <h1>Renderizado de Listas</h1>
        <br />
        {HTMLmovies}
        <br />
        {HTMLAnimals}
      </div>
      <br />
      <div>
        <h1>Props | comunicacion entre componentes Padre-Hijo</h1>
        <Child msg={text} person={person}></Child>
      </div>
    </div>
    <br />
    <div class="dark">
      <h1>clasName -htmlFor -select defaultValue</h1>
      <form>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username" placeholder='Usuario'/>

        <br />
        <select>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
        </select>
      </form>
    </div>
    <br />
    <div>
      <h1>Props \ Comunicacion hijo</h1>

      <h2>Hola {displayName}</h2>

      <Child2 handleLogin={login}></Child2>
    </div>
    <div>
      <h1>State up | comunicacion entre hermanos</h1>
      <h2>Hola {displayName}</h2>
      <HelloUser userName={displayName}></HelloUser>

      <Child2 handleLogin={login} userName={displayName}></Child2>
    </div>
    <br />
    <div>
      <h1>useEffect() | Ciclo de vida de los componentes</h1>

      <button onClick={() => setShowChild(!showChild)}>Toggle</button>

      {showChild && <Child4></Child4>}
    </div>
    <br />
    <div>
      <h1>fetch() | Llamada a una API</h1>

      <section>{HTMLUsers}</section>
    </div>
    <div>
      <h1>Formularios</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Usuaio:</label>
          <input type="text"
                id = "username"
                onChange={handleUsernameInput} value={user.username} />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input type="password"
                id = "password"
                onChange={handlePasswordInput}value={user.password}/>
        </fieldset>
        <button>Enviar</button>
      </form>
      <button onClick={()=> setUser({username:"", password:""})}>Logout</button>
    </div>
    </>
  );
};

export default Test
