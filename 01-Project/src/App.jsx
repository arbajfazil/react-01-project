import Profile from "./components/Profile";
import "./index.css"

const users = [
  { id: 1, name: "Arbaj", role: "Frontend Developer" },
  { id: 2, name: "Rahul", role: "MERN Stack Developer" },
  { id: 3, name: "Priya", role: "Full Stack Developer" },
  { id: 4, name: "Aman", role: "UI/UX Designer" },
  { id: 5, name: "Sara", role: "Backend Developer" }
];

function App(){
  return (
    <main className="body">
        <h1>Developer Community</h1>
        <div className="profile-list">
          {users.map((user)=>(
            <Profile 
            key={user.id}
            name={user.name}
            role={user.role}
            />
          ))}
        </div>
    </main>
  )
}
export default App;