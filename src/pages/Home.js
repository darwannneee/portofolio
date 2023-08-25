import Navbar from "../components/home/Navbar"
import Jumbotron from "../components/home/Jumbotron"
import Skill from "../components/home/Skill"
import LatestProject from "../components/home/LatestProject"
export default function Home() {
  return (
   <div>
    <Navbar />
    <Jumbotron />
    <Skill />
    <LatestProject />
   </div>
  )
}