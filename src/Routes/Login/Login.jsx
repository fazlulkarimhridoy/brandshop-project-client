import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { googleLogin, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    

    // handle google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                swal("Successfully logged in with google", "You are logged in using google sign in method!", "success");
                navigate(location?.state ? location.state : '/')
            })
    }


    // handle register
    const handleLogin = e => {
        e.preventDefault();
        setEmail("");
        setPassword("");
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        // createUser
        login(email, password)
            .then(result => {
                const user = result.user;
                if (user.uid) {
                    swal("Successfully Loggedin", "Congratulations you are signed in!", "success");
                }
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <div className="container mx-auto flex justify-center items-center pt-20">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-pink-900 text-gray-100">
                    <div className="mb-4 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                        <p className="text-sm text-gray-400">Sign in to access your account</p>
                    </div>
                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm">Email address</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="enter your email..." className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                            </div>
                            <div>
                                <label className="text-sm">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="enter your password..." className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
                            </div>
                            <p className="px-6 text-sm text-center text-gray-400">Do not have an account yet?
                                <Link to="/register"><button className="hover:underline text-violet-400">Register</button></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;