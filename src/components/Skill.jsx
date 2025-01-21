import SkillCard from "./SkillCard";

const Skill = () => {
    const skillItem = [
        {
            imgSrc: '../../assets/skills/kotlin_Icon.png',
            label: 'Kotlin',
            desc: 'Design tool',
            Color: "a97bff",
        },
        {
            imgSrc: '../../assets/skills/jc_icon.png',
            label: 'Jetpack Compose',
            desc: 'UI toolkit',
            Color: "3ddc84"
        },
        {
            imgSrc: '../../assets/skills/and_java.png',
            label: 'Android Java',
            desc: 'Programming Language',
            Color: "b06304"
        },
        {
            imgSrc: '../../assets/skills/figma.png',
            label: 'Figma',
            desc: 'Design tool',
            Color: "ff6347"
        },
        {
            imgSrc: '../../assets/skills/and_xml.png',
            label: 'Android XML',
            desc: 'UI layout tool',
            Color:"00bfff"
        },
        {
            imgSrc: '../../assets/skills/adobe_ill.png',
            label: 'Adobe Illustrator',
            desc: 'Design tool',
            Color: "#b5b5f6"
        },
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2">
                    Tech Stack
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
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
