import HeroImg from '../assets/hero.png';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            instagram: 'https://www.instagram.com/iam_madhavan_/#',
            Github: 'https://github.com/Madavan17/',
            linkedin: 'www.linkedin.com/in/madhavan-sr'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Madhavan</span> 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><AiFillInstagram size={40} /></a>
                <a href={config.social.Github} className='pr-5 hover:text-white'><AiFillGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiFillLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
