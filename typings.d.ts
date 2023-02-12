interface SanityBody {
    _createdAt : string;
    _id : string;
    _rev : string;
    _updateAt : string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    telegram: string;
    profilePic: Image;
}

export interface SkillGroup extends SanityBody{
    _type: "group";
    title: string;
    frontEnd: Skill[];
    backEnd: Skill[];
    tools: Skill[];
    testing: Skill[];
}

export interface Skill extends SanityBody{
    _type: "skill";
    image: Image;
    level: string;
    title: string;
}

export interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Skill[];
}

export interface Project extends SanityBody{
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Skill[];
}



export interface CodeExample extends SanityBody {
    _type: "codeExample";
    code: string;
}