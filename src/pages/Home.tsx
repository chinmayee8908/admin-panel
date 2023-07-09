import { useContext } from "react";
import AppContext from "../store/AppContext";

const Home: React.FC = () => {
    const { categoryList,bookList,authorList } = useContext(AppContext)

    return <>
       <div>
        <div>{categoryList.length}</div>
        <div>{authorList.length}</div>
        <div>{bookList.length}</div>
       </div>
    </>
}

export default Home;