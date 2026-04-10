import Image from "next/image";
export default function CategoryCard() {
  const categories = [
    {
      title: "Beauty & Well-Being",
      theme: {
        header: "bg-[#97e0c2]",
        iconWrap: "bg-[#5CC497]",
        body: "bg-[#eefbf6]",
        text: "text-black",
        dot: "bg-[#19C76A]",
      },
      items: [
        "African & Pacific Cuisine",
        "Bars & Cafes",
        "Chinese & Korean Cuisine",
        "European Cuisine",
        "General Restaurants",
        "Japanese Cuisine",
      ],
    },
    {
      title: "Home Services",
      theme: {
        header: "bg-[#17253f]",
        iconWrap: "bg-[#0E1F3B]",
        body: "bg-[#eff3f7]",
        text: "text-black",
        dot: "bg-[#1CCB6D]",
      },
      items: [
        "Cleaning Service Providers",
        "Craftsman",
        "House Services",
        "House Sitting & Security",
        "Moving & Storage",
        "Plumbing & Sanitation",
      ],
    },
    {
      title: "Shopping & Fashion",
      theme: {
        header: "bg-[#05442e]",
        iconWrap: "bg-[#004A32]",
        body: "bg-[#eefbf6]",
        text: "text-blck",
        dot: "bg-[#18C56A]",
      },
      items: [
        "Accessories",
        "Cultural Goods",
        "Clothing Rental & Repair",
        "Costumes Wedding",
        "Jewelry & Watches",
        "Malls & Marketplaces",
      ],
    },
    {
      title: "Business Services",
      theme: {
        header: "bg-[#97e0c2]",
        iconWrap: "bg-[#5CC497]",
        body: "bg-[#eefbf6]",
        text: "text-black",
        dot: "bg-[#19C76A]",
      },
      items: [
        "Administration & Services",
        "Associations & Centers",
        "HR & Recruiting",
        "IT & Communication",
        "Office Space & Supplies",
        "Sales & Marketing",
      ],
    },
    {
      title: "Sports",
      theme: {
        header: "bg-[#17253f]",
        iconWrap: "bg-[#0E1F3B]",
        body: "bg-[#eff3f7]",
        text: "text-black",
        dot: "bg-[#1CCB6D]",
      },
      items: [
        "Ball Games",
        "Bat-and-ball Games",
        "Bowl & Lawn Sports",
        "Dancing & Gymnastics",
        "Extreme Sports",
        "Ord & Ultimate",
      ],
    },
    {
      title: "Health Medical",
      theme: {
        header: "bg-[#05442e]",
        iconWrap: "bg-[#004A32]",
        body: "bg-[#eefbf6]",
        text: "text-blck",
        dot: "bg-[#18C56A]",
      },
      items: [
        "Clinics",
        "Dental Services",
        "Diagnostics & Testing",
        "Health Equipment",
        "Mental Health",
        "Physical Aids",
      ],
    },
    {
      title: "Animal & Pets",
      theme: {
        header: "bg-[#97e0c2]",
        iconWrap: "bg-[#5CC497]",
        body: "bg-[#eefbf6]",
        text: "text-black",
        dot: "bg-[#19C76A]",
      },
      items: [
        "Animal Health",
        "Animal Parks & Zoo",
        "Cats & Dogs",
        "Horses & Riding",
        "Pet Services",
        "Pet Stores",
      ],
    },
    {
      title: "Events & Entertainment",
      theme: {
        header: "bg-[#17253f]",
        iconWrap: "bg-[#0E1F3B]",
        body: "bg-[#eff3f7]",
        text: "text-black",
        dot: "bg-[#1CCB6D]",
      },
      items: [
        "Adult Entertainment",
        "Children's Entertainment",
        "Clubbing & Nightlife",
        "Gaming",
        "Museums & Exhibits",
        "Music & Movies",
      ],
    },
    {
      title: "Home & Garden",
      theme: {
        header: "bg-[#05442e]",
        iconWrap: "bg-[#004A32]",
        body: "bg-[#eefbf6]",
        text: "text-blck",
        dot: "bg-[#18C56A]",
      },
      items: [
        "Bathroom & Kitchen",
        "Cultural Goods",
        "Decoration & Interior",
        "Fabric & Stationery",
        "Furniture Store",
        "Garden & Pond",
      ],
    },
  ];

  return (
    <main className="">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="overflow-hidden   rounded-[14px]  bg-transparent shadow-none"
            >
              <div
                className={`flex h-[52px]  items-center gap-3 rounded-t-[14px] px-4 text-white ${category.theme.header}`}
              >
                <Image
                  src="/images/comwhite.svg"
                  alt="star"
                  color="white"
                  width={28}
                  height={28}
                  className="sm:w-6 sm:h-6  md:w-7 md:h-7"
                />

                <h2 className="text-[14px] font-semibold leading-none tracking-[-0.01em]">
                  {category.title}
                </h2>
              </div>

              <div className={`${category.theme.body}  rounded-b-[14px]`}>
                {category.items.map((item, index) => (
                  <div
                    key={item}
                    className={`flex h-[42px] items-center  px-4 ${
                      index !== category.items.length - 1
                        ? "border-b border-[#DDE7E3]"
                        : ""
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span
                        className={`h-[5px] w-[5px] flex-shrink-0 rounded-full ${category.theme.dot}`}
                      />
                      <span
                        className={`truncate text-[12.5px] font-medium ${category.theme.text}`}
                      >
                        {item}
                      </span>
                    </div>
                    <span className="ml-3  flex-shrink-0 text-[14px] text-[#17304C]">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       <div className="mt-5 flex flex-wrap items-center justify-center gap-3 mt-12 mb-22 text-[14px]">
  <button className="w-8 h-8 flex items-center justify-center text-[#98A2B3]">
    ‹
  </button>

  {[1, 2, 3, 4, 5].map((n) => (
    <button
      key={n}
      className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${
        n === 1
          ? "bg-[#00B57A] text-white"
          : "text-[#344054] hover:text-black"
      }`}
    >
      {n}
    </button>
  ))}

  <span className="text-[#98A2B3] px-1">...</span>

  <button className="w-8 h-8 flex items-center justify-center text-[#344054]">
    12
  </button>

  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F2F4F7] text-[#98A2B3]">
    ›
  </button>
</div>

    </main>
  );
}
