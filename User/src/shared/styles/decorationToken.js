const decorationToken = {
  section: {
    wrapper: "",
  },

  grid: `
    grid
    grid-cols-1
    md:grid-cols-3
    gap-5
  `,

  card: {
    wrapper: `
      cursor-pointer
      rounded-xl
      border
      overflow-hidden
      transition
      hover:shadow-lg
    `,

    selected: `
      border-emerald-500
      ring-2
      ring-emerald-200
    `,

    normal: `
      border-gray-200
    `,

    image: `
      h-40
      w-full
      object-cover
    `,

    content: `
      p-4
    `,

    title: `
      font-semibold
      text-gray-800
    `,

    description: `
      mt-2
      text-sm
      text-gray-500
    `,

    price: `
      mt-3
      font-medium
      text-gray-700
    `,
  },
};

export default decorationToken;