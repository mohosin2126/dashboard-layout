import Sidebar from "./sidebar/index.jsx";
import Header from "./header/index.jsx";
import {useState} from "react";

export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>
                <div className="flex h-screen bg-gray-200 font-roboto">
                    <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>

                    <div className="flex-1 flex flex-col overflow-hidden">
                        <Header setIsOpen={setIsOpen} isOpen={isOpen}/>

                        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                            <div className="container mx-auto px-6 py-8">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}