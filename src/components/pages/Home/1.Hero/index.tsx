import bg_grad from '@/Hero/gradient.png'
import bg_frog from '@/Hero/bg_frog.png'
import tg_icon from '@/Hero/tg_icon.png'


import Navbar from '@src/components/common/Navbar'
const Hero = () => {
	return (
		<section
			className='min-h-screen w-full relative'
			style={{ background: `#000 url("${bg_grad}") no-repeat center center/cover` }}
		>
			<Navbar />
			<img src={bg_frog} alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3" />

			<p className="text-white absolute left-1/3 bottom-1/4 -translate-x-full translate-y-full" >
				Our <span className="green-text-gradient">unique product</span> offers a new approach to crypto trading <br /> and digital asset management, providing you with the tools <br /> to achieve <span className="green-text-gradient">maximum success</span>.
			</p>

			<button className="px-6 py-5 bg-green-grad rounded-full font-black absolute right-1/3 bottom-1/3 translate-x-full translate-y-full ">Launch Telegram Bot <img src={tg_icon} alt="tg_icon" className="inline ml-5" /></button>
		</section>
	)
}

export default Hero