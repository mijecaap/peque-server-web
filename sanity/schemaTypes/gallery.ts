import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galería',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().max(80).error('El título es requerido y no puede exceder 80 caracteres'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      description: 'Descripción breve de la galería',
      validation: (Rule) => Rule.max(300).error('La descripción no puede exceder 300 caracteres'),
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
              description: 'Importante para SEO y accesibilidad',
              validation: (Rule) => Rule.required().error('El texto alternativo es requerido'),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Pie de Foto',
              description: 'Descripción o contexto de la imagen',
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error('Debe haber al menos 1 imagen y no más de 50'),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Construcciones', value: 'construcciones'},
          {title: 'Eventos', value: 'eventos'},
          {title: 'Comunidad', value: 'comunidad'},
          {title: 'Mods y Recursos', value: 'mods'},
          {title: 'Screenshots', value: 'screenshots'},
          {title: 'Otros', value: 'otros'},
        ],
        layout: 'dropdown',
      },
      description: 'Opcional: Categoría para organizar las galerías',
    }),
    defineField({
      name: 'createdAt',
      title: 'Fecha de Creación',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('La fecha de creación es requerida'),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Destacada',
      type: 'boolean',
      description: 'Marcar si esta galería debe aparecer destacada',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'images.0',
      imageCount: 'images',
      category: 'category',
    },
    prepare(selection) {
      const {title, subtitle, media, imageCount, category} = selection
      const count = imageCount ? imageCount.length : 0
      return {
        title: title,
        subtitle: category
          ? `${category} • ${count} imagen${count !== 1 ? 'es' : ''}`
          : `${count} imagen${count !== 1 ? 'es' : ''}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Fecha de creación, más recientes',
      name: 'createdAtDesc',
      by: [{field: 'createdAt', direction: 'desc'}],
    },
    {
      title: 'Fecha de creación, más antiguas',
      name: 'createdAtAsc',
      by: [{field: 'createdAt', direction: 'asc'}],
    },
    {
      title: 'Título A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
})
