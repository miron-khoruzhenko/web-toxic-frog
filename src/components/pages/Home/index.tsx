import React from 'react'
import Hero from './1.Hero'
import Navbar from '@src/components/common/Navbar'
import BannerSection from './2.Banner'
import Section3 from './3.Section'
import Section4 from './4.Section'
import Footer from '@src/components/common/Footer'
import Section5 from './5.Section'

const Home = () => {
	return (
		<div>
			{/* <Navbar /> */}
			<Hero />
			<BannerSection />
			<Section3 />
			<Section4 />
			<Section5 />
			<Footer />
		</div>
	)
}

export default Home