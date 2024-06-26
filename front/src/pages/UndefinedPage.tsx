import { Link } from "react-router-dom";

export default function UndefinedPage() {
    return (
        <>
            <center>
                <h1 style={{ margin: "20px", fontSize: "90px" }}>404</h1>
                <p style={{marginBottom: '40px',fontSize: "30px" }}>
                    The page not finded. Please check the link.
                </p>
                <Link
                    style={{
                        fontSize: "24px",
                        border: "3px solid #000",
                        padding: "10px",
                        borderRadius: "20px",
                    }}  
                    to="/"
                >
                    Return to Home
                </Link>
            </center>
        </>
    );
}
