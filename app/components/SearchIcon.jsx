'use client'
import { useState } from "react"
export const InputComponentSearch = ({ placeholder, clasName }) => {
    const [query, setQuery] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [iframeSrc, setIframeSrc] = useState('');

    const searchBible = (e) => {
        e.preventDefault();
        if (query) {
            const url = `https://www.bible.com/es/search/bible?query=${query}`;
            setIframeSrc(url);
            setModalOpen(true);
        } else {

        }
    };

    const closeModal = () => {
        setModalOpen(false);
        setQuery("");
    };

    return (
        <>
            <div>
                <form onSubmit={searchBible}> 
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={clasName}
                        style={
                            {
                                borderRadius: "0.375rem",
                                width: "100%",
                                background: "border-box",
                                padding: "0.5rem 1rem",
                                outline: "none",
                                border: "2px double #4299e1",
                            }

                        }


                    />
                </form>
                {modalOpen && (
                    <div className="modalS">
                        <div className="modal-contentS">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <iframe id="bibleFrame" src={iframeSrc} width="100%" height="500px"></iframe>
                        </div>
                    </div>
                )}

                <style jsx>{`
                  .modalS {
                    display: block;
                    position: fixed;
                    z-index: 25;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgb(0,0,0);
                    background-color: rgba(0,0,0,0.4);
                    padding-top: 60px;
                    
                  }
                  .modal-contentS {
                    background-color: #fefefe;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                  }
                  .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                  }
                  .close:hover,
                  .close:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                  }
                `}</style>
            </div >

        </>

    )
}