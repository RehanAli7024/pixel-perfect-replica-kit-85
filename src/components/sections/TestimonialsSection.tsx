import React from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      companyLogo: {
        icon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/636b83b0d951c0dfd9f4b17f5dde08892516ed31?placeholderIfAbsent=true",
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/a511410f94b6411ff6b4b186316cd4ebeb93a070?placeholderIfAbsent=true",
      },
      quote:
        "Untitled has been a lifesaver for our team—everything we need is right at our fingertips, and it helps us jump right into new design projects.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/64ffa19f46a3f126b4ccab54ba1197e9888225a1?placeholderIfAbsent=true",
      name: "Nikolas Gibbons",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/6127a344ff80df04be20adde7e03bd5bf5f42d16?placeholderIfAbsent=true",
      role: "Product Designer, Powersurge",
    },
    {
      id: 2,
      companyLogo: {
        icon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/2703fb8ea2dc4d587f4c2c7fd6a530f6e45a0290?placeholderIfAbsent=true",
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/1a16f88c425b062bc0cfd3483a41738cca61cd6f?placeholderIfAbsent=true",
      },
      quote:
        "We love Untitled! It's made the design process super streamlined.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/3a76c6c4081256c7de45309503c3507064008d56?placeholderIfAbsent=true",
      name: "Marco Kelly",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/8c20a3f51524965ab6cb2cbb648388c303b8f689?placeholderIfAbsent=true",
      role: "UI Designer, Railspeed",
    },
    {
      id: 3,
      companyLogo: {
        icon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/9ea6e9d5a9e6467a6f688b1cd50f24c5744a9ed8?placeholderIfAbsent=true",
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/f6b1fb1df025620157f9b176482919356fdea042?placeholderIfAbsent=true",
      },
      quote:
        "Starting projects used to feel daunting, but Untitled simplifies everything. We've used it for both small and large projects, and it never disappoints.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/f306e3a0809299d2fa1f8ac7a86882c68e8365d5?placeholderIfAbsent=true",
      name: "Zaid Schwartz",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/225c6f925fce019e7bcf9f957eba3e81db873438?placeholderIfAbsent=true",
      role: "Founder, Wildcrafted",
    },
    {
      id: 4,
      companyLogo: {
        icon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/a208f9fe2db316f822fb3960689aaab2a53b3090?placeholderIfAbsent=true",
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/1c326e071bdc4426818713098de17a14f5353989?placeholderIfAbsent=true",
      },
      quote:
        "Untitled is our secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/45ba6b1737dd502f60b1176c02e4bb1c0c2e357b?placeholderIfAbsent=true",
      name: "Ammar Foley",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/6248a97e12e89fbbc13118d710eeec2daaca3b5a?placeholderIfAbsent=true",
      role: "UX Designer, Goodwell",
    },
    {
      id: 5,
      companyLogo: {
        icon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/4d3b2079182c5c3b9b7ca46cd08954455721d881?placeholderIfAbsent=true",
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/ce00c703f83b4f1cd59dfd77e802e8e8d4974402?placeholderIfAbsent=true",
      },
      quote:
        "Untitled is hands down the best design library we've used. It has literally everything we need to get started for any possible project.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/9e9139aa85391630cb7b3062b436b9faa12334c1?placeholderIfAbsent=true",
      name: "Florence Shaw",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/ec20b77600490721ccac1f14dd699446ba542123?placeholderIfAbsent=true",
      role: "Web Designer, Quixotic",
    },
    {
      id: 6,
      companyLogo: {
        icon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/2819e589fb7c2372949e8810d0e869ed1d450031?placeholderIfAbsent=true",
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/b65e3c33c1ea54ba5c5b2789e97168ee3d80451f?placeholderIfAbsent=true",
      },
      quote:
        "With Untitled, we can focus more on design and less on the tedious setup work. Best money ever spent.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/306090822e1294d5350b38d3c6d7a110093c8f9e?placeholderIfAbsent=true",
      name: "Owen Garcia",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/8c33174fc87508c6a6782506e0521fc9a917928a?placeholderIfAbsent=true",
      role: "CTO, Solaris Energy",
    },
    {
      id: 7,
      companyLogo: {
        icon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/b7586ef9c26b317c208013e65d14b6a164453c15?placeholderIfAbsent=true",
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/25c916629fd51c01667b2f73d66cce652e27a6df?placeholderIfAbsent=true",
      },
      quote:
        "Our workflow has improved dramatically since we started using Untitled and it's become an integral part of our workflow. It's easy to use, and the resources are top-notch. I recommend it to everyone!",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/b77861f80fae4a78564b4306cbc8064e8373a61b?placeholderIfAbsent=true",
      name: "Mathilde Lewis",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/975e5678b3e53814eef21e87324fe9496c3dbf21?placeholderIfAbsent=true",
      role: "Project Lead, Stack3d Lab",
    },
    {
      id: 8,
      companyLogo: {
        icon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/fa8ebb17c90d90c1c489589650a01a2c81503628?placeholderIfAbsent=true",
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/365beed0406b55a4bbfdece187ab89065979348d?placeholderIfAbsent=true",
      },
      quote:
        "Untitled is an absolute game-changer for our projects. We can't imagine going back to how we used to work without it.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/2fca6a024f93761ff78c66f31d6cbbad06fad96f?placeholderIfAbsent=true",
      name: "Stefan Sears",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/2cd26be32ebb7fe39f3f2838b398010f01ddcd4c?placeholderIfAbsent=true",
      role: "UI/UX Designer, Mangolia",
    },
    {
      id: 9,
      companyLogo: {
        logomark: true,
        text: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/17359c5fa522ae5c1df6d78558ae2b7da5c95a76?placeholderIfAbsent=true",
      },
      quote:
        "Untitled has been a real time-saver for us. It's organized, efficient, and keeps us moving forward with every project.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/1fec43ac677e8b2f4e282ce83255490cc47eccd2?placeholderIfAbsent=true",
      name: "Harriet Rojas",
      verifiedIcon: "https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/ab77a6a0689a807f3f2891c250b8c7f46b35e7ad?placeholderIfAbsent=true",
      role: "Product Designer, Ikigai Labs",
    },
  ];

  return (
    <section
      className="bg-zinc-950 min-h-[997px] w-full overflow-hidden px-20 py-[62px] max-md:max-w-full max-md:px-5"
      aria-label="Testimonials"
      id="testimonials"
    >
      <div className="max-w-screen-xl w-full text-white text-center pr-[var(--container-padding-desktop,] pl-[var(--container-padding-desktop,] gap-8 pt-0 pb-[32px)] max-md:max-w-full max-md:px-5">
        <div className="items-center flex w-full flex-col gap-8 max-md:max-w-full">
          <div className="max-w-screen-md w-[768px] gap-5 max-md:max-w-full">
            <h2 className="text-4xl font-semibold leading-[44px] tracking-[-0.72px] max-md:max-w-full">
              Wall of Trust
            </h2>
            <p className="text-xl font-normal leading-[30px] mt-5 max-md:max-w-full">
              Hear first-hand from our incredible community of customers.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl w-full pr-[var(--container-padding-desktop,] pl-[var(--container-padding-desktop,] gap-8 mt-16 pt-0 pb-[32px)] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="w-full gap-10 max-md:max-w-full">
          <div className="flex w-full gap-8 flex-wrap max-md:max-w-full">
            <div className="min-w-60 gap-8 flex-1 shrink basis-[0%] pt-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
            <div className="min-w-60 gap-8 flex-1 shrink basis-[0%]">
              {testimonials.slice(3, 6).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
            <div className="min-w-60 gap-8 flex-1 shrink basis-[0%] pt-10">
              {testimonials.slice(6, 9).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
