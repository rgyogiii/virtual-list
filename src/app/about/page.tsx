/* eslint-disable @next/next/no-img-element */
export default function Page() {
  const stats = [
    { label: "New users annually", value: "20K" },
    { label: "Transactions", value: "2K+" },
    { label: "Total Product Sold", value: "1.5M+" },
  ];
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 sm_tablet:px-6 laptop:px-8 pb-16 pt-6 laptop:pt-14"
    >
      <div className="text-center">
        <div className="mx-auto max-w-2xl laptop:mx-0 laptop:grid laptop:max-w-none laptop:grid-cols-2 laptop:gap-x-16 laptop:gap-y-6 lg_laptop:grid-cols-1 lg_laptop:grid-rows-1 lg_laptop:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm_tablet:text-6xl laptop:col-span-2 lg_laptop:col-auto text-secondary text-start">
            Welcome to NexGenMarket, your ultimate destination for all your
            online shopping needs
          </h1>
          <div className="mt-6 max-w-xl laptop:mt-0 lg_laptop:col-end-1 lg_laptop:row-start-1">
            <p className="text-lg leading-8 text-tertiary text-start">
              We are a leading ecommerce platform dedicated to providing a
              seamless and exceptional shopping experience to our customers. At
              NexGenMarket, we believe in offering a diverse range of
              high-quality products, excellent customer service, and a
              user-friendly interface that makes online shopping a breeze.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
            alt="Team"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm_tablet:mt-16 laptop:mt-0 laptop:max-w-none lg_laptop:row-span-2 lg_laptop:row-end-2 lg_laptop:mt-36"
          />
        </div>
      </div>
      <div className="mt-12 pb-16">
        <div className="mx-auto max-w-2xl laptop:mx-0 laptop:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm_tablet:text-4xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 laptop:flex-row">
            <div className="laptop:w-full laptop:max-w-2xl laptop:flex-auto">
              <p className="text-xl leading-8 text-tertiary">
                At NexGenMarket, we prioritize providing our customers with the
                highest quality products. Our dedicated team meticulously
                selects suppliers and partners, ensuring rigorous quality checks
                for every item listed on our platform. From accurate product
                descriptions to transparent customer reviews, we strive to offer
                a seamless shopping experience that exceeds your expectations.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-tertiary">
                <p className="text-tertiary">
                  We are committed to promoting sustainability and ethical
                  practices. NexGenMarket offers a wide range of eco-friendly
                  and sustainable products, working closely with suppliers who
                  share our values. From fair trade items to environmentally
                  conscious packaging, we aim to reduce our ecological footprint
                  and contribute to a better future.
                </p>
                <p className="mt-10 text-tertiary">
                  In the rapidly evolving world of ecommerce, NexGenMarket stays
                  ahead of the curve. We embrace innovation, investing in
                  cutting-edge technology to enhance your shopping experience.
                  Our dedicated team continuously explores new features and
                  improvements, ensuring that our platform remains dynamic,
                  user-friendly, and tailored to meet your evolving needs.
                </p>
                <p className="mt-10 text-tertiary">
                  At NexGenMarket, we believe in giving back to our community.
                  Through philanthropic initiatives and partnerships with
                  charitable organizations, we strive to make a positive impact
                  on the lives of those in need. By shopping with us, you join
                  our mission to support and uplift communities globally.
                  Together, we can make a difference and build a brighter
                  future.
                </p>
              </div>
            </div>
            <div className="laptop:flex laptop:flex-auto laptop:justify-center">
              <dl className="w-64 space-y-8 lg_laptop:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-tertiary">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-secondary">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
