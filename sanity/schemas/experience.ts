export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company name',
      type: 'string',
    },
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'companyDescription',
      title: 'CompanyDescription',
      type: 'text',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'isCurrentlyWorkingHere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
  ],
}
