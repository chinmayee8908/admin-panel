import { Link } from "react-router-dom";

interface AppProviderProps {
    children: React.ReactNode;
}


const Layout: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <div className=" h-screen w-screen flex">
            <div className="w-[180px] bg-[#FFFFFF]">
                <img src="http://ebook.heyaskme.in/images/mobile2.jpg" className=" object-contain" alt="mobile2" />
                <hr />
                <div className="flex flex-col">
                    <Link to={'/home'}>Dashboard</Link>
                    <hr />
                    <Link to={'/categories'}>Categories</Link>
                    <hr />

                    <Link to={'/author'}>Author</Link>
                    <hr />

                    <Link to={'/books'}>Books</Link>
                    <hr />

                    <Link to={'/comments'}>Comments</Link>
                    <hr />

                    <Link to={'/users'}>Users</Link>
                    <hr />

                    <Link to={'/settings'}>Settings</Link>
                    <hr />

                    <Link to={'/apiurls'}>Api urls</Link>
                    <hr />

                </div>
            </div>
            <div className="bg-[#E7EDEE] w-full pl-11">
                <div className="bg-[#FFFFFF] h-[92px] flex p-10">
                    <div className="flex items-center">Andriod E Book</div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Layout