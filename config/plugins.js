module.exports = ({ env }) => ({
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          'home-post': {
            field: 'slug',
            references: 'title',
          },
        },
      },
    },
  });