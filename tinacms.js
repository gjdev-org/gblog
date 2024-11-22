module.exports = {
    content: {
      collections: {
        posts: {
          folder: '_posts', // Cambia il percorso della cartella dei post
          create: true,
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Date',
              name: 'date',
              widget: 'datetime',
            },
            // Aggiungi altri campi personalizzati se necessario
          ],
        },
      },
    },
  };
  