import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const URL = "https://hipsum.co/api/?type=hipster-latin&paras=";

const TextGenApp = () => {
    const [text, setText] = useState([]);
    const [paragraphNo, setParagraphNo] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const [paragraphing, setParagraphing] = useState(false);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try{
            const res = await axios.get(URL+paragraphNo);
            setText(res.data);
        } catch (e) {
            setText(["Error Loading Data"]);
        }
        setIsLoading(false);
    }

    //Generate Text
    const generateText = (e) => {
        e.preventDefault();
        fetchData();
    }

    //Handle Select
    const handleSelect = (e) => {
        setParagraphing(e.target.value === "true");
    }

    return (
        <div className="container">
            <h1 
                className="text-primary text-center pb-3 mt-4 border-bottom border-secondary border-2"
            >
                Sample Text Generator
            </h1>
            <form onSubmit={(e) => generateText(e)} className="d-flex flex-wrap gap-4 align-items-end mt-4">
                <div>
                    <label className="form-label" htmlFor="paragraph">Paragraph Number</label>
                    <input className="form-control" type="number" id="paragraph" 
                        value={paragraphNo} onChange={(e) => setParagraphNo(e.target.value)} 
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="select-opt">Paragraphing</label>
                    <select id="select-opt" className="form-select" 
                        aria-label="Paragraphing" value={paragraphing} 
                        onChange={(e) => handleSelect(e)}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Generate</button>
            </form>


            <div className="text-area p-4 my-4 rounded border border-2 border-seondary">
                {
                    !isLoading?
                    <>
                        {
                            paragraphing?
                            <>
                                { 
                                    text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                                }
                            </>:
                            <p>
                                {
                                    text.reduce((current, prev) => current += prev, "")
                                }
                            </p>
                        }
                    </>:
                    <p>Loading ...</p>
                }
            </div>
            <Link to="/" className="my-5 btn btn-outline-primary">Go To Home Page</Link>
        </div>
    )
}

export default TextGenApp;