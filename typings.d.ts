interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updateAt: string
}

export interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo"
  address: string
  backgroundInformation: string
  email: string
  role: string
  heroImage: Image
  name: string
  telegram: string
  profilePic: Image
  splineUrl: string
}

export interface SkillGroup extends SanityBody {
  _type: "group"
  title: string
  skills: Skill[]
}

export interface Skill extends SanityBody {
  _type: "skill"
  image: Image
  level: string
  title: string
}

export interface Experience extends SanityBody {
  _type: "experience"
  name: string
  companyImage: Image
  companyDescription: string
  dateStarted: date
  dateEnded: date
  isCurrentlyWorkingHere: boolean
  jobTitle: string
  technologies: Skill[]
}

export interface Project extends SanityBody {
  title: string
  _type: "project"
  image: Image
  summary: string
  isCommercial: boolean
  technologies: Skill[]
  responsibilities: string[]
  linkToBuild?: string
  linkToRepo?: string
}

export interface CodeExample extends SanityBody {
  _type: "codeExample"
  language: string
  code: string
}
