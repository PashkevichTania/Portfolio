
export default{
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name:"name",
      title:"Name",
      type:"string",
    },
    {
      name:"role",
      title:"Role",
      type:"string",
    },
    {
      name:"heroImage",
      title:"Image",
      type:"image",
      options: {
        hotspot :{
          hotspot: true,
        },
      },
    },
    {
      name:"backgroundInformation",
      title:"backgroundInformation",
      type:"string",
    },
    {
      name:"profilePic",
      title:"ProfilePic",
      type:"image",
      options : {
        hotspot: true,
      },
    },
    {
      name: "telegram",
      title: "telegram",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    }
  ], 
}
