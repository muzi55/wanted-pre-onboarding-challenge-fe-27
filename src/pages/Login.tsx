import TextField from '../components/textfield/TextField'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="">email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input type="password" name="" id="" />
        </div>
        <TextField
          label="라벨"
          htmlFor="email"
          value="asd"
          onChange={(e) => console.log(e.target.value)}
          placeholder="email"
          type="email"
          name="email"
          id="email"
          //   errorMessage="에러가 발생하였습니다."
        />
      </form>
    </div>
  )
}

export default Login
