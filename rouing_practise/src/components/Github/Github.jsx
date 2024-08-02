
import { useLoaderData } from "react-router-dom"

const Github = () => {
    const data= useLoaderData()
    // const [data, setdata] = useState({})
    // useEffect(() => {
      
    //     fetch('https://api.github.com/users/wcoder547').then((res)=>res.json()).then((res)=>{
    //       setdata(res)
    //       console.log(data)})
    //   }, [data])
      
  return (
    <div className="text-center bg-gray-500 text-3xl font-extrabold py-8">Github-Followers:{data?.followers}
    <img src={data.avatar_url} alt="git image" width={300}  className="px-4" /></div>
  )
}

export default Github

const GithubInfoLoader =async()=>{
  const response = await fetch('https://api.github.com/users/wcoder547')
 return  response.json()
}
export {GithubInfoLoader}