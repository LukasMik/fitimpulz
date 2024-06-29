import {Link} from "react-router-dom";

const HomePage = () => {

  return (
    <>
        <h1 className={'text-blue-700'}>Hello</h1>
        <Link to={'/about'}>About</Link>
    </>
  )
}

export default HomePage
