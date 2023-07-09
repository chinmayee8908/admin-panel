import { useNavigate } from "react-router"

const Login: React.FC = () => {
    const navigate = useNavigate()

    const loginHandler = (e:any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get('username')
        const password = formData.get('password')
        console.log(username,password)
        if(username == 'admin' && password == 'admin'){
            navigate('/home')
        }
        // http://ebook.heyaskme.in//user_login_api.php?email=john@gmail.com&password=123456

    }

    return <>
        <div>
            <h1>Android E Book</h1>
            <form onSubmit={loginHandler}>
                <label>
                    <input type="text" placeholder="Username" name="username" id="username" />
                </label>
                <label>
                    <input type="password" name="password" placeholder="Password" id="password" />
                </label>
                <button>Login</button>
            </form>
        </div>
    </>
}

export default Login;