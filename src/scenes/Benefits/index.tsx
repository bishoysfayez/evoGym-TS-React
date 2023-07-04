import {
  UserGroupIcon,
  AcademicCapIcon
} from "@heroIcons/react/solid"
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png"
import { SelectedPage } from "../../shared/types.tsx"
import { motion } from "framer-motion"
import H1Text from "../../shared/H1Text"
import { BenefitType } from '../../shared/types.tsx'
import Benefit from "./Benefit.tsx"
import ActionButton from "../../shared/ActionButton.tsx"

type Props = { setSelectedPage: (value: SelectedPage) => void }

// benefits card contents
const benefits: Array<BenefitType> = [{

  icon: <UserGroupIcon className="h-6 w-6" />,
  title: "State of the Art Facilities",
  description: "perspiciatis deserunt cum porro deleniti tempore iste, cupiditate quas repellat ea necessitatibus modi t"

},
{

  icon: <UserGroupIcon className="h-6 w-6" />,
  title: "100's of Diverse Classes",
  description: "perspiciatis deserunt cum porro deleniti tempore iste, cupiditate quas repellat ea necessitatibus modi t"

},
{

  icon: <AcademicCapIcon className="h-6 w-6" />,
  title: "Expert & Pro Trainers",
  description: "perspiciatis deserunt cum porro deleniti tempore iste, cupiditate quas repellat ea necessitatibus modi t"

},




]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  },


}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <>
      <section id="benefits"
        className="mx-auto min-h-full w-5/6 py-20 "
      >

        <motion.div onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits)
        }}>
          {/* Header */}
          <motion.div


            initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }}
            className="md:my-5 md:w-3/5">
            <H1Text >More Than a gym</H1Text>
            <p className="my-5 text-sm">we Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae illo,

              ut, perspiciatis deserunt cum porro deleniti tempore iste, cupiditate quas repellat ea necessitatibus modi tempora praesentium quam magni nam?</p>
          </motion.div>

          {/* Benefits */}

          <motion.div className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            variants={container}


          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />

            )
            )
            }

          </motion.div>


          {/* graphics and description */}

          <motion.div

            initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }}
            className="mt-16 md:flex justify-center items-center gap-20 md:mt-16" >

            <img className="mx-auto" src={BenefitsPageGraphic} alt="" />

            {/* description */}


            <motion.div


              initial="hidden"
              whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }}

            >
              {/* title */}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                  <div>
                    <H1Text>  MILLIONS OF HAPPY MEMBERS GETTING {"   "}

                      <span className="text-primary-500">FIT</span>
                    </H1Text>
                  </div>

                </div>
              </div>
              {/* discription */}

              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, magnam reiciendis sequi pariatur illo tempore excepturi, eum, consequatur iure minima aut velit fugiat rem voluptates tempora fugit exercitationem molestiae? Iste.
              </p>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae repellat nemo impedit fugit, cupiditate enim quod inventore distinctio, dolorem culpa explicabo, sapiente delectus deserunt?</p>

              {/* btn */}

              <div className="relative mt-16">

                <div className="before:absolute before:content-sparkles before:z-[-1] before:right-40 before:-bottom-20 ">

                  <ActionButton setSelectedPage={setSelectedPage}> Join Now</ActionButton>
                </div>


              </div>




            </motion.div>

          </motion.div>





        </motion.div>



      </section>

    </>)
}


export default Benefits;