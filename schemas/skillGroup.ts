export default {
  name: 'skillGroup',
  title: 'Skill group',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Title of skills group',
    },
    {
      title: 'Index',
      name: 'index',
      type: 'number',
      description: 'Index to sort groups',
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      description: 'Skills in group',
      of: [{type: 'reference', to: {type: 'skill'}}],
      validation: (Rule: {unique: () => any}) => Rule.unique(),
    },
  ],
}
