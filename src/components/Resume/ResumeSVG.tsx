import { useContext } from "react";
import { ResumeContext } from "../ResumeProvider";
import WrappedSVGText from "./WrappedSVGText";
import SvgText from "./SvgText";

const ResumeSVG = () => {
    const resume = useContext(ResumeContext);
    return <div style={{height: "80vh"}} ref={resume?.resumeRef}>
        <svg style={{
            height: "80vh",
            aspectRatio: "0.706",
            background: "white",
        }}
            viewBox="0 0 595 842" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="24" y="24" dominant-baseline="hanging" fill="black" font-size="40pt">{resume?.name}</text>
            <SvgText variant="body" x="24" y="80" text={resume!.headline} />
            <SvgText variant="heading" x="24" y="120" text="Expectation" />
            <WrappedSVGText x="24" y="140" font-size="9.5pt" fill="black" maxWidth={340} text={resume!.expectation} />
            <SvgText variant="heading" x="400" y="120" text="Contacts" />
            <SvgText variant="body" x="400" y="140" text={resume!.email} />
            <SvgText variant="body" x="400" y="160" text={resume!.phoneNumber} />
            <SvgText variant="heading" x="24" y="200" text="Academic Qualification" />
            <text x="24" y="220" dominantBaseline="hanging" fontSize="10pt" fill="black">
                {resume?.education.map((edu, index) => {
                    const start = edu.startDate.getFullYear();
                    const end = edu.endDate ? edu.endDate.getFullYear() : "Present";
                    return (
                        <tspan key={edu.id} x="24" dy={index === 0 ? 0 : "1.5em"}>
                            <tspan fontSize="10pt">
                                {edu.institution}
                            </tspan>
                            <tspan x="24" dy="1.3em" fontSize="9pt">
                                {edu.qualification}
                            </tspan>
                            <tspan x="24" dy="1.4em" fontSize="8pt" fill="gray">
                                {start} – {end}
                            </tspan>
                        </tspan>
                    )
                })}
            </text>
            <SvgText variant="heading" x="400" y="200" text="Date of Birth" />
            <SvgText
                variant="body"
                x="400"
                y="220"
                text={new Intl.DateTimeFormat("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })
                .format(resume!.dateOfBirth)
                } />
            <SvgText variant="heading" x="24" y="320" text="Professional Journey" />
            <text x="24" y="340" dominantBaseline="hanging" fontSize="10pt" fill="black">
                {resume?.experience.map((exp, index) => {
                    const start = exp.startDate.getFullYear();
                    const end = exp.endDate ? exp.endDate.getFullYear() : "Present";
                    return (
                        <tspan key={exp.id} x="24" dy={index === 0 ? 0 : "1.6em"}>
                            <tspan fontSize="10pt">
                                {exp.companyName}
                            </tspan>
                            <tspan x="24" dy="1.3em" fontSize="9pt">
                                {exp.designation}
                                <tspan x="24" dy="1.4em" fontSize="8pt" fill="gray">
                                    {start} – {end}
                                </tspan>
                            </tspan>
                            <WrappedSVGText as="tspan" x="24" dy="1.4em" maxWidth={340} text={exp.description} />
                        </tspan>
                    )
                })}
            </text>
            <SvgText variant="heading" x="400" y="250" text="Address" />
            <SvgText variant="subheading" x="400" y="270" text="Current Address" />
            <WrappedSVGText as="text" x="400" y="290" maxWidth={340} text={resume!.currentAddress} />
            <SvgText variant="subheading" x="400" y="310" text="Permanent Address" />
            <WrappedSVGText as="text" x="400" y="330" maxWidth={340} text={resume!.permanentAddress} />
            <SvgText variant="heading" x="400" y="360" text="Speaks" />
            <WrappedSVGText as="text" x="400" y="380" maxWidth={340} text={resume!.languages.join(", ")} />
            <SvgText variant="heading" x="400" y="410" text="Worked on" />
            <WrappedSVGText as="text" x="400" y="430" maxWidth={340} text={resume!.tags.join(", ")} />
            {/* <WrappedSVGText as="text" x="400" y="330" maxWidth={340} text={resume!.permanentAddress} /> */}
        </svg>
    </div>
}
export default ResumeSVG
