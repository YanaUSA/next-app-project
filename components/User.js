function User({ user }) {
  const { id, name, email } = user;
  return (
    <>
      <h2>{name}</h2>
      <p>email</p>
    </>
  );
}

export default User;
