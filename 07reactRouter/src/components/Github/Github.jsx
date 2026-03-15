import {useLoaderData} from "react-router-dom";

function Github() {
    const data=useLoaderData();

    // const [data,setData]=useState({});

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/johannpereira07")
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data));
    // },[])

  return (
 
        <div className="flex flex-col mx-auto items-center bg-amber-100 text-3xl text-center max-w-lg p-3 my-2 rounded-2xl">Github Followers : {data?.followers}
                    <img className="my-2" width="200" src={data?.avatar_url}/>

        </div>
   
  )
}

export default Github

export const githubDataLoader= async ()=>{
        const res= await fetch("https://api.github.com/users/johannpereira07");
        const data=await res.json();
        return data;
       }