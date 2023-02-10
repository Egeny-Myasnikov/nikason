import { useRouteError } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='wrapper'>
            <Header />
            <main className="main">
                <div className="container">
                    <h1>Упс!</h1>
                    <p>Что-то пошло не так...</p>
                    <p>
                        Ошибка: <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default ErrorPage;