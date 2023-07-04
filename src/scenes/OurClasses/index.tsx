import { SelectedPage, Classes } from "../../shared/types"
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import { motion } from "framer-motion"
import H1Text from "../../shared/H1Text"
import Class from './Class.tsx'

type Props = { setSelectedPage: (value: SelectedPage) => void }

const classes = [

    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quae illo,ut, perspiciatis deserunt cum",
        image: image1

    },
    {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quae illo,ut, perspiciatis deserunt cum",
        image: image2

    },
    {
        name: "Dance Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quae illo,ut, perspiciatis deserunt cum",
        image: image3

    },
    {
        name: "Cardio Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quae illo,ut, perspiciatis deserunt cum",
        image: image4

    },
    {
        name: "Insanity Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quae illo,ut, perspiciatis deserunt cum",
        image: image5

    },
    {
        name: "Zumba Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quae illo,ut, perspiciatis deserunt cum",
        image: image6

    },
]

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <>

            <section id="ourClasses" className="w-full bg-primary-100 py-40">

                <motion.div
                    onViewportEnter={() => {
                        setSelectedPage(SelectedPage.ourClasses)
                    }}
                    className="w-5/6 mx-auto">

                    <motion.div


                        initial="hidden"
                        whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }}
                        className="mx-auto md:w-3/5">
                        <H1Text >Our Classes</H1Text>
                        <p className="py-5">we Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae illo,

                            ut, perspiciatis deserunt cum porro de quam magni nam?</p>
                    </motion.div>
                    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                        <ul className="w-[2800px] whitespace-nowrap">
                            {classes.map((item, index) => (

                                <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />

                            ))
                            }
                        </ul>

                    </div>
                </motion.div>


            </section>

        </>
    )
}

export default OurClasses