import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
       line: "My name is Madhavan, and I am currently pursuing a BSc in Computer Science at VIT Vellore. As a passionate front-end web developer, I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, React.js, and jQuery. I enjoy building responsive and dynamic web interfaces, focusing on delivering seamless user experiences. Constantly learning and refining my skills, I am eager to explore new technologies and contribute to innovative projects. With a solid foundation in front-end development, I aim to grow into a full-stack developer and make a meaningful impact in the tech industry."
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line}</p>
            </div>
        </div>
    </section>
}