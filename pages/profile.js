import LogoutBtn from "components/Buttons/LogoutBtn";

export default function Profile({ user }) {
  return (
    <div>
      hi {user.email}
      <LogoutBtn />
    </div>
  )
}

