require('dotenv').config()

module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_END_POINT
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-minimal',
      options: {
        // Theme options goes here
        services: {
          mailchimp: true
        }
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'BUILDITFAIR',
    name: 'BuildItFair',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'builditfair@gmail.com',
    phone: '+1 (888) 888-8888',
    siteUrl: "https://builditfair.com",
    //Site Social Media Links
    social: [
      {
        name: 'Linkedin',
        url: 'https://linkedin.com/company/builditfair'
      },

      {
        name: 'Instagram',
        url: 'https://instagram.com/builditfair'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          // {
          //   name: 'Advertise with us',
          //   slug: '/contact'
          // },
          {
            name: 'About Us',
            slug: '/contact'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
