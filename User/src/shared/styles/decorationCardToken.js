const decorationCardToken = {
  card: `
    cursor-pointer
    rounded-xl
    border
    overflow-hidden
    transition
    hover:shadow-lg
    bg-white
  `,

  selected: `
    border-emerald-500
    ring-2
    ring-emerald-200
  `,

  normal: `
    border-gray-200
  `,

  imageWrapper: `
    h-40
    w-full
    overflow-hidden
    bg-gray-100
  `,

  image: `
    h-full
    w-full
    object-cover
  `,

  noImage: `
    flex
    h-full
    items-center
    justify-center
    text-gray-400
    text-sm
  `,

  content: `
    p-4
  `,

  header: `
    flex
    items-center
    justify-between
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

  check: `
    flex
    h-6
    w-6
    items-center
    justify-center
    rounded-full
    bg-emerald-500
    text-white
  `,
};

export default decorationCardToken;