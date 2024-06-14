import { logo,  github} from '../assets'


const Hero = () => {


    return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-4'>
            <img src={logo} alt='sumz_logo' className='w-[12rem] object-contain'/>

            <button
                type='button'
                onClick={() =>
                window.open("https://github.com/K1nDegardi", "_blank")
                }
                className='w-12'
            >
                <img
                    src={github}
                />
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Our service converts long articles into concise, easy-to-read summaries. Simply provide the article link and receive a brief summary.
        </h2>
        
    </header>
    )
}

export default Hero