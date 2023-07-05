
type Props = {
    name: string;
    description?: string; // optional 
    image: string;
}

const overlayStyles = `p-5 absolute z-10 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center  text-white opacity-0 transition duration-500 hover:opacity-90 `

const Class = ({ name, description, image }: Props) => {
    return (
        <>
            <li className='inline-block relative mx-5 h-[380px] w-[450px]'>

                <div className={overlayStyles}>
                    <p className='font-bold text-2xl'>
                        {name}
                    </p>
                    <p className='mt-5'>
                        {description}
                    </p>
                </div>
                <img src={image} alt={`${image}`} />

            </li>

        </>



    )
}

export default Class