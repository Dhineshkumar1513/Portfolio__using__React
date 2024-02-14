import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <div className="bg-black p-4">
        <h1 className="text-white text-4xl font-bold">Dhineshkumar</h1>
        <p className="text-white font-bold text-2xl mt-3 mb-3">Web Developer</p>
        <Link
          to={"/"}
          className="border-1 border-black px-2 py-1 mt-2 text-blue-800 font-bold bg-orange-500"
        >
          Home
        </Link>
      </div>
      <div className="mt-2 ">
        <form action="" className="">
          <label>Name :</label>
          <input
            placeholder="Name"
            className="border-2 border-black mb-3 ml-7 px-2"
          ></input>
          <br></br>
          <label htmlFor="">Email :</label>
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-black mb-3 ml-8 px-2"
          />
          <br></br>
          <label htmlFor="">Message :</label>
          <input
            type="text"
            placeholder="message"
            className="border-2 border-black mb-3 ml-2 px-2"
          />
          <br />
          <input
            type="submit"
            className="ml-[78px] px-2 border-2 text-black border-black rounded-md hover:bg-gray-600 hover:text-white"
          ></input>
        </form>
      </div>

      <div className="bg-black mt-2 text-white p-2">
        <div className="flex gap-1">
          <p>Social Media :</p>
          <a
            href="https://www.instagram.com/dhinesh.dk.15/"
            className="text-[#6D6DEE] hover:text-[#FF5619]"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/kannan-dhinesh-ba7b972b3/"
            className="text-[#6D6DEE] hover:text-[#FF5619]"
          >
            Linkedin
          </a>
        </div>

        <p>@Dhineshkumar</p>
      </div>
    </div>
  );
}

export default Contact;
