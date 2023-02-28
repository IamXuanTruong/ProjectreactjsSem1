import Footer from "./footer/Footer";
import Header from "./header/Header";

function MasterLayout({ Page }) {
    return (
        <>
            <div >
                <Header />
            </div>
            {Page}
            <Footer />
        </>
    );
}

export default MasterLayout;