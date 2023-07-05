import { SelectedPage } from "../../shared/types.tsx";
import { useMediaQuery } from "../../hooks/useMediaQuery.ts";
import ActionButton from "../../shared/ActionButton.tsx";
import HomePageText from '../../assets/HomePageText.png'
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import SponserRedBull from '../../assets/SponsorRedBull.png'
import SponsorForbes from '../../assets/SponsorForbes.png'
import SponsorFortune from '../../assets/SponsorFortune.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <>
            <section id="Home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">

                {/* image and main header */}

                <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 "
                onViewportEnter={()=>{
                    setSelectedPage(SelectedPage.Home)
                }}
                
                
                >
                    {/* main header */}
                    <div className="z-10 mt-32 md:basis-3/5 ">
                        {/* headings */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }}
                            className="md:-mt-20 ">

                            <div className="relative">
                                <div className="before:absolute before:-top-20 before:content-evolvetext before:-left-20 before:z-[-1]">
                                    <img src={HomePageText} alt="home-page-text" />

                                </div>
                            </div>
                            <p className="mt-8 text-sm "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aspernatur obcaecati dolorum consectetur commodi sit beatae non earum tenetur cumque veniam corrupti voluptate adipisci totam hic vel numquam eligendi, ex accusamus? Nihil, quod! Corporis, asperiores aliquid debitis accusamus laborum voluptatibus hic, optio ipsa id voluptates pariatur quod accusantium porro harum nostrum libero illo molestias ullam dignissimos reiciendis aspernatur quas rem autem vero? Dignissimos reiciendis explicabo omnis eveniet, harum voluptatum ea?

                            </p>
                        </motion.div>
                        {/* Action */}

                        <motion.div className="mt-8 flex items-center gap-8"
                        
                        initial="hidden"
                        whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }}
                        >
                            <ActionButton setSelectedPage={setSelectedPage}> Join Now</ActionButton>
                            <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                onClick={() => { setSelectedPage(SelectedPage.ContactUs) }}
                                href={`#${SelectedPage.ContactUs}`}>
                                <p>Learn More</p>

                            </AnchorLink>
                        </motion.div>
                    </div>
                    {/* Image */}

                    <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:justify-items-end">
                        <img src={HomePageGraphic} alt="home-page-text" />

                    </div>

                </motion.div>


            </section >
            {/* sponsers */}

            {isAboveMediumScreens && (
                <>
                    <div className="h-[150px] w-full bg-primary-100 py-10  ">
                        <div>
                            <div className="mx-auto w-5/6 ">
                                <div className="flex w-3/5 items-center justify-center gap-8">
                                    <img src={SponserRedBull} alt=""  />
                                    <img src={SponsorForbes} alt="" />
                                    <img src={SponsorFortune} alt=""  />
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </>)
}

export default Home;