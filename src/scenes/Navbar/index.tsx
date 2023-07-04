import { useState } from "react";
import {MenuIcon, XIcon } from '@heroicons/react/outline/';
import logo from '../../assets/Logo.png'
import Link from "./Link";
import { SelectedPage } from '../../shared/types.tsx';
import { useMediaQuery } from "../../hooks/useMediaQuery.ts";
import ActionButton from "../../shared/ActionButton.tsx";


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  isTopOfPage: Boolean;
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";


  return (
    <>
      <nav>

        <div className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6 `}>
            <div className={`${flexBetween} w-full gap-16 `}>
              {/* leftSide */}
              <img src={logo} alt="logo" />




              {/* RightSide */}
              {isAboveMediumScreens ? (<>
                <div className={`${flexBetween} w-full `}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}>Home</Link>
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}>Benefits</Link>
                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}>Our Classes</Link>
                    <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}>Contact</Link>

                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}
                    >Become a Member</ActionButton>
                  </div>
                </div>
              </>)

                :
                (
                  <>


                    <button
                      onClick={() => { setIsMenuToggled(!isMenuToggled) }}
                    >
                      <MenuIcon className="h-10 w-10 text-white bg-secondary-500 p-2 rounded-full text-2xl" />
                    </button>

                  </>
                )

              }


            </div>
          </div>



        </div>


        {/* Mobile Menu modal */}

        {
          !isAboveMediumScreens && isMenuToggled && (
            <>
              <div className="fixed right-0 z-40 bottom-0 h-full w-[300px] bg-primary-100 drop-shadow-lg">
                {/* close Icon  */}

                <div className="flex justify-end p-12 ">
                  <button onClick={() => { setIsMenuToggled(!isMenuToggled) }}>

                    <XIcon className="h-6 w-6 text-gray-400">

                    </XIcon>

                  </button>

                </div>

                {/* Menu items  */}
                <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}>Home</Link>
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}>Benefits</Link>
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}>Our Classes</Link>
                  <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}>Contact</Link>

                </div>

              </div>
            </>
          )
        }
      </nav >

    </>
  )
}

export default Navbar