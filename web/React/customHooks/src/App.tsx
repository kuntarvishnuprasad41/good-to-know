import "./App.css";
import { useUsers } from "./hooks/useUser";

function App() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <>Loading..</>;
  }

  if (error) {
    return <>Error: {error}</>;
  }

  return (
    <>
      {users.map((user) => {
        return (
          <div>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default App;
