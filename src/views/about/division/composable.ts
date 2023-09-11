import { ref } from 'vue'

export function useDivision() {
  const devisions = ref<any>([
    {
      id: 1,
      name: "Infrastruktura bo'limi",
      url: '/bolinmalar/infrastruktura.avif',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus?',
      path: '/about/division/infrastructure'
    },
    {
      id: 2,
      name: "Elektr energetika bo'limi",
      url: '/bolinmalar/elektr_energiya.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus?',
      path: '/about/division/energy'
    },
    {
      id: 3,
      name: "Tashish jarayonlarini avtomatlashtirish va axborotlashtirish bo'limi",
      url: '/bolinmalar/tashish_avtomat.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus?',
      path: '/about/division/auto-info'
    },
    {
      id: 4,
      name: "Harakat tarkibi bo'limi",
      url: '/bolinmalar/harakat_tarkibi.jpeg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus?',
      path: '/about/division/movement'
    },
    {
      id: 5,
      name: "Tashishni tashkil etish bo'limi",
      url: '/bolinmalar/tashishni_tashkil.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam voluptatum earum ullam et nihil doloremque, error soluta itaque deleniti ratione dolorem saepe neque vero quos nostrum possimus. Sapiente id velit nulla aut tenetur quaerat quia fugiat placeat eum? Praesentium aliquid tempora eaque voluptatem, eius quasi, nostrum, provident fugiat distinctio architecto quod beatae deserunt doloribus nulla numquam magnam quaerat. Quae perspiciatis earum laudantium deleniti eius minus aut, exercitationem reiciendis dolore, nisi dignissimos dolorem cumque tenetur suscipit nulla sint neque molestiae nostrum sunt repudiandae praesentium nobis error? Fugit itaque exercitationem repudiandae, officia aliquam ipsa dolorem. Odio doloribus eveniet, eius, soluta vitae magnam voluptas hic porro amet minus consequatur quam nemo ut dolore fuga quaerat quas est provident id dolorum sint! Possimus?',
      path: '/about/division/organization'
    }
  ])
  const bosses = ref<any>([
    {
      lavozim: "Infrastruktura bo'limi boshlig'i",
      url: '/images/user.jpg',
      name: 'Firstname Lastname',
      phone: '97-000-00-00',
      email: 'example@gmail.com'
    },
    {
      lavozim: "Infrastruktura bo'limi boshlig'i",
      url: '/images/user.jpg',
      name: 'Firstname Lastname',
      phone: '97-000-00-00',
      email: 'example@gmail.com'
    },
    {
      lavozim: "Infrastruktura bo'limi boshlig'i",
      url: '/images/user.jpg',
      name: 'Firstname Lastname',
      phone: '97-000-00-00',
      email: 'example@gmail.com'
    },
    {
      lavozim: "Infrastruktura bo'limi boshlig'i",
      url: '/images/user.jpg',
      name: 'Firstname Lastname',
      phone: '97-000-00-00',
      email: 'example@gmail.com'
    }
  ])
  return { devisions, bosses }
}
