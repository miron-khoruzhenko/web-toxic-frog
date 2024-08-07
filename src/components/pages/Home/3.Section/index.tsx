import icon1 from '@/Section3/left.svg'
import icon2 from '@/Section3/right.svg'
import img from '@/Section3/main_img.png'

const Section3 = () => {
	return (
		<section className='text-center  text-white mt-[370px]'>
			<div className="flex  items-center justify-center mb-[120px]">
				<img src={icon1} alt="" className="self-start" />

				<div className="">
					<h2 className="font-black text-[46px] mb-[71px]">BUILT BY <span className="green-text-gradient">DEGENS FOR DEGENS</span></h2>
					<p className="text-[48px] font-['Helvetica'] leading-tight">Using the ultimate trading solutions and technologies we are able <br /> to provide the <span className="text-[#7C7C7C] "> fastest sniping and copy-trading experience you <br /> have ever had.</span></p>
				</div>

				<img src={icon2} alt="" className="self-end" />
			</div>

			<img src={img} alt="" className="" />
		</section>
	)
}

export default Section3