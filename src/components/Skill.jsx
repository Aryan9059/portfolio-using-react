import SkillCard from "./SkillCard";

const Skill = () => {
    const skillItem = [
        {
            imgSrc: '../../assets/skills/kotlin.png',
            label: 'Kotlin',
            desc: 'Programming Language',
            Color: "a97bff",
        },
        {
            imgSrc: '../../assets/skills/jc_icon.png',
            label: 'Jetpack Compose',
            desc: 'UI Framework',
            Color: "3ddc84"
        },
        {
            imgSrc: '../../assets/skills/java.png',
            label: 'Java',
            desc: 'For Android',
            Color: "b06304"
        },
        {
            imgSrc: '../../assets/skills/figma.png',
            label: 'Figma',
            desc: 'Design Tool',
            Color: "ff6347"
        },
        {
            imgSrc: '../../assets/skills/android.png',
            label: 'Android XML',
            desc: 'Markup Language',
            Color:"00bfff"
        },
        {
            imgSrc: '../../assets/skills/illustrator.png',
            label: 'Adobe Illustrator',
            desc: 'Graphics Design Tool',
            Color: "#b5b5f6"
        },
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2">
                    Tech Stack
                </h2>
                <p className="text-[#d8c2bb] mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high performing applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc, }, key) => (
                        <SkillCard
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            key={key}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
