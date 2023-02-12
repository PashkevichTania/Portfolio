export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of skill",
            type: "string",
        },
        {
            name: "level",
            title: "level",
            type: "string",
            description: "Level of a skill",
            initialValue: 'basic knowledge',
            options: {
                list: [
                    {title: "Basic knowledge", value: "Basic knowledge"},
                    {title: "Limited experience", value: "Limited experience"},
                    {title: "Competent", value: "Competent"},
                    {title: "Advanced", value: "Advanced"},
                    {title: "Expert", value: "Expert"},
                ],
            },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },

    ],
}
  