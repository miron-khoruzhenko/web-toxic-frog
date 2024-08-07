import logo from '@/Navbar/logo.svg'

const nav_items = [
	{
		index: 0,
		title: 'COPY TRADING',
		link: '/'
	},
	{
		index: 1,
		title: 'WHALES',
		link: '/whales'
	},
	{
		index: 2,
		title: 'SNIPPING',
		link: '/shipping'
	},
	{
		index: 3,
		title: 'PORTFOLIO',
		link: '/portfolio'
	},
]
const Navbar = () => {
	return (
		<nav className="absolute top-0 left-0 w-full px-10 py-7 z-10 flex justify-between items-center">
			<img src={logo} alt="" className="" />
			<ul className="flex justify-center items-center gap-10">
				{nav_items.map(item => (
					<li className="uppercase text-[22px] text-white font-semibold" key={item.index}>
						<a href="" className="">{item.title}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar