export default {
    name: "skillGroup",
    title: "Skill group",
    type: "document",
    fields: [
        {
            title: "Front-end",
            name: "frontEnd",
            type: "array",
            of : [{ type: "reference", to: { type: "skill"}}],
        },
        {
            title: "Back-end",
            name: "backEnd",
            type: "array",
            of : [{ type: "reference", to: { type: "skill"}}],
        },
        {
            title: "Tools",
            name: "tools",
            type: "array",
            of : [{ type: "reference", to: { type: "skill"}}],
        },
        {
            title: "Testing",
            name: "testing",
            type: "array",
            of : [{ type: "reference", to: { type: "skill"}}],
        },
    ],
}