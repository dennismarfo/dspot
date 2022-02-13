import {getProviders, signIn} from "next-auth/react";

function Login({ providers }) {
    return (
        <div>
            <img className="w-52 mb-5" src="http://links.papareact.com/9xl" alt=""/>

            {Object.values(providers).map((provider) => (
                <div>
                    <button>Login with {provider.name}</button>
                </div>
            ))}
        </div>
    );
}


export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}