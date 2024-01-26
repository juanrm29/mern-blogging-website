import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";

const UserAuthForm = ({ type }) => {
    return (
       <AnimationWrapper keyValue={type}>
       <section className="flex items-center justify-center h-cover">
            <form className="w-[80%] max-w-[400px]">
                <h1 className="mb-24 text-4xl text-center capitalize font-gelasio">
                    {type == "sign-in" ? "Welcome back" : "Join us today"}
                </h1>

                {
                    type != "sign-in" ? 
                    <InputBox
                        name="fullname"
                        type="text"
                        placeholder="Full Name"
                        icon="fi-rr-user"
                    />
                    : "" 
                }

                    <InputBox
                        name="email"
                        type="email"
                        placeholder="Email"
                        icon="fi-rr-envelope"
                    />  
                    
                    <InputBox
                        name="password"
                        type="password"
                        placeholder="password"
                        icon="fi-rr-lock"
                    />   

                    <button
                        className="btn-dark center mt-14"
                    >
                        { type.replace("-", " ") }
                    </button>
                    
                    <div className="relative flex items-center w-full gap-2 my-10 font-bold text-black uppercase opacity-10">
                        <hr className="w-1/2 border-black"/>
                        <p>or</p>
                        <hr className="w-1/2 border-black"/>
                    </div>

                    <button className="flex items-center justify-center gap-4 btn-dark w-[90%] center">
                        <img src={googleIcon} className="w-5"/>
                        continue with google
                    </button>

                    {
                        type == "sign-in" ?
                        <p className="mt-6 text-xl text-center text-dark-grey">
                            Don't have an account ?
                            <Link to="/signup" className="ml-1 text-xl text-black underline" >
                            Join us today
                            </Link>
                        </p>
                        :
                        <p className="mt-6 text-xl text-center text-dark-grey">
                        Already a member ?
                        <Link to="/signin" className="ml-1 text-xl text-black underline" >
                            Sign in here.
                        </Link>
                    </p>



                    }
                    
            </form>
       </section>
       </AnimationWrapper>
    )
}

export default UserAuthForm;