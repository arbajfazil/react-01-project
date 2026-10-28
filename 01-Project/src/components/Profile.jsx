import "./Profile.css"
function Profile({name,role}){

    return(
        <div className="profile-card">
            <h1>{name}</h1>
            <p>{role}</p>
            <button>View Profile</button>
        </div>
    )
}
export default Profile;