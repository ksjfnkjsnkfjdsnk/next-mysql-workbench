// import axios from "axios";

// const getData = async () => {
// try {
//   const results = await axios.get(`http://localhost:3000/api/neon`);

//   return results.data.result
// } catch (error) {
//   console.log(error.message)
// }
// }

// const Home = async () => {

//   const users = await getData();
//   console.log(users)

//   return (
//     <div>

//       <h1> Lista de usuarios leida de Neon </h1>

//       {users.map((item, indx) => (
//         <div key={indx}>
//           <p> Nombre: {item.nombre} </p>
//           <p> Email: {item.email} </p>
//         </div>
//       ))}

//     </div>
//   )
// };

// export default Home

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;