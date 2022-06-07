import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link as SmothLink } from "react-scroll/modules";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  const handleLink = (elementName) => {
    if (location.pathname === "/") {
      scroller.scrollTo(elementName, {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(elementName, {
          duration: 1500,
          delay: 100,
          smooth: true,
        });
      }, 1);
    }
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 text-black">
        <div className="container px-3 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
            <Link
              className="text-sm headings-font font-bold leading-relaxed text-3xl inline-block mr-4 py-2 whitespace-nowrap uppercase text-brown-500"
              to="/"
            >
              Shark Tank
            </Link>
            <button
              className="absolute right-0 text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GoThreeBars />
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none flex space-x-8">
              <SmothLink
                className="capitalize hover:text-primary font-WorkSans group relative transition cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLink("purchase")}
              >
                purchase
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-black transform transition origin-left scale-x-0 group-hover:scale-x-100"></span>
              </SmothLink>
              <SmothLink
                className="capitalize hover:text-primary font-WorkSans group relative transition cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLink("utility")}
              >
                utility
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-black transform transition origin-left scale-x-0 group-hover:scale-x-100"></span>
              </SmothLink>
              <SmothLink
                className="capitalize hover:text-primary font-WorkSans group relative transition cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLink("roadmap")}
              >
                roadmap
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-black transform transition origin-left scale-x-0 group-hover:scale-x-100"></span>
              </SmothLink>
              <a
                rel="noopener noreferrer"
                className="capitalize hover:text-primary font-WorkSans group relative transition"
                href="https://socekt-game.vercel.app/"
                target="_blank"
              >
                game
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-black transform transition origin-left scale-x-0 group-hover:scale-x-100"></span>
              </a>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li>
                <a href="/" target="_blank" className="transition text-brown-500 hover:text-black">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 21 20"
                    className="text-primary"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.784424" width="20" height="20" rx="10" fill="currentColor"></rect>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.2256 12.2865V11.6134C17.2256 11.5511 17.1655 11.5061 17.1064 11.5232L13.9277 12.4422C13.9105 12.4465 13.8955 12.4561 13.8837 12.469C13.5436 12.8447 13.2544 13.097 13.1775 13.1641C13.1755 13.1659 13.1736 13.1675 13.1719 13.169C12.9744 13.3364 12.7297 13.4277 12.472 13.4277H11.3212V12.2543H12.2358C12.2594 12.2543 12.282 12.2457 12.2992 12.2307L12.4173 12.1223C12.4677 12.0761 12.5278 12.0203 12.5997 11.9483C12.6057 11.9424 12.6117 11.9364 12.6177 11.9304C12.6557 11.8926 12.6963 11.8521 12.7361 11.8077C12.7833 11.7616 12.8295 11.71 12.8724 11.6596C12.9443 11.5823 13.0131 11.5018 13.085 11.417C13.1365 11.3611 13.1837 11.2978 13.2299 11.2345C13.2814 11.1743 13.3319 11.1067 13.3791 11.0423C13.3967 11.0165 13.4153 10.9905 13.4344 10.9639C13.4527 10.9384 13.4713 10.9123 13.4897 10.8856C13.524 10.834 13.5584 10.7793 13.5874 10.7278C13.6776 10.5882 13.7538 10.439 13.8182 10.2898C13.8478 10.2258 13.8714 10.1585 13.8944 10.0931C13.8973 10.0849 13.9001 10.0767 13.903 10.0686C13.9288 9.99239 13.9502 9.92047 13.9663 9.84424C14.005 9.66496 14.0136 9.48675 13.9964 9.30857C13.9921 9.25275 13.9878 9.19799 13.9749 9.14645V9.13788C13.9706 9.10138 13.9621 9.06058 13.9502 9.02301C13.9116 8.84909 13.8515 8.67518 13.7753 8.50449C13.7495 8.44115 13.7194 8.37674 13.6905 8.31769C13.6218 8.18996 13.5498 8.0622 13.4682 7.93874C13.4519 7.91267 13.4338 7.88626 13.4157 7.85989C13.4018 7.83957 13.3879 7.81928 13.3748 7.79919C13.3233 7.71963 13.2653 7.64293 13.209 7.56851C13.1962 7.55154 13.1834 7.53468 13.1709 7.51793C13.1375 7.47414 13.101 7.43035 13.0642 7.38626C13.0442 7.36226 13.0241 7.33817 13.0045 7.31395C12.9486 7.24631 12.8939 7.1819 12.8381 7.11858C12.6384 6.89314 12.4291 6.68915 12.2423 6.51526C12.2079 6.48089 12.1703 6.44655 12.1317 6.41326C11.9868 6.28123 11.8547 6.16636 11.7442 6.07724C11.7107 6.05155 11.6808 6.02624 11.6529 6.00269C11.6342 5.98689 11.6165 5.97188 11.5992 5.95808C11.5655 5.93293 11.5362 5.91063 11.5117 5.89194C11.4964 5.88032 11.483 5.8701 11.4715 5.86146C11.4629 5.85503 11.4532 5.85074 11.4436 5.84751L11.3212 5.81317V4.79977C11.3212 4.63444 11.2546 4.4863 11.1483 4.37786C11.0421 4.26943 10.8939 4.20288 10.7307 4.20288C10.4044 4.20288 10.1403 4.47019 10.1403 4.79977V5.48252L10.0791 5.46534L9.91271 5.41811L9.76137 5.37624C9.76091 5.37624 9.76046 5.37606 9.75994 5.37584C9.7592 5.37554 9.75832 5.37517 9.75707 5.37517H9.75384L8.60517 5.06384C8.55471 5.04989 8.51178 5.10464 8.53755 5.1508L8.7211 5.49004C8.73152 5.51607 8.7447 5.5421 8.75825 5.56885C8.76705 5.58622 8.776 5.60389 8.78444 5.62207C8.81451 5.68221 8.84456 5.74553 8.87356 5.80887C8.89931 5.86469 8.92509 5.91944 8.95513 5.97956C8.96768 6.00761 8.98046 6.036 8.99343 6.06479C9.0415 6.17153 9.09205 6.28377 9.14193 6.40469L9.14235 6.40566C9.18514 6.50732 9.22794 6.60899 9.26539 6.71493C9.36844 6.98223 9.46613 7.26779 9.55095 7.56087C9.57203 7.62639 9.5889 7.68982 9.60599 7.75409C9.61325 7.78142 9.62056 7.8089 9.62825 7.83676L9.64004 7.88829C9.67441 8.02463 9.70446 8.15989 9.72593 8.29623C9.74312 8.38962 9.75921 8.47872 9.7678 8.5689L9.7678 8.56892C9.78069 8.6709 9.79357 8.77287 9.79785 8.87485C9.80644 8.96826 9.81073 9.06594 9.81073 9.15933C9.81073 9.39766 9.78928 9.6274 9.73882 9.84424C9.73569 9.8558 9.73255 9.86749 9.72939 9.87928C9.71523 9.93215 9.70054 9.98697 9.68298 10.0396C9.66712 10.096 9.64656 10.1523 9.62522 10.2108C9.61768 10.2314 9.61004 10.2524 9.60247 10.2736C9.6011 10.2773 9.59973 10.281 9.59835 10.2847C9.58252 10.3274 9.56641 10.3708 9.54665 10.4132C9.44038 10.6687 9.30833 10.9231 9.17198 11.1614C8.97232 11.5146 8.77156 11.8249 8.63094 12.0246C8.6223 12.0375 8.61388 12.0498 8.60576 12.0617C8.59573 12.0764 8.58616 12.0904 8.57726 12.104C8.53325 12.1663 8.57832 12.2543 8.65455 12.2543H10.1403V13.4277H8.63737C8.23374 13.4277 7.86014 13.199 7.67979 12.8329C7.5864 12.6494 7.5499 12.4475 7.57138 12.25C7.57674 12.191 7.53272 12.1351 7.4726 12.1351H4.43667C4.38515 12.1351 4.34328 12.177 4.34328 12.2285V12.2908C4.34328 14.2274 5.90741 15.7969 7.83759 15.7969H13.2836C14.3044 15.7969 14.8841 14.8667 15.4539 13.9523C15.6127 13.6974 15.7707 13.4438 15.9373 13.2119C16.2369 12.7954 16.9572 12.4647 17.1676 12.3745C17.202 12.3595 17.2256 12.3252 17.2256 12.2865ZM5.15487 10.7521L5.1098 10.823C5.07007 10.8842 5.11407 10.9658 5.18924 10.9658H7.98468C8.01582 10.9658 8.04482 10.9507 8.06198 10.925C8.09848 10.8692 8.13284 10.8112 8.16396 10.7521C8.40551 10.3463 8.62022 9.90726 8.69859 9.58307C8.88217 8.79511 8.49031 7.52943 8.03623 6.51171C8.00616 6.44409 7.91277 6.43764 7.87304 6.49991L5.15487 10.7521Z"
                      fill="#F5F2EC"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="ml-3">
                <a
                  rel="noopener noreferrer"
                  href="https://discord.gg/KrDdaGhY7b"
                  target="_blank"
                  className="transition p-1.5 text-white flex items-center rounded-full bg-brown-500 hover:bg-black"
                >
                  <FaDiscord size={"1rem"} />
                </a>
              </li>
              <li className="ml-3">
                <a href="/" target="_blank" className="transition text-brown-500 hover:text-black">
                  <AiFillTwitterCircle size={"2rem"} />
                </a>
              </li>
              <li className="ml-3">
                <a
                  href="/"
                  className="transition p-1.5 text-white flex items-center rounded-full bg-brown-500 hover:bg-black"
                >
                  <BsInstagram size={"1rem"} />
                </a>
              </li>
              <li className="ml-3">
                <a
                  href="/"
                  className="transition p-1.5 text-white flex items-center rounded-full bg-brown-500 hover:bg-black"
                >
                  <FaLinkedinIn size={"1rem"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
