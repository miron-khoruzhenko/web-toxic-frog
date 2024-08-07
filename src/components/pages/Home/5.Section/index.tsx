import Marquee from "react-fast-marquee";

import { firstLineReviews, secondLineReviews } from "./reviews_db";

import quote_symbol from '@/Section5/quote.svg'
import bg from '@/Section5/bg.jpg'
import ticket_img from '@/Section5/tickets.png'
import arrow_icon from '@/Section5/arrow.svg'

const Section5 = () => {
	return (
		<div
			className="pt-6 text-white"
			style={{
				background: `linear-gradient(180deg, rgba(7, 7, 7, .7) 0%, rgba(7, 7, 7, .7) 100%), url(${bg}) bottom no-repeat`,
				backgroundSize: 'cover',
			}}
		>
			<div className="flex ">
				<img src={ticket_img} alt="" className=" ml-14" />

				<div className="mt-[160px] pl-[40px]">
					<p className="font-[Helvetica] text-2xl text-left mb-[56px]">
						Couldn't figure it out? In your personal account, <br /> Toxi has compiled training guides for you on <br /> using the platform
					</p>

					<div className="flex items-center justify-center">

						<h3 className="uppercase font-[Akira] text-[80px] font-extrabold">
							Study
						</h3>
						<img src={arrow_icon} alt="" className="" />
					</div>

				</div>
			</div>
			<RewievMarquee />
		</div>
	)
}


const RewievMarquee = () => {
	return (
		<div className="">
			<h2 className="uppercase white-text-gradient font-extrabold text-[240px] opacity-20 font-[Akira] text-center">Reviews</h2>
			<div className="h-[360px] mb-6">
				<Marquee
					gradient={false}
					speed={40}
					pauseOnHover={true}
					pauseOnClick={true}
					direction="right"
				>
					{firstLineReviews.map((review) => (
						<RewievMarqueeBlock key={review.id} {...review} />
					))}
				</Marquee>
			</div>

			<div className="h-[360px]">
				<Marquee
					gradient={false}
					speed={40}
					pauseOnHover={true}
					pauseOnClick={true}
					direction="left"
				>
					{secondLineReviews.map((review) => (
						<RewievMarqueeBlock key={review.id} {...review} />
					))}
				</Marquee>
			</div>

		</div>
	)
}

const RewievMarqueeBlock = ({ name, prof, text, img, isQuote = false }: { name: string, prof: string, text: string, img: string, isQuote?: boolean }) => {
	return (
		<div className={`bg-[#27322F]/20 w-[392px] h-[360px] mr-5 rounded-[32px] py-[46px] px-6 text-white font-[Poppins] flex ${isQuote ? ' flex-col-reverse' : ' flex-col'} justify-start items-start gap-8 `}>

			<div className="flex gap-2 font-['M_PLUS_1']">
				<img src={img} alt="" className="" />
				<div className="">
					<h4 className="">{name}</h4>
					<h5 className="text-xs text-[#ADB2B1]">{prof}</h5>
				</div>
			</div>

			<p className="">"{text}"</p>

			{isQuote && <div className="p-4 bg-[#3D544D] rounded-full inline-block">
				<img src={quote_symbol} alt="" className="" />
			</div>}
		</div>
	)
}

export default Section5