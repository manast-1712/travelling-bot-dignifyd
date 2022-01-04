import bot_logo_footer from "../assets/images/bot_logo_footer.svg";
import facebook_icon from "../assets/images/facebook_icon.svg";
import insta_icon from "../assets/images/insta_icon.svg";
import twitter_icon from "../assets/images/twitter_icon.svg";

const Footer=()=>{
  return(
    <>
      <footer class=" bg-gray-100 py-10 sm:py-12 bg-darkBlue text-white px-10 625px:px-5 relative bottom-0 w-full">
        <div>
          <div class="flex justify-between items-start">
            <div class="px-4 1330px:w-3/12 w-2/12">
              <img src={bot_logo_footer} alt="logo" className="600px:h-2/6  h-3/6 w-full object-fit justify-self-start"/>
            </div>
            <div class="px-4 ">
              <ul class="list-none footer-links flex flex-col">
                <li class="mb-2">
                  <a href="#" class="text-white text-sm md:text-[1rem]">Company</a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-white text-sm md:text-[1rem]">About</a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-white text-sm md:text-[1rem]">Team</a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-white text-sm md:text-[1rem]">Career</a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-white text-sm md:text-[1rem]">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="px-4 -ml-5">
              <h5 class="font-semibold mb-6 sm:text-center xl:text-left  text-sm md:text-[1rem] mx-auto">Stay connected</h5>
              <div class="flex sm:justify-center xl:justify-start">
                <a href="" class="w-10 h-10 border border-2 border-gray-400 flex justify-center items-center rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-red-700 hover:border-blue-600">
                  <img src={insta_icon} alt="smi" className="rounded-full  900px:h-12 900px:w-12 428px:h-10 428px:w-10"/>
                </a>
                <a href="" class="w-10 h-10 border border-2 border-gray-400 flex justify-center items-center rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                  <img src={facebook_icon} alt="smi" className="rounded-full  900px:h-12 900px:w-12 428px:h-10 428px:w-10"/>
                </a>
                <a href="" class="w-10 h-10 border border-2 border-gray-400 flex justify-center items-center rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-600">
                  <img src={twitter_icon} alt="smi" className="rounded-full  900px:h-12 900px:w-12 428px:h-10 428px:w-10"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
