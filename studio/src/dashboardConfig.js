export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f443d52080d4082e9896a67',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-i2ecawpr',
                  apiId: 'b424f37e-983d-4805-90c1-cb5030150a1f'
                },
                {
                  buildHookId: '5f443d53080d407623896e15',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-37o4p93d',
                  apiId: 'efddd81a-0ff7-4e79-babc-6e5213dee099'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattwelson/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-37o4p93d.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
