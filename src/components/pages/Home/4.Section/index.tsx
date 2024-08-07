import bg_element from '@/Section4/bg_element.png'

const Section4 = () => {
	return (
		<section className="pt-[182px] pb-[94px] px-[40px]">
			<div className="relative bg-green-grad pt-[170px] pb-[125px] text-center">
				<img src={bg_element} alt="" className="absolute top-0 right-0 -translate-y-1/3" />
				<h2 className="font-[Akira] text-[100px]">Referral Program</h2>
				<p className="text-[30px] font-bold font-['Helvetica'] mb-[100px]">WE VALUE OUR AND BELIEVE THE MOST ACTIVE ANES SHOULD BE REWARDED</p>
				<p className="text-[30px] font-normal font-['Helvetica'] leading-tight mb-[150px]">We provide 2 ways referral program where you earn a whopping 30% off <br /> the fees, and users get a 10% fee reduction.</p>
				<button className='uppercase text-[26px] px-20 pb-10 pt-11 bg-black font-black rounded-[10px] '>
					<span className="green-text-gradient">Generate a link</span>
				</button>
			</div>

		</section>
	)
}

export default Section4