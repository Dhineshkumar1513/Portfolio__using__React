// import Contact from "./Contact";
  import { Link } from "react-router-dom";
function Header() { 
    return (
      <div className="m-1 p-0">
        <div className="bg-black p-4">
          <h1 className="text-white text-4xl font-bold ">Dhineshkumar</h1>
          <p className="text-white font-bold text-2xl mt-3 mb-3">Web Developer</p>
          <Link to={'/contact'} className="border-1 border-black px-2 py-1  text-blue-800 font-bold bg-orange-500" 
          href="./Contact">Contact</Link>
        </div>
        <div className="mt-2">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, vel
            accusantium commodi iste atque repudiandae similique incidunt ipsa rem
            inventore. Dolores tempore placeat necessitatibus. Suscipit aspernatur
            voluptates accusamus non deleniti consequuntur, harum ex ipsa magnam
            eaque est nobis error nulla officiis repudiandae architecto adipisci
            cumque blanditiis tenetur praesentium pariatur maxime inventore.
            Placeat doloremque, cumque quidem fugiat quod molestias ab tempora
            fugit quia! Expedita consequuntur iure velit perferendis debitis
            recusandae quasi ipsum ducimus officia accusantium placeat, mollitia
            quas ad! Quam corporis consectetur odio rem repellendus, ipsa aut quis
            impedit explicabo esse fugiat recusandae fugit distinctio vel! Unde
            culpa illum obcaecati nulla.
          </p>
        </div>
        <div className="md:flex gap-5 mt-3 flex-row">
          <div className="bg-[#6D6DEE] p-3 rounded-lg mb-3"> 
              <h1 className="text-2xl font-bold">My Interests</h1>
              <ul>
                  <li>WebDevelopment</li>
                  <li>Reading</li>
                  <li>Photography</li>
              </ul>
          </div>
          <div className="bg-[#FF5619] p-3 rounded-lg">
              <h3 className="font-bold text-xl">My Projects</h3>
              <h2 className="text-2xl font-bold">Amazon E-commerce Clone</h2>
              <ul>
                  <li>I completed Amazon E-commerce Clone With React JS(Frontend App)</li>
              </ul>
  <h2 className="text-2xl font-bold">Travel Website</h2>
  <ul>
      <li>completed a travel website is going to help many people to take a trip with them
  
  </li>
      </ul>
      </div>
          </div>
          <div className="bg-black mt-2 text-white p-2">
            <div className="flex gap-1"> 
            <p>Social Media :</p>
              <a href="https://www.instagram.com/dhinesh.dk.15/"
              className="text-[#FF5619] hover:text-[#6D6DEE]">Instagram</a> ,
              <a href="https://www.linkedin.com/in/kannan-dhinesh-ba7b972b3/"
              className="text-[#FF5619] hover:text-[#6D6DEE]">Linkedin</a>
            </div>
           
              <p>@Dhineshkumar</p>
          </div>
       
      </div>
    );
  }
  
  export default Header;
  