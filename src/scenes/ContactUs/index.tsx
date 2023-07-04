import { SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import { useForm } from 'react-hook-form';
import ContactUsGraphic from '../../assets/ContactUsPageGraphic.png';
import H1Text from "../../shared/H1Text";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;

}




const ContactUs = ({ setSelectedPage }: Props) => {

  const {
    register,
    trigger,
    formState: { errors }

  } = useForm()
  const onsubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <>

      <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">

        <motion.div onViewportEnter={() => {
          setSelectedPage(SelectedPage.ContactUs)
        }}>

          <motion.div className="w-3/5"
            initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }}>
            <H1Text>   <span className="text-primary-500 uppercase">Join Now {"  "}</span> TO GET IN SHAPE</H1Text>
            <p className="my-5">

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nulla similique enim suscipit. Sint officia eum eligendi suscipit ducimus blanditiis.

            </p>
          </motion.div>

          {/* form & image  */}

          <div className=" md:flex mt-10 justify-center gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }, }}
              className="mt-10 basis-3/5 md:mt-0"

            >

              <form
                action="https://formsubmit.co/your@email.com" target="_blank"
                onSubmit={onsubmit}
                method="POST"
              >
                <input type="text" placeholder="Your Name" className="w-full rounded-lg bg-primary-300 px-5 py-3 mb-5 placeholder-white" {...register("name", { required: true, maxLength: 100 })} id="" />

                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "this field is required *"}
                    {errors.name.type === "maxLength" && "Too long input - max length is 100 char."}
                  </p>
                )}
                <input type="email" className="w-full rounded-lg bg-primary-300 px-5 py-3 mb-5 placeholder-white" placeholder="email" {...register("email", { required: true, })}
                  id="" />

                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" && "this field is required *"}
                  </p>
                )}
                <textarea rows={4} cols={50} className="w-full rounded-lg bg-primary-300 mb-5 px-5 py-3 placeholder-white" placeholder="Message" {...register("message", { required: true, maxLength: 2000 })}
                  id="" />

                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" && "this field is required *"}
                    {errors.message.type === "maxLength" && "Too long input - max length is 2000 char."}

                  </p>
                )}

                <button className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 trasition duration-500 hover:text-white" type="submit">Send Message</button>

              </form>



            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }, }}


              className="relative mt-16 basis-2/5 md:mt-0">

              <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] ">
                <img className="w-full" src={ContactUsGraphic} alt="contactUs page graphic" />

              </div>
            </motion.div>

          </div>

        </motion.div>

      </section>

    </>)
}

export default ContactUs