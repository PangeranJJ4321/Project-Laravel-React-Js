import BenefitItem from "./benefit-content/BenefitItem";

const BenefitsContent = () => {
    const benefits = [
        { icon: "/assets/images/icons/security-user.svg", title: "Privacy-First Design", description: "We prioritize data security and user privacy." },
        { icon: "/assets/images/icons/group.svg", title: "Easy Move Access", description: "Seamless and efficient transitions between workspaces." },
        { icon: "/assets/images/icons/3dcube.svg", title: "Flexibility Spaces", description: "Adaptable spaces tailored for your business needs." },
        { icon: "/assets/images/icons/cup.svg", title: "Top-Rated Office", description: "High-quality office spaces with premium facilities." },
        { icon: "/assets/images/icons/coffee.svg", title: "Extra Snacks Available", description: "Enjoy complimentary snacks to boost productivity." },
        { icon: "/assets/images/icons/home-trend-up.svg", title: "Sustain for Business", description: "Designed to support long-term business growth." },
    ];

    return (
        <section id="Benefits" className="flex items-center justify-center w-[1015px] mx-auto gap-[100px] mt-[100px]">
            <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">We Might Good <br/>For Your Business</h2>
            <div className="grid grid-cols-2 gap-[30px]">
                {benefits.map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                ))}
            </div>
        </section>
    );
}

export default BenefitsContent;