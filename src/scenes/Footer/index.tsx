import logo from '../../assets/Logo.png'


type Props = {}

const Footer = ({ }: Props) => {
    return (
        <footer id="footer" className='w-full py-16 bg-primary-100 '>

            <div className="mx-auto w-5/6 justify-between items-center gap-16 md:flex">

                <div className='mt-16 basis-1/2 md:mt-0'>
                    <img src={logo} alt="logo" />
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eos repudiandae provident? Neque, quibusdam modi minus adipisci qui error iure?</p>
                    <p className=''>	&#169; All Rights Reserved - {"  "} <a href='mailto:bishoysfayez@gmail.com'>bishoysfayez@gmail.com</a></p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>
                        Links            
                    </h4>
                    <p className='my-5'>consectetur elit</p>
                    <p className='my-5'>Lorem, ipsum dolor. </p>
                    <p className='my-5'>amet consectetur. </p>


                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>
                        Contact Us                </h4>
                    <p className='my-5'>consectetur elit</p>
                    <p className='my-5'>(+12) 01223 34 4-443 </p>
                    <p className='my-5'>(+12) 01223 34 4-443 </p>

                </div>
            </div>




        </footer>

    )
}

export default Footer