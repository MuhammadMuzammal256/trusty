import Image from "next/image"

export default function Footer({ className = "" }) {
  const quickLinks = [
    "About Us",
    "Contact us",
    "How it works",
    "Blog",
    "Categories",
  ]

  const communityLinks = [
    "Write a review",
    "Help Centre",
    "Log In",
    "Sign Up",
  ]

  const businessLinks = [
    "Own a business",
    "Products",
    "Plan & Pricing",
    "Business Login",
    "Blog for Business",
  ]

  const otherLinks = [
    "Legal",
    "Privacy Policy",
    "Terms & Condition",
    "Guidelines",
    "System Status",
  ]

  return (
    <footer className="mx-10 bg-white py-4 md:py-0">
      
      {/* Green Container */}
      <div className={`rounded-[25px] bg-[#9BDFC4] ${className}`}>
        
        {/* Centered Content */}
        <div className="mx-auto max-w-7xl px-10 py-10 md:py-9">
          
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_0.9fr] lg:gap-x-10">
            
            {/* LEFT SECTION */}
            <div>
              <Image
                src="/images/Logo.svg"
                alt="trusty logo"
                width={168}
                height={51}
                className="h-auto w-[168px]"
              />

              <p className="mt-5 max-w-[230px] text-[14px] leading-[24px] text-[#31435F]">
                Our vision is to become a global symbol of trust, empowering
                consumers to shop confidently.
              </p>

              <div className="mt-6">
                <h3 className="text-[18px] font-bold text-[#162544]">
                  Follow Us:
                </h3>

                <div className="mt-3 flex items-center gap-2.5">
                  <a href="#">
                    <img src="/images/fb.svg" alt="fb" className="h-[47px] w-[47px]" />
                  </a>
                  <a href="#">
                    <img src="/images/x.svg" alt="x" className="h-[47px] w-[47px]" />
                  </a>
                  <a href="#">
                    <img src="/images/insta.svg" alt="insta" className="h-[47px] w-[47px]" />
                  </a>
                  <a href="#">
                    <img src="/images/ln.svg" alt="linkedin" className="h-[47px] w-[47px]" />
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#162544]">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-[#31435F] hover:text-[#162544]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMMUNITY */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#162544]">
                Community
              </h3>
              <ul className="mt-4 space-y-3.5">
                {communityLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-[#31435F] hover:text-[#162544]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* BUSINESSES */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#162544]">
                Businesses
              </h3>
              <ul className="mt-4 space-y-3.5">
                {businessLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-[#31435F] hover:text-[#162544]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* OTHER LINKS */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#162544]">
                Other Links
              </h3>
              <ul className="mt-4 space-y-3.5">
                {otherLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-[#31435F] hover:text-[#162544]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-8 border-t border-[#85D0B3] pt-5 text-center">
            <p className="text-[16px] text-[#162544]">
              © Copyright 2024 All Right Reserved by Trusty Feedback
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}