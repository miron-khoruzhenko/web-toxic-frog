import bg from '@/Footer/bg.png'

import x_icon from '@/Footer/social1.svg'
import tg_icon from '@/Footer/social2.svg'

const FooterElements1 = [
	{
		index: 0,
		title: 'Home',
		href: '/',
	},
	{
		index: 1,
		title: 'What is Toxin?',
		href: '/',
	},
	{
		index: 2,
		title: 'Features',
		href: '/',
	},
	{
		index: 3,
		title: 'Referral program',
		href: '/',
	},
	{
		index: 4,
		title: 'Study',
		href: '/',
	},
	{
		index: 5,
		title: 'Reviews',
		href: '/',
	}
]

const FooterElements2 = [
	{
		index: 0,
		title: 'Copy trading',
		href: '/',
	},
	{
		index: 1,
		title: 'Whales',
		href: '/',
	},
	{
		index: 2,
		title: 'Snipping',
		href: '/',
	},
	{
		index: 3,
		title: 'Portfolio',
		href: '/',
	}
]

const SocialElements = [
	{
		index: 0,
		title: 'Twitter',
		icon: x_icon,
		href: '/',
	},
	{
		index: 1,
		title: 'Telegram',
		icon: tg_icon,
		href: '/',
	}
]



const Footer = () => {
	return (
		<footer 
			className='w-full pt-[200px] pb-11 px-12 grid grid-cols-2 '
		style={{background: `url(${bg}) no-repeat center center / cover`}}
		>
			<div className="flex flex-col justify-center pb-[180px]">
				<h2 className="uppercase font-[Akira] text-[100px] green-text-gradient">TOXI</h2>
				<p className="text-[46px] font-semibold text-white leading-tight">BUILT BY <span className="green-text-gradient">DEGENS FOR <br /> DEGENS</span> </p>
			</div>

			<div className="flex flex-col justify-end">
				<div className="flex justify-between text-white font-['Helvetica'] text-[32px] font-bold mb-8">
					<span className="">Navigation</span>
					<span className="">Social</span>
				</div>

				<div className="flex justify-between">
					<ul className="space-y-3">
						{FooterElements1.map((item) => (
							<li key={item.index} className="">
								<a href={item.href} className="text-white/60 text-xl font-normal font-['Helvetica']">
									{item.title}
								</a>
							</li>
						))}
					</ul>
					<ul className="space-y-3 text-right">
						{FooterElements2.map((item) => (
							<li key={item.index} className="">
								<a href={item.href} className="text-white/60 text-xl font-normal font-['Helvetica']">
									{item.title}
								</a>
							</li>
						))}
					</ul>
					<ul className="space-y-2">
						{SocialElements.map((item) => (
							<li key={item.index} className="">
								<a href={item.href} className="text-white/60 text-xl font-normal font-['Helvetica']">
									<img src={item.icon} alt="" className="" />
								</a>
							</li>
						))}
									
					</ul>
				</div>
			</div>

			<div className="text-white flex justify-between w-full col-span-2 mt-[100px] font-['Helvatica'] text-[20px]">
				<a href="" className="">Privacy Policy</a>
				<a href="" className="">Terms</a>
				<a href="" className="">© 2024 TOXI. All Rights Reserved</a>
			</div>

		</footer>
	)
}

export default Footer