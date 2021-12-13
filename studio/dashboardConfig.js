export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b7a961bc90000c2bebc76c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-57bmxb6p',
                  apiId: 'a07626a9-1479-4da1-b771-c3ad71c04cc2'
                },
                {
                  buildHookId: '61b7a9613b80ad0b74af8241',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-thky8kw9',
                  apiId: 'eb18f702-bf10-464f-97c7-d6ad5ec6a911'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vgmartinez/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-thky8kw9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
