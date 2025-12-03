import Link from 'next/link'
import React from 'react'

import { siteDetails } from '@/data/siteDetails'
import { footerDetails } from '@/data/footer'
import Image from 'next/image'

const Footer: React.FC = () => {
	return (
		<footer className="bg-hero-background text-foreground py-10">
			<div className="max-w-7xl w-full mx-auto flex justify-between">
				<div>
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/images/logobis.png"
							alt={`${siteDetails.siteName} logo`}
							width={25}
							height={40}
						/>

						<h3 className="manrope text-xl font-semibold cursor-pointer">
							{siteDetails.siteName}
						</h3>
					</Link>
					<p className="mt-3.5 text-foreground-accent">
						{footerDetails.subheading}
					</p>
				</div>

				<div>
					<h4 className="text-lg font-semibold mb-4">Contact Us</h4>

					{footerDetails.email && (
						<a
							href={`mailto:${footerDetails.email}`}
							className="block text-foreground-accent hover:text-foreground"
						>
							Email: {footerDetails.email}
						</a>
					)}

					{footerDetails.telephone && (
						<a
							href={`tel:${footerDetails.telephone}`}
							className="block text-foreground-accent hover:text-foreground"
						>
							Phone: {footerDetails.telephone}
						</a>
					)}
				</div>
			</div>
			<div className="mt-8 md:text-center text-foreground-accent px-6">
				<p>
					Copyright &copy; {new Date().getFullYear()}{' '}
					{siteDetails.siteName}. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
