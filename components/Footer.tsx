import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Image src="/images/msi_logo.png" alt="MSI Logo" width={120} height={60} className="mb-4" />
            <p className="text-sm">Empowering youth through Maths and Science education.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-red-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Main St, City, Country</p>
            <p className="mb-2">Phone: +27 43 726 2171</p>
            <p>Email: info@mathsandscienceinfinity.org.za</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                  <i className={`fab fa-${social} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          © {new Date().getFullYear()} Maths and Science Infinity. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

